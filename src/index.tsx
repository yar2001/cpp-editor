import React from 'react';
import ReactDOM from 'react-dom';
import App, { CppEditorControl } from './App';
const unRenderedError = new Error("The editor hasn't rendered yet.");
export class CppEditor implements CppEditorControl {
  private control?: CppEditorControl;

  constructor(private container: Element) {}

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

  public unmount() {
    if (!this.control) throw unRenderedError;

    ReactDOM.unmountComponentAtNode(this.container);
    this.control = undefined;
  }

  public setDarkMode(isDarkMode: boolean) {
    if (!this.control) throw unRenderedError;
    this.control.setDarkMode(isDarkMode);
  }

  public setCode(code: string) {
    if (!this.control) throw unRenderedError;
    this.control.setCode(code);
  }

  public getCode() {
    if (!this.control) throw unRenderedError;
    return this.control.getCode();
  }

  public formatCode() {
    if (!this.control) throw unRenderedError;
    this.control.formatCode();
  }
}

// reportWebVitals();
