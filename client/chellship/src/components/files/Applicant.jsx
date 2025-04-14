import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";
import '../styles/styles.css'

const Applicant = () => {

    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const seaExperienceRef = useRef(null);

    const scrollToSeaExperience = () => {
        seaExperienceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };


    const [ApplicantsDetails, setApplicantsDetails] = useState({
        position_applied_for: "",
        date_available: "",
        introduction:"",
        others_explain:"",
        indos_no: "",
        last_name: "",
        first_name: "",
        middle_name: "",
        date_of_birth: "",
        age: "",
        place_of_birth: "",
        height: "",
        weight: "",
        bmi: "",
        nationality: "",
        religion: "",
        mother_tongue: "",
        spoken_languages: "",
        written_languages: "",
        native_place: "",
        current_resident: "",
        marital_status: "",
        permanent_address:"",
        permanent_tel:"",
        permanent_mobile:"",
        permanent_email:"",
        permanent_airport:"",
        present_address:"",
        present_tel:"",
        present_mobile:"",
        present_email:"",
        present_airport:"",

        emergency_name: "",  
        emergency_relationship: "",  
        emergency_address: "",  
        emergency_tel: "",  
        emergency_email: "",  

        // family_member: "",  
        // family_member_name: "",  
        // sex: "",  
        // family_date_of_birth: "",  
        // passport_number: "",  
        // ECNR: "",  
        // date_issued: "",  
        // place_issued: "", 

        // school_name: "",
        // from_date: "",
        // to_date: "",
        // percentage: "",
        // position_degree_diploma: "",

        // institute_name: "",
        // pre_sea_from_date: "",
        // pre_sea_to_date: "",
        // course: "",
        // class_obtained: "",
        // name_of_workshop: "",

        // highest_certificate: "",
        // highest_certificate_grade: "",
        // highest_certificate_issue_country: "",
        // highest_certificate_number: "",
        // highest_certificate_from_date: "",
        // highest_certificate_place_issued: "",
        // highest_certificate_to_date: "",

        // hong_kong_certificate: "",
        // hong_kong_certificate_number: "",
        // hong_kong_certificate_from_date: "",
        // hong_kong_certificate_place_issued: "",
        // hong_kong_certificate_to_date: "",

        // attended_course: "",
        // attended_course_institute: "",
        // attended_course_certificate_number: "",
        // attended_course_from_date: "",
        // attended_course_to_date: "",
        
        // familiar_applications: "",
        // PMS: "",
        // AMOS4W: "",
        // ISPS: "",
        // SSO: "",
        // explain_familiarity:"",

        signed_off: "",
        explain_signed_off: "",
        surgery: "",
        explain_surgery: "",
        illness: "",
        explain_illness: "",
        regular_medicine: "",
        what_medicine: "",
        carry_medicine: "",
        health_disability_problems: "",
        explain_health_disability_problems: "",
        alcohol: "",
        smoke: "",
        // explain_medical: "",

        first_dose_make: "",
        first_dose_date: "",
        second_dose_make: "",
        second_dose_date: "",
        booster_dose_one_make: "",
        booster_dose_one_date: "",
        booster_dose_two_make: "",
        booster_dose_two_date: "",
        yellow_date: "",
        yellow_place: "",

        // document_type: "",
        // document_country: "",
        // document_number: "",
        // document_from_date: "",
        // document_to_date: "",
        // document_Place_issued: "",
        // visa_rejected: "",
        // done

        // alcohol: "",
        // smoke: "",
        // explain_medicine: "",
        // vaccination_name: "",
        // vaccination_dose_type: "",
        // vaccination_manufacturer: "",
        // vaccination_date: "",
        // vaccination_place: "",
        // yellow_fever_date: "",
        // yellow_fever_place: "",

        court_inquiry: "",
        explain_court: "",
        certificate_suspended: "",
        explain_certificate: "",
        covid_infected: "",
        explain_covid: "",


        // past_company: "",
        // past_company_manager_name_designation: "",
        // past_company_telephone: "",

        future_vacancies: "",
        declaration_date: "",

        // company_name: "",
        // vessel_name: "",
        // rank: "",
        // previous_from_date: "",
        // previous_to_date: "",
        // period_months: "",
        // period_days: "",
        // vessel_type: "",
        // engine_type: "",
        // ums: "",
        // bhp: "",
        // grt: "",
        // year_built: "",
        // drydock_done: "",
        // reason_for_leaving: "",

        master: "",
        chief_officer: "",
        second_officer: "",
        third_officer: "",
        deck_cadet: "",
        bosun: "",
        ab: "",
        os: "",
        chief_engineer: "",
        second_engineer: "",
        third_engineer: "",
        fourth_engineer: "",
        fifth_engineer: "",
        electrical_officer: "",
        fitter: "",
        oiler: "",
        wpr: "",
        ch_cook: "",
        messman: "",
        ecdis: "",
        geared: "",
        grab: "",
        

        // document_type: "",
        // document_country: "",
        // document_number: "",
        // document_from_date: "",
        // document_to_date: "",
        // document_Place_issued: "",
        
        visa_rejection: "",
        explain_visa_rejection: "",
        visa_revoked: "",
        explain_visa_revoked: "",
        country_deported: "",
        explain_country_deported:""
        // explain_visa:""
    });

    const [documents, setDocuments] = useState([
        {
            document_type: "",
            document_country: "",
            document_number: "",
            document_from_date: "",
            document_to_date: "",
            document_Place_issued: "",
        },
    ]);

    const addDocument = () => {
        setDocuments([
            ...documents,
            {
                document_type: "",
                document_country: "",
                document_number: "",
                document_from_date: "",
                document_to_date: "",
                document_Place_issued: "",
            },
        ]);
    };

    const cancelLastDocument = () => {
        setDocuments((prevDocuments) => prevDocuments.slice(0, -1));
    }; 

    const handleDocumentChange = (index, field, value) => {
        const updatedDocuments = [...documents];
        updatedDocuments[index][field] = value;
    
        // Auto-set or reset country based on selected document type
        if (field === "document_type") {
            if (value === "Indian CDC") {
                updatedDocuments[index].document_country = "India";
            } else if (value === "US C1/D Visa") {
                updatedDocuments[index].document_country = "United States of America";
            } else {
                // Reset to default (empty)
                updatedDocuments[index].document_country = "";
            }
        }
    
        setDocuments(updatedDocuments);
    };
    
        // ----------------------------- >
    
        const [education, setEducation] = useState([
            {
                school_name: "",
                from_date: "",
                to_date: "",
                percentage: "",
                position_degree_diploma: "",
            },
        ]);
    
        const addEducation = () => {
            setEducation([
                ...education,
                {
                    school_name: "",
                    from_date: "",
                    to_date: "",
                    percentage: "",
                    position_degree_diploma: "",
                },
            ]);
        };

        const cancelLastEducation = () => {
            setEducation((prevEducation) => prevEducation.slice(0, -1));
        }; 

        const handleEducationChange = (index, field, value) => {
            const updatedEducation = [...education];
            updatedEducation[index][field] = value;
            setEducation(updatedEducation);
        };

        // ----------------------------- >

        const [preseaeducation, setPreSeaEducation] = useState([
            {
                institute_name: "",
                pre_sea_from_date: "",
                pre_sea_to_date: "",
                course: "",
                class_obtained: "",
                name_of_workshop: "",
            },
        ]);
    
        const addPreSeaEducation = () => {
            setPreSeaEducation([
                ...preseaeducation,
                {
                    institute_name: "",
                    pre_sea_from_date: "",
                    pre_sea_to_date: "",
                    course: "",
                    class_obtained: "",
                    name_of_workshop: "",
                },
            ]);
        };

        const cancelLastPreseaeducation = () => {
            setPreSeaEducation((prevPreSeaEducation) => prevPreSeaEducation.slice(0, -1));
        }; 

        const handlePreSeaEducationChange = (index, field, value) => {
            const updatedPreSeaEducation = [...preseaeducation];
            updatedPreSeaEducation[index][field] = value;
            setPreSeaEducation(updatedPreSeaEducation);
        };

        // ----------------------------- >

        const [service, setService] = useState([
            {
                company_name: "",
                vessel_name: "",
                rank: "",
                previous_from_date: "",
                previous_to_date: "",
                period_months: "",
                period_days: "",
                vessel_type: "",
                engine_type: "",
                ums: "",
                bhp: "",
                grt: "",
                year_built: "",
                drydock_done: "",
                reason_for_leaving: "",
            },
        ]);
    
        const addService = () => {
            setService([
                ...service,
                {
                    company_name: "",
                    vessel_name: "",
                    rank: "",
                    previous_from_date: "",
                    previous_to_date: "",
                    period_months: "",
                    period_days: "",
                    vessel_type: "",
                    engine_type: "",
                    ums: "",
                    bhp: "",
                    grt: "",
                    year_built: "",
                    drydock_done: "",
                    reason_for_leaving: "",
                },
            ]);
        };

        const cancelLastService = () => {
            setService((prevService) => prevService.slice(0, -1));
        }; 

        const handleServiceChange = (index, field, value) => {
            const updatedService = [...service];
            updatedService[index][field] = value;
        
            const fromDate = new Date(updatedService[index].previous_from_date);
            const toDate = new Date(updatedService[index].previous_to_date);
        
            if (
                fromDate instanceof Date && !isNaN(fromDate) &&
                toDate instanceof Date && !isNaN(toDate) &&
                toDate > fromDate
            ) {
                let totalMonths = (toDate.getFullYear() - fromDate.getFullYear()) * 12 + (toDate.getMonth() - fromDate.getMonth());
                let extraDays = toDate.getDate() - fromDate.getDate();
        
                if (extraDays < 0) {
                    totalMonths--;
                    const prevMonth = new Date(toDate.getFullYear(), toDate.getMonth(), 0);
                    extraDays += prevMonth.getDate();
                }
        
                updatedService[index].period_months = totalMonths;
                updatedService[index].period_days = extraDays;
            }
        
            setService(updatedService);
        };
        

        // ----------------------------- >

        const [certificate, setCertificate] = useState([
            {
                highest_certificate: "",
                highest_certificate_grade: "",
                highest_certificate_issue_country: "",
                highest_certificate_number: "",
                highest_certificate_from_date: "",
                highest_certificate_place_issued: "",
                highest_certificate_to_date: "",
            },
        ]);
    
        const addCertificate = () => {
            setCertificate([
                ...certificate,
                {
                    highest_certificate: "",
                    highest_certificate_grade: "",
                    highest_certificate_issue_country: "",
                    highest_certificate_number: "",
                    highest_certificate_from_date: "",
                    highest_certificate_place_issued: "",
                    highest_certificate_to_date: "",
                },
            ]);
        };

        const cancelLastCertificate = () => {
            setCertificate((prevCertificate) => prevCertificate.slice(0, -1));
        }; 

        const handleCertificateChange = (index, field, value) => {
            const updatedCertificate = [...certificate];
            updatedCertificate[index][field] = value;
            setCertificate(updatedCertificate);
        };

        // ----------------------------- >

        const [hkcertificate, setHKCertificate] = useState([
            {
                hong_kong_certificate: "",
                hong_kong_certificate_number: "",
                hong_kong_certificate_from_date: "",
                hong_kong_certificate_place_issued: "",
                hong_kong_certificate_to_date: "",
            },
        ]);
    
        const addHKCertificate = () => {
            setHKCertificate([
                ...hkcertificate,
                {
                    hong_kong_certificate: "",
                    hong_kong_certificate_number: "",
                    hong_kong_certificate_from_date: "",
                    hong_kong_certificate_place_issued: "",
                    hong_kong_certificate_to_date: "",
                },
            ]);
        };

        const cancelLastHkcertificate = () => {
            setHKCertificate((prevHKCertificate) => prevHKCertificate.slice(0, -1));
        }; 

        const handleHKCertificateChange = (index, field, value) => {
            const updatedHKCertificate = [...hkcertificate];
            updatedHKCertificate[index][field] = value;
            setHKCertificate(updatedHKCertificate);
        };

        // ----------------------------- >

        const [course, setCourse] = useState([
            {
                attended_course: "",
                attended_course_institute: "",
                attended_course_certificate_number: "",
                attended_course_from_date: "",
                attended_course_to_date: "",
            },
        ]);
    
        const addCourse = () => {
            setCourse([
                ...course,
                {
                    attended_course: "",
                    attended_course_institute: "",
                    attended_course_certificate_number: "",
                    attended_course_from_date: "",
                    attended_course_to_date: "",
                },
            ]);
        };

        const cancelLastCourse = () => {
            setCourse((prevCourse) => prevCourse.slice(0, -1));
        }; 

        const handleCourseChange = (index, field, value) => {
            const updatedCourse = [...course];
            updatedCourse[index][field] = value;
            setCourse(updatedCourse);
        };

        // ----------------------------- >

        const [family, setFamily] = useState([
            {
                family_member: "",  
                family_member_name: "",  
                sex: "",  
                family_date_of_birth: "",  
                passport_number: "",  
                ECNR: "",  
                date_issued: "",  
                place_issued: "", 
            },
        ]);
    
        const addFamily = () => {
            setFamily([
                ...family,
                {
                    family_member: "",  
                    family_member_name: "",  
                    sex: "",  
                    family_date_of_birth: "",  
                    passport_number: "",  
                    ECNR: "",  
                    date_issued: "",  
                    place_issued: "", 
                },
            ]);
        };

        const cancelLastFamily = () => {
            setFamily((prevFamily) => prevFamily.slice(0, -1));
        };        

        const handleFamilyChange = (index, field, value) => {
            const updatedFamily = [...family];
            updatedFamily[index][field] = value;
            setFamily(updatedFamily);
        };

        // ----------------------------- >
        const [reference, setReference] = useState([
            {
                past_company: "",
                past_company_manager_name_designation: "",
                past_company_telephone: "",
            },
        ]);
    
        const addReference = () => {
            setReference([
                ...reference,
                {
                    past_company: "",
                    past_company_manager_name_designation: "",
                    past_company_telephone: "",
                },
            ]);
        };

        const cancelLastReference = () => {
            setReference((prevReference) => prevReference.slice(0, -1));
        }; 

        const handleReferenceChange = (index, field, value) => {
            const updatedReference = [...reference];
            updatedReference[index][field] = value;
            setReference(updatedReference);
        };

        // ----------------------------- >

    const [photo, setPhoto] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [cameraOn, setCameraOn] = useState(false);
    const [signature, setSignature] = useState(null);
    const [photoFile, setPhotoFile] = useState(null);

    // Start Camera
    const startCamera = () => {
        setCameraOn(true);
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((err) => console.error("Error accessing camera: ", err));
    };

    // Capture Photo
    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (video && canvas) {

            context.translate(canvas.width, 0);
            context.scale(-1, 1);

            // Draw the video frame onto the canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Reset the canvas transformation
            context.setTransform(1, 0, 0, 1, 0, 0);

            const dataUrl = canvas.toDataURL("image/png");
            setPhoto(dataUrl);

            // Convert base64 to file
            fetch(dataUrl)
                .then(res => res.blob())
                .then(blob => {
                    const file = new File([blob], "photo.png", { type: "image/png" });
                    setPhotoFile(file);
                });

            // Stop camera
            const stream = video.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            setCameraOn(false);
        }
    };

    

    const handleApplicantChange = (e) => {
        const { name, value } = e.target;
    
        let updatedDetails = { ...ApplicantsDetails, [name]: value };
    
        // Auto-clear explain_medical fields when certain fields are "No"
        if (
            (name === 'signed_off' && value === 'No') ||
            (name === 'surgery' && value === 'No') ||
            (name === 'illness' && value === 'No') ||
            (name === 'regular_medicine' && value === 'No') ||
            (name === 'health_disability_problems' && value === 'No') ||
            (name === 'alcohol' && value === 'No') ||
            (name === 'smoke' && value === 'No')
        ) {
            updatedDetails.explain_medical = "";
        }
    
        // Auto-clear explain_court fields when certain fields are "No"
        if (
            (name === 'court_inquiry' && value === 'No') ||
            (name === 'certificate_suspended' && value === 'No')
        ) {
            updatedDetails.explain_court = "";
        }
    
        // Auto-calculate age from date_of_birth
        if (name === "date_of_birth") {
            const birthDate = new Date(value);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
    
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
    
            updatedDetails.age = age;
        }

            // Auto-calculate BMI from height and weight
        const height = parseFloat(name === 'height' ? value : updatedDetails.height);
        const weight = parseFloat(name === 'weight' ? value : updatedDetails.weight);

        if (!isNaN(height) && height > 0 && !isNaN(weight)) {
            const bmi = weight / ((height / 100) ** 2);
            updatedDetails.bmi = bmi.toFixed(2);
        }
    
        setApplicantsDetails(updatedDetails);
    };
    
    const handleFileChange = (e) => {
        const { files } = e.target;
        if (files.length > 0) {
            setPhotoFile(files[0]);

            // Preview Image
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(files[0]);
        }
    };

    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            setApplicantsDetails(prev => ({
                ...prev,
                present_address: prev.permanent_address,
                present_tel: prev.permanent_tel,
                present_mobile: prev.permanent_mobile,
                present_email: prev.permanent_email,
                present_airport: prev.permanent_airport
            }));
        }
    };
    


    // const handleUpload = async () => {
    //     if (!photoFile) return alert("No photo selected!");

    //     const formData = new FormData();
    //     formData.append('photo', photoFile);

    //     try {
    //         const response = await axios.post("http://localhost:3001/applicants/create", formData, {
    //             headers: { 'Content-Type': 'multipart/form-data' }
    //         });
    //         console.log("Upload Success:", response.data);
    //         alert("Photo uploaded successfully!");
    //     } catch (error) {
    //         console.error("Upload Error:", error);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;
    
        if (!window.confirm('Are you sure to submit?')) {
            return;
        }

        setIsSubmitting(true);

        try {
            const formData = new FormData();
    
            formData.append('position_applied_for', ApplicantsDetails.position_applied_for);
            formData.append('date_available', ApplicantsDetails.date_available);
            formData.append('introduction', ApplicantsDetails.introduction);
            formData.append('others_explain', ApplicantsDetails.others_explain || "No additional details");
            formData.append('indos_no', ApplicantsDetails.indos_no);
            formData.append('last_name', ApplicantsDetails.last_name);
            formData.append('first_name', ApplicantsDetails.first_name);
            formData.append('middle_name', ApplicantsDetails.middle_name);
            formData.append('date_of_birth', ApplicantsDetails.date_of_birth);
            formData.append('age', ApplicantsDetails.age);
            formData.append('place_of_birth', ApplicantsDetails.place_of_birth);
            formData.append('height', ApplicantsDetails.height);
            formData.append('weight', ApplicantsDetails.weight);
            formData.append('bmi', ApplicantsDetails.bmi);
            formData.append('nationality', ApplicantsDetails.nationality);
            formData.append('religion', ApplicantsDetails.religion);
            formData.append('mother_tongue', ApplicantsDetails.mother_tongue);
            formData.append('spoken_languages', ApplicantsDetails.spoken_languages);
            formData.append('written_languages', ApplicantsDetails.written_languages);
            formData.append('native_place', ApplicantsDetails.native_place);
            formData.append('current_resident', ApplicantsDetails.current_resident);
            formData.append('marital_status', ApplicantsDetails.marital_status);
            formData.append('permanent_address', ApplicantsDetails.permanent_address);
            formData.append('permanent_tel', ApplicantsDetails.permanent_tel);
            formData.append('permanent_mobile', ApplicantsDetails.permanent_mobile);
            formData.append('permanent_email', ApplicantsDetails.permanent_email);
            formData.append('permanent_airport', ApplicantsDetails.permanent_airport);
            formData.append('present_address', ApplicantsDetails.present_address);
            formData.append('present_tel', ApplicantsDetails.present_tel);
            formData.append('present_mobile', ApplicantsDetails.present_mobile);
            formData.append('present_email', ApplicantsDetails.present_email);
            formData.append('present_airport', ApplicantsDetails.present_airport);
    
            formData.append('emergency_name', ApplicantsDetails.emergency_name);
            formData.append('emergency_relationship', ApplicantsDetails.emergency_relationship);
            formData.append('emergency_address', ApplicantsDetails.emergency_address);
            formData.append('emergency_tel', ApplicantsDetails.emergency_tel);
            formData.append('emergency_email', ApplicantsDetails.emergency_email);
    
            // formData.append('familiar_applications', ApplicantsDetails.familiar_applications);
            // formData.append('PMS', ApplicantsDetails.PMS);
            // formData.append('AMOS4W', ApplicantsDetails.AMOS4W);
            // formData.append('ISPS', ApplicantsDetails.ISPS);
            // formData.append('SSO', ApplicantsDetails.SSO);
            // formData.append('explain_familiarity', ApplicantsDetails.explain_familiarity);
    
            formData.append('signed_off', ApplicantsDetails.signed_off);
            formData.append('explain_signed_off', ApplicantsDetails.explain_signed_off);
            formData.append('surgery', ApplicantsDetails.surgery);
            formData.append('explain_surgery', ApplicantsDetails.explain_surgery);
            formData.append('illness', ApplicantsDetails.illness);
            formData.append('explain_illness', ApplicantsDetails.explain_illness);
            formData.append('regular_medicine', ApplicantsDetails.regular_medicine);
            formData.append('what_medicine', ApplicantsDetails.what_medicine);
            formData.append('carry_medicine', ApplicantsDetails.carry_medicine);
            formData.append('health_disability_problems', ApplicantsDetails.health_disability_problems);
            formData.append('explain_health_disability_problems', ApplicantsDetails.explain_health_disability_problems);
            formData.append('alcohol', ApplicantsDetails.alcohol);
            formData.append('smoke', ApplicantsDetails.smoke);
            // formData.append('explain_medical', ApplicantsDetails.explain_medical);

            formData.append('first_dose_make', ApplicantsDetails.first_dose_make);
            formData.append('first_dose_date', ApplicantsDetails.first_dose_date);
            formData.append('second_dose_make', ApplicantsDetails.second_dose_make);
            formData.append('second_dose_date', ApplicantsDetails.second_dose_date);
            formData.append('booster_dose_one_make', ApplicantsDetails.booster_dose_one_make);
            formData.append('booster_dose_one_date', ApplicantsDetails.booster_dose_one_date);
            formData.append('booster_dose_two_make', ApplicantsDetails.booster_dose_two_make);
            formData.append('booster_dose_two_date', ApplicantsDetails.booster_dose_two_date);

            formData.append('yellow_date', ApplicantsDetails.yellow_date);
            formData.append('yellow_place', ApplicantsDetails.yellow_place);
    
            formData.append('visa_rejection', ApplicantsDetails.visa_rejection);
            formData.append('explain_visa_rejection', ApplicantsDetails.explain_visa_rejection);
            formData.append('visa_revoked', ApplicantsDetails.visa_revoked);
            formData.append('explain_visa_revoked', ApplicantsDetails.explain_visa_revoked);
            formData.append('country_deported', ApplicantsDetails.country_deported);
            formData.append('explain_country_deported', ApplicantsDetails.explain_country_deported);
            // formData.append('explain_visa', ApplicantsDetails.explain_visa);
            
            formData.append('court_inquiry', ApplicantsDetails.court_inquiry);
            formData.append('explain_court', ApplicantsDetails.explain_court);
            formData.append('certificate_suspended', ApplicantsDetails.certificate_suspended);
            formData.append('explain_certificate', ApplicantsDetails.explain_certificate);
            formData.append('covid_infected', ApplicantsDetails.covid_infected);
            formData.append('explain_covid', ApplicantsDetails.explain_covid);

            formData.append('future_vacancies', ApplicantsDetails.future_vacancies);
            formData.append('declaration_date', ApplicantsDetails.declaration_date);
    
            formData.append('master', ApplicantsDetails.master);
            formData.append('chief_officer', ApplicantsDetails.chief_officer);
            formData.append('second_officer', ApplicantsDetails.second_officer);
            formData.append('third_officer', ApplicantsDetails.third_officer);
            formData.append('deck_cadet', ApplicantsDetails.deck_cadet);
            formData.append('bosun', ApplicantsDetails.bosun);
            formData.append('ab', ApplicantsDetails.ab);
            formData.append('os', ApplicantsDetails.os);
            formData.append('chief_engineer', ApplicantsDetails.chief_engineer);
            formData.append('second_engineer', ApplicantsDetails.second_engineer);
            formData.append('third_engineer', ApplicantsDetails.third_engineer);
            formData.append('fourth_engineer', ApplicantsDetails.fourth_engineer);
            formData.append('fifth_engineer', ApplicantsDetails.fifth_engineer);
            formData.append('electrical_officer', ApplicantsDetails.electrical_officer);
            formData.append('fitter', ApplicantsDetails.fitter);
            formData.append('oiler', ApplicantsDetails.oiler);
            formData.append('wpr', ApplicantsDetails.wpr);
            formData.append('ch_cook', ApplicantsDetails.ch_cook);
            formData.append('messman', ApplicantsDetails.messman);
            formData.append('ecdis', ApplicantsDetails.ecdis);
            formData.append('geared', ApplicantsDetails.geared);
            formData.append('grab', ApplicantsDetails.grab);
    
            // Append JSON objects
            formData.append("documents", JSON.stringify(documents));
            formData.append("education", JSON.stringify(education));
            formData.append("preseaeducation", JSON.stringify(preseaeducation));
            formData.append("service", JSON.stringify(service));
            formData.append("certificate", JSON.stringify(certificate));
            formData.append("hkcertificate", JSON.stringify(hkcertificate));
            formData.append("course", JSON.stringify(course));
            formData.append("family", JSON.stringify(family));
            formData.append("reference", JSON.stringify(reference));
    
            // Append files
            if (photo) formData.append('photo', photo);
            if (signature) formData.append('signature', signature);
            if (photoFile) formData.append('photo', photoFile);

            // formData.append('photo', photoFile);
                //     const formData = new FormData();
                //     formData.append('photo', photoFile);

            console.log("This is Response:", formData);
    
            // const response = await axios.post(`http://localhost:3001/applicants/create`, formData,{
            const response = await axios.post(`https://njs.solminds.com/chellship/api/applicants/create`, formData,{
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data' 
                },
                maxRedirects: 0
            });
            console.log("Full Response Data:", response.data);
            alert('Applicant details submitted successfully!');
    
            const applicant_id = response.data.applicant.applicant_id;
            console.log("responsedata",response)
            if (applicant_id) {
                // await axios.get(`http://localhost:3001/impex/export/${applicant_id}`);
                await axios.get(`https://njs.solminds.com/chellship/api/impex/export/${applicant_id}`);
                navigate('/complete', { state: { applicant_id } });
            } else {
                console.error('Error: Missing applicant_id in response');
                alert('Failed to retrieve applicant ID.');
                setIsSubmitting(false);
            }
    
        } catch (error) {
            console.error('Error adding Applicant:', error);
            alert('Error submitting form.');
            setIsSubmitting(false);
        }
    };
    



