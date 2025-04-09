import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Wage = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const initialFormState = {
        name: "",
        age: "",
        rank_applied_for: "",
        rank_experience: "",
        certificate_held: "",
        us_vis_exp_date: "",
        contact_number: "",
        email: "",
    };

    const [applicantsDetails, setApplicantsDetails] = useState(initialFormState);
    
    const handleApplicantChange = (e) => {
        const { name, value } = e.target;
        setApplicantsDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("name", applicantsDetails.name);
        formData.append("age", applicantsDetails.age);
        formData.append("rank_applied_for", applicantsDetails.rank_applied_for);
        formData.append("rank_experience", applicantsDetails.rank_experience);
        formData.append("certificate_held", applicantsDetails.certificate_held);
        formData.append("us_vis_exp_date", applicantsDetails.us_vis_exp_date);
        formData.append("contact_number", applicantsDetails.contact_number);
        formData.append("email", applicantsDetails.email);

        try {
            await axios.post("https://njs.solminds.com/chellship/api/wages/calculate", formData, {
                headers: { "Content-Type": "application/json" },
            });
            setApplicantsDetails(initialFormState);
            alert("Wage details submitted successfully!");
            navigate('/wages');
        } catch (error) {
            alert("Failed to submit wage details.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
                    Know Your Wages
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
                    
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={applicantsDetails.name}
                            onChange={handleApplicantChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
                            required/>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={applicantsDetails.age}
                            onChange={handleApplicantChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Rank Applied For</label>
                        <input
                            type="text"
                            name="rank_applied_for"
                            value={applicantsDetails.rank_applied_for}
                            onChange={handleApplicantChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Rank Experience</label>
                        <input
                            type="text"
                            name="rank_experience"
                            value={applicantsDetails.rank_experience}
                            onChange={handleApplicantChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Certificate Held</label>
                        <input
                            type="text"
                            name="certificate_held"
                            value={applicantsDetails.certificate_held}
                            onChange={handleApplicantChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">US Visa Exp Date</label>
                        <input
                            type="date"
                            name="us_vis_exp_date"
                            value={applicantsDetails.us_vis_exp_date}
                            onChange={handleApplicantChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Contact Number</label>
                        <input
                            type="text"
                            name="contact_number"
                            value={applicantsDetails.contact_number}
                            onChange={handleApplicantChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
                            required/>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={applicantsDetails.email}
                            onChange={handleApplicantChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
                            required/>
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
            </div>
        </div>
    );
};

export default Wage;
