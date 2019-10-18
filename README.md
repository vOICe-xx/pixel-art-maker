# Pixel Art Maker

My solution of [this](https://github.com/gSchool/pixel-art-maker) exercise: https://voice-xx.github.io/pixel-art-maker/

What it does:
1. Start with a blank canvas of pixels.
2. Select a brush color from a palette of colors.
3. Paint the pixels on the canvas using the brush color.
4. Repeat step 2.

To do:
Improve the mouse so it behaves like a real paintbrush. In other words, allow the user to paint by clicking and dragging across the canvas. For this, you'll need a combination of the `mousedown`, `mouseenter`, and `mouseup` events.

**TIP:** The [`mouseenter` event](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter) doesn't bubble up the DOM tree.

Done

### Bonus 2

Add a color picker which allows the user to select any brush color using the [`<input type="color">` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) and the [`change` event](https://developer.mozilla.org/en-US/docs/Web/Events/change).

Done

### Bonus 3

Research [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) and make a way to Save and Load a drawing.  Research [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) as a way to put the drawing into LocalStorage.

Done 

### Bonus 4

Create a fill tool that will [flood fill](https://en.wikipedia.org/wiki/Flood_fill) boundaries with a chosen paint color. 
