
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

            hong_kong_certificate:{
                type:Sequelize.STRING(100),
            },
            hong_kong_certificate_number:{
                type:Sequelize.STRING(100),
            },
            hong_kong_certificate_from_date:{
                type:Sequelize.STRING(100),
            },
            hong_kong_certificate_place_issued:{
                type:Sequelize.STRING(100),
            },
            hong_kong_certificate_to_date:{
                type:Sequelize.DATEONLY,
            },

            attended_course:{
                type:Sequelize.STRING(100),
            },
            attended_course_institute:{
                type:Sequelize.STRING(100),
            },
            attended_course_certificate_number:{
                type:Sequelize.STRING(100),
            },
            attended_course_from_date:{
                type:Sequelize.DATEONLY,
            },
            attended_course_to_date:{
                type:Sequelize.DATEONLY,
            },

            familiar_applications: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
            PMS: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
            AMOS4W: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
            ISPS: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
            SSO: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
        },
    );
    return certificates;
};


module.exports = certificates