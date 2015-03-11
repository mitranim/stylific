<!-- TOC -->
<div style="margin: 0"><doc-toc class="success">
  <input checked id="toc-toggle" type="checkbox">
  <label for="toc-toggle"></label>
  [Overview](patterns/#overview)
  [Component Oriented](patterns/#component-oriented)
  [CSS Hacks > JS](patterns/#css-hacks-js)
  [Flexbox Positioning](patterns/#flexbox-positioning)
  [Flexible Units](patterns/#flexible-units)
  [Whitespace](patterns/#whitespace)
</doc-toc></div>

# Overview

This library is more a collection of ideas and patterns than a complete UI
framework. This page describes the core concepts, so you can evaluate them for
your code.

# Component Oriented

This library organises styles around
[tags](https://github.com/Mitranim/stylific/tree/master/less/components). Most
styles are scoped to customisable tagnames, like `sf-tabset`. Some components
are class-based (like `.sf-input`), but there's an option to apply them to the
corresponding global elements by default.

This makes it easier to remember component names, and keeps your markup very
semantic. It also makes it far easier to convert your elements into web
components or angular directives, because you will already have the tags and
styles in place. You can begin by styling your website statically, then
effortlessly convert individual elements into web components.

An unexpected benefit of this approach is that we can define each component as a
single LESS mixin, making them trivial to
[subclass](configuration/#subclassing-components) and
[extend](configuration/#extending-components).

It also turns out to be a great strategy for CSS specificity. Isolating styles
to custom tags and their immediate children keeps CSS specificity low and
prevents it from compounding, making base styles easy to override. It might be
the solution to specificity you've been looking for!

# CSS Hacks > JS

I love JavaScript as much as everybody else, but requiring the visitor to run a
complex program to enable the basic UI is just ridiculous. If something can be
done with plain HTML and CSS, it should be. This improves performance for
everyone, and enables the UI for security-minded people who disallow JS.

CSS2-CSS3 features like `:checked`, `:target`, sibling selectors, `:not`,
pseudo-elements, media queries, flexbox, transitions, and others obviate the
need for JavaScript for many elements that used to be impossible to implement
without it. See [Components](components/) for basic examples.

Choose the right tool for your use case, don't bang the JS hammer on everything.

# Flexbox Positioning

The flexbox specification solves problems that used to demand convoluted
workarounds, obviates the need for specialised grid systems, and lets you create
intelligent, self-scaling layouts without fixed dimensions. Browser support has
been lagging for years, but with some
[prefixes](https://github.com/postcss/autoprefixer), it's already good enough.

# Flexible Units

Everything is sized in `em` and `rem` units. If you're not familiar with them,
here's a short version: `em` is a proportion of the parent element's font size,
and `rem` is a proportion of the root element's (html) font size.

Sizing everything relatively to font size, in combination with flexbox
positioning, makes a website's layout extremely stable and scalable. Changes to
the base font size cascade across the entire layout. The user is free to adjust
the font size without breaking the site.

In combination with flexbox layouts, this makes you mobile-friendly practically
for free. You can get away with just adjusting the `html` font size for
different displays. In fact, stylific does that by default, so you get a
scalable site without effort.

# Whitespace

stylific is very conservative about whitespace. Most elements have zero
default margin and padding. This makes layouts very predictable and
controllable. You're expected to manually add whitespace where needed,
preferably with pre-defined whitespace classes:

```
.pad          -- pads by the default interval
.pad-05       -- pads by half of the default interval
.pad-v        -- pads vertically by the default interval
.pad-v-05     -- pads vertically by half of the default interval
.pad-ch       -- pads children by the default interval
.pad-ch-05    -- pads children by half of the default interval
.pad-ch-v     -- pads children vertically by the default interval
.pad-ch-v-05  -- pads children vertically by half of the default interval
```

The benefit of this approach is that whitespace never goes out of control and
never compounds, you can tell on a glance where it came from, and the
intervals are always the same, keeping the looks more consistent.

This rule mostly applies to elements that are expected to remain in the document
flow. There are exceptions: navigation lists, elements with absolute or fixed
positioning. `sf-article` also spaces out its children. In those cases, padding
usually makes sense, so it's used by default.

When defining default whitespace for a component, use the common variables:

```less
// Default value.
@sf-common-padding: 1rem;
// Default value.
@sf-common-margin:  1rem;
```

They're defined in `rem`, in other words, the `html` font size. This metric
stays consistent across the entire website and scales along with its base font
size.
