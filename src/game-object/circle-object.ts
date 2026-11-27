import { Blink } from "../behavior/blink";
import { circle, Circle } from "../math/circle";
import { Vector2D, vector2D } from "../math/vector2d";
import { renderCircle } from "../render/circle";
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

  const { circle } = object;
  const { filled, stroked } = object.style;

  renderCircle(ctx, circle, filled, stroked);
}
