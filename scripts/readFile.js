const fs = require('fs');
const promisify = require('util').promisify
const { ipcRenderer } = require('electron')

function readFile (path) {
    if (!path) return ipcRenderer.send('download')
    console.log(path)
}


ipcRenderer.on('downloadCbk', (event, res) => {
    readFile(res)
})

export default readFile;