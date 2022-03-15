const fs = require('fs');
const promisify = require('util').promisify
const os = require('os');
const { ipcRenderer } = require('electron')

async function getPresentationData () {
    console.log(os.tmpdir());
}

export default getPresentationData;