import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <Link to="/projects">View Projects</Link>
    </>
  );
}
