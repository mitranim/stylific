!function() {
  if (typeof document !== 'object' || document == null) return;

  document.addEventListener('click', function(event) {
    if (event.target instanceof HTMLElement) {
      var elem = event.target;
      if (elem.hasAttribute('disabled')) return;

      // `sf-toggle` hooks.
      if (elem.hasAttribute('sf-toggle')) {
        toggleElem(elem);
      } else if (elem.hasAttribute('sf-toggle-siblings')) {
        toggleSiblings(elem);
      } else if (elem.hasAttribute('sf-toggle-id')) {
        toggleId(elem.getAttribute('sf-toggle-id'));
      }

      else if (elem.tagName === 'LABEL') {
        ['sf-collapse', 'sf-dropdown', 'sf-navbar'].forEach(function(name) {
          if (matchName(elem.parentElement, name)) toggleElem(elem);
        });

        if (matchName(elem.parentElement, 'sf-tabset-head')) {
          var tabset = elem.parentElement.parentElement;
          if (matchName(tabset, 'sf-tabset')) {
            toggleSiblings(elem);
            // Activate a tab on the same index.
            var body = tabset.querySelector('sf-tabset-body,[sf-tabset-body]');
            if (body) {
              var tabs = [].filter.call(body.childNodes, function(node) {
                return matchName(node, 'sf-tab');
              });
              var tab = tabs[indexByType(elem)];
              if (tab) toggleSiblings(tab);
            }
          }
        }
      }

      // Clicking sf-modal always closes it.
      else if (matchName(elem, 'sf-modal')) {
        elem.classList.remove('active');
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

  function matchName(elem, name) {
    return elem instanceof HTMLElement &&
           (elem.tagName === name.toUpperCase() || elem.hasAttribute(name.toLowerCase()));
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
    if (elem instanceof HTMLElement) {
      if (elem.hasAttribute('sf-trigger') && ~elem.getAttribute('sf-trigger').indexOf('focus')) {
        elem.setAttribute('sf-tooltip-show', '');
      }
    }
  }, true);

  // [sf-tooltip][sf-trigger~=focus]  ->  hide
  document.addEventListener('blur', function(event) {
    var elem = event.target.parentElement;
    if (elem instanceof HTMLElement) {
      var attr = elem.getAttribute('sf-trigger');
      if (elem.hasAttribute('sf-trigger') && ~elem.getAttribute('sf-trigger').indexOf('focus')) {
        elem.removeAttribute('sf-tooltip-show');
      }
    }
  }, true);

  /**
   * Prevents scroll spill. Example usage:
   *   <sf-tabset-body sf-no-scroll-spill>...</sf-tabset-body>
   */
  document.addEventListener('wheel', function(event) {
    var elem = event.target;
    do {
      if (shouldPreventScrollSpill(elem, event)) {
        event.preventDefault();
        return;
      }
    } while (elem = elem.parentElement);
  });

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

  // Checks if the element satisfies our criteria for preventing vertical
  // scroll from spilling.
  function shouldPreventScrollSpill(elem, event) {
    if (!(elem instanceof HTMLElement)) return false;
    if (elem.hasAttribute('sf-no-scroll-spill') || matchName(elem, 'sf-modal-body')) {
      return shouldStopWheelEvent(elem, event);
    }
    if (matchName(elem, 'sf-tabset-body')) {
      var parent = elem.parentElement;
      if (parent.hasAttribute('sf-tabset') && ~parent.getAttribute('sf-tabset').indexOf('fixed')) {
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
}();
