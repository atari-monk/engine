```ts
export type CanvasDimensions = {
  width: number;
  height: number;
  pixelRatio: number;
};

function getCanvasDimensions(canvas: HTMLCanvasElement): CanvasDimensions {
  const rect = canvas.getBoundingClientRect();
  const pixelRatio = window.devicePixelRatio || 1;

  return {
    width: rect.width,
    height: rect.height,
    pixelRatio,
  };
}

function resizeCanvas(
  canvas: HTMLCanvasElement,
  dimensions: CanvasDimensions,
): void {
  canvas.width = Math.round(dimensions.width * dimensions.pixelRatio);
  canvas.height = Math.round(dimensions.height * dimensions.pixelRatio);
}

export function observeCanvas(
  canvas: HTMLCanvasElement,
  onResize: (dimensions: CanvasDimensions) => void,
): void {
  const resize = (): void => {
    const dimensions = getCanvasDimensions(canvas);

    resizeCanvas(canvas, dimensions);
    onResize(dimensions);
  };

  const observer = new ResizeObserver(resize);

  observer.observe(canvas);
  resize();
}
```
