import { useEffect, useState } from "react";
import { deleteCourse, getCourses } from "../../api/course";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { getCourseDeleteInfo } from "../../api/course";

interface Course {
  id: number;
  name: string;
  code: string;
  professorId: number;
}

export default function ProfessorCourseList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getCourses().then(res => {
      setCourses(res.data.courses);
    });
  }, []);
  const handleDeleteCourse = async (id: number) => {
    const res = await getCourseDeleteInfo(id);
    const confirm = window.confirm(
      res.data.enrollmentCount > 0
        ? `The course has ${res.data.enrollmentCount} students enrolled. \nAre you sure you want to delete the course?`
      : `Are you sure you want to delete the course?`
    );
    if (!confirm) {
      return;
    }
    try {
      await deleteCourse(id);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 400) {
        alert(error.response?.data.message);
      } else {
        console.error("fail to delete course", error);
        alert("An unexpected error occurred while deleting the course");
      }
    } finally {
      navigate('/professor/courses');
    }
  }
  return (
    <div>
      <h3>Courses taught by you</h3>
      {courses.length === 0 && <p>No courses yet.</p>}
      {
        courses.map(course => (
          <div key={course.id}>
            <strong>{course.name}</strong> ({course.code}) <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

