const { writeFile} = require('fs')
const packageJson = require('./package.json')

const [key, tipsPath] = process.argv[2].split("=")
const tipsObject = require(tipsPath)
packageJson.tips = tipsObject

writeFile('package.json',JSON.stringify(packageJson, null, 2), null, (err)=>{
    if (err) throw err;
    console.log('successfully set tips to package.json')
})


