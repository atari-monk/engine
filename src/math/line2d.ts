import { Vector2D } from "./vector2d";

export type Line2D = {
  p1: Vector2D;
  p2: Vector2D;
};

export function line2D(p1: Vector2D, p2: Vector2D): Line2D {
  return { p1, p2 };
}

export function drawLine(ctx: CanvasRenderingContext2D, l: Line2D): void {
  ctx.moveTo(l.p1.x, l.p1.y);
  ctx.lineTo(l.p2.x, l.p2.y);
}
