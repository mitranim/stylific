<!-- TOC -->
<div doc-toc theme="text-accent">
  <input checked id="<%= uniqId() %>" type="checkbox">
  <label for="<%= lastUniqId() %>" theme="accent"></label>
  [Overview](components/#overview)
  [sf-article](components/#sf-article)
  [sf-collapse](components/#sf-collapse)
  [sf-dropdown](components/#sf-dropdown)
  [sf-tabset](components/#sf-tabset)
  [sf-grid](components/#sf-grid)
  [sf-modal](components/#sf-modal)
  [sf-navbar](components/#sf-navbar)
  [sf-footer](components/#sf-footer)
  [sf-tooltip](components/#sf-tooltip)
  [sf-input](components/#sf-input)
  [sf-button](components/#sf-button)
  [sf-label](components/#sf-label)
  [sf-embed](components/#sf-embed)
  [sf-jumbo](components/#sf-jumbo)
</div>

# Overview

The library comes with some pre-defined UI components. They work with plain HTML
and CSS. You can also [subclass](configuration/#subclassing) them
in Sass.

Most components are available as tags, like `sf-collapse`, and every component
is available as an attribute, like `sf-button`. Some can even be combined like
so: `<button sf-button sf-icon></button>`.

# sf-article

`sf-article` symbolises a block of readable text. It provides default cosmetic
styling, like whitespace, link decorations, and convenience classes for images.

Use it wherever you want typographic styling. Suited for text compiled from
Markdown, like this documentation.

This whole page is an example, but here's a smaller one.

```html
<sf-article>
  <img src="images/square/script.jpg" class="right small">
  <h1>Article header</h1>
  <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens.</p>
  <p>Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos.</p>
</sf-article>
```

<div doc-demo layout="column">
  <sf-article style="padding: 0">
    <img src="images/square/script.jpg" class="right small">
    <h1>Article header</h1>
    <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens.</p>
    <p>Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos.</p>
  </sf-article>
</div>

# sf-collapse

`sf-collapse` can be toggled to show or hide its contents. The `.doc-toc`
element at the top of this page is an
[example](https://github.com/Mitranim/stylific/blob/master/src-docs/styles/components/doc-toc.scss)
of subclassing `sf-collapse` to produce a custom collapsing element.

Like most other interactive components, it relies on the `:checked` hack. It
needs an `<input type="checkbox">` and a `<label>` with a matching id.

Like all other components, it responds to stylific's [themes](themes/).

```html
<sf-collapse theme="text-primary">
  <input id="..." type="checkbox">
  <label for="..." theme="text-primary">Click me to toggle collapse</label>
  <h3>Header for the collapsed element</h3>
  <p>Paragraph in the collapsed element</p>
</sf-collapse>
```

<div doc-demo>
  <sf-collapse theme="text-primary">
    <input id="<%= uniqId() %>" type="checkbox">
    <label for="<%= lastUniqId() %>" theme="text-primary">Click me to toggle collapse</label>
    <h3>Header for the collapsed element</h3>
    <p>Paragraph in the collapsed element</p>
  </sf-collapse>
</div>

## Options

To uncollapse the component by default, use `<input checked>`.

```html
<sf-collapse theme="text-accent">
  <input checked id="..." type="checkbox">
  <label for="...">Click me to toggle collapse</label>
  <h3>I'm uncollapsed by default!</h3>
  <p>This is my paragraph</p>
</sf-collapse>
```

<div doc-demo>
  <sf-collapse theme="text-accent">
    <input checked id="<%= uniqId() %>" type="checkbox">
    <label for="<%= lastUniqId() %>">Click me to toggle collapse</label>
    <h3>I'm uncollapsed by default!</h3>
    <p>This is my paragraph</p>
  </sf-collapse>
</div>

You can also enable an invisible overlay that collapses the element when
clicking anywhere outside of it by adding the `[sf-collapse~=overlay]` option:

```html
<sf-collapse theme="warn" sf-collapse="overlay">
  <input id="..." type="checkbox">
  <label for="...">Click me to toggle collapse</label>
  <h3>Click anywhere outside to close me!</h3>
  <p>This is my paragraph</p>
</sf-collapse>
```

<div doc-demo>
  <sf-collapse theme="warn" sf-collapse="overlay">
    <input id="<%= uniqId() %>" type="checkbox">
    <label for="<%= lastUniqId() %>">Click me to toggle collapse</label>
    <h3>Click anywhere outside to close me!</h3>
    <p>This is my paragraph</p>
  </sf-collapse>
</div>

# sf-dropdown

`sf-dropdown` is a basic dropdown list. By default, it appears on `:hover`:

```html
<sf-dropdown>
  <label>hover me to see a dropdown</label>
  <sf-dropdown-list>
    <span>I'm the first item</span>
    <span>I'm the second item</span>
    <span>I'm the third item</span>
  </sf-dropdown-list>
</sf-dropdown>
```

<div doc-demo>
  <sf-dropdown>
    <label>hover me to see a dropdown</label>
    <sf-dropdown-list>
      <span>I'm the first item</span>
      <span>I'm the second item</span>
      <span>I'm the third item</span>
    </sf-dropdown-list>
  </sf-dropdown>
</div>

You can also make it toggle-able by adding an `<input type="checkbox">` before
the `<label>`. This automatically disables the `:hover` effect.

```html
<sf-dropdown theme="primary">
  <input id="..." type="checkbox">
  <label for="..." class="pad">click me to toggle a dropdown</label>
  <sf-dropdown-list>
    <span class="active">Click outside to toggle off</span>
    <span>I'm the second item</span>
    <span>I'm the third item</span>
  </sf-dropdown-list>
</sf-dropdown>
```

<div doc-demo>
  <sf-dropdown theme="primary">
    <input id="<%= uniqId() %>" type="checkbox">
    <label for="<%= lastUniqId() %>" class="pad">click me to toggle a dropdown</label>
    <sf-dropdown-list>
      <span class="active">Click outside to toggle off</span>
      <span>I'm the second item</span>
      <span>I'm the third item</span>
    </sf-dropdown-list>
  </sf-dropdown>
</div>

The dropdown position may be changed to `top`, `right` or `left`:

```html
<sf-dropdown sf-dropdown="top">
  <label class="pad">this dropdown goes upwards</label>
  <sf-dropdown-list>
    <span>I'm the first item</span>
    <span>I'm the second item</span>
    <span>I'm the third item</span>
  </sf-dropdown-list>
</sf-dropdown>
```

<div doc-demo>
  <sf-dropdown sf-dropdown="top">
    <label class="pad">this dropdown goes upwards</label>
    <sf-dropdown-list>
      <span>I'm the first item</span>
      <span>I'm the second item</span>
      <span>I'm the third item</span>
    </sf-dropdown-list>
  </sf-dropdown>
</div>

# sf-tabset

`sf-tabset` is a tabbed panel. Like most other stateful components, it relies on
the `:checked` hack with hidden inputs.

**Note**: Safari 8 appears to have a bug related to the `:checked`-based
selector used for tab body: it fails to fully detect the state change until a
tab is clicked twice. Until this is fixed, you may want to supplement this by
using `.active` on labels. See this [example](examples/active-switch/).

```html
<sf-tabset theme="text-accent">
  <input checked id="..." type="radio" name="demo-sf-tabset">
  <label for="..." theme="accent">First tab (preselected)</label>
  <sf-tab>
    <h3>First tab content</h3>
    <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.</p>
  </sf-tab>

  <input id="..." type="radio" name="demo-sf-tabset">
  <label for="..." theme="accent">Second tab</label>
  <sf-tab>
    <h3>Second tab content</h3>
    <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens.</p>
  </sf-tab>

  <input id="..." type="radio" name="demo-sf-tabset">
  <label for="..." theme="accent">Third tab</label>
  <sf-tab>
    <h3>Third tab content</h3>
    <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis.</p>
  </sf-tab>
</sf-tabset>
```

<div doc-demo>
  <sf-tabset theme="text-accent">
    <input checked id="<%= uniqId() %>" type="radio" name="demo-sf-tabset">
    <label for="<%= lastUniqId() %>" theme="accent">First tab (preselected)</label>
    <sf-tab>
      <h3>First tab content</h3>
      <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
    </sf-tab>

    <input id="<%= uniqId() %>" type="radio" name="demo-sf-tabset">
    <label for="<%= lastUniqId() %>" theme="accent">Second tab</label>
    <sf-tab>
      <h3>Second tab content</h3>
      <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.</p>
    </sf-tab>

    <input id="<%= uniqId() %>" type="radio" name="demo-sf-tabset">
    <label for="<%= lastUniqId() %>" theme="accent">Third tab</label>
    <sf-tab>
      <h3>Third tab content</h3>
      <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?</p>
    </sf-tab>
  </sf-tabset>
</div>

# sf-grid

One of the most important parts of any UI framework is a responsive grid system.
In the past, they needed to be implemented using JavaScript, floats, and other
hacks. The flexbox specification obviates the need for all that (see some
[demonstrations](http://philipwalton.github.io/solved-by-flexbox)). With vendor
prefixes by [`autoprefixer`](https://github.com/postcss/autoprefixer), browser
support for flexbox is consistent enough for production use. It's more versatile
than the old grid systems and solves a lot of other problems.

Because specialised grid systems are no longer needed, stylific doesn't come
with one. Instead, it provides a group of [layout attributes](layout/) for
inline definitions.

That said, it's convenient to have a shortcut to a media-responsive flex
container that wraps its items on different breakpoints. `sf-grid` is a
primitive version of that. Open this on a [separate page](examples/grid-demo/)
to resize the page more easily.

```html
<sf-grid class="doc-grid-demo">
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

<div doc-demo style="display: block">
  <sf-grid class="doc-grid-demo">
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
</div>

# sf-modal

`sf-modal` is a fixed popup dialog. It exploits the `:target` selector to match
the URL fragment. It appears when the URL hash is targeting the modal's id. All
you need is to link to that id.

```html
<!-- Clicking this link summons the modal -->
<a href="#demo-sf-modal">
  <button>Click me to open a modal!</button>
</a>

<!-- The modal, hidden until targeted -->
<sf-modal id="demo-sf-modal" theme="text-primary">

  <!-- This hidden link closes the modal -->
  <a href="#_"></a>

  <!-- The modal body, visible when targeted -->
  <sf-modal-body class="pad-ch-v-05">
    <h1>Modal header</h1>
    <p>Check me out, I'm a modal!</p>
    <p>Click the overlay or the top-right button to close me.</p>
    <p>...</p>
  </sf-modal-body>
</sf-modal>
```

<div doc-demo>
  <a href="components/#demo-sf-modal">
    <button>Click me to open a modal!</button>
  </a>

  <sf-modal id="demo-sf-modal" theme="text-primary">
    <a href="components/#_"></a>
    <sf-modal-body>
      <h1>Modal header</h1>
      <p>Check me out, I'm a modal!</p>
      <p>Click the overlay or the top-right button to close me.</p>
      <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?</p>
      <p>In Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading. Maleficia! Vel cemetery man a modern bursting eyeballs perhsaps morbi. A terrenti flesh contagium. Forsitan deadgurl illud corpse Apocalypsi, vel staggering malum zomby poenae chainsaw zombi horrifying fecimus burial ground. Indeflexus shotgun coup de poudre monstra per plateas currere. Fit de decay nostra carne undead. Poenitentiam violent zom biehig hway agite RE:dead pœnitentiam! Vivens mortua sunt apud nos night of the living dead.</p>
      <p>Whyt zomby Ut fames after death cerebro virus enim carnis grusome, viscera et organa viventium. Sicut spargit virus ad impetum, qui supersumus flesh eating. Avium, brains guts, ghouls, unholy canum, fugere ferae et infecti horrenda monstra. Videmus twenty-eight deformis pale, horrenda daemonum. Panduntur brains portae rotting inferi. Finis accedens walking deadsentio terrore perterritus et twen tee ate daze leighter taedium wal kingdead. The horror, monstra epidemic significant finem. Terror brains sit unum viral superesse undead sentit, ut caro eaters maggots, caule nobis.</p>
  </sf-modal>
</div>

If your website has a `<base>` tag (typically `<base href="/">`), the `#` part
in the links needs to be prefixed with the pathname of the current page.

# sf-navbar

Each website needs a navigation bar. Open a [separate demo](examples/navbar-
demo/) to resize the page more easily.

Notice how little markup is required.

```html
<sf-navbar>
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <a href="/partners">Partners</a>
</sf-navbar>
```

<div doc-demo>
  <sf-navbar>
    <a href="components/#home">Home</a>
    <a class="active" href="components/#robots">Robots</a>
    <a href="components/#medical-cybernetics">Medical Cybernetics</a>
    <a href="components/#partners">Partners</a>
  </sf-navbar>
</div>

## Folding navbar

`sf-navbar` can automatically fold on narrow displays, grouping extra elements
into a sliding dropdown. You can configure the ordinal number of the child at
which to fold by adjusting the `$sf-navbar-nth-child` variable.

To enable folding, add the pair: `<input type="checkbox">` and `<label>` with
matching `[id]`s as the navbar's first children. Resize your viewport to see the
folding in effect or view the [demo](examples/navbar-demo/#static-folding).

```html
<sf-navbar>
  <input id="..." type="checkbox">
  <label for="..."></label>
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <a href="/partners">Partners</a>
</sf-navbar>
```

<div doc-demo>
  <sf-navbar>
    <input id="<%= uniqId() %>" type="checkbox">
    <label for="<%= lastUniqId() %>"></label>
    <a href="components/#home">Home</a>
    <a class="active" href="components/#robots">Robots</a>
    <a href="components/#medical-cybernetics">Medical Cybernetics</a>
    <a href="components/#partners">Partners</a>
    <a href="components/#achievements">Achievements</a>
  </sf-navbar>
</div>

## `[sf-navbar="fold"]`

With a folding navbar, use the `fold` option to tell it to _always_ fold,
regardless of the viewport width.

```html
<sf-navbar theme="primary" sf-navbar="fold">
  <input id="..." type="checkbox">
  <label for="..."></label>
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <a href="/partners">Partners</a>
</sf-navbar>
```

<div doc-demo>
  <sf-navbar theme="primary" sf-navbar="fold">
    <input id="<%= uniqId() %>" type="checkbox">
    <label for="<%= lastUniqId() %>"></label>
    <a href="components/#home">Home</a>
    <a class="active" href="components/#robots">Robots</a>
    <a href="components/#medical-cybernetics">Medical Cybernetics</a>
    <a href="components/#partners">Partners</a>
    <a href="components/#achievements">Achievements</a>
  </sf-navbar>
</div>

## `[sf-navbar="fixed"]`

Add the `fixed` option to glue the navbar to the top of the viewport:

```html
<sf-navbar sf-navbar="fixed">
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <a href="/partners">Partners</a>
</sf-navbar>
```

The next element in the document flow (in this example, the implied site
content) will be automatically offset by the navbar height. It must not be
absolutely positioned or floating.

## `[sf-navbar="tabs"]`

This is a version of `sf-navbar` for use inside the document. Has a lighter
shadow and doesn't have a default z-index.

```html
<sf-navbar sf-navbar="tabs">
  <a href="#section-one">Section One</a>
  <a class="active" href="#section-two">Section Two</a>
  <a href="#section-three">Section Three</a>
  <a href="#section-four">Section Four</a>
</sf-navbar>
```

<div doc-demo>
  <sf-navbar sf-navbar="tabs">
    <a href="components/#section-one">Section One</a>
    <a class="active" href="components/#section-two">Section Two</a>
    <a href="components/#section-three">Section Three</a>
    <a href="components/#section-four">Section Four</a>
  </sf-navbar>
</div>

# sf-footer

Each website needs a footer that pushes itself to the bottom of the viewport
(often incorrectly called "sticky"). It's usually difficult to implement when
the footer height is unknown. `sf-footer` does this for you. The footer at the
bottom of this page is a demo. Go to an [empty page](examples/footer/) to
see how it works.

`sf-footer` relies on the flex-column body layout, which is a global default
defined in
[`layout.scss`](https://github.com/Mitranim/stylific/blob/master/scss/layout.scss).

Example footer:

```html
<sf-footer>
  <sf-footer-body>
    <span>2020—2030 © slowpoke</span>
    <span>⇑</span>
  </sf-footer-body>
</sf-footer>
```

<div doc-demo>
  <sf-footer>
    <sf-footer-body style="margin-top: 0; padding: 0">
      <span>2020—2030 © slowpoke</span>
      <span>⇑</span>
    </sf-footer-body>
  </sf-footer>
</div>

# sf-tooltip

`[sf-tooltip]` is an attribute-based tooltip implementation that uses
pseudoelements. Its colours are automatically adjusted to be the grayscale
inverses of the base text and background colours.

```html
<span sf-tooltip="I'm a default positioned tooltip!">Hover me to see a top tooltip.</span>

<span sf-tooltip="I'm a top-right positioned tooltip!"
      sf-position="top-right">Hover me to see a top-right tooltip.</span>

<span sf-tooltip="I'm a bottom positioned tooltip!"
      sf-position="bottom">Hover me to see a bottom tooltip.</span>

<span sf-tooltip="I'm a bottom-right positioned tooltip!"
      sf-position="bottom-right">Hover me to see a bottom-right tooltip.</span>

<span sf-tooltip="I appear on focus! Click outside to toggle me off."
      sf-trigger="focus" contenteditable>Focus me to see a tooltip.</span>

<div sf-tooltip="I'm an input tooltip that appears on hover!">
  <input placeholder="Hover me to see a tooltip.">
</div>
```

<div doc-demo layout="column" class="space-out">
  <div><span sf-tooltip="I'm a default positioned tooltip!">Hover me to see a top tooltip.</span></div>
  <div><span sf-tooltip="I'm a top-right positioned tooltip!" sf-position="top-right">Hover me to see a top-right tooltip.</span></div>
  <div><span sf-tooltip="I'm a bottom positioned tooltip!" sf-position="bottom">Hover me to see a bottom tooltip.</span></div>
  <div><span sf-tooltip="I'm a bottom-right positioned tooltip!" sf-position="bottom-right">Hover me to see a bottom-right tooltip.</span></div>
  <div><span sf-tooltip="I appear on focus! Click outside to toggle me off." sf-trigger="focus" contenteditable>Focus me to see a tooltip.</span></div>
  <div sf-tooltip="I'm an input tooltip that appears on hover!"><input placeholder="Hover me to see a tooltip."></div>
</div>

The `trigger` attribute supports the following values: `hover`, `focus`,
`disabled`, `target`, `active`. They correspond to their namesake pseudoclass
selectors and may be combined. You can also include `true` to make the tooltip
visible at all times.

**Note**: since tooltips are implemented with pseudoelements, they can't be
directly used on elements that aren't allowed to have children, such as `<input
type="text">`. The example above demonstrates a workaround: wrap an input into
another element and use the tooltip attributes on its parent. This works for the
`:hover` and `:active` versions because these states propagate naturally to the
parent. Unfortunately other states, like `:focus`, don't propagate.

# sf-input

This style is applied by default to `<input>` and `<textarea>` elements, and is
also exposed as the `[sf-input]` attribute. It's purely cosmetic. Normalises
user agent styles and adds some nice defaults.

```html
<input placeholder="I'm a basic input." value="I'm a basic input.">
<input theme="text-primary" placeholder="I use the text-primary theme." value="I use the text-primary theme.">
<input theme="accent" placeholder="I use the accent theme." value="I use the accent theme.">
<input theme="warn" placeholder="I use the warn theme." value="I use the warn theme.">
<input disabled value="I'm disabled">
<textarea style="width: 100%" placeholder="I'm a basic textarea.">I'm a basic textarea.</textarea>
<textarea theme="primary" style="width: 100%" placeholder="I use the primary theme.">I use the primary theme.</textarea>
```

<div doc-demo class="block-children space-out" style="display: block">
  <input placeholder="I'm a basic input." value="I'm a basic input.">
  <input theme="text-primary" placeholder="I use the text-primary theme." value="I use the text-primary theme.">
  <input theme="accent" placeholder="I use the accent theme." value="I use the accent theme.">
  <input theme="warn" placeholder="I use the warn theme." value="I use the warn theme.">
  <input disabled value="I'm disabled">
  <textarea style="width: 100%" placeholder="I'm a basic textarea.">I'm a basic textarea.</textarea>
  <textarea theme="primary" style="width: 100%" placeholder="I use the primary theme.">I use the primary theme.</textarea>
</div>

# sf-button

This style is applied by default to `<button>` and `<input type="button">`, and
is also exposed as the `[sf-button]` attribute. Normalises user agent styles and
adds some nice defaults.

```html
<div layout="space-out">
  <button>default button</button>
  <button sf-button="flat">flat button</button>
  <button theme="text-primary">text-primary themed button</button>
  <button theme="primary">primary themed button</button>
  <button theme="text-accent">text-accent themed button</button>
  <button disabled>disabled button</button>
</div>
```

<div doc-demo layout="space-out">
  <button>default button</button>
  <button sf-button="flat">flat button</button>
  <button theme="text-primary">text-primary themed button</button>
  <button theme="primary">primary themed button</button>
  <button theme="text-accent">text-accent themed button</button>
  <button disabled>disabled button</button>
</div>

# sf-label

Very primitive default styling for form input groups. Has two versions:
* vertical: `sf-label`, `[sf-label]`, `[sf-label=column]`
* horizontal: `[sf-label=row]`

```html
<label sf-label theme="text-primary">
  <span>Name</span>
  <input placeholder="type name...">
</label>
<label sf-label="row" theme="accent">
  <span>Email</span>
  <input type="email" placeholder="type email...">
</label>
```

<div doc-demo style="display: block" class="space-out">
  <label sf-label theme="text-primary">
    <span>Name</span>
    <input placeholder="type name...">
  </label>
  <label sf-label="row" theme="text-accent">
    <span>Email</span>
    <input type="email" placeholder="type email...">
  </label>
</div>

Can be used directly on a form:

```html
<form sf-label theme="text-primary">
  <span>Name</span>
  <input placeholder="type name...">
</form>
<form sf-label="row" theme="text-accent">
  <span>Email</span>
  <input type="email" placeholder="type email...">
</form>
```

<div doc-demo style="display: block" class="space-out">
  <form sf-label theme="text-primary">
    <span>Name</span>
    <input placeholder="type name...">
  </form>
  <form sf-label="row" theme="text-accent">
    <span>Email</span>
    <input type="email" placeholder="type email...">
  </form>
</div>

## `[sf-label="dense"]`

Condensed version for inlining buttons with inputs.

```html
<label sf-label="row dense">
  <input flex="6" theme="text-primary" placeholder="take the blue pill...">
  <button flex="1" theme="primary" layout="center">go</button>
</label>
<label sf-label="row dense">
  <button flex="1" theme="warn" layout="center">go</button>
  <input flex="6" theme="text-warn" placeholder="or the red pill...">
</label>
```

<div doc-demo style="display: block" class="space-out">
  <label sf-label="row dense" style="width: 50%">
    <input flex="6" theme="text-primary" placeholder="take the blue pill...">
    <button flex="1" theme="primary" layout="center">go</button>
  </label>
  <label sf-label="row dense" style="width: 50%">
    <button flex="1" theme="warn" layout="center">go</button>
    <input flex="6" theme="text-warn" placeholder="or the red pill...">
  </label>
</div>

# sf-embed

Responsive embed, pilfered from
[Bootstrap](https://github.com/twbs/bootstrap/blob/v3.3.5/less/responsive-embed.less).

Has two aspect ratio options:
* 16:9 (default): `sf-embed`, `[sf-embed=ratio-16-to-9]`
* 4:3: `[sf-embed=ratio-4-to-3]`

See the [source](https://github.com/Mitranim/stylific/blob/master/scss/components/sf-embed.scss)
for which children are automatically adjusted.

```html
<sf-embed><iframe src="..."></sf-embed>
<div sf-embed="ratio-4-to-3"><iframe src="..."></iframe></div>
<sf-embed><div class="sf-embed-item"></div></sf-embed>
```

# sf-jumbo

`sf-jumbo` is a big-ass banner to stick at the top of a page. Saves you a few
minutes of typing the styles for positioning, underlay, etc. Like everything
else, it's sized in `em`, so adjusting the font size automatically changes its
height.

```html
<sf-jumbo style="background-image: url(images/aite.jpg)">
  <h1>Catchy slogan</h1>
  <p>Super awesome marketing speak</p>
</sf-jumbo>
```

<div doc-demo layout="column">
  <sf-jumbo style="background-image: url(images/aite.jpg)">
    <h1>Catchy slogan</h1>
    <p>Super awesome marketing speak</p>
  </sf-jumbo>
</div>

To reposition the children, simply add `layout="start"` or `layout="center"`.

```html
<sf-jumbo layout="start" style="background-image: url(images/citadel-blue.jpg)">
  <h1>I'm Commander Shepard</h1>
  <p>And this is my favourite store on the Citadel</p>
</sf-jumbo>
```

<div doc-demo layout="column">
  <sf-jumbo layout="start" style="background-image: url(images/citadel-blue.jpg)">
    <h1>I'm Commander Shepard</h1>
    <p>And this is my favourite store on the Citadel</p>
  </sf-jumbo>
</div>
