# Description

Shows how to enhance stylific components with JS. These examples use jQuery;
they don't show each interactive component that can be patched.

# `sf-tabset`

Example code to make `sf-tabset` work by applying the `.active` class to labels.
Attaches a delegated event handler that works for all elements added in the
future.

```javascript
$(document).on('click', 'sf-tabset > label', function() {
  $(this).parent().children('label').removeClass('active');
  $(this).addClass('active');
});
```

In a tabset (no need for `<input>` this time):

```html
<sf-tabset>
  <label class="active">First tab</label>
  <sf-tab>...</sf-tab>
  <label>Second tab</label>
  <sf-tab>...</sf-tab>
</sf-tabset>
```

<div doc-demo>
  <sf-tabset theme="text-accent">
    <label class="active" theme="accent">First tab (preselected)</label>
    <sf-tab>
      <h3>First tab content</h3>
      <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
    </sf-tab>

    <label theme="accent">Second tab</label>
    <sf-tab>
      <h3>Second tab content</h3>
      <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.</p>
    </sf-tab>

    <label theme="accent">Third tab</label>
    <sf-tab>
      <h3>Third tab content</h3>
      <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?</p>
    </sf-tab>
  </sf-tabset>
</div>

# `sf-collapse`

Patch `sf-collapse` to avoid the need for hidden inputs:

```javascript
$(document).on('click', 'sf-collapse > label', function() {
  this.classList.toggle('active');
});
```

Use in HTML like so:

```html
<sf-collapse>
  <label theme="accent">I just work</label>
  <sf-collapse-body>...</sf-collapse-body>
</sf-collapse>
```

<div doc-demo>
  <sf-collapse>
    <label theme="accent">I just work</label>
    <sf-collapse-body>
      <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
    </sf-collapse-body>
  </sf-collapse>
</div>

# `sf-tooltip`

Patch `sf-tooltip` to appear when a child input is focused:

```javascript
$(document).on('focus', '[sf-trigger~=focus]', function() {
  this.setAttribute('sf-tooltip-show', '');
});
// Have to use capture because blur events don't propagate
document.addEventListener('blur', function(event) {
  if (event.target instanceof HTMLElement) {
    var elem = event.target.parentElement;
    if (!elem) return;
    var attr = elem.getAttribute('sf-trigger');
    if (~attr.indexOf('focus')) elem.removeAttribute('sf-tooltip-show');
  }
}, true);
```

```html
<div sf-tooltip="I'm an input tooltip that appears on focus!" sf-trigger="focus">
  <input placeholder="Focus me to see a tooltip.">
</div>
```

<div doc-demo layout="column" class="space-out">
  <div sf-tooltip="I'm an input tooltip that appears on focus!" sf-trigger="focus">
    <input placeholder="Focus me to see a tooltip.">
  </div>
</div>

<!-- Demo handlers -->
<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
<script>
  $(document).on('click', 'sf-collapse > label,[sf-collapse] > label', function() {
    this.classList.toggle('active');
  });

  $(document).on('click', 'sf-tabset > label,[sf-tabset] > label', function() {
    $(this).parent().children('label').removeClass('active');
    $(this).addClass('active');
  });

  $(document).on('focus', '[sf-trigger~=focus]', function() {
    this.setAttribute('sf-tooltip-show', '');
  });
  document.addEventListener('blur', function(event) {
    if (event.target instanceof HTMLElement) {
      var elem = event.target.parentElement;
      if (!elem) return;
      var attr = elem.getAttribute('sf-trigger');
      if (~attr.indexOf('focus')) elem.removeAttribute('sf-tooltip-show');
    }
  }, true);
</script>
