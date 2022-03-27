const extract = require("extract-zip");
const { ipcRenderer } = require("electron");
const path = require("path");
const os = require('os');
const fs = require("fs");
const promisify = require("util").promisify;
const deleteDir = promisify(fs.rmdir);

async function unzipFile(source) {
  if (!source) return false;

  const destination = path.resolve(path.join(os.tmpdir(), "codeprez"));
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

export default unzipFile;
