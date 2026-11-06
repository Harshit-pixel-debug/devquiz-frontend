import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ maxWidth: "1000px", margin: "80px auto", padding: "0 30px", textAlign: "center" }}>
      
      <div className="badge-pill" style={{ marginBottom: "30px", borderColor: "#d946ef", color: "#d946ef" }}>
        MERN STACK PROJECT
      </div>

      <h1 style={{
        fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "4px", margin: "0 0 25px 0",
        fontFamily: "'VT323', monospace", color: "#ffffff", textShadow: "0 0 10px rgba(255,255,255,0.5)"
      }}>
        BUILD FASTER.<br/>
        <span style={{ color: "#b026ff", textShadow: "0 0 15px rgba(176,38,255,0.6)" }}>STUDY RETRO.</span>
      </h1>

      <p style={{ fontSize: "18px", color: "#f5d0fe", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto 50px" }}>
        A full-stack quiz platform. Test your knowledge in HTML, CSS, JavaScript, C++, and DBMS. Register to track your scores, revise with flashcards, and master core concepts.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/register" className="term-btn-solid" style={{ width: "auto", padding: "15px 40px", fontSize: "18px" }}>
          INITIALIZE_STUDENT_REGISTRATION
        </Link>
        <Link to="/login" className="term-btn-outline" style={{ width: "auto", padding: "15px 40px", fontSize: "18px" }}>
          SYSTEM_LOGIN
        </Link>
      </div>
    </div>
  );
}

export default Home;