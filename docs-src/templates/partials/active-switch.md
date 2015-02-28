# Description

Demonstrates how to enhance components with JS. This is an AngularJS directive
for switching `sf-tabset` tabs by applying `.active` to tab labels.

Back to [Components#sf-tabset](components/#sf-tabset).

# Usage

In a tabset (no need for `<input>` this time):

```html
<sf-tabset>
  ...
  <label active-switch>Tab N</label>
  <sf-tab>
    <p>Tab Body</p>
  </sf-tab>
  ...
</sf-tabset>
```

JS code:

```javascript
angular.module('attributes.activeSwitch', [])
.directive('activeSwitch', function() {

  return {
    restrict: 'A',
    scope: false,
    link: function(scope, elem) {
      // Use the native DOM element.
      elem = elem[0]

      // Register a listener to remove the .active class from self.
      scope.$on('$active-switch', function() {
        elem.classList.remove('active')
      })

      // Register an onclick listener to remove the .active class from self and
      // all siblings, them add this class to self.
      elem.onclick = function() {
        scope.$parent.$broadcast('$active-switch')
        elem.classList.add('active')
        scope.$digest()
      }

      // If this is a first sibling in a repeater, activate by default.
      if (scope.$index === 0) elem.classList.add('active')
    }
  }

})
```