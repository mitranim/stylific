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
        if (matchName(elem.parentElement, 'sf-tabset')) toggleSiblings(elem);
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
}();
