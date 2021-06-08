/// <reference types="react" />
import { CppEditorControl } from '../App';
interface Props {
    callback(editorControl: CppEditorControl): void;
}
export declare function CppEditor({ callback }: Props): JSX.Element;
export {};
