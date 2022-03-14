import useParsedMarkdown from '../../hooks/useParsedMarkdown';

import './MarkdownParser.scss';

const MarkdownParser = () => {
  const { parsedText, parseText } = useParsedMarkdown();

  return (
    <>
      <label htmlFor="markdown" hidden>
        Markdown Content
      </label>
      <textarea className="raw-markdown" id="markdown" onChange={parseText} />
      <div
        dangerouslySetInnerHTML={{ __html: parsedText }}
        className="rendered-html"
        id="html"
      />
    </>
  );
};

export default MarkdownParser;
