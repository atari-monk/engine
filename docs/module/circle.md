# circle

- [circle](../code/circle.md)
- [circle object](../code/circle-object.md)

---

- [task](#task)
- [srs](#srs)
- [export](#export)
- [usage](#usage)

## task

- []

## srs

- draws circle with stroke/fill
- use math lib

## export

`src/index.ts`

```ts
export { type Circle } from "./math/circle";
export { circle } from "./math/circle";

export type { CircleStyle, CircleObject } from "./game-object/circle-object";
export {
  createCircleObject,
  renderCircleObject,
} from "./game-object/circle-object";
```

## usage

```ts
import {
  createCircleObject,
  renderCircleObject,
} from "./game-object/circle-object";
import { vector2D } from "./math/vector2d";

const circle = createCircleObject(
  vector2D(100, 100),
  25,
  { color: "red" },
  { color: "black", lineWidth: 2 },
);

renderCircleObject(ctx, circle);
```

---

[top](#circle)
