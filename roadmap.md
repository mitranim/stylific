## In Progress

### Documentation

Document `.sf-color()`, importing as reference, and incremental compilation.

Add blockquote styles. Use blockquotes for notes and tips.

Consider including a section on why sf-grid is so primitive and how flexbox
obviates the "missing" grid features.

### Lib

Consider:
* including :link colours into the overall mix; they need automatic adjustment too
* changing -05 suffixes into -half
* removing all default padding
* ways of making space-out recursive

Review the grid item active styles. Consider making them respond to colour
classes in an inverse way. This might also be useful for other components.

Adapt icons to the colour system; include 'fill' into the colour mixes for SVG
icons.

Reduce the (currently exceedingly high) specificity of activated selectors in
colour mixes.

## Components

* Navbar
  * ~~With static and fixed options~~ (done)
  * ~~Automatically collapsing into a dropdown~~ (done)
  * Bug: sf-dropdown elements in navbar dropdowns have background-color issues
  * Port the brand icon style, or include an example into docs
  * Auto-collapsing needs an option to stack wrapped items horizontally rather
    than vertically, or both, depending on media
* Grid
  * ~~Basic version~~ (done)
  * With an option to set different number of grid items based on media queries
  * Review grid item colour rules, particularly the .active styling
* ~~Responsive layouts~~ (done)
  * ~~Basic two- or three-column layout~~ (done)
  * ~~flex-N classes should affect proportions~~ (done)
* Dropdowns
  * ~~Hover version~~ (done)
  * ~~Dropdown version~~ (done)
  * Need to avoid clipping outside the window edges
  * Need to review background colours; they should be derived from base colours,
    and we may want to remove some
* Footer
  * ~~Must be pushed down to the bottom of the screen~~ (done)
  * ~~Needs additional preceding whitespace~~ (done)
  * Needs to respond to colour classes
* Modal
  * ~~Must close when clicking overlay~~ (done)
  * ~~Needs a close button in a corner~~ (done)
  * Try to automatically scale height based on content, if there's not enough of it
  * Needs options for controlling width
* ~~Tabs~~ (done)
* ~~Input and form styling~~ (done)
  * Add an option for spacing out form inputs
* ~~Button styling~~ (done)
  * ~~Include a custom :focus style and disable the Webkit outline~~ (done)
* Tooltips
  * ~~Basic implementation~~ (done)
    * Need options for left and right positioning (tricky with horizontally
      stretched blocks)
    * Need little triangle tails
* TOC navigation
* `<code>` and `<pre>` styling
  * ~~Basic styling~~ (done)
  * Need to respond to parent colour classes in a smarter way
* ~~Vertical collapse element~~ (done)
* Side drawer element (horizontal collapse)
* Icons
  * ~~Should combine well with inputs~~ (done)
  * Font version must respond to colour classes
    * ~~Straight version~~ (works ok)
    * Inverse version: works ok but should consider adding default padding
  * SVG version must respond to colour classes (same as font version but
    with {fill} rules instead of {color})
* Blockquotes
  * Must respond to colour classes

Consider:
* Badges
  * Basic implementation
  * Should respond to the colour class of the host inversely
* Custom checkboxes and radios

## Misc classes or mixins

* ~~Colour classes that alter color and background-color~~ (done)
* ~~Inverse colour classes (with white text)~~ (done)
* ~~Shortcuts to flex rules~~ (done)
* Utility rulesets
  * ~~Centering children with {align-items: center; justify-content: space-around}~~ (done)
  * ~~Style used in navbar/navtabs: stretched links with centered content, active state, colours~~ (done)
  * ~~Generic colour definitions for active and inactive state on nav and tabset links, grid items~~ (done)

## Themability

Defined by the following parts:
* ~~Variables (affect typography and geometry)~~ (done)
* ~~Colour definitions (derived global colour mix affects everything)~~ (done)

Consider reimplementing an option to disable default global styling; if done,
isolate normalisation into a mixin and use it separately for each component.

~~Add :active styles to inputs, buttons and toggles. Colours should be
distributed linearly: normal ⟷ :hover ⟷ :active ⟷ .active~~ (done)

~~Consider adding decorations to non-nav links~~ (done in sf-article)

## Autotests

TBD.
