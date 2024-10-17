import { Route, Routes } from "react-router-dom";
import TaskOne from "../pages/TaskOne.tsx";
import TaskTwo from "../pages/TaskTwo.tsx";
import TaskThree from "../pages/TaskThree.tsx";
import Home from "../pages/Home.tsx";
import { Fragment } from "react/jsx-runtime";
import UI from "./UI.tsx";

export default function BaseRoutes() {
  // We create routing and we add UI rendering into React Application

  return (
    <Fragment>
      <UI />
      <Routes>
        <Route path="/" Component={() => <Home />} />
        <Route path="/task_one" Component={() => <TaskOne />} />
        <Route path="/task_two" Component={() => <TaskTwo />} />
        <Route path="/task_three" Component={() => <TaskThree />} />
      </Routes>
    </Fragment>
  );
}
