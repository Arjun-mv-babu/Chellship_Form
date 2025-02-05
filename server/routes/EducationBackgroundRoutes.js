const express = require('express')
const { createEducationBackground } = require('../controllers/EducationBackgroundController')

const router = express.Router()

router.post('/create',createEducationBackground);



module.exports=router;