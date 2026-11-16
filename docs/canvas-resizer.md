## [canvas-resizer](code/canvas-resizer.md)

- [task](#task)
- [srs](#srs)
- [usage](#usage)
- [export](#export)
- [import](#import)
- [notes](#notes)

### task

- [x] create `src/canvas-resizer.ts`
- [x] copy code form game project experiments
- [x] refactor to procedural style
- [x] document srs from code
- [x] document usage
- [x] document export
- [x] document import
- [x] publish library locally
- [x] install lib in game project
- [x] consume in game project
- [x] test in game project
- [x] commit

### srs

- match canvas drawing buffer to display size and device pixel ratio
- observe canvas size changes and resize automatically
- notify callback on initial setup and every resize

### usage

- provided the canvas is sized to its container by CSS, for example:

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
observeCanvas(canvas, (dimensions: CanvasDimensions) => {
  console.log("Canvas resized:", dimensions);
});
```

- result:
- canvas fills its container
- drawing buffer adjusts to the displayed size and pixel ratio
- resizing the container automatically triggers the callback

### export

`src/index.ts`

```ts
export { type CanvasDimensions, observeCanvas } from "./canvas-resizer";
```

### import

```ts
import { type CanvasDimensions, observeCanvas } from "atari-monk-engine";
```

### notes

- handles drawing buffer
- game rendering needs to scale to handle DPR ?

---

[top](#canvas-resizer)
