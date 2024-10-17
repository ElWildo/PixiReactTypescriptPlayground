import { Sprite, useApp, useTick } from "@pixi/react";
import { Assets, Resource, Texture } from "pixi.js";
import { useState } from "react";

export interface CardProps {
  paddingTop?: number;
  index?: number;
}

/**
 *  We instantiate a single card with texture based on the index
 *  then we start to move it towards the endpoint calculating step length every tick
 */

export default function Card({ index = 0, paddingTop = 0 }: CardProps) {
  const horizontalPadding = 150;
  const app = useApp();
  const [x, setX] = useState(horizontalPadding);
  const [time, setTime] = useState(0);
  const moveSpeed = 200;
  const moveDelay = 100;
  const delay = moveDelay + index * moveSpeed;
  const speed = (app.screen.width - horizontalPadding) / moveSpeed;
  const finalPos = app.screen.width - horizontalPadding;
  const src = Assets.get<Texture<Resource>>("card" + (index % 53) + ".png");

  useTick((delta) => {
    const newTime = time + delta;
    if (delta > 0) {
      setTime(newTime);
    }
    if (
      newTime > 0 &&
      newTime > delay &&
      x <= app.screen.width - horizontalPadding
    ) {
      const lengthLeft = finalPos - x;
      const upcomingPos = x + speed * delta;
      if (lengthLeft > 0) setX(upcomingPos > finalPos ? finalPos : upcomingPos);
    }
  }, true);

  return src ? (
    <Sprite texture={src} x={x} y={paddingTop} anchor={{ x: 0.5, y: 0 }} />
  ) : null;
}
