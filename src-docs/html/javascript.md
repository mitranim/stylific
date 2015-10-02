<!-- TOC -->
<div class="sf-collapse doc-toc theme-text-accent">
  <div class="sf-collapse-head active theme-accent"></div>
  <div class="sf-collapse-body">
    [Overview](javascript/#overview)
    [Triggers](javascript/#triggers)
    [Programmatic API](javascript/#programmatic-api)
  </div>
</div>

# Overview

Though mostly a CSS library, stylific has a tiny JavaScript file required for
its interactive functionality. It can be controlled with trigger attributes
`[data-sf-*]`. The library also exports a programmatic API that corresponds to
clicking certain triggers.

# Triggers

These triggers respond to click events. Adding the `[disabled]` attribute to the
element stops the handler.

## `[data-sf-toggle]`

Toggles `class="active"` on self. Example:

```html
<button data-sf-toggle>Toggles self when clicked</button>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <button data-sf-toggle>Toggles self when clicked</button>
  </div>
</div>

It's used in the toggled version of [`sf-dropdown`](components/#sf-dropdown).

## `[data-sf-toggle-siblings]`

Adds `class="active"` to self and removes it from all sibling elements. Useful
for custom radio-style toggles. Example:

```html
<div>
  <button data-sf-toggle-siblings>first</button>
  <button data-sf-toggle-siblings>second</button>
  <button data-sf-toggle-siblings>third</button>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <button data-sf-toggle-siblings>first</button>
    <button data-sf-toggle-siblings>second</button>
    <button data-sf-toggle-siblings>third</button>
  </div>
</div>

## `[data-sf-toggle-id]`

Toggles `class="active"` on the element targeted by `id`. This can be used for
any element, but particularly useful for toggling
[`sf-modal`](components/#sf-modal):

```html
<button data-sf-toggle-id="demoModal">click to toggle modal</button>

<div id="demoModal" class="sf-modal sf-modal-narrow">
  <div class="sf-modal-body">
    <!-- ... -->
    <button data-sf-close-modal>click to close</button>
  </div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <button data-sf-toggle-id="demoModal">click to toggle modal</button>

    <div id="demoModal" class="sf-modal sf-modal-narrow">
      <div class="sf-modal-body">
        <h2>Count sheep 'till you drop</h2>
        <p>🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑 🐑</p>
        <button data-sf-close-modal>click to close</button>
      </div>
    </div>
  </div>
</div>

## `[data-sf-close-modal]`

Closes the nearest ancestor `.sf-modal`. See the example above.

## `[data-sf-no-scroll-spill]`

Don't you get annoyed when scrolling inside a small box and hitting top or
bottom moves the viewport? You're in luck: this attribute prevents vertical
scroll from spilling out.

```html
<div data-sf-no-scroll-spill style="height: 10em">
  <!-- Long content to scroll through -->
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <div class="space-out" data-sf-no-scroll-spill style="height: 10em">
      <h3>Scrolling this text shouldn't move the viewport</h3>
      <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
      <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.</p>
      <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?</p>
    </div>
  </div>
</div>

## `[data-sf-noclick]`

This is an anti-trigger. It causes stylific to ignore click events on the given
element or its descendants. Useful if you want to put something with its own
event handler (say, a button created with React) inside an element with a
stylific trigger. Example:

```html
<!-- Large click target -->
<div data-sf-toggle-id="myModal">
  <!-- Something smaller inside -->
  <div data-sf-noclick>
    <!-- Something with its own listener -->
    <button>...</button>
  </div>
</div>
```

In this example, button clicks won't trigger the `[data-sf-toggle-id]`. Note
that you don't need `[data-sf-noclick]` for nested stylific handlers; the
"inner" handler automatically cancels the event. This is for combinations with
non-stylific handlers.

# Programmatic API

The library exports a few methods that directly correspond to clicks on certain
trigger attributes.

If you're using modules with a CommonJS-compliant loader, import it like so:

```js
import stylific from 'stylific'
stylific.closeAllModals()
```

If you're dumping script tags into your HTML, the library will assign the export
to `window.stylific`:

```js
window.stylific.closeAllModals()
```

Each method takes an optional callback argument. If you pass a function, it will
be called when the CSS transitions caused by the method are finished. If you
don't pass a callback, and the global `Promise` constructor is available, the
method will return a promise that resolves when the CSS transitions are
finished.

Unlike trigger attributes, methods don't check for the `[disabled]` attribute.

## `toggleId()`

TypeScript signature:

```
toggleId(id: string, done?: Function): Promise|void
```

Equivalent to clicking a `[data-sf-toggle-id]` pointing to the given id.

## `toggleElem()`

TypeScript signature:

```
toggleElem(elem: HTMLElement, done?: Function): Promise|void
```

Equivalent to clicking this element if it had the `[data-sf-toggle]` attribute.

## `openModal()`

TypeScript signature:

```
openModal(elem: HTMLElement, done?: Function): Promise|void
```

Equivalent to toggling the given modal by clicking a `[data-sf-toggle-id]`
pointing to it. Note that this doesn't check if the target is a `<template>`
(see [why](components/#cloning) you'd use that). Use `toggleId` or `toggleElem`
to target a `<template>` containing  a modal.

## `closeModal()`

TypeScript signature:

```
closeModal(elem: HTMLElement, done?: Function): Promise|void
```

Equivalent to closing the given modal by clicking its overlay or the
`[data-sf-close-modal]` button. If the modal is a clone, it's destroyed
after the CSS transitions.

## `closeAllModals()`

TypeScript signature:

```
closeAllModals(done?: Function): Promise|void
```

Equivalent to hitting `Esc` to close all modals. The callback, if any, will be
executed right away, but the promise, if any, will resolve only after all modals
have been closed.
