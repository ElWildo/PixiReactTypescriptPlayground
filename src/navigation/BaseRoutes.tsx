import { Route, Routes } from "react-router-dom";
import TaskOne from "../pages/TaskOne.tsx";
import TaskTwo from "../pages/TaskTwo.tsx";
import TaskThree from "../pages/TaskThree.tsx";
import Home from "../pages/Home.tsx";
import { Fragment } from "react/jsx-runtime";
import Nav from "./Nav.tsx";

export default function BaseRoutes() {
  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path="/" Component={() => <Home />} />
        <Route path="/task_one" Component={() => <TaskOne />} />
        <Route path="/task_two" Component={() => <TaskTwo />} />
        <Route path="/task_three" Component={() => <TaskThree />} />
      </Routes>
    </Fragment>
  );
}
