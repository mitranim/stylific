<!-- TOC -->
<div class="sf-collapse doc-toc theme-text-accent">
  <label class="active theme-accent"></label>
  <div class="sf-collapse-body">
    [Overview](layout/#overview)
    [Container](layout/#container)
    [Child](layout/#child)
    [Grid](layout/#grid)
    [Whitespace](layout/#whitespace)
  </div>
</div>

# Overview

stylific's layout system is based on flexbox. Prior to 0.7.0, it used
attributes; now it uses classes.

The `.layout-*` classes define container properties, and the `.flex-*` classes
define child properties. The `.grid-*` classes define both.

# Container

Container properties are defined with the `.layout-*` classes. They affect
different aspects of the layout. See the full reference in
[`layout.scss`](https://github.com/Mitranim/stylific/tree/master/scss/layout.scss).

```html
<div class="layout-row">...</div>
<div class="layout-column">...</div>
```

Each class has several media-aware versions:

```scss
.layout-*     // baseline (no @media)
.layout-sm-*  // small displays
.layout-md-*  // medium displays and up
.layout-lg-*  // large displays and up
```

To control child alignment on the main axis (usually horizontal), use one of the
whitespace flags (`justify-content` in flexbox terms):

```html
<div class="layout-row layout-space-between">
  <button>left</button>
  <button>center</button>
  <button>right</button>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="layout-row layout-space-between">
      <button>left</button>
      <button>center</button>
      <button>right</button>
    </div>
  </div>
</div>

To control child alignment on the cross axis (usually vertical), use one of the
cross-alignment flags (`align-items` in flexbox terms):

```html
<div class="layout-row layout-cross-start" style="min-height: 6em">
  <button>top</button>
</div>
<div class="layout-row layout-cross-center" style="min-height: 6em">
  <button>center</button>
</div>
<div class="layout-row layout-cross-end" style="min-height: 6em">
  <button>bottom</button>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body layout-row layout-space-between">
    <div class="layout-row layout-cross-start" style="min-height: 6em">
      <button>top</button>
    </div>
    <div class="layout-row layout-cross-center" style="min-height: 6em">
      <button>center</button>
    </div>
    <div class="layout-row layout-cross-end" style="min-height: 6em">
      <button>bottom</button>
    </div>
  </div>
</div>

Other options are listed in
[`layout.scss`](https://github.com/Mitranim/stylific/tree/master/scss/layout.scss).

# Child

Child properties are defined with the `.flex-*` classes. See the full reference in
[`layout.scss`](https://github.com/Mitranim/stylific/tree/master/scss/layout.scss).

Each class has several media-aware versions:

```scss
.flex-*     // baseline (no @media)
.flex-sm-*  // small displays
.flex-md-*  // medium displays and up
.flex-lg-*  // large displays and up
```

To control child stretchiness across the main axis, use `.flex-N`, where N
ranges from 1 to 12. In flexbox terms, this corresponds to `flex: N`.

```html
<div class="layout-row space-out-h">
   <button class="flex-1">small</button>
   <button class="flex-6">huge</button>
   <button class="flex-1">small</button>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="layout-row space-out-h">
      <button class="flex-1">small</button>
      <button class="flex-6">huge</button>
      <button class="flex-1">small</button>
    </div>
  </div>
</div>

To control child order, use `.flex-order-N`, where N ranges from -1 to 12.
In flexbox terms, this corresponds to `order: N`.

```html
<div class="layout-row layout-space-around">
  <button class="flex-order-2">third (order: 2)</button>
  <button class="flex-order-1">second (order: 1)</button>
  <button class="flex-order--1">first (order: -1)</button>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="layout-row layout-space-around">
      <button class="flex-order-2">third (order: 2)</button>
      <button class="flex-order-1">second (order: 1)</button>
      <button class="flex-order--1">first (order: -1)</button>
    </div>
  </div>
</div>

To control child self-alignment, use one of the cross-axis flags. In flexbox
terms, this corresponds to `align-self`.

```html
<div class="layout-row layout-space-between" style="min-height: 6em">
  <button class="flex-stretch">stretch</button>
  <button class="flex-start">top</button>
  <button class="flex-center">center</button>
  <button class="flex-end">bottom</button>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="layout-row layout-space-between" style="min-height: 6em">
      <button class="flex-stretch">stretch</button>
      <button class="flex-start">top</button>
      <button class="flex-center">center</button>
      <button class="flex-end">bottom</button>
    </div>
  </div>
</div>

# Grid

It's convenient to have a shortcut to a media-responsive flex container that
wraps its items on different breakpoints. `.grid` is a primitive version of that.
Open this on a [separate page](examples/grid-demo/) to resize the page more
easily.

```html
<div class="grid doc-grid-demo">
  <div>One</div>
  <div>...</div>
  <div>Twenty</div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="grid doc-grid-demo">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
      <div>Six</div>
      <div>Seven</div>
      <div>Eight</div>
      <div>Nine</div>
      <div>Ten</div>
      <div>Eleven</div>
      <div>Twelve</div>
      <div>Thirteen</div>
      <div>Fourteen</div>
      <div>Fifteen</div>
      <div>Sixteen</div>
      <div>Seventeen</div>
      <div>Eighteen</div>
      <div>Nineteen</div>
      <div>Twenty</div>
    </div>
  </div>
</div>

It comes in several media-aware flavours:

```scss
.grid-*     // baseline (no @media)
.grid-sm-*  // small displays
.grid-md-*  // medium displays and up
.grid-lg-*  // large displays and up
```

Each version of the class takes a numeric option `N` which specifies the number
of children per line:

```scss
.grid-1
.grid-2
.grid-3
.grid-4
.grid-5
.grid-6
```

Example of using these classes together to tune the breakpoints for your
specific needs:

```html
<div class="grid-sm-1 grid-md-2 grid-lg-3 doc-grid-demo">
  <div>One</div>
  <div>...</div>
  <div>Twenty</div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="grid-sm-1 grid-md-2 grid-lg-3 doc-grid-demo">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
      <div>Six</div>
      <div>Seven</div>
      <div>Eight</div>
      <div>Nine</div>
      <div>Ten</div>
      <div>Eleven</div>
      <div>Twelve</div>
      <div>Thirteen</div>
      <div>Fourteen</div>
      <div>Fifteen</div>
      <div>Sixteen</div>
      <div>Seventeen</div>
      <div>Eighteen</div>
      <div>Nineteen</div>
      <div>Twenty</div>
    </div>
  </div>
</div>

# Whitespace

stylific defines sensible whitespace defaults and a few helper classes.
Together, they should save you from writing case-by-case whitespace rules most
of the time.

## Defaults

First of all, stylific resets all margins and padding to 0 for all elements.
Whitespace is added back in a selective fashion, using:

1. Container padding.
2. Spaced-out container children.

Typographically meaningful content like headers and paragraphs needs whitespace
all around. It's added by combining container padding with margins between
children. By default, this is included into `sf-article` and some other stylific
components. This combination of properties is also available as the `.container`
class (see below).

## Classes

These global helper classes should be used for manual whitespace adjustment.

```scss
.pad          // default padding ($sf-space == 1rem)
.nopad        // no padding
.space-out    // vertical interval between children
.space-out-h  // horizontal interval between children
.container    // combination of .pad and .space-out
```

Also see the whitespace-related
[variables](https://github.com/Mitranim/stylific/blob/master/scss/_variables.scss)
and [mixins](https://github.com/Mitranim/stylific/blob/master/scss/_mixins.scss).
