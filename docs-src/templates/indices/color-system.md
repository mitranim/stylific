<!-- TOC -->
<div style="margin: 0"><doc-toc class="warning">
  <input checked id="toc-toggle" type="checkbox">
  <label for="toc-toggle"></label>
  [Demo](color-system/#demo)
  [Overview](color-system/#overview)
  [Straight Set](color-system/#straight-set)
  [Inverse Set](color-system/#inverse-set)
  [Static Mix](color-system/#static-mix)
  [Interactive Mix](color-system/#interactive-mix)
  [Base Colours and Classes](color-system/#base-colours-and-classes)
  [Adding Colours](color-system/#adding-colours)
</doc-toc></div>

# Demo

First of all, here's a short demo. Colours are mainly used with colour classes
like `.info`, and are available as LESS variables like `@sf-color-info`. For
each colour, there's a straight class and an inverse class, and in many
components, children respond to the parent's colour class in a special way.

```html
<button class="sf-btn">colourless button (interactive mix)</button>

<button class="sf-btn info-inverse">info-inverse button (interactive mix)</button>

<p class="pad info" style="min-height: 3em">
  info paragraph (static mix).
</p>

<p class="pad orange-inverse" contenteditable style="min-height: 3em">
  orange-inverse paragraph (interactive mix).
</p>
```

<div><doc-demo style="display: block">
  <button class="sf-btn">colourless button (interactive mix)</button>

  <button class="sf-btn info-inverse">info-inverse button (interactive mix)</button>

  <p class="pad info" style="min-height: 3em">
    info paragraph (static mix).
  </p>

  <p class="pad orange-inverse" contenteditable style="min-height: 3em">
    orange-inverse paragraph (interactive mix).
  </p>
</doc-demo></div>

# Overview

Colours are a common stumbling block. Standard scenario:
1. There's a base handful of colours, carefully chosen by your designer,
   reflecting brand values, sanctified on a management meeting with the blood
   of a thousand virgins, etc.
2. You want to define them in one place and use everywhere.
3. You need to derive minor alterations for reflecting interactive states, like
   `:hover`, `:active`, `:focus`, `.active`, etc., and automatically apply them
   wherever colour classes are used.

Preprocessors solve (2) and help with (3), but it requires a lot of boilerplate.
Different elements need different selectors for states (example: [special
selector](https://github.com/Mitranim/stylific/blob/master/less/components/sf-
tabset.less#L136) for active label in sf-tabset). Sometimes you want child
elements to have interactive states that respond to colour classes of parent
elements (same example; active label's colour is defined by its parent tabset's
colour class).

stylific handles all this boilerplate so you don't have to. It lets you
register a colour with just a few lines of code, and it'll be automatically
used in internal colour mixes and exposed as a global class. Pretty nifty!

We'll get to registering custom colours [later](color-system/#adding-colours),
but first, let's see how the system is set up. We need to undestand the
following concepts:
* [Straight colour set](color-system/#straight-set)
* [Inverse colour set](color-system/#inverse-set)
* [Static colour mix](color-system/#static-mix)
* [Interactive colour mix](color-system/#interactive-mix)

## Straight Set

A straight set takes a colour and produces two rules: `color` and
`background-color`. Both have the same hue as the source colour, and the
background colour's lightness is the opposite of text's.

For the base text colour, text lightness is unchanged. For other colours (which
are assumed to be non-grayscale), text lightness is set to 25% and background
lightness to 75%, to make sure the hue is recognisable.

```less
// Suppose we have defined a new colour.
@color-red: red;
.sf-colormix-base(@color-red, 0%);

// Output (pseudocode; colours are adjusted inside the mixin and output as #rgb).
color: hsl(hue(red), saturation(red), 25%);
background-color: hsl(hue(red), saturation(red), 75%);
```

In this example, `hsl()` is a [LESS function](http://lesscss.org/functions
/#color-definition-hsl). The last argument is the colour's desired lightness.

If you register this in the global colour mix as `.red`, the result will look
like this:

```html
<p class="pad red" style="min-height: 3em">Paragraph in red.</p>
```

<div><doc-demo>
  <p class="pad red" style="min-height: 3em">Paragraph in red.</p>
</doc-demo></div>

## Inverse Set

Just like a straight set, an inverse set takes a colour and produces two rules:
`color` and `background-color`. Their lightness is adjusted in the same way,
but inverted. Example:

```less
// Input.
.sf-colormix-base(red, 0%);

// Output (pseudocode; colours are adjusted inside the mixin and output as #rgb).
color: hsl(hue(red), saturation(red), 75%);
background-color: hsl(hue(red), saturation(red), 25%);
```

If you register this in the global colour mix as `.red-inverse`, the result will
look like this:

```html
<p class="pad red-inverse" style="min-height: 3em">Paragraph in red-inverse.</p>
```

<div><doc-demo>
  <p class="pad red-inverse" style="min-height: 3em">Paragraph in red-inverse.</p>
</doc-demo></div>

## Static Mix

A static mix may be straight or inverse. It takes a colour, defines two states,
and produces a straight or inverse colour set for each of them.

* Normal (no special state) with two rules:
  * `color`
  * `background-color`
* `.active` state with one rule:
  * `background-color` shifted in lightness by `@sf-delta-activated` (default 15%)

When a colour is shifted in lightness for a state, it's always shifted towards
the opposite. Light colours become darker, and dark colours become lighter. See
the [`.sf-shift-color()`](https://github.com/Mitranim/stylific/blob/master/
less/color-mixes.less#L193) mixin.

Continuing the `red` examples above:

```html
<p class="pad red" style="min-height: 3em">Paragraph in red (static mix, normal state).</p>
<p class="pad red active" style="min-height: 3em">Paragraph in red (static mix, .active state).</p>
```

<div><doc-demo>
  <p class="pad red" style="min-height: 3em">Paragraph in red (static mix, normal state).</p>
  <p class="pad red active" style="min-height: 3em">Paragraph in red (static mix, .active state).</p>
</doc-demo></div>

## Interactive Mix

An interactive mix is a superset of a static mix. It's also either straight or
inverse. It takes a colour, defines five states, and produces a straight or
inverse colour set for each of them.

* Normal — same as in static mix
* `:hover` with one rule:
  * `background-color` shifted in lightness by `@sf-delta-hover` (default 5%)
* `:focus`
  * `background-color` shifted in lightness by `@sf-delta-focus` (default 5%)
* `:active`
  * `background-color` shifted in lightness by `@sf-delta-active` (default 10%)
* `.active` — same as in static mix

Interactive mixes are automatically used for interactive elements like buttons,
inputs, contenteditable elements. You can apply them to your elements
programmatically with the `.sf-colormix-all-classes()` mixin (see below).

In your HTML, it may look like this:

```html
<p class="pad red" contenteditable style="min-height: 3em">Paragraph in red (interactive mix; hover me, click me).</p>
```

<div><doc-demo>
  <p class="pad red" contenteditable style="min-height: 3em">Paragraph in red (interactive mix; hover me, click me).</p>
</doc-demo></div>

# Base Colours and Classes

By default, stylific defines the following colours.

```less
// Grayscale.
@sf-base-text-color
@sf-base-background-color  // derived from @sf-base-text-color

// Palette.
@sf-color-error
@sf-color-info
@sf-color-success
@sf-color-warning
```

Redefining any of these variables affects all classes and states referencing it.

The central hub for registering colours is the
[`.sf-colormix-all-classes()`](https://github.com/Mitranim/stylific/blob/
master/less/color-mixes.less#L159) mixin. It includes two lines for each colour:
one for straight mix and one for inverse mix. It's called by other mixins and
sometimes manually in order to determine which _selectors_ correspond to which
_state_ for a particular element. Including a colour in this mixin causes its
colour class to be registered for all states for both static and interactive
mixes.

By default, the following colour classes are defined:

```less
.inverse
.error
.error-inverse
.info
.info-inverse
.success
.success-inverse
.warning
.warning-inverse
// ... user-defined classes, if any
```

# Adding Colours

The coolest part about stylific's colour system is that you're _not limited_ to
the base set. You can register additional colours under additional class names,
and they'll be automatically included into _all_ rules that use colour classes,
even for default components.

This has already been [shown](color-system/#straight-set) above, but let's
recap. Suppose we want to add a new colour.

```less
@color-orange: orange;
```

We have a colour here. To register it with stylific's system, we need to
partially duplicate stylific's definition of `.sf-colormix-all-classes()`.
LESS will merge this definition with the original _before_ it's invoked
elsewhere.

```less
.sf-colormix-all-classes(@prefix, @affix, @perc) {
  &.orange@{prefix}@{affix}         {.sf-colormix-base(@color-orange, @perc)}
  &.orange-inverse@{prefix}@{affix} {.sf-colormix-base-inverse(@color-orange, @perc)}
}
```

That's it! And now it's available in HTML under the class names we gave it:

```html
<p class="pad orange flex-1" contenteditable style="min-height: 3em">
  Paragraph in orange (interactive mix; hover me, click me).
</p>
<p class="pad orange-inverse flex-1" contenteditable style="min-height: 3em">
  Paragraph in orange-inverse (interactive mix; hover me, click me).
</p>
```

<div><doc-demo>
  <p class="pad orange flex-1" contenteditable style="min-height: 3em">
    Paragraph in orange (interactive mix; hover me, click me).
  </p>
  <p class="pad orange-inverse flex-1" contenteditable style="min-height: 3em">
    Paragraph in orange-inverse (interactive mix; hover me, click me).
  </p>
</doc-demo></div>
