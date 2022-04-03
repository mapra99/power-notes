import { dialog, shell } from 'electron';
import { writeFileSync } from 'fs';

const exportHtmlContent = async (content: string) => {
  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'Export as HTML',
    filters: [{ name: 'HTML Document', extensions: ['html'] }]
  })
  if (canceled || !filePath) return;

  writeFileSync(filePath, content)
  shell.openPath(filePath);
  return {
    path: filePath,
    canceled
  }
}

export default exportHtmlContent;
