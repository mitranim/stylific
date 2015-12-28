/**
 * Source and documentation:
 *   https://github.com/Mitranim/stylific
 */

!function() {
'use strict';

// No-op if not running in a browser.
if (typeof window !== 'object' || !window) return;

/* global document, Element, HTMLElement, getComputedStyle, requestAnimationFrame, Promise */

/** ************************** Programmatic API ****************************/

/**
 * Methods exposed by stylific. Each method is equivalent to clicking an element
 * with a particular [data-sf-*] attribute.
 *
 * Each method accepts an optional callback, which is executed after finishing
 * all CSS transitions caused by the method. If the callback is omitted, and
 * if the global Promise constructor is available, each method returns a
 * promise that resolves when the transitions are complete.
 */
var exports = {
  /*
   * Note: explicit function names are required to prevent Babel from adding a
   * lot of unnecessary code. Each name must differ from the related function
   * used in the body of the method, or the method will recur indefinitely.
   */

  // Equivalent to a click on an element with `[data-sf-toggle-id]` pointing to
  // the given id.
  toggleId: function exportToggleId(id, done) {
    validateId(id);
    validateCallback(done);

    return wrapAction(done, function (callback) {
      toggleId(id, callback);
    });
  },

  // Equivalent to a click on the given element with `[data-sf-toggle]`.
  toggleElem: function exportToggleElem(elem, done) {
    validateElem(elem);
    validateCallback(done);

    return wrapAction(done, function (callback) {
      toggleElem(elem, callback);
    });
  },

  // Equivalent to a click on an element with `[data-sf-toggle-id]` that
  // successfully points to the given modal.
  openModal: function exportOpenModal(elem, done) {
    validateModal(elem);
    validateCallback(done);

    return wrapAction(done, function (callback) {
      openModal(elem, callback);
    });
  },

  // Equivalent to a click on the overlay or close button of the given modal.
  closeModal: function exportCloseModal(elem, done) {
    validateModal(elem);
    validateCallback(done);

    return wrapAction(done, function (callback) {
      closeModal(elem, callback);
    });
  },

  // Equivalent to pressing Esc.
  closeAllModals: function exportCloseAllModals(done) {
    var modals = [].slice.call(document.querySelectorAll('.sf-modal.active'));

    // Too bothersome to aggregate callbacks without promises.
    if (isFunction(done) || typeof Promise !== 'function') {
      modals.forEach(function (elem) {
        closeModal(elem);
      });
    } else {
      return Promise.all(modals.map(function (elem) {
        return new Promise(function (resolve) {
          closeModal(elem, resolve);
        });
      }));
    }
  }
};

// Export in a CommonJS environment, otherwise assign to window.
if (typeof module === 'object' && module !== null && typeof module.exports === 'object' && module.exports !== null) {
  module.exports = exports;
} else {
  window.stylific = exports;
}

/**
 * API utilities.
 */

function validateId(id) {
  if (typeof id !== 'string' || !id) {
    throw new Error('The id argument must be a string, got: ' + id);
  }
}

function validateElem(elem) {
  if (!(elem instanceof Element)) {
    throw new Error('Expected an element, got: ' + elem);
  }
}

function validateModal(elem) {
  validateElem(elem);
  if (!hasClass(elem, 'sf-modal')) {
    throw new Error('Expected element with .sf-modal class, received element with classes: ' + elem.className);
  }
}

function validateCallback(callback) {
  if (callback != null && !isFunction(callback)) {
    throw new Error('Expected the callback argument to be a function, got: ' + callback);
  }
}

// Wraps the given functions to use the callback API mode or the promise API
// mode, depending on the callback and the Promise availability.
function wrapAction(callback, action) {
  if (isFunction(callback) || typeof Promise !== 'function') {
    action(callback);
  } else {
    return new Promise(function (resolve) {
      action(resolve);
    });
  }
}

/** ***************************** Listeners ********************************/

/**
 * Click listeners.
 */

document.addEventListener('click', function (event) {
  var elem = event.target;
  if (!(elem instanceof HTMLElement)) return;

  // Explicit exception in our event handling: ignore the event if the element
  // or one of its ancestors has the [data-sf-noclick] attribute.
  if (hasAttr(elem, 'data-sf-noclick')) return;

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

  // Clicking .sf-modal always closes it.
  if (hasClass(elem, 'sf-modal')) {
    closeModal(elem);
    stopEvent(event);
    return;
  }

  // Check if the element or any ancestor is associated with a toggle
  // behaviour.
  do {
    // Stop the handler if the element or any of its ancestors is disabled.
    if (hasAttr(elem, 'disabled')) return;

    // Modal close button.
    if (hasAttr(elem, 'data-sf-close-modal')) {
      // Find a modal ancestor.
      var _parent = elem.parentElement;
      do {
        if (hasClass(_parent, 'sf-modal')) {
          closeModal(_parent);
          stopEvent(event);
          return;
        }
      } while (_parent = _parent.parentElement);
    }

    // Collapse toggle.
    if (hasClass(elem, 'sf-collapse-head')) {
      toggleElem(elem);
      stopEvent(event);
      return;
    }

    // Navbar toggle.
    if (hasClass(elem, 'sf-navbar-toggle')) {
      toggleElem(elem);
      stopEvent(event);
      return;
    }

    // data-sf-toggle hooks.
    if (hasAttr(elem, 'data-sf-toggle')) {
      toggleElem(elem);
      stopEvent(event);
      return;
    }
    if (hasAttr(elem, 'data-sf-toggle-siblings')) {
      toggleSiblings(elem);
      stopEvent(event);
      return;
    }
    if (hasAttr(elem, 'data-sf-toggle-id')) {
      toggleId(getAttr(elem, 'data-sf-toggle-id'));
      stopEvent(event);
      return;
    }

    if (hasClass(elem, 'sf-tab-head')) {
      // Find the actual tabset.
      var tabset = elem.parentElement;
      do {
        if (hasClass(tabset, 'sf-tabset')) break;
      } while (tabset = tabset.parentElement);

      if (tabset) {
        toggleSiblings(elem);

        // Activate a tab on the same index.
        var body = tabset.querySelector('.sf-tabset-body');
        if (body) {
          var tabs = body.querySelectorAll('.sf-tab-body');
          var tab = tabs[indexByType(elem)];
          if (tab) toggleSiblings(tab);
        }

        stopEvent(event);
        return;
      }
    }

    // Implicit exception in our event handling: ignore the event if the element
    // or one of its ancestors is a `<button>` without any stylific-specific
    // trigger attributes.
    //
    // The reason is that buttons are generally used for visible actions. If
    // stylific doesn't know what to do with a clicked button, it's very likely
    // that a listener from other code is waiting for it. We should give way.
    if (elem.tagName === 'BUTTON') return;
  } while (elem = elem.parentElement);
});

/**
 * Key listeners.
 */

// Closes modals on Esc.
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    [].slice.call(document.querySelectorAll('.sf-modal.active')).forEach(function (elem) {
      if (hasAttr(elem, 'data-sf-noclick')) return;
      stopEvent(event);
      closeModal(elem);
    });
  }
});

