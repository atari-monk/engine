import { vector2D, type Vector2D } from "./vector2d";

export interface Rect {
  center: Vector2D;
  size: Vector2D;
}

export function rect(center: Vector2D, size: Vector2D): Rect {
  return { center, size };
}

export function rectTopLeft(rect: Rect): Vector2D {
  return vector2D(
    rect.center.x - rect.size.x / 2,
    rect.center.y - rect.size.y / 2,
  );
}
