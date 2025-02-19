
const education_background = (sequelize,Sequelize)=>{
    const education_background = sequelize.define('education_background',
        {
            education_id:{
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
            school_name: {
                type: Sequelize.STRING(255),
            },
            from_date: {
                type: Sequelize.DATEONLY,
            },
            to_date: {
                type: Sequelize.DATEONLY,
            },
            percentage:{
                type:Sequelize.DECIMAL(5,2),
            },
            position_degree_diploma:{
                type:Sequelize.STRING(100),
            },
        }
    );
    return education_background;
};


module.exports = education_background