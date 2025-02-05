const express = require('express')
const { createGeneral } = require('../controllers/GeneralController')

const router = express.Router()

router.post('/create',createGeneral);



module.exports=router;