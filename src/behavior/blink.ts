export interface Blink {
  elapsed: number;
  visible: boolean;
  toggleInterval: number;
}

export function createBlink(): Blink {
  return { elapsed: 0, visible: false, toggleInterval: 1 };
}

export function updateBlink(blink: Blink, dt: number): void {
  blink.elapsed += dt;

  if (blink.elapsed >= blink.toggleInterval) {
    blink.elapsed -= blink.toggleInterval;
    blink.visible = !blink.visible;
  }
}
