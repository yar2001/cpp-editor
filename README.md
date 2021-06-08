# Getting Started with Cpp Editor

A REALLY SIMPLE package which packaging monaco-editor and React.

This project was created by [yar2001](https://www.yar2001.com).

## How to use it?

### Create a new editor and render it

```javascript
import {
    CppEditor
} from "cpp-editor"

const renderEditor = async function() {
    let editor = new CppEditor(document.getElementId("root"));
    await editor.render();
}
renderEditor();
```

### Get and set code

```javascript
editor.setCode("#include <string>");
console.log(editor.getCode());
```

### Enable and disable darkmode

```javascript
editor.setDarkMode(true);
setTimeout(() => {
    editor.setDarkMode(false);
}, 1000);
```

### Destroy the editor

```javascript
editor.unmount();
```
