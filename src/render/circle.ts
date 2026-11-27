import { Filled, Stroked } from "../game-object/styles";
import { Circle } from "../math/circle";

export function renderCircle(
  ctx: CanvasRenderingContext2D,
  circle: Circle,
  filled?: Filled,
  stroked?: Stroked,
): void {
  const { center, radius } = circle;

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
