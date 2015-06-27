<!-- TOC -->
<div class="doc-toc" theme="text-accent">
  <input checked id="<%= uniqId() %>" type="checkbox">
  <label for="<%= lastUniqId() %>" theme="accent"></label>
  [Overview](#overview)
  [Motivation](#motivation)
  [What's Different](#what-s-different)
  [Installation and Usage](#installation-and-usage)
  [Contributing](#contributing)
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

# Motivation

I'm sick of UI frameworks relying on unnecessary, often incompatible JavaScript
for the basest functionality. People have had to rewrite the entire Bootstrap JS
as "native Angular directives" or "native React components" just to un-break
basic UI elements. This has got to stop.

It also irks me when people size things in pixels instead of typographic units
(em and rem) and use fixed dimensions instead of flexible positioning. This
makes a website difficult to scale and unfriendly to visitors who adjust the
font size.

These issues are so fundamental that you have to write styles and UI components
from scratch to avoid them. stylific provides at least _some_ basis.

# What's Different

## No JavaScript

stylific has no JavaScript dependency. Its interactive components work with
plain HTML and CSS. Benefits:
* No unwanted third party dependencies.
* Better baseline functionality for visitors without JS.
* Equally compatible with all JS frameworks.

CSS2-CSS3 features like `:checked`, `:target`, sibling selectors, `:not`,
pseudo-elements, media queries, flexbox, transitions, and others obviate the
need for JavaScript for many elements that used to be impossible to implement
without it. See [Components](components/) for basic examples.

This doesn't mean you can't use JavaScript; quite the opposite.
Because stylific only needs static markup, enhancement with JavaScript is
[trivial](examples/active-switch/). Some stylific components provide simple
hooks in the form of `.active` classes.

## Component Oriented

This library organises styles around
[tags](https://github.com/Mitranim/stylific/tree/master/scss/components). Most
styles are scoped to customisable tagnames, like `sf-tabset`. Some
styles are applied by default to native inputs, but also exposed as classes
(like `.sf-input`). Each component is purposely ignorant of others.

This approach makes it easier to remember component names, and keeps your markup
semantic. It also makes it far easier to convert your elements into web
components (custom elements) with a library like Polymer or
[atril](http://mitranim.com/atril/), because you will already have the tags
and styles in place. You can begin by styling your website statically, then
effortlessly enhance selected elements with JavaScript.

Another benefit of this approach is that because each component's styles are
scoped under a single tag or class name, they're easy to
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
finally good enough, if you factor in  [vendor
prefixes](https://github.com/postcss/autoprefixer).

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
