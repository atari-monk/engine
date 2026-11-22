# [vector2d](../code/vector2d.md)

- [task](#task)
- [srs](#srs)
- [export](#export)
- [usage](#usage)

## task

- [x] create dev doc automation script
- [x] create dev doc
- [x] create `src/math/vector2d.ts`
- [x] document srs
- [x] implement code from srs
- [x] create and document export
- [x] document usage
- [x] publish library locally
- [x] test in game project
- [x] commit feature

## srs

- vector2d struct
- creating new

## export

`src/index.ts`

```ts
export { type Vector2D } from "./vector2d";
export { vector2D } from "./vector2d";
```

## usage

```ts
import { vector2D } from "./src/math/vector2d";

const a = vector2D(4, 6);
const b = vector2D(2, 3);
```

---

[top](#vector2d)
