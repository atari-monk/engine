```ts
export function applyCartesianTransform(
  ctx: CanvasRenderingContext2D,
  worldWidth: number,
  worldHeight: number,
): void {
  const canvasWidth = ctx.canvas.width;
  const canvasHeight = ctx.canvas.height;

  const scale = Math.min(canvasWidth / worldWidth, canvasHeight / worldHeight);

  ctx.setTransform(scale, 0, 0, -scale, canvasWidth / 2, canvasHeight / 2);
}
```
