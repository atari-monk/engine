## [game loop](code/game-loop.md)

- [task](#task)
- [srs](#srs)
- [export](#export)
- [import](#import)
- [usage](#usage)

### task

- [x] document srs
- [x] create `src/game-loop.ts`
- [x] implement code from srs
- [x] document export
- [x] document import
- [x] commit feature
- [x] publish library locally
- [x] install lib in game project
- [x] consume in game project
- [x] test in game project
- [x] document usage

### srs

- game loop for HTML Canvas games
- loop state in TypeScript object
- standalone functions operate on state
- the game provides `update` and `render` functions

- `create(update, render)`
  - takes the game's `update` and `render` functions
  - returns a game loop instance
  - does not start automatically

- `start()`
  - starts the loop if it is not already running
- `stop()`
  - stops the loop if it is running

- `internal frame function`
  - runs once per animation frame
  - calculates elapsed time
  - executes zero or more fixed-timestep updates
  - limits catch-up updates to 5 per frame
  - calls the game's render function
  - schedules the next animation frame while running

- `update`
  - runs at a fixed timestep of 1/60 second
  - calls the game's `update(dt)` with a fixed `dt`
  - limits catch-up updates per frame

- `render`
  - uses `requestAnimationFrame` for scheduling
  - calls the game's `render()` after updates
  - does not modify game state

### export

`src/index.ts`

```ts
export { type GameLoop, create, start, stop } from "./game-loop";
```

### import

```ts
import { type GameLoop, create, start } from "atari-monk-engine";
```

### usage

- in game helper function:

```ts
interface GameState {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  dt: number;
  //game object states
}

export function startGameLoop(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
): void {
  const state = createGame(canvas, ctx);

  const loop = create(
    (dt: number): void => {
      state.dt = dt;
      updateGame(state);
    },
    (): void => {
      renderGame(state);
    },
  );

  start(loop);
}
```

---

[top](#game-loop)
