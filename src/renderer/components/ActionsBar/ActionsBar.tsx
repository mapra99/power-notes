import './ActionsBar.scss';

const { electron } = window;

const ActionsBar = ({ content, onFileLoad }) => {
  const handleOpenFileButton = async () => {
    const fileContent = await electron.ipcRenderer.getFileFromUser();
    if (!fileContent) return;

    onFileLoad(fileContent);
  };

  return (
    <section className="controls">
      <button type="button" id="new-file">
        New File
      </button>
      <button type="button" id="open-file" onClick={handleOpenFileButton}>
        Open File
      </button>
      <button type="button" id="save-markdown" disabled>
        Save File
      </button>
      <button type="button" id="revert" disabled>
        Revert
      </button>
      <button type="button" id="save-html">
        Save HTML
      </button>
      <button type="button" id="show-file" disabled>
        Show File
      </button>
      <button type="button" id="open-in-default" disabled>
        Open in Default Application
      </button>
    </section>
  );
};
export default ActionsBar;
