<!-- TOC -->
<div style="margin: 0"><doc-toc class="brown">
  <input checked id="toc-toggle" type="checkbox">
  <label for="toc-toggle"></label>
  [Overview](configuration/#overview)
  [Variables](configuration/#variables)
  [Subclassing Components](configuration/#subclassing-components)
  [Extending Components](configuration/#extending-components)
</doc-toc></div>

# Overview

After importing stylific into your LESS source, you can reconfigure its
variables or alter its component mixins.

Because each component is isolated as a tag and written as a LESS mixin,
subclassing and extending is a breeze.

If you're unfamiliar with the idea, a mixin in a CSS preprocessor is basically a
named collection of CSS rules. It may or may not take arguments as input.

# Variables

The library is configurable: many styles are tied to preprocessor variables. See
[`variables.less`](https://github.com/Mitranim/stylific/blob/master/
less/variables.less) for a complete list, but here's a few examples.

Change the prefix of all tag and class names from `sf-` to something else:

```less
@sf-prefix: ~'app';
// Now components will be called `app-dropdown`, etc.
```

Apply component styling to some common HTML elements like `<input>` (see
[example](components/#sf-input)):

```less
@sf-enable-global-element-components: false;
```

Change the base font size, scaling the entire site up or down. This metric must
be in `em` or `rem`:

```less
@sf-font-size-base: 0.9em;
```

Change the base text colour. Other colours will automatically adjust to better
match the text. Using a light text colour will invert the luminance of most
other colours:

```less
@sf-base-text-color: yellow;
```

Redefine some other colours:

```less
@sf-color-error: red;
@sf-color-info:  lightblue;
```

Change the timing of common transitions or disable them altogether:

```less
// Defaults
@sf-enable-common-transitions: true;
@sf-common-transition-duration: 0.2s;
@sf-common-transition-timing-function: ease;
```

Adjust common typographic offsets:

```less
@sf-common-padding: 1rem;
@sf-common-margin:  1rem;
```

And so on. See the full
[reference](https://github.com/Mitranim/stylific/blob/master/
less/variables.less).

# Subclassing Components

Borrowing an example from this documentation's source, suppose you want to
subclass `sf-collapse` to make a TOC element. In your LESS source, define a tag
that inherits all of sf-collapse styling:

```less
doc-toc {
  // Subclass sf-collapse.
  .sf-collapse();
}
```

Then add custom styling to enhance or override sf-collapse defaults:

```less
doc-toc {

  // Subclass sf-collapse.
  .sf-collapse();

  /**
   * Layout.
   */
  width: 10em;
  // Float to right.
  float: right;
  // Offset from left.
  margin-left: @sf-common-margin;

  /**
   * Cosmetic.
   */
  .sf-shadow-weak();
  // Default padding for children.
  & > * {
    padding: @sf-common-padding / 2;
  }
  // Use interactive colours for immediate children.
  .sf-colormix-all-states(~' > *', true);

}
```

That was easy! In just a few lines of code, we made an extended version of
[`sf-collapse`](https://github.com/Mitranim/stylific/blob/master/less/components/sf-collapse.less)
without altering the original. The original component's styles have remained
unchanged, and you can subclass it again for something different.

# Extending Components

Suppose you want to alter the _original_ component. You can just write rules
under its tag, but this won't affect components that subclass it through its
mixin. LESS helps us here: it _merges_ mixins with the same name in the same
scope. Meaning, you can just write your own version of the component mixin,
and it will extend the original.

Borrowing an example from an earlier version of this documentation's source,
suppose you want to add special styles to links in `sf-article`.

```less
// Using exactly the same name as the original sf-article mixin
// causes LESS to merge them.
.sf-article() {

  // Indicate _blank links.
  :link[target*=_blank]::after {
    content: '⇒';
    opacity: 0.3;
    font-size: 0.8em;
    padding-left: 0.3em;
  }

}
```

Now sf-article has these styles in _addition_ to what it had. Any component
subclassing it will inherit them.
