/// <reference types="react" />
export interface CppEditorControl {
    formatCode(): void;
    setDarkMode(isDarkMode: boolean): void;
    getCode(): string;
    setCode(code: string): void;
}
declare function App({ callback }: {
    callback(editorControl: CppEditorControl): void;
}): JSX.Element;
export default App;
