const medical = (sequelize,Sequelize)=>{
    const medical = sequelize.define('medical',
        {
            medical_id:{
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
            signed_off: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
            surgery: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
            illness: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
            regular_medicine:{
                type:Sequelize.ENUM('Yes', 'No'),
            },
            what_medicine:{
                type:Sequelize.TEXT,
            },
            carry_medicine:{
                type:Sequelize.TEXT,
            },
            health_disability_problems:{
                type:Sequelize.ENUM('Yes', 'No'),
            },
            explain_medical:{
                type:Sequelize.TEXT,
            },
            yellow_date:{
                type:Sequelize.DATEONLY,
            },
            yellow_place:{
                type:Sequelize.STRING(50),
            },
        }
    );
    return medical;
};

module.exports = medical