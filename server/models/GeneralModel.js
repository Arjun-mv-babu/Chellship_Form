
const general = (sequelize,Sequelize)=>{
    const general = sequelize.define('general',
        {
            general_id:{
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
            court_inquiry: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
            certificate_suspended: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
            explain_court:{
                type:Sequelize.TEXT,
            },


            past_company:{
                type:Sequelize.STRING(100),
            },
            past_company_manager_name_designation:{
                type:Sequelize.STRING(50),
            },
            past_company_telephone:{
                type:Sequelize.STRING(50),
            },


            future_vacancies: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
            signature_path:{
                type:Sequelize.STRING(255),
            },
            declaration_date:{
                type:Sequelize.DATEONLY,
            },
        }
    );
    return general;
};


module.exports = general