const { app, BrowserWindow, ipcMain } = require('electron');
var fs = require('fs');
// Keep a global reference to the window object to prevent garbage collection
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height:700,
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
  if(!err) {console.log("File written");} else{console.log(err)}
});

ipcMain.on('saveTxt', (event, txtVl) => {
fs.writeFile('\\saveData\\jobData.txt')
});

// Other app lifecycle events and IPC handler