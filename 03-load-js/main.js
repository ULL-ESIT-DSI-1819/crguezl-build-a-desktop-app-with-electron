const {app, BrowserWindow} = require("electron");
const path = require("path");

let win;

app.on("ready", () => {
  win = new BrowserWindow({backgroundColor: '#00FFFF' /* aqua*/ });
  win.loadURL(path.join("file://"+__dirname+"/index.html"));
  console.log(process.versions);
});
