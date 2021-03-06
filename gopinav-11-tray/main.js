const path = require('path');
const url = require('url');
const { app, Tray, Menu, BrowserWindow, globalShortcut } = require("electron");

const debug = /--debug/.test(process.argv[2])

//const iconPath = path.join(__dirname, 'ytlogo.jpg')
const iconPath = path.join(__dirname, 'ytlogo.png');
let tray = null;
let win = null;

let devTools = function() {
  win = new BrowserWindow({ width:800, height: 600, show: false});
  win.loadFile(path.join(__dirname, "index.html"));
  // Launch fullscreen with DevTools open, usage: npm run debug
  if (debug) {
    win.webContents.openDevTools()
    //win.maximize()
    require('devtron').install()
  }
  win.show();
  win.toggleDevTools();
  // win.webContents.openDevTools()
  win.maximize()
  require('devtron').install()
};

app.on('ready', function(){

  tray = new Tray(iconPath)
  let template = [
    {
      label: 'Audio',
      icon: path.join(__dirname,'icon.png'),
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
      icon: path.join(__dirname,'addicon.png'),
      submenu: [
        {
          label: '1280x720',
          type: 'radio',
          checked: true,
        },
        {
          label: '1920x1080',
          type: 'radio',
        }
      ]
    },
    {
      label: 'Toggle DevTools',
      //accelerator: 'Alt+Command+I', // not working!
      click: devTools
    },
    {
      label: "Quit",
      accelerator: "CmdOrCtrl+Q", // not working
      selector: "terminate:"
    }
  ];
  globalShortcut.register('Alt+Cmd+I', devTools )


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

app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})
