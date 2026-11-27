```ts
import { Blink } from "../behavior/blink";
import { circle, Circle } from "../math/circle";
import { Vector2D, vector2D } from "../math/vector2d";
import { Filled, Stroked } from "./styles";

export interface CircleStyle {
  filled?: Filled;
  stroked?: Stroked;
}

export interface CircleObject {
  circle: Circle;
  style: CircleStyle;
}

export function createCircleObject(
  center: Vector2D = vector2D(0, 0),
  radius = 10,
  filled?: Filled,
  stroked?: Stroked,
): CircleObject {
  return {
    circle: circle(center, radius),
    style: { filled, stroked },
  };
}

export function renderCircleObject(
  ctx: CanvasRenderingContext2D,
  object: CircleObject,
  blink?: Blink,
): void {
  if (blink && !blink.visible) return;

  const { center, radius } = object.circle;
  const { filled, stroked } = object.style;

  ctx.beginPath();
  ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);

  if (filled) {
    ctx.fillStyle = filled.color;
    ctx.fill();
  }

  if (stroked) {
    ctx.lineWidth = stroked.lineWidth;
    ctx.strokeStyle = stroked.color;
    ctx.stroke();
  }
}
```
