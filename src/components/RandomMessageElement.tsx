import { Assets, Resource, Spritesheet, Texture } from "pixi.js";
import cardSpirtesheets from "/spritesheets/spritesheetcollection.json?url";
import cardSpirtesheetsImg from "/spritesheets/spritesheetcollection.png?url";
import { pokemonArray as vocabulary, randomInt } from "../utils_hooks/utils";

export default function RandomMessageElement() {
  /**
   *  We instantiate random for image and text
   *  then we randomize what kind of component
   *  we want and then return accordingly
   * */

  const spriteSheet = Assets.get<Spritesheet>(cardSpirtesheets);
  const imgNameList = Object.keys(spriteSheet.data.frames);
  const totImages = imgNameList.length;
  const randomFontSize = randomInt(12, 48);
  const type: "text" | "icon" = randomInt(0, 1) == 0 ? "text" : "icon";
  const randomText = vocabulary[randomInt(0, vocabulary.length - 1)];
  const randomImgName = imgNameList[randomInt(0, totImages - 1)];
  const randomImg = Assets.get<Texture<Resource>>(randomImgName);

  switch (type) {
    case "text":
      return <div style={{ fontSize: randomFontSize }}>{randomText}</div>;
    case "icon":
      return (
        <div
          style={{
            backgroundImage: `url(${cardSpirtesheetsImg})`,
            width: randomImg.frame.width,
            height: randomImg.frame.height,
            backgroundPositionX: -randomImg.frame.x,
            backgroundPositionY: -randomImg.frame.y,
          }}
        />
      );
    default:
      return null;
  }
}
