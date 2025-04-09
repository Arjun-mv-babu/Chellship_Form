// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Compulsory from './Compulsory';

// const Medical = () => {

//     const navigate = useNavigate();
//     const location = useLocation();

//     const { applicant_id } = location.state || {};

//     const [MedicalDetails, setMedicalDetails] = useState({
//         applicant_id: "",
//         signed_off:"",
//         surgery:"",
//         illness:"",
//         regular_medicine:"",
//         what_medicine:"",
//         carry_medicine:"",
//         health_disability_problems:"",
//         alcohol:"",
//         smoke: "",
//         explain_medicine: "",
//         vaccination_name: "",
//         vaccination_dose_type: "",
//         vaccination_manufacturer: "",
//         vaccination_date: "",
//         vaccination_place: "",
//     });

//     useEffect(() => {
//         if (applicant_id) {
//             console.log("Setting applicant_id:", applicant_id);
//             setMedicalDetails((prevDetails) => ({
//                 ...prevDetails,
//                 applicant_id,
//             }))
//         }
//     }, [applicant_id])

//     const handleMedicalChange = (e) => {
//         const { name, value } = e.target;
//         setMedicalDetails((prevDetails) => ({
//             ...prevDetails,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!window.confirm('Are you sure to continue ?')) {
//             return;
//         }

//         const details = { ...MedicalDetails };
//         if (!details.explain_medicine || details.explain_medicine.trim() === "") {
//             console.log("details:",details);
//             details.explain_medicine = "No additional details";
//         }

//         console.log(MedicalDetails);

//         axios.post('http://localhost:3001/medical/create', details)
//             .then((response) => {
//                 alert('Medical Details Added successfully');
//                 navigate('/general', { state: { applicant_id: response.data.applicantDetails.applicant_id } });
//             })
//             .catch((error) => {
//                 console.error('Error adding Medical Details:', error);
//                 alert('Failed to add Medical Details. Please check the console for errors.');
//             });
//     };

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       {/* Medical History */}
//       <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
//         <h4 className='bold text-center'><b>Medical History</b></h4>
//         <div className='border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
//           <div className='grid grid-cols-2'>
//             <label className='text-sm font-medium text-gray-900 m-3' htmlFor="">
//               Have you ever signed off from any ship on medical grounds? <Compulsory/>
//             </label>
//             <div>
//               <label>
//                 <input type="radio" name='signed_off' required onChange={handleMedicalChange} value='Yes' checked={MedicalDetails.signed_off === 'Yes'}   /> 
//                   <span className="ml-2">Yes</span>
//                 </label> &nbsp;
//               <label>
//                 <input type="radio" name='signed_off' onChange={handleMedicalChange} value='No' checked={MedicalDetails.signed_off === 'No'}   /> 
//                   <span className="ml-2">No</span>
//               </label>
//             </div>
//           </div>

//           <div className='grid grid-cols-2'>
//             <label className='text-sm font-medium text-gray-900 m-3' htmlFor="">
//               Have you undergone any operation / surgery in the past? <Compulsory/>
//             </label>
//             <div>
//               <label>
//                 <input type="radio" name='surgery' required  onChange={handleMedicalChange} value='Yes' checked={MedicalDetails.surgery === 'Yes'}   /> 
//                   <span className="ml-2">Yes</span>
//               </label> &nbsp;
//               <label>
//                 <input type="radio" name='surgery'  onChange={handleMedicalChange} value='No' checked={MedicalDetails.surgery === 'No'}   /> 
//                   <span className="ml-2">No</span>
//               </label>
//             </div>
//           </div>

