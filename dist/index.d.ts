import { CppEditorControl } from './App';
export declare class CppEditor implements CppEditorControl {
    private container;
    private control?;
    constructor(container: Element);
    render(): Promise<void>;
    unmount(): void;
    setDarkMode(isDarkMode: boolean): void;
    setCode(code: string): void;
    getCode(): string;
    formatCode(): void;
}
