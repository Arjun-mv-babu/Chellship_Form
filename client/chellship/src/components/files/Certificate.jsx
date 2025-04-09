// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Compulsory from './Compulsory';

// const Certificate = () => {

//     const navigate = useNavigate();
//     const location = useLocation();

//     const applicant_id = location.state?.applicant_id || null;

//     const [CertificateDetails, setCertificateDetails] = useState({
//         applicant_id: "",
//         highest_certificate:"",
//         highest_certificate_grade:"",
//         highest_certificate_issue_country:"",
//         highest_certificate_number:"",
//         highest_certificate_from_date:"",
//         highest_certificate_to_date:"",
//         highest_certificate_place_issued:"",
//         equivalent_certificate:"",
//         equivalent_certificate_number: "",
//         equivalent_certificate_from_date: "",
//         equivalent_certificate_to_date: "",
//         equivalent_certificate_place_issued: "",
//         attended_course: "",
//         attended_course_institute: "",
//         attended_course_certificate_number: "",
//         attended_course_from_date: "",
//         attended_course_to_date: "",
//         PMS: "",
//         AMOS4W: "",
//     });

//     useEffect(() => {
//         console.log('Location state:', location.state); 
//         if (applicant_id) {
//             console.log("Setting applicant_id:", applicant_id);
//             setCertificateDetails((prevDetails) => ({
//                 ...prevDetails,
//                 applicant_id,
//             }))
//         }
//     }, [applicant_id])

//     const handleCertificateChange = (e) => {
//         const { name, value } = e.target;
//         setCertificateDetails((prevDetails) => ({
//             ...prevDetails,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!window.confirm('Are you sure to continue ?')) {
//             return;
//         }

//         console.log(CertificateDetails);

//         axios.post('http://localhost:3001/certificate/create', CertificateDetails)
//             .then((response) => {
//                 alert('Certifiactes Added successfully');
//                 navigate('/medical', { state: { applicant_id: response.data.applicantDetails.applicant_id } });
//             })
//             .catch((error) => {
//                 console.error('Error adding Certifiactes:', error);
//                 alert('Failed to add Certifiactes data. Please check the console for errors.');
//             });
//     };

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//         <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
//             <h4 className='bold text-center'><b>Certificate of Competency (COC) / Certificate of Proficiency (COP) / Watchkeeping</b></h4>
//             <div className='border border-gray-300 rounded-md p-6 shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
//                 <h4 className='bold'>State details of highest Certificate of Competency / Proficiency held</h4>
//                 <div className='grid sm:grid-cols-3 lg:grid-cols-3 gap-4'>
                                
//                     <div className='flex flex-col p-2'>
//                         <label htmlFor="highest_certificate" className="text-sm font-medium text-gray-900">
//                             Certificate : <Compulsory/>
//                         </label>
//                         <input id="highest_certificate" required name="highest_certificate" type="text" value={CertificateDetails.highest_certificate} onChange={handleCertificateChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//                     </div>

//                     <div className='flex flex-col p-2'>
//                         <label htmlFor="highest_certificate_grade" className="text-sm font-medium text-gray-900">
//                             Grade : <Compulsory/>
//                         </label>
//                         <input id="highest_certificate_grade" required name="highest_certificate_grade" type="text" value={CertificateDetails.highest_certificate_grade} onChange={handleCertificateChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//                     </div>

//                     <div className='flex flex-col p-2'>
//                         <label htmlFor="highest_certificate_issue_country" className="text-sm font-medium text-gray-900">
//                             Issuing Country : <Compulsory/>
//                         </label>
//                         <input id="highest_certificate_issue_country" required name="highest_certificate_issue_country" type="text" value={CertificateDetails.highest_certificate_issue_country} onChange={handleCertificateChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//                     </div>

//                     <div className='flex flex-col p-2'>
//                         <label htmlFor="highest_certificate_number" className="text-sm font-medium text-gray-900">
//                             Certificate No : <Compulsory/>
//                         </label>
//                         <input id="highest_certificate_number" required name="highest_certificate_number" type="text" value={CertificateDetails.highest_certificate_number} onChange={handleCertificateChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//                     </div>

