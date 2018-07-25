const {app, BrowserWindow} = require("electron");
const path = require("path");

let mainWindow;


app.on("ready", () => {
  mainWindow = new BrowserWindow({
    show: false
  });
  mainWindow.loadURL(path.join("file://",__dirname,"index.html")); // Don't use + to concat
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
  console.log(app.getVersion()); // 2.0.5
  console.log(process.versions);
  /*
      {
        http_parser: '2.7.0',
        node: '8.9.3',
        v8: '6.1.534.41',
        uv: '1.15.0',
        zlib: '1.2.11',
        ares: '1.10.1-DEV',
        modules: '57',
        nghttp2: '1.25.0',
        openssl: '1.0.2n',
        electron: '2.0.5',
        chrome: '61.0.3163.100'
      }
  */
});
