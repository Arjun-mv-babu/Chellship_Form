const { generatePDF } = require('../helpers/exportData')
const db = require('../models/index');
const Applicant = db.applicants;
const Family = db.family_particulars;
const Education = db.education_background
const PreSeaEducation = db.pre_sea_education_background
const Experience = db.experience
const General = db.general
const Medical = db.medical
const Certificate = db.certificate
const HongKongCertificate = db.hong_kong_certificate
const CourseCertificate = db.course_certificate
const Documents = db.identity_documents

const exportData = async (req, res) => {
    try {
        const { applicant_id } = req.params; 
        console.log("params:", applicant_id);

        const export_data = await Applicant.findOne({
            where: { applicant_id },
            include: [
                {
                    model: Family,
                },
                {
                    model: Education,
                },
                {
                    model: PreSeaEducation,
                },
                {
                    model: Experience,
                },
                {
                    model: General,
                },
                {
                    model: Medical,
                },
                {
                    model: Certificate,
                },
                {
                    model: HongKongCertificate,
                },
                {
                    model: CourseCertificate,
                },
                {
                    model: Documents,
                },
            ]
        });

        if (!export_data) {
            return res.status(400).json({ message: "Data not found", success: false });
        }        

        await generatePDF(export_data);

        res.status(200).json({
            message: "Successfully exported", 
            success: true,
            data: export_data
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message || "Error occurred while exporting data"
        });
    }
};

module.exports = { exportData };
