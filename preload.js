

  const { contextBridge, ipcRenderer } = require('electron');

  const saverButton = document.getElementById("out");
// Attach a click event listener to the button
saverButton.addEventListener("click", SaveTxt(document.getElementById('data')));

contextBridge.exposeInMainWorld('electron', {
  // Expose only approved Node.js APIs to the renderer process here
  // Example:
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
});
  