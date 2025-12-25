import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const ROLE_STUDENT = 1;
const ROLE_PROFESSOR = 2;

/** Register page */
export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<number>(ROLE_STUDENT);

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register({ name, email, password, role });
      alert("Registration successful");
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  }


  return (
    <div>
      <h1>Register</h1>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div>
        <label>
          <input
            type="radio"
            checked={role === ROLE_STUDENT}
            onChange={() => setRole(ROLE_STUDENT)}
          />
          Student
        </label>
        <label>
          <input
            type="radio"
            checked={role === ROLE_PROFESSOR}
            onChange={() => setRole(ROLE_PROFESSOR)}
          />
          Professor
        </label>
      </div>

      <button onClick={handleRegister}>Register</button>
    </div>
  )
}