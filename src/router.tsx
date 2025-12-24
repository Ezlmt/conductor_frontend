import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
//import MyCourses from './pages/MyCourses';
//import JoinCourse from './pages/JoinCourse';

export const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  //{ path: '/my-courses', element: <MyCourses /> },
  //{ path: '/join-course', element: <JoinCourse /> },
  { path: '/', element: <Dashboard /> },
]);
