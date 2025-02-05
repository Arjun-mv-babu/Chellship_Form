
const applicant = (sequelize,Sequelize)=>{
    const applicant = sequelize.define('applicants',
        {
            applicant_id:{
                type:Sequelize.INTEGER,
                primaryKey:true,
                autoIncrement:true,
            },
            photo_path:{
                type:Sequelize.STRING(255),
            },
            position_applied_for: {
                type: Sequelize.STRING(255),
            },
            date_available: {
                type: Sequelize.DATEONLY,
            },
            introduction: {
                type: Sequelize.ENUM('Advertisement', 'Internet', 'Friend', 'Others',),
            },
            others_explain: {
                type: Sequelize.TEXT,
            },
            indos_no: {
                type: Sequelize.STRING(50),
            },
            last_name:{
                type:Sequelize.STRING(50),
            },
            first_name:{
                type:Sequelize.STRING(50),
            },
            middle_name:{
                type:Sequelize.STRING(50),
            },
            date_of_birth:{
                type: Sequelize.DATEONLY,
            },
            age:{
                type:Sequelize.INTEGER,
            },
            place_of_birth:{
                type:Sequelize.STRING(100),
            },
            height:{
                type:Sequelize.DECIMAL(5,2),
            },
            weight:{
                type:Sequelize.DECIMAL(5,2),
            },
            nationality:{
                type:Sequelize.STRING(50),
            },
            religion:{
                type:Sequelize.STRING(50),
            },
            mother_tongue:{
                type:Sequelize.STRING(50),
            },
            spoken_languages:{
                type:Sequelize.STRING(255),
            },
            written_languages:{
                type:Sequelize.STRING(255),
            },
            native_place:{
                type:Sequelize.STRING(100),
            },
            current_resident:{
                type:Sequelize.STRING(100),
            },
            marital_status: {
                type: Sequelize.ENUM('Single', 'Married', 'Divorced', 'Separated', 'Widowed'),
            },
            permanent_address: {
                type: Sequelize.TEXT,
            },
            permanent_tel: {
                type: Sequelize.STRING(20),
            },
            permanent_mobile: {
                type: Sequelize.STRING(20),
            },
            permanent_email:{
                type:Sequelize.STRING(100),
            },
            present_address:{
                type:Sequelize.TEXT,
            },
            present_tel:{
                type:Sequelize.STRING(20),
            },
            present_mobile:{
                type:Sequelize.STRING(20),
            },
            present_email:{
                type:Sequelize.STRING(100),
            },
        }
    );
    return applicant;
};


module.exports = applicant