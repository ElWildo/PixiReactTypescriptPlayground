import { useApp } from "@pixi/react";
import FXComponent from "../components/FXComponent";
import { Application, Assets, ICanvas } from "pixi.js";
import { useEffect, useState } from "react";
import fx_spritesheet from "/spritesheets/revoltfx-spritesheet.json?url";

/**
 * Create a component that handles fire animation
 */

export default function FireEffect() {
  const app = useApp();

  // This abilitate Pixi debugger in chrome
  (
    window as unknown as { __PIXI_DEVTOOLS__: { app: Application<ICanvas> } }
  ).__PIXI_DEVTOOLS__ = {
    app: app,
  };
  const [loaded, SetLoaded] = useState(false);

  useEffect(() => {
    // Loading assets on mount
    const load = async () => {
      const assets = await Assets.cache.has(fx_spritesheet);
      if (!assets)
        await Assets.load(fx_spritesheet).then(() => SetLoaded(true));
    };
    load();
    return () => Assets.reset();
  }, []);

  return loaded && <FXComponent app={app} />;
}
