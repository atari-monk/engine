# [transform](code/transform.md)

- [task](#task)
- [srs](#srs)
- [export](#export)
- [usage](#usage)

## task

- [x] create `src/transform.ts`
- [x] copy code from game project
- [x] dev doc
- [x] document srs
- [x] document export
- [x] document usage
- [x] publish library locally
- [x] test in game project
- [x] commit feature

## srs

- `applyCartesianTransform(ctx, worldWidth, worldHeight)` sets the canvas 2D context transform
- converts screen space to Cartesian space: y-axis flipped (positive y is up)
- origin moves from top-left to screen center
- game objects are in Cartesian coordinates in a world of `worldWidth` × `worldHeight`, with zero at screen center
- world is scaled uniformly to fit the canvas (fit-to-canvas, aspect ratio preserved, based on the smaller of width/height ratios)
- transform applies to the context, affecting all subsequent drawing

## export

`src/index.ts`

```ts
export { applyCartesianTransform } from "./transform";
```

## usage

```ts
import { applyCartesianTransform } from "./src/transform";

const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d")!;

// Set up a Cartesian coordinate system where the world is 100x100 units,
// centered on the canvas, with the Y-axis pointing up.
applyCartesianTransform(ctx, 100, 100);

// Draw in world coordinates: a red square from (-10, -10) to (10, 10)
ctx.fillStyle = "red";
ctx.fillRect(-10, -10, 20, 20);
```

---

[top](#transform)
