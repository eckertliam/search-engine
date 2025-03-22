"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const createWindow = () => {
    const win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
    });
    // use ipc to signal the renderer to start up
    electron_1.ipcMain.on("start-up", () => {
        win.loadFile("index.html");
    });
    win.loadFile("index.html");
};
electron_1.app.whenReady().then(() => {
    createWindow();
});
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        electron_1.app.quit();
});
