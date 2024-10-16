import { Link } from "react-router-dom";
import classes from "./home.module.scss";

export default function Home() {
  return (
    <div className={classes.tasks}>
      <Link to={"/task_one"}>{"Task One"}</Link>
      <Link to={"/task_two"}>{"Task Two"}</Link>
      <Link to={"/task_three"}>{"Task Three"}</Link>
    </div>
  );
}
