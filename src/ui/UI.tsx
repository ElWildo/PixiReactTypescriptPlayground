import { Html } from "../tunnels/Hmtl";
import Nav from "./Nav";
import classes from "./ui.module.scss";

export default function UI() {
  return (
    <div className={classes.uiContainer}>
      <Nav />
      <Html.Out />
    </div>
  );
}
