import { Stage } from "@pixi/react";
import useWindowDimensions from "../utils_hooks/useWindowsDimensions";
import { BACKGROUND_COLOR } from "../utils_hooks/utils";
import CardsShift from "../games/CardsShift";
import { StrictMode } from "react";

export default function TaskOne() {
  const { width, height } = useWindowDimensions();

  return (
    <Stage
      width={width}
      height={height}
      options={{ background: BACKGROUND_COLOR }}
    >
      <StrictMode>
        <CardsShift />
      </StrictMode>
    </Stage>
  );
}
