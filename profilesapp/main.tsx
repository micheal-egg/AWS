import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // or "./App.tsx" depending on your setup
import "./index.css";   // optional if you have it

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
