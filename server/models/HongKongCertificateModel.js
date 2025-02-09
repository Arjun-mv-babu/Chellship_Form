
const hong_kong_certificates = (sequelize,Sequelize)=>{
    const hong_kong_certificates = sequelize.define('hong_kong_certificates',
        {
            hong_kong_certificate_id:{
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
        },
    );
    return hong_kong_certificates;
};


module.exports = hong_kong_certificates