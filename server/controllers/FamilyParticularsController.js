const db = require('../models/index')
const FamilyParticulars = db.family_particulars;

const createFamilyParticulars = async (req, res) => {
  try{

      data = req.body;
      
      const family_particulars = await FamilyParticulars.create(data);
      
      res.status(200).json({
          message: "FamilyParticulars created successfully",
          sussess: true,
          data: family_particulars
      });

  }
  catch(error){
      console.log(error);
      console.log(data);
      
  }
}


module.exports = { createFamilyParticulars };