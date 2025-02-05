
const family_particulars = (sequelize,Sequelize)=>{
    const family_particulars = sequelize.define('family_particulars',
        {
            family_id:{
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
            emergency_name: {
                type: Sequelize.STRING(100),
            },
            emergency_relationship: {
                type: Sequelize.STRING(50),
            },
            emergency_address: {
                type: Sequelize.TEXT,
            },
            emergency_tel:{
                type:Sequelize.STRING(20),
            },
            emergency_email:{
                type:Sequelize.STRING(100),
            },
            family_member:{
                type:Sequelize.ENUM('Wife', 'Child-1', 'Child-2', 'Child-3'),
            },
            family_member_name:{
                type:Sequelize.STRING(50),
            },
            sex:{
                type:Sequelize.ENUM('Male','Female'),
            },
            family_date_of_birth:{
                type:Sequelize.DATEONLY,
            },
            passport_number:{
                type:Sequelize.STRING(50),
            },
            ECNR: {
                type: Sequelize.ENUM('Yes', 'No'),
            },
            date_issued:{
                type:Sequelize.DATEONLY,
            },
            place_issued:{
                type:Sequelize.STRING(50),
            },
        }
    );
    return family_particulars;
};


module.exports = family_particulars