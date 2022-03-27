const fsPromises = require('fs').promises
const promisify = require('util').promisify
const os = require('os');
const path = require("path");
const { ipcRenderer } = require('electron')

async function getPresentationData () {
    const accessPath = path.join(os.tmpdir(), "codeprez");
    
    let template = {}
    template.config = await fsPromises.readFile(path.join(accessPath, "config.json"), "utf8");
    template.style = await fsPromises.readFile(path.join(accessPath, "style.css"), "utf8");
    template.presentation = await fsPromises.readFile(path.join(accessPath, "presentation.md"), "utf8");
    template.env = await fsPromises.readFile(path.join(path.join(accessPath, "env"), "index.js"), "utf8");
    const assets = await fsPromises.readdir(path.join(accessPath, "assets"), "utf8");
    template.assets = {}
    template.assets.js = []
    template.assets.css = []
    template.assets.images = []
    for (const item of assets) {
        if (item.endsWith(".js")) {
            template.assets.js.push(await fsPromises.readFile(path.join(accessPath, "assets", item), "utf8"))
        }else if(item.endsWith(".css")){
            template.assets.css.push(await fsPromises.readFile(path.join(accessPath, "assets", item), "utf8"))
        }else {
            template.assets.images.push(path.join(accessPath, "assets", item))
        }    
    }

    return template
}

export default getPresentationData;