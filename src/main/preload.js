const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    getFileFromUser() {
      return ipcRenderer.invoke('ipc-open-file');
    },
    saveFile(file, content) {
      return ipcRenderer.invoke('ipc-save-file', file, content);
    },
    notifyContentChange(file, content) {
      return ipcRenderer.invoke('ipc-content-changed', file, content);
    },
    exportHtml(content) {
      return ipcRenderer.invoke('ipc-export-html', content);
    },
    on(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
});
