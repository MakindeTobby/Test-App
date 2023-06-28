# Next.js Teacher-Student Management App

This is a web application built with Next.js that allows users to manage teachers and students. It utilizes json-server as a mock data server and axios for API calls.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
 
   git clone https://github.com/MakindeTobby/Test-App.git
   
2. Navigate to the project directory:

   cd test-app

3. Install the dependencies:

  npm install

4. Start the development server:

   npm run dev
The application should now be running at http://localhost:3000.

5. Open a new terminal tab and start json-server for mock data:
  json-server --watch db.json --port 3001

The mock data server will be running at http://localhost:3001.

## Usage
Teachers
- To view the list of teachers, visit http://localhost:3000/main/teacher.
- To add a new teacher, go to http://localhost:3000/info/teacher. fill in the required details in the form and click the "Submit" button.
- To delete a teacher, click the "Delete" button next to the teacher's entry.

Students
- To view the list of teachers, visit http://localhost:3000/main/student.
- To add a new student, go to http://localhost:3000/info/student. fill in the required details in the form and click the "Submit" button.
- To delete a student, click the "Delete" button next to the student's entry.

## Dependencies
The main dependencies used in this project are:

- Next.js: A React framework for building server-rendered applications.
- json-server: A mock data server that provides RESTful APIs.
- axios: A promise-based HTTP client for making API requests.
- react-toastify: A react library for updating success and error message



   
