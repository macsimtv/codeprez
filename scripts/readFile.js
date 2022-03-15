const fs = require('fs');
const promisify = require('util').promisify
const { ipcRenderer } = require('electron')
import unzipFile from './unzipFile'

function readFile (path) {
    if (!path) return ipcRenderer.send('download')

    let extension = path.split('.');

    if(extension[extension.length - 1] !== 'codeprez') return console.log('Not a codeprez extension');

    unzipFile(path)
}


ipcRenderer.on('downloadCbk', (event, res) => {
    readFile(res)
})

export default readFile;