const path = require('path')
const rootDir = require('../util/path')

exports.contactusPage = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))}