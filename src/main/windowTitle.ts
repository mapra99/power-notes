interface ConstructorParams {
  fileName?: string;
  unsavedChanges?: boolean;
}

class WindowTitle {
  base: string;
  unsavedChanges: boolean;
  fileName?: string;

  constructor({ fileName, unsavedChanges }: ConstructorParams) {
    this.base = 'Power Notes';
    this.fileName = fileName;
    this.unsavedChanges = unsavedChanges || false;
  }

  generate() {
    if (this.fileName) {
      return `${this.fileName}${this.unsavedChanges ? ' - Unsaved' : ''} | ${this.base}`;
    } else {
      return this.base;
    }
  }
}

export default WindowTitle
