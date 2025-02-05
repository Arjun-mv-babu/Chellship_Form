import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegFile } from "react-icons/fa";
import axios from 'axios';
import * as XLSX from 'xlsx';


const Completed = () => {
    const [data, setData] = useState([]);
    const location = useLocation();
    const { applicant_id } = location.state || {};

    useEffect(() => {
        const fetchData = async () => {
            if (applicant_id) {
                try {
                    const response = await axios.get(`http://localhost:3001/alldata/getalldata/${applicant_id}`);
                    if (response.data && response.data.data && Array.isArray(response.data.data)) {
                        setData(response.data.data);
                        console.log(response.data.data);
                        console.log(response.data.data[0].current_resident);
                    } else {
                        console.error("API response data is not in the expected format:", response.data);
                        setData([]);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setData([]);
                }
            } else {
                console.log("No applicant_id");
                setData([]);
            }
        };
        fetchData();
    }, [applicant_id]);

    const handleOnExport = () => {
        if (data) {
          try {
            const formattedData = [];
      
            data.forEach((applicant) => {
              const formattedApplicant = {

                "applicant_id": applicant.applicant_id,
                "position_applied_for": applicant.position_applied_for,
                "introduction": applicant.introduction,
                "others_explain": applicant.others_explain,
                "date_available": applicant.date_available,
                "indos_no": applicant.indos_no,
                "last_name": applicant.last_name,
                "first_name": applicant.first_name,
                "middle_name": applicant.middle_name,
                "date_of_birth": applicant.date_of_birth,
                "age": applicant.age,
                "place_of_birth": applicant.place_of_birth,
                "height": applicant.height,
                "weight": applicant.weight,
                "nationality": applicant.nationality,
                "religion": applicant.religion,
                "mother_tongue": applicant.mother_tongue,
                "spoken_languages": applicant.spoken_languages,
                "written_languages": applicant.written_languages,
                "native_place": applicant.native_place,
                "current_resident": applicant.current_resident,
                "marital_status": applicant.marital_status,
                "permanent_address": applicant.permanent_address,
                "permanent_tel": applicant.permanent_tel,
                "permanent_mobile": applicant.permanent_mobile,
                "permanent_email": applicant.permanent_email,
                "present_address": applicant.present_address,
                "present_tel": applicant.present_tel,
                "present_mobile": applicant.present_mobile,
                "present_email": applicant.present_email,
                "photo_path": applicant.photo_path,
                "signature_path": applicant.signature_path,
                "declaration_date": applicant.declaration_date,
                "future_vacancies": applicant.future_vacancies,

                "emergency_name": data[0].family_particular.emergency_name,
                "emergency_relationship": data[0].family_particular.emergency_relationship,
                "emergency_address": data[0].family_particular.emergency_address,
                "emergency_tel": data[0].family_particular.emergency_tel,
                "emergency_email": data[0].family_particular.emergency_email,
                "family_member_name": data[0].family_particular.family_member_name,
                "sex": data[0].family_particular.sex,
                "passport_number": data[0].family_particular.passport_number,
                "ECNR": data[0].family_particular.ECNR,
                "date_issued": data[0].family_particular.date_issued,
                "place_issued": data[0].family_particular.place_issued,

                "school_name": data[0].education_background.school_name,
                "from_date": data[0].education_background.from_date,
                "to_date": data[0].education_background.to_date,
                "percentage": data[0].education_background.percentage,
                "degree_diploma": data[0].education_background.degree_diploma,
                "institute_name": data[0].education_background.institute_name,
                "pre_sea_from_date": data[0].education_background.pre_sea_from_date,
                "pre_sea_to_date": data[0].education_background.pre_sea_to_date,
                "course": data[0].education_background.course,
                "class_obtained": data[0].education_background.class_obtained,
                "name_of_workshop": data[0].education_background.name_of_workshop,

                "document_type": data[0].identity_document.document_type,
                "document_country": data[0].identity_document.document_country,
                "document_number": data[0].identity_document.document_number,
                "document_from_date": data[0].identity_document.document_from_date,
                "document_to_date": data[0].identity_document.document_to_date,
                "document_Place_issued": data[0].identity_document.document_Place_issued,
            
                "highest_certificate": data[0].certificates[0].highest_certificate,
                "highest_certificate_grade": data[0].certificates[0].highest_certificate_grade,
                "highest_certificate_issue_country": data[0].certificates[0].highest_certificate_issue_country,
                "highest_certificate_number": data[0].certificates[0].highest_certificate_number,
                "highest_certificate_from_date": data[0].certificates[0].highest_certificate_from_date,
                "highest_certificate_to_date": data[0].certificates[0].highest_certificate_to_date,
                "highest_certificate_place_issued": data[0].certificates[0].highest_certificate_place_issued,
                "equivalent_certificate": data[0].certificates[0].equivalent_certificate,
                "equivalent_certificate_number": data[0].certificates[0].equivalent_certificate_number,
                "equivalent_certificate_from_date": data[0].certificates[0].equivalent_certificate_from_date,
                "equivalent_certificate_to_date": data[0].certificates[0].equivalent_certificate_to_date,
                "equivalent_certificate_place_issued": data[0].certificates[0].equivalent_certificate_place_issued,
                "attended_course": data[0].certificates[0].attended_course,
                "attended_course_institute": data[0].certificates[0].attended_course_institute,
                "attended_course_certificate_number": data[0].certificates[0].attended_course_certificate_number,
                "attended_course_from_date": data[0].certificates[0].attended_course_from_date,
                "attended_course_to_date": data[0].certificates[0].attended_course_to_date,
                "PMS": data[0].certificates[0].PMS,
                "AMOS4W": data[0].certificates[0].AMOS4W,
            
                "signed_off": data[0].medical.signed_off,
                "surgery": data[0].medical.surgery,
                "illness": data[0].medical.illness,
                "regular_medicine": data[0].medical.regular_medicine,
                "what_medicine": data[0].medical.what_medicine,
                "carry_medicine": data[0].medical.carry_medicine,
                "health_disability_problems": data[0].medical.health_disability_problems,
                "alcohol": data[0].medical.alcohol,
                "smoke": data[0].medical.smoke,
                "explain_medicine": data[0].medical.explain_medicine,
                "vaccination_name": data[0].medical.vaccination_name,
                "vaccination_dose_type": data[0].medical.vaccination_dose_type,
                "vaccination_manufacturer": data[0].medical.vaccination_manufacturer,
                "vaccination_date": data[0].medical.vaccination_date,
                "vaccination_place": data[0].medical.vaccination_place,
            
                "court_inquiry": data[0].general.court_inquiry,
                "certificate_suspended": data[0].general.certificate_suspended,
                "covid_infected": data[0].general.covid_infected,
                "additional_details": data[0].general.additional_details,
                "past_company": data[0].general.past_company,
                "past_company_manager_name_designation": data[0].general.past_company_manager_name_designation,
                "past_company_telephone": data[0].general.past_company_telephone,
                "visa_rejected": data[0].general.visa_rejected,
                "visa_revoked": data[0].general.visa_revoked,
                "deported_from": data[0].general.deported_from,
                "visa_deported_explain": data[0].general.visa_deported_explain,
            
                "company_name": data[0].experiences[0].company_name,
                "vessel_name": data[0].experiences[0].vessel_name,
                "rank": data[0].experiences[0].rank,
                "from_date": data[0].experiences[0].from_date,
                "to_date": data[0].experiences[0].to_date,
                "period_months": data[0].experiences[0].period_months,
                "period_days": data[0].experiences[0].period_days,
                "vessel_type": data[0].experiences[0].vessel_type,
                "engine_type": data[0].experiences[0].engine_type,
                "bhp": data[0].experiences[0].bhp,
                "ums": data[0].experiences[0].ums,
                "dead_weight": data[0].experiences[0].dead_weight,
                "crane_make": data[0].experiences[0].crane_make,
                "grab_exp": data[0].experiences[0].grab_exp,
                "year_built": data[0].experiences[0].year_built,
                "drydock_done": data[0].experiences[0].drydock_done,
                "reason_for_leaving": data[0].experiences[0].reason_for_leaving,
                "chief_engineer": data[0].experiences[0].chief_engineer,
                "second_engineer": data[0].experiences[0].second_engineer,
                "third_engineer": data[0].experiences[0].third_engineer,
                "fourth_engineer": data[0].experiences[0].fourth_engineer,
                "fifth_engineer": data[0].experiences[0].fifth_engineer,
                "tme_engine_cadet": data[0].experiences[0].tme_engine_cadet,
                "fitter": data[0].experiences[0].fitter,
                "oiler": data[0].experiences[0].oiler,
                "wiper": data[0].experiences[0].wiper,
                "electrical_officer": data[0].experiences[0].electrical_officer

              };

              formattedData.push(formattedApplicant);
            });
      
            const ws = XLSX.utils.json_to_sheet(formattedData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
            XLSX.writeFile(wb, "MyExcel.xlsx");
          } catch (exportError) {
            console.error("Error exporting to Excel:", exportError);
          }
        } else {
          console.log("No data to export or data is empty.");
        }
      };

    return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h5 className="text-center text-2xl font-semibold text-gray-800 mb-4">Thank you!</h5>
            <div className="flex justify-center">
                <button onClick={handleOnExport}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                    <FaRegFile className="mr-2" /> 
                    Download File (.XLSX)
                </button>
            </div>
            <p className="text-center text-gray-600 mt-2">Click to download your data.</p>
        </div>
    </div>
    );
    
};

export default Completed;