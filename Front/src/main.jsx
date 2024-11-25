import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DineContextProvider } from "./context/DineContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DineContextProvider>
        <App />
      </DineContextProvider>
    </BrowserRouter>
  </StrictMode>
);
