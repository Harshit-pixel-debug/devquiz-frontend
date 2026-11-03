import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#1f2937",
      color: "#ffffff"
    }}>
      <h2 style={{ margin: 0 }}>DevQuiz</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "#ffffff", textDecoration: "none" }}>About</Link>
        <Link to="/contact" style={{ color: "#ffffff", textDecoration: "none" }}>Contact</Link>
        <Link to="/login" style={{ color: "#ffffff", textDecoration: "none" }}>Login</Link>
        <Link to="/register" style={{ color: "#38bdf8", textDecoration: "none", fontWeight: "bold" }}>Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;