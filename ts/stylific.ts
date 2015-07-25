!function() {
  'use strict';

  if (typeof document !== 'object' || !document) return;

  document.addEventListener('click', function(event) {
    let elem = <HTMLElement>event.target;
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

      const parent = elem.parentElement;

      // Intentionally omitting .sf-dropdown (which requires [data-sf-toggle]).
      if (hasClass(parent, 'sf-collapse')) toggleElem(elem);
      else if (hasClass(parent, 'sf-navbar')) toggleElem(elem);

      else if (hasClass(parent, 'sf-tabset-head')) {
        const tabset = parent.parentElement;
        if (hasClass(tabset, 'sf-tabset')) {
          toggleSiblings(elem);
          // Activate a tab on the same index.
          const body = find(tabset.childNodes, node => {
            return node instanceof HTMLElement && hasClass(node, 'sf-tabset-body');
          });
          if (body) {
            const tabs = [].filter.call(body.childNodes, node => {
              return node instanceof HTMLElement && hasClass(node, 'sf-tab');
            });
            const tab = tabs[indexByType(elem)];
            if (tab) toggleSiblings(tab);
          }
        }
      }
    }
  });

  function toggleElem(elem: HTMLElement): void {
    elem.classList.toggle('active');
  }

  function toggleSiblings(elem: HTMLElement): void {
    if (!elem.parentElement) return;
    [].slice.call(elem.parentElement.childNodes).forEach(child => {
      if (child instanceof HTMLElement) child.classList.remove('active');
    });
    elem.classList.add('active');
  }

  function toggleId(id: string): void {
    const elem = document.getElementById(id);
    if (elem) toggleElem(elem);
  }

  function hasAttr(elem: HTMLElement, name: string): boolean {
    return elem.hasAttribute(name);
  }

  function getAttr(elem: HTMLElement, name: string): string {
    return elem.getAttribute(name);
  }

  function hasClass(elem: HTMLElement, name: string): boolean {
    return elem.classList.contains(name);
  }

  function indexByType(elem: HTMLElement): number {
    if (!elem.parentNode) return -1;
    return [].filter.call(elem.parentNode.childNodes, node => {
      return node instanceof Element && node.tagName === elem.tagName;
    }).indexOf(elem);
  }

  function find(iterable: {[index: number]: any; length: number;}, iterator): any {
    for (let i = 0, ii = iterable.length; i < ii; ++i) {
      if (iterator(iterable[i], i)) return iterable[i];
    }
  }

  // [data-sf-tooltip][data-sf-trigger~=focus]  ->  show
  document.addEventListener('focus', function(event) {
    const elem = <HTMLElement>event.target;
    if (elem instanceof HTMLElement) {
      const parent = elem.parentElement;
      if (parent && hasAttr(parent, 'data-sf-trigger') && ~getAttr(parent, 'data-sf-trigger').indexOf('focus')) {
        parent.classList.add('sf-tooltip-visible')
      }
    }
  }, true);

  // [data-sf-tooltip][data-sf-trigger~=focus]  ->  hide
  document.addEventListener('blur', function(event) {
    const elem = <HTMLElement>event.target;
    if (elem instanceof HTMLElement) {
      const parent = elem.parentElement;
      if (parent && hasAttr(parent, 'data-sf-trigger') && ~getAttr(parent, 'data-sf-trigger').indexOf('focus')) {
        parent.classList.remove('sf-tooltip-visible');
      }
    }
  }, true);

  // Prevents scroll from spilling outside certain elements.
  document.addEventListener('wheel', function(event) {
    let elem = <HTMLElement>event.target;
    if (!(elem instanceof HTMLElement)) return;
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
  function shouldPreventScrollSpill(elem: HTMLElement, event: WheelEvent): boolean {
    if (!(elem instanceof HTMLElement)) return false;
    if (hasClass(elem, 'sf-modal')) return true;
    if (hasAttr(elem, 'data-sf-no-scroll-spill') ||
        hasClass(elem, 'sf-tabset-body') && hasClass(elem.parentElement, 'sf-tabset-fixed')) {
      return shouldStopWheelEvent(elem, event);
    }
  }

  function shouldStopWheelEvent(elem: HTMLElement, event: WheelEvent): boolean {
    if (elem.scrollHeight === elem.offsetHeight) return false;
    if (event.deltaY < 0 && reachedTop(elem) || event.deltaY > 0 && reachedBottom(elem)) {
      return true;
    }
  }

  // Checks if the element is scrolled to the top. Pixel measurements are
  // inaccurate when the browser is zoomed in or out, so we consider that we've
  // hit the top if the difference is within 3px.
  function reachedTop(elem: HTMLElement): boolean {
    return elem.scrollTop < 3;
  }

  // Checks if the element is scrolled to the bottom. Pixel measurements are
  // inaccurate when the browser is zoomed in or out, so we consider that we've
  // hit the bottom if the difference is within 3px.
  function reachedBottom(elem: HTMLElement): boolean {
    let delta = elem.scrollHeight - elem.scrollTop - elem.offsetHeight;
    return Math.abs(delta) < 3;
  }
}();
