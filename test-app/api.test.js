const { fetchTeacher, fetchStudents, createStaff, createStudent } = require('./api');




test('fetchTeacher should return an array of teachers', async () => {
    const teachers = await fetchTeacher();
    expect(Array.isArray(teachers)).toBe(true);
});
test('fetchStudents should return an array of students', async () => {
    const students = await fetchStudents();
    expect(Array.isArray(students)).toBe(true);
});