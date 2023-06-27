'use client'
import AuthButton from '@/Components/Button/AuthButton';
import PersonalInfoInput from '@/Components/Forms/ProfileForms';
import { useState } from 'react';

const TeacherInput = () => {
    const [teacherData, setTeacherData] = useState({
        nationalId: '',
        name: '',
        surname: '',
        dateOfBirth: '',
        teacherNumber: '',
        salary: ''
    });

    const [errors, setErrors] = useState({}); // State to hold validation errors

    const handleChange = (e) => {
        setTeacherData({ ...teacherData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation before submitting
        const validationErrors = {};
        if (teacherData.nationalId.trim() === '') {
            validationErrors.nationalId = 'National ID is required';
        }
        if (teacherData.name.trim() === '') {
            validationErrors.name = 'Name is required';
        }
        if (teacherData.surname.trim() === '') {
            validationErrors.surname = 'Surname is required';
        }
        if (teacherData.teacherNumber.trim() === '') {
            validationErrors.teacherNumber = 'Number is required';
        }
        // Add more validation rules as needed

        // If there are validation errors, set the errors state and return
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // Submit the form
    };

    return (
        <div className="container mx-auto p-4 mt-4  max-w-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Teacher Information</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <PersonalInfoInput title="Teacher" onChange={handleChange} values={teacherData} errors={errors} />

                <div className="mb-4">
                    <label htmlFor="teacherNumber" className="block mb-1">Teacher Number *</label>
                    <input
                        type="text"
                        id="teacherNumber"
                        className={`w-full border rounded-md px-3 py-2 ${errors.teacherNumber ? 'border-red-500' : 'border-gray-300'}`}
                        value={teacherData.teacherNumber}
                        onChange={handleChange}
                        name="teacherNumber"
                        required
                    />
                    {errors.teacherNumber && <small className="text-red-500">{errors.teacherNumber}</small>}
                </div>

                <div className="mb-4">
                    <label htmlFor="salary" className="block mb-1">Salary</label>
                    <input
                        type="text"
                        id="salary"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={teacherData.salary}
                        onChange={handleChange}
                        name="salary"
                    />
                </div>

                <div className="flex justify-center">
                    <AuthButton title="Submit" />
                </div>
            </form>
        </div>
    );
};

export default TeacherInput;
