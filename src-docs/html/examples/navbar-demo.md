# Description

Demonstrates folding and folded `sf-navbar`.

Back to [Components#sf-navbar](components/#sf-navbar).

# Automatic Folding

`sf-navbar` can automatically fold on narrow displays, grouping extra elements
into a sliding dropdown. The media breakpoint is configurable.

To enable folding, add a `<label>` between the elements where you want the
navbar to fold. Resize your viewport to see the folding in effect.

```html
<div sf-navbar>
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <label></label>
  <a href="/partners">Partners</a>
  <a href="/achievements">Achievements</a>
</div>
```

<div doc-demo>
  <div sf-navbar>
    <a href="examples/navbar-demo/#home">Home</a>
    <a class="active" href="examples/navbar-demo/#robots">Robots</a>
    <a href="examples/navbar-demo/#medical-cybernetics">Medical Cybernetics</a>
    <label></label>
    <a href="examples/navbar-demo/#partners">Partners</a>
    <a href="examples/navbar-demo/#achievements">Achievements</a>
  </div>
</div>

# Static Folding

With a folding navbar, use the `fold` option to tell it to _always_ fold,
regardless of the viewport width.

```html
<div theme="primary" sf-navbar="fold">
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <label></label>
  <a href="/partners">Partners</a>
  <a href="/achievements">Achievements</a>
</div>
```

<div doc-demo>
  <div theme="primary" sf-navbar="fold">
    <a href="examples/navbar-demo/#home">Home</a>
    <a class="active" href="examples/navbar-demo/#robots">Robots</a>
    <a href="examples/navbar-demo/#medical-cybernetics">Medical Cybernetics</a>
    <label></label>
    <a href="examples/navbar-demo/#partners">Partners</a>
    <a href="examples/navbar-demo/#achievements">Achievements</a>
  </div>
</div>