return (
    <>
        {/* <Header/> */}
        <div className="flex justify-end px-8">
            <button type="button" onClick={scrollToSeaExperience} className="goto-experience-section text-blue-600 hover:underline">
                Go to SEA EXPERIENCE section
            </button>
        </div>
        <h1 className='application-form text-center text-3xl m-3 py-5'><b>Application form</b></h1>
        <form onSubmit={handleSubmit}>
            <div className='flex min-h-full flex-col justify-center lg:px-8 py-3'>
                <div className='info-container border border-gray-300 rounded-md p-3 shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
                    <div className='grid grid-cols-2'>
                        <div className='flexbox items-center p-4'>
                            <label htmlFor="position_applied_for" className="text-sm font-medium text-gray-900">
                                Position Applied for : 
                            </label>
                            <input id="position_applied_for" name="position_applied_for" value={ApplicantsDetails.position_applied_for} type="text" onChange={handleApplicantChange} required className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-4'>
                            <label htmlFor="date_available" className="text-sm font-medium text-gray-900">
                                Date Available to join : 
                            </label>
                            <input id="date_available" value={ApplicantsDetails.date_available} onChange={handleApplicantChange} name="date_available" type="date" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                                <label htmlFor="introduction" className="text-sm font-medium text-gray-900">
                                    How were you introduced to Chellaram Shipping?
                                </label><br />
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 w-full text-sm font-medium text-gray-900 bg-white p-2">
                                    <label htmlFor="Advertisement" className="flex items-center space-x-2 p-2">
                                        <input
                                            id="Advertisement"
                                            name="introduction"
                                            type="radio"
                                            value="Advertisement"
                                            onChange={handleApplicantChange}
                                            checked={ApplicantsDetails.introduction === 'Advertisement'}
                                            className="w-4 h-4 text-blue-600"
                                        />
                                        <span>Advertisement - Seamen's Club / Newspaper / Shipping Publication</span>
                                    </label>

                                    <label htmlFor="Internet" className="flex items-center space-x-2 p-2">
                                        <input
                                            id="Internet"
                                            name="introduction"
                                            type="radio"
                                            value="Internet"
                                            onChange={handleApplicantChange}
                                            checked={ApplicantsDetails.introduction === 'Internet'}
                                            className="w-4 h-4 text-blue-600"
                                        />
                                        <span>Internet - Company's website / Other site</span>
                                    </label>

                                    <label htmlFor="Friend" className="flex items-center space-x-2 p-2">
                                        <input
                                            id="Friend"
                                            name="introduction"
                                            type="radio"
                                            value="Friend"
                                            onChange={handleApplicantChange}
                                            checked={ApplicantsDetails.introduction === 'Friend'}
                                            className="w-4 h-4 text-blue-600"
                                        />
                                        <span>Friend(s) - in Chellaram Shipping / not in Chellaram Shipping</span>
                                    </label>

                                    <label htmlFor="Others" className="flex items-center space-x-2 p-2">
                                        <input
                                            id="Others"
                                            name="introduction"
                                            type="radio"
                                            value="Others"
                                            onChange={handleApplicantChange}
                                            checked={ApplicantsDetails.introduction === 'Others'}
                                            className="w-4 h-4 text-blue-600"
                                        />
                                        <span>Others</span>
                                    </label>
                                </div>

                                    {ApplicantsDetails.introduction === 'Others' && (
                                        <div className="m-2">
                                        <label htmlFor="others_explain" className="text-sm font-medium text-gray-900">
                                            Specify Here:
                                        </label>
                                        <textarea 
                                            id="others_explain" 
                                            name="others_explain" 
                                            value={ApplicantsDetails.others_explain}
                                            
                                            onChange={handleApplicantChange} 
                                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
                                        />
                                        </div>
                                    )}
                        </div>
                    </div><br />
                </div>
            </div>

            

                <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
                    <h4 className='personal-particulars bold text-center'><b>Personal Particulars</b></h4>
                        <div className='personal-container border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
                                <div className='grid sm:grid-cols-3 grid-cols-1 p-2'>
                                    <div className='col-span-1 flexbox items-center'>
                                        <label htmlFor="indos_no" className="text-sm font-medium text-gray-900">
                                            INDOS No : 
                                        </label>
                                        <input id="indos_no" value={ApplicantsDetails.indos_no} onChange={handleApplicantChange} name="indos_no" type="text" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                    </div>
                                </div><br/>

                                    Name (as per passport) : <br />
                                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                                        <div className='flexbox items-center p-2'>
                                            <label htmlFor="last_name" className="text-sm font-medium text-gray-900">
                                                Last : 
                                            </label>
                                            <input id="last_name" value={ApplicantsDetails.last_name} onChange={handleApplicantChange} name="last_name" type="text" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                        </div>

                                        <div className='flexbox items-center p-2'>
                                            <label htmlFor="first_name" className="text-sm font-medium text-gray-900">
                                                First : 
                                            </label>
                                            <input id="first_name" value={ApplicantsDetails.first_name} onChange={handleApplicantChange} name="first_name" type="text" required className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                        </div>

                                        <div className='flexbox items-center p-2'>
                                            <label htmlFor="middle_name" className="text-sm font-medium text-gray-900">
                                                Middle :
                                            </label>
                                            <input id="middle_name" value={ApplicantsDetails.middle_name} onChange={handleApplicantChange} name="middle_name" type="text" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                        </div>
                                    </div>

                                <div className='grid sm:grid-cols-3 grid-cols-1'>
                                    <div className='flexbox items-center p-2'>
                                        <label htmlFor="date_of_birth" className="text-sm font-medium text-gray-900">
                                            Date of Birth : 
                                        </label>
                                        <input id="date_of_birth" value={ApplicantsDetails.date_of_birth} onChange={handleApplicantChange} name="date_of_birth" type="date" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                    </div>

                                    <div className='flexbox items-center p-2'>
                                        <label htmlFor="age" className="text-sm font-medium text-gray-900">
                                            Age : 
                                        </label>
                                        <input id="age" readOnly value={ApplicantsDetails.age} onChange={handleApplicantChange} name="age" type="number" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                    </div>

                                    <div className='flexbox items-center p-2'>
                                        <label htmlFor="place_of_birth" className="text-sm font-medium text-gray-900">
                                            Place of Birth :
                                        </label>
                                        <input id="place_of_birth"  value={ApplicantsDetails.place_of_birth} onChange={handleApplicantChange} name="place_of_birth" type="text" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3'>
                                    <div className='flexbox items-center p-2'>
                                        <label htmlFor="height" className="text-sm font-medium text-gray-900">
                                            Height (cm) : 
                                        </label>
                                        <input id="height" value={ApplicantsDetails.height} onChange={handleApplicantChange} name="height" type="number" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                    </div>

                                    <div className='flexbox items-center p-2'>
                                        <label htmlFor="weight" className="text-sm font-medium text-gray-900">
                                            Weight (kg) : 
                                        </label>
                                        <input id="weight" value={ApplicantsDetails.weight} onChange={handleApplicantChange} name="weight" type="number" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                    </div>

                                    <div className='flexbox items-center p-2'>
                                        <label htmlFor="bmi" className="text-sm font-medium text-gray-900">
                                            BMI : 
                                        </label>
                                        <input id="bmi" readOnly value={ApplicantsDetails.bmi} onChange={handleApplicantChange} name="bmi" type="number" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                    </div>
                                </div>

                                <div className="p-1 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <label className="text-sm font-medium text-gray-900 whitespace-nowrap">Marital Status:</label>
                                    <div className="grid grid-cols-3 sm:flex items-center gap-2 sm:gap-4">
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="marital_status" value="Single" onChange={handleApplicantChange} checked={ApplicantsDetails.marital_status === "Single"} />
                                            <span>Single</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="marital_status" value="Married" onChange={handleApplicantChange} checked={ApplicantsDetails.marital_status === "Married"} />
                                            <span>Married</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="marital_status" value="Divorced" onChange={handleApplicantChange} checked={ApplicantsDetails.marital_status === "Divorced"} />
                                            <span>Divorced</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="marital_status" value="Separated" onChange={handleApplicantChange} checked={ApplicantsDetails.marital_status === "Separated"} />
                                            <span>Separated</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="marital_status" value="Widowed" onChange={handleApplicantChange} checked={ApplicantsDetails.marital_status === "Widowed"} />
                                            <span>Widowed</span>
                                        </label>
                                    </div>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <div className='flex flex-col p-2'>
                                        <label htmlFor="nationality" className="text-sm font-medium text-gray-900 mb-1">
                                            Nationality:
                                        </label>
                                        <select
                                            id="nationality"
                                            name="nationality"
                                            value={ApplicantsDetails.nationality}
                                            onChange={handleApplicantChange}
                                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                            <option value="">Select Nationality</option>
                                            {[
                                                "India", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
                                                "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
                                                "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
                                                "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
                                                "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
                                                "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
                                                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
                                                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
                                                "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
                                                "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
                                                "Hungary", "Iceland", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
                                                "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
                                                "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
                                                "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
                                                "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
                                                "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
                                                "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
                                                "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
                                                "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
                                                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
                                                "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
                                                "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
                                                "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
                                                "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
                                                "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
                                                "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
                                                "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                                            ].map((country) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className='flex flex-col p-2'>
                                        <label htmlFor="religion" className="text-sm font-medium text-gray-900 mb-1">
                                            Religion:
                                        </label>
                                        <select
                                            id="religion"
                                            name="religion"
                                            value={ApplicantsDetails.religion}
                                            onChange={handleApplicantChange}
                                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                            <option value="">Select Religion</option>
                                            {[
                                                "Hinduism",
                                                "Islam",
                                                "Christianity",
                                                "Sikhism",
                                                "Buddhism",
                                                "Jainism",
                                                "Judaism",
                                                "Zoroastrianism",
                                                "Other"
                                            ].map((religion) => (
                                                <option key={religion} value={religion}>
                                                    {religion}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className='grid sm:grid-cols-2 grid-cols-1'>
                                    <div className='flexbox items-center p-2'>
                                        <label htmlFor="mother_tongue" className="text-sm font-medium text-gray-900">
                                            Mother Tongue :
                                        </label>
                                        <input id="mother_tongue"  value={ApplicantsDetails.mother_tongue} onChange={handleApplicantChange} name="mother_tongue" type="text" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flexbox items-center p-2'>
                                            <label htmlFor="spoken_languages" className="text-sm font-medium text-gray-900">
                                                Spoken Languages : 
                                            </label>
                                            <input id="spoken_languages" value={ApplicantsDetails.spoken_languages} onChange={handleApplicantChange} name="spoken_languages" type="text" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                        </div>

                                        <div className='flexbox items-center p-2'>
                                            <label htmlFor="written_languages" className="text-sm font-medium text-gray-900">
                                                Written Languages : 
                                            </label>
                                            <input id="written_languages" value={ApplicantsDetails.written_languages} onChange={handleApplicantChange} name="written_languages" type="text" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-2'>
                                    <div className='flexbox items-center p-2'>
                                        <label htmlFor="native_place" className="text-sm font-medium text-gray-900">
                                            Native Place :
                                        </label>
                                        <input id="native_place"  value={ApplicantsDetails.native_place} onChange={handleApplicantChange} name="native_place" type="text" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                    </div>

                                    <div className='flexbox items-center p-2'>
                                        <label htmlFor="current_resident" className="text-sm font-medium text-gray-900">
                                            Currently Resident : 
                                        </label>
                                        <input id="current_resident" value={ApplicantsDetails.current_resident} onChange={handleApplicantChange} name="current_resident" type="text" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                                    </div>
                                </div>

                        <div className='p-3'>
                            <label htmlFor="permanent_address" className="text-sm font-medium text-gray-900">
                                Permanent Address : 
                            </label>
                            <textarea id="permanent_address" name="permanent_address" value={ApplicantsDetails.permanent_address} onChange={handleApplicantChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='grid sm:grid-cols-3 grid-cols-1 p-1'>
                            <div className='flexbox items-center p-2'>
                                    <label htmlFor="permanent_tel" className="text-sm font-medium text-gray-900">
                                        Tel No : 
                                    </label>
                                <input id="permanent_tel" name="permanent_tel" type="tel" value={ApplicantsDetails.permanent_tel} onChange={handleApplicantChange}  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>

                            <div className='flexbox items-center p-2'>
                                <label htmlFor="permanent_mobile" className="text-sm font-medium text-gray-900">
                                    Mobile : 
                                </label>
                                <input id="permanent_mobile" name="permanent_mobile" type="tel"  value={ApplicantsDetails.permanent_mobile} onChange={handleApplicantChange} required  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>

                            <div className='flexbox items-center p-2'>
                                <label htmlFor="permanent_email" className="text-sm font-medium text-gray-900">
                                    Email : 
                                </label>
                                <input id="permanent_email" name="permanent_email" type="mail"  value={ApplicantsDetails.permanent_email} onChange={handleApplicantChange}  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>
                        </div>

                        <div className='grid sm:grid-cols-3 grid-cols-1 p-1'>
                            <div className='flexbox items-center p-2 col-span-2'>
                                <label htmlFor="permanent_airport" className="text-sm font-medium text-gray-900">
                                    Nearest Airport : 
                                </label>
                                <input id="permanent_airport" name="permanent_airport" type="mail"  value={ApplicantsDetails.permanent_airport} onChange={handleApplicantChange}  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>
                        </div><br/><br/>

                        <div className="p-3">
                            <input
                                type="checkbox"
                                id="same_as_permanent"
                                onChange={handleCheckboxChange}
                                className="mr-2"/>
                            <label htmlFor="same_as_permanent" className="text-sm font-medium text-gray-900">
                                Present Address same as Permanent Address
                            </label>
                        </div>


                        <div className='p-3'>
                        <label htmlFor="present_address" className="text-sm font-medium text-gray-900">
                            Present Address :
                        </label>
                        <textarea id="present_address" name="present_address" type="text" value={ApplicantsDetails.present_address} onChange={handleApplicantChange}  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='grid sm:grid-cols-3 grid-cols-1 p-1'>
                        <div className='flexbox items-center p-2'>
                            <label htmlFor="present_tel" className="text-sm font-medium text-gray-900">
                                Tel No :
                            </label>
                            <input id="present_tel" name="present_tel" type="tel" value={ApplicantsDetails.present_tel} onChange={handleApplicantChange}  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="present_mobile" className="text-sm font-medium text-gray-900">
                                Mobile :
                            </label>
                            <input id="present_mobile" name="present_mobile" type="tel" value={ApplicantsDetails.present_mobile} onChange={handleApplicantChange}  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="present_email" className="text-sm font-medium text-gray-900">
                                Email :
                            </label>
                            <input id="present_email" name="present_email" type="mail" value={ApplicantsDetails.present_email} onChange={handleApplicantChange}  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>

                    <div className='grid sm:grid-cols-3 grid-cols-1 p-1'>
                        <div className='flexbox items-center p-2 col-span-2'>
                            <label htmlFor="present_airport" className="text-sm font-medium text-gray-900">
                                Nearest Airport : 
                            </label>
                            <input id="present_airport" name="present_airport" type="mail"  value={ApplicantsDetails.present_airport} onChange={handleApplicantChange}  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>


{/* Photo Capture Section */}
<div className="p-4">
    {/* Instruction */}
    <p className="text-center text-gray-700 mb-2">
        <b>Select a photo from your device or take one using the camera.</b>
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-1">
        {/* File Upload */}
        <div className="flex flex-col">
            <label htmlFor="photo" className="text-sm font-medium text-gray-900">
                Upload Photo:
            </label>
            <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            />
        </div>

        {/* Camera Section */}
        <div className="flex flex-col items-center">
            {cameraOn ? (
                <>
                    <video ref={videoRef} autoPlay className="w-64 h-48 border transform -scale-x-100"></video> 
                    <button onClick={capturePhoto} className="capture-camera-button mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                        Capture Photo
                    </button>
                </>
            ) : (
                <button type="button" onClick={startCamera} className="use-camera-button mt-2 bg-green-500 text-white px-4 py-2 rounded">
                    Use Camera
                </button>
            )}
        </div>
    </div>

    {/* Preview Captured Image */}
    {photo && (
        <div className="mt-4">
            <p className="text-center text-gray-700">Captured Photo Preview:</p>
            <img src={photo} alt="Captured" className="w-64 h-48 border mx-auto" />
        </div>
    )}

    <canvas ref={canvasRef} width="640" height="480" className="hidden"></canvas>
</div>
                </div><br />
            </div>

                <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
                        <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
                            <h4 className='family-particulars bold text-center'><b>Family Particulars</b></h4>
                            <div className='family-container border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>

                                <div>
                                    <div className='grid sm:grid-cols-3 grid-cols-1 gap-2 items-center'>
                                        <div className='flexbox items-center p-4'>
                                            <h5>Emergency Contact :</h5>
                                        </div>
                                        <div className='flexbox items-center p-4'>
                                            <label htmlFor="emergency_name" className="text-sm font-medium text-gray-900">
                                                Name : 
                                            </label>
                                            <input id="emergency_name" value={ApplicantsDetails.emergency_name} onChange={handleApplicantChange} name="emergency_name" type="text"  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                        </div>

                                        <div className='flexbox items-center p-4'>
                                            <label htmlFor="emergency_relationship" className="text-sm font-medium text-gray-900">
                                                Relationship : 
                                            </label>
                                            <input id="emergency_relationship" value={ApplicantsDetails.emergency_relationship} onChange={handleApplicantChange} name="emergency_relationship" type="text" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className='p-1'>
                                            <label htmlFor="emergency_address" className="text-sm font-medium text-gray-900">
                                                Address : 
                                            </label>
                                            <textarea id="emergency_address" value={ApplicantsDetails.emergency_address} onChange={handleApplicantChange} name="emergency_address" type="text"className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-2'>
                                        <div className='flexbox items-center p-4'>
                                            <label htmlFor="emergency_tel" className="text-sm font-medium text-gray-900">
                                                Tel No : 
                                            </label>
                                            <input id="emergency_tel" value={ApplicantsDetails.emergency_tel} onChange={handleApplicantChange} name="emergency_tel" type="tel" className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                        </div>
                                        <div className='flexbox items-center p-4'>
                                            <label htmlFor="emergency_email" className="text-sm font-medium text-gray-900">
                                                Email :
                                            </label>
                                            <input id="emergency_email" value={ApplicantsDetails.emergency_email} onChange={handleApplicantChange} name="emergency_email" type="mail"  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div className='family-multiple-container border border-gray-300 m-3 rounded-md shadow-lg py-3'>
                                        {family.map((family, index) => (
                                            <div key={index} className='family-member-card border border-gray-300 m-3 rounded-md shadow-lg py-3'>
                                                <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
                                                    <div className="flex flex-col space-y-2 p-4">
                                                        <label htmlFor={`family_member${index}`} className="text-sm font-medium text-gray-900">
                                                            Family Member:
                                                        </label>
                                                        <select
                                                            id={`family_member${index}`}
                                                            name="family_member"
                                                            value={family.family_member}  
                                                            onChange={(e) => handleFamilyChange(index, "family_member", e.target.value)} 
                                                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm">
                                                            <option value="">Select Family Member</option>
                                                            <option value="Wife">Wife</option>
                                                            <option value="Child-1">Child - 1</option>
                                                            <option value="Child-2">Child - 2</option>
                                                            <option value="Child-3">Child - 3</option>
                                                        </select>
                                                    </div>

                                            <div className="flex flex-col space-y-2 p-4">
                                                <label htmlFor={`family_member_name${index}`} className="text-sm font-medium text-gray-900">
                                                    Family Member Name:
                                                </label>
                                                <input
                                                    id={`family_member_name${index}`}
                                                    name="family_member_name"
                                                    type="text"
                                                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                    value={family.family_member_name} onChange={(e) => handleFamilyChange(index, "family_member_name", e.target.value)}/>
                                            </div>

                                            <div className="flex flex-col space-y-2 p-4">
                                                <label htmlFor={`sex${index}`} className="text-sm font-medium text-gray-900">
                                                    Sex:
                                                </label>
                                                <select
                                                    id={`sex${index}`}
                                                    name="sex"
                                                    onChange={(e) => handleFamilyChange(index, "sex", e.target.value)}
                                                    value={family.sex}
                                                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm">
                                                    <option value="">Select Sex</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>

                                            <div className="flex flex-col space-y-2 p-4">
                                                <label htmlFor={`family_date_of_birth${index}`} className="text-sm font-medium text-gray-900">
                                                    DOB:
                                                </label>
                                                <input
                                                    id={`family_date_of_birth${index}`}
                                                    name="family_date_of_birth"
                                                    type="date"
                                                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                    value={family.family_date_of_birth} onChange={(e) => handleFamilyChange(index, "family_date_of_birth", e.target.value)}/>
                                            </div>

                                            <div className="flex flex-col space-y-2 p-4">
                                                <label htmlFor={`passport_number${index}`} className="text-sm font-medium text-gray-900">
                                                    Passport Number:
                                                </label>
                                                <input
                                                    id={`passport_number${index}`}
                                                    name="passport_number"
                                                    type="text"
                                                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                    value={family.passport_number} onChange={(e) => handleFamilyChange(index, "passport_number", e.target.value)}
                                                    />
                                            </div>

                                            <div className="flex flex-col space-y-2 p-4">
                                                <label className="text-sm font-medium text-gray-900" htmlFor={`ECNR${index}`}>
                                                    ECNR
                                                </label>
                                                <div className="flex space-x-4">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name={`ECNR${index}`}
                                                            value="Yes"
                                                            checked={family.ECNR === 'Yes'}
                                                            onChange={(e) => handleFamilyChange(index, "ECNR", e.target.value)}
                                                        />
                                                        <span className="ml-2">Yes</span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name={`ECNR${index}`}
                                                            value="No"
                                                            checked={family.ECNR === 'No'}
                                                            onChange={(e) => handleFamilyChange(index, "ECNR", e.target.value)}
                                                        />
                                                        <span className="ml-2">No</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="flex flex-col space-y-2 p-4">
                                                <label htmlFor={`date_issued${index}`} className="text-sm font-medium text-gray-900">
                                                    Date Issued:
                                                </label>
                                                <input
                                                    id={`date_issued${index}`}
                                                    name="date_issued"
                                                    type="date"
                                                    value={family.date_issued} onChange={(e) => handleFamilyChange(index, "date_issued", e.target.value)}
                                                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                />
                                            </div>

                                            <div className="flex flex-col space-y-2 p-4">
                                                <label htmlFor={`place_issued${index}`} className="text-sm font-medium text-gray-900">
                                                    Place Issued:
                                                </label>
                                                <input
                                                    id={`place_issued${index}`}
                                                    name="place_issued"
                                                    type="text"
                                                    value={family.place_issued} onChange={(e) => handleFamilyChange(index, "place_issued", e.target.value)}
                                                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"/>
                                            </div> 
                                        </div>
                                        </div>
                                    ))}
                                               
                                               {family.length === 1 && (
                                                <p className="text-sm text-gray-600 mb-2 text-center">
                                                    If you have multiple family members to enter, click the <b>"Add"</b> button to include more.
                                                </p>
                                            )}
                                        <div className="flex justify-center my-4">
                                            <button
                                                type="button"
                                                onClick={addFamily}
                                                className="family-add-button bg-indigo-600 text-white py-1 px-1 rounded-md hover:bg-indigo-500 m-2">
                                                + Add
                                            </button>

                                            {family.length > 1 && (
                                                <button
                                                type="button"
                                                onClick={cancelLastFamily}
                                                className="cancel-button bg-red-600 text-white py-1 px-3 rounded-md m-2">
                                                Cancel
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>





                <div className='flex min-h-full flex-col justify-center lg:px-8'>
                    <div className='flex min-h-full flex-col justify-center lg:px-8'>
                        <h4 className='education-background bold text-center'>
                            <b>Educational Background - prior Pre-Sea Training</b>
                        </h4>
                        <div className='education-container border border-gray-300 rounded-md p-6 shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
                        {education.map((education, index) => (
                            <div key={index} className='education-card grid grid-cols-1 gap-4 border border-gray-300 rounded-md m-3 p-3'>
                                <div className='flexbox items-center'>
                                    <label htmlFor={`school_name${index}`} className="text-sm font-medium text-gray-900">
                                        Name : School / College : 
                                    </label>
                                    <input
                                        id={`school_name${index}`}
                                        name="school_name" 
                                        value={education.school_name} 
                                        onChange={(e) => handleEducationChange(index, "school_name", e.target.value)}
                                        type="text" 
                                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
                                    />
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
                                    <div className='flexbox items-center'>
                                        <label htmlFor={`from_date${index}`} className="text-sm font-medium text-gray-900">
                                            From : 
                                        </label>
                                        <input 
                                            id={`from_date${index}`}
                                            name="from_date" 
                                            value={education.from_date} 
                                            onChange={(e) => handleEducationChange(index, "from_date", e.target.value)}
                                            type="date" 
                                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
                                        />
                                    </div>
                                    <div className='flexbox items-center'>
                                        <label htmlFor={`to_date${index}`} className="text-sm font-medium text-gray-900">
                                            To : 
                                        </label>
                                        <input 
                                            id={`to_date${index}`} 
                                         
                                            name="to_date" 
                                            value={education.to_date}  
                                            onChange={(e) => handleEducationChange(index, "to_date", e.target.value)}
                                            type="date" 
                                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
                                        />
                                    </div>
                                </div>
                                <div className='flexbox items-center'>
                                    <label htmlFor={`percentage${index}`} className="text-sm font-medium text-gray-900">
                                        Percentage Marks Scored : 
                                    </label>
                                    <input 
                                        id={`percentage${index}`}
                                     
                                        name="percentage" 
                                        value={education.percentage} 
                                        onChange={(e) => handleEducationChange(index, "percentage", e.target.value)}
                                        type="text" 
                                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
                                    />
                                </div>
                                <div className='flexbox items-center'>
                                    <label htmlFor={`position_degree_diploma${index}`} className="text-sm font-medium text-gray-900">
                                        Position / Degree / Diploma : 
                                    </label>
                                    <input 
                                        id={`position_degree_diploma${index}`}
                                     
                                        name="position_degree_diploma" 
                                        value={education.position_degree_diploma}  
                                        onChange={(e) => handleEducationChange(index, "position_degree_diploma", e.target.value)}
                                        type="text" 
                                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
                                    />
                                </div>
                            </div>
                        ))}
                            {education.length === 1 && (
                                <p className="text-sm text-gray-600 mb-2 text-center">
                                    If you have multiple Educational Backgrounds, click the <b>"Add"</b> button to add more.
                                </p>
                            )}
                            <div className="flex justify-center my-4">
                                <button
                                    type="button"
                                    onClick={addEducation}
                                    className="education-add-button bg-indigo-600 text-white py-1 px-1 rounded-md hover:bg-indigo-500 m-2">
                                    + Add
                                </button>

                                {education.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={cancelLastEducation}
                                        className="cancel-button bg-red-600 text-white py-1 px-3 rounded-md m-2">
                                        Cancel
                                    </button>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

            <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
                <h4 className='pre-sea-training bold text-center'><b>Pre-Sea Training</b></h4>
                <div className='presea-container border border-gray-300 rounded-md p-3 shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
                    <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
                        <p>Deck Officers - If no Pre Sea training done, then state the “Direct” cadet period. <br />
                        Engineer Officers - To additionally state the name of the workshop attended
                        </p>
                        {preseaeducation.map((preseaeducation, index) => (
                            <div className='presea-card grid grid-cols-1 sm:grid-cols-3 gap-4 m-3 border border-gray-300 rounded-md p-3 shadow-lg'>
                                <div className='flexbox items-center'>
                                    <label htmlFor={`institute_name${index}`} className="text-sm font-medium text-gray-900">
                                        Pre Sea Training Institute : 
                                    </label>
                                    <input 
                                        id={`institute_name${index}`}
                                        name="institute_name" 
                                        type="text" 
                                        value={preseaeducation.institute_name} 
                                        onChange={(e) => handlePreSeaEducationChange(index, "institute_name", e.target.value)}
                                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                </div>
                                <div className='grid gap-4'>
                                    <div className='flexbox items-center'>
                                        <label htmlFor={`pre_sea_from_date${index}`} className="text-sm font-medium text-gray-900">
                                            Date Commenced : 
                                        </label>
                                        <input 
                                            id={`pre_sea_from_date${index}`}
                                            name="pre_sea_from_date" 
                                            value={preseaeducation.pre_sea_from_date} 
                                            onChange={(e) => handlePreSeaEducationChange(index, "pre_sea_from_date", e.target.value)}
                                            type="date" 
                                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
                                        />
                                    </div>
                                    <div className='flexbox items-center'>
                                        <label htmlFor={`pre_sea_to_date${index}`} className="text-sm font-medium text-gray-900">
                                            Date Completed : 
                                        </label>
                                        <input 
                                            id={`pre_sea_to_date${index}`} 
                                            name="pre_sea_to_date" 
                                            value={preseaeducation.pre_sea_to_date} 
                                            onChange={(e) => handlePreSeaEducationChange(index, "pre_sea_to_date", e.target.value)}
                                            type="date" 
                                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
                                        />
                                    </div>
                                </div>
                                <div className='grid gap-4'>
                                    <div className='flexbox items-center'>
                                        <label htmlFor={`course${index}`} className="text-sm font-medium text-gray-900">
                                            Degree / Diploma / Certificate : 
                                        </label>
                                        <input 
                                            id={`course${index}`} 
                                         
                                            name="course" 
                                            value={preseaeducation.course} 
                                            onChange={(e) => handlePreSeaEducationChange(index, "course", e.target.value)}
                                            type="text" 
                                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
                                        />
                                    </div>
                                    <div className='flexbox items-center'>
                                        <label htmlFor={`class_obtained${index}`} className="text-sm font-medium text-gray-900">
                                            Class Obtained :
                                        </label>
                                        <input 
                                            id={`class_obtained${index}`} 
                                            name="class_obtained" 
                                            value={preseaeducation.class_obtained} 
                                            onChange={(e) => handlePreSeaEducationChange(index, "class_obtained", e.target.value)}
                                            type="text" 
                                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
                                        />
                                    </div>
                                </div>
                                <div className='flexbox items-center col-span-1 sm:col-span-3 '>
                                    <label htmlFor={`name_of_workshop${index}`}className="text-sm font-medium text-gray-900">
                                        Name of Workshop : 
                                    </label>
                                    <input 
                                        id={`name_of_workshop${index}`}
                                     
                                        name="name_of_workshop" 
                                        value={preseaeducation.name_of_workshop} 
                                        onChange={(e) => handlePreSeaEducationChange(index, "name_of_workshop", e.target.value)}
                                        type="text" 
                                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
                                    />
                                </div>
                            </div>
                            ))}

                            {preseaeducation.length === 1 && (
                                <p className="text-sm text-gray-600 mb-2 text-center">
                                    If you have multiple Pre-Sea Trainings completed, click the <b>"Add"</b> button to add more.
                                </p>
                            )}

                            <div className="flex justify-center my-4">
                                <button
                                    type="button"
                                    onClick={addPreSeaEducation}
                                    className="presea-add-button bg-indigo-600 text-white py-1 px-1 rounded-md hover:bg-indigo-500 m-2">
                                    + Add
                                </button>

                                {preseaeducation.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={cancelLastPreseaeducation}
                                        className="cancel-button bg-red-600 text-white py-1 px-3 rounded-md m-2">
                                        Cancel
                                    </button>
                                )}
                            </div>
                    </div>
                </div>
            </div>



{/* {documents.map((doc, index) => ( */}
<h4 className="identity-documents bold text-center">
<b>Personal Identity Documents Held</b>
</h4>
<div className="documents-container border border-gray-300 rounded-md shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6 m-3">
    {documents.map((document, index) => (
        <div key={index} className="documents-card grid sm:grid-cols-2 lg:grid-cols-3 gap-4 border border-gray-300 m-3 rounded-md shadow-lg py-6">
            {/* Document Type */}
            <div className="flex flex-col items-start p-2">
                <label htmlFor={`document_type_${index}`} className="text-sm font-medium text-gray-900">
                    Documents:
                </label>
                <select
                    id={`document_type_${index}`}
                    name="document_type"
                    value={document.document_type}
                    onChange={(e) => handleDocumentChange(index, "document_type", e.target.value)}
                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                    <option value="">Select Document</option>
                    <option value="passport">Passport</option>
                    <option value="Indian CDC">Indian CDC</option>
                    <option value="Seafarers ID">Seafarers ID</option>
                    <option value="Seaman Book">Seaman Book</option>
                    <option value="US C1/D Visa">US C1/D Visa</option>
                    <option value="Valid Visa">Valid Visa</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Document Country */}
            <div className="flex flex-col items-start p-2">
            <label htmlFor={`document_country_${index}`} className="text-sm font-medium text-gray-900">
                Country:
            </label>
            <select
                id={`document_country_${index}`}
                name="document_country"
                value={document.document_country}
                onChange={(e) => handleDocumentChange(index, "document_country", e.target.value)}
                disabled={
                    document.document_type === "Indian CDC" || document.document_type === "US C1/D Visa"
                }
                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                <option value="">Select Country</option>
                {[
                    "India", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
                    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
                    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
                    "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
                    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
                    "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
                    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
                    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
                    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
                    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
                    "Hungary", "Iceland", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
                    "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
                    "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
                    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
                    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
                    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
                    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
                    "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
                    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
                    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
                    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
                    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
                    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
                    "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
                    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
                    "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
                    "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                ].map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>
        </div>


            {/* Document Number */}
            <div className="flex flex-col items-start p-2">
                <label htmlFor={`document_number_${index}`} className="text-sm font-medium text-gray-900">
                    Number:
                </label>
                <input
                    id={`document_number_${index}`}
                    name="document_number"
                    type="text"
                    value={document.document_number}
                    onChange={(e) => handleDocumentChange(index, "document_number", e.target.value)}
                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                />
            </div>

            {/* Issue Date */}
            <div className="flex flex-col items-start p-2">
                <label htmlFor={`document_from_date_${index}`} className="text-sm font-medium text-gray-900">
                    Issue Date:
                </label>
                <input
                    id={`document_from_date_${index}`}
                    name="document_from_date"
                    type="date"
                    value={document.document_from_date}
                    onChange={(e) => handleDocumentChange(index, "document_from_date", e.target.value)}
                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                />
            </div>

            {/* Expiry Date */}
            <div className="flex flex-col items-start p-2">
                <label htmlFor={`document_to_date_${index}`} className="text-sm font-medium text-gray-900">
                    Expiry Date:
                </label>
                <input
                    id={`document_to_date_${index}`}
                    name="document_to_date"
                    type="date"
                    value={document.document_to_date}
                    onChange={(e) => handleDocumentChange(index, "document_to_date", e.target.value)}
                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                />
            </div>

            {/* Place of Issue */}
            <div className="flex flex-col items-start p-2">
                <label htmlFor={`document_Place_issued_${index}`} className="text-sm font-medium text-gray-900">
                    Place of Issue:
                </label>
                <input
                    id={`document_Place_issued_${index}`}
                    name="document_Place_issued"
                    type="text"
                    value={document.document_Place_issued}
                    onChange={(e) => handleDocumentChange(index, "document_Place_issued", e.target.value)}
                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                />
            </div>
        </div>
    ))}

    {documents.length === 1 && (
        <p className="text-sm text-gray-600 mb-2 text-center">
            If you have multiple documents, click the <b>"Add"</b> button to add more.
        </p>
    )}
    {/* ))} */}
    <div className="flex justify-center my-4">
        <button
            type="button"
            onClick={addDocument}
            className="document-add-button bg-indigo-600 text-white py-1 px-1 rounded-md hover:bg-indigo-500 m-2">
            + Add
        </button>

                                
        {documents.length > 1 && (
            <button
                type="button"
                onClick={cancelLastDocument}
                className="cancel-button bg-red-600 text-white py-1 px-3 rounded-md m-2">
                Cancel
            </button>
        )}
    </div><br/>

    <div className='grid grid-cols-2'>
        <label className='text-sm font-medium text-gray-900 m-3' htmlFor="visa_rejection">
            Have you ever been rejected for any Visa Applied ? 
        </label>
        <div>
            <label>
                <input type="radio" 
                    name="visa_rejection" 
                    onChange={handleApplicantChange}
                    value="Yes"
                    checked={ApplicantsDetails.visa_rejection === 'Yes'}/>
                <span className="ml-2">Yes</span>
            </label> &nbsp;
            <label>
                <input type="radio" 
                    name="visa_rejection" 
                    onChange={handleApplicantChange}
                    value="No"
                    checked={ApplicantsDetails.visa_rejection === 'No'}/>
                <span className="ml-2">No</span>
            </label>
        </div>
    </div>

        {ApplicantsDetails.visa_rejection === 'Yes' && (
            <div className='grid grid-cols-2 gap-4 mt-4'>
                <label className='text-sm font-medium text-gray-900 m-3' htmlFor="explain_visa_rejection">
                If the answer is "Yes", please provide details:
                </label>
                <div>
                <textarea
                    id="explain_visa_rejection"
                    name="explain_visa_rejection"
                    value={ApplicantsDetails.explain_visa_rejection}
                    onChange={handleApplicantChange}
                    className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                />
                </div>
            </div>
        )}

    <div className='grid grid-cols-2'>
        <label className='text-sm font-medium text-gray-900 m-3' htmlFor="visa_revoked">
            Has any of your visas ever been revoked ? 
        </label>
        <div>
            <label>
                <input type="radio" 
                    name="visa_revoked" 
                    onChange={handleApplicantChange}
                    value="Yes"
                    checked={ApplicantsDetails.visa_revoked === 'Yes'}/>
                <span className="ml-2">Yes</span>
            </label> &nbsp;
            <label>
                <input type="radio" 
                    name="visa_revoked" 
                    onChange={handleApplicantChange}
                    value="No"
                    checked={ApplicantsDetails.visa_revoked === 'No'}/>
                <span className="ml-2">No</span>
            </label>
        </div>
    </div>

        {ApplicantsDetails.visa_revoked === 'Yes' && (
            <div className='grid grid-cols-2 gap-4 mt-4'>
                <label className='text-sm font-medium text-gray-900 m-3' htmlFor="explain_visa_revoked">
                If the answer is "Yes", please provide details:
                </label>
                <div>
                <textarea
                    id="explain_visa_revoked"
                    name="explain_visa_revoked"
                    value={ApplicantsDetails.explain_visa_revoked}
                    onChange={handleApplicantChange}
                    className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                />
                </div>
            </div>
        )}

    <div className='grid grid-cols-2'>
        <label className='text-sm font-medium text-gray-900 m-3' htmlFor="country_deported">
            Have you ever been deported from any country ? 
        </label>
        <div>
            <label>
                <input type="radio" 
                    name="country_deported" 
                    onChange={handleApplicantChange}
                    value="Yes"
                    checked={ApplicantsDetails.country_deported === 'Yes'}/>
                <span className="ml-2">Yes</span>
            </label> &nbsp;
            <label>
                <input type="radio" 
                    name="country_deported" 
                    onChange={handleApplicantChange}
                    value="No"
                    checked={ApplicantsDetails.country_deported === 'No'}/>
                <span className="ml-2">No</span>
            </label>
        </div>
    </div>

        {ApplicantsDetails.country_deported === 'Yes' && (
            <div className='grid grid-cols-2 gap-4 mt-4'>
                <label className='text-sm font-medium text-gray-900 m-3' htmlFor="explain_country_deported">
                If the answer is "Yes", please provide details:
                </label>
                <div>
                <textarea
                    id="explain_country_deported"
                    name="explain_country_deported"
                    value={ApplicantsDetails.explain_country_deported}
                    onChange={handleApplicantChange}
                    className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                />
                </div>
            </div>
        )}
</div>


    <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
            <h4 className='certificate-competency bold text-center'><b>Certificate of Competency (COC) / Certificate of Proficiency (COP) / Watchkeeping Certificate</b></h4>
            <div className='competency-container border border-gray-300 rounded-md p-6 shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
                <h4 className='bold'>State details of highest Certificate of Competency held</h4>
                {certificate.map((certificate, index) => (
                <div className='competency-card border border-gray-300 m-3 rounded-md shadow-lg py-3'>
                <div key={index} className='grid sm:grid-cols-3 lg:grid-cols-3 gap-4'>
                                
                    <div className='flex flex-col p-2'>
                        <label htmlFor={`highest_certificate${index}`} className="text-sm font-medium text-gray-900">
                            Certificate : 
                        </label>
                        <input id={`highest_certificate${index}`} name="highest_certificate" type="text" 
                        value={certificate.highest_certificate} onChange={(e) => handleCertificateChange(index, "highest_certificate", e.target.value)} 
                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flex flex-col p-2'>
                        <label htmlFor={`highest_certificate_grade${index}`} className="text-sm font-medium text-gray-900">
                            Grade : 
                        </label>
                        <input id={`highest_certificate_grade${index}`} name="highest_certificate_grade" type="text" 
                        value={certificate.highest_certificate_grade} onChange={(e) => handleCertificateChange(index, "highest_certificate_grade", e.target.value)} 
                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flex flex-col p-2'>
                        <label htmlFor={`highest_certificate_issue_country${index}`} className="text-sm font-medium text-gray-900">
                            Issuing Country:
                        </label>
                        <select
                            id={`highest_certificate_issue_country${index}`}
                            name="highest_certificate_issue_country"
                            value={certificate.highest_certificate_issue_country}
                            onChange={(e) => handleCertificateChange(index, "highest_certificate_issue_country", e.target.value)}
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                            <option value="">Select Country</option>
                            {[
                                "India", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
                                "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
                                "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
                                "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
                                "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
                                "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark",
                                "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
                                "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
                                "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
                                "Honduras", "Hungary", "Iceland", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
                                "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
                                "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
                                "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
                                "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
                                "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
                                "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
                                "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
                                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
                                "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
                                "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
                                "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
                                "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
                                "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America",
                                "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                            ].map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>


                    <div className='flex flex-col p-2'>
                        <label htmlFor={`highest_certificate_number${index}`} className="text-sm font-medium text-gray-900">
                            Certificate No : 
                        </label>
                        <input id={`highest_certificate_number${index}`} name="highest_certificate_number" type="text" 
                        value={certificate.highest_certificate_number} onChange={(e) => handleCertificateChange(index, "highest_certificate_number", e.target.value)} 
                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flex flex-col p-2'>
                        <label htmlFor={`highest_certificate_from_date${index}`} className="text-sm font-medium text-gray-900">
                            Date Issued : 
                        </label>
                        <input id={`highest_certificate_from_date${index}`} name="highest_certificate_from_date" type="date"
                         value={certificate.highest_certificate_from_date} onChange={(e) => handleCertificateChange(index, "highest_certificate_from_date", e.target.value)} 
                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flex flex-col p-2'>
                        <label htmlFor={`highest_certificate_place_issued${index}`} className="text-sm font-medium text-gray-900">
                            Place Issued : 
                        </label>
                        <input id={`highest_certificate_place_issued${index}`} name="highest_certificate_place_issued" type="text" 
                        value={certificate.highest_certificate_place_issued} onChange={(e) => handleCertificateChange(index, "highest_certificate_place_issued", e.target.value)} 
                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flex flex-col p-2'>
                        <label htmlFor={`highest_certificate_to_date${index}`} className="text-sm font-medium text-gray-900">
                            Valid Until :
                        </label>
                        <input id={`highest_certificate_to_date${index}`} name="highest_certificate_to_date" type="date" 
                        value={certificate.highest_certificate_to_date} onChange={(e) => handleCertificateChange(index, "highest_certificate_to_date", e.target.value)}
                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>
                </div>
                </div>
                ))}
                {certificate.length === 1 && (
                    <p className="text-sm text-gray-600 mb-2 text-center">
                        If you have multiple certificates to enter, click the <b>"Add"</b> button to add more.
                    </p>
                )}
                <div className="flex justify-center my-4">
                    <button
                        type="button"
                        onClick={addCertificate}
                        className="certificate-add-button  text-white py-1 px-1 rounded-md  m-2">
                        + Add
                    </button>

                                
                    {certificate.length > 1 && (
                        <button
                            type="button"
                            onClick={cancelLastCertificate}
                            className="cancel-button bg-red-600 text-white py-1 px-3 rounded-md m-2">
                            Cancel
                        </button>
                    )}
                </div>
            </div>
        </div><br />


    <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
    <h4 className='hongkong-certificate bold text-center'><b>Certificate of Equivalent Competency</b></h4>
    <div className='hongkong-container border border-gray-300 rounded-md p-3 shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6 '>
    {hkcertificate.map((hkcertificate, index) => (
    <div className='hongkong-card border border-gray-300 m-3 rounded-md shadow-lg py-3'>
    <div key={index} className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4'>
        <div className='flex flex-col  p-2'>
            <label htmlFor={`hong_kong_certificate${index}`} className="text-sm font-medium text-gray-900">
                Certificate / License :
            </label>
            <select id={`hong_kong_certificate${index}`} name="hong_kong_certificate" type="text" 
                value={hkcertificate.hong_kong_certificate} 
                onChange={(e) => handleHKCertificateChange(index, "hong_kong_certificate", e.target.value)}
                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option value="">Select Certificate</option>
                <option value="Hong Kong License">Hong Kong License</option>
                <option value="Authority To Operate(ATP)">Marshall Island Licence</option>
            </select>
        </div>

        <div className='flex flex-col  p-2'>
            <label htmlFor={`hong_kong_certificate_number${index}`}className="text-sm font-medium text-gray-900">
                Certificate No. :
            </label>
            <input id={`hong_kong_certificate_number${index}`} name="hong_kong_certificate_number" type="text" 
                value={hkcertificate.hong_kong_certificate_number} 
                onChange={(e) => handleHKCertificateChange(index, "hong_kong_certificate_number", e.target.value)} 
                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
        </div>

        <div className='flex flex-col  p-2'>
            <label htmlFor={`hong_kong_certificate_from_date${index}`} className="text-sm font-medium text-gray-900">
                Date of Issue :
            </label>
            <input id={`hong_kong_certificate_from_date${index}`} name="hong_kong_certificate_from_date" type="date" 
                value={hkcertificate.hong_kong_certificate_from_date} 
                onChange={(e) => handleHKCertificateChange(index, "hong_kong_certificate_from_date", e.target.value)} 
                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
        </div>

        <div className='flex flex-col  p-2'>
            <label htmlFor={`hong_kong_certificate_place_issued${index}`} className="text-sm font-medium text-gray-900">
                Place of Issue :
            </label>
            <input id={`hong_kong_certificate_place_issued${index}`} name="hong_kong_certificate_place_issued" type="text" 
                value={hkcertificate.hong_kong_certificate_place_issued} 
                onChange={(e) => handleHKCertificateChange(index, "hong_kong_certificate_place_issued", e.target.value)} 
                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
        </div>

        <div className='flex flex-col  p-2'>
            <label htmlFor={`hong_kong_certificate_to_date${index}`} className="text-sm font-medium text-gray-900">
                Valid Until :
            </label>
            <input id={`hong_kong_certificate_to_date${index}`} name="hong_kong_certificate_to_date" type="date" 
                value={hkcertificate.hong_kong_certificate_to_date} 
                onChange={(e) => handleHKCertificateChange(index, "hong_kong_certificate_to_date", e.target.value)} 
                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
            </div>
        </div>
        </div>
    ))}
    {hkcertificate.length === 1 && (
        <p className="text-sm text-gray-600 mb-2 text-center">
            If you have multiple certificates to enter, click the <b>"Add"</b> button to enter more.
        </p>
    )}
        <div className="flex justify-center my-4">
            <button
                type="button"
                onClick={addHKCertificate}
                className="hongkong-add-button bg-indigo-600 text-white py-1 px-1 rounded-md hover:bg-indigo-500 m-2">
                + Add
            </button>

                                
            {hkcertificate.length > 1 && (
                <button
                    type="button"
                    onClick={cancelLastHkcertificate}
                    className="cancel-button bg-red-600 text-white py-1 px-3 rounded-md m-2">
                    Cancel
                </button>
            )}
        </div>  
    </div>  
</div>


<div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
    <h4 className='course-certificate bold text-center'><b>Courses attended and Certificates obtained</b></h4>
    <div className='certificate-container border border-gray-300 rounded-md p-6 shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
    {course.map((course, index) => (
    <div className='certificate-card border border-gray-300 m-3 rounded-md shadow-lg py-3~'>
    <div key={index} className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4'>
    
    <div className='flex flex-col  p-2'>
        <label htmlFor={`attended_course${index}`} className="text-sm font-medium text-gray-900">
            Course : 
        </label>
        <select
            id={`attended_course${index}`} name="attended_course" type="text" 
            value={course.attended_course} 
            onChange={(e) => handleCourseChange(index, "attended_course", e.target.value)} 
            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
            <option value="">Select Course</option>
            <option value="Elementary First Aid">Elementary First Aid</option>
            <option value="Personal Survival Techniques">Personal Survival Techniques</option>
            <option value="Fire Fighting & Fire Prevention">Fire Fighting & Fire Prevention</option>
            <option value="PSSR">PSSR</option>
            <option value="PSC - RB">PSC - RB</option>
            <option value="AMOS-4W Course">SSO</option>
            <option value="AMOS-4W Course">STSDSD</option>
            <option value="Advance Fire Fighting">Advance Fire Fighting</option>
            <option value="Medical First Aid">Medical First Aid</option>
            <option value="Ship Master's Medicare">Ship Master's Medicare</option>
            {/* <option value="ARPA">ARPA</option> */}
            {/* <option value="Radar Simulator/ RANSCO">Radar Simulator/ RANSCO</option> */}
            {/* <option value="Ship/ Engine Simulator">Ship/ Engine Simulator</option> */}
            {/* <option value="GMDSS">GMDSS</option> */}
            <option value="GMDSS">GMDSS GOC</option>
            {/* <option value="STCW Endorsement">STCW Endorsement</option> */}
            <option value="STCW Endorsement">GMDSS Endorsement</option>
            {/* <option value="ISO / ISM Auditor Course">ISO / ISM Auditor Course</option> */}
            {/* <option value="Bridge Team Management">Bridge Team Management</option> */}
            {/* <option value="Bridge Resource Management">Bridge Resource Management</option> */}
            {/* <option value="AMOS-4W Course">AMOS-4W Course</option> */}
            <option value="ECDIS">ECDIS</option>
        </select>
    </div>

    <div className='flex flex-col  p-2'>
        <label htmlFor={`attended_course_institute${index}`} className="text-sm font-medium text-gray-900">
            Institute / Place : 
        </label>
        <input id={`attended_course_institute${index}`} name="attended_course_institute" type="text" 
            value={course.attended_course_institute} 
            onChange={(e) => handleCourseChange(index, "attended_course_institute", e.target.value)}  
            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
    </div>

    <div className='flex flex-col  p-2'>
        <label htmlFor={`attended_course_certificate_number${index}`} className="text-sm font-medium text-gray-900">
            Certificate No. : 
        </label>
        <input id={`attended_course_certificate_number${index}`} name="attended_course_certificate_number" type="text" 
            value={course.attended_course_certificate_number} 
            onChange={(e) => handleCourseChange(index, "attended_course_certificate_number", e.target.value)}  
            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
    </div>

    <div className='flex flex-col  p-2'>
        <label htmlFor={`attended_course_from_date${index}`} className="text-sm font-medium text-gray-900">
            Date Issued : 
        </label>
        <input id={`attended_course_from_date${index}`} name="attended_course_from_date" type="date" 
            value={course.attended_course_from_date} 
            onChange={(e) => handleCourseChange(index, "attended_course_from_date", e.target.value)}  
            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
    </div>

    <div className='flex flex-col  p-2'>
        <label htmlFor={`attended_course_to_date${index}`} className="text-sm font-medium text-gray-900">
            Valid Until :
        </label>
        <input id={`attended_course_to_date${index}`} name="attended_course_to_date" type="date" 
            value={course.attended_course_to_date} 
            onChange={(e) => handleCourseChange(index, "attended_course_to_date", e.target.value)}  
            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
    </div>
</div>
</div>
    ))}

{course.length === 1 && (
        <p className="text-sm text-gray-600 mb-2 text-center">
            If you have completed multiple courses, click the <b>"Add"</b> button to enter more.
        </p>
    )}
<div className="flex justify-center my-4">
        <button
            type="button"
            onClick={addCourse}
            className="course-add-button bg-indigo-600 text-white py-1 px-1 rounded-md hover:bg-indigo-500 m-2">
            + Add
        </button>

                                
        {course.length > 1 && (
            <button
                type="button"
                onClick={cancelLastCourse}
                className="cancel-button bg-red-600 text-white py-1 px-3 rounded-md m-2">
                Cancel
            </button>
        )}
    </div>  
</div>
</div>


            {/* <h4 className='computer-literacy bold text-center'><b>Computer Literacy</b></h4> */}
            {/* <div className='literacy-container border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'> */}
                {/* <div className='grid grid-cols-2'>
                    <label className='text-sm font-medium text-gray-900 m-3' htmlFor="PMS">
                        Applications familiar (Word, Excel, etc,): 
                    </label>
                    <div className='flex items-center'>
                        <label>
                            <input type="radio" name='familiar_applications'
                             onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.familiar_applications === 'Yes'} 
                             /> 
                                <span className="ml-2">Yes</span>
                        </label> &nbsp;
                        <label>
                            <input type="radio" name='familiar_applications'
                             onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.familiar_applications === 'No'} 
                              /> 
                                <span className="ml-2">No</span>
                        </label>
                    </div>
                </div> */}
                
                {/* <div className='grid grid-cols-2'>
                    <label className='text-sm font-medium text-gray-900 m-3' htmlFor="PMS">
                        Planned Maintenance System (PMS): 
                    </label>
                    <div className='flex items-center'>
                        <label>
                            <input type="radio" name='PMS'
                             onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.PMS === 'Yes'} 
                             /> 
                                <span className="ml-2">Yes</span>
                        </label> &nbsp;
                        <label>
                            <input type="radio" name='PMS'
                             onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.PMS === 'No'} 
                              /> 
                                <span className="ml-2">No</span>
                        </label>
                    </div>
                </div> */}
                {/* <div className='grid grid-cols-2'>
                    <label className='text-sm font-medium text-gray-900 m-3' htmlFor="AMOS4W">
                        Training Undergone for AMOS4W: 
                    </label>
                    <div className='flex items-center'>
                        <label>
                            <input type="radio" name='AMOS4W'
                             onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.AMOS4W === 'Yes'}  
                             /> 
                                <span className="ml-2">Yes</span>
                        </label> &nbsp;
                        <label>
                            <input type="radio" name='AMOS4W' 
                            onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.AMOS4W === 'No'}  
                            /> 
                                <span className="ml-2">No</span>
                        </label>
                    </div>
                </div> */}

                {/* <div className='grid grid-cols-2'>
                    <label className='text-sm font-medium text-gray-900 m-3' htmlFor="AMOS4W">
                        ISPS course: 
                    </label>
                    <div className='flex items-center'>
                        <label>
                            <input type="radio" name='ISPS'
                             onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.ISPS === 'Yes'}  
                             /> 
                                <span className="ml-2">Yes</span>
                        </label> &nbsp;
                        <label>
                            <input type="radio" name='ISPS' 
                            onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.ISPS === 'No'}  
                            /> 
                                <span className="ml-2">No</span>
                        </label>
                    </div>
                </div> */}

                {/* <div className='grid grid-cols-2'> */}
                    {/* <label className='text-sm font-medium text-gray-900 m-3' htmlFor="AMOS4W">
                        SSO course (Maritime Administration Approved): 
                    </label>
                    <div className='flex items-center'>
                        <label>
                            <input type="radio" name='SSO'
                             onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.SSO === 'Yes'}  /> 
                                <span className="ml-2">Yes</span>
                        </label> &nbsp;
                        <label>
                            <input type="radio" name='SSO' 
                            onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.SSO === 'No'}  /> 
                                <span className="ml-2">No</span>
                        </label>
                    </div> */}
                    {/* {(ApplicantsDetails.familiar_applications === 'Yes' ||
                        ApplicantsDetails.PMS === 'Yes' ||
                        ApplicantsDetails.AMOS4W === 'Yes' ||
                        ApplicantsDetails.ISPS === 'Yes' || 
                        ApplicantsDetails.SSO === 'Yes') && (
                        <div className="m-2">
                            <label htmlFor="explain_familiarity" className="text-sm font-medium text-gray-900">
                            If the answer is "Yes" to any of the above, please provide details: 
                            </label>
                            <textarea 
                            id="explain_familiarity" 
                            name="explain_familiarity" 
                            value={ApplicantsDetails.explain_familiarity}
                            onChange={handleApplicantChange} 
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                        </div>
                    )} */}
                {/* </div> */}
            {/* </div> */}
    <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
      <div className='flex min-h-full flex-col justify-center lg:px-3/4 py-12'>
        <h4 className='medical-history bold text-center'><b>Medical History</b></h4>
        <div className='medical-container border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
          <div className='grid grid-cols-2'>
            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="">
              Have you ever signed off from any ship on medical grounds? 
            </label>
            <div className='flex items-center'>
              <label>
                <input type="radio" name='signed_off' 
                onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.signed_off === 'Yes'}   
                /> 
                  <span className="ml-2">Yes</span>
                </label> &nbsp;
              <label>
                <input type="radio" name='signed_off' 
                onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.signed_off === 'No'}  
                 /> 
                  <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          {ApplicantsDetails.signed_off === 'Yes' && (
            <div className='grid grid-cols-2 gap-4 mt-4'>
                <label className='text-sm font-medium text-gray-900 m-3' htmlFor="explain_signed_off">
                If the answer is "Yes", please provide details:
                </label>
                <div>
                <textarea
                    id="explain_signed_off"
                    name="explain_signed_off"
                    value={ApplicantsDetails.explain_signed_off}
                    onChange={handleApplicantChange}
                    className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                />
                </div>
            </div>
            )}



        <div className='grid grid-cols-2'>
            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="">
              Have you undergone any operation / surgery in the past? 
            </label>
            <div className='flex items-center'>
              <label>
                <input type="radio" name='surgery'
                  onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.surgery === 'Yes'}   
                  /> 
                  <span className="ml-2">Yes</span>
              </label> &nbsp;
              <label>
                <input type="radio" name='surgery'  
                onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.surgery === 'No'}  
                 /> 
                  <span className="ml-2">No</span>
              </label>
            </div>
        </div>
          {ApplicantsDetails.surgery === 'Yes' && (
            <div className='grid grid-cols-2 gap-4 mt-4'>
                <label className='text-sm font-medium text-gray-900 m-3' htmlFor="explain_surgery">
                If the answer is "Yes", please provide details:
                </label>
                <div>
                <textarea
                    id="explain_surgery"
                    name="explain_surgery"
                    value={ApplicantsDetails.explain_surgery}
                    onChange={handleApplicantChange}
                    className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                />
                </div>
            </div>
            )}

          <div className='grid grid-cols-2'>
            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="">
              Are you suffering or suffered from any major illness? 
            </label>
            <div className='flex items-center'>
              <label>
                <input type="radio" name='illness'
                  onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.illness === 'Yes'}
                     /> 
                  <span className="ml-2">Yes</span>
              </label> &nbsp;
              <label>
                <input type="radio" name='illness' 
                 onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.illness === 'No'} 
                  /> 
                  <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          {ApplicantsDetails.illness === 'Yes' && (
            <div className='grid grid-cols-2 gap-4 mt-4'>
                <label className='text-sm font-medium text-gray-900 m-3' htmlFor="explain_illness">
                If the answer is "Yes", please provide details:
                </label>
                <div>
                <textarea
                    id="explain_illness"
                    name="explain_illness"
                    value={ApplicantsDetails.explain_illness}
                    onChange={handleApplicantChange}
                    className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                />
                </div>
            </div>
            )}

          <div className='grid grid-cols-2'>
            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="">
              Have you been taking any medicine regularly? 
            </label>
            <div className='flex items-center'>
              <label>
                <input type="radio" name='regular_medicine' 
                 onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.regular_medicine === 'Yes'} 
                   /> 
                  <span className="ml-2">Yes</span>
              </label> &nbsp;
              <label>
                <input type="radio" name='regular_medicine' 
                 onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.regular_medicine === 'No'}  
                  /> 
                  <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          {ApplicantsDetails.regular_medicine === 'Yes' && (
            <div className='grid grid-cols-2 gap-4 mt-4'>
                <label className='text-sm font-medium text-gray-900 m-3' htmlFor="what_medicine">
                If Yes, What are the medicines ?
                </label>
                <div>
                <textarea
                    id="what_medicine"
                    name="what_medicine"
                    value={ApplicantsDetails.what_medicine}
                    onChange={handleApplicantChange}
                    className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                />
                </div>
            </div>
            )}

          {ApplicantsDetails.regular_medicine === 'Yes' && (
            <div className='grid grid-cols-2 gap-4 mt-4'>
                <label className='text-sm font-medium text-gray-900 m-3' htmlFor="carry_medicine">
                    Which medicines do you have to carry with you on board ?
                </label>
                <div>
                <textarea
                    id="carry_medicine"
                    name="carry_medicine"
                    value={ApplicantsDetails.carry_medicine}
                    onChange={handleApplicantChange}
                    className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                />
                </div>
            </div>
            )}

          {/* <div className='grid grid-cols-2'>
            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="what_medicine">
              If Yes, then what are these medicines?
            </label>
            <div>
              <label>
                <input id="what_medicine" name="what_medicine" type="text"  
                value={ApplicantsDetails.what_medicine} onChange={handleApplicantChange} 
                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm"/>
              </label>
            </div>
          </div> */}

          {/* <div className='grid grid-cols-2'>
            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="carry_medicine">
              Which medicines do you have to carry with you on board?
            </label>
            <div>
              <label>
                <input id="carry_medicine" name="carry_medicine" type="text" 
                value={ApplicantsDetails.carry_medicine} onChange={handleApplicantChange} 
                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm"/>
              </label>
            </div>
          </div> */}

        <div className='grid grid-cols-2'>
            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="health_disability_problems">
              Do you have any health or disability problems now? 
            </label>
            <div className='flex items-center'>
              <label>
                <input type="radio" name='health_disability_problems'  
                onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.health_disability_problems === 'Yes'} 
                  /> 
                  <span className="ml-2">Yes</span>
              </label> &nbsp;
              <label>
                <input type="radio" name='health_disability_problems'  
                onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.health_disability_problems === 'No'} 
                  /> 
                  <span className="ml-2">No</span>
              </label>
            </div>
        </div>

        {ApplicantsDetails.health_disability_problems === 'Yes' && (
            <div className='grid grid-cols-2 gap-4 mt-4'>
                <label className='text-sm font-medium text-gray-900 m-3' htmlFor="explain_health_disability_problems">
                If the answer is "Yes", please provide details:
                </label>
                <div>
                <textarea
                    id="explain_health_disability_problems"
                    name="explain_health_disability_problems"
                    value={ApplicantsDetails.explain_health_disability_problems}
                    onChange={handleApplicantChange}
                    className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                />
                </div>
            </div>
        )}

        <div className='grid grid-cols-2'>
            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="alcohol">
                Do you drink Alcohol ? 
            </label>
            <div className='flex items-center'>
              <label>
                <input type="radio" name='alcohol'  
                onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.alcohol === 'Yes'} 
                  /> 
                  <span className="ml-2">Yes</span>
              </label> &nbsp;
              <label>
                <input type="radio" name='alcohol'  
                onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.alcohol === 'No'} 
                  /> 
                  <span className="ml-2">No</span>
              </label>
            </div>
        </div>

        <div className='grid grid-cols-2'>
            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="smoke">
              Do you smoke ? 
            </label>
            <div className='flex items-center'>
              <label>
                <input type="radio" name='smoke'  
                onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.smoke === 'Yes'} 
                  /> 
                  <span className="ml-2">Yes</span>
              </label> &nbsp;
              <label>
                <input type="radio" name='smoke'  
                onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.smoke === 'No'} 
                  /> 
                  <span className="ml-2">No</span>
              </label>
            </div>
        </div>


        {/* {(ApplicantsDetails.signed_off === 'Yes' ||
            ApplicantsDetails.surgery === 'Yes' ||
            ApplicantsDetails.illness === 'Yes' ||
            ApplicantsDetails.regular_medicine === 'Yes' || 
            ApplicantsDetails.health_disability_problems === 'Yes' || 
            ApplicantsDetails.alcohol === 'Yes' ||
              ApplicantsDetails.smoke === 'Yes') && (
              <div className="m-2 className='flex items-center'">
                <label htmlFor="explain_medical" className="text-sm font-medium text-gray-900">
                  If the answer is "Yes" to any of the above, please provide details: 
                </label>
                <textarea 
                  id="explain_medical" 
                  name="explain_medical" 
                  value={ApplicantsDetails.explain_medical}
                  onChange={handleApplicantChange} 
                  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm" />
              </div>
        )} */}

        </div>
      </div> 

        </div>


        <div className='flex min-h-full flex-col justify-center lg:px-3/4'>
            <div className='flex min-h-full flex-col justify-center lg:px-4 py-6'>
                    <h4 className='vaccination bold text-center'><b>Vaccinations</b></h4>
                        <div className='vaccination-container border border-gray-300 rounded-md p-63 shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
{/* COVID 19 Title Row */}
<div className='grid  gap-2'>
  <div className='flex justify-center items-center h-full p-4'>
    <h5 className="text-base font-semibold text-center">COVID 19</h5>
  </div>
  {/* <div className='flex justify-center items-center h-full p-4'>
    <h5 className="text-base text-center">Make or Manufacturer</h5>
  </div> */}
  {/* <div className='flex justify-center items-center h-full p-4'>
    <h5 className="text-base text-center">Date Vaccinated</h5>
  </div> */}
