'use client'
import { deleteStudent, fetchStudents } from '@/api';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentData = await fetchStudents();
                setStudents(studentData);
            } catch (error) {
                console.error('Error fetching student:', error);
            }
        };

        fetchData();
    }, []);
    const handleDeleteStudent = async (studentId) => {
        try {
            await deleteStudent(studentId);
            toast.success('Student deleted successfully');
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };
    return (

        <div className="container flex justify-center items-center mt-5">


            {/* component */}
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8  mx-auto">
                <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                    <h1 className='text-center text-3xl font-bold'>Student List</h1>
                </div>
                <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Full Name</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">National ID</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Student No.</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">D.O.B</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300" />
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                students.map(data =>

                                    <tr key={data.id}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm leading-5 text-gray-800">{data.id}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="text-sm leading-5 text-blue-900">{data.surname} {data.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{data.nationalId}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{data.studentNumber}</td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{data.dateOfBirth}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                            <button
                                                onClick={() => handleDeleteStudent(data.id)}
                                                className="px-5 py-2 border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }



                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
}

export default StudentList;