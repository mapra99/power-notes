const { contextBridge, ipcRenderer } = require('electron');

const VALID_INCOMING_CHANNELS = [
  'ipc-file-opened',
  'ipc-new-file',
  'ipc-file-save-attempt',
  'ipc-html-export-attempt'
]

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
      if (VALID_INCOMING_CHANNELS.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      if (VALID_INCOMING_CHANNELS.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
});
