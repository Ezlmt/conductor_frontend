import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* TODO: Navbar / Header */
        <nav>
          <button> <Link to="/">Dashboard</Link></button>
          <button> <Link to="/login">Login</Link></button>
          <button> <Link to="/register">Register</Link></button>
        </nav>
      }
      <Outlet />
    </div>
  );
}