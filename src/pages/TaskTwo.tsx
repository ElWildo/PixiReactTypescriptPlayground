import useWindowDimensions from "../utils_hooks/useWindowsDimensions";
import { Stage } from "@pixi/react";
import { StrictMode } from "react";
import MessageRandomizer from "../games/MessageRandomizer";

export default function TaskTwo() {
  // We instantiate the Stage (PIXI application) and we add the game to it
  const { width, height } = useWindowDimensions();

  return (
    <Stage width={width} height={height} options={{ backgroundAlpha: 0 }}>
      <StrictMode>
        <MessageRandomizer />
      </StrictMode>
    </Stage>
  );
}
