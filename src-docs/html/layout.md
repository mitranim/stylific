{% extend('index.html', {title: 'layout'}) %}

<!-- TOC -->
<div class="sf-collapse doc-toc theme-text-accent">
  <div class="sf-collapse-head active theme-accent"></div>
  <div class="sf-collapse-body">
    [Overview](layout/#overview)
    [Container](layout/#container)
    [Child](layout/#child)
    [Grid](layout/#grid)
    [Whitespace](layout/#whitespace)
  </div>
</div>

# Overview

stylific is very flexbox-centric. It uses flexbox for built-in components and
provides a bunch of classes that serve as shortcuts to useful combinations of
flex properties.

In case you're unfamiliar with flexbox, read this
[wonderful introduction](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
on CSS Tricks. In short, a _flex container_ is similar to a block, but has
extremely rich control over its inner layout. A _flex item_, or flex child (its
immediate descendant) has rich control over its dimensions inside the flex parent.

stylific has three groups of layout classes: for containers, children, and
grids. They're defined in
[`layout.scss`](https://github.com/Mitranim/stylific/tree/master/scss/layout.scss).


# Container

<div class="sf-collapse">
  <div class="sf-collapse-head theme-accent">
    <span class="sf-icon-info-circle inline flex-none" style="margin-right: 0.75rem"></span>
    <p>Breaking changes in `0.13.0`. Click for migration guide.</p>
  </div>
  <div class="sf-collapse-body border border-accent">
    <ul>
      <li>
        <span>Replace groups of `layout-*` classes with compound classes `row-*-*` or `col-*-*`. Example:</span>
        <ul>
          <li>
            `class="layout-row layout-space-between layout-cross-center"` → `class="row-between-center"`
          </li>
        </ul>
      </li>
      <li>
        <span>Replace media-aware classes `layout-<size>-*` with `<size>-row-*-*` or `<size>-col-*-*`. Example:</span>
        <ul>
          <li>
            `class="layout-sm-column layout-md-row"` → `class="sm-col-start-stretch md-row-between-stretch"`
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

Container classes define flex container properties. Here's an example:

```html
<div class="row-between-center" style="height: 8em">
  <div>I'm centered on the left!</div>
  <div>I'm centered on the right!</div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="row-between-center pretty-children" style="height: 8em">
      <div>I'm centered on the left!</div>
      <div>I'm centered on the right!</div>
    </div>
  </div>
</div>

There are 40 container classes:

<table class="doc-table" style="width: 100%">
  <thead>
    <tr>
      <th class="row-between-center" style="margin-right: -1px; margin-bottom: -1px">
        <span>main ↓</span>
        <span>cross →</span>
      </th>
      <th>`*-*-start`</th>
      <th>`*-*-center`</th>
      <th>`*-*-end`</th>
      <th>`*-*-stretch`</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`row-start-*`</td>
      <td>`.row-start-start`</td>
      <td>`.row-start-center`</td>
      <td>`.row-start-end`</td>
      <td>`.row-start-stretch`</td>
    </tr>
    <tr>
      <td>`row-center-*`</td>
      <td>`.row-center-start`</td>
      <td>`.row-center-center`</td>
      <td>`.row-center-end`</td>
      <td>`.row-center-stretch`</td>
    </tr>
    <tr>
      <td>`row-end-*`</td>
      <td>`.row-end-start`</td>
      <td>`.row-end-center`</td>
      <td>`.row-end-end`</td>
      <td>`.row-end-stretch`</td>
    </tr>
    <tr>
      <td>`row-around-*`</td>
      <td>`.row-around-start`</td>
      <td>`.row-around-center`</td>
      <td>`.row-around-end`</td>
      <td>`.row-around-stretch`</td>
    </tr>
    <tr>
      <td>`row-between-*`</td>
      <td>`.row-between-start`</td>
      <td>`.row-between-center`</td>
      <td>`.row-between-end`</td>
      <td>`.row-between-stretch`</td>
    </tr>
    <tr>
      <td>`col-start-*`</td>
      <td>`.col-start-start`</td>
      <td>`.col-start-center`</td>
      <td>`.col-start-end`</td>
      <td>`.col-start-stretch`</td>
    </tr>
    <tr>
      <td>`col-center-*`</td>
      <td>`.col-center-start`</td>
      <td>`.col-center-center`</td>
      <td>`.col-center-end`</td>
      <td>`.col-center-stretch`</td>
    </tr>
    <tr>
      <td>`col-end-*`</td>
      <td>`.col-end-start`</td>
      <td>`.col-end-center`</td>
      <td>`.col-end-end`</td>
      <td>`.col-end-stretch`</td>
    </tr>
    <tr>
      <td>`col-around-*`</td>
      <td>`.col-around-start`</td>
      <td>`.col-around-center`</td>
      <td>`.col-around-end`</td>
      <td>`.col-around-stretch`</td>
    </tr>
    <tr>
      <td>`col-between-*`</td>
      <td>`.col-between-start`</td>
      <td>`.col-between-center`</td>
      <td>`.col-between-end`</td>
      <td>`.col-between-stretch`</td>
    </tr>
  </tbody>
</table>

They're formed from combinations of three properties:

```scss
<direction>-<main>-<cross>
```

* `direction` — direction of flex container (row or column)
* `main` — child alignment on main axis (⇄ in a row container,
  ⇅ in a column container)
* `cross` — child alignment on cross axis (⇅ in a row container,
  ⇄ in a column container)

Rundown of the corresponding flex rules:

```scss
// Direction
.row-*-*     {display: flex; flex-direction: row;}
.col-*-*     {display: flex; flex-direction: column;}

// Child alignment on main axis
.*-start-*   {justify-content: flex-start;}
.*-center-*  {justify-content: center;}
.*-end-*     {justify-content: flex-end;}
.*-between-* {justify-content: space-between;}
.*-around-*  {justify-content: space-around;}

// Child alignment on cross axis
.*-*-start   {align-items: flex-start;}
.*-*-center  {align-items: center;}
.*-*-end     {align-items: flex-end;}
.*-*-stretch {align-items: stretch;}
```

## Examples

To control flow direction, use the `<direction>-*-*` property. It can be `row`
or `column`:

```html
<div class="row-between-start">
  <div>first in row</div>
  <div>second in row</div>
  <div>third in row</div>
</div>

<div class="col-start-start">
  <div>first in col</div>
  <div>second in col</div>
  <div>third in col</div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="row-between-start pretty-children">
      <div>first in row</div>
      <div>second in row</div>
      <div>third in row</div>
    </div>
    <div class="col-start-start pretty-children">
      <div>first in col</div>
      <div>second in col</div>
      <div>third in col</div>
    </div>
  </div>
</div>

To control child alignment on the main axis, use the `*-<main>-*` property. Here
it's `between`, which causes the children to be spaced out:

```html
<div class="row-between-center">
  <div>left</div>
  <div>center</div>
  <div>right</div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="row-between-center pretty-children">
      <div>left</div>
      <div>center</div>
      <div>right</div>
    </div>
  </div>
</div>

To control child alignment on the cross axis, use the `*-*-<cross>` property.
Here it's set to different values on different containers:

```html
<div class="row-center-start" style="min-height: 6em">
  <div>top</div>
</div>
<div class="row-center-center" style="min-height: 6em">
  <div>center</div>
</div>
<div class="row-center-end" style="min-height: 6em">
  <div>bottom</div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body row-between-stretch">
    <div class="row-center-start pretty-children" style="min-height: 6em">
      <div>top</div>
    </div>
    <div class="row-center-center pretty-children" style="min-height: 6em">
      <div>center</div>
    </div>
    <div class="row-center-end pretty-children" style="min-height: 6em">
      <div>bottom</div>
    </div>
  </div>
</div>

## Media-aware containers

Each class has several media-aware versions:

```scss
.*-*-*     // all displays (no @media)
.sm-*-*-*  // small displays only
.md-*-*-*  // medium displays and up
.lg-*-*-*  // large displays and up
```

Example:

```html
<div class="col-center-stretch md-row-center-stretch lg-row-between-stretch">
  <div>first</div>
  <div>second</div>
  <div>third</div>
</div>
```

Resize the screen to see the children rearranged.

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="pretty-children col-center-stretch md-row-center-stretch lg-row-between-stretch">
      <div>first</div>
      <div>second</div>
      <div>third</div>
    </div>
  </div>
</div>

# Child

<div class="sf-collapse">
  <div class="sf-collapse-head theme-accent">
    <span class="sf-icon-info-circle inline flex-none" style="margin-right: 0.75rem"></span>
    <p>Breaking changes in `0.13.0`. Click for migration guide.</p>
  </div>
  <div class="sf-collapse-body border border-accent">
    <ul>
      <li>
        <span>Replace `flex-<align>` classes with `self-<align>`:</span>
        <ul>
          <li>`class="flex-start"` → `class="self-start"`</li>
          <li>`class="flex-center"` → `class="self-center"`</li>
          <li>`class="flex-end"` → `class="self-end"`</li>
          <li>`class="flex-stretch"` → `class="self-stretch"`</li>
        </ul>
      </li>
      <li>
        <span>Replace `flex-order-N` classes with `order-N`:</span>
        <ul>
          <li>`class="flex-order-1"` → `class="order-1"`</li>
        </ul>
      </li>
      <li>
        <span>Replace media-aware classes `flex-<size>-*` with `<size>-flex-*`, `<size>-self-*`, or `<size>-order-N`:</span>
        <ul>
          <li>
            `class="flex-sm-none flex-sm-stretch flex-sm-order-2"` → `class="sm-flex-none sm-self-stretch sm-order-2"`
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

Child properties are defined with the `.flex-*`, `.self-*` and `.order-*` classes.

To control child stretchiness across the main axis, use `.flex-N`, where N
ranges from 1 to 12. In flexbox terms, this corresponds to `{flex: N}`.
You can also use `flex-none` to make the element rigid.

```html
<div class="row-between-center space-out-h">
   <div class="flex-1">small</div>
   <div class="flex-6">huge</div>
   <div class="flex-1">small</div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="row-between-center pretty-children space-out-h">
      <div class="flex-1">small</div>
      <div class="flex-6">huge</div>
      <div class="flex-1">small</div>
    </div>
  </div>
</div>

To control child order, use `.order-N`, where N ranges from -1 to 12.
In flexbox terms, this corresponds to `{order: N}`.

```html
<div class="row-around-center">
  <div class="order-2">third (order: 2)</div>
  <div class="order-1">second (order: 1)</div>
  <div class="order--1">first (order: -1)</div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="row-around-center pretty-children">
      <div class="order-2">third (order: 2)</div>
      <div class="order-1">second (order: 1)</div>
      <div class="order--1">first (order: -1)</div>
    </div>
  </div>
</div>

To control child self-alignment, use one of the `.self-*` flags. In
flexbox terms, this corresponds to `{align-self: <align>}`.

```html
<div class="row-between-center" style="min-height: 6em">
  <div class="self-stretch">stretch</div>
  <div class="self-start">top</div>
  <div class="self-center">center</div>
  <div class="self-end">bottom</div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="row-between-center pretty-children" style="min-height: 6em">
      <div class="self-stretch">stretch</div>
      <div class="self-start">top</div>
      <div class="self-center">center</div>
      <div class="self-end">bottom</div>
    </div>
  </div>
</div>

## Media-aware children

Each class has several media-aware versions:

```scss
.flex-*   // all displays (no @media)
.self-*   // all displays (no @media)
.order-N  // all displays (no @media)

.sm-*-*   // small displays only
.md-*-*   // medium displays and up
.lg-*-*   // large displays and up
```

# Grid

<div class="sf-collapse">
  <div class="sf-collapse-head theme-accent">
    <span class="sf-icon-info-circle inline flex-none" style="margin-right: 0.75rem"></span>
    <p>Breaking changes in `0.13.0`. Click for migration guide.</p>
  </div>
  <div class="sf-collapse-body border border-accent">
    <ul>
      <li>
        <span>The `grid` class with default breakpoints has been removed. Make sure to specify `grid-N` explicitly:</span>
        <ul>
          <li>
            `class="grid"` → `class="grid-2 grid-md-4 grid-lg-6"`
          </li>
        </ul>
      </li>
      <li>
        <span>Replace media-aware classes `grid-<size>-*` with `<size>-grid-*`:</span>
        <ul>
          <li>
            `class="grid-sm-1"` → `class="sm-grid-1"`
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

It's convenient to have a shortcut to a media-responsive flex container that
wraps its items on different breakpoints. `.grid-*` is a primitive version of that.
Open this on a [separate page](examples/grid-demo/) to resize the page more
easily.

```html
<div class="grid-2 md-grid-4 lg-grid-6">
  <div>One</div>
  <div>...</div>
  <div>Twenty</div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="grid-2 md-grid-4 lg-grid-6 pretty-children">
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

Use these classes together with media prefixes (see below) to tune the
breakpoints for your specific needs:

```html
<div class="grid-1 md-grid-2 lg-grid-3">
  <div>One</div>
  <div>...</div>
  <div>Twenty</div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="grid-1 md-grid-2 lg-grid-3 pretty-children">
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

## Media-aware grids

Each class has several media-aware versions:

```scss
.grid-N     // all displays (no @media)
.sm-grid-N  // small displays only
.md-grid-N  // medium displays and up
.lg-grid-N  // large displays and up
```

# Whitespace

stylific defines sensible whitespace defaults and a few helper classes.
Together, they should save you from writing case-by-case whitespace rules most
of the time.

## Defaults

First of all, stylific resets all margins and padding to 0 for all elements.
Whitespace is added back in a selective fashion, using:

1. Container padding.
2. Margins between container's children.

Typographically meaningful content like headers and paragraphs needs whitespace
all around it. It's achieved by combining container padding with margins between
children. By default, this styling is applied to `sf-article` and some other
stylific components. This combination of properties is also available as the
`.container` class (see below).

## Classes

These global helper classes are useful for manual whitespace adjustment.

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
