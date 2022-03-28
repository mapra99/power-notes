import { useState } from 'react';
import { parse } from 'marked';

const useParsedMarkdown = () => {
  const [parsedText, setParsedText] = useState('');

  const parseText = (text: string) => {
    const newText = parse(text, { sanitize: true });
    setParsedText(newText);
  };

  return {
    parsedText,
    parseText,
  };
};

export default useParsedMarkdown;
