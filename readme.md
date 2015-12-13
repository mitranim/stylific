[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com)

## Description

`stylific` is a CSS library, similar to
[Bootstrap](http://getbootstrap.com), with a focus on modern CSS features.

See the [documentation/demo site](http://mitranim.com/stylific/).

What's good:
* No pixels. Dimensions are based on `em` and `rem`, making them easy to scale
  together.
* Layouts are based on flexbox and don't use floats.

The library is written with [Sass](http://sass-lang.com). The best way to use it
is by importing into your Sass. This lets you configure stylific with variables,
use its mixins, derive styles with `@extend`, and so on.

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

**Note**: interactive functionality, like toggling dropdowns, requires the tiny
JavaScript file included with the library.

## Contributing

If you spot a bug or have a feature suggestion, please open an [issue](https://github.com/Mitranim/stylific/issues).

To contribute code, send a pull request.

Documentation (the `gh-pages` branch) is compiled from `docs-src` in the master
branch. To contribute to the documentation, send pull requests to `master`.
