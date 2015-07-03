<!-- TOC -->
<div sf-collapse doc-toc theme="text-accent">
  <label class="active" theme="accent"></label>
  <sf-collapse-body>
    [Variables](configuration/#variables)
    [Subclassing](configuration/#subclassing)
  </sf-collapse-body>
</div>

# Variables

The library is configurable: many styles are tied to preprocessor variables. See
[`_variables.scss`](https://github.com/Mitranim/stylific/blob/master/scss/_variables.scss)
for a complete list, but here's a few examples.


Change the base font size, scaling the entire site up or down. Unlike other font
size declarations, this particular metric should be in fixed units like `pt` or
`px`:

```scss
$sf-rem: 14pt;
```

Change the base text and background colour.

```scss
$sf-color-text: white;
$sf-color-background: black;
```

Redefine some other colours:

```scss
$sf-color-map-primary: (
  name: 'primary',
  default: smoke,
  active: lighten(smoke, 10%),
  selected: lighten(smoke, 20%)
);
```

Change the timing of common transitions or disable them altogether:

```scss
$sf-transition-duration: 0.4s;
$sf-transition-timing-function: linear;
```

Adjust common whitespace interval:

```scss
$sf-space: 0.5rem;
```

And so on. See the full
[reference](https://github.com/Mitranim/stylific/blob/master/scss/_variables.scss).

# Subclassing

Borrowing an
[example](https://github.com/Mitranim/stylific/blob/master/src-docs/styles/components/doc-toc.scss)
from this documentation's source, suppose you want to subclass
[`sf-collapse`](components/#sf-collapse) to make a TOC element. In your Sass
source, define a component that inherits all of sf-collapse styling:

```scss
doc-toc, [doc-toc] {
  @extend sf-collapse;
}
```

Then add custom styling to enhance or override sf-collapse defaults:

```scss
doc-toc, [doc-toc] {

  // Subclass sf-collapse.
  @extend sf-collapse;

  /**
   * Layout.
   */
  width: 10em;
  float: right;
  margin-left: $sf-space;

  // Don't offset the next element.
  margin-bottom: 0;

  // Default labeling.
  > label {padding: $sf-space / 2}
  > label:empty {
    &::before {
      content: 'Contents';
    }
    &::after {
      padding-left: 0.5em;
    }
  }

  /**
   * Cosmetic.
   */
  @include sf-outline-weak;
  sf-collapse-body, [sf-collapse-body] {
    // Layout.
    display: flex;
    flex-direction: column;
    // Whitespace.
    padding: 0;
    > * {padding: $sf-space / 2}
  }
}
```

That was easy! In a few lines of code, we made an extended version of
[`sf-collapse`](https://github.com/Mitranim/stylific/blob/master/scss/components/sf-collapse.scss).
The original component's styles have remained unchanged, and you can subclass
it again for something different. And you can `@extend` the new component, as
well!
