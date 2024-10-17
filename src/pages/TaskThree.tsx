import { Stage } from "@pixi/react";
import useWindowDimensions from "../utils_hooks/useWindowsDimensions";
import { StrictMode } from "react";
import FireEffect from "../games/FireEffect";

export default function TaskThree() {
  // We instantiate the Stage (PIXI application) and we add the game to it
  const { width, height } = useWindowDimensions();

  return (
    <Stage width={width} height={height} options={{ backgroundAlpha: 0 }}>
      <StrictMode>
        <FireEffect />
      </StrictMode>
    </Stage>
  );
}
