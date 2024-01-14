const { app, BrowserWindow, ipcMain } = require('electron');

// Keep a global reference to the window object to prevent garbage collection
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      devTools: false
  }
 
  });
  mainWindow.loadFile('index.html'); // Load your app's main HTML file

  mainWindow.webContents.openDevTools(); // Optional: Open developer tools
}

app.on('ready', createWindow);

// Handle IPC messages from the renderer process
ipcMain.on('open-external', (event, url) => {
  require('electron').shell.openExternal(url);
});

// Other app lifecycle events and IPC handler