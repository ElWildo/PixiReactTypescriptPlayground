import { useApp } from "@pixi/react";
import { Application, Assets, ICanvas } from "pixi.js";
import { Fragment, useEffect, useState } from "react";
import { Html } from "../tunnels/Hmtl";
import RandomMessageElement from "../components/RandomMessageElement";
import cardSpirtesheets from "/spritesheets/spritesheetcollection.json?url";
import classes from "./message-randomizer.module.scss";

export default function MessageRandomizer() {
  const app = useApp();
  (
    window as unknown as { __PIXI_DEVTOOLS__: { app: Application<ICanvas> } }
  ).__PIXI_DEVTOOLS__ = {
    app: app,
  };
  const [loaded, SetLoaded] = useState(false);
  const [messageElements, setMessageElements] = useState([
    <RandomMessageElement key={"el_0"} />,
    <RandomMessageElement key={"el_1"} />,
    <RandomMessageElement key={"el_2"} />,
  ]);

  useEffect(() => {
    const load = async () => {
      const assets = await Assets.cache.has(cardSpirtesheets);
      if (!assets)
        await Assets.load(cardSpirtesheets).then(() => SetLoaded(true));
    };
    load();
    const loop = setInterval(() => {
      const newMessage = [
        <RandomMessageElement key={"el_0"} />,
        <RandomMessageElement key={"el_1"} />,
        <RandomMessageElement key={"el_2"} />,
      ];
      setMessageElements(newMessage);
    }, 2000);
    return () => {
      Assets.reset();
      clearInterval(loop);
    };

    //It's loading it 2 times and i dont understand why
  }, []);

  return (
    loaded && (
      <Fragment>
        <Html.In>
          <div className={classes.messageContainer}>{messageElements}</div>
        </Html.In>
      </Fragment>
    )
  );
}
