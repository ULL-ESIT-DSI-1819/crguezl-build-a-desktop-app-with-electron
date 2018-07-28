
Electron doesn't have a built-in context menu.

You're supposed to handle that yourself. But it's both tedious and hard to get right. The module [electron-context-menu](https://github.com/sindresorhus/electron-context-menu)
gives you a nice extensible context menu with items like `Cut`/`Copy`/`Paste` for text, `Save Image` for images, and `Copy Link` for links.

It also adds an `Inspect Element` menu item when in development to quickly view items in the inspector like in Chrome.

You can use this module directly in both the main and renderer process.


## Install

```
$ npm install electron-context-menu
```

*Requires Electron 2.0.0 or later.*

## Usage

```js
const {app, BrowserWindow} = require('electron');

require('electron-context-menu')({
	prepend: (params, browserWindow) => [{
		label: 'Rainbow',
		// Only show it when right-clicking images
		visible: params.mediaType === 'image'
	}]
});

let mainWindow;
app.on('ready', () => {
	mainWindow = new BrowserWindow();
});
```
