# [line2d](../code/line2d.md)

- [task](#task)
- [srs](#srs)
- [export](#export)
- [usage](#usage)

## task

- [x] create dev doc
- [x] create `src/math/line2d.ts`
- [x] document srs
- [x] create and document export
- [x] document usage
- [x] publish library locally
- [x] test in game project
- [x] commit feature

## srs

- line2d struct
- creating new
- `drawLine` draws line with ctx and `Line2D` data

## export

`src/index.ts`

```ts
export { type Line2D } from "./line2d";
export { line2D, drawLine } from "./line2d";
```

## usage

```ts
import { vector2D } from "./src/math/vector2d";
import { line2D } from "./src/math/line2d";

const p1 = vector2D(4, 6);
const p2 = vector2D(2, 3);

const l = line2D(p1, p2);

drawLine(ctx, l);
```

---

[top](#line2d)
