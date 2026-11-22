# [cross](../code/cross.md)

- [task](#task)
- [srs](#srs)
- [export](#export)
- [usage](#usage)

## task

- [x] create `src/game-object/cross.ts` and copy code from game project
- [x] document srs from code
- [x] create and document export
- [x] document usage
- [x] publish library locally
- [x] test in game project
- [x] commit feature

## srs

- implement rendering of a cross from 2 lines
- `CrossMath` struct with point and size `Vector2D`
- `CrossLines` struct with l1, l2, calculated
- `CrossStyle` struct with line width and color
- `Cross` struct with math, lines and style, combines data
- `create` with default math and style, calculated lines, returns Cross
- `render` draws cross lines and style
- creates cross and renders it
- uses kartesian coords with 0,0 in screen center

## export

`src/index.ts`

```ts
export type { CrossMath, CrossLines, CrossStyle, Cross } from "./cross";
export { createCross, renderCross } from "./cross";
```

## usage

```ts
import { createCross, renderCross } from "atari-monk-engine";
import { vector2D } from "atari-monk-engine";

const cross = createCross();

renderCross(ctx, cross);

const customCross = createCross(
  { point: vector2D(100, 100), size: vector2D(80, 80) },
  { lineWidth: 2, color: "red" },
);
renderCross(ctx, customCross);
```

---

[top](#cross)
