<!-- TOC -->
<div sf-collapse doc-toc theme="text-accent">
  <label class="active" theme="accent"></label>
  <div sf-collapse-body>
    [Overview](layout/#overview)
    [Container](layout/#container)
    [Child](layout/#child)
    [Grid](layout/#grid)
    [Whitespace](layout/#whitespace)
  </div>
</div>

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

<div doc-demo style="display: block">
  <div layout="row space-between">
    <button>left</button>
    <button>center</button>
    <button>right</button>
  </div>
</div>

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

<div doc-demo layout="row space-between cross-stretch">
  <div layout="row cross-start" style="min-height: 6em">
    <button>top</button>
  </div>
  <div layout="row cross-center" style="min-height: 6em">
    <button>center</button>
  </div>
  <div layout="row cross-end" style="min-height: 6em">
    <button>bottom</button>
  </div>
</div>

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

<div doc-demo style="display: block">
  <div layout="row space-out">
    <button flex="1">small</button>
    <button flex="6">huge</button>
    <button flex="1">small</button>
  </div>
</div>

To control child order, use `flex="order-N"`, where N ranges from -1 to 12.
In flexbox terms, this corresponds to `order: N`.

```html
<div layout="row space-around">
  <button flex="order-2">third (order: 2)</button>
  <button flex="order-1">second (order: 1)</button>
  <button flex="order--1">first (order: -1)</button>
</div>
```

<div doc-demo style="display: block">
  <div layout="row space-around">
    <button flex="order-2">third (order: 2)</button>
    <button flex="order-1">second (order: 1)</button>
    <button flex="order--1">first (order: -1)</button>
  </div>
</div>

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

<div doc-demo style="display: block">
  <div layout="row space-between" style="min-height: 6em">
    <button flex="stretch">stretch</button>
    <button flex="start">top</button>
    <button flex="center">center</button>
    <button flex="end">bottom</button>
  </div>
</div>

# Grid

It's convenient to have a shortcut to a media-responsive flex container that
wraps its items on different breakpoints. `[grid]` is a primitive version of that.
Open this on a [separate page](examples/grid-demo/) to resize the page more
easily.

```html
<div grid class="doc-grid-demo">
  <p>One</p>
  <p>...</p>
  <p>Twenty</p>
</div>
```

<div doc-demo style="display: block">
  <div grid class="doc-grid-demo">
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
    <p>Four</p>
    <p>Five</p>
    <p>Six</p>
    <p>Seven</p>
    <p>Eight</p>
    <p>Nine</p>
    <p>Ten</p>
    <p>Eleven</p>
    <p>Twelve</p>
    <p>Thirteen</p>
    <p>Fourteen</p>
    <p>Fifteen</p>
    <p>Sixteen</p>
    <p>Seventeen</p>
    <p>Eighteen</p>
    <p>Nineteen</p>
    <p>Twenty</p>
  </div>
</div>

It comes in several media-aware flavours:

```scss
grid     // baseline (no @media)
grid-sm  // small displays
grid-md  // medium displays and up
grid-lg  // large displays and up
```

Each version of the attribute takes a numeric option `N` which specifies the
number of children per line:

```scss
grid="1"
grid="2"
grid="3"
grid="4"
grid="5"
grid="6"
```

Example of using these attributes together to tune the breakpoints for your
specific needs:

```html
<div grid-sm="1" grid-md="2" grid-lg="3" class="doc-grid-demo">
  <p>One</p>
  <p>...</p>
  <p>Twenty</p>
</div>
```

<div doc-demo style="display: block">
  <div grid-sm="1" grid-md="2" grid-lg="3" class="doc-grid-demo">
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
    <p>Four</p>
    <p>Five</p>
    <p>Six</p>
    <p>Seven</p>
    <p>Eight</p>
    <p>Nine</p>
    <p>Ten</p>
    <p>Eleven</p>
    <p>Twelve</p>
    <p>Thirteen</p>
    <p>Fourteen</p>
    <p>Fifteen</p>
    <p>Sixteen</p>
    <p>Seventeen</p>
    <p>Eighteen</p>
    <p>Nineteen</p>
    <p>Twenty</p>
  </div>
</div>

# Whitespace

stylific defines a few global classes and attributes dedicated to whitespace.
They cover a lot of common use cases and save you from littering stylesheets
with haphazard margin and padding declarations.

Also see the whitespace-related
[variables](https://github.com/Mitranim/stylific/blob/master/scss/_variables.scss)
and [mixins](https://github.com/Mitranim/stylific/blob/master/scss/_mixins.scss).

```scss
[layout="space-out"]        // interval between children on the main axis
[layout="space-out-cross"]  // interval between children on the cross axis
.pad                        // default padding ($sf-space == 1rem)
.space-out                  // vertical interval between children
.space-out-h                // horizontal interval between children
```
