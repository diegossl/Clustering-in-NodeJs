const fs   = require('fs')
const jimp = require('jimp')
const path = require('path')

module.exports = {
  async run () {
    const randomNumber = Math.floor(Math.random())
    const fileName = `${randomNumber}-image.jpg`
    const destFilePath = path.resolve(
      __dirname, '..', '..', 'public', 'images', 'dist',
      `${fileName}`
    )

    console.log(`Copying ${fileName}`)

    fs.copyFileSync(path.resolve(
      __dirname, '..', '..', 'public', 'images', 'landscape.jpg'),
      destFilePath
    )

    console.log(`Flipping ${fileName}`)

    const image = await jimp.read(destFilePath)
    image.flip(true, false)

    console.log(`Deleting ${fileName}`)
    
    fs.unlink(destFilePath, (err) => {
      return err ? reject(err) : resolve('Success')
    })
  }
}