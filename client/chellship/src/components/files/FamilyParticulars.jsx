// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Compulsory from './Compulsory';

// const FamilyParticulars = () => {

//     const navigate = useNavigate();
//     const location = useLocation();

//     const { applicant_id } = location.state || {};


//     const [familyDetails, setFamilyDetails] = useState({
//         applicant_id: "",
//         emergency_name: "",
//         emergency_relationship: "",
//         emergency_address: "",
//         emergency_tel: "",
//         emergency_email: "",
//         family_member_name: "",
//         sex: "",
//         date_of_birth: "",
//         passport_number: "",
//         ECNR: "",
//         date_issued: "",
//         place_issued: "",
//     });

//     useEffect(() => {
//         if (applicant_id) {
//             console.log("Setting applicant_id:", applicant_id);
//             setFamilyDetails((prevDetails) => ({
//                 ...prevDetails,
//                 applicant_id,
//             }))
//         }
//     }, [applicant_id])

//     const handleFamilyChange = (e) => {
//         const { name, value } = e.target;
//         setFamilyDetails((prevDetails) => ({
//             ...prevDetails,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!window.confirm('Are you sure to continue ?')) {
//             return;
//         }

//         console.log(familyDetails);

//         axios.post('http://localhost:3001/familyparticulars/create', familyDetails)
//             .then((response) => {
//                 alert('Family Data created successfully');
//                 navigate('/educationbackground', { state: { applicant_id: response.data.applicantDetails.applicant_id } });

//             })
//             .catch((error) => {
//                 console.error('Error adding Family Data:', error);
//                 alert('Failed to add Family Data. Please check the console for errors.');
//             });
//     };


//     return (

//         <>
//             <form onSubmit={handleSubmit}>
//                 <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>

//                     <div className='border border-gray-300 rounded-md p-3 shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
//                         <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
//                             <h4 className='bold text-center'><b>Family Particulars</b></h4>
//                             <div className='border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>

//                                 <div>
//                                     <div className='grid grid-cols-3'>
//                                         <div className='flexbox items-center p-4'>
//                                             <h5>Emergency Contact :</h5>
//                                         </div>
//                                         <div className='flexbox items-center p-4'>
//                                             <label htmlFor="emergency_name" className="text-sm font-medium text-gray-900">
//                                                 Name : <Compulsory/>
//                                             </label>
//                                             <input id="emergency_name" required name="emergency_name" type="text" value={familyDetails.emergency_name} onChange={handleFamilyChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
//                                         </div>

//                                         <div className='flexbox items-center p-4'>
//                                             <label htmlFor="emergency_relationship" className="text-sm font-medium text-gray-900">
//                                                 Relationship : <Compulsory/>
//                                             </label>
//                                             <input id="emergency_relationship" required name="emergency_relationship" type="text" value={familyDetails.emergency_relationship} onChange={handleFamilyChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div className='p-1'>
//                                             <label htmlFor="emergency_address" className="text-sm font-medium text-gray-900">
//                                                 Address : <Compulsory/>
//                                             </label>
//                                             <textarea id="emergency_address" required name="emergency_address" type="text" value={familyDetails.emergency_address} onChange={handleFamilyChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
//                                         </div>
//                                     </div>
//                                     <div className='grid grid-cols-2'>
//                                         <div className='flexbox items-center p-4'>
//                                             <label htmlFor="emergency_tel" className="text-sm font-medium text-gray-900">
//                                                 Tel No : <Compulsory/>
//                                             </label>
//                                             <input id="emergency_tel" required name="emergency_tel" type="tel" value={familyDetails.emergency_tel} onChange={handleFamilyChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
//                                         </div>
//                                         <div className='flexbox items-center p-4'>
//                                             <label htmlFor="emergency_email" className="text-sm font-medium text-gray-900">
//                                                 Email :
//                                             </label>
//                                             <input id="emergency_email" name="emergency_email" type="mail" value={familyDetails.emergency_email} onChange={handleFamilyChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
//                                         </div>
//                                     </div>

