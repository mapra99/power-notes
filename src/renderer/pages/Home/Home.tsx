import { useState } from 'react';
import ActionsBar from '../../components/ActionsBar';
import MarkdownParser from '../../components/MarkdownParser';

import './Home.scss';

const Home = () => {
  const [content, setContent] = useState('');

  return (
    <>
      <ActionsBar
        content={content}
        onFileLoad={(fileContent) => setContent(fileContent)}
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