/**
 * Tooltip-related listeners.
 */

// [data-sf-tooltip][data-sf-trigger~=focus]  ->  show
document.addEventListener('focus', function (event) {
  var elem = event.target;
  if (elem instanceof HTMLElement) {
    var _parent2 = elem.parentElement;
    if (_parent2 && hasAttr(_parent2, 'data-sf-trigger') && ~getAttr(_parent2, 'data-sf-trigger').indexOf('focus')) {
      addClass(_parent2, 'sf-tooltip-visible');
    }
  }
}, true);

// [data-sf-tooltip][data-sf-trigger~=focus]  ->  hide
document.addEventListener('blur', function (event) {
  var elem = event.target;
  if (elem instanceof HTMLElement) {
    var _parent3 = elem.parentElement;
    if (_parent3 && hasAttr(_parent3, 'data-sf-trigger') && ~getAttr(_parent3, 'data-sf-trigger').indexOf('focus')) {
      removeClass(_parent3, 'sf-tooltip-visible');
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

// Shortcuts for better minification. Help shave off a few hundred bytes.
function hasAttr(elem, name) {
  return elem.hasAttribute(name);
}
function getAttr(elem, name) {
  return elem.getAttribute(name);
}
function setAttr(elem, name, value) {
  return elem.setAttribute(name, value);
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
function toggleClass(elem, name) {
  elem.classList.toggle(name);
}
function isFunction(value) {
  return typeof value === 'function';
}

// Barbaric way to completely stop an event. We use this because a user event,
// such as a mouse click, is generally expected to have no more than one visible
// effect. All stylific triggers have visible effects, and therefore, we should
// stop events from reaching other listeners. The stylific listener is
// document-level, so the only way is `stopImmediatePropagation`.
function stopEvent(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

function toggleElem(elem, done) {
  // If the given element is a template, assume it holds an `.sf-modal` that
  // should be clone-toggled.
  if (elem.tagName === 'TEMPLATE') {
    var id = hasAttr(elem, 'id') && getAttr(elem, 'id') || '';
    if (id) toggleModalCloneById(id, done);else if (isFunction(done)) done();
    return;
  }

  if (hasClass(elem, 'sf-modal')) {
    if (hasClass(elem, 'active')) closeModal(elem);else openModal(elem, done);
    return;
  }

  toggleClass(elem, 'active');
  runAfterTransitions(elem, done);
}

// No `done` arg because this is not exposed in the API.
function toggleSiblings(elem) {
  if (!elem.parentElement) return;
  [].slice.call(elem.parentElement.childNodes).forEach(function (child) {
    if (child instanceof HTMLElement) removeClass(child, 'active');
  });
  addClass(elem, 'active');
}

function toggleId(id, done) {
  var elem = document.getElementById(id);
  if (elem) toggleElem(elem, done);else if (isFunction(done)) done();
}

function openModal(elem, done) {
  // Add a close button if missing.
  var body = elem.querySelector('.sf-modal-body');
  if (body && !find(body.children, function (child) {
    return hasClass(child, 'sf-modal-close');
  })) {
    body.insertAdjacentHTML('afterBegin', '<button class="sf-modal-close" data-sf-close-modal></button>');
  }
  addClass(elem, 'active');
  runAfterTransitions(elem, done);
}

// Closes a modal. If it's a clone, destroys it after CSS transitions.
function closeModal(elem, done) {
  removeClass(elem, 'active');
  // Check attribute in advance in case third party code removes it during the
  // transition.
  var isClone = hasAttr(elem, 'data-sf-modal-clone');
  runAfterTransitions(elem, function (timestamp) {
    if (isClone) elem.remove();
    if (isFunction(done)) done(timestamp);
  });
}

function toggleModalCloneById(id, done) {
  // Try to find an existing clone and remove it.
  var clone = document.querySelector('.sf-modal[data-sf-modal-clone="' + id + '"]');
  if (clone) {
    return closeModal(clone, done);
  }

  // Create a clone and display it.
  var elem = document.getElementById(id);
  if (elem) {
    var _ret = (function () {
      var original = elem;

      // The element may optionally be a <template> tag. In this case, its first
      // child element will be cloned. The child is expected to be an `.sf-modal`.
      if (elem.tagName === 'TEMPLATE') {
        original = firstElementChild(elem.content || elem);
      }

      if (!original || !hasClass(original, 'sf-modal')) {
        if (isFunction(done)) done();
        return {
          v: undefined
        };
      }

      var clone = original.cloneNode(true);

      // This attribute serves for lookup when toggling this off.
      setAttr(clone, 'data-sf-modal-clone', id);
      clone.removeAttribute('id');

      elem.parentElement.insertBefore(clone, elem.nextSibling);

      // Hook for external DOM manipulation code.
      clone.dispatchEvent(createEvent('sf:dom:add'));

      // Display in a different frame to give other code a chance to modify
      // the element.
      requestAnimationFrame(function () {
        openModal(clone, done);
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

// Workaround for the lack of `DocumentFragment#firstElementChild` support in IE.
function firstElementChild(node) {
  return find(node.childNodes, function (child) {
    return child instanceof Element;
  }) || null;
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

// IE compat: in order to dispatch an event on `document` (and possibly on some
// other elements), the event has to be created with `createEvent` and not
// through a constructor. In case you didn't know, IE SUCKS.
function createEvent(name) {
  var event = document.createEvent('Event');
  event.initEvent(name, true, true);
  return event;
}

// Runs the given callback after a period sufficient to run normal CSS
// transitions on the given element.
function runAfterTransitions(elem, callback) {
  if (!isFunction(callback)) return;

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

}();