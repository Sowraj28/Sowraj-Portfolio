import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/style.css"; // <-- path to style.css inside src/assets

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
