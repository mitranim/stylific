<!-- TOC -->
<div class="sf-collapse doc-toc theme-text-accent">
  <label class="active theme-accent"></label>
  <div class="sf-collapse-body">
    [Overview](components/#overview)
    [sf-article](components/#sf-article)
    [sf-collapse](components/#sf-collapse)
    [sf-dropdown](components/#sf-dropdown)
    [sf-tabset](components/#sf-tabset)
    [sf-modal](components/#sf-modal)
    [sf-navbar](components/#sf-navbar)
    [sf-footer](components/#sf-footer)
    [data-sf-tooltip](components/#data-sf-tooltip)
    [sf-input](components/#sf-input)
    [sf-button](components/#sf-button)
    [sf-label](components/#sf-label)
    [sf-embed](components/#sf-embed)
    [sf-jumbo](components/#sf-jumbo)
  </div>
</div>

# Overview

The library comes with some pre-defined UI components. You can use them as-is,
modify with your own CSS, or subclass them in Sass. Stateful components like
`sf-collapse` require the tiny JavaScript file included with the library.

Most components are class-based and should be used like so:
`<label class="sf-label"></label>`. Some components take additional options
like so: `.sf-label.sf-label-dense`.

# sf-article

`sf-article` symbolises a block of readable text. It provides default cosmetic
styling, like whitespace, link decorations, and convenience classes for images.
Available as `.sf-article` and is by default applied to the native `article`
tag.

Use it wherever you want typographic styling. Suited for text compiled from
Markdown, like this documentation.

This whole page is an example, but here's a smaller one.

```html
<article>
  <img src="images/square/script.jpg" class="right small">
  <h1>Article header</h1>
  <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens.</p>
  <p>Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos.</p>
</article>
```

<div class="doc-demo layout-column">
  <article style="padding: 0">
    <img src="images/square/script.jpg" class="right small">
    <h1>Article header</h1>
    <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens.</p>
    <p>Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos.</p>
  </article>
</div>

# sf-collapse

`sf-collapse` can be toggled to show or hide its contents. The `doc-toc`
element at the top of this page is an
[example](https://github.com/Mitranim/stylific/blob/master/src-docs/styles/components/doc-toc.scss)
of subclassing `sf-collapse` to produce a custom collapsing element.

Like all other components, it responds to stylific's [themes](themes/).

```html
<div class="sf-collapse theme-text-primary">
  <label>Click me to toggle collapse</label>
  <div class="sf-collapse-body">
    <h3>Header for the collapsed element</h3>
    <p>Paragraph in the collapsed element</p>
  </div>
</div>
```

<div class="doc-demo">
  <div class="sf-collapse theme-text-primary">
    <label>Click me to toggle collapse</label>
    <div class="sf-collapse-body">
      <h3>Header for the collapsed element</h3>
      <p>Paragraph in the collapsed element</p>
    </div>
  </div>
</div>

## Options

To uncollapse the component by default, use `.active`.

```html
<div class="sf-collapse theme-text-accent">
  <label class="active">Click me to toggle collapse</label>
  <div class="sf-collapse-body">
    <h3>I'm uncollapsed by default!</h3>
    <p>This is my paragraph</p>
  </div>
</div>
```

<div class="doc-demo">
  <div class="sf-collapse theme-text-accent">
    <label class="active">Click me to toggle collapse</label>
    <div class="sf-collapse-body">
      <h3>I'm uncollapsed by default!</h3>
      <p>This is my paragraph</p>
    </div>
  </div>
</div>

You can also enable an invisible overlay that collapses the element when
clicking anywhere outside of it by adding the `.sf-collapse-overlay` option:

```html
<div class="sf-collapse sf-collapse-overlay theme-warn">
  <label>Click me to toggle collapse</label>
  <div class="sf-collapse-body">
    <h3>Click anywhere outside to close me!</h3>
    <p>This is my paragraph</p>
  </div>
</div>
```

<div class="doc-demo">
  <div class="sf-collapse sf-collapse-overlay theme-warn">
    <label>Click me to toggle collapse</label>
    <div class="sf-collapse-body">
      <h3>Click anywhere outside to close me!</h3>
      <p>This is my paragraph</p>
    </div>
  </div>
</div>

# sf-dropdown

`sf-dropdown` is a basic dropdown list. By default, it appears on `:hover`:

```html
<div class="sf-dropdown">
  <label>hover me to see a dropdown</label>
  <div class="sf-dropdown-list">
    <span>I'm the first item</span>
    <span>I'm the second item</span>
    <span>I'm the third item</span>
  </div>
</div>
```

<div class="doc-demo">
  <div class="sf-dropdown">
    <label>hover me to see a dropdown</label>
    <div class="sf-dropdown-list">
      <span>I'm the first item</span>
      <span>I'm the second item</span>
      <span>I'm the third item</span>
    </div>
  </div>
</div>

You can also make it toggle-able by adding the `data-sf-toggle` option to the label.
This automatically disables the `:hover` effect.

```html
<div class="sf-dropdown theme-primary">
  <label data-sf-toggle class="pad">click me to toggle a dropdown</label>
  <div class="sf-dropdown-list">
    <span class="active">Click outside to toggle off</span>
    <span>I'm the second item</span>
    <span>I'm the third item</span>
  </div>
</div>
```

<div class="doc-demo">
  <div class="sf-dropdown theme-primary">
    <label data-sf-toggle class="pad">click me to toggle a dropdown</label>
    <div class="sf-dropdown-list">
      <span class="active">Click outside to toggle off</span>
      <span>I'm the second item</span>
      <span>I'm the third item</span>
    </div>
  </div>
</div>

The dropdown position may be changed to `top`, `right` or `left`:

```html
<div class="sf-dropdown sf-dropdown-top">
  <label class="pad">this dropdown goes upwards</label>
  <div class="sf-dropdown-list">
    <span>I'm the first item</span>
    <span>I'm the second item</span>
    <span>I'm the third item</span>
  </div>
</div>
```

<div class="doc-demo">
  <div class="sf-dropdown sf-dropdown-top">
    <label class="pad">this dropdown goes upwards</label>
    <div class="sf-dropdown-list">
      <span>I'm the first item</span>
      <span>I'm the second item</span>
      <span>I'm the third item</span>
    </div>
  </div>
</div>

# sf-tabset

`sf-tabset` is a tabbed panel. To select a tab, apply the class `.active` to a
matching label/tab pair. The bundled JS file does this automatically on clicks.

```html
<div class="sf-tabset theme-text-accent">
  <!-- Header -->
  <div class="sf-tabset-head theme-accent">
    <label class="active">First tab (preselected)</label>
    <label>...</label>
    <label>...</label>
  </div>

  <!-- Body -->
  <div class="sf-tabset-body">
    <div class="sf-tab active">...</div>
    <div class="sf-tab">...</div>
    <div class="sf-tab">...</div>
  </div>
</div>
```

<div class="doc-demo">
  <div class="sf-tabset theme-text-accent">
    <div class="sf-tabset-head theme-accent">
      <label class="active">First tab (preselected)</label>
      <label>Second tab</label>
      <label>Third tab</label>
    </div>
    <div class="sf-tabset-body">
      <div class="sf-tab active">
        <h3>First tab content</h3>
        <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
      </div>
      <div class="sf-tab">
        <h3>Second tab content</h3>
        <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.</p>
      </div>
      <div class="sf-tab">
        <h3>Third tab content</h3>
        <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?</p>
      </div>
    </div>
  </div>
</div>

## `.sf-tabset-fixed`

To fixate the header, annotate the tabset with `sf-tabset-fixed` and add
a height property to the body:

```html
<div class="sf-tabset sf-tabset-fixed theme-text-warn">
  <div class="sf-tabset-head theme-warn">
    <label class="active">First tab (preselected)</label>
    <label>...</label>
    <label>...</label>
  </div>

  <div class="sf-tabset-body" style="height: 10em">
    <div class="sf-tab active">...</div>
    <div class="sf-tab">...</div>
    <div class="sf-tab">...</div>
  </div>
</div>
```

<div class="doc-demo">
  <div class="sf-tabset sf-tabset-fixed theme-text-warn">
    <div class="sf-tabset-head theme-warn">
      <label class="active">First tab (preselected)</label>
      <label>Second tab</label>
      <label>Third tab</label>
    </div>
    <div class="sf-tabset-body" style="height: 10em">
      <div class="sf-tab active">
        <h3>First tab content</h3>
        <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
        <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?</p>
      </div>
      <div class="sf-tab">
        <h3>Second tab content</h3>
        <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.</p>
        <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
      </div>
      <div class="sf-tab">
        <h3>Third tab content</h3>
        <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?</p>
        <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.</p>
      </div>
    </div>
  </div>
</div>

# sf-modal

`.sf-modal` is a fixed popup dialog. To display it, use an element with an
`[data-sf-toggle-id]` attribute pointing to a modal's id.

```html
<!-- Clicking this summons the modal -->
<button data-sf-toggle-id="demoModal">Click me to open a modal!</button>

<!-- Modal, hidden until activated -->
<div id="demoModal" class="sf-modal theme-text-primary">
  <div class="sf-modal-body pad-ch-v-05">
    <h1>Modal header</h1>
    <p>Check me out, I'm a modal!</p>
    <p>Click the overlay or the top-right button to close me.</p>
    <p>...</p>
  </div>
</div>
```

<div class="doc-demo">
  <button data-sf-toggle-id="demoModal">Click me to open a modal!</button>

  <div id="demoModal" class="sf-modal theme-text-primary">
    <div class="sf-modal-body">
      <h1>Modal header</h1>
      <p>Check me out, I'm a modal!</p>
      <p>Click the overlay or the top-right button to close me.</p>
      <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?</p>
      <p>In Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading. Maleficia! Vel cemetery man a modern bursting eyeballs perhsaps morbi. A terrenti flesh contagium. Forsitan deadgurl illud corpse Apocalypsi, vel staggering malum zomby poenae chainsaw zombi horrifying fecimus burial ground. Indeflexus shotgun coup de poudre monstra per plateas currere. Fit de decay nostra carne undead. Poenitentiam violent zom biehig hway agite RE:dead pœnitentiam! Vivens mortua sunt apud nos night of the living dead.</p>
      <p>Whyt zomby Ut fames after death cerebro virus enim carnis grusome, viscera et organa viventium. Sicut spargit virus ad impetum, qui supersumus flesh eating. Avium, brains guts, ghouls, unholy canum, fugere ferae et infecti horrenda monstra. Videmus twenty-eight deformis pale, horrenda daemonum. Panduntur brains portae rotting inferi. Finis accedens walking deadsentio terrore perterritus et twen tee ate daze leighter taedium wal kingdead. The horror, monstra epidemic significant finem. Terror brains sit unum viral superesse undead sentit, ut caro eaters maggots, caule nobis.</p>
    </div>
  </div>
</div>

If your website has a `<base>` tag (typically `<base href="/">`), the `#` part
in the links needs to be prefixed with the pathname of the current page.

# sf-navbar

Each website needs a navigation bar. Open a [separate demo](examples/navbar-
demo/) to resize the page more easily.

Notice how little markup is required.

```html
<div class="sf-navbar">
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <a href="/partners">Partners</a>
</div>
```

<div class="doc-demo">
  <div class="sf-navbar">
    <a href="components/#home">Home</a>
    <a class="active" href="components/#robots">Robots</a>
    <a href="components/#medical-cybernetics">Medical Cybernetics</a>
    <a href="components/#partners">Partners</a>
  </div>
</div>

## Folding navbar

`sf-navbar` can automatically fold on narrow displays, grouping extra elements
into a sliding dropdown. You can configure the ordinal number of the child at
which to fold by adjusting the `$sf-navbar-nth-child` variable.

To enable folding, add a `<label>` (with optional content) at the position where
you want the navbar to fold. Resize your viewport to see the folding in effect
or view the [demo](examples/navbar-demo/#static-folding).

```html
<div class="sf-navbar">
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <label></label>
  <a href="/partners">Partners</a>
  <a href="/achievements">Achievements</a>
</div>
```

<div class="doc-demo">
  <div class="sf-navbar">
    <a href="components/#home">Home</a>
    <a class="active" href="components/#robots">Robots</a>
    <a href="components/#medical-cybernetics">Medical Cybernetics</a>
    <label></label>
    <a href="components/#partners">Partners</a>
    <a href="components/#achievements">Achievements</a>
  </div>
</div>

## `.sf-navbar-fold`

With a folding navbar, use the `fold` option to tell it to _always_ fold,
regardless of the viewport width.

```html
<div class="sf-navbar sf-navbar-fold theme-primary">
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <label></label>
  <a href="/partners">Partners</a>
  <a href="/achievements">Achievements</a>
</div>
```

<div class="doc-demo">
  <div class="sf-navbar sf-navbar-fold theme-primary">
    <a href="components/#home">Home</a>
    <a class="active" href="components/#robots">Robots</a>
    <a href="components/#medical-cybernetics">Medical Cybernetics</a>
    <label></label>
    <a href="components/#partners">Partners</a>
    <a href="components/#achievements">Achievements</a>
  </div>
</div>

## `.sf-navbar-fixed`

Add the `fixed` option to glue the navbar to the top of the viewport:

```html
<div class="sf-navbar sf-navbar-fixed">
  <a href="/">Home</a>
  <a class="active" href="/robots">Robots</a>
  <a href="/medical-cybernetics">Medical Cybernetics</a>
  <a href="/partners">Partners</a>
  <a href="/achievements">Achievements</a>
</div>
```

The next element in the document flow (in this example, the implied site
content) will be automatically offset by the navbar height. It must not be
absolutely positioned or floating.

## `.sf-navbar-tabs`

This is a version of `sf-navbar` for use inside the document. Has a lighter
shadow and doesn't have a default z-index.

```html
<div class="sf-navbar sf-navbar-tabs">
  <a href="#section-one">Section One</a>
  <a class="active" href="#section-two">Section Two</a>
  <a href="#section-three">Section Three</a>
  <a href="#section-four">Section Four</a>
</div>
```

<div class="doc-demo">
  <div class="sf-navbar sf-navbar-tabs">
    <a href="components/#section-one">Section One</a>
    <a class="active" href="components/#section-two">Section Two</a>
    <a href="components/#section-three">Section Three</a>
    <a href="components/#section-four">Section Four</a>
  </div>
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
<div class="sf-footer">
  <div class="sf-footer-body">
    <span>2020—2030 © slowpoke</span>
    <span>⇑</span>
  </div>
</div>
```

<div class="doc-demo">
  <div class="sf-footer">
    <div class="sf-footer-body" style="margin-top: 0; padding: 0">
      <span>2020—2030 © slowpoke</span>
      <span>⇑</span>
    </div>
  </div>
</div>

# sf-tooltip

`[data-sf-tooltip]` is an attribute-based tooltip implementation that uses
pseudoelements. Its colours are automatically adjusted to be the grayscale
inverses of the base text and background colours.

```html
<span data-sf-tooltip="I'm a default positioned tooltip!">Hover me to see a top tooltip.</span>

<span data-sf-tooltip="I'm a top-right positioned tooltip!"
      class="sf-position-top-right">Hover me to see a top-right tooltip.</span>

<span data-sf-tooltip="I'm a bottom positioned tooltip!"
      class="sf-position-bottom">Hover me to see a bottom tooltip.</span>

<span data-sf-tooltip="I'm a bottom-right positioned tooltip!"
      class="sf-position-bottom-right">Hover me to see a bottom-right tooltip.</span>

<span data-sf-tooltip="I appear on focus! Click outside to toggle me off."
      data-sf-trigger="focus" contenteditable>Focus me to see a tooltip.</span>

<div data-sf-tooltip="I'm an input tooltip that appears on hover and focus!" data-sf-trigger="hover focus">
  <input placeholder="Hover or focus me to see a tooltip.">
</div>
```

<div class="doc-demo layout-column space-out">
  <div><span data-sf-tooltip="I'm a default positioned tooltip!">Hover me to see a top tooltip.</span></div>
  <div><span data-sf-tooltip="I'm a top-right positioned tooltip!" class="sf-position-top-right">Hover me to see a top-right tooltip.</span></div>
  <div><span data-sf-tooltip="I'm a bottom positioned tooltip!" class="sf-position-bottom">Hover me to see a bottom tooltip.</span></div>
  <div><span data-sf-tooltip="I'm a bottom-right positioned tooltip!" class="sf-position-bottom-right">Hover me to see a bottom-right tooltip.</span></div>
  <div><span data-sf-tooltip="I appear on focus! Click outside to toggle me off." data-sf-trigger="focus" contenteditable>Focus me to see a tooltip.</span></div>
  <div data-sf-tooltip="I'm an input tooltip that appears on hover and focus!" data-sf-trigger="hover focus">
    <input placeholder="Hover or focus me to see a tooltip.">
  </div>
</div>

The `trigger` attribute supports the following values: `hover`, `focus`,
`disabled`, `target`, `active`. They correspond to their namesake pseudoclass
selectors and may be combined. You can also include `.sf-tooltip-visible` to make
the tooltip visible at all times.

**Note**: since tooltips are implemented with pseudoelements, they can't be
directly used on elements that aren't allowed to have children, such as
`<input>`. The example above demonstrates a workaround: wrap an input into
another element and use the tooltip attributes on its parent.

# sf-input

This style is applied by default to `<input>` and `<textarea>` elements, and is
also exposed as `.sf-input`. It's purely cosmetic. Normalises user agent styles
and adds some nice defaults.

```html
<input placeholder="I'm a basic input." value="I'm a basic input.">
<input class="theme-text-primary" placeholder="I use the text-primary theme." value="I use the text-primary theme.">
<input class="theme-accent" placeholder="I use the accent theme." value="I use the accent theme.">
<input class="theme-warn" placeholder="I use the warn theme." value="I use the warn theme.">
<input disabled value="I'm disabled">
<textarea style="width: 100%" placeholder="I'm a basic textarea.">I'm a basic textarea.</textarea>
<textarea class="theme-primary" style="width: 100%" placeholder="I use the primary theme.">I use the primary theme.</textarea>
```

<div class="doc-demo block block-children space-out">
  <input placeholder="I'm a basic input." value="I'm a basic input.">
  <input class="theme-text-primary" placeholder="I use the text-primary theme." value="I use the text-primary theme.">
  <input class="theme-accent" placeholder="I use the accent theme." value="I use the accent theme.">
  <input class="theme-warn" placeholder="I use the warn theme." value="I use the warn theme.">
  <input disabled value="I'm disabled">
  <textarea style="width: 100%" placeholder="I'm a basic textarea.">I'm a basic textarea.</textarea>
  <textarea class="theme-primary" style="width: 100%" placeholder="I use the primary theme.">I use the primary theme.</textarea>
</div>

# sf-button

This style is applied by default to `<button>` and `<input type="button">`, and
is also exposed as the `.sf-button` class. Normalises user agent styles and
adds some nice defaults.

```html
<button>default button</button>
<button class="sf-button-flat">flat button</button>
<button class="theme-text-primary">text-primary themed button</button>
<button class="theme-primary">primary themed button</button>
<button class="theme-text-accent">text-accent themed button</button>
<button disabled>disabled button</button>
```

<div class="doc-demo layout space-out-h">
  <button>default button</button>
  <button class="sf-button-flat">flat button</button>
  <button class="theme-text-primary">text-primary themed button</button>
  <button class="theme-primary">primary themed button</button>
  <button class="theme-text-accent">text-accent themed button</button>
  <button disabled>disabled button</button>
</div>

# sf-label

Very primitive default styling for form input groups. Has two versions:
* vertical: `.sf-label`
* horizontal: `.sf-label-row`

```html
<label class="sf-label theme-text-primary">
  <span>Name</span>
  <input placeholder="type name...">
</label>
<label class="sf-label-row theme-accent">
  <span>Email</span>
  <input type="email" placeholder="type email...">
</label>
```

<div class="doc-demo layout-column space-out">
  <label class="sf-label theme-text-primary">
    <span>Name</span>
    <input placeholder="type name...">
  </label>
  <label class="sf-label-row theme-text-accent">
    <span>Email</span>
    <input type="email" placeholder="type email...">
  </label>
</div>

Can be used directly on a form:

```html
<form class="sf-label theme-text-primary">
  <span>Name</span>
  <input placeholder="type name...">
</form>
<form class="sf-label-row theme-text-accent">
  <span>Email</span>
  <input type="email" placeholder="type email...">
</form>
```

<div class="doc-demo layout-column space-out">
  <form class="sf-label theme-text-primary">
    <span>Name</span>
    <input placeholder="type name...">
  </form>
  <form class="sf-label-row theme-text-accent">
    <span>Email</span>
    <input type="email" placeholder="type email...">
  </form>
</div>

## `.sf-label-dense`

Condensed version for inlining buttons with inputs.

```html
<label class="sf-label-row sf-label-dense">
  <input class="flex-6 theme-text-primary" placeholder="take the blue pill...">
  <button class="flex-1 theme-primary layout-center">go</button>
</label>
<label class="sf-label-row sf-label-dense">
  <button class="flex-1 theme-warn layout-center">go</button>
  <input class="flex-6 theme-text-warn" placeholder="or the red pill...">
</label>
```

<div class="doc-demo layout-column space-out">
  <label class="sf-label-row sf-label-dense" style="width: 50%">
    <input class="flex-6 theme-text-primary" placeholder="take the blue pill...">
    <button class="flex-1 theme-primary layout-center">go</button>
  </label>
  <label class="sf-label-row sf-label-dense" style="width: 50%">
    <button class="flex-1 theme-warn layout-center">go</button>
    <input class="flex-6 theme-text-warn" placeholder="or the red pill...">
  </label>
</div>

# sf-embed

Responsive embed, pilfered from
[Bootstrap](https://github.com/twbs/bootstrap/blob/v3.3.5/less/responsive-embed.less).

Has two aspect ratio options:
* 16:9 (default): `.sf-embed`, `.sf-embed-16-to-9`
* 4:3: `.sf-embed-4-to-3`

See the [source](https://github.com/Mitranim/stylific/blob/master/scss/components/sf-embed.scss)
for which children are automatically adjusted.

```html
<div class="sf-embed"><iframe src="..."></div>
<div class="sf-embed-4-to-3"><iframe src="..."></iframe></div>
<div class="sf-embed"><div class="sf-embed-item"></div></div>
```

# sf-jumbo

`sf-jumbo` is a big-ass banner to stick at the top of a page. Saves you a few
minutes of typing the styles for positioning, underlay, etc. Like everything
else, it's sized in `em`, so adjusting the font size automatically changes its
height.

```html
<div class="sf-jumbo" style="background-image: url(images/aite.jpg)">
  <h1>Catchy slogan</h1>
  <p>Super awesome marketing speak</p>
</div>
```

<div class="doc-demo layout-column">
  <div class="sf-jumbo" style="background-image: url(images/aite.jpg)">
    <h1>Catchy slogan</h1>
    <p>Super awesome marketing speak</p>
  </div>
</div>

To reposition the children, simply add `.layout-start` or `.layout-center`.

```html
<div class="sf-jumbo layout-start" style="background-image: url(images/citadel-blue.jpg)">
  <h1>I'm Commander Shepard</h1>
  <p>And this is my favourite store on the Citadel</p>
</div>
```

<div class="doc-demo layout-column">
  <div class="sf-jumbo layout-start" style="background-image: url(images/citadel-blue.jpg)">
    <h1>I'm Commander Shepard</h1>
    <p>And this is my favourite store on the Citadel</p>
  </div>
</div>
