import { useEffect } from 'react';
import useParsedMarkdown from '../../hooks/useParsedMarkdown';

import './MarkdownParser.scss';

const MarkdownParser = ({ content, onChange }) => {
  const { parsedText, parseText } = useParsedMarkdown();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  useEffect(() => {
    parseText(content);
  }, [content]);

  return (
    <>
      <label htmlFor="markdown" hidden>
        Markdown Content
      </label>
      <textarea
        className="raw-markdown"
        id="markdown"
        onChange={handleChange}
        value={content}
      />
      <div
        dangerouslySetInnerHTML={{ __html: parsedText }}
        className="rendered-html"
        id="html"
      />
    </>
  );
};

export default MarkdownParser;
