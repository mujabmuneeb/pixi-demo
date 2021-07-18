import React from "react";
import * as PIXI from "pixi.js";
import { PixiComponent, useApp } from "@inlet/react-pixi";
import { Viewport as PixiViewport } from "pixi-viewport";

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST

export interface ViewportProps {
  width: number;
  height: number;
  children?: React.ReactNode;
}

export interface PixiComponentViewportProps extends ViewportProps {
  app: PIXI.Application;
}

const PixiComponentViewport = PixiComponent("Viewport", {
  create: (props: PixiComponentViewportProps) => {
    const viewport = new PixiViewport({
      screenWidth: props.width,
      screenHeight: props.width,
      worldWidth: props.width,
      worldHeight: props.height,
      ticker: props.app.ticker,
      passiveWheel: false,
      interaction: props.app.renderer.plugins.interaction
    });
    viewport.drag().wheel();
    return viewport;
  }
});

const Viewport = (props: ViewportProps) => {
  const app = useApp();
  return <PixiComponentViewport app={app} {...props} />;
};

export default Viewport;
