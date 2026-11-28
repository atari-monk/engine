import { Vector2D, vector2D } from "../math/vector2d";
import {
  CircleObject,
  createCircleObject,
  renderCircleObject,
} from "./circle-object";
import { RectObject, createRectObject, renderRectObject } from "./rect-object";

export interface ShapePlayer {
  head: CircleObject;
  body: RectObject;
  leftFoot: RectObject;
  rightFoot: RectObject;
  rightArm: CircleObject;
  leftArm: CircleObject;
}

const PLAYER_OFFSETS = {
  leftFoot: { x: -6, y: 2 },
  rightFoot: { x: 6, y: 2 },
  rightArm: { x: 15, y: 0 },
  leftArm: { x: -15, y: 0 },
};

export function createShapePlayer(
  position: Vector2D,
  size: Vector2D,
): ShapePlayer {
  const leftFoot = createRectObject(
    vector2D(position.x, position.y),
    vector2D(5, 15),
    { color: "#3b4249" },
    undefined,
  );
  leftFoot.rect.center.x -= PLAYER_OFFSETS.leftFoot.x;
  leftFoot.rect.center.y += PLAYER_OFFSETS.leftFoot.y;
  const rightFoot = createRectObject(
    vector2D(position.x, position.y),
    vector2D(5, 15),
    { color: "#3b4249" },
    undefined,
  );
  rightFoot.rect.center.x += PLAYER_OFFSETS.rightFoot.x;
  rightFoot.rect.center.y += PLAYER_OFFSETS.rightFoot.y;
  const rightArm = createCircleObject(
    vector2D(position.x, position.y),
    4,
    { color: "#034072" },
    undefined,
  );
  rightArm.circle.center.x += PLAYER_OFFSETS.rightArm.x;
  rightArm.circle.center.y += PLAYER_OFFSETS.rightArm.y;
  const leftArm = createCircleObject(
    vector2D(position.x, position.y),
    4,
    { color: "#034072" },
    undefined,
  );
  leftArm.circle.center.x += PLAYER_OFFSETS.leftArm.x;
  leftArm.circle.center.y += PLAYER_OFFSETS.leftArm.y;
  return {
    head: createCircleObject(position, 5, { color: "gold" }, undefined),
    body: createRectObject(position, size, { color: "#034072" }, undefined),
    leftFoot,
    rightFoot,
    rightArm,
    leftArm,
  };
}

export function updateShapePlayer(
  position: Vector2D,
  object: ShapePlayer,
): void {
  object.leftFoot.rect.center.x = position.x + PLAYER_OFFSETS.leftFoot.x;
  object.leftFoot.rect.center.y = position.y + PLAYER_OFFSETS.leftFoot.y;

  object.rightFoot.rect.center.x = position.x + PLAYER_OFFSETS.rightFoot.x;
  object.rightFoot.rect.center.y = position.y + PLAYER_OFFSETS.rightFoot.y;

  object.rightArm.circle.center.x = position.x + PLAYER_OFFSETS.rightArm.x;
  object.rightArm.circle.center.y = position.y + PLAYER_OFFSETS.rightArm.y;

  object.leftArm.circle.center.x = position.x + PLAYER_OFFSETS.leftArm.x;
  object.leftArm.circle.center.y = position.y + PLAYER_OFFSETS.leftArm.y;
}

export function renderShapePlayer(
  ctx: CanvasRenderingContext2D,
  position: Vector2D,
  rotation: number,
  object: ShapePlayer,
): void {
  ctx.save();

  ctx.translate(position.x, position.y);
  ctx.rotate(rotation);
  ctx.translate(-position.x, -position.y);

  renderRectObject(ctx, object.leftFoot);
  renderRectObject(ctx, object.rightFoot);
  renderRectObject(ctx, object.body);
  renderCircleObject(ctx, object.rightArm);
  renderCircleObject(ctx, object.leftArm);
  renderCircleObject(ctx, object.head);

  ctx.restore();
}