</div>

{/* 1st Dose */}
<div className='p-2 sm:p-4 border rounded-md mb-4'>
  <h5 className="text-base font-semibold mb-2 text-center">1st Dose</h5>

  <div className='mb-3'>
    <label htmlFor="first_dose_make" className="block text-sm font-medium text-gray-700 mb-1">
      Make or Manufacturer
    </label>
    <input
      id="first_dose_make"
      value={ApplicantsDetails.first_dose_make}
      onChange={handleApplicantChange}
      name="first_dose_make"
      type="text"
      className="block w-full rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm"
    />
  </div>

  <div>
    <label htmlFor="first_dose_date" className="block text-sm font-medium text-gray-700 mb-1">
      Date Vaccinated
    </label>
    <input
      id="first_dose_date"
      value={ApplicantsDetails.first_dose_date}
      onChange={handleApplicantChange}
      name="first_dose_date"
      type="date"
      className="block w-full rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm"
    />
  </div>
</div>

{/* 2nd Dose */}
<div className='p-2 sm:p-4 border rounded-md mb-4'>
  <h5 className="text-base font-semibold mb-2 text-center">2nd Dose</h5>

  <div className='mb-3'>
    <label htmlFor="second_dose_make" className="block text-sm font-medium text-gray-700 mb-1">
      Make or Manufacturer
    </label>
    <input
      id="second_dose_make"
      value={ApplicantsDetails.second_dose_make}
      onChange={handleApplicantChange}
      name="second_dose_make"
      type="text"
      className="block w-full rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm"
    />
  </div>

  <div>
    <label htmlFor="second_dose_date" className="block text-sm font-medium text-gray-700 mb-1">
      Date Vaccinated
    </label>
    <input
      id="second_dose_date"
      value={ApplicantsDetails.second_dose_date}
      onChange={handleApplicantChange}
      name="second_dose_date"
      type="date"
      className="block w-full rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm"
    />
  </div>
