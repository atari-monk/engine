import { Filled, Stroked } from "../game-object/styles";
import { Rect } from "../math/rect";

export function renderRect(
  ctx: CanvasRenderingContext2D,
  rect: Rect,
  filled?: Filled,
  stroked?: Stroked,
): void {
  const { center, size } = rect;

  const x = center.x - size.x / 2;
  const y = center.y - size.y / 2;

  if (filled) {
    ctx.fillStyle = filled.color;
    ctx.fillRect(x, y, size.x, size.y);
  }

  if (stroked) {
    const { color, lineWidth } = stroked;

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    ctx.strokeRect(
      x + lineWidth / 2,
      y + lineWidth / 2,
      size.x - lineWidth,
      size.y - lineWidth,
    );
  }
}
