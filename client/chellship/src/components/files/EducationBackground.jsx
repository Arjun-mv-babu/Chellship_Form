// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Compulsory from './Compulsory';

// const EducationBackground = () => {


//     const navigate = useNavigate();
//     const location = useLocation();

//     const { applicant_id } = location.state || {};


//     const [EducationDetails, setEducationDetails] = useState({
//         applicant_id: "",
//         school_name:"",
//         from_date:"",
//         to_date:"",
//         percentage:"",
//         degree_diploma:"",
//         institute_name:"",
//         pre_sea_from_date:"",
//         pre_sea_to_date:"",
//         course:"",
//         class_obtained:"",
//         name_of_workshop:""
//     });

//     useEffect(() => {
//         if (applicant_id) {
//             console.log("Setting applicant_id:", applicant_id);
//             setEducationDetails((prevDetails) => ({
//                 ...prevDetails,
//                 applicant_id,
//             }))
//         }
//     }, [applicant_id])

//     const handleEducationChange = (e) => {
//         const { name, value } = e.target;
//         setEducationDetails((prevDetails) => ({
//             ...prevDetails,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!window.confirm('Are you sure to continue ?')) {
//             return;
//         }

//         console.log(EducationDetails);


//         axios.post('http://localhost:3001/educationbackground/create', EducationDetails)
//             .then((response) => {
//                 alert('Education Background created successfully');
//                 navigate('/identitydocuments', { state: { applicant_id: response.data.applicantDetails.applicant_id } });
//             })
//             .catch((error) => {
//                 console.error('Error adding Education Background:', error);
//                 alert('Failed to add Education Background. Please check the console for errors.');
//             });
//     };

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//     <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
//     <div className='border border-gray-300 rounded-md p-3 shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
//     <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
//         <h4 className='bold text-center'>
//             <b>Educational Background - prior Pre-Sea Training</b>
//         </h4>
//         <div className='border border-gray-300 rounded-md p-6 shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
//             <div className='grid grid-cols-1 gap-4'>
//                 <div className='flexbox items-center'>
//                     <label htmlFor="school_name" className="text-sm font-medium text-gray-900">
//                         Name : School / College : <Compulsory/>
//                     </label>
//                     <input 
//                         id="school_name" 
//                         required 
//                         name="school_name" 
//                         value={EducationDetails.school_name} 
//                         onChange={handleEducationChange} 
//                         type="text" 
//                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
//                     />
//                 </div>
//                 <div className='grid grid-cols-2 gap-4'>
//                     <div className='flexbox items-center'>
//                         <label htmlFor="from_date" className="text-sm font-medium text-gray-900">
//                             From : <Compulsory/>
//                         </label>
//                         <input 
//                             id="from_date" 
//                             required 
//                             name="from_date" 
//                             value={EducationDetails.from_date} 
//                             onChange={handleEducationChange} 
//                             type="date" 
//                             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
//                         />
//                     </div>
//                     <div className='flexbox items-center'>
//                         <label htmlFor="to_date" className="text-sm font-medium text-gray-900">
//                             To : <Compulsory/>
//                         </label>
//                         <input 
//                             id="to_date" 
//                             required 
//                             name="to_date" 
//                             value={EducationDetails.to_date} 
//                             onChange={handleEducationChange} 
//                             type="date" 
//                             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
//                         />
//                     </div>
//                 </div>
//                 <div className='flexbox items-center'>
//                     <label htmlFor="percentage" className="text-sm font-medium text-gray-900">
//                         Percentage Marks Scored : <Compulsory/>
//                     </label>
//                     <input 
//                         id="percentage" 
//                         required 
//                         name="percentage" 
//                         value={EducationDetails.percentage} 
//                         onChange={handleEducationChange} 
//                         type="text" 
//                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
//                     />
//                 </div>
//                 <div className='flexbox items-center'>
//                     <label htmlFor="degree_diploma" className="text-sm font-medium text-gray-900">
//                         Position / Degree / Diploma : <Compulsory/>
//                     </label>
//                     <input 
//                         id="degree_diploma" 
//                         required 
//                         name="degree_diploma" 
//                         value={EducationDetails.degree_diploma} 
//                         onChange={handleEducationChange} 
//                         type="text" 
//                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
//                     />
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

// </div>

//         <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
//         <h4 className='bold text-center'><b>Pre-Sea Training</b></h4>
//         <div className='border border-gray-300 rounded-md p-3 shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
//     <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
//         <p>Deck Officers - if no Pre Sea training done, then state the “Direct” cadet period. <br />
//            Engineer Officers - to additionally state the name of the workshop attended
//         </p>
//         <div className='border border-gray-300 rounded-md p-6 shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
//             <div className='grid grid-cols-1 gap-4'>
//                 <div className='flexbox items-center'>
//                     <label htmlFor="institute_name" className="text-sm font-medium text-gray-900">
//                         Pre Sea Training Institute : <Compulsory/>
//                     </label>
//                     <input 
//                         id="institute_name" 
//                         required 
//                         name="institute_name" 
//                         type="text" 
//                         value={EducationDetails.institute_name} 
//                         onChange={handleEducationChange} 
//                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
//                     />
//                 </div>
//                 <div className='grid grid-cols-2 gap-4'>
//                     <div className='flexbox items-center'>
//                         <label htmlFor="pre_sea_from_date" className="text-sm font-medium text-gray-900">
//                             Date Commenced : <Compulsory/>
//                         </label>
//                         <input 
//                             id="pre_sea_from_date" 
//                             required 
//                             name="pre_sea_from_date" 
//                             value={EducationDetails.pre_sea_from_date} 
//                             onChange={handleEducationChange} 
//                             type="date" 
//                             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
//                         />
//                     </div>
//                     <div className='flexbox items-center'>
//                         <label htmlFor="pre_sea_to_date" className="text-sm font-medium text-gray-900">
//                             Date Completed : <Compulsory/>
//                         </label>
//                         <input 
//                             id="pre_sea_to_date" 
//                             required 
//                             name="pre_sea_to_date" 
//                             value={EducationDetails.pre_sea_to_date} 
//                             onChange={handleEducationChange} 
//                             type="date" 
//                             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
//                         />
//                     </div>
//                 </div>
//                 <div className='grid grid-cols-2 gap-4'>
//                     <div className='flexbox items-center'>
//                         <label htmlFor="course" className="text-sm font-medium text-gray-900">
//                             Degree / Diploma / Certificate : <Compulsory/>
//                         </label>
//                         <input 
//                             id="course" 
//                             required 
//                             name="course" 
//                             value={EducationDetails.course} 
//                             onChange={handleEducationChange} 
//                             type="text" 
//                             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
//                         />
//                     </div>
//                     <div className='flexbox items-center'>
//                         <label htmlFor="class_obtained" className="text-sm font-medium text-gray-900">
//                             Class Obtained :
//                         </label>
//                         <input 
//                             id="class_obtained" 
//                             name="class_obtained" 
//                             value={EducationDetails.class_obtained} 
//                             onChange={handleEducationChange} 
//                             type="text" 
//                             className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
//                         />
//                     </div>
//                 </div>
//                 <div className='flexbox items-center'>
//                     <label htmlFor="name_of_workshop" className="text-sm font-medium text-gray-900">
//                         Name of Workshop : <Compulsory/>
//                     </label>
//                     <input 
//                         id="name_of_workshop" 
//                         required 
//                         name="name_of_workshop" 
//                         value={EducationDetails.name_of_workshop} 
//                         onChange={handleEducationChange} 
//                         type="text" 
//                         className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" 
//                     />
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
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

// export default EducationBackground
