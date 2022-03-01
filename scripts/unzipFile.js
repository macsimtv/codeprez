const extract = require('extract-zip');
const path = require('path')
const fs = require('fs');
const promisify = require('util').promisify
const deleteDir = promisify(fs.rmdir)

async function unzipFile (source) {
  // source = '/Users/romainbuisson/Documents/cours/B3/dev_dekstop/example-presentation.codeprez'
  if (!source) return false;

  try {
    await deleteDir(path.resolve('./temp'), { recursive: true, force: true })
  } catch (error) {
    console.error(error)
  }

  try {
        await extract(path.resolve(source), { dir: path.resolve('./temp') })
        console.log('Extraction complete')
      } catch (err) {
        console.error(err)
        return false;
      }
  return true;
}

export default unzipFile;