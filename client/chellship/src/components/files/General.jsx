import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Compulsory from './Compulsory';

const General = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { applicant_id } = location.state || {};

    const [GeneralDetails, setGeneralDetails] = useState({
        applicant_id: "",
        court_inquiry:"",
        certificate_suspended:"",
        covid_infected:"",
        additional_details:"",
        past_company:"",
        past_company_manager_name_designation:"",
        past_company_telephone:"",
        visa_rejected:"",
        visa_revoked:"",
        deported_from:"",
        visa_deported_explain:""
    });

    useEffect(() => {
        if (applicant_id) {
            console.log("Setting applicant_id:", applicant_id);
            setGeneralDetails((prevDetails) => ({
                ...prevDetails,
                applicant_id,
            }))
        }
    }, [applicant_id])

    const handleGeneralChange = (e) => {
        const { name, value } = e.target;
        setGeneralDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!window.confirm('Are you sure to continue ?')) {
            return;
        }

        console.log(GeneralDetails);

        const details = { ...GeneralDetails };
        if (!details.additional_details || details.additional_details.trim() === "") {
            console.log("Hi:",details);
            details.additional_details = "No additional details";
        }
        if (!details.visa_deported_explain || details.visa_deported_explain.trim() === "") {
            console.log("Hi:",details);
            details.visa_deported_explain = "No additional details";
        }

        axios.post('http://localhost:3001/general/create', details)
            .then((response) => {
                alert('General Data created successfully');
                navigate('/experience', { state: { applicant_id: response.data.applicantDetails.applicant_id } });

            })
            .catch((error) => {
                console.error('Error adding General Data:', error);
                alert('Failed to add General Data. Please check the console for errors.');
            });
    };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
            <div className='border border-gray-300 rounded-md p-3 shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
                    {/* General */}
                    <div className='flex min-h-full flex-col justify-center lg:px-4 py-6'>
                    <h4 className='bold text-center'><b>General</b></h4>
                        <div className='border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
                                <div className='grid grid-cols-2'>
                                    <label className='text-sm font-medium text-gray-900 m-3' htmlFor="court_inquiry">
                                        Have you ever been involved in a court of enquiry or maritime accident? <Compulsory/>
                                    </label>
                                    <div>
                                        <label>
                                            <input type="radio" name='court_inquiry' required onChange={handleGeneralChange} value='Yes' checked={GeneralDetails.court_inquiry === 'Yes'}   /> 
                                            <span className="ml-2">Yes</span>
                                        </label> &nbsp;
                                        <label>
                                            <input type="radio" name='court_inquiry' onChange={handleGeneralChange} value='No' checked={GeneralDetails.court_inquiry === 'No'}   /> 
                                            <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <label className='text-sm font-medium text-gray-900 m-3' htmlFor="certificate_suspended">
                                        Have you ever had your Certificate of Competency suspended or revoked? <Compulsory/>
                                    </label>
                                    <div>
                                        <label>
                                            <input type="radio" name='certificate_suspended' required onChange={handleGeneralChange} value='Yes' checked={GeneralDetails.certificate_suspended === 'Yes'}   /> 
                                            <span className="ml-2">Yes</span>
                                        </label> &nbsp;
                                        <label>
                                            <input type="radio" name='certificate_suspended' onChange={handleGeneralChange} value='No' checked={GeneralDetails.certificate_suspended === 'No'}   /> 
                                            <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <label className='text-sm font-medium text-gray-900 m-3' htmlFor="covid_infected">
                                        Have you ever been infected with Covid-19 in the past? If Yes, please mention date below: <Compulsory/>
                                    </label>
                                    <div>
                                        <label>
                                            <input type="radio" name='covid_infected' required  onChange={handleGeneralChange} value='Yes' checked={GeneralDetails.covid_infected === 'Yes'}/> 
                                            <span className="ml-2">Yes</span>
                                        </label> &nbsp;
                                        <label>
                                            <input type="radio" name='covid_infected'  onChange={handleGeneralChange} value='No' checked={GeneralDetails.covid_infected === 'No'}   /> 
                                            <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>

                                {(GeneralDetails.court_inquiry === 'Yes' || 
                                    GeneralDetails.certificate_suspended === 'Yes' || 
                                    GeneralDetails.covid_infected === 'Yes') && (
                                    <div className="m-2">
                                        <label htmlFor="additional_details" className="text-sm font-medium text-gray-900">
                                        If the answer is "Yes" to any of the above, please provide details: <Compulsory/>
                                        </label>
                                        <textarea 
                                        id="additional_details" 
                                        name="additional_details" 
                                        value={GeneralDetails.additional_details}
                                        onChange={handleGeneralChange} 
                                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                    </div>
                                    )}

                        </div>
                    </div>
            </div>
        </div>

        <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
            <div className='border border-gray-300 rounded-md p-3 shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
                <div className='border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
                        <div className='grid grid-cols-2'>
                            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="visa_rejected">
                                Have you ever been rejected for any Visa that you applied? : <Compulsory/>
                            </label>
                            <div>
                                <label>
                                    <input type="radio" name='visa_rejected' required onChange={handleGeneralChange} value='Yes' checked={GeneralDetails.visa_rejected === 'Yes'}   /> 
                                    <span className="ml-2">Yes</span>
                                </label> &nbsp;
                                <label>
                                    <input type="radio" name='visa_rejected' onChange={handleGeneralChange} value='No' checked={GeneralDetails.visa_rejected === 'No'}   /> 
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>

                        <div className='grid grid-cols-2'>
                            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="visa_revoked">
                                Has any of your visas ever been revoked? : <Compulsory/>
                            </label>
                            <div>
                                <label>
                                    <input type="radio" name='visa_revoked' required onChange={handleGeneralChange} value='Yes' checked={GeneralDetails.visa_revoked === 'Yes'} /> 
                                    <span className="ml-2">Yes</span>
                                </label> &nbsp;
                                <label>
                                    <input type="radio" name='visa_revoked' onChange={handleGeneralChange} value='No' checked={GeneralDetails.visa_revoked === 'No'} /> 
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>

                        <div className='grid grid-cols-2'>
                            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="deported_from">
                                Have you ever been deported from any country? : <Compulsory/>
                            </label>
                            <div>
                                <label>
                                    <input type="radio" name='deported_from' required onChange={handleGeneralChange} value='Yes' checked={GeneralDetails.deported_from === 'Yes'}   /> 
                                    <span className="ml-2">Yes</span>
                                </label> &nbsp;
                                <label>
                                    <input type="radio" name='deported_from' onChange={handleGeneralChange} value='No' checked={GeneralDetails.deported_from === 'No'}   /> 
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>

                        {(GeneralDetails.deported_from === 'Yes' || 
                            GeneralDetails.visa_rejected === 'Yes' || 
                                GeneralDetails.visa_revoked === 'Yes') && (
                                    <div className="m-2">
                                        <label htmlFor="visa_deported_explain" className="text-sm font-medium text-gray-900">
                                            If the answer is "Yes" to any of the above, please provide details: <Compulsory/>
                                        </label>
                                        <textarea 
                                            id="visa_deported_explain" 
                                            name="visa_deported_explain" 
                                            value={GeneralDetails.visa_deported_explain}
                                            onChange={handleGeneralChange} 
                                            className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
                                    </div>
                        )}


                </div>
            </div>
        </div>


                    {/* References */}
                    <div className='flex min-h-full flex-col justify-center lg:px-4 py-6'>
    <h4 className='font-bold text-center mb-4'><b>References</b></h4>
    <div className='border border-gray-300 rounded-md shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
        <h4 className='font-bold mb-4'>State details of the Superintendent / Manager of your current or immediate past employers as below :</h4>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='flex flex-col items-start p-2'>
                <label htmlFor="past_company" className="text-sm font-medium text-gray-900">
                    Name of Company: <Compulsory />
                </label>
                <input
                    id="past_company"
                    name="past_company"
                    type="text"
                    value={GeneralDetails.past_company}
                    onChange={handleGeneralChange}
                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
            </div>

            <div className='flex flex-col items-start p-2'>
                <label htmlFor="past_company_manager_name_designation" className="text-sm font-medium text-gray-900">
                    Superintendent/Manager's Name & Designation: <Compulsory />
                </label>
                <input
                    id="past_company_manager_name_designation"
                    name="past_company_manager_name_designation"
                    type="text"
                    value={GeneralDetails.past_company_manager_name_designation}
                    onChange={handleGeneralChange}
                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
            </div>

            <div className='flex flex-col items-start p-2'>
                <label htmlFor="past_company_telephone" className="text-sm font-medium text-gray-900">
                    Telephone: <Compulsory />
                </label>
                <input
                    id="past_company_telephone"
                    name="past_company_telephone"
                    type="text"
                    value={GeneralDetails.past_company_telephone}
                    onChange={handleGeneralChange}
                    className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
            </div>
        </div>
    </div>
</div>


                    <button
                        type="submit"
                        className=" m-4 p-4 text-center px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500">
                        Save & Continue
                    </button>
        </form>
    </>
  )
}

export default General
