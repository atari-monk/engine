# [canvas-resizer](code/canvas-resizer.md)

- [task](#task)
- [srs](#srs)
- [export](#export)
- [usage](#usage)
- [notes](#notes)

## task

- [x] create `src/canvas-resizer.ts`
- [x] copy code from game project
- [x] refactor to procedural style
- [x] document srs from code
- [x] document export
- [x] document usage
- [x] publish library locally
- [x] install in game project
- [x] consume in game project
- [x] test in game project
- [x] commit

## srs

- match canvas drawing buffer to display size and device pixel ratio
- observe canvas size changes and resize automatically
- notify callback on initial setup and every resize

## export

`src/index.ts`

```ts
export { type CanvasDimensions, observeCanvas } from "./canvas-resizer";
```

## usage

- ensure the canvas is sized to its container using CSS:

```css
.canvas-container {
  width: 100%;
  height: 100%;
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
}
```

- use canvas-resizer:

```ts
import { type CanvasDimensions, observeCanvas } from "atari-monk-engine";

observeCanvas(canvas, (dimensions: CanvasDimensions) => {
  console.log("Canvas resized:", dimensions);
});
```

- result:
- canvas fills its container
- drawing buffer adjusts to the displayed size and pixel ratio
- resizing the container automatically triggers the callback

## notes

- handles drawing buffer
- game rendering needs to scale to handle DPR ?

---

[top](#canvas-resizer)
