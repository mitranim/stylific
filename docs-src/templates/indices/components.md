<!-- TOC -->
<div style="margin: 0"><doc-toc class="info">
  <input checked id="toc-toggle" type="checkbox">
  <label for="toc-toggle"></label>
  [Overview](components/#overview)
  [sf-article](components/#sf-article)
  [sf-collapse](components/#sf-collapse)
  [sf-dropdown](components/#sf-dropdown)
  [sf-tabset](components/#sf-tabset)
  [sf-grid](components/#sf-grid)
  [sf-grid-item](components/#sf-grid-item)
  [sf-modal](components/#sf-modal)
  [sf-navbar](components/#sf-navbar)
  [sf-navtabs](components/#sf-navtabs)
  [sf-footer](components/#sf-footer)
  [sf-tooltip](components/#sf-tooltip)
  [sf-input](components/#sf-input)
  [sf-btn](components/#sf-btn)
  [sf-jumbo](components/#sf-jumbo)
</doc-toc></div>

# Overview

The library includes pre-defined UI components. Some of them are interactive.

# sf-article

`sf-article` symbolises a block of readable text. Unlike other elements, it has
no special layout properties. Its purpose is default cosmetic styling, like
typographic offsets, link styles, and convenience classes for images.

Use it wherever you want typographic styling. Suited for text compiled from
Markdown, like this documentation.

This whole page is an example, but here's a smaller one. Note the `info` colour
class. See the notes on [whitespace](patterns/#whitespace) for why `.pad` is
needed.

```html
<sf-article class="pad info">
  <img src="img/square/script.jpg" class="right small">
  <h1>Article header</h1>
  <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens.</p>
  <p>Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos.</p>
</sf-article>
```

<div><doc-demo>
  <sf-article class="pad info">
    <img src="img/square/script.jpg" class="right small">
    <h1>Article header</h1>
    <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens.</p>
    <p>Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos.</p>
  </sf-article>
</doc-demo></div>

# sf-collapse

`sf-collapse` displays its contents when toggled. The `<doc-toc>` element at
the top of this page is an
[example](https://github.com/Mitranim/stylific/blob/master/docs-src/styles/components/doc-toc.less)
of subclassing `sf-collapse` to produce a custom collapsing element.

Like most other interactive components, it relies on the `:checked` hack. It
needs an `<input type="checkbox">` and a `<label>` with a matching id. Also,
like all other components, it responds to stylific's colour classes.

```html
<sf-collapse class="orange pad-ch-05">
  <input id="demo-sf-collapse" type="checkbox">
  <label for="demo-sf-collapse">Click me to toggle collapse</label>
  <h3>Header for the collapsed element</h3>
  <p>Paragraph in the collapsed element</p>
</sf-collapse>
```

<div><doc-demo>
  <sf-collapse class="orange pad-ch-05">
    <input id="demo-sf-collapse" type="checkbox">
    <label for="demo-sf-collapse">Click me to toggle collapse</label>
    <h3>Header for the collapsed element</h3>
    <p>Paragraph in the collapsed element</p>
  </sf-collapse>
</doc-demo></div>

## Options

To uncollapse the component by default, use `<input checked>`.

```html
<sf-collapse class="info pad-ch-05">
  <input checked id="demo-sf-collapse-uncollapsed" type="checkbox">
  <label for="demo-sf-collapse-uncollapsed">Click me to toggle collapse</label>
  <h3>I'm uncollapsed by default!</h3>
  <p>This is my paragraph</p>
</sf-collapse>
```

<div><doc-demo>
  <sf-collapse class="info pad-ch-05">
    <input checked id="demo-sf-collapse-uncollapsed" type="checkbox">
    <label for="demo-sf-collapse-uncollapsed">Click me to toggle collapse</label>
    <h3>I'm uncollapsed by default!</h3>
    <p>This is my paragraph</p>
  </sf-collapse>
</doc-demo></div>

You can also enable an overlay that collapses the element when clicking anywhere
outside of it by adding the `[sf-overlay]` attribute:

```html
<sf-collapse class="warning pad-ch-05" sf-overlay>
  <input id="demo-sf-collapse-overlay" type="checkbox">
  <label for="demo-sf-collapse-overlay">Click me to toggle collapse</label>
  <h3>Click anywhere outside to close me!</h3>
  <p>This is my paragraph</p>
</sf-collapse>
```

<div><doc-demo>
  <sf-collapse class="warning pad-ch-05" sf-overlay>
    <input id="demo-sf-collapse-overlay" type="checkbox">
    <label for="demo-sf-collapse-overlay">Click me to toggle collapse</label>
    <h3>Click anywhere outside to close me!</h3>
    <p>This is my paragraph</p>
  </sf-collapse>
</doc-demo></div>

# sf-dropdown

`sf-dropdown` is a basic dropdown list. By default, it appears on `:hover`:

```html
<sf-dropdown>
  <label class="pad">hover me to see a dropdown</label>
  <sf-dropdown-list>
    <span>I'm the first item</span>
    <span>I'm the second item</span>
    <span>I'm the third item</span>
  </sf-dropdown-list>
</sf-dropdown>
```

<div><doc-demo>
  <sf-dropdown>
    <label class="pad">hover me to see a dropdown</label>
    <sf-dropdown-list>
      <span>I'm the first item</span>
      <span>I'm the second item</span>
      <span>I'm the third item</span>
    </sf-dropdown-list>
  </sf-dropdown>
</doc-demo></div>

You can also make it toggle-able by adding an `<input type="checkbox">` before
the `<label>`. This automatically disables the `:hover` effect.

```html
<sf-dropdown class="orange">
  <input id="demo-sf-dropdown" type="checkbox">
  <label for="demo-sf-dropdown" class="pad">click me to toggle a dropdown</label>
  <sf-dropdown-list>
    <span class="active">Click outside to toggle off</span>
    <span>I'm the second item</span>
    <span>I'm the third item</span>
  </sf-dropdown-list>
</sf-dropdown>
```

<div><doc-demo>
  <sf-dropdown class="orange">
    <input id="demo-sf-dropdown" type="checkbox">
    <label for="demo-sf-dropdown" class="pad">click me to toggle a dropdown</label>
    <sf-dropdown-list>
      <span class="active">Click outside to toggle off</span>
      <span>I'm the second item</span>
      <span>I'm the third item</span>
    </sf-dropdown-list>
  </sf-dropdown>
</doc-demo></div>

The dropdown position may be changed to `top`, `right` or `left`:

```html
<sf-dropdown sf-position="top" class="info-inverse">
  <label class="pad">this dropdown goes upwards</label>
  <sf-dropdown-list>
    <span>I'm the first item</span>
    <span>I'm the second item</span>
    <span>I'm the third item</span>
  </sf-dropdown-list>
</sf-dropdown>
```

<div><doc-demo>
  <sf-dropdown sf-position="top" class="info-inverse">
    <label class="pad">this dropdown goes upwards</label>
    <sf-dropdown-list>
      <span>I'm the first item</span>
      <span>I'm the second item</span>
      <span>I'm the third item</span>
    </sf-dropdown-list>
  </sf-dropdown>
</doc-demo></div>

# sf-tabset

`sf-tabset` is a tabbed panel. Like most other stateful components, it relies on
the `:checked` hack with hidden inputs.

**Note**: Safari 8 is surprisingly slow in detecting changes with the
`:checked`-based selector used for tab body. Until this is fixed, you may want
to supplement this by using `.active` on labels. See this [example](examples
/active-switch.html).

```html
<sf-tabset class="orange">
  <input id="demo-sf-tabset-1" type="radio" name="demo-sf-tabset">
  <label for="demo-sf-tabset-1">First tab</label>
  <sf-tab>
    <h3>First tab content</h3>
    <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.</p>
  </sf-tab>

  <input checked id="demo-sf-tabset-2" type="radio" name="demo-sf-tabset">
  <label for="demo-sf-tabset-2">Second tab (preselected)</label>
  <sf-tab>
    <h3>Second tab content</h3>
    <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens.</p>
  </sf-tab>

  <input id="demo-sf-tabset-3" type="radio" name="demo-sf-tabset">
  <label for="demo-sf-tabset-3">Third tab</label>
  <sf-tab>
    <h3>Third tab content</h3>
    <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis.</p>
  </sf-tab>
</sf-tabset>
```

<div><doc-demo>
  <sf-tabset class="orange">
    <input id="demo-sf-tabset-1" type="radio" name="demo-sf-tabset">
    <label for="demo-sf-tabset-1">First tab</label>
    <sf-tab>
      <h3>First tab content</h3>
      <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
    </sf-tab>

    <input checked id="demo-sf-tabset-2" type="radio" name="demo-sf-tabset">
    <label for="demo-sf-tabset-2">Second tab (preselected)</label>
    <sf-tab>
      <h3>Second tab content</h3>
      <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.</p>
    </sf-tab>

    <input id="demo-sf-tabset-3" type="radio" name="demo-sf-tabset">
    <label for="demo-sf-tabset-3">Third tab</label>
    <sf-tab>
      <h3>Third tab content</h3>
      <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?</p>
    </sf-tab>
  </sf-tabset>
</doc-demo></div>

# sf-grid

One of the most important parts of any UI framework is a responsive grid system.
In the past, they needed to be implemented using JavaScript, floats, and other
hacks. The flexbox specification obviates the need for all that (see some
[demonstrations](http://philipwalton.github.io/solved-by-flexbox)). With vendor
prefixes by [`autoprefixer`](https://github.com/postcss/autoprefixer), browser
support for flexbox is consistent enough for production use. It's more versatile
than the old grid systems and solves a lot of other problems.

Because specialised grid systems are no longer needed, stylific doesn't come
with one. But it's convenient to have a shortcut to a media-responsive flex
container that wraps its items on different breakpoints. `sf-grid` is a
primitive version of that. Open this on a [separate page](examples/grid-
demo.html) to resize the page more easily. The classes are cosmetic.

```html
<sf-grid class="doc-grid-demo pad-ch">
  <p>One</p>
  <p>Two</p>
  <p>Three</p>
  <p>Four</p>
  <p>Five</p>
  <p>Six</p>
  <p>Seven</p>
  <p>Eight</p>
  <p>Nine</p>
  <p>Ten</p>
</sf-grid>
```

<div><doc-demo style="display: block">
  <sf-grid class="doc-grid-demo pad-ch">
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
    <p>Four</p>
    <p>Five</p>
    <p>Six</p>
    <p>Seven</p>
    <p>Eight</p>
    <p>Nine</p>
    <p>Ten</p>
  </sf-grid>
</doc-demo></div>

# sf-grid-item

`sf-grid-item` is a cosmetic grid element. It adds some default whitespace and
responds to an `.active` class. It's _not_ required for the layout.

```html
<sf-grid>
  ...
  <sf-grid-item class="active">...</sf-grid-item>
  <sf-grid-item>...</sf-grid-item>
  ...
</sf-grid>
```

<div><doc-demo style="display: block">
  <sf-grid>
    <sf-grid-item class="active">
      <h3>One</h3>
      <p>Awesome t-shirt</p>
    </sf-grid-item>
    <sf-grid-item>
      <h3>Two</h3>
      <p>Sticky poster</p>
    </sf-grid-item>
    <sf-grid-item>
      <h3>Three</h3>
      <p>Pretty girl</p>
    </sf-grid-item>
    <sf-grid-item>
      <h3>Four</h3>
      <p>Soft pillow</p>
    </sf-grid-item>
    <sf-grid-item>
      <h3>Five</h3>
      <p>Shark hunt</p>
    </sf-grid-item>
    <sf-grid-item>
      <h3>Six</h3>
      <p>Well-mannered neighbour</p>
    </sf-grid-item>
    <sf-grid-item class="active">
      <h3>Seven</h3>
      <p>Journey to outer space</p>
    </sf-grid-item>
    <sf-grid-item>
      <h3>Eight</h3>
      <p>Headbanging monkey</p>
    </sf-grid-item>
    <sf-grid-item>
      <h3>Nine</h3>
      <p>Radio tower</p>
    </sf-grid-item>
    <sf-grid-item>
      <h3>Ten</h3>
      <p>Blinking octopus</p>
    </sf-grid-item>
  </sf-grid>
</doc-demo></div>

# sf-modal

`sf-modal` is a fixed popup dialog. It exploits the `:target` selector to match
the URL fragment. It appears when the URL hash is targeting the modal's id. All
you need is to link to that id.

```html
<!-- Clicking this link summons the modal -->
<a href="#demo-sf-modal">Click me to open the modal!</a>

<!-- The modal, hidden until targeted -->
<sf-modal id="demo-sf-modal" class="info">

  <!-- This hidden link closes the modal -->
  <a href="#_"></a>

  <!-- The modal body, visible when targeted -->
  <sf-modal-body>
    <h1 class="pad-v">Modal header</h1>
    <p>Check me out, I'm a modal!</p>
    <p>Click the overlay or the top-right button to close me.</p>
  </sf-modal-body>
</sf-modal>
```

<div><doc-demo>
  <a href="components/#demo-sf-modal">Click me to open a modal!</a>

  <sf-modal id="demo-sf-modal" class="info">
    <a href="components/#_"></a>
    <sf-modal-body>
      <h1 class="pad-v">Modal header</h1>
      <p>Check me out, I'm a modal!</p>
      <p>Click the overlay or the top-right button to close me.</p>
    </sf-modal-body>
  </sf-modal>
</doc-demo></div>

If your website has a `<base>` tag (typically `<base href="/">`), the `#` part
in the links needs to be preceded with the pathname of the current page.

# sf-navbar

Each website needs a navigation bar. Open a [separate demo](examples/navbar-
demo.html) to resize the page more easily.

Notice how little markup is required.

```html
<sf-navbar>
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <a href="/partners">Partners</a>
</sf-navbar>
```

<div><doc-demo>
  <sf-navbar>
    <a href="components/#home">Home</a>
    <a class="active" href="components/#robots">Robots</a>
    <a href="components/#medical-cybernetics">Medical Cybernetics</a>
    <a href="components/#partners">Partners</a>
  </sf-navbar>
</doc-demo></div>

## Folding navbar

`sf-navbar` can automatically fold on narrow displays, grouping extra elements
into a sliding dropdown. The media breakpoint is configurable, and so is the
ordinal number of the child at which to fold.

To enable folding, add a pair of `<input type="checkbox">` and `<label>` with
matching ids to the beginning of the navbar. Resize your viewport to see the
folding in effect.

```html
<sf-navbar class="orange">
  <input id="demo-sf-navbar" type="checkbox">
  <label for="demo-sf-navbar"></label>
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <a href="/partners">Partners</a>
</sf-navbar>
```

<div><doc-demo>
  <sf-navbar class="orange">
    <input id="demo-sf-navbar" type="checkbox">
    <label for="demo-sf-navbar"></label>
    <a href="components/#home">Home</a>
    <a class="active" href="components/#robots">Robots</a>
    <a href="components/#medical-cybernetics">Medical Cybernetics</a>
    <a href="components/#partners">Partners</a>
    <a href="components/#achievements">Achievements</a>
  </sf-navbar>
</doc-demo></div>

## `[sf-fold]`

With a folding navbar, use the `[sf-fold]` attribute to tell it to _always_
fold, regardless of the viewport width.

```html
<sf-navbar class="success" sf-fold>
  <input id="demo-sf-navbar-fold" type="checkbox">
  <label for="demo-sf-navbar-fold"></label>
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <a href="/partners">Partners</a>
</sf-navbar>
```

<div><doc-demo>
  <sf-navbar class="success" sf-fold>
    <input id="demo-sf-navbar-fold" type="checkbox">
    <label for="demo-sf-navbar-fold"></label>
    <a href="components/#home">Home</a>
    <a class="active" href="components/#robots">Robots</a>
    <a href="components/#medical-cybernetics">Medical Cybernetics</a>
    <a href="components/#partners">Partners</a>
    <a href="components/#achievements">Achievements</a>
  </sf-navbar>
</doc-demo></div>

## `.navbar-fixed`

Add the class `navbar-fixed` to fix the navbar to the top of the viewport:

```html
<body>
  <sf-navbar class="navbar-fixed">
    <a href="/">Home</a>
    <a class="active" href="/robots">Robots</a>
    <a href="/medical-cybernetics">Medical Cybernetics</a>
    <a href="/partners">Partners</a>
  </sf-navbar>

  <!-- Site content -->
</body>
```

The next element in the document flow (in this example, the implied site
content) will be automatically offset by the navbar height. It must have
`{position: static}` (default on all elements) or `{position: relative}`.

# sf-navtabs

`sf-navtabs` is a version of `sf-navbar` for use inside the document. By
default, the only difference is the shadow, but it's fashioned as a separate tag
for easier semantic styling. It has the exact same behaviour  and accepts all
the same options.

Check out the
[source](https://github.com/Mitranim/stylific/blob/master/less/components/sf-
navtabs.less) to see how easy it is to subclass components.

```html
<sf-navtabs>
  <a href="#section-one">Section One</a>
  <a class="active" href="#section-two">Section Two</a>
  <a href="#section-three">Section Three</a>
  <a href="#section-four">Section Four</a>
</sf-navtabs>
```

<div><doc-demo>
  <sf-navtabs>
    <a href="components/#section-one">Section One</a>
    <a class="active" href="components/#section-two">Section Two</a>
    <a href="components/#section-three">Section Three</a>
    <a href="components/#section-four">Section Four</a>
  </sf-navtabs>
</doc-demo></div>

# sf-footer

Each website needs a footer that pushes itself to the bottom of the viewport
(often incorrectly called "sticky"). It's usually difficult to implement when
the footer height is unknown. `sf-footer` does this for you. The footer at the
bottom of this page is a demo. Go to an [empty page](examples/footer.html) to
see how it works.

`sf-footer` relies on the flex-column body layout, which is a global default
defined in [`layout.less`](https://github.com/Mitranim/stylific/blob/master/
less/layout.less). If you're importing stylific as
[reference](http://lesscss.org/features/#import-options-reference), the global
styles will be omitted, and you'll need to copy the body layout rules to your
own source.

Example footer:

```html
<sf-footer>
  <sf-footer-body>
    <span>2020—2030 © slowpoke</span>
    <span>⥣</span>
  </sf-footer-body>
</sf-footer>
```

<div><doc-demo>
  <sf-footer>
    <sf-footer-body style="margin-top: 0">
      <span>2020—2030 © slowpoke</span>
      <span>⥣</span>
    </sf-footer-body>
  </sf-footer>
</doc-demo></div>

# sf-tooltip

`[sf-tooltip]` is an attribute-based tooltip implementation that uses
pseudoelements. Its colours are automatically adjusted to be the grayscale
inverses of the base text and background colours.

```html
<sf-article class="flex flex-column">
  <span sf-tooltip="I'm a default positioned tooltip!">Hover me to see a top tooltip.</span>

  <span sf-tooltip="I'm a top-right positioned tooltip!"
        sf-position="top-right">Hover me to see a top-right tooltip.</span>

  <span sf-tooltip="I'm a bottom positioned tooltip!"
        sf-position="bottom">Hover me to see a bottom tooltip.</span>

  <span sf-tooltip="I'm a bottom-right positioned tooltip!"
        sf-position="bottom-right">Hover me to see a bottom-right tooltip.</span>

  <span sf-tooltip="I appear on focus! Click outside to toggle me off."
        sf-trigger="focus" contenteditable>Focus me to see a tooltip.</span>

  <span sf-tooltip="I'm an input tooltip that appears on hover!">
    <input placeholder="Hover me to see a tooltip.">
  </span>
</sf-article>
```

<div><doc-demo>
  <sf-article class="flex flex-column">
    <span sf-tooltip="I'm a default positioned tooltip!">Hover me to see a top tooltip.</span>
    <span sf-tooltip="I'm a top-right positioned tooltip!" sf-position="top-right">Hover me to see a top-right tooltip.</span>
    <span sf-tooltip="I'm a bottom positioned tooltip!" sf-position="bottom">Hover me to see a bottom tooltip.</span>
    <span sf-tooltip="I'm a bottom-right positioned tooltip!" sf-position="bottom-right">Hover me to see a bottom-right tooltip.</span>
    <span sf-tooltip="I appear on focus! Click outside to toggle me off." sf-trigger="focus" contenteditable>Focus me to see a tooltip.</span>
    <span sf-tooltip="I'm an input tooltip that appears on hover!"><input placeholder="Hover me to see a tooltip."></span>
  </sf-article>
</doc-demo></div>

The `trigger` attribute supports the following values: `hover`, `focus`,
`disabled`, `target`, `active`. They correspond to their namesake
pseudoclass selectors and may be combined.

**Note**: since tooltips are implemented with pseudoelements, they can't be used
directly on elements that aren't allowed to have children, such as `<input
type="text">` and `<textarea>`. The example above demonstrates a workaround:
wrap an input into another element and use the tooltip attributes on its parent.
This works for the `:hover` and `:active` versions because these states
propagate naturally to the parent. Unfortunately other states, like `:focus`,
don't propagate.

# sf-input

`.sf-input` is a class-based component for text fields like `<input
type="text">` and `<textarea>`. It's purely cosmetic. Makes the element look
consistent with the overall theme and adjusts its dimensions.

```html
<input class="sf-input" placeholder="I'm a basic input.">
<input class="sf-input orange" placeholder="I'm orange coloured.">
<input class="sf-input success-inverse" placeholder="I'm succes-inverse coloured.">
<textarea class="sf-input" style="width: 100%" placeholder="I'm a basic textarea."></textarea>
<textarea class="sf-input info" style="width: 100%" placeholder="I'm an info textarea."></textarea>
```

<div><doc-demo>
  <input class="sf-input" placeholder="I'm a basic input.">
  <input class="sf-input orange" placeholder="I'm orange coloured.">
  <input class="sf-input success-inverse" placeholder="I'm succes-inverse coloured.">
  <textarea class="sf-input" style="width: 100%" placeholder="I'm a basic textarea."></textarea>
  <textarea class="sf-input info" style="width: 100%" placeholder="I'm an info textarea."></textarea>
</doc-demo></div>

Like with other class-based components, if you set
`@sf-enable-global-element-components: true`, this styling will be applied to
text inputs by default.

```less
// In your LESS source
@sf-enable-global-element-components: true;
```

```html
<!-- No need for .sf-input declarations now -->
<input class="success" placeholder="I'm success coloured.">
<input class="orange-inverse" placeholder="I'm orange-inverse coloured.">
```

<div><doc-demo>
  <input class="success" placeholder="I'm success coloured.">
  <input class="orange-inverse" placeholder="I'm orange-inverse coloured.">
</doc-demo></div>

# sf-btn

`.sf-btn` is a class-based component for `<button>` and `<input type="button">`.
It applies cosmetic styling to make the element look consistent with the overall
theme and respond to colour classes.

```html
<button class="sf-btn">Default button</button>
<button class="sf-btn success">Success button</button>
<button class="sf-btn success-inverse">Success-inverse button</button>
<button class="sf-btn info-inverse">Info-inverse button</button>
```

<div><doc-demo>
  <button class="sf-btn">Default button</button>
  <button class="sf-btn success">Success button</button>
  <button class="sf-btn success-inverse">Success-inverse button</button>
  <button class="sf-btn info-inverse">Info-inverse button</button>
</doc-demo></div>

Like all other elements, `.sf-btn` supports all colours defined in the base
colour mix. See the [Colour System](color-system/).

Like other class-based elements, you can apply this styling to _all_ buttons by
default with the option `@sf-enable-global-element-components: true`. Then you
can omit the `sf-btn` class and simply use `<button>`.

```less
// In your LESS source
@sf-enable-global-element-components: true;
```

```html
<!-- No need for .sf-btn declarations now -->
<button>Default button</button>
<button class="orange">Orange button</button>
<button class="orange-inverse">Orange-inverse button</button>
<button class="error-inverse">Error-inverse button</button>
```

<div><doc-demo>
  <button>Default button</button>
  <button class="orange">Orange button</button>
  <button class="orange-inverse">Orange-inverse button</button>
  <button class="error-inverse">Error-inverse button</button>
</doc-demo></div>

# sf-jumbo

`sf-jumbo` is a big-ass banner to stick at the top of a page. Saves you a few
minutes of typing the styles for positioning, underlay, etc. Like everything
else, it's sized in `em`, so adjusting the font size automatically changes its
height.

```html
<sf-jumbo style="background-image: url(img/aite.jpg)">
  <h1>Catchy slogan</h1>
  <p>Super awesome marketing speak</p>
</sf-jumbo>
```

<div><doc-demo class="flex-column">
  <sf-jumbo style="background-image: url(img/aite.jpg)">
    <h1>Catchy slogan</h1>
    <p>Super awesome marketing speak</p>
  </sf-jumbo>
</doc-demo></div>

To reposition the children, simply stick `.justify-start` or `.justify-center`
on it. This requires `@sf-enable-global-classes` to be enabled (default).

```html
<sf-jumbo class="justify-start" style="background-image: url(img/citadel-blue.jpg)">
  <h1>I'm Commander Shepard</h1>
  <p>And this is my favourite store on the Citadel</p>
</sf-jumbo>
```

<div><doc-demo class="flex-column">
  <sf-jumbo class="justify-start" style="background-image: url(img/citadel-blue.jpg)">
    <h1>I'm Commander Shepard</h1>
    <p>And this is my favourite store on the Citadel</p>
  </sf-jumbo>
</doc-demo></div>
