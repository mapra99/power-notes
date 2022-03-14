import './ActionsBar.scss';

const ActionsBar = () => (
  <section className="controls">
    <button type="button" id="new-file">
      New File
    </button>
    <button type="button" id="open-file">
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

export default ActionsBar;
