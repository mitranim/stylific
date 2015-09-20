# sf-modal

`.sf-modal` is a fixed popup dialog. To display it, use an element with the
`[data-sf-toggle-id]` attribute pointing to the modal's id. It will toggle the
modal when clicked.

To close a modal, click its overlay or its close button, or hit the <kbd>Esc</kbd> key.

By default, the modal body takes up up to half the screen, growing wider on
small displays. There are two extra size options:

```html
<div class="sf-modal sf-modal-narrow">...</div>
<div class="sf-modal sf-modal-wide">...</div>
```

See the examples.

```html
<!-- Opens modal when clicked -->
<button data-sf-toggle-id="demo-modal-normal">Open normal-sized modal</button>

<!-- Hidden until activated -->
<div id="demo-modal-normal" class="sf-modal">
  <div class="sf-modal-body">
    <h1>I'm a normal-sized modal</h1>
    <h2>Click overlay or hit Esc to close me.</h2>
    <p>...</p>
  </div>
</div>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <button data-sf-toggle-id="demo-modal-normal">Open normal-sized modal</button>
    <div id="demo-modal-normal" class="sf-modal">
      <div class="sf-modal-body">
        <h1>I'm a normal-sized modal</h1>
        <h2>Click overlay or hit Esc to close me.</h2>
        <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
        <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.</p>
      </div>
    </div>
    <button data-sf-toggle-id="demo-modal-narrow">Open narrow modal</button>
    <div id="demo-modal-narrow" class="sf-modal sf-modal-narrow">
      <div class="sf-modal-body">
        <h1>I'm a narrow modal</h1>
        <h2>Click overlay or hit Esc to close me.</h2>
      </div>
    </div>
    <button data-sf-toggle-id="demo-modal-wide">Open wide modal</button>
    <div id="demo-modal-wide" class="sf-modal sf-modal-wide">
      <div class="sf-modal-body">
        <h1>I'm a wide modal</h1>
        <h2>Click overlay or hit Esc to close me.</h2>
        <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
        <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.</p>
        <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?</p>
        <p>In Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading. Maleficia! Vel cemetery man a modern bursting eyeballs perhsaps morbi. A terrenti flesh contagium. Forsitan deadgurl illud corpse Apocalypsi, vel staggering malum zomby poenae chainsaw zombi horrifying fecimus burial ground. Indeflexus shotgun coup de poudre monstra per plateas currere. Fit de decay nostra carne undead. Poenitentiam violent zom biehig hway agite RE:dead pœnitentiam! Vivens mortua sunt apud nos night of the living dead.</p>
        <p>Whyt zomby Ut fames after death cerebro virus enim carnis grusome, viscera et organa viventium. Sicut spargit virus ad impetum, qui supersumus flesh eating. Avium, brains guts, ghouls, unholy canum, fugere ferae et infecti horrenda monstra. Videmus twenty-eight deformis pale, horrenda daemonum. Panduntur brains portae rotting inferi. Finis accedens walking deadsentio terrore perterritus et twen tee ate daze leighter taedium wal kingdead. The horror, monstra epidemic significant finem. Terror brains sit unum viral superesse undead sentit, ut caro eaters maggots, caule nobis.</p>
      </div>
    </div>
  </div>
</div>

## `[data-sf-clone-modal]`

This trigger attribute makes a copy of the modal every time.

A typical use case is embedding YouTube videos or any other media content. With
a normal modal, playback would continue after a modal is closed. However, when
using this trigger, the modal's _clone_ is added to the DOM and removed when
it's closed, which automatically stops any media content.

```html
<button data-sf-clone-modal="demo-modal-cloned">Open modal with YouTube video</button>
<p>The YT player in this modal is inert until the modal is opened.</p>

<template id="demo-modal-cloned">
  <div class="sf-modal sf-modal-wide">
    <div class="sf-modal-body">
      <div class="sf-embed">
        <iframe src="http://youtube.com/embed/mvH9mwkvWIU" allowFullScreen="true"></iframe>
      </div>
      <p>When this modal is closed, video playback stops.</p>
    </div>
  </div>
</template>
```

<div class="doc-demo">
  <div class="doc-demo-body">
    <button data-sf-clone-modal="demo-modal-cloned">Open modal with YouTube video</button>
    <p>The YT player in this modal is inert until the modal is opened.</p>

    <template id="demo-modal-cloned">
      <div class="sf-modal sf-modal-wide">
        <div class="sf-modal-body">
          <div class="sf-embed">
            <iframe src="http://youtube.com/embed/mvH9mwkvWIU" allowFullScreen="true"></iframe>
          </div>
          <p>When this modal is closed, video playback stops.</p>
        </div>
      </div>
    </template>
  </div>
</div>

Note that we're putting the modal into a `<template>` tag. In [supporting
browsers](http://caniuse.com/#feat=template), template contents are completely
inert. Embedded content like YouTube videos won't activate until the modal is
opened. This can make a huge difference for your page loading speed and
perceived performance.

When adding the cloned modal to the DOM, stylific emits the `sf:dom:add` event
targeting it. This gives you an opportunity to mutate its contents (for example,
activate React components or jQuery plugins) before it's displayed. When the
clone is closed, it's removed from the DOM.
