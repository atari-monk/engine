# [player](code/player.md)

- [task](#task)
- [srs](#srs)
- [export](#export)
- [usage](#usage)

## task

- [x] create struct, create, update and render for player game object
- [x] use math lib
- [x] use keyboard input
- [x] use render lib
- [x] player should be rendered as body from rectangle, circle head, circle boots, rect arms

## srs

- content

## export

`src/index.ts`

```ts
export type { PlayerObject, PlayerStyle } from "./game-object/player";

export {
  createPlayerObject,
  updatePlayerObject,
  renderPlayerObject,
} from "./game-object/player";
```

## usage

```ts
import {
  createPlayerObject,
  updatePlayerObject,
  renderPlayerObject,
} from "./game-object/player";
import { createKeyboardInput } from "./keyboard-input";
import { vector2D } from "./math/vector2d";
import { filled, stroked } from "./game-object/styles";

// setup
const canvas = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d")!;

const keyboard = createKeyboardInput();
const player = createPlayerObject(vector2D(0, 0), vector2D(40, 80), 200);

// game loop
let lastTime = 0;

function update(time: number) {
  const deltaTime = (time - lastTime) / 1000;
  lastTime = time;

  keyboard.update();
  updatePlayerObject(player, keyboard, deltaTime);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  renderPlayerObject(ctx, player);

  requestAnimationFrame(update);
}

requestAnimationFrame(update);
```

---

[top](#player)
