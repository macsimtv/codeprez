const fs = require('fs');
const { ipcRenderer } = require('electron')

function fullscreen () {
    ipcRenderer.send('noFullscreen')
}

export default fullscreen;