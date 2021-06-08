import React from 'react';
import ReactDOM from 'react-dom';
import App, { CppEditorControl } from './App';
const unRenderedError = new Error("The editor hasn't rendered yet.");

/**
 * Create an editor.
 * @example
 * const editor = new CppEditor(document.getElementById('root'))
 */
export class CppEditor implements CppEditorControl {
  private control?: CppEditorControl;

  constructor(private container: Element) {}

  /**
   * Render the editor.
   *
   * Note that this is an asynchronous function, and you should **wait for the promise** before working with the editor.
   * @example
   * await editor.render()
   */
  public async render() {
    await new Promise<void>((resolve) => {
      ReactDOM.render(
        <React.StrictMode>
          <App
            callback={(control) => {
              this.control = control;
              resolve();
            }}
          />
        </React.StrictMode>,
        this.container
      );
    });
  }

  /**
   * Destroy the editor.
   */
  public unmount() {
    if (!this.control) throw unRenderedError;

    ReactDOM.unmountComponentAtNode(this.container);
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
  public setDarkMode(isDarkMode: boolean) {
    if (!this.control) throw unRenderedError;
    this.control.setDarkMode(isDarkMode);
  }

  /**
   * Set the editor code.
   * @example
   * editor.setCode("#include <string>");
   */
  public setCode(code: string) {
    if (!this.control) throw unRenderedError;
    this.control.setCode(code);
  }

  /**
   * Get the editor code.
   * @example
   * editor.getCode();
   */
  public getCode() {
    if (!this.control) throw unRenderedError;
    return this.control.getCode();
  }

  /**
   * Format code. But this is impossible for C++, on account of its sophisticated syntax. So don't use it!
   * @deprecated
   */
  public formatCode() {
    if (!this.control) throw unRenderedError;
    this.control.formatCode();
  }
}

// reportWebVitals();
