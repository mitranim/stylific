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
* Component-based approach: styles are scoped under customisable tag names.

The component-based approach makes the library easy to customise and extend. To
use a modified version of a built-in component, just reuse its styles as a mixin
and add additional rules.

This is written with [LESS](http://lesscss.org). If enough people get invested,
it will be trivial to port to [SASS](http://sass-lang.com) and maintain both
versions.

## Installation

In a shell:

```shell
bower i --save stylific
# or
npm i --save-dev stylific
```

In your LESS source (adjust the relative path to match yours):

```less
// Include styles, variables, and mixins.
@import (less) './bower_components/stylific/less/stylific';
// OR
// Import variables and mixins but don't output default CSS.
@import (reference) './bower_components/stylific/less/stylific';
```

After importing, you can adjust variables exposed by the package, such as the
tagname prefix, colours, whitespace, media breakpoints, animations, fonts, and
whether to expose global class/attribute names. See
[`less/variables.less`](less/variables.less) for the full option reference.

```less
// Components will have names like `app-modal` instead of `sf-modal`.
@sf-prefix: ~'app';

// Disable default helper classes.
@sf-enable-global-classes: false;
```

**Caution**: neither LESS nor stylific account for vendor prefixes. You
must compensate by combining it with
[`autoprefixer`](https://github.com/postcss/autoprefixer) in your build system.

## Contributing

If you spot a bug or have a feature suggestion, please open an [issue](/issues).

To contribute code, send a pull request.

Documentation (the `gh-pages` branch) is compiled from `docs-src` in the master
branch. To contribute to the documentation, send pull requests to `master`.
