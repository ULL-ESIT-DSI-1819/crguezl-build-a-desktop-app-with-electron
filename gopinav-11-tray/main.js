const path = require('path');
const url = require('url');
const { app, Tray, Menu, BrowserWindow } = require("electron");

const debug = /--debug/.test(process.argv[2])

//const iconPath = path.join(__dirname, 'ytlogo.jpg')
const iconPath = path.join(__dirname, 'ytlogo.png');
let tray = null;
let win = null;

app.on('ready', function(){
  win = new BrowserWindow({ width:800, height: 600, show: false});
  win.loadFile(path.join(__dirname, "index.html"));
  // Launch fullscreen with DevTools open, usage: npm run debug
  if (debug) {
    win.webContents.openDevTools()
    //win.maximize()
    require('devtron').install()
  }

  tray = new Tray(iconPath)
  let template = [
    {
      label: 'Audio',
      submenu: [
        {
          label: 'Low',
          type: 'radio',
          checked: true
        },
        {
          label: 'High',
          type: 'radio',
        }
      ]
    },
    {
      label: 'Video',
      submenu: [
        {
          label: '1280x720',
          type: 'radio',
          checked: true
        },
        {
          label: '1920x1080',
          type: 'radio',
        }
      ]
    }
  ]

  const contextMenu = Menu.buildFromTemplate(template)
  tray.setContextMenu(contextMenu)
  tray.setToolTip('Tray App')
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
  console.log("window-all-closed!!");
});

app.on('activate', () => {
  if (win === null) createWindow();
  console.log("activate!!");
});
