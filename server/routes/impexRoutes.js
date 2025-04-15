const express = require('express')
const { exportData, downloadData } = require('../controllers/impexController')
const router = express.Router()

router.get('/export/:applicant_id',exportData);
router.get('/download/:applicant_id',downloadData);

module.exports=router;