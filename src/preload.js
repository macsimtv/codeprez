/*const extract = require('extract-zip');*/
//const {homedir} = require('os');
//import {homedir} from 'os'

const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myApi', {
  unzipFile: (path = '/Users/romainbuisson/Documents/cours/B3/dev_dekstop/example-presentation.codeprez') => {
    console.log(path)
    /*try {
        await extract(source, { dir: '' })
        console.log('Extraction complete')
      } catch (err) {
        console.error(err)
      }*/
  }
})