import React from "react";
import { Sprite } from "@inlet/react-pixi";
import { Viewport as PixiViewport } from "pixi-viewport";
import * as PIXI from "pixi.js";

interface PixiDraggable extends PIXI.DisplayObject {
  data: PIXI.InteractionData | null;
  dragging: boolean;
}

interface Props {
  image: string;
  x: number;
  y: number;
}

const Draggable = ({ image, x, y }: Props) => {
  const onDragStart = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget as PixiDraggable;
    const viewport = sprite.parent as PixiViewport;

    sprite.alpha = 0.5;
    sprite.data = event.data;
    sprite.dragging = true;
    viewport.drag({ pressDrag: false });
  };

  const onDragEnd = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget as PixiDraggable;
    const viewport = sprite.parent as PixiViewport;

    sprite.alpha = 1;
    sprite.dragging = false;
    sprite.data = null;
    viewport.drag();
  };

  const onDragMove = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget as PixiDraggable;
    if (sprite.dragging) {
      const newPosition = sprite.data!.getLocalPosition(sprite.parent);
      sprite.x = newPosition.x;
      sprite.y = newPosition.y;
    }
  };

  return (
    <Sprite
      image={image}
      x={x}
      y={y}
      anchor={0.5}
      interactive
      buttonMode
      pointerdown={onDragStart}
      pointerup={onDragEnd}
      pointerupoutside={onDragEnd}
      pointermove={onDragMove}
    />
  );
};

export default Draggable;
