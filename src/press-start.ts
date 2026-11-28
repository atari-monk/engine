export type PressStartOptions = {
  main: () => void;
};

export function pressStart(options: PressStartOptions): void {
  const overlay = document.querySelector<HTMLDivElement>(".overlay");
  const button = document.querySelector<HTMLButtonElement>(".overlay__button");

  if (!overlay || !button) {
    throw new Error("Overlay elements not found");
  }

  button.addEventListener(
    "click",
    () => {
      overlay.remove();
      options.main();
    },
    { once: true },
  );
}

export function removeOverlay(): void {
  const overlay = document.querySelector<HTMLDivElement>(".overlay");

  if (!overlay) {
    throw new Error("Overlay element not found");
  }

  overlay.remove();
}
