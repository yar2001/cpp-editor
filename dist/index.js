"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CppEditor = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const App_1 = __importDefault(require("./App"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const unRenderedError = new Error("The editor hasn't rendered yet.");
class CppEditor {
    constructor(container) {
        this.container = container;
    }
    async render() {
        await new Promise((resolve) => {
            react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
                react_1.default.createElement(App_1.default, { callback: (control) => {
                        this.control = control;
                        resolve();
                    } })), this.container);
        });
    }
    unmount() {
        if (!this.control)
            throw unRenderedError;
        react_dom_1.default.unmountComponentAtNode(this.container);
        this.control = undefined;
    }
    setDarkMode(isDarkMode) {
        if (!this.control)
            throw unRenderedError;
        this.control.setDarkMode(isDarkMode);
    }
    setCode(code) {
        if (!this.control)
            throw unRenderedError;
        this.control.setCode(code);
    }
    getCode() {
        if (!this.control)
            throw unRenderedError;
        return this.control.getCode();
    }
    formatCode() {
        if (!this.control)
            throw unRenderedError;
        this.control.formatCode();
    }
}
exports.CppEditor = CppEditor;
//@ts-expect-error
// eslint-disable-next-line no-restricted-globals
self.CppEditor = CppEditor;
reportWebVitals_1.default();
