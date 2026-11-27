import { Vector2D, vector2D } from "../math/vector2d";
import { Rect, rect } from "../math/rect";
import { Filled, Stroked } from "./styles";
import { Blink } from "../behavior/blink";
import { renderRect } from "../render/rect";

export interface RectObject {
  rect: Rect;
  style: RectStyle;
}

export interface RectStyle {
  filled?: Filled;
  stroked?: Stroked;
}

export function createRectObject(
  center: Vector2D = vector2D(0, 0),
  size: Vector2D = vector2D(100, 100),
  filled?: Filled,
  stroked?: Stroked,
): RectObject {
  return {
    rect: rect(center, size),
    style: {
      filled,
      stroked,
    },
  };
}

export function renderRectObject(
  ctx: CanvasRenderingContext2D,
  object: RectObject,
  blink?: Blink,
): void {
  if (blink?.visible === false) return;

  const { rect, style } = object;

  renderRect(ctx, rect, style.filled, style.stroked);
}
