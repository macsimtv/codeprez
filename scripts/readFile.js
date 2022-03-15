const fs = require('fs');
const promisify = require('util').promisify
const { ipcRenderer } = require('electron')
import unzipFile from './unzipFile'

async function readFile (path) {
    if (!path) {
        return ipcRenderer.send('download')
    }

    let extension = path.split('.');
    if(extension[extension.length - 1] !== 'codeprez') return false
    try {
       await unzipFile(path)
    } catch (error) {
        return false
    }
    return true;
}

export default readFile;