interface Size {
  readonly width: number;
  readonly height: number;
}

interface GameCanvasTransform {
  readonly scale: number;
  readonly offsetX: number;
  readonly offsetY: number;
}

interface Point {
  readonly x: number;
  readonly y: number;
}

const LOGICAL_WIDTH = 1920;
const LOGICAL_HEIGHT = 1080;

function getContainerSize(container: HTMLElement): Size {
  const rect = container.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
  };
}

function createCanvasTransform(container: Size): GameCanvasTransform {
  const scale = Math.min(
    container.width / LOGICAL_WIDTH,
    container.height / LOGICAL_HEIGHT,
  );

  return {
    scale,
    offsetX: (container.width - LOGICAL_WIDTH * scale) / 2,
    offsetY: (container.height - LOGICAL_HEIGHT * scale) / 2,
  };
}

function adaptCanvas(
  canvas: HTMLCanvasElement,
  container: HTMLElement,
): GameCanvasTransform {
  const size = getContainerSize(container);
  const transform = createCanvasTransform(size);
  const pixelRatio = window.devicePixelRatio || 1;

  canvas.style.width = `${size.width}px`;
  canvas.style.height = `${size.height}px`;
  canvas.style.display = "block";

  canvas.width = Math.round(size.width * pixelRatio);
  canvas.height = Math.round(size.height * pixelRatio);

  const context = canvas.getContext("2d");

  if (context === null) {
    throw new Error("Unable to acquire 2D canvas context");
  }

  context.setTransform(
    pixelRatio * transform.scale,
    0,
    0,
    pixelRatio * transform.scale,
    pixelRatio * transform.offsetX,
    pixelRatio * transform.offsetY,
  );

  return transform;
}

export function observeContainer(
  canvas: HTMLCanvasElement,
  container: HTMLElement,
  onAdapt?: (transform: GameCanvasTransform) => void,
): () => void {
  const handleResize = (): void => {
    const transform = adaptCanvas(canvas, container);
    onAdapt?.(transform);
  };

  const observer = new ResizeObserver(handleResize);

  observer.observe(container);
  window.addEventListener("orientationchange", handleResize);

  handleResize();

  return (): void => {
    observer.disconnect();
    window.removeEventListener("orientationchange", handleResize);
  };
}

function screenToWorld(
  x: number,
  y: number,
  transform: GameCanvasTransform,
): Point {
  return {
    x: (x - transform.offsetX) / transform.scale,
    y: (y - transform.offsetY) / transform.scale,
  };
}
