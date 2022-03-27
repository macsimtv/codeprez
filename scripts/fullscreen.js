const fs = require('fs');
const { ipcRenderer } = require('electron')

function fullscreen () {
    ipcRenderer.send('fullscreen')
}

export default fullscreen;