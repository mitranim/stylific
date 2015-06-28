## Description

`stylific` is a CSS library, similar to
[Bootstrap](http://getbootstrap.com), with a focus on modern CSS features, a
more modest scope, and no JavaScript dependency.

See the [documentation/demo site](http://mitranim.com/stylific/).

What sets it apart:
* Layouts are based on flexbox and don't use floats.
* No JavaScript. Uses pure CSS for interactive components like modal dialogs,
  tabsets, dropdowns, collapsable navbars that require JS in other libraries.
* No pixels. Dimensions are based on `em` and `rem`, making them easy to scale
  together.
* Component-based approach: styles are scoped under customisable tag and
  attribute names.

The component-based approach makes the library easy to customise and extend. To
use a modified version of a built-in component, just reuse its styles as a mixin
and add additional rules.

This is written with [Sass](http://sass-lang.com). Sass is required to take
full advantage of the library by using variables, extends, and other features.

## Installation

In a shell:

```shell
npm i --save-dev stylific
# or
bower i --save stylific
# or
jspm install stylific
```

In your Sass source (adjust the relative path to match yours):

```scss
@import './node_modules/stylific/scss/stylific';
```

Before importing, you can adjust variables exposed by the package, such as the
tagname prefix, colours, media breakpoints, fonts, and other. See
[`scss/_variables.scss`](scss/_variables.scss) for the full option reference.

**Caution**: neither Sass nor stylific account for missing vendor prefixes. You
must compensate by combining it with
[`autoprefixer`](https://github.com/postcss/autoprefixer) in your build system.

## Contributing

If you spot a bug or have a feature suggestion, please open an [issue](/issues).

To contribute code, send a pull request.

Documentation (the `gh-pages` branch) is compiled from `docs-src` in the master
branch. To contribute to the documentation, send pull requests to `master`.
