// Next.js API route support: https://nextjs.org/docs/api-routes/introduc
import {
  readJWKFile,
  arDriveFactory,
  wrapFileOrFolder,
  EID,
} from 'ardrive-core-js'
const fs = require('fs')
const multipart = require('parse-multipart-data')

function getMatching(string, regex) {
  // Helper function when using non-matching groups
  const matches = string.match(regex)
  if (!matches || matches.length < 2) {
    return null
  }
  return matches[1]
}

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  fs.writeFileSync(filename, Buffer.from(u8arr))
}
export default function handler(req, res) {
  dataURLtoFile(req.body.file, req.body.filename)

  // Read wallet from file
  const myWallet = readJWKFile('./wallet.json')

  // Construct ArDrive class
  const arDrive = arDriveFactory({ wallet: myWallet })

  const wrappedEntity = wrapFileOrFolder(`./${req.body.filename}`)
  const destFolderId = EID('77fac565-a8c0-48e0-b64f-e1c0604372d3')

  // Upload a public file to destination folder
  arDrive
    .uploadAllEntities({
      entitiesToUpload: [{ wrappedEntity, destFolderId }],
    })
    .then(result => res.status(200).json({ result: result }))
    .catch(error => res.status(200).json({ error: error }))
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb', // Set desired value here
    },
  },
}
