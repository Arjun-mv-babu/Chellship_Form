import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Compulsory from './Compulsory';


const Experience = () => {


    const navigate = useNavigate();
    const location = useLocation();

    const { applicant_id } = location.state || {};

    const [ExperienceDetails, setExperienceDetails] = useState({
        applicant_id:"",
        company_name:"",
        vessel_name:"",
        rank:"",
        from_date:"",
        to_date:"",
        period_months:"",
        period_days:"",
        vessel_type:"",
        engine_type:"",
        bhp:"",
        ums:"",
        dead_weight:"",
        crane_make:"",
        grab_exp:"",
        year_built:"",
        drydock_done:"",
        reason_for_leaving:"",
        chief_engineer:"",
        second_engineer:"",
        third_engineer:"",
        fourth_engineer:"",
        fifth_engineer:"",
        tme_engine_cadet:"",
        fitter:"",
        oiler:"",
        wiper:"",
        electrical_officer:""
    });

    useEffect(() => {
        if (applicant_id) {
            console.log("Setting applicant_id:", applicant_id);
            setExperienceDetails((prevDetails) => ({
                ...prevDetails,
                applicant_id,
            }))
        }
    }, [applicant_id])

    const handleExperienceChange = (e) => {
        const { name, value } = e.target;
        setExperienceDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!window.confirm('Are you sure to continue ?')) {
            return;
        }

        console.log(ExperienceDetails);

        axios.post('http://localhost:3001/experience/create', ExperienceDetails)
            .then((response) => {
                alert('Experience Data created successfully');
                navigate('/complete', { state: { applicant_id: response.data.applicantDetails.applicant_id } });
            })
            .catch((error) => {
                console.error('Error adding Experience Data:', error);
                alert('Failed to add Experience Data. Please check the console for errors.');
            });
    }; 			
    	
  return (
    <>
    <form onSubmit={handleSubmit}>
        {/* Pre-Sea Training */}
        <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
            <div className='border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-full lg:px-8 py-12'>
            <h4><b>Sea-Experience</b></h4>
            <p>Enter from descending order, i.e. latest ship first</p>
            <div className='grid grid-cols-5 p-5'>
                <div>
                    <p>GC- General Cargo	</p>
                    <p>BC - Bulk Carrier </p>
                    <p>TN - Tankers</p>
                </div>
                <div>
                    <p>MP - Multi-Purpose</p>
                    <p>PS - Passenger</p>
                    <p>PD -Product	</p>
                </div>
                <div>
                    <p>CN - Container</p>
                    <p>DR - Dredger</p>
                    <p>GS - LPG/LNG</p>
                </div>
                <div>
                    <p>OBO - Ore/Bulk/Oil</p>
                    <p>PCC - Pure Car Carrier</p>
                    <p>CH - Chemical Tanker</p>
                </div>
                <div>
                    <p>RR- RO/RO</p>
                    <p>HL - Heavy Unit</p>
                    <p>OS - Off-shore</p>
                </div>
            </div>
        </div><br /><br />

        <h4 className='bold text-center'><b>RECORD OF PREVIOUS SEA SERVICE</b></h4>
            <div className='border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-12'>
                <div className='grid grid-cols-5 p-1'>
                    <div className='flexbox items-center p-2'>
                        <label htmlFor="company_name" className="text-sm font-medium text-gray-900">
                            COMPANY :  <Compulsory/>
                        </label>
                        <input id="company_name" required name="company_name" type="text" value={ExperienceDetails.company_name} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>
                    <div className='flexbox items-center p-2'>
                        <label htmlFor="vessel_name" className="text-sm font-medium text-gray-900">
                            VESSEL : <Compulsory/>
                        </label>
                        <input id="vessel_name" required name="vessel_name" type="text" value={ExperienceDetails.vessel_name} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="rank" className="text-sm font-medium text-gray-900">
                            RANK : <Compulsory/>
                        </label>
                        <input id="rank required" name="rank" type="text" value={ExperienceDetails.rank} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="from_date" className="text-sm font-medium text-gray-900">
                            FROM : <Compulsory/>
                        </label>
                        <input id="from_date" required name="from_date" type="date" value={ExperienceDetails.from_date} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="to_date" className="text-sm font-medium text-gray-900">
                            TO : <Compulsory/>
                        </label>
                        <input id="to_date" required name="to_date" type="date" value={ExperienceDetails.to_date} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>
                </div>

                <div className='grid grid-cols-5 p-1'>
                    <div className='grid grid-cols-2 p-1'>
                        <div className='flexbox items-center p-2'>
                            <label htmlFor="period_months" className="text-sm font-medium text-gray-900">
                                PERIOD MONTH :
                            </label>
                            <input id="period_months" name="period_months" type="number" value={ExperienceDetails.period_months} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                        <div className='flexbox items-center p-2'>
                            <label htmlFor="period_days" className="text-sm font-medium text-gray-900">
                                DAYS :
                            </label>
                            <input id="period_days" name="period_days" type="number" value={ExperienceDetails.period_days} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                        <div className='flexbox items-center p-2'>
                            <label htmlFor="vessel_type" className="text-sm font-medium text-gray-900">
                                VESSEL TYPE : <Compulsory/>
                            </label>
                            <input id="vessel_type" required name="vessel_type" type="text" value={ExperienceDetails.vessel_type} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="engine_type" className="text-sm font-medium text-gray-900">
                                ENGINE TYPE : <Compulsory/>
                            </label>
                            <input id="engine_type" required name="engine_type" type="text" value={ExperienceDetails.engine_type} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="bhp" className="text-sm font-medium text-gray-900">
                                BHP :
                            </label>
                            <input id="bhp" name="bhp" type="text" value={ExperienceDetails.bhp} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='items-center p-2'>
                            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="ums">
                                UMS / NON-UMS
                            </label>
                            <div>
                                <label>
                                    <input type="radio" onChange={handleExperienceChange} name='ums' value='UMS' checked={ExperienceDetails.ums === 'UMS'} />
                                        <span className="ml-2">Yes</span>
                                </label> &nbsp;
                                <label>
                                    <input type="radio" onChange={handleExperienceChange} name='ums' value='Non UMS' checked={ExperienceDetails.ums === 'Non UMS'} />
                                        <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="dead_weight" className="text-sm font-medium text-gray-900">
                                DEAD WEIGHT(DWT) :
                            </label>
                            <input id="dead_weight" name="dead_weight" type="text" value={ExperienceDetails.dead_weight} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="crane_make" className="text-sm font-medium text-gray-900">
                                CRANE MAKE :
                            </label>
                            <input id="crane_make" name="crane_make" type="text" value={ExperienceDetails.crane_make} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='items-center p-2'>
                            <label className='text-sm font-medium text-gray-900 m-3' htmlFor="grab_exp">
                                GRAB EXP
                            </label>
                            <div>
                                <label>
                                    <input type="radio" onChange={handleExperienceChange} name='grab_exp' value='Yes' checked={ExperienceDetails.grab_exp === 'Yes'} />
                                        <span className="ml-2">Yes</span>
                                </label> &nbsp;
                                <label>
                                    <input type="radio" onChange={handleExperienceChange} name='grab_exp' value='No' checked={ExperienceDetails.grab_exp === 'No'} />
                                        <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="year_built" className="text-sm font-medium text-gray-900">
                                YEAR BUILT :
                            </label>
                            <input id="year_built" name="year_built" type="number" value={ExperienceDetails.year_built} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>
                    <div className='flexbox items-center p-2'>
                        <label htmlFor="drydock_done" className="text-sm font-medium text-gray-900">
                            DRYDOCK DONE :
                        </label>
                        <input id="drydock_done" name="drydock_done" type="text" value={ExperienceDetails.drydock_done} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>
                </div>

                <div className='p-1'>
                    <div className='flexbox items-center p-2'>
                        <label htmlFor="reason_for_leaving" className="text-sm font-medium text-gray-900">
                            REASONS FOR LEAVING COMPANY : <Compulsory/>
                        </label>
                        <textarea id="reason_for_leaving" required name="reason_for_leaving" type="text" value={ExperienceDetails.name_of_workshop} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>
                </div>

            </div>
        </div> 

        <div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
        <h4 className='bold text-center'><b>TOTAL RANK EXPERIENCE IN MONTHS :</b></h4>
            <div className='border border-gray-300 rounded-md p-63shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6'>
                <div className='grid grid-cols-5 p-1'>
                        <div className='flexbox items-center p-2'>
                            <label htmlFor="chief_engineer" className="text-sm font-medium text-gray-900">
                                CHEIF ENGINEER :
                            </label>
                            <input id="chief_engineer" name="chief_engineer" type="number" value={ExperienceDetails.chief_engineer} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                        <div className='flexbox items-center p-2'>
                            <label htmlFor="second_engineer" className="text-sm font-medium text-gray-900">
                                2nd ENGINEER :
                            </label>
                            <input id="second_engineer" name="second_engineer" type="number" value={ExperienceDetails.second_engineer} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="third_engineer" className="text-sm font-medium text-gray-900">
                                3rd ENGINEER :
                            </label>
                            <input id="third_engineer" name="third_engineer" type="number" value={ExperienceDetails.third_engineer} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="fourth_engineer" className="text-sm font-medium text-gray-900">
                                4th ENGINEER :
                            </label>
                            <input id="fourth_engineer" name="fourth_engineer" type="number" value={ExperienceDetails.fourth_engineer} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>

                        <div className='flexbox items-center p-2'>
                            <label htmlFor="fifth_engineer" className="text-sm font-medium text-gray-900">
                                5th ENGINEER :
                            </label>
                            <input id="fifth_engineer" name="fifth_engineer" type="number" value={ExperienceDetails.fifth_engineer} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                </div>

                <div className='grid grid-cols-5 p-1'>
                    <div className='flexbox items-center p-2'>
                        <label htmlFor="tme_engine_cadet" className="text-sm font-medium text-gray-900">
                            TIME / ENGINE CADET :
                        </label>
                        <input id="tme_engine_cadet" name="tme_engine_cadet" type="number" value={ExperienceDetails.tme_engine_cadet} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>
                    <div className='flexbox items-center p-2'>
                        <label htmlFor="fitter" className="text-sm font-medium text-gray-900">
                            FITTER :
                        </label>
                        <input id="fitter" name="fitter" type="number" value={ExperienceDetails.fitter} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="oiler" className="text-sm font-medium text-gray-900">
                            OILER :
                        </label>
                        <input id="oiler" name="oiler" type="number" value={ExperienceDetails.oiler} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="wiper" className="text-sm font-medium text-gray-900">
                            WIPER :
                        </label>
                        <input id="wiper" name="wiper" type="number" value={ExperienceDetails.wiper} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                    </div>

                    <div className='flexbox items-center p-2'>
                        <label htmlFor="electrical_officer" className="text-sm font-medium text-gray-900">
                            ELECTRICAL OFFICER :
                        </label>
                        <input id="electrical_officer" name="electrical_officer" type="number" value={ExperienceDetails.electrical_officer} onChange={handleExperienceChange} className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
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

export default Experience
