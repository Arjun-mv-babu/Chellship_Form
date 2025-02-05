const express = require('express')
const { createMedical } = require('../controllers/MedicalController')

const router = express.Router()

router.post('/create',createMedical);



module.exports=router;