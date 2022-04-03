import { useEffect, useState, useRef } from 'react';
import MarkdownParser from '../../components/MarkdownParser';

import './Home.scss';

export interface File {
  content: string;
  path: string
}

const Home = () => {
  const [content, setContent] = useState('');
  const contentRef = useRef<string>();
  contentRef.current = content

  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<File | null>();
  fileRef.current = file;

  const handleNewFile = () => {
    setContent('');
    setFile(null);
  }

  const handleFileLoad = (newFile: File) => {
    if (!newFile) return;

    setContent(newFile.content);
    setFile(newFile);
  }

  const handleFileSave = async () => {
    const newFile = await window.electron.ipcRenderer.saveFile(fileRef.current, contentRef.current)
    if (!newFile) return;

    handleFileLoad(newFile);
  }

  const handleExportHtml= async() => {
    const renderedHtmlEl = document.querySelector('.rendered-html');
    if (!renderedHtmlEl) return;

    await window.electron.ipcRenderer.exportHtml(renderedHtmlEl.innerHTML);
  }

  useEffect(() => {
    window.electron.ipcRenderer.on('ipc-new-file', handleNewFile)
    window.electron.ipcRenderer.on('ipc-file-opened', handleFileLoad)
    window.electron.ipcRenderer.on('ipc-file-save-attempt', handleFileSave)
    window.electron.ipcRenderer.on('ipc-html-export-attempt', handleExportHtml)
  }, [])

  useEffect(() => {
    window.electron.ipcRenderer.notifyContentChange(file, content);
  }, [content, file])

  return (
    <section className="content">
      <MarkdownParser
        content={content}
        onChange={(newContent: string) => setContent(newContent)}
      />
    </section>
  );
};

export default Home;
