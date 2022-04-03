import { File } from '../../pages/Home';
import './ActionsBar.scss';

const { electron } = window;

interface ActionsBarProps {
  content: string;
  file?: File;
  onFileLoad: (newFile: File) => void;
}

const ActionsBar = ({ content, file, onFileLoad }: ActionsBarProps) => {
  const handleOpenFileButton = async () => {
    const file = await electron.ipcRenderer.getFileFromUser();
    if (!file) return;

    onFileLoad(file);
  };

  const handleSaveFileButton = async () => {
    const newFile = await electron.ipcRenderer.saveFile(file, content)
    if (!newFile) return;

    onFileLoad(newFile);
  }

  const handleExportHtmlButton = async() => {
    const renderedHtmlEl = document.querySelector('.rendered-html');
    if (!renderedHtmlEl) return;

    await electron.ipcRenderer.exportHtml(renderedHtmlEl.innerHTML);
  }

  return (
    <section className="controls">
      <button type="button" id="new-file">
        New File
      </button>
      <button type="button" id="open-file" onClick={handleOpenFileButton}>
        Open File
      </button>
      <button type="button" id="save-markdown" disabled={content === file?.content} onClick={handleSaveFileButton}>
        Save File
      </button>
      <button type="button" id="revert" disabled={content === file?.content}>
        Revert
      </button>
      <button type="button" id="save-html" disabled={!content} onClick={handleExportHtmlButton}>
        Export as HTML
      </button>
      <button type="button" id="show-file" disabled={!file?.content}>
        Show File
      </button>
      <button type="button" id="open-in-default" disabled={!file?.content}>
        Open in Default Application
      </button>
    </section>
  );
};
export default ActionsBar;
