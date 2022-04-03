import { useEffect, useState } from 'react';
import ActionsBar from '../../components/ActionsBar';
import MarkdownParser from '../../components/MarkdownParser';

import './Home.scss';

const Home = () => {
  const [content, setContent] = useState('');
  const [fileContent, setFileContent] = useState<string | null>(null);

  const handleFileContent = (newContent: string) => {
    setContent(newContent);
    setFileContent(newContent);
  }

  useEffect(() => {
    window.electron.ipcRenderer.notifyContentChange(content, fileContent);
  }, [content, fileContent])

  return (
    <>
      <ActionsBar
        content={content}
        fileContent={fileContent}
        onFileLoad={handleFileContent}
      />

      <section className="content">
        <MarkdownParser
          content={content}
          onChange={(newContent) => setContent(newContent)}
        />
      </section>
    </>
  );
};

export default Home;
