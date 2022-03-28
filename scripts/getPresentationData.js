const fsPromises = require('fs').promises
const os = require('os');
const path = require("path");

async function getPresentationData () {
    const accessPath = path.join(os.tmpdir(), "codeprez");
    
    let template = {}
    template.config = await fsPromises.readFile(path.join(accessPath, "config.json"), "utf8");
    template.style = await fsPromises.readFile(path.join(accessPath, "style.css"), "utf8");
    const assets = await fsPromises.readdir(path.join(accessPath, "assets"), "utf8");
    const envs = await fsPromises.readdir(path.join(accessPath, "env"), "utf8");
    template.envs = []
    for (const env of envs) {
        template.envs.push({accessPath: 'node '+ env, code: await fsPromises.readFile(path.join(path.join(accessPath, "env"), env), "utf8")})
    }
    template.assets = {}
    template.assets.js = []
    template.assets.css = []
    template.assets.images = []
    for (const item of assets) {
        if (item.endsWith(".js")) {
            template.assets.js.push({accessPath: './assets/' + item, code: await fsPromises.readFile(path.join(accessPath, "assets", item), "utf8")})
        }else if(item.endsWith(".css")){
            template.assets.css.push(await fsPromises.readFile(path.join(accessPath, "assets", item), "utf8"))
        }else {
            template.assets.images.push({accessPath: './assets/' + item, img: await fsPromises.readFile(path.join(accessPath, "assets", item), "base64")})
        }    
    }
    template.presentation = await fsPromises.readFile(path.join(accessPath, "presentation.md"), "utf8");
    for (const image of template.assets.images) {
        template.presentation = template.presentation.replace(image.accessPath, ('data:image/jpeg;base64,' + image.img))
    }
    for (let line of template.presentation.split('\n')) {
        for (const script of template.assets.js) {
            if (line.includes(script.accessPath)){
                if (line.includes('#')){
                   let startEnd = line.split('#')[1].replace(')', '')
                   const start = startEnd.split('-')[0]
                   const end = startEnd.split('-')[1]
                   let code = ""
                   for (const key in script.code.split('\n')) {
                       if ((key) >= (start-1) && key <= (end-1)){
                           code+= script.code.split('\n')[key] + '\n'
                       }
                   }

                   template.presentation = template.presentation.replace(line, ('```js\n' + code + '```'))
                }
                
            }
        }
    }

    template.presentation = template.presentation.split("\n---\n");
    return template
}

export default getPresentationData;