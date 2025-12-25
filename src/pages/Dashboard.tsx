import { useEffect, useState } from "react";
import { me } from "../api/auth";
import type { MeResponse } from "../api/auth";

export default function Dashboard() {
  const [role, setRole] = useState<number | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [user, setUser] = useState<MeResponse | null>(null);
  useEffect(() => {
    me()
      .then(res => {
        console.log("current user: ", res.data);
        setRole(res.data.role);
        setUserId(res.data.id);
        setUser(res.data);
      })
      .catch(() => {
        console.log("Not logged in")
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi, {user?.name}</p>
      <p>Welcome to Conductor 👋</p>
      <p>Current user id: {userId}</p>
      <p>Current user role: {role === 1 ? "Admin" : role === 2 ? "Professor" : "Student"}</p>
    </div>
  );
}
