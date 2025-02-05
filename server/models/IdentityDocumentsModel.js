
const identity_documents = (sequelize,Sequelize)=>{
    const identity_documents = sequelize.define('identity_documents',
        {
            identity_documents_id:{
                type:Sequelize.INTEGER,
                primaryKey:true,
                autoIncrement:true,
            },
            applicant_id:{
                type:Sequelize.INTEGER,
                references: {
                    model: 'applicants',
                    key: 'applicant_id'
                },
            },
            document_type: {
                type: Sequelize.STRING(20), //passport,indincdc,etc
            },
            document_country: {
                type: Sequelize.STRING(20),
            },
            document_number: {
                type: Sequelize.STRING(20),
            },
            document_from_date:{
                type:Sequelize.DATEONLY,
            },
            document_to_date:{
                type:Sequelize.DATEONLY,
            },
            document_Place_issued:{
                type:Sequelize.STRING(20),
            },
            // visa_rejected: {
            //     type: Sequelize.ENUM('Yes', 'No'),
            // },
        },
    );
    return identity_documents;
};


module.exports = identity_documents