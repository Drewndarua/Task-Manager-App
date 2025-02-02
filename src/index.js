import React from "react";
import "./index.css";
import App from "./Component/App";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