//                     <div className='flex flex-col p-2'>
//                         <label htmlFor="highest_certificate_from_date" className="text-sm font-medium text-gray-900">
//                             Date Issued : <Compulsory/>
//                         </label>
//                         <input id="highest_certificate_from_date" required name="highest_certificate_from_date" type="date" value={CertificateDetails.highest_certificate_from_date} onChange={handleCertificateChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//                     </div>

//                     <div className='flex flex-col p-2'>
//                         <label htmlFor="highest_certificate_place_issued" className="text-sm font-medium text-gray-900">
//                             Place Issued : <Compulsory/>
//                         </label>
//                         <input id="highest_certificate_place_issued" required name="highest_certificate_place_issued" type="text" value={CertificateDetails.highest_certificate_place_issued} onChange={handleCertificateChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//                     </div>

//                     <div className='flex flex-col p-2'>
//                         <label htmlFor="highest_certificate_to_date" className="text-sm font-medium text-gray-900">
//                             Valid Until :
//                         </label>
//                         <input id="highest_certificate_to_date" name="highest_certificate_to_date" type="date" value={CertificateDetails.highest_certificate_to_date} onChange={handleCertificateChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//                     </div>

//                 </div>
//             </div>

//         </div><br />

//         {/* Certificate of Equivalent Competency */}
//         <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
//         <h4 className='bold text-center'><b>Certificate of Equivalent Competency</b></h4>
//         <div className='border border-gray-300 rounded-md p-3 shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6 '>
//     <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4'>
//         <div className='flex flex-col  p-2'>
//             <label htmlFor="equivalent_certificate" className="text-sm font-medium text-gray-900">
//                 Certificate / License :
//             </label>
//             <input id="equivalent_certificate" name="equivalent_certificate" type="text" 
//                 value={CertificateDetails.equivalent_certificate} 
//                 onChange={handleCertificateChange} 
//                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
//                 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
//                 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//         </div>

//         <div className='flex flex-col  p-2'>
//             <label htmlFor="equivalent_certificate_number" className="text-sm font-medium text-gray-900">
//                 Certificate No. :
//             </label>
//             <input id="equivalent_certificate_number" name="equivalent_certificate_number" type="text" 
//                 value={CertificateDetails.equivalent_certificate_number} 
//                 onChange={handleCertificateChange} 
//                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
//                 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
//                 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//         </div>

//         <div className='flex flex-col  p-2'>
//             <label htmlFor="equivalent_certificate_from_date" className="text-sm font-medium text-gray-900">
//                 Date of Issue :
//             </label>
//             <input id="equivalent_certificate_from_date" name="equivalent_certificate_from_date" type="date" 
//                 value={CertificateDetails.equivalent_certificate_from_date} 
//                 onChange={handleCertificateChange} 
//                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
//                 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
//                 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//         </div>

//         <div className='flex flex-col  p-2'>
//             <label htmlFor="equivalent_certificate_place_issued" className="text-sm font-medium text-gray-900">
//                 Place of Issue :
//             </label>
//             <input id="equivalent_certificate_place_issued" name="equivalent_certificate_place_issued" type="text" 
//                 value={CertificateDetails.equivalent_certificate_place_issued} 
//                 onChange={handleCertificateChange} 
//                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
//                 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
//                 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//         </div>

//         <div className='flex flex-col  p-2'>
//             <label htmlFor="equivalent_certificate_to_date" className="text-sm font-medium text-gray-900">
//                 Valid Until :
//             </label>
//             <input id="equivalent_certificate_to_date" name="equivalent_certificate_to_date" type="date" 
//                 value={CertificateDetails.equivalent_certificate_to_date} 
//                 onChange={handleCertificateChange} 
//                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
//                 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
//                 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//         </div>
//     </div>
// </div>
//         </div>

//         {/* Courses attended and Certificates obtained */}
//         <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
//             <h4 className='bold text-center'><b>Courses attended and Certificates obtained</b></h4>
//             <div className='border border-gray-300 rounded-md p-6 shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>

