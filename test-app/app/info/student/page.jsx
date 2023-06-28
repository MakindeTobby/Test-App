'use client'
import React, { useState } from 'react';
import PersonalInfoInput from '@/Components/Forms/ProfileForms';
import AuthButton from '@/Components/Button/AuthButton';
import Link from 'next/link';
import { createStudent } from '@/api';
import { toast } from 'react-toastify';


const StudentInput = () => {
    const [loading, setLoading] = useState(false);
    const [studentData, setStudentData] = useState({
        nationalId: '',
        name: '',
        surname: '',
        dateOfBirth: '',
        studentNumber: ''
    });

    const [errors, setErrors] = useState({}); // State for storing validation errors

    const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform validation here and update the errors state
        const validationErrors = {};

        // Example validation: Check if required fields are empty

        if (studentData.nationalId.trim() === '') {
            validationErrors.nationalId = 'National ID is required';
        }

        if (studentData.name.trim() === '') {
            validationErrors.name = 'Name is required';
        }

        if (studentData.surname.trim() === '') {
            validationErrors.surname = 'Surname is required';
        }

        if (studentData.dateOfBirth.trim() === '') {
            validationErrors.dateOfBirth = 'Date of Birth is required';
        } else {
            const currentDate = new Date();
            const selectedDate = new Date(studentData.dateOfBirth);
            const age = currentDate.getFullYear() - selectedDate.getFullYear();

            if (age > 22) {
                validationErrors.dateOfBirth = 'Student must be at most 22 years old';
            }
        }
        if (studentData.studentNumber.trim() === '') {
            validationErrors.studentNumber = 'Number is required';
        }

        // Set the errors state
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // If there are no validation errors, submit the form
            console.log(studentData.nationalId);
        }
        try {
            setLoading(true);
            // setErrors(null);

            const createdStaff = await createStudent(studentData);
            console.log('Staff created:', createdStaff);

            setStudentData({
                nationalId: '',
                name: '',
                surname: '',
                dateOfBirth: '',
                studentNumber: '',
            });
            setErrors({});

            toast.success('Student created successfully!');
        } catch (error) {
            console.error('Error creating student:', error);
            toast.error('Error creating student');
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="container mx-auto p-4 mt-4 max-w-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Student Information</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <PersonalInfoInput
                    title="Student"
                    onChange={handleChange}
                    values={studentData}
                    errors={errors} // Pass the errors state to PersonalInfoInput
                />

                <div className="mb-3">
                    <label htmlFor="studentNumber" className="block mb-1">Student Number *</label>
                    <input
                        type="text"
                        id="studentNumber" // Fixed ID here
                        className={`w-full border rounded-md px-3 py-2 ${errors.studentNumber ? 'border-red-500' : 'border-gray-300'}`}
                        value={studentData.studentNumber}
                        onChange={handleChange}
                        name="studentNumber"
                        required
                    />
                    {errors.studentNumber && <small className="text-red-500">{errors.studentNumber}</small>}
                </div>

                <div className="flex justify-center">
                    <AuthButton title={loading ? 'Loading...' : 'Submit'} disabled={loading} />
                </div>

                <div className='mt-3 text-center'>
                    <Link href={'/info/teacher'} className='font-bold'>
                        Register as Teacher
                    </Link>
                </div>
                <br />
            </form>
        </div>
    );
};

export default StudentInput;
