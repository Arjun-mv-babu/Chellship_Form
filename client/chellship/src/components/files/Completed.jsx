// import { useLocation } from 'react-router-dom';
// import { FaRegFile } from "react-icons/fa";
// import axios from 'axios';
// import { useState } from 'react';
// import { API_BASE_URL } from '../url/Url'
// const CompletePage = () => {
//     const location = useLocation();
//     const applicant_id = location.state?.applicant_id || '';
//     const [isDownloading, setIsDownloading] = useState(false);

//     const handleOnExport = () => {
//         if (isDownloading) return;
//         setIsDownloading(true);

//         axios.get(`${API_BASE_URL}/impex/download/${applicant_id}`, {
//             responseType: 'blob'
//         })
//         .then((response) => {
//             const file = new Blob([response.data], { type: 'application/pdf' });
//             const fileURL = URL.createObjectURL(file);
//             const link = document.createElement('a');
//             link.href = fileURL;
//             link.setAttribute('download', 'Chellship Application Form.pdf');
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             URL.revokeObjectURL(fileURL);
//         })
//         .catch((error) => {
//             console.error('Failed to export pdf', error);
//         })
//         .finally(() => {
//             setIsDownloading(false);
//         });
//     };

//     return (
//         <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h5 className="text-center text-2xl font-semibold text-gray-800 mb-4">Thank you!</h5>
//                 <div className="flex justify-center">
//                     <button 
//                         onClick={handleOnExport}
//                         disabled={isDownloading}
//                         className={`text-white font-bold py-2 px-4 rounded flex items-center transition-all duration-300 ${
//                             isDownloading ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-700"
//                         }`}>
//                         <FaRegFile className="mr-2" />
//                         {isDownloading ? "Downloading..." : "Download File"}
//                     </button>
//                 </div>
//                 <p className="text-center text-gray-600 mt-2">Click to download your data.</p>
//             </div>
//         </div>
//     );
// };

// export default CompletePage;






import { useLocation } from 'react-router-dom';
import { FaRegFile } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';
import { API_BASE_URL } from '../url/Url'

const CompletePage = () => {
    const location = useLocation();
    const applicant_id = location.state?.applicant_id || '';
    const [isDownloading, setIsDownloading] = useState(false);

    const handleOnExport = () => {
        if (isDownloading) return; // Prevent multiple clicks while downloading
        setIsDownloading(true);

        axios.get(`${API_BASE_URL}/impex/download/${applicant_id}`, {
            responseType: 'blob'
        })
        .then((response) => {
            const file = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const fileURL = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileURL;
            link.setAttribute('download', `Chellship Application Form.xlsx`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(fileURL);
        })
        .catch((error) => {
            console.error('Failed to export xlsx file', error);
        })
        .finally(() => {
            setIsDownloading(false);
        });
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h5 className="text-center text-2xl font-semibold text-gray-800 mb-4">Thank you!</h5>
                <div className="flex justify-center">
                    <button 
                        onClick={handleOnExport}
                        disabled={isDownloading}
                        className={`text-white font-bold py-2 px-4 rounded flex items-center transition-all duration-300 ${
                            isDownloading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-700"
                        }`}
                    >
                        <FaRegFile className="mr-2" />
                        {isDownloading ? "Downloading..." : "Download Form (Excel)"}
                    </button>
                </div>
                <p className="text-center text-gray-600 mt-2">Click to download your Excel file.</p>
            </div>
        </div>
    );
};

export default CompletePage;
