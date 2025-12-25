import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../api/course";

export default function CreateCourse() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  const handleCreateCourse = async () => {
    try {
      await createCourse({ name, code });
      navigate('/courses');
    } catch (error) {
      console.error("fail to create course", error);
      alert("fail to create course");
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