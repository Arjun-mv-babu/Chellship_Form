const express = require('express');
const { createApplicants } = require('../controllers/ApplicantsController');
const { uploadMixed } = require('../utils/multerConfig');

const router = express.Router();

router.post('/create',uploadMixed([{ name: 'photo', maxCount: 1 },{ name: 'signature', maxCount: 1 },]),createApplicants);
module.exports = router;
