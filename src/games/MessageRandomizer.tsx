import { useApp } from "@pixi/react";
import { Application, Assets, ICanvas } from "pixi.js";
import { Fragment, useEffect, useState } from "react";
import cardSpirtesheets from "/spritesheets/spritesheetcollection.json?url";
// import RandomMessageElement from "../components/RandomMessageElement";
import { Html } from "../tunnels/Hmtl";
import RandomMessageElement from "../components/RandomMessageElement";
import classes from "./message-randomizer.module.scss";

export default function MessageRandomizer() {
  const app = useApp();
  (
    window as unknown as { __PIXI_DEVTOOLS__: { app: Application<ICanvas> } }
  ).__PIXI_DEVTOOLS__ = {
    app: app,
  };
  const [loaded, SetLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const assets = await Assets.cache.has(cardSpirtesheets);
      if (!assets)
        await Assets.load(cardSpirtesheets).then(() => SetLoaded(true));
    };
    load();
    return () => Assets.reset();

    //It's loading it 2 times and i dont understand why
  }, []);

  return (
    loaded && (
      <Fragment>
        <Html.In>
          <div className={classes.messageContainer}>
            <RandomMessageElement />
            <RandomMessageElement />
            <RandomMessageElement />
          </div>
        </Html.In>
      </Fragment>
    )
  );
}
