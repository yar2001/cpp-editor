import React from 'react';
import { CppEditor } from './editor';

export interface CppEditorControl {
  formatCode(): void;
  setDarkMode(isDarkMode: boolean): void;
  getCode(): string;
  setCode(code: string): void;
}

function App({ callback }: { callback(editorControl: CppEditorControl): void }) {
  return <CppEditor callback={callback} />;
}

export default App;
