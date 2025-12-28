import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Course from './pages/Course';
import CreateCourse from './pages/CreateCourse';
import JoinCourse from './pages/JoinCourse';

export const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/', element: <Dashboard /> },
  { path: '/courses', element: <Course /> },
  { path: '/create-course', element: <CreateCourse /> },
  { path: '/join-course', element: <JoinCourse /> },
  { path: '/my-courses', element: <Course /> },
]);
