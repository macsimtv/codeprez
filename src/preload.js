import unzipFile from '../scripts/unzipFile'
import readFile from '../scripts/readFile'
import getPresentationData from '../scripts/getPresentationData'
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myApi', {
  unzipFile,
  readFile,
  getPresentationData
})
