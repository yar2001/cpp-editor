"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const editor_1 = require("./editor");
function App({ callback }) {
    return react_1.default.createElement(editor_1.CppEditor, { callback: callback });
}
exports.default = App;
