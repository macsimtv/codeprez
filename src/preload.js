import unzipFile from '../scripts/unzipFile'
import readFile from '../scripts/readFile'
import getPresentationData from '../scripts/getPresentationData'
import fullscreen from '../scripts/fullscreen'
import noFullscreen from '../scripts/noFullscreen'
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myApi', {
  unzipFile,
  readFile,
  getPresentationData,
  fullscreen,
  noFullscreen
})
