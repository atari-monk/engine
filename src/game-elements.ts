export interface GameElements {
  readonly canvas: HTMLCanvasElement;
  readonly container: HTMLElement;
}

function getCanvasElement(): HTMLCanvasElement {
  const canvas = document.querySelector<HTMLCanvasElement>(".game-canvas");

  if (canvas === null) {
    throw new Error("Unable to find canvas element");
  }

  return canvas;
}

function getContainerElement(): HTMLElement {
  const container = document.querySelector<HTMLElement>("body");

  if (container === null) {
    throw new Error("Unable to find container element");
  }

  return container;
}

export function getGameElements(): GameElements {
  return {
    canvas: getCanvasElement(),
    container: getContainerElement(),
  };
}
