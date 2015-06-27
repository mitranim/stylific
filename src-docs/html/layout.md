<!-- TOC -->
<div><doc-toc theme="text-accent">
  <input checked id="<%= uniqId() %>" type="checkbox">
  <label for="<%= lastUniqId() %>" theme="accent"></label>
  [Overview](layout/#overview)
  [Container](layout/#container)
  [Child](layout/#child)
</doc-toc></div>

# Overview

stylific's layout system is based on flexbox. Starting with version `0.1.0`, it
uses attributes, borrowing ideas from [Angular
Material](https://material.angularjs.org/latest/#/layout/container).

The `layout` attribite defines container properties, and the `flex` attribute
defines child properties.

# Container

Container properties are defined with the `layout` attribute. It takes an
arbitrary number of whitespace-separated flags. See the full reference in
[`layout.scss`](https://github.com/Mitranim/stylific/tree/master/scss/layout.scss).
The flag order doesn't matter.

```html
<div layout>...</div>
<div layout="row">...</div>
<div layout="column">...</div>
```

Each attribute has several media-aware versions:

```scss
layout     // baseline (no @media)
layout-sm  // small displays
layout-md  // medium displays and up
layout-lg  // large displays and up
```

To control child alignment on the main axis (usually horizontal), use one of the
whitespace flags (`justify-content` in flexbox terms):

```html
<div layout="row space-between">
  <button>left</button>
  <button>center</button>
  <button>right</button>
</div>
```

<div><doc-demo style="display: block">
  <div layout="row space-between">
    <button>left</button>
    <button>center</button>
    <button>right</button>
  </div>
</doc-demo></div>

To control child alignment on the cross axis (usually vertical), use one of the
cross-alignment flags (`align-items` in flexbox terms):

```html
<div layout="row cross-start" style="min-height: 6em">
  <button>top</button>
</div>
<div layout="row cross-center" style="min-height: 6em">
  <button>center</button>
</div>
<div layout="row cross-end" style="min-height: 6em">
  <button>bottom</button>
</div>
```

<div><doc-demo layout="row space-between cross-stretch">
  <div layout="row cross-start" style="min-height: 6em">
    <button>top</button>
  </div>
  <div layout="row cross-center" style="min-height: 6em">
    <button>center</button>
  </div>
  <div layout="row cross-end" style="min-height: 6em">
    <button>bottom</button>
  </div>
</doc-demo></div>

Other options are listed in
[`layout.scss`](https://github.com/Mitranim/stylific/tree/master/scss/layout.scss).

# Child

Child properties are defined with the `flex` attribute. Just like `layout`,
it takes unordered whitespace-separated flags. See the full reference in
[`layout.scss`](https://github.com/Mitranim/stylific/tree/master/scss/layout.scss).

Each attribute has several media-aware versions:

```scss
flex     // baseline (no @media)
flex-sm  // small displays
flex-md  // medium displays and up
flex-lg  // large displays and up
```

To control child stretchiness across the main axis, use `flex="N"`, where N
ranges from 1 to 12. In flexbox terms, this corresponds to `flex: N`.

```html
<div layout="row space-out">
   <button flex="1">small</button>
   <button flex="6">huge</button>
   <button flex="1">small</button>
</div>
```

<div><doc-demo style="display: block">
  <div layout="row space-out">
    <button flex="1">small</button>
    <button flex="6">huge</button>
    <button flex="1">small</button>
  </div>
</doc-demo></div>

To control child order, use `flex="order-N"`, where N ranges from -1 to 12.
In flexbox terms, this corresponds to `order: N`.

```html
<div layout="row space-around">
  <button flex="order-2">third (order: 2)</button>
  <button flex="order-1">second (order: 1)</button>
  <button flex="order--1">first (order: -1)</button>
</div>
```

<div><doc-demo style="display: block">
  <div layout="row space-around">
    <button flex="order-2">third (order: 2)</button>
    <button flex="order-1">second (order: 1)</button>
    <button flex="order--1">first (order: -1)</button>
  </div>
</doc-demo></div>

To control child self-alignment, use one of the cross-axis flags. In flexbox
terms, this corresponds to `align-self`.

```html
<div layout="row space-between" style="min-height: 6em">
  <button flex="stretch">stretch</button>
  <button flex="start">top</button>
  <button flex="center">center</button>
  <button flex="end">bottom</button>
</div>
```

<div><doc-demo style="display: block">
  <div layout="row space-between" style="min-height: 6em">
    <button flex="stretch">stretch</button>
    <button flex="start">top</button>
    <button flex="center">center</button>
    <button flex="end">bottom</button>
  </div>
</doc-demo></div>
