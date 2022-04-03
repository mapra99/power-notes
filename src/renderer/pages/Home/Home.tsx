import { useEffect, useState } from 'react';
import ActionsBar from '../../components/ActionsBar';
import MarkdownParser from '../../components/MarkdownParser';

import './Home.scss';

export interface File {
  content: string;
  path: string
}

const Home = () => {
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileLoad = (newFile: File) => {
    setContent(newFile.content);
    setFile(newFile);
  }

  useEffect(() => {
    window.electron.ipcRenderer.notifyContentChange(file, content);
  }, [content, file])

  return (
    <>
      <ActionsBar
        content={content}
        file={file}
        onFileLoad={handleFileLoad}
      />

      <section className="content">
        <MarkdownParser
          content={content}
          onChange={(newContent: string) => setContent(newContent)}
        />
      </section>
    </>
  );
};

export default Home;
