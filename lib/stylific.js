!function() {
  'use strict';

  if (typeof document !== 'object' || !document) return;

  document.addEventListener('click', function(event) {
    if (event.target instanceof HTMLElement) {
      var elem = event.target;
      if (hasAttr(elem, 'disabled')) return;

      // sf-toggle hooks.
      if (hasAttr(elem, 'sf-toggle')) {
        toggleElem(elem);
      } else if (hasAttr(elem, 'sf-toggle-siblings')) {
        toggleSiblings(elem);
      } else if (hasAttr(elem, 'sf-toggle-id')) {
        toggleId(getAttr(elem, 'sf-toggle-id'));
      }

      // Clicking sf-modal always closes it.
      else if (hasAttr(elem, 'sf-modal')) {
        elem.classList.remove('active');
      }

      else {
        // Look for a <label> parent.
        do {
          if (elem.tagName === 'LABEL') break;
          if (!elem.parentElement) return;
        } while (elem = elem.parentElement);

        // Intentionally omitting [sf-dropdown] (which requires [sf-toggle]).
        ['sf-collapse', 'sf-navbar'].forEach(function(name) {
          if (hasAttr(elem.parentElement, name)) toggleElem(elem);
        });

        if (hasAttr(elem.parentElement, 'sf-tabset-head')) {
          var tabset = elem.parentElement.parentElement;
          if (hasAttr(tabset, 'sf-tabset')) {
            toggleSiblings(elem);
            // Activate a tab on the same index.
            var body = tabset.querySelector('[sf-tabset-body]');
            if (body) {
              var tabs = [].filter.call(body.childNodes, function(node) {
                return hasAttr(node, 'sf-tab');
              });
              var tab = tabs[indexByType(elem)];
              if (tab) toggleSiblings(tab);
            }
          }
        }
      }
    }
  });

  function toggleElem(elem) {
    elem.classList.toggle('active');
  }

  function toggleSiblings(elem) {
    if (!elem.parentElement) return;
    [].slice.call(elem.parentElement.childNodes).forEach(function(child) {
      if (child instanceof HTMLElement) child.classList.remove('active');
    });
    elem.classList.add('active');
  }

  function toggleId(id) {
    var elem = document.getElementById(id);
    if (elem) toggleElem(elem);
  }

  function hasAttr(elem, name) {
    return elem instanceof HTMLElement && elem.hasAttribute(name);
  }

  function getAttr(elem, name) {
    return elem instanceof HTMLElement ? elem.getAttribute(name) : '';
  }

  function indexByType(elem) {
    if (!elem.parentNode) return -1;
    return [].filter.call(elem.parentNode.childNodes, function(node) {
      return node instanceof Element && node.tagName === elem.tagName;
    }).indexOf(elem);
  }

  // [sf-tooltip][sf-trigger~=focus]  ->  show
  document.addEventListener('focus', function(event) {
    var elem = event.target.parentElement;
    if (~getAttr(elem, 'sf-trigger').indexOf('focus')) {
      elem.setAttribute('sf-tooltip-show', '');
    }
  }, true);

  // [sf-tooltip][sf-trigger~=focus]  ->  hide
  document.addEventListener('blur', function(event) {
    var elem = event.target.parentElement;
    if (~getAttr(elem, 'sf-trigger').indexOf('focus')) {
      elem.removeAttribute('sf-tooltip-show');
    }
  }, true);

  // Prevents scroll from spilling outside certain elements.
  document.addEventListener('wheel', function(event) {
    var elem = event.target;
    do {
      if (shouldPreventScrollSpill(elem, event)) {
        event.preventDefault();
        return;
      }
    } while (elem = elem.parentElement);
  });

  // Checks if the element satisfies our criteria for preventing vertical
  // scroll from spilling. The conditions are:
  //   1) always stop for [sf-no-scroll-spill] and [sf-modal]
  //   2) stop certain other elements if they're not fully visible and have
  //      reached the terminus.
  function shouldPreventScrollSpill(elem, event) {
    if (!(elem instanceof HTMLElement)) return false;
    if (hasAttr(elem, 'sf-no-scroll-spill') || hasAttr(elem, 'sf-modal')) {
      return true;
    }
    if (hasAttr(elem, 'sf-tabset-body')) {
      var parent = elem.parentElement;
      if (~getAttr(parent, 'sf-tabset').indexOf('fixed')) {
        return shouldStopWheelEvent(elem, event);
      }
    }
  }

  function shouldStopWheelEvent(elem, event) {
    if (elem.scrollHeight === elem.offsetHeight) return false;
    if (event.deltaY < 0 && atTop(elem) || event.deltaY > 0 && atBottom(elem)) {
      return true;
    }
  }

  // Checks if the element is scrolled to the top. Pixel measurements are
  // inaccurate when the browser is zoomed in or out, so we consider that we've
  // hit the top if the difference is within 3px.
  function atTop(elem) {
    return elem.scrollTop < 3;
  }

  // Checks if the element is scrolled to the bottom. Pixel measurements are
  // inaccurate when the browser is zoomed in or out, so we consider that we've
  // hit the bottom if the difference is within 3px.
  function atBottom(elem) {
    var delta = elem.scrollHeight - elem.scrollTop - elem.offsetHeight;
    return Math.abs(delta) < 3;
  }
}();
