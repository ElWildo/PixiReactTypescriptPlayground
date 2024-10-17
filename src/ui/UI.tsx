import { Html } from "../tunnels/Hmtl";
import Nav from "./Nav";
import classes from "./ui.module.scss";

export default function UI() {
  // We create the UI cOntainer and we add the HTML tunnel output for Ract renders in Pixi App
  return (
    <div className={classes.uiContainer}>
      <Nav />
      <Html.Out />
    </div>
  );
}
