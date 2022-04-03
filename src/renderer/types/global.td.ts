export {};

interface IpcRenderer {
  getFileFromUser: any;
  notifyContentChange: any;
}

interface Electron {
  ipcRenderer: IpcRenderer;
}

declare global {
  interface Window {
    electron: Electron;
  }
}
