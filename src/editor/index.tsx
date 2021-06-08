import React, { useCallback, useEffect, useRef, useState } from 'react';

import * as monaco from 'monaco-editor';
import { CppEditorControl } from '../App';

// @ts-ignore
// eslint-disable-next-line no-restricted-globals
self.MonacoEnvironment = {
  getWorkerUrl: function (_moduleId: any, label: string) {
    if (label === 'json') {
      return './json.worker.bundle.js';
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return './css.worker.bundle.js';
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return './html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.bundle.js';
    }
    return './editor.worker.bundle.js';
  }
};

interface Props {
  callback(editorControl: CppEditorControl): void;
}

const unreadyError = new Error('The CppEditor is not ready.');

// eslint-disable-next-line no-empty-pattern
export function CppEditor({ callback }: Props) {
  const divEl = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor>();

  const formatCode = useCallback(() => {
    if (!editor) throw unreadyError;
    editor.getAction('editor.action.formatDocument').run();
  }, [editor]);

  const setDarkMode = useCallback(
    (isDarkMode: boolean) => {
      if (!editor) throw unreadyError;
      monaco.editor.setTheme(isDarkMode ? 'vs-dark' : 'vs');
    },
    [editor]
  );

  const getCode = useCallback(() => {
    if (!editor) throw unreadyError;
    return editor.getValue();
  }, [editor]);

  const setCode = useCallback(
    (code: string) => {
      if (!editor) throw unreadyError;
      editor.setValue(code);
    },
    [editor]
  );

  useEffect(() => {
    if (editor) {
      callback({ formatCode, setDarkMode, getCode, setCode });
    }
  }, [callback, editor, formatCode, getCode, setCode, setDarkMode]);

  useEffect(() => {
    let editor: monaco.editor.IStandaloneCodeEditor;
    if (divEl.current) {
      editor = monaco.editor.create(divEl.current, {
        value: [''].join('\n'),
        language: 'cpp',
        automaticLayout: true
      });
      setEditor(editor);
    }
    return () => {
      editor.dispose();
    };
  }, []);
  return <div id="cppEditorElement" style={{ width: '100%', height: '100%' }} ref={divEl}></div>;
}
