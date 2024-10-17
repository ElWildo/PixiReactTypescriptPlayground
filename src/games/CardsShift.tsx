import { Container, useApp } from "@pixi/react";
import Card from "../components/Card";
import { Application, Assets, ICanvas } from "pixi.js";
import cardSpirtesheets from "/spritesheets/spritesheetcollection.json?url";
import { useEffect, useState } from "react";

/**
 * Create a component that handles a card list
 */

export default function CardsShift() {
  const app = useApp();

  // This abilitate Pixi debugger in chrome
  (
    window as unknown as { __PIXI_DEVTOOLS__: { app: Application<ICanvas> } }
  ).__PIXI_DEVTOOLS__ = {
    app: app,
  };

  const paddingY = 100;
  const cardsInfos: { paddingTop: number; index: number }[] = [];
  const [loaded, SetLoaded] = useState(false);

  // Set up infos about cards
  let spritePadding = 0;
  for (let i = 0; i < 144; i++) {
    cardsInfos.push({
      index: 144 - i - 1,
      paddingTop: spritePadding + paddingY,
    });
    spritePadding += 5;
  }

  useEffect(() => {
    // Loading assets on mount
    const load = async () => {
      const assets = await Assets.cache.has(cardSpirtesheets);
      if (!assets)
        await Assets.load(cardSpirtesheets).then(() => SetLoaded(true));
    };
    load();
    return () => Assets.reset();
  }, []);

  return (
    <Container width={app.screen.width} height={app.screen.height}>
      {loaded &&
        cardsInfos.map((cardInfo) => (
          <Card
            index={cardInfo.index}
            paddingTop={cardInfo.paddingTop}
            key={"Card_" + cardInfo.index}
          />
        ))}
    </Container>
  );
}
