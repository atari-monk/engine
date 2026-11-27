export { type GameLoop } from "./game-loop";
export { create, start, stop } from "./game-loop";

export { type CanvasDimensions } from "./canvas-resizer";
export { observeCanvas } from "./canvas-resizer";

export type { FullscreenResult } from "./fullscreen";
export { enterFullscreen } from "./fullscreen";

export { applyCartesianTransform } from "./transform";

export { type Vector2D } from "./math/vector2d";
export { vector2D } from "./math/vector2d";

export { type Line2D } from "./math/line2d";
export { line2D } from "./math/line2d";

export { type Rect } from "./math/rect";
export { rect, rectTopLeft } from "./math/rect";

export { type Circle } from "./math/circle";
export { circle } from "./math/circle";

export { type Blink } from "./behavior/blink";
export { createBlink, updateBlink } from "./behavior/blink";

export type {
  CrossLines,
  CrossStyle,
  CrossObject as Cross,
} from "./game-object/corss";
export { createCrossObject, renderCrossObject } from "./game-object/corss";

export type { RectObject } from "./game-object/rect-object";
export { createRectObject, renderRectObject } from "./game-object/rect-object";

export type { GameElements } from "./game-elements";
export { getGameElements } from "./game-elements";

export type { PressStartOptions } from "./press-start";
export { pressStart } from "./press-start";

export type { CircleStyle, CircleObject } from "./game-object/circle-object";
export {
  createCircleObject,
  renderCircleObject,
} from "./game-object/circle-object";

export type { KeyboardInput } from "./keyboard-input";
export { createKeyboardInput } from "./keyboard-input";

export type { PlayerObject } from "./game-object/player";
export {
  createPlayerObject,
  updatePlayerObject,
  renderPlayerObject,
} from "./game-object/player";
