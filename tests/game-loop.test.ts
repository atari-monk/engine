import { afterEach, expect, it, vi } from "vitest";
import { create, start, stop } from "../src/game-loop";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

it("updates before rendering and schedules frames until stopped", () => {
  const update = vi.fn();
  const render = vi.fn();
  const callbacks: FrameRequestCallback[] = [];
  let nextFrameId = 0;

  vi.stubGlobal("performance", { now: () => 0 });
  vi.stubGlobal(
    "requestAnimationFrame",
    (callback: FrameRequestCallback): number => {
      callbacks.push(callback);
      nextFrameId += 1;
      return nextFrameId;
    },
  );
  vi.stubGlobal("cancelAnimationFrame", vi.fn());

  const loop = create(update, render);
  start(loop);

  callbacks.shift()?.(1000 / 60);

  expect(update).toHaveBeenCalledExactlyOnceWith(1 / 60);
  expect(update.mock.invocationCallOrder[0]).toBeLessThan(
    render.mock.invocationCallOrder[0]!,
  );
  expect(render).toHaveBeenCalledOnce();
  expect(callbacks).toHaveLength(1);

  stop(loop);

  expect(loop.running).toBe(false);
  expect(loop.frameId).toBeNull();
});
