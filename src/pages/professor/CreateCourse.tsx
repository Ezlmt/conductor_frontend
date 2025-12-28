import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../../api/course";
import axios, { AxiosError } from "axios";


export default function CreateCourse() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  const handleCreateCourse = async () => {
    try {
      await createCourse({ name, code });
      navigate('/professor/courses');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data.message || "Failed to create course";
        alert(message);
      } else {
        alert("An unexpected error occurred while creating the course");
      }
    }
  }
  return (
    <div>
      <h1>Create Course</h1>
      <input placeholder="Course Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Course Code" onChange={e => setCode(e.target.value)} />
      <button onClick={handleCreateCourse}>Create Course</button>
    </div>
  )
}