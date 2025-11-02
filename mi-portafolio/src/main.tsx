import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { ThemeProvider } from "./context/ThemeContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento #root en el HTML.");
}
