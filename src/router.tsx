import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import Dashboard from './pages/Dashboard';

// auth
import Register from './pages/Register';
import Login from './pages/Login';

import Course from './pages/Course';
import CreateCourse from './pages/professor/CreateCourse';
import JoinCourse from './pages/student/JoinCourse';

// professor
import ProfessorPanel from './pages/professor/ProfessorPanel';

// student
import StudentPanel from './pages/student/StudentPanel';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    { index: true, element: <Dashboard /> },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    {
      path: 'professor',
      element: <ProfessorPanel />,
      children: [
        { path: 'courses', element: <Course /> },
        { path: 'courses/create', element: <CreateCourse /> },
      ],
    },
    {
      path: 'student',
      element: <StudentPanel />,
      children: [
        { path: 'courses', element: <Course /> },
        { path: 'join', element: <JoinCourse /> },
      ],
    },
  ],
  },
]);
