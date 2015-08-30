<!-- TOC -->
<div class="sf-collapse doc-toc theme-text-accent">
  <label class="active theme-accent"></label>
  <div class="sf-collapse-body">
    [Overview](#overview)
    [Installation and Usage](#installation-and-usage)
    [Contributing](#contributing)
  </div>
</div>

# Overview

`stylific` is a CSS library written with [Sass](http://sass-lang.com). It's
designed to serve as a flexible website foundation, and provides some common UI
components as building blocks.

In many ways this is similar to [Bootstrap](http://getbootstrap.com), with the
difference that stylific uses typographic units (`rem` and `em`) and flexbox.
Bootstrap 4 may or may not obviate the need for this library.

Prior to version 0.7.0, stylific used custom tag names and attributes for most
of the styling. Starting with 0.7.0, all styles are class based for
compatibility with React and/or strict HTML validators.

## Flexible Units

stylific uses `em` and `rem` units for most dimensions. Unlike pixels, they
scale with font size, and automatically cascade changes to the base size across
the entire layout. This makes your website easily scalable, and keeps dimensions
extremely stable between different screen and font sizes.

In combination with flexbox layouts, this makes you mobile-friendly practically
for free. You can get away with just adjusting the `html` font size for
different displays. In fact, stylific does that by default.

## Flexbox

The flexbox specification solves problems that used to demand convoluted
workarounds, obviates the need for specialised grid systems, and lets you create
intelligent, self-scaling layouts without fixed dimensions. Browser support
(with vendor prefixes) is already good enough. The wonderful
[autoprefixer](https://github.com/postcss/autoprefixer) can add them
automatically.

See [Layout](layout/) for details.

# Installation and Usage

To fully benefit from stylific, you'll need the [Sass](http://sass-lang.com)
preprocessor and a build system to compile it. If you're not familiar with
preprocessors, head over to the repository and check
[`gulpfile.js`](https://github.com/Mitranim/stylific/blob/master/gulpfile.js)
for an example build system. It uses [gulp](http://gulpjs.com) as the task
runner. Look for the style tasks.

You'll also need a package manager to install stylific. It's available on
[`npm`](https://www.npmjs.com), [`jspm`](http://jspm.io), and
[`bower`](http://bower.io). Let's use `npm` as an example. `cd` to your
project's root and run:

```sh
npm i --save-dev stylific
```

After installing, import it in your Sass source (adjust the path if needed):

```scss
@import './node_modules/stylific/scss/stylific';
```

This allows you to configure the library with variables, subclass built-in
components, and so on.

**Caution**: neither Sass nor stylific account for missing vendor prefixes. You
must compensate by combining it with
[`autoprefixer`](https://github.com/postcss/autoprefixer) in your build system.

# Contributing

I'd love you to get involved!

To contribute to the library, send a
[pull request](https://github.com/Mitranim/stylific) or open a new
[issue](https://github.com/Mitranim/stylific/issues).

You can contribute to this documentation, too! It's generated from
[`src-docs`](https://github.com/Mitranim/stylific/tree/master/src-docs) in the
`master` branch and served as `gh-pages`. Follow
[these instructions](https://github.com/Mitranim/stylific/tree/gh-pages) to
set up a local build for development, then send your changes to `master`.
