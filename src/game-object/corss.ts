import { vector2D } from "../math/vector2d";
import { type Line2D, line2D } from "../math/line2d";
import { Rect } from "../math/rect";
import { renderCross } from "../render/cross";

export interface CrossLines {
  l1: Line2D;
  l2: Line2D;
}

export interface CrossStyle {
  lineWidth: number;
  color: string;
}

export interface CrossObject {
  rect: Rect;
  lines: CrossLines;
  style: CrossStyle;
}

export function createCrossObject(
  rect: Rect = {
    center: vector2D(0, 0),
    size: vector2D(50, 50),
  },
  style: CrossStyle = { lineWidth: 1, color: "yellow" },
): CrossObject {
  const { center, size } = rect;
  const lines = {
    l1: line2D(vector2D(center.x, -size.y / 2), vector2D(center.x, size.y / 2)),
    l2: line2D(vector2D(-size.x / 2, center.y), vector2D(size.x / 2, center.y)),
  };
  return {
    rect,
    lines,
    style,
  };
}

export function renderCrossObject(
  ctx: CanvasRenderingContext2D,
  cross: CrossObject,
): void {
  const { l1, l2 } = cross.lines;
  const { color, lineWidth } = cross.style;

  renderCross(ctx, l1, l2, color, lineWidth);
}
