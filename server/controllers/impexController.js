const { generatePDF } = require('../helpers/exportData')
const { downloadPDF } = require('../helpers/downloadData')
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

        const pdfPath = await generatePDF(export_data);

        res.download(pdfPath, (err) => {
            if (err) {
                console.error('Error sending PDF:', err);
                res.status(500).json({ message: "Error occurred while sending PDF" });
            } else {
                console.log('PDF sent successfully');
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message || "Error occurred while exporting data"
        });
    }
};

const downloadData = async (req, res) => {
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

        const pdfPath = await downloadPDF(export_data);

        res.download(pdfPath, (err) => {
            if (err) {
                console.error('Error sending PDF:', err);
                res.status(500).json({ message: "Error occurred while sending PDF" });
            } else {
                console.log('PDF sent successfully');
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message || "Error occurred while exporting data"
        });
    }
};

module.exports = { exportData,downloadData };