</div>

{/* Booster Dose 1 */}
<div className='p-2 sm:p-4 border rounded-md mb-4'>
  <h5 className="text-base font-semibold mb-2 text-center">Booster Dose 1</h5>

  <div className='mb-3'>
    <label htmlFor="booster_dose_one_make" className="block text-sm font-medium text-gray-700 mb-1">
      Make or Manufacturer
    </label>
    <input
      id="booster_dose_one_make"
      value={ApplicantsDetails.booster_dose_one_make}
      onChange={handleApplicantChange}
      name="booster_dose_one_make"
      type="text"
      className="block w-full rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm"
    />
  </div>

  <div>
    <label htmlFor="booster_dose_one_date" className="block text-sm font-medium text-gray-700 mb-1">
      Date Vaccinated
    </label>
    <input
      id="booster_dose_one_date"
      value={ApplicantsDetails.booster_dose_one_date}
      onChange={handleApplicantChange}
      name="booster_dose_one_date"
      type="date"
      className="block w-full rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm"
    />
  </div>
</div>

{/* Booster Dose 2 */}
<div className='p-2 sm:p-4 border rounded-md mb-4'>
  <h5 className="text-base font-semibold mb-2 text-center">Booster Dose 2</h5>

  <div className='mb-3'>
    <label htmlFor="booster_dose_two_make" className="block text-sm font-medium text-gray-700 mb-1">
      Make or Manufacturer
    </label>
    <input
      id="booster_dose_two_make"
      value={ApplicantsDetails.booster_dose_two_make}
      onChange={handleApplicantChange}
      name="booster_dose_two_make"
      type="text"
      className="block w-full rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm"
    />
  </div>

  <div>
    <label htmlFor="booster_dose_two_date" className="block text-sm font-medium text-gray-700 mb-1">
      Date Vaccinated
    </label>
    <input
      id="booster_dose_two_date"
      value={ApplicantsDetails.booster_dose_two_date}
      onChange={handleApplicantChange}
      name="booster_dose_two_date"
      type="date"
      className="block w-full rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm"
    />
  </div>
