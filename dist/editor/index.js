"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CppEditor = void 0;
const react_1 = __importStar(require("react"));
const monaco = __importStar(require("monaco-editor"));
// @ts-ignore
// eslint-disable-next-line no-restricted-globals
self.MonacoEnvironment = {
    getWorkerUrl: function (_moduleId, label) {
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
const unreadyError = new Error('The CppEditor is not ready.');
// eslint-disable-next-line no-empty-pattern
function CppEditor({ callback }) {
    const divEl = react_1.useRef(null);
    const [editor, setEditor] = react_1.useState();
    const formatCode = react_1.useCallback(() => {
        if (!editor)
            throw unreadyError;
        editor.getAction('editor.action.formatDocument').run();
    }, [editor]);
    const setDarkMode = react_1.useCallback((isDarkMode) => {
        if (!editor)
            throw unreadyError;
        monaco.editor.setTheme(isDarkMode ? 'vs-dark' : 'vs');
    }, [editor]);
    const getCode = react_1.useCallback(() => {
        if (!editor)
            throw unreadyError;
        return editor.getValue();
    }, [editor]);
    const setCode = react_1.useCallback((code) => {
        if (!editor)
            throw unreadyError;
        editor.setValue(code);
    }, [editor]);
    react_1.useEffect(() => {
        if (editor) {
            callback({ formatCode, setDarkMode, getCode, setCode });
        }
    }, [callback, editor, formatCode, getCode, setCode, setDarkMode]);
    react_1.useEffect(() => {
        let editor;
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
    return react_1.default.createElement("div", { id: "cppEditorElement", style: { width: '100%', height: '100%' }, ref: divEl });
}
exports.CppEditor = CppEditor;
