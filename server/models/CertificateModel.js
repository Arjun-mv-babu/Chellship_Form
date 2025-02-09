
const certificates = (sequelize,Sequelize)=>{
    const certificates = sequelize.define('certificates',
        {
            certificate_id:{
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
            highest_certificate: {
                type: Sequelize.STRING(200),
            },
            highest_certificate_grade: {
                type: Sequelize.STRING(20),
            },
            highest_certificate_issue_country: {
                type: Sequelize.STRING(100),
            },
            highest_certificate_number:{
                type:Sequelize.STRING(100),
            },
            highest_certificate_from_date:{
                type:Sequelize.DATEONLY,
            },
            highest_certificate_place_issued:{
                type:Sequelize.STRING(100),
            },
            highest_certificate_to_date:{
                type:Sequelize.DATEONLY,
            },
        },
    );
    return certificates;
};


module.exports = certificates