</div>




                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 m-2'>
                                <div className='flex flex-col items-center p-2'>
                                    <label htmlFor="yellow_date" className="text-sm font-medium text-gray-900">
                                        Yellow Fever Vaccination Date : 
                                    </label>
                                    <input
                                        id="yellow_date"
                                    
                                        name="yellow_date"
                                        type="date"
                                        value={ApplicantsDetails.yellow_date}
                                        onChange={handleApplicantChange}
                                        className="block w-2/3 rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm"
                                    />
                                </div>

                                <div className='flex flex-col items-center p-2'>
                                    <label htmlFor="yellow_place" className="text-sm font-medium text-gray-900">
                                        Yellow Fever Vaccination Place :
                                    </label>
                                    <input
                                        id="yellow_place"
                                        name="yellow_place"
                                        type="text"
                                        value={ApplicantsDetails.yellow_place}
                                        onChange={handleApplicantChange}
                                        className="block w-2/3 rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
            </div>
        </div>

                <div className='flex min-h-full flex-col justify-center lg:px-3/4'>
                    <div className='flex min-h-full flex-col justify-center lg:px-4 py-6'>
                    <h4 className='general bold text-center'><b>General</b></h4>
                        <div className='general-container border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
                                <div className='grid grid-cols-2'>
                                    <label className='text-sm font-medium text-gray-900 m-3' htmlFor="court_inquiry">
                                        Have you ever been involved in a court of enquiry or maritime accident? 
                                    </label>
                                    <div className='flex items-center'>
                                        <label>
                                            <input type="radio" name='court_inquiry'
                                             onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.court_inquiry === 'Yes'}   
                                             /> 
                                            <span className="ml-2">Yes</span>
                                        </label> &nbsp;
                                        <label>
                                            <input type="radio" name='court_inquiry' 
                                            onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.court_inquiry === 'No'} 
                                              /> 
                                            <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>

                                {ApplicantsDetails.court_inquiry === 'Yes' && (
                                    <div className='grid grid-cols-2 gap-4 mt-4'>
                                        <label className='text-sm font-medium text-gray-900 m-3' htmlFor="explain_court">
                                        If the answer is "Yes", please provide details:
                                        </label>
                                        <div>
                                        <textarea
                                            id="explain_court"
                                            name="explain_court"
                                            value={ApplicantsDetails.explain_court}
                                            onChange={handleApplicantChange}
                                            className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                                        />
                                        </div>
                                    </div>
                                )}

                                <div className='grid grid-cols-2'>
                                    <label className='text-sm font-medium text-gray-900 m-3' htmlFor="certificate_suspended">
                                        Have you ever had your Certificate of Competency suspended or revoked? 
                                    </label>
                                    <div className='flex items-center'>
                                        <label>
                                            <input type="radio" name='certificate_suspended' 
                                            onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.certificate_suspended === 'Yes'}  
                                             /> 
                                            <span className="ml-2">Yes</span>
                                        </label> &nbsp;
                                        <label>
                                            <input type="radio" name='certificate_suspended' 
                                            onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.certificate_suspended === 'No'} 
                                              /> 
                                            <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>

                                {ApplicantsDetails.certificate_suspended === 'Yes' && (
                                    <div className='grid grid-cols-2 gap-4 mt-4'>
                                        <label className='text-sm font-medium text-gray-900 m-3' htmlFor="explain_certificate">
                                        If the answer is "Yes", please provide details:
                                        </label>
                                        <div>
                                        <textarea
                                            id="explain_certificate"
                                            name="explain_certificate"
                                            value={ApplicantsDetails.explain_certificate}
                                            onChange={handleApplicantChange}
                                            className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                                        />
                                        </div>
                                    </div>
                                )}

                                <div className='grid grid-cols-2'>
                                    <label className='text-sm font-medium text-gray-900 m-3' htmlFor="covid_infected">
                                        Have you ever been infected with Covid-19 in the past?
                                    </label>
                                    <div>
                                        <label>
                                            <input type="radio" name='covid_infected' 
                                             onChange={handleApplicantChange} value='Yes' checked={ApplicantsDetails.covid_infected === 'Yes'}
                                             /> 
                                            <span className="ml-2">Yes</span>
                                        </label> &nbsp;
                                        <label>
                                            <input type="radio" name='covid_infected'  
                                            onChange={handleApplicantChange} value='No' checked={ApplicantsDetails.covid_infected === 'No'} 
                                              /> 
                                            <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>

                                {ApplicantsDetails.covid_infected === 'Yes' && (
                                    <div className='grid grid-cols-2 gap-4 mt-4'>
                                        <label className='text-sm font-medium text-gray-900 m-3' htmlFor="explain_covid">
                                        If the answer is "Yes", please provide details:
                                        </label>
                                        <div>
                                        <textarea
                                            id="explain_covid"
                                            name="explain_covid"
                                            value={ApplicantsDetails.explain_covid}
                                            onChange={handleApplicantChange}
                                            className="w-full h-20 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-gray-600 focus:outline-none sm:text-sm resize-none"
                                        />
                                        </div>
                                    </div>
                                )}

                        </div>
                    </div>
                </div>
       

                {/* References */}
                <div className='flex min-h-full flex-col justify-center lg:px-3/4 py-12'>
                <h4 className='references font-bold text-center mb-4'><b>References</b></h4>
                <div className='reference-container border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
                    <h4 className='font-bold mb-4'>State details of the Superintendent / Manager of your current or immediate past employers as below :</h4>

                    {reference.map((reference, index) => (
                    <div key={index} className='reference-card border border-gray-300 m-3 rounded-md shadow-lg py-3'>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <div className='flex flex-col items-start p-2'>
                                <label htmlFor={`past_company${index}`} className="text-sm font-medium text-gray-900">
                                    Name of Company:
                                </label>
                                <input
                                    id={`past_company${index}`}
                                    name="past_company"
                                    type="text"
                                    value={reference.past_company}
                                    onChange={(e) => handleReferenceChange(index, "past_company", e.target.value)} 
                                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                />
                            </div>

                            <div className='flex flex-col items-start p-2'>
                                <label htmlFor={`past_company_manager_name_designation${index}`} className="text-sm font-medium text-gray-900">
                                    Superintendent/Manager's Name & Designation:
                                </label>
                                <input
                                    id={`past_company_manager_name_designation${index}`}
                                    name="past_company_manager_name_designation"
                                    type="text"
                                    value={reference.past_company_manager_name_designation}
                                    onChange={(e) => handleReferenceChange(index, "past_company_manager_name_designation", e.target.value)} 
                                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                />
                            </div>

                            <div className='flex flex-col items-start p-2'>
                                <label htmlFor={`past_company_telephone${index}`} className="text-sm font-medium text-gray-900">
                                    Telephone:
                                </label>
                                <input
                                    id={`past_company_telephone${index}`}
                                    name="past_company_telephone"
                                    type="text"
                                    value={reference.past_company_telephone}
                                    onChange={(e) => handleReferenceChange(index, "past_company_telephone", e.target.value)} 
                                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    ))}

                    {reference.length === 1 && (
                            <p className="text-sm text-gray-600 mb-2 text-center">
                                If you have multiple details, click the <b>"Add"</b> button to enter more.
                            </p>
                        )}
                    <div className="flex justify-center my-4">
                        <button
                            type="button"
                            onClick={addReference}
                            className="reference-add-button bg-indigo-600 text-white py-1 px-1 rounded-md hover:bg-indigo-500 m-2">
                            + Add
                        </button>

                                
                        {reference.length > 1 && (
                            <button
                                type="button"
                                onClick={cancelLastReference}
                                className="cancel-button bg-red-600 text-white py-1 px-3 rounded-md m-2">
                                Cancel
                            </button>
                        )}
                    </div>
                </div>
            </div>




        {/*sea experience */}
        <div ref={seaExperienceRef} className="flex min-h-full flex-col justify-center lg:px-8 py-12">
            <h2 className="sea-experience text-2xl font-bold text-gray-800 text-center mb-6">
                Sea experience (Record of previous sea service)
            </h2>

            {/* <div className="sea-experience-info rounded-md shadow-lg bg-white sm:mx-auto sm:w-full lg:w-3/4 lg:px-8 py-8">
                <p className="text-center text-gray-700 mb-4">
                Enter from descending order, i.e., latest ship first
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-5 text-gray-700 text-sm">
                <div>
                    <p><b>GC</b> - General Cargo</p>
                    <p><b>BC</b> - Bulk Carrier</p>
                    <p><b>TN</b> - Tankers</p>
                </div>
                <div>
                    <p><b>MP</b> - Multi-Purpose</p>
                    <p><b>PS</b> - Passenger</p>
                    <p><b>PD</b> - Product</p>
                </div>
                <div>
                    <p><b>CN</b> - Container</p>
                    <p><b>DR</b> - Dredger</p>
                    <p><b>GS</b> - LPG/LNG</p>
                </div>
                <div>
                    <p><b>OBO</b> - Ore/Bulk/Oil</p>
                    <p><b>PCC</b> - Pure Car Carrier</p>
                    <p><b>CH</b> - Chemical Tanker</p>
                </div>
                <div>
                    <p><b>RR</b> - RO/RO</p>
                    <p><b>HL</b> - Heavy Unit</p>
                    <p><b>OS</b> - Off-shore</p>
                </div>
                </div>
            </div>
        <br /><br /> */}

        {/* <h4 className='sea-service bold text-center'><b>Record of previous sea service</b></h4> */}
            <div className='sea-service-container border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-12'>
            {service.map((service, index) => (
                <div key={index} className='sea-service-card border border-gray-300 m-3 rounded-md shadow-lg p-3'>
                    <div className='grid sm:grid-cols-3 grid-cols-1 p-1'>
                        <div className='flexbox items-center p-2'>
                            <label htmlFor={`company_name${index}`} className="text-sm font-medium text-gray-900">
                                COMPANY :  
                            </label>
                            <input id={`company_name${index}`} name="company_name" type="text" 
                            value={service.company_name} onChange={(e) => handleServiceChange(index, "company_name", e.target.value)}
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                        {/* <div className='flexbox items-center p-2'>
                            <label htmlFor={`vessel_name${index}`} className="text-sm font-medium text-gray-900">
                                VESSEL : 
                            </label>
                            <input id={`vessel_name${index}`} name="vessel_name" type="text"
                            value={service.vessel_name} onChange={(e) => handleServiceChange(index, "vessel_name", e.target.value)} 
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div> */}
                        <div className='flexbox items-center p-2'>
                            <label htmlFor={`vessel_name${index}`} className="text-sm font-medium text-gray-900">
                                VESSEL : 
                            </label>
                            <select id={`vessel_name${index}`} name="vessel_name" type="text" 
                                value={service.vessel_name}
                                onChange={(e) => handleServiceChange(index, "vessel_name", e.target.value)}
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                <option value="">Select Vessel</option>
                                <option value="General Cargo">General Cargo</option>
                                <option value="Bulk Carrier">Bulk Carrier</option>
                                <option value="Tankers">Tankers</option>
                                <option value="Multi-Purpose">Multi-Purpose</option>
                                <option value="Passenger">Passenger</option>
                                <option value="Product">Product</option>
                                <option value="Container">Container</option>
                                <option value="Dredger">Dredger</option>
                                <option value="LPG/LNG">LPG/LNG</option>
                                <option value="Ore/Bulk/Oil">Ore/Bulk/Oil</option>
                                <option value="Pure Car Carrier">Pure Car Carrier</option>
                                <option value="Chemical Tanker">Chemical Tanker</option>
                                <option value="RO/RO">RO/RO</option>
                                <option value="Heavy Unit">Heavy Unit</option>
                                <option value="Off-shore">Off-shore</option>
                            </select>
                        </div>

                        {/* --------------------------- */}
                        <div className='flexbox items-center p-2'>
                            <label htmlFor={`rank${index}`} className="text-sm font-medium text-gray-900">
                                RANK : 
                            </label>
                            {/* <input id={`rank${index}`} name="rank" type="text"
                                value={service.rank} onChange={(e) => handleServiceChange(index, "rank", e.target.value)}
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/> */}
                            <select id={`rank${index}`} name="rank" type="text" 
                                value={service.rank}
                                onChange={(e) => handleServiceChange(index, "rank", e.target.value)}
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                <option value="">Select Rank</option>
                                <option value="Master">Master </option>
                                <option value="Chief Officer">Chief Officer</option>
                                <option value="2nd Officer ">2nd Officer</option>
                                <option value="3rd Officer">3rd Officer</option>
                                <option value="Deck Cadet">Deck Cadet</option>
                                <option value="Chief Engineer">Chief Engineer</option>
                                <option value="2nd Engineer">2nd Engineer</option>
                                <option value="3rd Engineer">3rd Engineer</option>
                                <option value="4th Engineer">4th Engineer</option>
                                <option value="5th Engineer">5th Engineer</option>
                                <option value="Electrical Officer">Electrical Officer </option>
                                <option value="Bosun">Bosun </option>
                                <option value="AB">AB </option>
                                <option value="OS">OS </option>
                                <option value="Fitter">Fitter </option>
                                <option value="Oiler">Oiler </option>
                                <option value="WPR">WPR </option>
                                <option value="CH Cook">CH Cook </option>
                                <option value="Messman">Messman </option>
                                <option value="Junior Engineer">Junior Engineer</option>
                                <option value="Engine CADET">Engine CADET</option>
                                <option value="Trainee Seaman">Trainee Seaman</option>
                            </select>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor={`previous_from_date${index}`} className="text-sm font-medium text-gray-900">
                                FROM : 
                            </label>
                            <input id={`previous_from_date${index}`} name="previous_from_date" type="date" 
                            value={service.previous_from_date} onChange={(e) => handleServiceChange(index, "previous_from_date", e.target.value)} 
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor={`previous_to_date${index}`} className="text-sm font-medium text-gray-900">
                                TO : 
                            </label>
                            <input id={`previous_to_date${index}`} name="previous_to_date" type="date"
                            value={service.previous_to_date} onChange={(e) => handleServiceChange(index, "previous_to_date", e.target.value)}
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>

                        <div className='grid sm:grid-cols-3 grid-cols-1 p-1'>
                            <div className='flexbox items-center p-2'>
                                <label htmlFor={`period_months${index}`} className="text-sm font-medium text-gray-900">
                                    PERIOD MONTH :
                                </label>
                                <input id={`period_months${index}`} name="period_months" type="number"
                                value={service.period_months} onChange={(e) => handleServiceChange(index, "period_months", e.target.value)} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>
                            <div className='flexbox items-center p-2'>
                                <label htmlFor={`period_days${index}`} className="text-sm font-medium text-gray-900">
                                    DAYS :
                                </label>
                                <input id={`period_days${index}`} name="period_days" type="number"
                                value={service.period_days} onChange={(e) => handleServiceChange(index, "period_days", e.target.value)} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>
                            <div className='flexbox items-center p-2'>
                                <label htmlFor={`vessel_type${index}`} className="text-sm font-medium text-gray-900">
                                    VESSEL TYPE : 
                                </label>
                                <input id={`vessel_type${index}`} name="vessel_type" type="text" 
                                value={service.vessel_type} onChange={(e) => handleServiceChange(index, "vessel_type", e.target.value)} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>
                        </div>
                        <div className='grid sm:grid-cols-3 grid-cols-1 p-1'>
                            <div className='flexbox items-center p-2'>
                                <label htmlFor={`engine_type${index}`} className="text-sm font-medium text-gray-900">
                                    ENGINE TYPE : 
                                </label>
                                <input id={`engine_type${index}`} name="engine_type" type="text"
                                value={service.engine_type} onChange={(e) => handleServiceChange(index, "engine_type", e.target.value)} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>

                            <div className='flexbox items-center p-2'>
                                <label htmlFor={`bhp${index}`} className="text-sm font-medium text-gray-900">
                                    BHP :
                                </label>
                                <input id={`bhp${index}`} name="bhp" type="text" 
                                value={service.bhp} onChange={(e) => handleServiceChange(index, "bhp", e.target.value)}
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>

                            <div className='items-center p-2'>
                                <label className='text-sm font-medium text-gray-900 m-3' htmlFor={`ums${index}`}>
                                    UMS / NON-UMS
                                </label>
                                <div className='flex justify-center items-center'>
                                    <label>
                                        <input type="radio"
                                            onChange={(e) => handleServiceChange(index, "ums", e.target.value)} 
                                            name={`ums${index}`}
                                            value="UMS"
                                            checked={service.ums === 'UMS'} />
                                        <span className="ml-2">UMS</span>
                                    </label> &nbsp;
                                    <label>
                                        <input type="radio"
                                            onChange={(e) => handleServiceChange(index, "ums", e.target.value)} 
                                            name={`ums${index}`} 
                                            value="Non UMS"
                                            checked={service.ums === 'Non UMS'} />
                                        <span className="ml-2">NON UMS</span>
                                    </label>
                                </div>
                            </div>


                            <div className='flexbox items-center p-2'>
                                <label htmlFor={`grt${index}`}  className="text-sm font-medium text-gray-900">
                                    GRT :
                                </label>
                                <input id={`grt${index}`}  name="grt" type="text"
                                value={service.grt} onChange={(e) => handleServiceChange(index, "grt", e.target.value)} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>

                            <div className='flexbox items-center p-2'>
                                <label htmlFor={`year_built${index}`} className="text-sm font-medium text-gray-900">
                                    YEAR BUILT :
                                </label>
                                <input id={`year_built${index}`} name="year_built" type="number" 
                                value={service.year_built} onChange={(e) => handleServiceChange(index, "year_built", e.target.value)} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>
                            <div className='flexbox items-center p-2'>
                                <label htmlFor={`drydock_done${index}`} className="text-sm font-medium text-gray-900">
                                    DRYDOCK DONE :
                                </label>
                                <input id={`drydock_done${index}`} name="drydock_done" type="text" 
                                value={service.drydock_done} onChange={(e) => handleServiceChange(index, "drydock_done", e.target.value)} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>

                            <div className='flexbox items-center p-2'>
                                <label htmlFor={`ecdis${index}`}  className="text-sm font-medium text-gray-900">
                                    ECDIS Make :
                                </label>
                                <input id={`ecdis${index}`}  name="ecdis" type="text"
                                value={service.ecdis} onChange={(e) => handleServiceChange(index, "ecdis", e.target.value)} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>

                            <div className='items-center p-2'>
                                <label className='text-sm font-medium text-gray-900 m-3' htmlFor={`geared${index}`}>
                                    Geared / Non - Geared :
                                </label>
                                <div className='flex justify-center items-center'>
                                    <label>
                                        <input type="radio"
                                            onChange={(e) => handleServiceChange(index, "geared", e.target.value)} 
                                            name={`geared${index}`}
                                            value="Geared"
                                            checked={service.geared === 'Geared'} />
                                        <span className="ml-2">Geared</span>
                                    </label> &nbsp;
                                    <label>
                                        <input type="radio"
                                            onChange={(e) => handleServiceChange(index, "geared", e.target.value)} 
                                            name={`geared${index}`} 
                                            value="Non-Geared"
                                            checked={service.geared === 'Non-Geared'} />
                                        <span className="ml-2">Non-Geared</span>
                                    </label>
                                </div>
                            </div>
                            <div className='items-center p-2'>
                                <label className='text-sm font-medium text-gray-900 m-3' htmlFor={`grab${index}`}>
                                    Grab Experience :
                                </label>
                                <div className='flex justify-center items-center'>
                                    <label>
                                        <input type="radio"
                                            onChange={(e) => handleServiceChange(index, "grab", e.target.value)} 
                                            name={`grab${index}`}
                                            value="Yes"
                                            checked={service.grab === 'Yes'} />
                                        <span className="ml-2">Yes</span>
                                    </label> &nbsp;
                                    <label>
                                        <input type="radio"
                                            onChange={(e) => handleServiceChange(index, "grab", e.target.value)} 
                                            name={`grab${index}`} 
                                            value="No"
                                            checked={service.grab === 'No'} />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>
                        </div>



                    <div className='p-1'>
                        <div className='flexbox items-center p-2'>
                            <label htmlFor={`reason_for_leaving${index}`} className="text-sm font-medium text-gray-900">
                                REASONS FOR LEAVING COMPANY : 
                            </label>
                            <textarea id={`reason_for_leaving${index}`} name="reason_for_leaving" type="text"
                            value={service.reason_for_leaving} onChange={(e) => handleServiceChange(index, "reason_for_leaving", e.target.value)} 
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                </div>
            ))}


                {service.length === 1 && (
                        <p className="text-sm text-gray-600 mb-2 text-center">
                            If you have multiple sea experiences, click the <b>"Add"</b> button to enter more .
                        </p>
                    )}
                <div className="flex justify-center my-4">
                    <button
                        type="button"
                        onClick={addService}
                        className="service-add-button bg-indigo-600 text-white py-1 px-1 rounded-md hover:bg-indigo-500 m-2">
                        + Add
                    </button>

                                
                    {service.length > 1 && (
                        <button
                            type="button"
                            onClick={cancelLastService}
                            className="cancel-button bg-red-600 text-white py-1 px-3 rounded-md m-2">
                            Cancel
                        </button>
                    )}
                </div>
            </div>
        </div> 


        {/* <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
        <h4 className='rank-experience bold text-center'><b>Total rank experience in months :</b></h4>
            <div className='experience-container border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
                <div className='grid sm:grid-cols-3 grid-cols-2 p-1'>
                    <div className='flexbox items-center p-2'>
                                <label htmlFor="master" className="text-sm font-medium text-gray-900">
                                    MASTER :
                                </label>
                                <input id="master" name="master" type="number" 
                                value={ApplicantsDetails.master} onChange={handleApplicantChange} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>

                            <div className='flexbox items-center p-2'>
                                <label htmlFor="chief_officer" className="text-sm font-medium text-gray-900">
                                    CHIEF OFFICER :
                                </label>
                                <input id="chief_officer" name="chief_officer" type="number"
                                 value={ApplicantsDetails.chief_officer} onChange={handleApplicantChange} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>

                            <div className='flexbox items-center p-2'>
                                <label htmlFor="second_officer" className="text-sm font-medium text-gray-900">
                                    2nd OFFICER :
                                </label>
                                <input id="second_officer" name="second_officer" type="number"
                                 value={ApplicantsDetails.second_officer} onChange={handleApplicantChange} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>

                            <div className='flexbox items-center p-2'>
                                <label htmlFor="third_officer" className="text-sm font-medium text-gray-900">
                                    3rd OFFICER :
                                </label>
                                <input id="third_officer" name="third_officer" type="number" 
                                value={ApplicantsDetails.third_officer} onChange={handleApplicantChange} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>

                            <div className='flexbox items-center p-2'>
                                <label htmlFor="deck_cadet" className="text-sm font-medium text-gray-900">
                                    DECK CADET :
                                </label>
                                <input id="deck_cadet" name="deck_cadet" type="number" 
                                value={ApplicantsDetails.deck_cadet} onChange={handleApplicantChange} 
                                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                            </div>
                    </div>
                    <div className='grid sm:grid-cols-3 grid-cols-2 p-1'>
                        <div className='flexbox items-center p-2'>
                            <label htmlFor="chief_engineer" className="text-sm font-medium text-gray-900">
                                CHIEF ENGINEER :
                            </label>
                            <input id="chief_engineer" name="chief_engineer" type="number" 
                            value={ApplicantsDetails.chief_engineer} onChange={handleApplicantChange} 
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                        <div className='flexbox items-center p-2'>
                            <label htmlFor="second_engineer" className="text-sm font-medium text-gray-900">
                                2nd ENGINEER :
                            </label>
                            <input id="second_engineer" name="second_engineer" type="number"
                             value={ApplicantsDetails.second_engineer} onChange={handleApplicantChange} 
                             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="third_engineer" className="text-sm font-medium text-gray-900">
                                3rd ENGINEER :
                            </label>
                            <input id="third_engineer" name="third_engineer" type="number" 
                            value={ApplicantsDetails.third_engineer} onChange={handleApplicantChange} 
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="fourth_engineer" className="text-sm font-medium text-gray-900">
                                4th ENGINEER :
                            </label>
                            <input id="fourth_engineer" name="fourth_engineer" type="number" 
                            value={ApplicantsDetails.fourth_engineer} onChange={handleApplicantChange} 
                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="fifth_engineer" className="text-sm font-medium text-gray-900">
                                5th ENGINEER :
                            </label>
                            <input id="fifth_engineer" name="fifth_engineer" type="number"
                             value={ApplicantsDetails.fifth_engineer} onChange={handleApplicantChange}
                              className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="electrical_officer" className="text-sm font-medium text-gray-900">
                                ELECTRICAL OFFICER :
                            </label>
                            <input id="electrical_officer" name="electrical_officer" type="number"
                             value={ApplicantsDetails.electrical_officer} onChange={handleApplicantChange}
                              className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>


                    <div className='grid grid-cols-3 p-1'>
                    <div className='flexbox items-center p-2'>
                        <label htmlFor="bosun" className="text-sm font-medium text-gray-900">
                            BOSUN :
                        </label>
                        <input id="bosun" name="bosun" type="number" 
                        value={ApplicantsDetails.bosun} onChange={handleApplicantChange} 
                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>
                    <div className='flexbox items-center p-2'>
                        <label htmlFor="ab" className="text-sm font-medium text-gray-900">
                            AB :
                        </label>
                        <input id="ab" name="ab" type="number"
                         value={ApplicantsDetails.ab} onChange={handleApplicantChange}
                          className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="os" className="text-sm font-medium text-gray-900">
                            OS :
                        </label>
                        <input id="os" name="os" type="number"
                         value={ApplicantsDetails.os} onChange={handleApplicantChange} 
                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="fitter" className="text-sm font-medium text-gray-900">
                            FITTER :
                        </label>
                        <input id="fitter" name="fitter" type="number"
                         value={ApplicantsDetails.fitter} onChange={handleApplicantChange}
                          className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="oiler" className="text-sm font-medium text-gray-900">
                            OILER :
                        </label>
                        <input id="oiler" name="oiler" type="number" 
                        value={ApplicantsDetails.oiler} onChange={handleApplicantChange}
                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="wpr" className="text-sm font-medium text-gray-900">
                            WPR :
                        </label>
                        <input id="wpr" name="wpr" type="number" 
                        value={ApplicantsDetails.wpr} onChange={handleApplicantChange}
                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="ch_cook" className="text-sm font-medium text-gray-900">
                            CH COOK :
                        </label>
                        <input id="ch_cook" name="ch_cook" type="number" 
                        value={ApplicantsDetails.ch_cook} onChange={handleApplicantChange}
                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="messman" className="text-sm font-medium text-gray-900">
                            MESSMAN :
                        </label>
                        <input id="messman" name="messman" type="number" 
                        value={ApplicantsDetails.messman} onChange={handleApplicantChange}
                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>
                </div>
            </div>
        </div> */}

            {/* Declaration */}
            <div className='flex min-h-full flex-col justify-center lg:px-3/4'>
                <div className='flex min-h-full flex-col justify-center lg:px-4 py-3'>
                    <div className='declaration-container border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-3/4 px-6 py-6'>
                    <div className="flex min-h-full flex-col justify-center lg:px-8 py-6">
                        <h4 className="declaration font-bold text-lg mb-2">Declaration:</h4>
                        <ul className="list-disc list-inside space-y-2">
                            <li>I do hereby declare that all information furnished above is true to the best of my knowledge and belief.</li>
                            <li>I further declare that prior to joining you, I will stand released from previous employment.</li>
                            <li>I do hereby pledge that I have never abused any drugs in the past.</li>
                        </ul>
                    </div>

                        
                    <div className='grid grid-cols-2'>
                        <label className='text-sm font-medium text-gray-900 m-3' htmlFor="">
                            If immediate employment is not available do you wish to be considered for future vacancies? 
                        </label>
                        <div className='flex items-center'>
                            <label className='flex items-center'>
                                <input type="radio" onChange={handleApplicantChange} name='future_vacancies' value='Yes' checked={ApplicantsDetails.future_vacancies === 'Yes'}   /> 
                                <span className="ml-2">Yes</span>
                            </label> &nbsp;
                            <label className='flex items-center'>
                                <input type="radio" onChange={handleApplicantChange} name='future_vacancies' value='No' checked={ApplicantsDetails.future_vacancies === 'No'}  /> 
                                <span className="ml-2">No</span>
                            </label>
                        </div>
                    </div>

                    <div className='grid grid-cols-2'>
                        {/* <div className='flexbox items-center p-2'>
                            <label htmlFor="signature" className="text-sm font-medium text-gray-900">
                                Signature : 
                            </label>
                            <input id="signature" name="signature" type="file" onChange={handleFileChange}   className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div> */}

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="declaration_date" className="text-sm font-medium text-gray-900">
                                Declaration Date : 
                            </label>
                            <input id="declaration_date" name="declaration_date" type="date" value={ApplicantsDetails.declaration_date} onChange={handleApplicantChange}   className="block w-32 rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="col-span-2 flex justify-center">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`m-4 w-40 px-8 py-3 text-lg font-bold text-white rounded-lg shadow-lg transition-all duration-300 ${
                    isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-500 hover:scale-105"}`}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </div>


        </form>
    {/* <Footer/> */}
    </>
  )
}

export default Applicant