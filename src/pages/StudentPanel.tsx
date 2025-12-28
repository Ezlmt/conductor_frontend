import { Link } from "react-router-dom";

export default function StudentPanel() {
  return (
    <>
      <h2>Student Panel</h2>
      <button> <Link to="/join-course">Join Course</Link></button>
      <button> <Link to="/my-courses">View My Courses</Link></button>
    </>
  );
}