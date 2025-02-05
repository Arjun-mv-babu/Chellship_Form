const db = require('../models/index')
const General = db.general;




const createGeneral = async (req, res) => {
  try{

      data = req.body;
      
      const general = await General.create(data);
      
      res.status(200).json({
          message: "General created successfully",
          sussess: true,
          data: general
      });

  }
  catch(error){
      console.log(error);
      console.log(data);
      
  }
}


module.exports = { createGeneral };