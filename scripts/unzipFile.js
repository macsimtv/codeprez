const extract = require("extract-zip");
const { ipcRenderer } = require("electron");
const path = require("path");
const fs = require("fs");
const promisify = require("util").promisify;
const deleteDir = promisify(fs.rmdir);

async function unzipFile(source, destination) {
  if (!source) return false;
  if (!destination) return ipcRenderer.send("unzipFile", source);
  destination = path.resolve(path.join(destination, "codeprez"));
  try {
    await deleteDir(destination, { recursive: true, force: true });
  } catch (error) {
    console.error(error);
  }

  try {
    await extract(path.resolve(source), { dir: destination });
    console.log("Extraction complete");
  } catch (err) {
    console.error(err);
    return false;
  }
  return true;
}

ipcRenderer.on("unzipFileCbk", (event, res) => {
  if (res) {
    unzipFile(res.source, res.destination);
  }
});

export default unzipFile;
