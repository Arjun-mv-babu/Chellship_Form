import { useLocation } from 'react-router-dom';
import { FaRegFile } from "react-icons/fa";
import axios from 'axios';

const CompletePage = () => {
    const location = useLocation();
    const applicant_id = location.state?.applicant_id || '';

    const handleOnExport = () => {
        axios.get(`http://localhost:3001/impex/export/${applicant_id}`, {
            responseType: 'blob'
        })
        .then((response) => {
            const file = new Blob([response.data], { type: 'application/pdf' });
            const fileURL = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileURL;
            link.setAttribute('download', `Chellship Application Form.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(fileURL);
        })
        .catch((error) => {
            console.error('Failed to export pdf', error);
        });
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h5 className="text-center text-2xl font-semibold text-gray-800 mb-4">Thank you!</h5>
                <div className="flex justify-center">
                    <button onClick={handleOnExport}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
                        <FaRegFile className="mr-2" /> 
                        Download File (PDF)
                    </button>
                </div>
                <p className="text-center text-gray-600 mt-2">Click to download your data.</p>
            </div>
        </div>
    );
};

export default CompletePage;