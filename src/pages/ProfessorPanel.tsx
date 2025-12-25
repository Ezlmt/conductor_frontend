import { Link } from "react-router-dom";

export default function ProfessorPanel() {
  return (
    <>
      <h2>Professor Panel</h2>
      <button> <Link to="/create-course">Create Course</Link></button>
      <button> <Link to="/courses">View All Courses</Link></button>
    </>
  );
}