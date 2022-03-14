import unzipFile from '../scripts/unzipFile'
import readFile from '../scripts/readFile'
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myApi', {
  unzipFile,
  readFile
})
