const { fetchTeacher, fetchStudents, createStaff, createStudent } = require('./api');




test('fetchStaff should return an array of teachers', async () => {
    const teachers = await fetchTeacher();
    expect(Array.isArray(teachers)).toBe(true);
});