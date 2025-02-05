const db = require('../models/index')
const EducationBackground = db.education_background;


const createEducationBackground = async (req, res) => {
  try{

      data = req.body;
      
      const education_background = await EducationBackground.create(data);
      
      res.status(200).json({
          message: "EducationBackground created successfully",
          sussess: true,
          data: education_background
      });

  }
  catch(error){
      console.log(error);
      console.log(data);
  }
}

module.exports = { createEducationBackground };