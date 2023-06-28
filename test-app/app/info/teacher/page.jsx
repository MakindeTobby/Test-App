'use client'
import AuthButton from '@/Components/Button/AuthButton';
import PersonalInfoInput from '@/Components/Forms/ProfileForms';
import { createTeacher } from '@/api';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

const TeacherInput = () => {
    const [loading, setLoading] = useState(false);

    const [teacherData, setTeacherData] = useState({
        title: '',
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

    const handleSubmit = async (e) => {
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
        if (teacherData.dateOfBirth.trim() === '') {
            validationErrors.dateOfBirth = 'Date of Birth is required';
        } else {
            const currentDate = new Date();
            const selectedDate = new Date(teacherData.dateOfBirth);
            const age = currentDate.getFullYear() - selectedDate.getFullYear();

            if (age < 21) {
                validationErrors.dateOfBirth = 'Teacher must be at least 21 years old';
            }
        }
        // Add more validation rules as needed

        // If there are validation errors, set the errors state and return
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setLoading(true);
            // setErrors(null);

            const createdTeacher = await createTeacher(teacherData);
            console.log('Teacher created:', createdTeacher);

            setTeacherData({
                title: '',
                nationalId: '',
                name: '',
                surname: '',
                dateOfBirth: '',
                teacherNumber: '',
                salary: '',
            });
            setErrors({});

            toast.success('Teacher created successfully!');
        } catch (error) {
            console.error('Error creating teacher:', error);
            toast.error('Error creating teacher');
        } finally {
            setLoading(false);
        }



        // Submit the form
    };

    return (
        <div className="container mx-auto p-4 mt-4  max-w-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Teacher Information</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-3">
                    <label htmlFor="title" className="block mb-1">Title *</label>

                    <select className="block w-full px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={teacherData.title}
                        onChange={handleChange}
                        id="title"
                        name="title"
                        required
                    >
                        <option hidden defaultValue>--Select Title--</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Prof">Prof</option>

                    </select>

                </div>
                <PersonalInfoInput title="Teacher" onChange={handleChange} values={teacherData} errors={errors} />

                <div className="mb-3">
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

                <div className="mb-3">
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
                    <AuthButton title={loading ? 'Loading...' : 'Submit'} disabled={loading} />
                </div>
                <div className='mt-3 text-center'>
                    <Link href={'/info/student'} className='font-bold'>
                        Register as student
                    </Link>
                </div>
                <br />
            </form>
        </div>
    );
};

export default TeacherInput;
