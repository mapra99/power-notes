import { dialog } from 'electron';
import { readFileSync } from 'fs';

const getFileFromUser = async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile'],
    title: 'Open Power Note Document',
    filters: [
      {
        name: 'Markdown Files',
        extensions: ['md', 'markdown', 'mdown'],
      },
      {
        name: 'Text Files',
        extensions: ['txt', 'text'],
      },
    ],
  });

  const { canceled, filePaths } = result;
  if (canceled || filePaths.length === 0) return null;

  const content = readFileSync(filePaths[0]).toString();
  return {
    content,
    path: filePaths[0]
   };
};

export default getFileFromUser
