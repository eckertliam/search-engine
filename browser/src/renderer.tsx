import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

// Wait for DOM to be ready before rendering
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  
  // Check if root element exists
  if (!rootElement) {
    console.error("Root element not found");
    return;
  }
  
  // Create root and render React app
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}); 