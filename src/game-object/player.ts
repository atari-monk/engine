import { KeyboardInput } from "../keyboard-input";
import { Vector2D, vector2D } from "../math/vector2d";

export interface PlayerObject {
  position: Vector2D;
  rotation: number;
  velocity: Vector2D;
  size: Vector2D;
  speed: number;
}

export function createPlayerObject(
  position: Vector2D = vector2D(0, 0),
  size: Vector2D = vector2D(25, 12),
  speed = 100,
): PlayerObject {
  return {
    position,
    rotation: 0,
    velocity: vector2D(0, 0),
    size,
    speed,
  };
}

export function updatePlayerObject(
  object: PlayerObject,
  keyboard: KeyboardInput,
  deltaTime: number,
): void {
  const direction = vector2D(0, 0);

  if (keyboard.isPressed("ArrowLeft") || keyboard.isPressed("KeyA")) {
    direction.x -= 1;
  }

  if (keyboard.isPressed("ArrowRight") || keyboard.isPressed("KeyD")) {
    direction.x += 1;
  }

  if (keyboard.isPressed("ArrowUp") || keyboard.isPressed("KeyW")) {
    direction.y += 1;
  }

  if (keyboard.isPressed("ArrowDown") || keyboard.isPressed("KeyS")) {
    direction.y -= 1;
  }

  const length = Math.hypot(direction.x, direction.y);

  if (length > 0) {
    direction.x /= length;
    direction.y /= length;

    if (length > 0) {
      object.rotation = Math.atan2(-direction.x, direction.y);
    }
  }

  object.velocity.x = direction.x * object.speed;
  object.velocity.y = direction.y * object.speed;

  object.position.x += object.velocity.x * deltaTime;
  object.position.y += object.velocity.y * deltaTime;
}
