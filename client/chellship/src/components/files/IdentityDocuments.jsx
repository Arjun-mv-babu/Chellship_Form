import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Compulsory from './Compulsory';

const IdentityDocuments = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { applicant_id } = location.state || {};

    const [documents, setDocuments] = useState([
        {
            document_type: '',
            document_country: '',
            document_number: '',
            document_from_date: '',
            document_to_date: '',
            document_Place_issued: '',
        }
    ]);

    useEffect(() => {
        console.log(location.state)
        if (applicant_id) {
            console.log("Setting applicant_id:", applicant_id);
        }
    }, [applicant_id]);

    const handleDocumentChange = (index, e) => {
        const { name, value } = e.target;
        const updatedDocuments = [...documents];
        updatedDocuments[index][name] = value;
        setDocuments(updatedDocuments);
    };

    const addNewDocument = () => {
        setDocuments([
            ...documents,
            {
                document_type: '',
                document_country: '',
                document_number: '',
                document_from_date: '',
                document_to_date: '',
                document_Place_issued: '',
            }
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!window.confirm('Are you sure to continue?')) {
            return;
        }

        const formData = {
            applicant_id,
            documents
        };


        axios.post('http://localhost:3001/identitydocuments/create', formData)
            .then((response) => {
                alert('Identity Documents created successfully');
                console.log("Navigating with applicant_id:", response.data.applicant_id);
                navigate('/certificate', { state: { applicant_id: response.data.applicant_id } });
            })
            .catch((error) => {
                console.error('Error adding Identity Documents:', error);
                alert('Failed to add Identity Documents. Please check the console for errors.');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
<div className='flex min-h-full flex-col justify-center lg:px-8 py-12'>
    <h4 className='font-bold text-center mb-6'><b>Personal Identity Documents Held</b></h4>

    {documents.map((doc, index) => (
        <div key={index} className='border border-gray-300 rounded-md shadow-lg sm:mx-auto sm:w-full lg:w-full px-6 py-6 m-3'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-6 gap-4'>
                <div className='flex flex-col items-start p-2'>
                    <label htmlFor={`document_type_${index}`} className="text-sm font-medium text-gray-900">
                        Documents: <Compulsory />
                    </label>
                    <select
                        id={`document_type_${index}`}
                        required
                        name="document_type"
                        value={doc.document_type}
                        onChange={(e) => handleDocumentChange(index, e)}
                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                        <option value="" disabled>Select Document</option>
                        <option value="passport">Passport</option>
                        <option value="Indian CDC">Indian CDC</option>
                        <option value="Seafarers ID">Seafarers ID</option>
                        <option value="Seaman Book">Seaman Book</option>
                        <option value="US C1/D Visa">US C1/D Visa</option>
                        <option value="Valid Visa">Valid Visa</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className='flex flex-col items-start p-2'>
                    <label htmlFor={`document_country_${index}`} className="text-sm font-medium text-gray-900">
                        Country: <Compulsory />
                    </label>
                    <input
                        id={`document_country_${index}`}
                        required
                        name="document_country"
                        type="text"
                        value={doc.document_country}
                        onChange={(e) => handleDocumentChange(index, e)}
                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    />
                </div>

                <div className='flex flex-col items-start p-2'>
                    <label htmlFor={`document_number_${index}`} className="text-sm font-medium text-gray-900">
                        Number: <Compulsory />
                    </label>
                    <input
                        id={`document_number_${index}`}
                        required
                        name="document_number"
                        type="text"
                        value={doc.document_number}
                        onChange={(e) => handleDocumentChange(index, e)}
                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    />
                </div>

                <div className='flex flex-col items-start p-2'>
                    <label htmlFor={`document_from_date_${index}`} className="text-sm font-medium text-gray-900">
                        Issue Date: <Compulsory />
                    </label>
                    <input
                        id={`document_from_date_${index}`}
                        required
                        name="document_from_date"
                        type="date"
                        value={doc.document_from_date}
                        onChange={(e) => handleDocumentChange(index, e)}
                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    />
                </div>

                <div className='flex flex-col items-start p-2'>
                    <label htmlFor={`document_to_date_${index}`} className="text-sm font-medium text-gray-900">
                        Expiry Date: <Compulsory />
                    </label>
                    <input
                        id={`document_to_date_${index}`}
                        required
                        name="document_to_date"
                        type="date"
                        value={doc.document_to_date}
                        onChange={(e) => handleDocumentChange(index, e)}
                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    />
                </div>

                <div className='flex flex-col items-start p-2'>
                    <label htmlFor={`document_Place_issued${index}`} className="text-sm font-medium text-gray-900">
                        Issue Place: <Compulsory />
                    </label>
                    <input
                        id={`document_Place_issued${index}`}
                        required
                        name="document_Place_issued"
                        type="text"
                        value={doc.document_Place_issued}
                        onChange={(e) => handleDocumentChange(index, e)}
                        className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    />
                </div>
            </div>
        </div>
    ))}

    <div className="flex justify-center my-4">
        <button type='button' onClick={addNewDocument} className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500">
            + Add Another Document
        </button>
    </div>

    <div className="flex justify-center my-4">
        <button type="submit" className="m-4 p-4 text-center px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500">
            Save & Continue
        </button>
    </div>
</div>
        </form>
    );
};

export default IdentityDocuments;
