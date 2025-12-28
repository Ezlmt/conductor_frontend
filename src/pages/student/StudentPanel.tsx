import { Link, Outlet } from "react-router-dom";

export default function StudentPanel() {
  return (
    <>
      <h1>Student Panel</h1>
      <nav>
        <button> <Link to="/student/join">Join Course</Link></button>
        <button> <Link to="/student/courses">View My Courses</Link></button>
      </nav>
      <Outlet />
    </>
  );
}