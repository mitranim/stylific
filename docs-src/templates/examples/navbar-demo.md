# Description

Demonstrates folding and folded `sf-navbar`.

Back to [Components#sf-navbar](components/#sf-navbar).

# Automatic Folding

`sf-navbar` can automatically fold on narrow displays, grouping extra elements
into a sliding dropdown. The media breakpoint is configurable, and so is the
ordinal number of the child at which to fold.

To enable folding, add a pair of `<input type="checkbox">` and `<label>` with
matching ids to the beginning of the navbar. Resize your viewport to see the
folding in effect.

```html
<sf-navbar class="orange">
  <input id="demo-sf-navbar" type="checkbox">
  <label for="demo-sf-navbar"></label>
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <a href="/partners">Partners</a>
</sf-navbar>
```

<div><doc-demo>
  <sf-navbar class="orange">
    <input id="demo-sf-navbar" type="checkbox">
    <label for="demo-sf-navbar"></label>
    <a href="examples/navbar-demo/#home">Home</a>
    <a class="active" href="examples/navbar-demo/#robots">Robots</a>
    <a href="examples/navbar-demo/#medical-cybernetics">Medical Cybernetics</a>
    <a href="examples/navbar-demo/#partners">Partners</a>
    <a href="examples/navbar-demo/#achievements">Achievements</a>
  </sf-navbar>
</doc-demo></div>

# Static Folding

With a folding navbar, use the `[sf-fold]` attribute to tell it to _always_
fold, regardless of the viewport width.

```html
<sf-navbar class="success" sf-fold>
  <input id="demo-sf-navbar-fold" type="checkbox">
  <label for="demo-sf-navbar-fold"></label>
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <a href="/partners">Partners</a>
</sf-navbar>
```

<div><doc-demo>
  <sf-navbar class="success" sf-fold>
    <input id="demo-sf-navbar-fold" type="checkbox">
    <label for="demo-sf-navbar-fold"></label>
    <a href="examples/navbar-demo/#home">Home</a>
    <a class="active" href="examples/navbar-demo/#robots">Robots</a>
    <a href="examples/navbar-demo/#medical-cybernetics">Medical Cybernetics</a>
    <a href="examples/navbar-demo/#partners">Partners</a>
    <a href="examples/navbar-demo/#achievements">Achievements</a>
  </sf-navbar>
</doc-demo></div>
