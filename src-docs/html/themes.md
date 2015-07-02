<!-- TOC -->
<div doc-toc theme="text-accent">
  <input checked id="<%= uniqId() %>" type="checkbox">
  <label for="<%= lastUniqId() %>" theme="accent"></label>
  <sf-collapse-body>
    [Overview](themes/#overview)
    [Text Themes](themes/#text-themes)
    [Full Themes](themes/#full-themes)
    [Custom Configuration](themes/#custom-configuration)
  </sf-collapse-body>
</div>

# Overview

Starting with `0.1.0`, stylific's approach to theming is similar to the one
suggested by [Angular
Material](https://material.angularjs.org/latest/#/layout/container).

You configure three themes: `primary`, `accent`, and `warn`. Each theme consists
of the main colour and two additional hues for "activated" and "selected"
states.

For each given theme `X`, the library creates two attributes: `theme=X` and
`theme=text-X`. The text theme only changes the text colour, automatically
adjusting it to a luminosity comfortably contrasting the default background
colour. The "full" theme uses the theme colour for the background, automatically
selecting a text colour that contrasts it.

Each theme is configurable, and you can also register additional themes. In
addition, you can adjust the text and background colour with variables. See
[`_variables.scss`](https://github.com/Mitranim/stylific/tree/master/scss/_variables.scss)
and
[`colors.scss`](https://github.com/Mitranim/stylific/tree/master/scss/colors.scss).

# Text Themes

Demo of some elements with the `text-*` themes.

```html
<!-- ... -->
<button theme="text-primary">`text-primary` button</button>
<p theme="text-primary">`text-primary` paragraph</p>
<input theme="text-primary" value="`text-primary` input">
<!-- ... -->
```

<div doc-demo style="display: block" class="space-out">
  <div layout="space-between cross-center">
    <button>No theme button</button>
    <p>No theme paragraph</p>
    <input value="No theme input">
  </div>
  <div layout="space-between cross-center">
    <button theme="text-primary">`text-primary` button</button>
    <p theme="text-primary">`text-primary` paragraph</p>
    <input theme="text-primary" value="`text-primary` input">
  </div>
  <div layout="space-between cross-center">
    <button theme="text-accent">`text-accent` button</button>
    <p theme="text-accent">`text-accent` paragraph</p>
    <input theme="text-accent" value="`text-accent` input">
  </div>
  <div layout="space-between cross-center">
    <button theme="text-warn">`text-warn` button</button>
    <p theme="text-warn">`text-warn` paragraph</p>
    <input theme="text-warn" value="`text-warn` input">
  </div>
  <div layout="space-between cross-center">
    <button disabled>disabled button</button>
    <input disabled value="disabled input">
  </div>
  <div layout="space-between cross-center">
    <button disabled theme="text-primary">disabled `text-primary` button</button>
    <input disabled theme="text-primary" value="disabled `text-primary` input">
  </div>
  <div layout="space-between cross-center">
    <button disabled theme="text-accent">disabled `text-accent` button</button>
    <input disabled theme="text-accent" value="disabled `text-accent` input">
  </div>
  <div layout="space-between cross-center">
    <button disabled theme="text-warn">disabled `text-warn` button</button>
    <input disabled theme="text-warn" value="disabled `text-warn` input">
  </div>
</div>

# Full Themes

Demo of some elements with the full themes.

```html
<!-- ... -->
<button theme="primary">`primary` button</button>
<p theme="primary">`primary` paragraph</p>
<input theme="primary" value="`primary` input">
<!-- ... -->
```

<div doc-demo style="display: block" class="space-out">
  <div layout="space-between cross-center">
    <button theme="primary">`primary` button</button>
    <p theme="primary">`primary` paragraph</p>
    <input theme="primary" value="`primary` input">
  </div>
  <div layout="space-between cross-center">
    <button theme="accent">`accent` button</button>
    <p theme="accent">`accent` paragraph</p>
    <input theme="accent" value="`accent` input">
  </div>
  <div layout="space-between cross-center">
    <button theme="warn">`warn` button</button>
    <p theme="warn">`warn` paragraph</p>
    <input theme="warn" value="`warn` input">
  </div>
  <div layout="space-between cross-center">
    <button disabled theme="primary">disabled `primary` button</button>
    <input disabled theme="primary" value="disabled `primary` input">
  </div>
  <div layout="space-between cross-center">
    <button disabled theme="accent">disabled `accent` button</button>
    <input disabled theme="accent" value="disabled `accent` input">
  </div>
  <div layout="space-between cross-center">
    <button disabled theme="warn">disabled `warn` button</button>
    <input disabled theme="warn" value="disabled `warn` input">
  </div>
</div>

# Custom Configuration

To use a custom theme, you need to import stylific into your
[`.sass`](http://sass-lang.com) source and configure it with variables.

Each colour is defined as a map with three hues: `default`, `active`, and
`selected`. The `active` and `selected` hues are used on interactive elements.

Suppose we want to change the primary tune:

```scss
$sf-color-map-primary: (
  name: 'primary',
  default: darkblue,
  active: lighten(darkblue, 10%),
  selected: lighten(darkblue, 20%)
);
```

We can also add more themes. Suppose you wrote a `$sf-color-map-success` colour
and want it as a new theme. Modify the `$sf-color-map` variable:

```scss
$sf-color-map-success: (...);
$sf-color-maps: $sf-color-map-primary, $sf-color-map-accent, $sf-color-map-warn, $sf-color-map-success;
```

Then you can use the `success` theme in your HTML:

```html
<button theme="text-success">text theme</button>
<button theme="success">full theme</button>
```

You can also change the base text and background colours:

```scss
$sf-color-text: white;
$sf-color-background: black;
```

After defining all variables, import stylific and let it take care of the rest
(the path will depend on your package and build configuration):

```scss
@import './node_modules/stylific/scss/stylific';
```
