const {remote} = require('electron');
const {app} = remote;
document.getElementById('version').innerHTML =  app.getVersion();
// document.getElementById('version').innerHTML = process.versions.electron;
console.log(process.versions);
/*
The process.versions property returns an object listing the version strings of
Node.js and its dependencies.

See https://github.com/electron/electron/blob/master/docs/api/process.md
process.versions.chrome
A String representing Chrome's version string.

process.versions.electron
A String representing Electron's version string.
*/
