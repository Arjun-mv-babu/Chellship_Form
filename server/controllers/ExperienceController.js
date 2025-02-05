const db = require('../models/index')
const Experience = db.experience;

const createExperience = async (req, res) => {
    try{
  
        data = req.body;
        
        const experience = await Experience.create(data);
        
        res.status(200).json({
            message: "Experience created successfully",
            sussess: true,
            data: experience
        });
  
    }
    catch(error){
        console.log(error);
        console.log(data);
        
    }
  }

module.exports = { createExperience }