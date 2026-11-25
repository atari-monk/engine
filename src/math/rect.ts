import { type Vector2D } from "./vector2d";

export interface Rect {
  center: Vector2D;
  size: Vector2D;
}

export function rect(center: Vector2D, size: Vector2D): Rect {
  return { center, size };
}
