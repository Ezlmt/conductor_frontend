import { Link, Outlet } from "react-router-dom";

export default function ProfessorPanel() {
  return (
    <>
      <h1>Professor Panel</h1>
      <nav>
        <button> <Link to="/professor/courses">View All Courses</Link></button>
        <button> <Link to="/professor/courses/create">Create Course</Link></button>
      </nav>
      <Outlet />
    </>
  );
}