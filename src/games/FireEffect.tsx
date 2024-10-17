import { useApp } from "@pixi/react";
import FXComponent from "../components/FXComponent";
import { Application, ICanvas } from "pixi.js";

export default function FireEffect() {
  const app = useApp();
  (
    window as unknown as { __PIXI_DEVTOOLS__: { app: Application<ICanvas> } }
  ).__PIXI_DEVTOOLS__ = {
    app: app,
  };
  return <FXComponent />;
}
