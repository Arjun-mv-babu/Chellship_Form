const db = require('../models/index');
const IdentityDocuments = db.identity_documents;

const createIdentityDocuments = async (req, res) => {
    try{
  
        data = req.body;
        
        const documents = await IdentityDocuments.create(data);
        
        res.status(200).json({
            message: "IdentityDocuments created successfully",
            sussess: true,
            data: documents
        });
  
    }
    catch(error){
        console.log(error);
        console.log(data);
        
    }
  }

module.exports = { createIdentityDocuments };
