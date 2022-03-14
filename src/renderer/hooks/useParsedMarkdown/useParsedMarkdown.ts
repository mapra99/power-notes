import { useState } from 'react';
import { parse } from 'marked';

const useParsedMarkdown = () => {
  const [parsedText, setParsedText] = useState('');

  const parseText = (e) => {
    const newText = parse(e.target.value, { sanitize: true });
    setParsedText(newText);
  };

  return {
    parsedText,
    parseText,
  };
};

export default useParsedMarkdown;
