type UpdateFn = (dt: number) => void;
type RenderFn = () => void;

export interface GameLoop {
  update: UpdateFn;
  render: RenderFn;
  running: boolean;
  lastTime: number;
  accumulator: number;
  frameId: number | null;
  readonly fixedDt: number;
  readonly maxCatchUp: number;
}

const FIXED_DT = 1 / 60;
const MAX_CATCH_UP = 5;

export function create(update: UpdateFn, render: RenderFn): GameLoop {
  return {
    update,
    render,
    running: false,
    lastTime: 0,
    accumulator: 0,
    frameId: null,
    fixedDt: FIXED_DT,
    maxCatchUp: MAX_CATCH_UP,
  };
}

export function start(loop: GameLoop): void {
  if (loop.running) return;

  loop.running = true;
  loop.lastTime = performance.now();
  loop.accumulator = 0;

  scheduleNextFrame(loop);
}

export function stop(loop: GameLoop): void {
  if (!loop.running) return;

  loop.running = false;
  cancelScheduledFrame(loop);
}

function scheduleNextFrame(loop: GameLoop): void {
  loop.frameId = requestAnimationFrame((timestamp: number) => {
    frame(loop, timestamp);
  });
}

function cancelScheduledFrame(loop: GameLoop): void {
  if (loop.frameId === null) return;

  cancelAnimationFrame(loop.frameId);
  loop.frameId = null;
}

function frame(loop: GameLoop, timestamp: number): void {
  if (!loop.running) return;

  accumulateElapsedTime(loop, timestamp);
  executeFixedUpdates(loop);
  loop.render();

  if (loop.running) {
    scheduleNextFrame(loop);
  }
}

function accumulateElapsedTime(loop: GameLoop, timestamp: number): void {
  const elapsed = Math.max((timestamp - loop.lastTime) / 1000, 0);
  const maxElapsed = loop.fixedDt * loop.maxCatchUp;

  loop.lastTime = timestamp;
  loop.accumulator += Math.min(elapsed, maxElapsed);
}

function executeFixedUpdates(loop: GameLoop): void {
  let steps = 0;

  while (hasPendingUpdate(loop) && steps < loop.maxCatchUp) {
    loop.update(loop.fixedDt);
    loop.accumulator -= loop.fixedDt;
    steps += 1;
  }

  discardExcessAccumulatedTime(loop, steps);
}

function hasPendingUpdate(loop: GameLoop): boolean {
  return loop.accumulator >= loop.fixedDt;
}

function discardExcessAccumulatedTime(loop: GameLoop, steps: number): void {
  if (steps >= loop.maxCatchUp) {
    loop.accumulator = 0;
  }
}
