const db = require('../models/index')
const Certificate = db.certificate;

const createCertificate = async (req, res) => {
  try{

      data = req.body;
      
      const certificate = await Certificate.create(data);
      
      res.status(200).json({
          message: "Certificate created successfully",
          sussess: true,
          data: certificate
      });

  }
  catch(error){
      console.log(error);
      console.log(data);
      
  }
}

module.exports = { createCertificate };