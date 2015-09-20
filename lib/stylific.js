/* global Element, HTMLElement, getComputedStyle, requestAnimationFrame */

/*
 * style per http://standardjs.com
 */

;(function () {
  'use strict';

  if (typeof document !== 'object' || !document) return;

  /** ***************************** Listeners ********************************/

  /**
   * Click listeners.
   */
  document.addEventListener('click', function (event) {
    var elem = event.target;
    if (!(elem instanceof HTMLElement)) return;

    // Ignore events coming from labels associated with inputs. In associated
    // pairs, the label event must finish its lifecycle without a
    // `preventDefault()` call; then the input event is spawned. Handling it the
    // usual way would often trigger interactions twice on a single click. Thus
    // we must ignore it.
    if (elem.tagName === 'LABEL' && (hasAttr(elem, 'for') && !!document.getElementById(getAttr(elem, 'for')) || !!elem.querySelector('input,textarea,button,select'))) {
      return;
    }

    // Ignore direct clicks on inputs. This protects us from inadvertent side
    // effects of the user focusing text inputs or toggling checkboxes in
    // elements enclosed into large click targets that have stylific trigger
    // behaviour associated with them.
    if (elem.tagName === 'INPUT' && elem.type !== 'button' || elem.tagName === 'TEXTAREA' || elem.tagName === 'SELECT') {
      return;
    }

    // Check if the element or any ancestor is associated with a toggle
    // behaviour.
    var cursor = elem;
    do {
      // Stop the handler if the element or any of its ancestors is disabled.
      if (hasAttr(cursor, 'disabled')) return;

      // Modal close button.
      if (hasClass(elem, 'sf-modal-close') && hasClass(cursor, 'sf-modal')) {
        closeModal(cursor);
        return;
      }

      // data-sf-toggle hooks.
      if (hasAttr(cursor, 'data-sf-clone-modal')) {
        toggleModalCloneById(getAttr(cursor, 'data-sf-clone-modal'));
        return;
      }
      if (hasAttr(cursor, 'data-sf-toggle')) {
        toggleElem(cursor);
        return;
      }
      if (hasAttr(cursor, 'data-sf-toggle-siblings')) {
        toggleSiblings(cursor);
        return;
      }
      if (hasAttr(cursor, 'data-sf-toggle-id')) {
        toggleId(getAttr(cursor, 'data-sf-toggle-id'));
        return;
      }
    } while (cursor = cursor.parentElement);

    // Clicking .sf-modal always closes it.
    if (hasClass(elem, 'sf-modal')) {
      closeModal(elem);
      return;
    }

    // Look for a <label> ancestor.
    do {
      if (elem.tagName === 'LABEL') break;
      if (!elem.parentElement) return;
    } while (elem = elem.parentElement);

    var parent = elem.parentElement;

    // Intentionally omitting .sf-dropdown (which requires [data-sf-toggle]).
    if (hasClass(parent, 'sf-collapse')) {
      toggleElem(elem);
      return;
    }
    if (hasClass(parent, 'sf-navbar')) {
      toggleElem(elem);
      return;
    }

    if (hasClass(parent, 'sf-tabset-head')) {
      var tabset = parent.parentElement;
      if (hasClass(tabset, 'sf-tabset')) {
        toggleSiblings(elem);
        // Activate a tab on the same index.
        var body = find(tabset.childNodes, function (node) {
          return node instanceof HTMLElement && hasClass(node, 'sf-tabset-body');
        });
        if (body) {
          var tabs = [].filter.call(body.childNodes, function (node) {
            return node instanceof HTMLElement && hasClass(node, 'sf-tab');
          });
          var tab = tabs[indexByType(elem)];
          if (tab) toggleSiblings(tab);
        }
      }
    }
  });

  /**
   * Key listeners.
   */
  document.addEventListener('keydown', function (event) {
    // Close modals on Esc.
    if (event.keyCode === 27) {
      [].slice.call(document.querySelectorAll('.sf-modal')).forEach(closeModal);
    }
  });

  /**
   * Tooltip-related listeners.
   */
  // [data-sf-tooltip][data-sf-trigger~=focus]  ->  show
  document.addEventListener('focus', function (event) {
    var elem = event.target;
    if (elem instanceof HTMLElement) {
      var _parent = elem.parentElement;
      if (_parent && hasAttr(_parent, 'data-sf-trigger') && ~getAttr(_parent, 'data-sf-trigger').indexOf('focus')) {
        addClass(_parent, 'sf-tooltip-visible');
      }
    }
  }, true);

  // [data-sf-tooltip][data-sf-trigger~=focus]  ->  hide
  document.addEventListener('blur', function (event) {
    var elem = event.target;
    if (elem instanceof HTMLElement) {
      var _parent2 = elem.parentElement;
      if (_parent2 && hasAttr(_parent2, 'data-sf-trigger') && ~getAttr(_parent2, 'data-sf-trigger').indexOf('focus')) {
        removeClass(_parent2, 'sf-tooltip-visible');
      }
    }
  }, true);

  /**
   * Scroll-related listeners.
   */
  // Prevents scroll from spilling outside certain elements.
  document.addEventListener('wheel', function (event) {
    var elem = event.target;
    if (!(elem instanceof HTMLElement)) return;
    do {
      if (shouldPreventScrollSpill(elem, event)) {
        event.preventDefault();
        return;
      }
    } while (elem = elem.parentElement);
  });

  /** ****************************** Utilities *******************************/

  function toggleElem(elem) {
    if (hasClass(elem, 'sf-modal')) {
      if (hasClass(elem, 'active')) closeModal(elem);else openModal(elem);
    } else {
      elem.classList.toggle('active');
    }
  }

  function toggleSiblings(elem) {
    if (!elem.parentElement) return;
    [].slice.call(elem.parentElement.childNodes).forEach(function (child) {
      if (child instanceof HTMLElement) removeClass(child, 'active');
    });
    addClass(elem, 'active');
  }

  function toggleId(id) {
    var elem = document.getElementById(id);
    if (elem) toggleElem(elem);
  }

  // Shortcuts for better minification.
  function hasAttr(elem, name) {
    return elem.hasAttribute(name);
  }
  function getAttr(elem, name) {
    return elem.getAttribute(name);
  }
  function hasClass(elem, name) {
    return elem.classList.contains(name);
  }
  function addClass(elem, name) {
    elem.classList.add(name);
  }
  function removeClass(elem, name) {
    elem.classList.remove(name);
  }

  function openModal(elem) {
    // Add a close button if missing.
    var body = elem.querySelector('.sf-modal-body');
    if (body && !find(body.children, function (child) {
      return hasClass(child, 'sf-modal-close');
    })) {
      var button = document.createElement('button');
      addClass(button, 'sf-modal-close');
      body.insertBefore(button, body.firstChild);
    }
    addClass(elem, 'active');
  }

  // Closes a modal. If it's a clone, destroys it after CSS transitions.
  function closeModal(elem) {
    removeClass(elem, 'active');
    if (elem.hasAttribute('data-sf-modal-clone')) {
      runAfterTransitions(elem, function () {
        elem.remove();
      });
    }
  }

  function toggleModalCloneById(id) {
    // Try to find an existing clone and remove it.
    var clone = document.querySelector('.sf-modal[data-sf-modal-clone="' + id + '"]');
    if (clone) {
      closeModal(clone);
      return;
    }

    // Create a clone and display it.
    var elem = document.getElementById(id);
    if (elem) {
      var _ret = (function () {
        var original = elem;
        // The element may optionally be a <template> tag. In this case, its first
        // child element will be cloned.
        if (elem.tagName === 'TEMPLATE') {
          original = (elem.content || elem).firstElementChild;
        }
        if (!original) return {
            v: undefined
          };
        var clone = original.cloneNode(true);

        // This attribute serves for lookup when toggling this off.
        clone.setAttribute('data-sf-modal-clone', clone.id);
        clone.removeAttribute('id');

        elem.parentElement.insertBefore(clone, elem.nextSibling);
        // Hook for external DOM manipulation code.
        clone.dispatchEvent(createEvent('sf:dom:add'));
        // Display in a different frame to give other code a chance to modify
        // the element.
        requestAnimationFrame(function () {
          openModal(clone);
        });
      })();

      if (typeof _ret === 'object') return _ret.v;
    }
  }

  function indexByType(elem) {
    if (!elem.parentNode) return -1;
    return [].filter.call(elem.parentNode.childNodes, function (node) {
      return node instanceof Element && node.tagName === elem.tagName;
    }).indexOf(elem);
  }

  function find(iterable, iterator) {
    for (var i = 0, ii = iterable.length; i < ii; ++i) {
      if (iterator(iterable[i], i)) return iterable[i];
    }
  }

  // Checks if the element is in our list of elements whose vertical scroll
  // shouldn't "spill" into the outer DOM.
  function shouldPreventScrollSpill(elem, event) {
    if (!(elem instanceof HTMLElement)) return false;
    if (hasAttr(elem, 'data-sf-no-scroll-spill') || hasClass(elem, 'sf-modal') || hasClass(elem, 'sf-tabset-body') && hasClass(elem.parentElement, 'sf-tabset-fixed')) {
      return reachedScrollTerminus(elem, event);
    }
  }

  function reachedScrollTerminus(elem, event) {
    if (event.deltaY < 0 && reachedTop(elem) || event.deltaY > 0 && reachedBottom(elem)) {
      return true;
    }
  }

  // Checks if the element is scrolled to the top. Pixel measurements are
  // inaccurate when the browser is zoomed in or out, so we consider that we've
  // hit the top if the difference is within 3px.
  function reachedTop(elem) {
    return elem.scrollTop < 3;
  }

  // Checks if the element is scrolled to the bottom. Pixel measurements are
  // inaccurate when the browser is zoomed in or out, so we consider that we've
  // hit the bottom if the difference is within 3px.
  function reachedBottom(elem) {
    var delta = elem.scrollHeight - elem.scrollTop - elem.offsetHeight;
    return Math.abs(delta) < 3;
  }

  // IE compat: IE doesn't support dispatching events created with constructors,
  // at least not for all types of nodes.
  function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
  }

  // Runs the given callback after a period sufficient to run normal CSS
  // transitions on the given element.
  function runAfterTransitions(elem, callback) {
    var _getComputedStyle = getComputedStyle(elem);

    var duration = _getComputedStyle.transitionDuration;
    var properties = _getComputedStyle.transitionProperty;

    var n = ~duration.indexOf('s') && properties ? parseFloat(duration) : 0;

    if (n) {
      setTimeout(function () {
        requestAnimationFrame(callback);
      }, n * 1000);
    } else requestAnimationFrame(callback);
  }
})();