const shell = require('electron').shell;
const openBtn = document.getElementById('openBtn');
openBtn.addEventListener('click', function (event) {
  shell.showItemInFolder('images');
  shell.openItem('images/gv.jpeg');
  shell.openExternal('http://electron.atom.io');
})
