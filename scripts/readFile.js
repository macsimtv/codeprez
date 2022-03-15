const fs = require('fs');
const promisify = require('util').promisify
const { ipcRenderer } = require('electron')
import unzipFile from './unzipFile'

function readFile (path) {
    if (!path) return ipcRenderer.send('download')
    unzipFile(path)
}


ipcRenderer.on('downloadCbk', (event, res) => {
    readFile(res)
})

export default readFile;