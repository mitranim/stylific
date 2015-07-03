<!-- TOC -->
<div sf-collapse doc-toc theme="text-accent">
  <label class="active" theme="accent"></label>
  <sf-collapse-body>
    [Overview](#overview)
    [Motivation](#motivation)
    [What's Different](#what-s-different)
    [Installation and Usage](#installation-and-usage)
    [Contributing](#contributing)
  </sf-collapse-body>
</div>

# Overview

`stylific` ([source](https://github.com/Mitranim/stylific)) is a CSS library
written with [Sass](http://sass-lang.com) (previously with LESS). It's designed
to serve as a flexible foundation for website styling, and provides common UI
components as building blocks.

There are plenty of UI libraries out there: Bootstrap, Foundation, Polymer's
Paper Elements, Angular Material, and so on. What's different about this one?
Read on!

This project is nowhere near as ambitious as the other libraries I've mentioned.
In fact, it's much more modest in scope than the styles of any moderately sized
website. It exists to provide a good starting point for new projects, and
showcase the advantages of exploiting modern CSS standards.

## A Demo Please?

This website is a live demo. See [Components](components/) for an overview of
UI elements. Also, check out the documentation's
[source](https://github.com/Mitranim/stylific/tree/master/src-docs) to see how
it imports and extends the library.

# What's Different

## Component Oriented

This library organises styles around [tags and
attributes](https://github.com/Mitranim/stylific/tree/master/scss/components).
Most styles are scoped to a customisable name, like `sf-tabset`, and available
in the form of a custom tag or a custom attribute. Some styles are applied by
default to native inputs, but also exposed as attributes (like `[sf-input]`).
Each component is purposely ignorant of others. Many components accept
configuration flags as part of their attribute's value.

This approach makes it easier to remember component names, and keeps your markup
semantic. It also makes it far easier to convert your elements into web
components (custom elements) with a library like Polymer or
[atril](http://mitranim.com/atril/), because you will already have the tags
and styles in place. You can begin by styling your website statically, then
effortlessly enhance selected elements with JavaScript.

Another benefit of this approach is that because each component's styles are
scoped under a single tag or attribute name, they're easy to
[subclass](configuration/#subclassing) using Sass's `@extend`
directive.

It also turns out to be a great strategy for CSS specificity. Isolating styles
to custom tags and their immediate children keeps CSS specificity low and
prevents it from compounding, making base styles easy to override. It might be
the solution to specificity you've been looking for!

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
intelligent, self-scaling layouts without fixed dimensions. Browser support is
already good enough, if you factor in vendor prefixes. The wonderful
[autoprefixer](https://github.com/postcss/autoprefixer) can do it automatically.

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

This allows you to [configure](configuration/) the library with variables,
subclass built-in components, and so on.

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
