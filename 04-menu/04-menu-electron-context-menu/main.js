const {app, BrowserWindow} = require('electron');
const path = require("path");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({backgroundColor: '#00FFFF' /* aqua*/ });
  mainWindow.loadURL(path.join("file://"+__dirname+"/index.html"));
  console.log(process.versions);
});


require('electron-context-menu')({
	prepend: (params, browserWindow) => [{
		label: 'Rainbow',
		// Only show it when right-clicking images
		visible: params.mediaType === 'image'
	}]
});
