import { useState, useEffect } from "react";
import { getCourses, deleteCourse } from "../api/course";
import { useNavigate } from "react-router-dom";
import { me } from "../api/auth";

const ROLE_PROFESSOR = 2;
const ROLE_STUDENT = 1;

interface Course {
  id: number;
  name: string;
  code: string;
  professorId: number;
}

export default function Course() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<number | null>(null);
  const navigate = useNavigate();
  const handleDeleteCourse = async (id: number) => {
    try {
      await deleteCourse(id);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error("fail to delete course", error);
    }
  }
  useEffect(() => {
    getCourses()
      .then(res => {
        setCourses(res.data.courses);
        console.log("role: ", role);
      })
      .catch(err => {
        console.error("fail to load courses", err);
      })
      .finally(() => {
        setLoading(false);
      });
    me()
      .then(res => {
        setRole(res.data.role);
      }).catch(() => {
        console.error("fail to load role");
      });
  }, []);
  console.log("courses: ", courses);

  return (
    <div>
      <button onClick={() => navigate('/')}>Back to Dashboard</button>
      <h1>Courses</h1>

      {courses.length === 0 && <p>No courses yet.</p>}
      {role === ROLE_PROFESSOR && (
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <strong>{course.name}</strong> ({course.code}) <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {role === ROLE_STUDENT && (
        <ul>
          <li>You are a student, you can't delete courses</li>
        </ul>
      )}
    </div>
  );
}
