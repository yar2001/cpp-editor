import { CppEditorControl } from './App';
/**
 * Create an editor.
 * @example
 * const editor = new CppEditor(document.getElementById('root'))
 */
export declare class CppEditor implements CppEditorControl {
    private container;
    private control?;
    constructor(container: Element);
    /**
     * Render the editor.
     *
     * Note that this is an asynchronous function, and you should **wait for the promise** before working with the editor.
     * @example
     * await editor.render()
     */
    render(): Promise<void>;
    /**
     * Destroy the editor.
     */
    unmount(): void;
    /**
     * Enable or disable the darkmode.
     * @example
     * editor.setDarkMode(true);
     * setTimeout(() => {
     *    editor.setDarkMode(false);
     * }, 1000);
     */
    setDarkMode(isDarkMode: boolean): void;
    /**
     * Set the editor code.
     * @example
     * editor.setCode("#include <string>");
     */
    setCode(code: string): void;
    /**
     * Get the editor code.
     * @example
     * editor.getCode();
     */
    getCode(): string;
    /**
     * Format code. But this is impossible for C++, on account of its sophisticated syntax. So don't use it!
     * @deprecated
     */
    formatCode(): void;
}
