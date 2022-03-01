import unzipFile from '../scripts/unzipFile'
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myApi', {
  unzipFile
})
