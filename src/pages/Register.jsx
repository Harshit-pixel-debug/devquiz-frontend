import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // After registering, send the user to the login screen
    navigate("/login");
  };

  const inputStyle = {
    width: "100%", backgroundColor: "rgba(10, 3, 15, 0.6)",
    border: "1px dashed var(--term-dim)", color: "#b026ff",
    padding: "15px", fontFamily: "'Share Tech Mono', monospace",
    fontSize: "16px", marginBottom: "25px", outline: "none", boxSizing: "border-box"
  };

  return (
    <div style={{ maxWidth: "500px", margin: "60px auto 80px", padding: "0 30px" }}>
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <div style={{ fontSize: "14px", color: "var(--term-dim)", marginBottom: "10px", letterSpacing: "1px" }}>
          C:\DEVQUIZ&gt; EXECUTE ONBOARDING.EXE
        </div>
        <h1 style={{ margin: 0, fontSize: "42px", fontFamily: "'VT323', monospace", letterSpacing: "4px", color: "#ffffff" }}>
          NEW USER REGISTRATION
        </h1>
      </div>

      <div className="term-box" style={{ padding: "40px" }}>
        <form onSubmit={handleRegister}>
          <label style={{ display: "block", color: "#f5d0fe", marginBottom: "10px", fontSize: "14px" }}>
            &gt; IDENTIFIER (NAME)
          </label>
          <input type="text" style={inputStyle} placeholder="Enter display name..." required />

          <label style={{ display: "block", color: "#f5d0fe", marginBottom: "10px", fontSize: "14px" }}>
            &gt; CONTACT COMM LINK (EMAIL)
          </label>
          <input type="email" style={inputStyle} placeholder="student@devquiz.com" required />

          <label style={{ display: "block", color: "#f5d0fe", marginBottom: "10px", fontSize: "14px" }}>
            &gt; GENERATE PASSKEY
          </label>
          <input type="password" style={inputStyle} placeholder="Create secure password..." required />

          <button type="submit" className="term-btn-solid" style={{ padding: "15px", fontSize: "18px", marginTop: "10px" }}>
            CREATE CLEARANCE
          </button>
        </form>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <p style={{ color: "var(--term-dim)", fontSize: "14px" }}>
          ALREADY HAVE CLEARANCE? <Link to="/login" style={{ color: "#b026ff", textDecoration: "none", borderBottom: "1px dashed #b026ff" }}>LOGIN HERE</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;