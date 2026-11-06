import { Link } from "react-router-dom";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    
    // TEMPORARY DAY 2 MOCK: We simulate a successful backend login
    // On Day 3, you will replace this with an axios request to Member 1's Express API
    localStorage.setItem("userName", "Harshit");
    
    // Redirect to the protected dashboard and refresh the Navbar state
    window.location.href = "/dashboard";
  };

  const inputStyle = {
    width: "100%", backgroundColor: "rgba(10, 3, 15, 0.6)",
    border: "1px dashed var(--term-dim)", color: "#b026ff",
    padding: "15px", fontFamily: "'Share Tech Mono', monospace",
    fontSize: "16px", marginBottom: "25px", outline: "none", boxSizing: "border-box"
  };

  return (
    <div style={{ maxWidth: "500px", margin: "80px auto", padding: "0 30px" }}>
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <div style={{ fontSize: "14px", color: "var(--term-dim)", marginBottom: "10px", letterSpacing: "1px" }}>
          C:\DEVQUIZ&gt; EXECUTE LOGIN.EXE
        </div>
        <h1 style={{ margin: 0, fontSize: "42px", fontFamily: "'VT323', monospace", letterSpacing: "4px", color: "#ffffff" }}>
          SYSTEM AUTHENTICATION
        </h1>
      </div>

      <div className="term-box" style={{ padding: "40px" }}>
        <form onSubmit={handleLogin}>
          <label style={{ display: "block", color: "#f5d0fe", marginBottom: "10px", fontSize: "14px" }}>
            &gt; EMAIL CREDENTIAL
          </label>
          <input type="email" style={inputStyle} placeholder="student@devquiz.com" required />

          <label style={{ display: "block", color: "#f5d0fe", marginBottom: "10px", fontSize: "14px" }}>
            &gt; SECURE PASSKEY
          </label>
          <input type="password" style={inputStyle} placeholder="********" required />

          <button type="submit" className="term-btn-solid" style={{ padding: "15px", fontSize: "18px", marginTop: "10px" }}>
            INITIATE HANDSHAKE
          </button>
        </form>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <p style={{ color: "var(--term-dim)", fontSize: "14px" }}>
          NO ACCESS CLEARANCE? <Link to="/register" style={{ color: "#b026ff", textDecoration: "none", borderBottom: "1px dashed #b026ff" }}>REGISTER HERE</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;