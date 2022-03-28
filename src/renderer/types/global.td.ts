export {};

interface IpcRenderer {
  getFileFromUser: any;
}

interface Electron {
  ipcRenderer: IpcRenderer;
}

declare global {
  interface Window {
    electron: Electron;
  }
}
