const fs = require('fs');
const promisify = require('util').promisify
const { ipcRenderer } = require('electron')

async function readFile () {
  console.log('rrr')
  ipcRenderer.send('toto', 'ping')
}

export default readFile;