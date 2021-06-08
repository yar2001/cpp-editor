"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CppEditor = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const App_1 = __importDefault(require("./App"));
const unRenderedError = new Error("The editor hasn't rendered yet.");
/**
 * Create an editor.
 * @example
 * const editor = new CppEditor(document.getElementById('root'))
 */
class CppEditor {
    constructor(container) {
        this.container = container;
    }
    /**
     * Render the editor.
     *
     * Note that this is an asynchronous function, and you should **wait for the promise** before working with the editor.
     * @example
     * await editor.render()
     */
    async render() {
        await new Promise((resolve) => {
            react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
                react_1.default.createElement(App_1.default, { callback: (control) => {
                        this.control = control;
                        resolve();
                    } })), this.container);
        });
    }
    /**
     * Destroy the editor.
     */
    unmount() {
        if (!this.control)
            throw unRenderedError;
        react_dom_1.default.unmountComponentAtNode(this.container);
        this.control = undefined;
    }
    /**
     * Enable or disable the darkmode.
     * @example
     * editor.setDarkMode(true);
     * setTimeout(() => {
     *    editor.setDarkMode(false);
     * }, 1000);
     */
    setDarkMode(isDarkMode) {
        if (!this.control)
            throw unRenderedError;
        this.control.setDarkMode(isDarkMode);
    }
    /**
     * Set the editor code.
     * @example
     * editor.setCode("#include <string>");
     */
    setCode(code) {
        if (!this.control)
            throw unRenderedError;
        this.control.setCode(code);
    }
    /**
     * Get the editor code.
     * @example
     * editor.getCode();
     */
    getCode() {
        if (!this.control)
            throw unRenderedError;
        return this.control.getCode();
    }
    /**
     * Format code. But this is impossible for C++, on account of its sophisticated syntax. So don't use it!
     * @deprecated
     */
    formatCode() {
        if (!this.control)
            throw unRenderedError;
        this.control.formatCode();
    }
}
exports.CppEditor = CppEditor;
// reportWebVitals();
