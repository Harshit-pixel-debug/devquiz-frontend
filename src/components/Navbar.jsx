import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const storedName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("userName");
    window.location.href = "/";
  };

  const navStyle = ({ isActive }) => ({
    color: isActive ? "#b026ff" : "#4a1075",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal"
  });

  return (
    <header style={{ borderBottom: "2px solid #b026ff", backgroundColor: "rgba(10, 3, 15, 0.95)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 30px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", letterSpacing: "1px" }}>
          <span>👾</span>
          <span style={{ fontWeight: "bold", color: "#b026ff" }}>DEVQUIZ TERMINAL // v1.0.0</span>
        </div>

        <nav style={{ display: "flex", gap: "22px", alignItems: "center", fontSize: "15px" }}>
          <NavLink to="/" style={navStyle}>[HOME]</NavLink>
          <NavLink to="/about" style={navStyle}>[ABOUT]</NavLink>
          <NavLink to="/contact" style={navStyle}>[CONTACT]</NavLink>
          
          {/* Restored: No login condition here, these will always show up */}
          <NavLink to="/dashboard" style={navStyle}>[DASHBOARD]</NavLink>
          <NavLink to="/admin" style={navStyle}>[ADMIN_PANEL]</NavLink>
          
          {!storedName ? (
            <>
              <Link to="/login" style={{ color: "#b026ff", textDecoration: "none", marginLeft: "15px", fontWeight: "bold" }}>[LOGIN]</Link>
              <Link to="/register" style={{ color: "#050208", backgroundColor: "#b026ff", border: "1px solid #b026ff", padding: "4px 12px", textDecoration: "none", fontWeight: "bold" }}>
                [SIGN UP]
              </Link>
            </>
          ) : (
            <button 
              onClick={handleLogout} 
              style={{ background: "transparent", border: "1px solid #b026ff", color: "#b026ff", padding: "4px 12px", cursor: "pointer", marginLeft: "15px", fontFamily: "inherit", fontWeight: "bold" }}
            >
              [LOGOUT_]
            </button>
          )}
        </nav>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "24px", padding: "4px 30px", borderTop: "1px solid #12041a", fontSize: "12px", color: "#4a1075", maxWidth: "1400px", margin: "0 auto" }}>
        <span>STATUS: <span style={{ color: "#b026ff" }}>ONLINE</span></span>
        <span>USER: <span style={{ color: "#b026ff" }}>{storedName ? `${storedName.toUpperCase()}_` : "GUEST_"}</span></span>
      </div>
    </header>
  );
}

export default Navbar;