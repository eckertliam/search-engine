"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
const react_1 = __importDefault(require("react"));
const App_1 = __importDefault(require("./App"));
// Wait for DOM to be ready before rendering
document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("root");
    // Check if root element exists
    if (!rootElement) {
        console.error("Root element not found");
        return;
    }
    // Create root and render React app
    client_1.default.createRoot(rootElement).render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }));
});
