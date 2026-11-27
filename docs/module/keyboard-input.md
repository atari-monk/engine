# [keyboard-input](code/keyboard-input.md)

- [task](#task)
- [srs](#srs)
- [export](#export)
- [usage](#usage)

## task

- [x] build state and functions for engine keyboard input system
- [x] handle all keys for a canvas game
- [x] make it convinient to use in game

## srs

- content

## export

`src/index.ts`

```ts
export type { KeyboardInput } from "./keyboard-input";
export { createKeyboardInput } from "./keyboard-input";
```

## usage

```ts
import { createKeyboardInput } from "./keyboard-input";

const keyboard = createKeyboardInput();

function update(): void {
  if (keyboard.isPressed("ArrowRight")) {
    console.log("Moving right");
  }

  if (keyboard.isJustPressed("Space")) {
    console.log("Jump");
  }

  if (keyboard.isJustReleased("Space")) {
    console.log("Jump released");
  }

  keyboard.update();
}

// Game loop
function gameLoop(): void {
  update();
  requestAnimationFrame(gameLoop);
}

gameLoop();

// Cleanup when finished
// keyboard.dispose();
```

---

[top](#keyboard-input)
