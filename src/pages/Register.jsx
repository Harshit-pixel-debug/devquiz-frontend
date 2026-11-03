import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Temporary mock registration until backend is connected
    setMessage("Registration successful! Redirecting to login...");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "24px", border: "1px solid #e5e7eb", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Create an Account</h2>

      {message && (
        <p style={{ padding: "10px", backgroundColor: "#e0f2fe", color: "#0369a1", borderRadius: "4px", fontSize: "14px" }}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: "14px" }}>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Harshit Yadav"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #d1d5db" }}
          />
        </div>

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
          style={{ padding: "10px", backgroundColor: "#2563eb", color: "#ffffff", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }}
        >
          Register
        </button>
      </form>

      <p style={{ textAlign: "center", fontSize: "14px", marginTop: "15px" }}>
        Already have an account? <Link to="/login" style={{ color: "#2563eb" }}>Log in here</Link>
      </p>
    </div>
  );
}

export default Register;