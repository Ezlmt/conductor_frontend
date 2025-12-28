import { useState, useEffect } from "react";
import { me } from "../api/auth";
import ProfessorCourseList from "./professor/ProfessorCourseList";
import StudentCourseList from "./student/StudentCourseList";

const ROLE_PROFESSOR = 2;
const ROLE_STUDENT = 1;

export default function Course() {
  const [role, setRole] = useState<number | null>(null);
  useEffect(() => {
    me()
      .then(res => {
        setRole(res.data.role);
      })
      .catch(err => {
        console.error("fail to load role", err);
      });
  }, []);

  return (
    <div>
      {/* <button onClick={() => navigate('/')}>Back to Dashboard</button>
      <h2>Courses</h2> */}

      {role === ROLE_PROFESSOR && (
        <ProfessorCourseList />
      )}
      {role === ROLE_STUDENT && (
        <StudentCourseList />
      )}
    </div>
  );
}
