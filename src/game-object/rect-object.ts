import { Vector2D, vector2D } from "../math/vector2d";
import { Rect, rect } from "../math/rect";
import { Filled, Stroked } from "./styles";
import { Blink } from "../behavior/blink";

export interface RectObject {
  rect: Rect;
  topLeft: Vector2D;
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
    topLeft: vector2D(center.x - size.x / 2, center.y - size.y / 2),
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
  const { rect, topLeft } = object;

  if (object.style.filled) {
    ctx.fillStyle = object.style.filled.color;
    ctx.fillRect(topLeft.x, topLeft.y, rect.size.x, rect.size.y);
  }

  if (object.style.stroked) {
    const { color, lineWidth } = object.style.stroked;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    ctx.strokeRect(
      topLeft.x + lineWidth / 2,
      topLeft.y + lineWidth / 2,
      rect.size.x - lineWidth,
      rect.size.y - lineWidth,
    );
  }
}
