import { KeyboardInput } from "../keyboard-input";
import { Vector2D, vector2D } from "../math/vector2d";
import {
  CircleObject,
  createCircleObject,
  renderCircleObject,
} from "./circle-object";
import { RectObject, createRectObject, renderRectObject } from "./rect-object";

export interface PlayerObject {
  position: Vector2D;
  rotation: number;
  velocity: Vector2D;
  size: Vector2D;
  speed: number;
  hair: CircleObject;
  head: CircleObject;
  body: RectObject;
  leftFoot: CircleObject;
  rightFoot: CircleObject;
  rightArm: RectObject;
  leftArm: RectObject;
}

const PLAYER_OFFSETS = {
  leftFoot: { x: -10, y: 5 },
  rightFoot: { x: 10, y: 5 },
  rightArm: { x: 15, y: 0 },
  leftArm: { x: -15, y: 0 },
};

export function createPlayerObject(
  position: Vector2D = vector2D(0, 0),
  size: Vector2D = vector2D(30, 15),
  speed = 150,
): PlayerObject {
  const leftFoot = createCircleObject(
    vector2D(position.x, position.y),
    5,
    { color: "#3b4249" },
    undefined,
  );
  leftFoot.circle.center.x -= PLAYER_OFFSETS.leftFoot.x;
  leftFoot.circle.center.y += PLAYER_OFFSETS.leftFoot.y;
  const rightFoot = createCircleObject(
    vector2D(position.x, position.y),
    5,
    { color: "#3b4249" },
    undefined,
  );
  rightFoot.circle.center.x += PLAYER_OFFSETS.rightFoot.x;
  rightFoot.circle.center.y += PLAYER_OFFSETS.rightFoot.y;
  const rightArm = createRectObject(
    vector2D(position.x, position.y),
    vector2D(8, 10),
    { color: "#065ea7" },
    undefined,
  );
  rightArm.rect.center.x += PLAYER_OFFSETS.rightArm.x;
  rightArm.rect.center.y += PLAYER_OFFSETS.rightArm.y;
  const leftArm = createRectObject(
    vector2D(position.x, position.y),
    vector2D(8, 10),
    { color: "#065ea7" },
    undefined,
  );
  leftArm.rect.center.x += PLAYER_OFFSETS.leftArm.x;
  leftArm.rect.center.y += PLAYER_OFFSETS.leftArm.y;
  return {
    position,
    rotation: 0,
    velocity: vector2D(0, 0),
    size,
    speed,
    hair: createCircleObject(position, 5, { color: "#272423" }, undefined),
    head: createCircleObject(position, 7, { color: "#f0d90b" }, undefined),
    body: createRectObject(position, size, { color: "#034072" }, undefined),
    leftFoot,
    rightFoot,
    rightArm,
    leftArm,
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

  object.leftFoot.circle.center.x =
    object.position.x + PLAYER_OFFSETS.leftFoot.x;
  object.leftFoot.circle.center.y =
    object.position.y + PLAYER_OFFSETS.leftFoot.y;

  object.rightFoot.circle.center.x =
    object.position.x + PLAYER_OFFSETS.rightFoot.x;
  object.rightFoot.circle.center.y =
    object.position.y + PLAYER_OFFSETS.rightFoot.y;

  object.rightArm.rect.center.x = object.position.x + PLAYER_OFFSETS.rightArm.x;
  object.rightArm.rect.center.y = object.position.y + PLAYER_OFFSETS.rightArm.y;

  object.leftArm.rect.center.x = object.position.x + PLAYER_OFFSETS.leftArm.x;
  object.leftArm.rect.center.y = object.position.y + PLAYER_OFFSETS.leftArm.y;
}

export function renderPlayerObject(
  ctx: CanvasRenderingContext2D,
  object: PlayerObject,
): void {
  ctx.save();

  ctx.translate(object.position.x, object.position.y);
  ctx.rotate(object.rotation);
  ctx.translate(-object.position.x, -object.position.y);

  renderCircleObject(ctx, object.leftFoot);
  renderCircleObject(ctx, object.rightFoot);
  renderRectObject(ctx, object.body);
  renderRectObject(ctx, object.rightArm);
  renderRectObject(ctx, object.leftArm);
  renderCircleObject(ctx, object.head);
  renderCircleObject(ctx, object.hair);

  ctx.restore();
}
