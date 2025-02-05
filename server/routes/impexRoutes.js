const express = require('express')
const { exportData } = require('../controllers/impexController')
const router = express.Router()

router.get('/export/:applicant_id',exportData);

module.exports=router;