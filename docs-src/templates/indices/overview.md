<!-- TOC -->
<div style="margin: 0"><doc-toc class="orange">
  <input checked id="toc-toggle" type="checkbox">
  <label for="toc-toggle"></label>
  [Overview](#overview)
  [Motivation](#motivation)
  [What's Different](#what-s-different)
  [Installation and Usage](#installation-and-usage)
  [Contributing](#contributing)
</doc-toc></div>

# Overview

`stylific` ([source](https://github.com/Mitranim/stylific)) is a CSS library
written with [LESS](http://lesscss.org). It can serve as a website's foundation,
and provides common UI components as building blocks.

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
[source](https://github.com/Mitranim/stylific/tree/master/docs-src) to see how
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

The [Patterns](patterns/) section also explains the thinking behind this.

## No JavaScript

stylific has no JavaScript dependency. Its interactive components work with
plain HTML and CSS. This means no unwanted dependencies and better baseline
functionality. This also means your basic UI is equally compatible with all JS
frameworks, which should cheer up anyone who had switched between different
adaptations of Boostrap.

This documentation has no JavaScript on any page (check the source). All demoed
components still work.

No JS dependency doesn't mean you can't use JavaScript; quite the opposite.
Because it only needs static markup, enhancement with JavaScript is
[trivial](examples/active-switch.html). Some stylific components provide
simple hooks for that.

## Flexible Units

stylific uses `em` and `rem` units for all dimensions. Unlike pixels, they
scale with font size, and automatically cascade changes to the base size across
the entire layout. Scaling the website becomes trivial, and you never have to
deal with broken layouts.

Try adjusting the font in your browser to see how well this site scales to any
size. This is due to typographic units and flexible positioning.

## Component Oriented

Styles are scoped to custom tag names, which makes it easy to reason about
components and subclass them, and combines very well with a component approach
in AngularJS or Polymer. See [Patterns#Component Oriented](patterns
/#component-oriented).

## Minimal Markup

stylific's components require only about half as much HTML markup as similar
Bootstrap components. Compare this across the demos. Most components need only
an irreducible minimum of markup.

# Installation and Usage

To fully benefit from stylific, you'll need the [LESS](http://lesscss.org)
preprocessor and a build system to compile it. If you're not familiar with
preprocessors, head over to the repository and check
[`gulpfile.js`](https://github.com/Mitranim/stylific/blob/master/gulpfile.js)
for an example build system. It uses [gulp](http://gulpjs.com) as the task
runner. Look for the style tasks.

You'll also need [bower](http://bower.io) or [npm](https://www.npmjs.com) as
your package manager (get both). The install stylific using either of them.
Let's use bower as an example. `cd` to your project's root and run:

```sh
bower i --save-dev stylific
```

After installing, import it in your LESS source (adjust the path if needed):

```less
@import (less) './bower_components/stylific/less/stylific';
```

This allows you to [configure](configuration/) the library with variables,
subclass and extend built-in components, and so on.

# Contributing

I'd love you to get involved!

To contribute to the library, send a
[pull request](https://github.com/Mitranim/stylific) or open a new
[issue](https://github.com/Mitranim/stylific/issues).

You can contribute to this documentation, too! It's generated from
[`docs-src`](https://github.com/Mitranim/stylific/tree/master/docs-src) in the
`master` branch and served as `gh-pages`. Follow
[these instructions](https://github.com/Mitranim/stylific/tree/gh-pages) to
set up a local build for development, then send your changes to `master`.
