import { app, BrowserWindow, ipcMain } from "electron";

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    // TODO: use IPC to communicate with the renderer

    win.loadFile("index.html");
};

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
