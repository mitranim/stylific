!function() {
  'use strict';

  if (typeof document !== 'object' || !document) return;

  document.addEventListener('click', function(event) {
    var elem = event.target;
    if (!(elem instanceof HTMLElement) || hasAttr(elem, 'disabled')) return;

    // data-sf-toggle hooks.
    if (hasAttr(elem, 'data-sf-toggle')) {
      toggleElem(elem);
    } else if (hasAttr(elem, 'data-sf-toggle-siblings')) {
      toggleSiblings(elem);
    } else if (hasAttr(elem, 'data-sf-toggle-id')) {
      toggleId(getAttr(elem, 'data-sf-toggle-id'));
    }

    // Clicking sf-modal always closes it.
    else if (hasClass(elem, 'sf-modal')) {
      elem.classList.remove('active');
    }

    else {
      // Look for a <label> parent.
      do {
        if (elem.tagName === 'LABEL') break;
        if (!elem.parentElement) return;
      } while (elem = elem.parentElement);

      var parent = elem.parentElement;

      // Intentionally omitting .sf-dropdown (which requires [data-sf-toggle]).
      if (hasClass(parent, 'sf-collapse')) toggleElem(elem);
      else if (hasClass(parent, 'sf-navbar')) toggleElem(elem);

      else if (hasClass(parent, 'sf-tabset-head')) {
        var tabset = parent.parentElement;
        if (hasClass(tabset, 'sf-tabset')) {
          toggleSiblings(elem);
          // Activate a tab on the same index.
          var body = find(tabset.childNodes, function(node) {
            return node instanceof HTMLElement && hasClass(node, 'sf-tabset-body');
          });
          if (body) {
            var tabs = [].filter.call(body.childNodes, function(node) {
              return node instanceof HTMLElement && hasClass(node, 'sf-tab');
            });
            var tab = tabs[indexByType(elem)];
            if (tab) toggleSiblings(tab);
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
    return elem.hasAttribute(name);
  }

  function getAttr(elem, name) {
    return elem.getAttribute(name);
  }

  function hasClass(elem, name) {
    return elem.classList.contains(name);
  }

  function indexByType(elem) {
    if (!elem.parentNode) return -1;
    return [].filter.call(elem.parentNode.childNodes, function(node) {
      return node instanceof Element && node.tagName === elem.tagName;
    }).indexOf(elem);
  }

  function find(iterable, iterator) {
    for (var i = 0, ii = iterable.length; i < ii; ++i) {
      if (iterator(iterable[i], i)) return iterable[i];
    }
  }

  // [data-sf-tooltip][data-sf-trigger~=focus]  ->  show
  document.addEventListener('focus', function(event) {
    var elem = event.target.parentElement;
    if (!(elem instanceof HTMLElement)) return;
    if (hasAttr(elem, 'data-sf-trigger') && ~getAttr(elem, 'data-sf-trigger').indexOf('focus')) {
      elem.classList.add('sf-tooltip-visible')
    }
  }, true);

  // [data-sf-tooltip][data-sf-trigger~=focus]  ->  hide
  document.addEventListener('blur', function(event) {
    var elem = event.target.parentElement;
    if (!(elem instanceof HTMLElement)) return;
    if (hasAttr(elem, 'data-sf-trigger') && ~getAttr(elem, 'data-sf-trigger').indexOf('focus')) {
      elem.classList.remove('sf-tooltip-visible');
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
  //   1) always stop for .sf-modal;
  //   2) stop [data-sf-no-scroll-spill] and .sf-tabset-body if they're not
  //      fully visible and have reached a terminus.
  function shouldPreventScrollSpill(elem, event) {
    if (!(elem instanceof HTMLElement)) return false;
    if (hasClass(elem, 'sf-modal')) return true;
    if (hasAttr(elem, 'data-sf-no-scroll-spill') ||
        hasClass(elem, 'sf-tabset-body') && hasClass(elem.parentElement, 'sf-tabset-fixed')) {
      return shouldStopWheelEvent(elem, event);
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
