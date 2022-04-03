export {};

interface IpcRenderer {
  getFileFromUser: any;
  saveFile: any;
  notifyContentChange: any;
  exportHtml: any;
  on: any;
  once: any;
}

interface Electron {
  ipcRenderer: IpcRenderer;
}

declare global {
  interface Window {
    electron: Electron;
  }
}
