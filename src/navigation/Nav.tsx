import { Link, useLocation } from "react-router-dom";
import classes from "./nav.module.scss";

export default function Nav() {
  const location = useLocation();
  return (
    <div className={classes.navBar}>
      {location.pathname != "/" && (
        <div className={classes.buttonHome}>
          <Link to={"/"}>{"Home"}</Link>
        </div>
      )}
    </div>
  );
}
