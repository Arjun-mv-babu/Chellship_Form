
const course_certificates = (sequelize,Sequelize)=>{
    const course_certificates = sequelize.define('course_certificates',
        {
            course_certificate_id:{
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
        },
    );
    return course_certificates;
};


module.exports = course_certificates