
const pre_sea_education = (sequelize,Sequelize)=>{
    const pre_sea_education = sequelize.define('pre_sea_education',
        {
            pre_sea_education_id:{
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
            institute_name: {
                type: Sequelize.STRING(255),
            },
            pre_sea_from_date: {
                type: Sequelize.DATEONLY,
            },
            pre_sea_to_date: {
                type: Sequelize.DATEONLY,
            },
            course:{
                type:Sequelize.STRING(100),
            },
            class_obtained:{
                type:Sequelize.STRING(100),
            },
            name_of_workshop:{
                type:Sequelize.STRING(100),
            }
        }
    );
    return pre_sea_education;
};


module.exports = pre_sea_education