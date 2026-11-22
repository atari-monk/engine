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
export { line2D, drawLine } from "./math/line2d";

export type {
  CrossMath,
  CrossLines,
  CrossStyle,
  Cross,
} from "./game-object/corss";
export { createCross, renderCross } from "./game-object/corss";
