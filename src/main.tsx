import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BaseRoutes from "./ui/BaseRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <BaseRoutes />
    </BrowserRouter>
  </StrictMode>
);
