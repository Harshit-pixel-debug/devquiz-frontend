import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!email || !password) {
    setMessage("Please enter both email and password.");
    return;
  }

  setMessage("Logged in successfully! Redirecting...");
  setTimeout(() => {
    navigate("/dashboard");
  }, 1000);
};

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "24px", border: "1px solid #e5e7eb", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Log In to DevQuiz</h2>

      {message && (
        <p style={{ padding: "10px", backgroundColor: "#e0f2fe", color: "#0369a1", borderRadius: "4px", fontSize: "14px" }}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: "14px" }}>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #d1d5db" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: "14px" }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #d1d5db" }}
          />
        </div>

        <button
          type="submit"
          style={{ padding: "10px", backgroundColor: "#1f2937", color: "#ffffff", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }}
        >
          Log In
        </button>
      </form>

      <p style={{ textAlign: "center", fontSize: "14px", marginTop: "15px" }}>
        Don't have an account? <Link to="/register" style={{ color: "#2563eb" }}>Register here</Link>
      </p>
    </div>
  );
}

export default Login;