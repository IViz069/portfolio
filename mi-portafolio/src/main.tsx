import * as React from "react";
import { createRoot } from "react-dom/client"; // 🔹 Usa destructuración en la importación
import App from "./App";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento #root en el HTML.");
}
