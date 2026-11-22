export type Vector2D = {
  x: number;
  y: number;
};

export function vector2D(x: number, y: number): Vector2D {
  return { x, y };
}
