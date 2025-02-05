const express = require('express')
const { createCertificate } = require('../controllers/CertificateController')

const router = express.Router()

router.post('/create',createCertificate);



module.exports=router;