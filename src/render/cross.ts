import { Line2D } from "../math/line2d";

export function renderCross(
  ctx: CanvasRenderingContext2D,
  l1: Line2D,
  l2: Line2D,
  color = "yellow",
  lineWidth = 1,
): void {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;

  ctx.beginPath();

  drawLine(ctx, l1);
  drawLine(ctx, l2);

  ctx.stroke();
}

export function drawLine(ctx: CanvasRenderingContext2D, line: Line2D): void {
  ctx.moveTo(line.p1.x, line.p1.y);
  ctx.lineTo(line.p2.x, line.p2.y);
}
