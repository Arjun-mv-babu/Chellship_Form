const config = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(    
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: 0,
        logging: false,
        pool: {
          max: config.pool.max,
          min: config.pool.min,
          acquire: config.pool.acquire,
          idle: config.pool.idle
        }
      }
    );

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.applicants = require('./ApplicantModel')(sequelize,Sequelize);
db.family_particulars = require('./FamilyParticularModel.js')(sequelize,Sequelize);
db.education_background = require('./EducationBackgroundModel.js')(sequelize,Sequelize);
db.pre_sea_education_background = require('./PreSeaEducationBackgroundModel.js')(sequelize,Sequelize);
db.experience = require('./ExperienceModel.js')(sequelize,Sequelize);
db.general = require('./GeneralModel.js')(sequelize,Sequelize);
db.medical = require('./MedicalModel.js')(sequelize,Sequelize);
db.certificate = require('./CertificateModel.js')(sequelize,Sequelize);
db.hong_kong_certificate = require('./HongKongCertificateModel.js')(sequelize,Sequelize);
db.course_certificate = require('./CourseCertificateModel.js')(sequelize,Sequelize);
db.identity_documents = require('./IdentityDocumentsModel.js')(sequelize,Sequelize);



db.applicants.hasMany(db.certificate, { foreignKey: 'applicant_id' });
db.certificate.belongsTo(db.applicants, { foreignKey: 'applicant_id' });

db.applicants.hasMany(db.hong_kong_certificate, { foreignKey: 'applicant_id' });
db.hong_kong_certificate.belongsTo(db.applicants, { foreignKey: 'applicant_id' });

db.applicants.hasMany(db.course_certificate, { foreignKey: 'applicant_id' });
db.course_certificate.belongsTo(db.applicants, { foreignKey: 'applicant_id' });

db.applicants.hasMany(db.family_particulars, { foreignKey: 'applicant_id' });
db.family_particulars.belongsTo(db.applicants, { foreignKey: 'applicant_id' });

db.applicants.hasMany(db.education_background, { foreignKey: 'applicant_id' });
db.education_background.belongsTo(db.applicants, { foreignKey: 'applicant_id' });

db.applicants.hasMany(db.pre_sea_education_background, { foreignKey: 'applicant_id' });
db.pre_sea_education_background.belongsTo(db.applicants, { foreignKey: 'applicant_id' });

db.applicants.hasMany(db.experience, { foreignKey: 'applicant_id' });
db.experience.belongsTo(db.applicants, { foreignKey: 'applicant_id' });

db.applicants.hasMany(db.general, { foreignKey: 'applicant_id' });
db.general.belongsTo(db.applicants, { foreignKey: 'applicant_id' });

db.applicants.hasOne(db.medical, { foreignKey: 'applicant_id' });
db.medical.belongsTo(db.applicants, { foreignKey: 'applicant_id' });

db.applicants.hasMany(db.identity_documents, { foreignKey: 'applicant_id' });
db.identity_documents.belongsTo(db.applicants, { foreignKey: 'applicant_id' });

module.exports = db;
