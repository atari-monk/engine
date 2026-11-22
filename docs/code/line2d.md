```ts
import { Vector2D } from "./vector2d";

export type Line2D = {
  p1: Vector2D;
  p2: Vector2D;
};

export function line2D(p1: Vector2D, p2: Vector2D): Line2D {
  return { p1, p2 };
}
```
