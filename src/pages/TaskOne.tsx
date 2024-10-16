import { Stage } from "@pixi/react";
import useWindowDimensions from "../utils_hooks/useWindowsDimensions";
import CardsShift from "../games/CardsShift";
import { StrictMode } from "react";

export default function TaskOne() {
  const { width, height } = useWindowDimensions();

  return (
    <Stage width={width} height={height} options={{ backgroundAlpha: 0 }}>
      <StrictMode>
        <CardsShift />
      </StrictMode>
    </Stage>
  );
}
