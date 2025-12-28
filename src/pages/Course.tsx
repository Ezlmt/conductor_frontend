import { useState, useEffect } from "react";
import { getCourses, deleteCourse, getEnrolledCourses, leaveCourse } from "../api/course";
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
  const handleLeaveCourse = async (id: number) => {
    try {
      await leaveCourse(id);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error("fail to leave course", error);
      alert("fail to leave course");
    } finally {
      navigate('/courses');
    }
  }
  useEffect(() => {
    me()
      .then(res => {
        const role = res.data.role;
        setRole(role);
        if (role === ROLE_STUDENT) {
          return getEnrolledCourses();
        } else if (role === ROLE_PROFESSOR) {
          return getCourses();
        } else {
          throw new Error("Invalid role");
        }
      })
      .then(res => {
        setCourses(res.data.courses);
      })
      .catch(err => {
        console.error("fail to load courses", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
          {
            courses.map(course => (
              <li key={course.id}>
                <strong>{course.name}</strong> ({course.code}) <button onClick={() => handleLeaveCourse(course.id)}>Leave</button>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
}
