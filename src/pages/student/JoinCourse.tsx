import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { joinCourse } from "../../api/course";
import { AxiosError } from "axios";

export default function JoinCourse() {
  const [courseCode, setCourseCode] = useState<string>('');
  const navigate = useNavigate();
  const handleJoinCourse = async () => {
    try {
      await joinCourse({ code: courseCode });
      navigate('/student/courses');
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 400) {
        alert(error.response?.data.message);
      } else {
        console.error("fail to join course", error);
        alert("An unexpected error occurred while joining the course");
      }
      navigate('/student/courses');
    }
  }
  return (
    <div>
      <h1>Join Course</h1>
      <input placeholder="Course Code" onChange={e => setCourseCode(e.target.value)} />
      <button onClick={handleJoinCourse}>Join Course</button>
    </div>
  )
}