const path = require('path')

const express = require('express')

const contactusController = require('../controllers/contact')

const router = express.Router()

router.get('/contactus',contactusController.contactusPage)

module.exports =router









