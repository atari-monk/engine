```ts
import { Vector2D } from "./vector2d";

export interface Circle {
  center: Vector2D;
  radius: number;
}

export function circle(center: Vector2D, radius: number): Circle {
  return { center, radius };
}
```