//           <div className='grid grid-cols-2'>
//             <label className='text-sm font-medium text-gray-900 m-3' htmlFor="">
//               Are you suffering or suffered from any major illness? <Compulsory/>
//             </label>
//             <div>
//               <label>
//                 <input type="radio" name='illness' required  onChange={handleMedicalChange} value='Yes' checked={MedicalDetails.illness === 'Yes'}   /> 
//                   <span className="ml-2">Yes</span>
//               </label> &nbsp;
//               <label>
//                 <input type="radio" name='illness'  onChange={handleMedicalChange} value='No' checked={MedicalDetails.illness === 'No'}   /> 
//                   <span className="ml-2">No</span>
//               </label>
//             </div>
//           </div>

//           <div className='grid grid-cols-2'>
//             <label className='text-sm font-medium text-gray-900 m-3' htmlFor="">
//               Have you been taking any medicine regularly? <Compulsory/>
//             </label>
//             <div>
//               <label>
//                 <input type="radio" name='regular_medicine'  required onChange={handleMedicalChange} value='Yes' checked={MedicalDetails.regular_medicine === 'Yes'}   /> 
//                   <span className="ml-2">Yes</span>
//               </label> &nbsp;
//               <label>
//                 <input type="radio" name='regular_medicine'  onChange={handleMedicalChange} value='No' checked={MedicalDetails.regular_medicine === 'No'}   /> 
//                   <span className="ml-2">No</span>
//               </label>
//             </div>
//           </div>

//           <div className='grid grid-cols-2'>
//             <label className='text-sm font-medium text-gray-900 m-3' htmlFor="what_medicine">
//               If Yes, then what are these medicines?
//             </label>
//             <div>
//               <label>
//                 <input id="what_medicine" name="what_medicine" type="text"  value={MedicalDetails.what_medicine} onChange={handleMedicalChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//               </label>
//             </div>
//           </div>

//           <div className='grid grid-cols-2'>
//             <label className='text-sm font-medium text-gray-900 m-3' htmlFor="carry_medicine">
//               Which medicines do you have to carry with you on board?
//             </label>
//             <div>
//               <label>
//                 <input id="carry_medicine" name="carry_medicine" type="text" value={MedicalDetails.carry_medicine} onChange={handleMedicalChange}  className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
//               </label>
//             </div>
//           </div>

//           <div className='grid grid-cols-2'>
//             <label className='text-sm font-medium text-gray-900 m-3' htmlFor="health_disability_problems">
//               Do you have any health or disability problems now? <Compulsory/>
//             </label>
//             <div>
//               <label>
//                 <input type="radio" name='health_disability_problems' required  onChange={handleMedicalChange} value='Yes' checked={MedicalDetails.health_disability_problems === 'Yes'}   /> 
//                   <span className="ml-2">Yes</span>
//               </label> &nbsp;
//               <label>
//                 <input type="radio" name='health_disability_problems'  onChange={handleMedicalChange} value='No' checked={MedicalDetails.health_disability_problems === 'No'}   /> 
//                   <span className="ml-2">No</span>
//               </label>
//               </div>
//           </div>

//           <div className='grid grid-cols-2'>
//             <label className='text-sm font-medium text-gray-900 m-3' htmlFor="alcohol">
//               Do you drink Alcohol? <Compulsory/>
//             </label>
//             <div>
//               <label>
//                 <input type="radio" name='alcohol' required  onChange={handleMedicalChange} value='Yes' checked={MedicalDetails.alcohol === 'Yes'}   /> 
//                   <span className="ml-2">Yes</span>
//               </label> &nbsp;
//               <label>
//                 <input type="radio" name='alcohol'  onChange={handleMedicalChange} value='No' checked={MedicalDetails.alcohol === 'No'}   /> 
//                   <span className="ml-2">No</span>
//                 </label>
//             </div>
//           </div>

//           <div className='grid grid-cols-2'>
//             <label className='text-sm font-medium text-gray-900 m-3' htmlFor="smoke">
//               Do you smoke? <Compulsory/>
//             </label>
//             <div>
//               <label>
//                 <input type="radio" name='smoke' required  onChange={handleMedicalChange} value='Yes' checked={MedicalDetails.smoke === 'Yes'}   /> 
//                   <span className="ml-2">Yes</span>
//               </label> &nbsp;
//               <label>
//                 <input type="radio" name='smoke'  onChange={handleMedicalChange} value='No' checked={MedicalDetails.smoke === 'No'}   /> 
//                   <span className="ml-2">No</span>
//               </label>
//             </div>
//           </div>

