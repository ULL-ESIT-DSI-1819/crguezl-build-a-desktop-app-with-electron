const {remote} = require('electron');
const {app} = remote;
 document.getElementById('version').innerHTML =  app.getVersion();
