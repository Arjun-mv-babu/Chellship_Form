const db = require('../models/index')
const Medical = db.medical;

const createMedical = async (req, res) => {
  try{

      data = req.body;
      
      const medical = await Medical.create(data);
      
      res.status(200).json({
          message: "Medical created successfully",
          sussess: true,
          data: medical
      });

  }
  catch(error){
      console.log(error);
      console.log(data);
      
  }
}


module.exports = { createMedical };