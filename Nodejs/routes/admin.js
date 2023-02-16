
const path = require('path')
const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'))})

router.post('/add-product',(req,res,next)=>{
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj);
    res.redirect('/')
})

module.exports =router