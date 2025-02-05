const db = require('../models/index');
const Applicant = db.applicants;
const FamilyParticulars = db.family_particulars;
const EducationBackground = db.education_background;
const Certificate = db.certificate;
const Medical = db.medical;
const General = db.general;
const Experience = db.experience;
const IdentityDocuments = db.identity_documents;

const createApplicants = async (req, res) => {

    try {
        const requestBody = req.body;
        console.log('Request Body:', requestBody);
        console.log("Uploaded Files:", req.files);

        const photoPath = req.files['photo'] ? req.files['photo'][0].path : null;
        const signaturePath = req.files['signature'] ? req.files['signature'][0].path : null;

        // applicants------------------------------

        const applicantData = {
            photo_path: photoPath,
            position_applied_for: requestBody.position_applied_for,
            date_available: requestBody.date_available ? requestBody.date_available : null,
            indos_no: requestBody.indos_no ? requestBody.indos_no : null,
            last_name: requestBody.last_name ? requestBody.last_name : null,
            first_name: requestBody.first_name ? requestBody.first_name : null,
            middle_name: requestBody.middle_name ? requestBody.middle_name : null,
            date_of_birth: requestBody.date_of_birth ? requestBody.date_of_birth : null,
            age: requestBody.age ? requestBody.age : null,
            place_of_birth: requestBody.place_of_birth ? requestBody.place_of_birth : null,
            height: requestBody.height ? requestBody.height : null,
            weight: requestBody.weight ? requestBody.weight : null,
            nationality: requestBody.nationality ? requestBody.nationality : null,
            religion: requestBody.religion ? requestBody.religion : null,
            mother_tongue: requestBody.mother_tongue ? requestBody.mother_tongue : null,
            spoken_languages: requestBody.spoken_languages ? requestBody.spoken_languages : null,
            written_languages: requestBody.written_languages ? requestBody.written_languages : null,
            native_place: requestBody.native_place ? requestBody.native_place : null,
            current_resident: requestBody.current_resident ? requestBody.current_resident : null,
            marital_status: requestBody.marital_status ? requestBody.marital_status : null,
            introduction: requestBody.introduction ? requestBody.introduction : null,
            others_explain: requestBody.others_explain ? requestBody.others_explain : null,
            permanent_address: requestBody.permanent_address ? requestBody.permanent_address : null,
            permanent_tel: requestBody.permanent_tel ? requestBody.permanent_tel : null,
            permanent_mobile: requestBody.permanent_mobile ? requestBody.permanent_mobile : null,
            permanent_email: requestBody.permanent_email ? requestBody.permanent_email : null,
            present_address: requestBody.present_address ? requestBody.present_address : null,
            present_tel: requestBody.present_tel ? requestBody.present_tel : null,
            present_mobile: requestBody.present_mobile ? requestBody.present_mobile : null,
            present_email: requestBody.present_email ? requestBody.present_email : null,
        };
        
        const applicant = await Applicant.create(applicantData);
        
        // family_particulars------------------------------
        
        const familyData = [{
            applicant_id: applicant.applicant_id,
            emergency_name: requestBody.emergency_name ? requestBody.emergency_name : null,
            emergency_relationship: requestBody.emergency_relationship ? requestBody.emergency_relationship : null,
            emergency_address: requestBody.emergency_address ? requestBody.emergency_address : null,
            emergency_tel: requestBody.emergency_tel ? requestBody.emergency_tel : null,
            emergency_email: requestBody.emergency_email ? requestBody.emergency_email : null,
        }];
        
        const family_particulars = await FamilyParticulars.bulkCreate(familyData);

        // family_particulars-member ------------------------------

        const family = requestBody.family ? JSON.parse(requestBody.family) : [];

        const familyDataMemeber =family.map(family => ({
            applicant_id: applicant.applicant_id,
            family_member: family.family_member || null,
            family_member_name: family.family_member_name || null,
            sex: family.sex ? family.sex : null,
            family_date_of_birth: family.family_date_of_birth || null,
            passport_number: family.passport_number || null,
            ECNR: family.ECNR || null,
            date_issued: family.date_issued || null,
            place_issued: family.place_issued || null
        }))
        
        const family_particulars_member = await FamilyParticulars.bulkCreate(familyDataMemeber);
        
        // Education------------------------------
        
        const education = requestBody.education ? JSON.parse(requestBody.education) : [];

        const educationData =  education.map(education => ({
            applicant_id: applicant.applicant_id,
            school_name: education.school_name || null,
            from_date: education.from_date || null,
            to_date: education.to_date || null,
            percentage: education.percentage || null,
            position_degree_diploma: education.position_degree_diploma || null,
        }))

        const education_background = await EducationBackground.bulkCreate(educationData);

        // Pre Sea Education------------------------------

        const preseaeducation = requestBody.preseaeducation ? JSON.parse(requestBody.preseaeducation) : [];

        const PreSeaData = preseaeducation.map(preseaeducation => ({
            applicant_id: applicant.applicant_id,
            institute_name: preseaeducation.institute_name || null,
            pre_sea_from_date: preseaeducation.pre_sea_from_date || null,
            pre_sea_to_date: preseaeducation.pre_sea_to_date || null,
            course: preseaeducation.course || null,
            class_obtained: preseaeducation.class_obtained || null,
            name_of_workshop: preseaeducation.name_of_workshop || null 
        }))

        const pre_sea_education_background = await EducationBackground.bulkCreate(PreSeaData);          

        
        
        // Certificate------------------------------
        const certificate = requestBody.certificate ? JSON.parse(requestBody.certificate) : [];
        
        const certificateData = certificate.map(certificate => ({
            applicant_id: applicant.applicant_id,
            highest_certificate: certificate.highest_certificate || null,
            highest_certificate_grade: certificate.highest_certificate_grade || null,
            highest_certificate_issue_country: certificate.highest_certificate_issue_country || null,
            highest_certificate_number: certificate.highest_certificate_number || null,
            highest_certificate_from_date: certificate.highest_certificate_from_date || null,
            highest_certificate_place_issued: certificate.highest_certificate_place_issued || null,
            highest_certificate_to_date: certificate.highest_certificate_to_date ||null,
        }))

        const certificates = await Certificate.bulkCreate(certificateData);

        // HKCertificate------------------------------>

        const hkcertificate = requestBody.hkcertificate ? JSON.parse(requestBody.hkcertificate) : [];

        const hongkongcertificateData = hkcertificate.map(hkcertificate => ({
            applicant_id: applicant.applicant_id,
            hong_kong_certificate: hkcertificate.hong_kong_certificate || null,
            hong_kong_certificate_number: hkcertificate.hong_kong_certificate_number || null,
            hong_kong_certificate_from_date: hkcertificate.hong_kong_certificate_from_date || null,
            hong_kong_certificate_place_issued: hkcertificate.hong_kong_certificate_place_issued || null,
            hong_kong_certificate_to_date: hkcertificate.hong_kong_certificate_to_date || null,
        }))
        const hongkongcertificates = await Certificate.bulkCreate(hongkongcertificateData);

        // HKCertificate------------------------------ >

        const course = requestBody.course ? JSON.parse(requestBody.course) : [];

        const courseData =  course.map(course => ({
            applicant_id: applicant.applicant_id,
            attended_course: course.attended_course || null,
            attended_course_institute: course.attended_course_institute || null,
            attended_course_certificate_number: course.attended_course_certificate_number || null,
            attended_course_from_date: course.attended_course_from_date || null,
            attended_course_to_date: course.attended_course_to_date || null,
        }))
        const courses = await Certificate.bulkCreate(courseData);

        // HKCertificate------------------------------ >

        const familiarapplicationData = [{
            applicant_id: applicant.applicant_id,
            familiar_applications: requestBody.familiar_applications ? requestBody.familiar_applications : null,
            PMS: requestBody.PMS ? requestBody.PMS : null,
            AMOS4W: requestBody.AMOS4W ? requestBody.AMOS4W : null,
            ISPS: requestBody.ISPS ? requestBody.ISPS : null,
            SSO: requestBody.SSO ? requestBody.SSO : null                
        }];
        
        const familiarapplications = await Certificate.bulkCreate(familiarapplicationData);
        
        // Medical------------------------------
        
        const medicalData = [{
            applicant_id: applicant.applicant_id,
            signed_off: requestBody.signed_off ? requestBody.signed_off : null,
            surgery: requestBody.surgery ? requestBody.surgery : null,
            illness: requestBody.illness ? requestBody.illness : null,
            regular_medicine: requestBody.regular_medicine ? requestBody.regular_medicine : null,
            what_medicine: requestBody.what_medicine ? requestBody.what_medicine : null,
            carry_medicine: requestBody.carry_medicine ? requestBody.carry_medicine : null,
            health_disability_problems: requestBody.health_disability_problems ? requestBody.health_disability_problems : null,
            explain_medical: requestBody.explain_medical ? requestBody.explain_medical : null,
            yellow_date: requestBody.yellow_date ? requestBody.yellow_date : null,
            yellow_place: requestBody.yellow_place ? requestBody.yellow_place : null, 
        }];
        
        const medical = await Medical.bulkCreate(medicalData);
        
        // Identity Documents ------------------------------
        const documents = requestBody.documents ? JSON.parse(requestBody.documents) : [];

        const IdentityDocumentsData = documents.map(document => ({
            applicant_id: applicant.applicant_id, 
            document_type: document.document_type || null,
            document_country: document.document_country || null,
            document_number: document.document_number || null,
            document_from_date: document.document_from_date || null,
            document_to_date: document.document_to_date || null,
            document_Place_issued: document.document_Place_issued || null,
            // visa_rejected: document.visa_rejected || null, // Uncomment if needed
        }));
        
        const identity_documents = await IdentityDocuments.bulkCreate(IdentityDocumentsData)
            // .then(result => {
            //     console.log('Documents inserted successfully:', result);
            //     return result;
            // })
            // .catch(error => {
            //     console.error('Error inserting documents:', error);
            //     throw error;
            // });
            
        // General------------------------------
        
        const generalData = [{
            applicant_id: applicant.applicant_id,
            general_id: requestBody.general_id ? requestBody.general_id : null,
            court_inquiry: requestBody.court_inquiry ? requestBody.court_inquiry : null,
            certificate_suspended: requestBody.certificate_suspended ? requestBody.certificate_suspended : null,
            explain_court: requestBody.explain_court ? requestBody.explain_court : null,

            future_vacancies: requestBody.future_vacancies ? requestBody.future_vacancies : null,
            signature_path: signaturePath,
            declaration_date: requestBody.declaration_date ? requestBody.declaration_date : null,
        }];
        
        const general = await General.bulkCreate(generalData);
        
        // General past company ------------------------------

        const reference = requestBody.reference ? JSON.parse(requestBody.reference) : [];

        const PastgeneralData = reference.map(reference => ({
            applicant_id: applicant.applicant_id,
            past_company: reference.past_company || null,
            past_company_manager_name_designation: reference.past_company_manager_name_designation || null,
            past_company_telephone: reference.past_company_telephone || null,
        }))

        const references = await General.bulkCreate(PastgeneralData);

        // service ------------------------------
        
        const service = requestBody.service ? JSON.parse(requestBody.service) : [];

        const serviceData = service.map(service => ({
            applicant_id: applicant.applicant_id,
            experience_id: service.experience_id || null,
            company_name: service.company_name || null,
            vessel_name: service.vessel_name || null,
            rank: service.rank || null,
            previous_from_date: service.previous_from_date  || null,
            previous_to_date: service.previous_to_date  || null,
            period_months: service.period_months  || null,
            period_days: service.period_days  || null,
            vessel_type: service.vessel_type  || null,
            engine_type: service.engine_type  || null,
            ums: service.ums  || null,
            bhp: service.bhp  || null,
            grt: service.grt  || null,
            year_built: service.year_built  || null,
            drydock_done: service.drydock_done  || null,
            reason_for_leaving: service.reason_for_leaving  || null,
        }))

        const services = await Experience.bulkCreate(serviceData);

        // Experience ------------------------------

        const experienceData = [{
            applicant_id: applicant.applicant_id,
            master: requestBody.master ? requestBody.master : null,
            chief_officer: requestBody.chief_officer ? requestBody.chief_officer : null,
            second_officer: requestBody.second_officer ? requestBody.second_officer : null,
            third_officer: requestBody.third_officer ? requestBody.third_officer : null,
            deck_cadet: requestBody.deck_cadet ? requestBody.deck_cadet : null,
            bosun: requestBody.bosun ? requestBody.bosun : null,
            ab: requestBody.ab ? requestBody.ab : null,
            os: requestBody.os ? requestBody.os : null,
            chief_engineer: requestBody.chief_engineer ? requestBody.chief_engineer : null,
            second_engineer: requestBody.second_engineer ? requestBody.second_engineer : null,
            third_engineer: requestBody.third_engineer ? requestBody.third_engineer : null,
            fourth_engineer: requestBody.fourth_engineer ? requestBody.fourth_engineer : null,
            fifth_engineer: requestBody.fifth_engineer ? requestBody.fifth_engineer : null,
            fitter: requestBody.fitter ? requestBody.fitter : null,
            oiler: requestBody.oiler ? requestBody.oiler : null,
            wpr: requestBody.wpr ? requestBody.wpr : null,
            ch_cook: requestBody.ch_cook ? requestBody.ch_cook : null,
            messman: requestBody.messman ? requestBody.messman : null        
        }];
        
        const experience = await Experience.bulkCreate(experienceData);
        
        

        res.status(200).json({
            message: "All datas created successfully",
            success: true,
            applicant,
            family_particulars,
            family_particulars_member,
            education_background,
            pre_sea_education_background,
            certificates,
            hongkongcertificates,
            courses,
            familiarapplications,
            medical,
            general,
            references,
            services,
            experience,
            identity_documents,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error creating records",
            success: false,

            error
        });
    }
};

module.exports = { createApplicants };