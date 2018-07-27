const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
const debug = /--debug/.test(process.argv[2])

let mainWindow;
const { setMainMenu } = require('./main-menu');

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false
  });
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
  //mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    // Launch fullscreen with DevTools open, usage: npm run debug
    if (debug) {
      mainWindow.webContents.openDevTools();
      mainWindow.maximize();
      require('devtron').install();
    }
    console.log('start work main pid = ', process.pid);

    // Register a 'CommandOrControl+X' shortcut listener.
    const ret = globalShortcut.register('CommandOrControl+X', () => {
      console.log('CommandOrControl+X is pressed')
    })

     if (!ret) {
       console.log('registration failed')
     }

     // Check whether a shortcut is registered.
     console.log(globalShortcut.isRegistered('CommandOrControl+X'))
  });

  app.on('will-quit', () => {
    // Unregister a shortcut.
    globalShortcut.unregister('CommandOrControl+X')

    // Unregister all shortcuts.
    globalShortcut.unregisterAll()
  })

  setMainMenu();
});
