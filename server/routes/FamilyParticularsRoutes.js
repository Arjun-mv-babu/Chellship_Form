const express = require('express')
const { createFamilyParticulars } = require('../controllers/FamilyParticularsController')

const router = express.Router()

router.post('/create',createFamilyParticulars);



module.exports=router;