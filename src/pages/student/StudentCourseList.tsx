import { useEffect, useState } from "react";
import { getEnrolledCourses, leaveCourse } from "../../api/course";
import { useNavigate } from "react-router-dom";

interface Course {
  id: number;
  name: string;
  code: string;
  professorId: number;
}

export default function StudentCourseList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getEnrolledCourses().then(res => {
      setCourses(res.data.courses);
    });
  }, []);
  const handleLeaveCourse = async (id: number) => {
    try {
      await leaveCourse(id);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error("fail to leave course", error);
      alert("fail to leave course");
    } finally {
      navigate('/student/courses');
    }
  }
  return (
    <div>
      <h3>Courses you are enrolled in</h3>
      {courses.length === 0 && <p>No courses yet.</p>}
      {
        courses.map(course => (
          <div key={course.id}>
            <strong>{course.name}</strong> ({course.code}) <button onClick={() => handleLeaveCourse(course.id)}>Leave</button>
          </div>
        ))
      }
    </div>
  )
}

