import { useEffect, useState } from "react";
import { me } from "../api/auth";
import type { MeResponse } from "../api/auth";
import ProfessorPanel from "./professor/ProfessorPanel";
import StudentPanel from "./student/StudentPanel";

const ROLE_STUDENT = 1;
const ROLE_PROFESSOR = 2;


export default function Dashboard() {
  const [role, setRole] = useState<number | null>(null);
  const [user, setUser] = useState<MeResponse | null>(null);
  useEffect(() => {
    me()
      .then(res => {
        console.log("current user: ", res.data);
        setRole(res.data.role);
        setUser(res.data);
      })
      .catch(() => {
        console.log("Not logged in")
      });
  }, []);

  if (role === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <>
          <p>Welcome, {user.name}</p>
        </>
      )}
      {role == ROLE_PROFESSOR && <ProfessorPanel />}
      {role == ROLE_STUDENT && (
        <StudentPanel />
      )}
    </div>
  );
}
