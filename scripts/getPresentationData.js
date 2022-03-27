const fs = require('fs');
const promisify = require('util').promisify
const os = require('os');
const { ipcRenderer } = require('electron')

async function getPresentationData () {
    return os.tmpdir();
}

export default getPresentationData;