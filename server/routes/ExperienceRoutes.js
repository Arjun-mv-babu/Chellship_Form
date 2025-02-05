const express = require('express')
const { createExperience } = require('../controllers/ExperienceController')

const router = express.Router()

router.post('/create',createExperience);


module.exports = router;