//                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                                         <div className="flex flex-col space-y-2 p-4">
//                                             <label htmlFor="family_member_name" className="text-sm font-medium text-gray-900">
//                                                 Family Member Name:
//                                             </label>
//                                             <input
//                                                 id="family_member_name"
//                                                 name="family_member_name"
//                                                 type="text"
//                                                 value={familyDetails.family_member_name}
//                                                 onChange={handleFamilyChange}
//                                                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//                                             />
//                                         </div>

//                                         <div className="flex flex-col space-y-2 p-4">
//                                             <label htmlFor="sex" className="text-sm font-medium text-gray-900">
//                                                 Sex:
//                                             </label>
//                                             <input
//                                                 id="sex"
//                                                 name="sex"
//                                                 type="text"
//                                                 value={familyDetails.sex}
//                                                 onChange={handleFamilyChange}
//                                                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//                                             />
//                                         </div>

//                                         <div className="flex flex-col space-y-2 p-4">
//                                             <label htmlFor="date_of_birth" className="text-sm font-medium text-gray-900">
//                                                 DOB:
//                                             </label>
//                                             <input
//                                                 id="date_of_birth"
//                                                 name="date_of_birth"
//                                                 type="date"
//                                                 value={familyDetails.date_of_birth}
//                                                 onChange={handleFamilyChange}
//                                                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//                                             />
//                                         </div>

//                                         <div className="flex flex-col space-y-2 p-4">
//                                             <label htmlFor="passport_number" className="text-sm font-medium text-gray-900">
//                                                 Passport Number:
//                                             </label>
//                                             <input
//                                                 id="passport_number"
//                                                 name="passport_number"
//                                                 type="text"
//                                                 value={familyDetails.passport_number}
//                                                 onChange={handleFamilyChange}
//                                                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//                                             />
//                                         </div>

//                                         <div className="flex flex-col space-y-2 p-4">
//                                             <label className="text-sm font-medium text-gray-900" htmlFor="ECNR">
//                                                 ECNR
//                                             </label>
//                                             <div className="flex space-x-4">
//                                                 <label className="flex items-center">
//                                                     <input
//                                                         type="radio"
//                                                         onChange={handleFamilyChange}
//                                                         name="ECNR"
//                                                         value="Yes"
//                                                         checked={familyDetails.ECNR === 'Yes'}
//                                                     />
//                                                     <span className="ml-2">Yes</span>
//                                                 </label>
//                                                 <label className="flex items-center">
//                                                     <input
//                                                         type="radio"
//                                                         onChange={handleFamilyChange}
//                                                         name="ECNR"
//                                                         value="No"
//                                                         checked={familyDetails.ECNR === 'No'}
//                                                     />
//                                                     <span className="ml-2">No</span>
//                                                 </label>
//                                             </div>
//                                         </div>

//                                         <div className="flex flex-col space-y-2 p-4">
//                                             <label htmlFor="date_issued" className="text-sm font-medium text-gray-900">
//                                                 Date Issued:
//                                             </label>
//                                             <input
//                                                 id="date_issued"
//                                                 name="date_issued"
//                                                 type="date"
//                                                 value={familyDetails.date_issued}
//                                                 onChange={handleFamilyChange}
//                                                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//                                             />
//                                         </div>

//                                         <div className="flex flex-col space-y-2 p-4">
//                                             <label htmlFor="place_issued" className="text-sm font-medium text-gray-900">
//                                                 Place Issued:
//                                             </label>
//                                             <input
//                                                 id="place_issued"
//                                                 name="place_issued"
//                                                 type="text"
//                                                 value={familyDetails.place_issued}
//                                                 onChange={handleFamilyChange}
//                                                 className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//                                             />
//                                         </div>
//                                     </div>

//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <button
//                     type="submit"
//                     className=" m-4 p-4 text-center px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500">
//                     Save & Continue
//                 </button>
//             </form>
//         </>
//     )
// }

// export default FamilyParticulars
