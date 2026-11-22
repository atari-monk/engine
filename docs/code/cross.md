```ts
import { type Vector2D, vector2D } from "../math/vector2d";
import { type Line2D, line2D, drawLine } from "../math/line2d";

export interface CrossMath {
  point: Vector2D;
  size: Vector2D;
}

export interface CrossLines {
  l1: Line2D;
  l2: Line2D;
}

export interface CrossStyle {
  lineWidth: number;
  color: string;
}

export interface Cross {
  math: CrossMath;
  lines: CrossLines;
  style: CrossStyle;
}

export function createCross(
  math: CrossMath = {
    point: vector2D(0, 0),
    size: vector2D(50, 50),
  },
  style: CrossStyle = { lineWidth: 1, color: "yellow" },
): Cross {
  const { point, size } = math;
  const lines = {
    l1: line2D(vector2D(point.x, -size.y / 2), vector2D(point.x, size.y / 2)),
    l2: line2D(vector2D(-size.x / 2, point.y), vector2D(size.x / 2, point.y)),
  };
  return {
    math,
    lines,
    style,
  };
}

export function renderCross(ctx: CanvasRenderingContext2D, cross: Cross): void {
  const { lineWidth, color } = cross.style;
  const { l1, l2 } = cross.lines;

  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;

  ctx.beginPath();

  drawLine(ctx, l1);

  drawLine(ctx, l2);

  ctx.stroke();
}
```