// <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4'>
    
//     <div className='flex flex-col  p-2'>
//         <label htmlFor="attended_course" className="text-sm font-medium text-gray-900">
//             Course : <Compulsory/>
//         </label>
//         <input id="attended_course" required name="attended_course" type="text" 
//             value={CertificateDetails.attended_course} 
//             onChange={handleCertificateChange} 
//             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
//             ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
//             focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//     </div>

//     <div className='flex flex-col  p-2'>
//         <label htmlFor="attended_course_institute" className="text-sm font-medium text-gray-900">
//             Institute / Place : <Compulsory/>
//         </label>
//         <input id="attended_course_institute" required name="attended_course_institute" type="text" 
//             value={CertificateDetails.attended_course_institute} 
//             onChange={handleCertificateChange} 
//             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
//             ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
//             focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//     </div>

//     <div className='flex flex-col  p-2'>
//         <label htmlFor="attended_course_certificate_number" className="text-sm font-medium text-gray-900">
//             Certificate No. : <Compulsory/>
//         </label>
//         <input id="attended_course_certificate_number" required name="attended_course_certificate_number" type="text" 
//             value={CertificateDetails.attended_course_certificate_number} 
//             onChange={handleCertificateChange} 
//             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
//             ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
//             focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//     </div>

//     <div className='flex flex-col  p-2'>
//         <label htmlFor="attended_course_from_date" className="text-sm font-medium text-gray-900">
//             Date Issued : <Compulsory/>
//         </label>
//         <input id="attended_course_from_date" required name="attended_course_from_date" type="date" 
//             value={CertificateDetails.attended_course_from_date} 
//             onChange={handleCertificateChange} 
//             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
//             ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
//             focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//     </div>

//     <div className='flex flex-col  p-2'>
//         <label htmlFor="attended_course_to_date" className="text-sm font-medium text-gray-900">
//             Valid Until :
//         </label>
//         <input id="attended_course_to_date" name="attended_course_to_date" type="date" 
//             value={CertificateDetails.attended_course_to_date} 
//             onChange={handleCertificateChange} 
//             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm 
//             ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
//             focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//     </div>
// </div>
// </div>
//     </div>


//         {/* Computer Literacy */}
//         <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
//             <h4 className='bold text-center'><b>Computer Literacy</b></h4>
//             <div className='border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
//                 <div className='grid grid-cols-2'>
//                     <label className='text-sm font-medium text-gray-900 m-3' htmlFor="PMS">
//                         Planned Maintenance System (PMS): <Compulsory/>
//                     </label>
//                     <div>
//                         <label>
//                             <input type="radio" name='PMS' required onChange={handleCertificateChange} value='Yes' checked={CertificateDetails.PMS === 'Yes'} /> 
//                                 <span className="ml-2">Yes</span>
//                         </label> &nbsp;
//                         <label>
//                             <input type="radio" name='PMS' onChange={handleCertificateChange} value='No' checked={CertificateDetails.PMS === 'No'}  /> 
//                                 <span className="ml-2">No</span>
//                         </label>
//                     </div>
//                 </div>

//                 <div className='grid grid-cols-2'>
//                     <label className='text-sm font-medium text-gray-900 m-3' htmlFor="AMOS4W">
//                         Training Undergone for AMOS4W: <Compulsory/>
//                     </label>
//                     <div>
//                         <label>
//                             <input type="radio" name='AMOS4W' required onChange={handleCertificateChange} value='Yes' checked={CertificateDetails.AMOS4W === 'Yes'}  /> 
//                                 <span className="ml-2">Yes</span>
//                         </label> &nbsp;
//                         <label>
//                             <input type="radio" name='AMOS4W' onChange={handleCertificateChange} value='No' checked={CertificateDetails.AMOS4W === 'No'}  /> 
//                                 <span className="ml-2">No</span>
//                         </label>
//                     </div>
//                 </div>


//             </div>
//         </div> 
//         <button
//             type="submit"
//             className=" m-4 p-4 text-center px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500">
//             Save & Continue
//         </button>
//     </form>
//     </>
//   )
// }

// export default Certificate
