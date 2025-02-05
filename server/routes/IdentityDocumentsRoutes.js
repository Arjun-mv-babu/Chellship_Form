const express = require('express')
const { createIdentityDocuments } = require('../controllers/IdentityDocumentsController')

const router = express.Router()

router.post('/create',createIdentityDocuments);



module.exports=router;