//           {(MedicalDetails.signed_off === 'Yes' || 
//             MedicalDetails.surgery === 'Yes' || 
//             MedicalDetails.illness === 'Yes' || 
//             MedicalDetails.regular_medicine === 'Yes' || 
//             MedicalDetails.health_disability_problems === 'Yes' || 
//             MedicalDetails.alcohol === 'Yes' || 
//               MedicalDetails.smoke === 'Yes') && (
//               <div className="m-2">
//                 <label htmlFor="explain_medicine" className="text-sm font-medium text-gray-900">
//                   If the answer is "Yes" to any of the above, please provide details: <Compulsory/>
//                 </label>
//                 <textarea 
//                   id="explain_medicine" 
//                   name="explain_medicine" 
//                   value={MedicalDetails.explain_medicine}
//                   onChange={handleMedicalChange} 
//                   className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
//               </div>
//             )}
//         </div>
//       </div> 


//             {/* Vaccinations */}
//             <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
//             <h4 className='bold text-center'><b>Vaccinations</b></h4>
//             <div className='border border-gray-300 rounded-md p-6 shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
//     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
//         <div className='flex flex-col items-start p-2'>
//             <label htmlFor="vaccination_name" className="text-sm font-medium text-gray-900">
//                 Vaccination Name: <Compulsory />
//             </label>
//             <input
//                 id="vaccination_name"
//                 required
//                 name="vaccination_name"
//                 type="text"
//                 value={MedicalDetails.vaccination_name}
//                 onChange={handleMedicalChange}
//                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             />
//         </div>

//         <div className='flex flex-col items-start p-2'>
//             <label htmlFor="vaccination_dose_type" className="text-sm font-medium text-gray-900">
//                 Vaccination Dose Type:
//             </label>
//             <input
//                 id="vaccination_dose_type"
//                 name="vaccination_dose_type"
//                 type="text"
//                 value={MedicalDetails.vaccination_dose_type}
//                 onChange={handleMedicalChange}
//                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             />
//         </div>

//         <div className='flex flex-col items-start p-2'>
//             <label htmlFor="vaccination_manufacturer" className="text-sm font-medium text-gray-900">
//                 Vaccination Manufacturer: <Compulsory />
//             </label>
//             <input
//                 id="vaccination_manufacturer"
//                 required
//                 name="vaccination_manufacturer"
//                 type="text"
//                 value={MedicalDetails.vaccination_manufacturer}
//                 onChange={handleMedicalChange}
//                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             />
//         </div>

//         <div className='flex flex-col items-start p-2'>
//             <label htmlFor="vaccination_date" className="text-sm font-medium text-gray-900">
//                 Vaccination Date:
//             </label>
//             <input
//                 id="vaccination_date"
//                 name="vaccination_date"
//                 type="date"
//                 value={MedicalDetails.vaccination_date}
//                 onChange={handleMedicalChange}
//                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             />
//         </div>

//         <div className='flex flex-col items-start p-2'>
//             <label htmlFor="vaccination_place" className="text-sm font-medium text-gray-900">
//                 Vaccination Place: <Compulsory />
//             </label>
//             <input
//                 id="vaccination_place"
//                 required
//                 name="vaccination_place"
//                 type="text"
//                 value={MedicalDetails.vaccination_place}
//                 onChange={handleMedicalChange}
//                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             />
//         </div>
//     </div>
// </div>

//       </div>
//       <button
//             type="submit"
//             className=" m-4 p-4 text-center px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500">
//             Save & Continue
//       </button>
//     </form>
//     </>
//   )
// }

// export default Medical
