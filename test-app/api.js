import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Update with your JSON Server URL

export const fetchTeacher = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/teachers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching staff data:', error);
        throw error;
    }
};

export const fetchStudents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/students`);
        return response.data;
    } catch (error) {
        console.error('Error fetching student data:', error);
        throw error;
    }
};

export const createTeacher = async (teacherData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/teachers`, teacherData);
        return response.data;
    } catch (error) {
        console.error('Error creating staff:', error);
        throw error;
    }
};

export const createStudent = async (studentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/students`, studentData);
        return response.data;
    } catch (error) {
        console.error('Error creating student:', error);
        throw error;
    }
};

export const deleteTeacher = async (teacherId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/teachers/${teacherId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting teacher:', error);
        throw error;
    }
};

export const deleteStudent = async (studentId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/students/${studentId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting student:', error);
        throw error;
    }
};
