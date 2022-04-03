import { dialog } from 'electron'
import { writeFileSync } from 'fs'

const writeFileFromUser = async (file, content) => {
  let path = file?.path

  if (!path) {
    const { filePath, canceled } = await dialog.showSaveDialog({
      title: 'Save Document',
      filters: [{ name: 'Markdown Document', extensions: ['md'] }]
    })
    if (canceled || !filePath) return;

    path = filePath;
  }

  writeFileSync(path, content)
  return {
    path,
    content
  }
}

export default writeFileFromUser
