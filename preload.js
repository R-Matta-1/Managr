

  const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // Expose only approved Node.js APIs to the renderer process here
  // Example:
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
});
  