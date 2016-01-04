<!-- {% extend('index.html', {title: 'themes'}) %} -->

<!-- TOC -->
<div class="sf-collapse doc-toc theme-text-accent">
  <div class="sf-collapse-head active theme-accent"></div>
  <div class="sf-collapse-body">
    [Overview](themes/#overview)
    [Text Themes](themes/#text-themes)
    [Full Themes](themes/#full-themes)
    [Custom Configuration](themes/#custom-configuration)
  </div>
</div>

# Overview

Starting with `0.1.0`, stylific's approach to theming is similar to the one
suggested by [Angular
Material](https://material.angularjs.org/latest/#/layout/container).

You configure three themes: `primary`, `accent`, and `warn`. Each theme consists
of the main colour and two additional hues for "activated" and "selected"
states.

For each given theme `X`, the library creates two classes: `.theme-X` and
`.theme-text-X`. The text theme only changes the text colour, automatically
adjusting it to a luminosity comfortably contrasting the default background
colour. The "full" theme uses the theme colour for the background, automatically
selecting a text colour that contrasts it.

Each theme is configurable, and you can also register additional themes. In
addition, you can adjust the text and background colour with variables. See
[`_variables.scss`](https://github.com/Mitranim/stylific/tree/master/scss/_variables.scss)
and
[`colors.scss`](https://github.com/Mitranim/stylific/tree/master/scss/colors.scss).

# Text Themes

Demo of some elements with the `.theme-text-*` themes.

```html
<!-- ... -->
<button class="theme-text-primary">text-primary button</button>
<div class="theme-text-primary">text-primary text</div>
<input class="theme-text-primary" value="text-primary input">
<!-- ... -->
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="docs-layout-spaced">
      <button>unthemed button</button>
      <div>unthemed text</div>
      <input value="unthemed input">
    </div>
    <div class="docs-layout-spaced">
      <button class="theme-text-primary">text-primary button</button>
      <div class="theme-text-primary">text-primary text</div>
      <input class="theme-text-primary" value="text-primary input">
    </div>
    <div class="docs-layout-spaced">
      <button class="theme-text-accent">text-accent button</button>
      <div class="theme-text-accent">text-accent text</div>
      <input class="theme-text-accent" value="text-accent input">
    </div>
    <div class="docs-layout-spaced">
      <button class="theme-text-warn">text-warn button</button>
      <div class="theme-text-warn">text-warn text</div>
      <input class="theme-text-warn" value="text-warn input">
    </div>
    <div class="docs-layout-spaced">
      <button disabled>disabled button</button>
      <input disabled value="disabled input">
    </div>
    <div class="docs-layout-spaced">
      <button disabled class="theme-text-primary">disabled text-primary button</button>
      <input disabled class="theme-text-primary" value="disabled text-primary input">
    </div>
    <div class="docs-layout-spaced">
      <button disabled class="theme-text-accent">disabled text-accent button</button>
      <input disabled class="theme-text-accent" value="disabled text-accent input">
    </div>
    <div class="docs-layout-spaced">
      <button disabled class="theme-text-warn">disabled text-warn button</button>
      <input disabled class="theme-text-warn" value="disabled text-warn input">
    </div>
  </div>
</div>

# Full Themes

Demo of some elements with the full themes.

```html
<!-- ... -->
<button class="theme-primary">`primary` button</button>
<div class="theme-primary">`primary` text</div>
<input class="theme-primary" value="`primary` input">
<!-- ... -->
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="docs-layout-spaced">
      <button class="theme-primary">primary button</button>
      <div class="theme-primary">primary text</div>
      <input class="theme-primary" value="primary input">
    </div>
    <div class="docs-layout-spaced">
      <button class="theme-accent">accent button</button>
      <div class="theme-accent">accent text</div>
      <input class="theme-accent" value="accent input">
    </div>
    <div class="docs-layout-spaced">
      <button class="theme-warn">warn button</button>
      <div class="theme-warn">warn text</div>
      <input class="theme-warn" value="warn input">
    </div>
    <div class="docs-layout-spaced">
      <button disabled class="theme-primary">disabled primary button</button>
      <div class="theme-primary pad">padded primary text</div>
      <input disabled class="theme-primary" value="disabled primary input">
    </div>
    <div class="docs-layout-spaced">
      <button disabled class="theme-accent">disabled accent button</button>
      <div class="theme-accent pad">padded accent text</div>
      <input disabled class="theme-accent" value="disabled accent input">
    </div>
    <div class="docs-layout-spaced">
      <button disabled class="theme-warn">disabled warn button</button>
      <div class="theme-warn pad">padded warn text</div>
      <input disabled class="theme-warn" value="disabled warn input">
    </div>
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
<button class="theme-text-success">text theme</button>
<button class="theme-success">full theme</button>
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
