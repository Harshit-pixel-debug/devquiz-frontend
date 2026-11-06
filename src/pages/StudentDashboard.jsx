import { Link } from "react-router-dom";

function StudentDashboard() {
  const storedName = localStorage.getItem("userName") || "DEVELOPER";

  const tracks = [
    { id: "html", tag: "[ HTML5 ]", desc: "Master semantic markup, forms, and accessibility standards.", btnText: "▶ START QUIZ" },
    { id: "css", tag: "[ CSS3 ]", desc: "Test your knowledge of Flexbox, Grid, and responsive layout rules.", btnText: "▶ START QUIZ" },
    { id: "javascript", tag: "[ JAVASCRIPT ]", desc: "Drill ES6+ syntax, asynchronous flow, and DOM manipulation.", btnText: "▶ START QUIZ" },
    { id: "cpp", tag: "[ C++ ]", desc: "Evaluate your grasp of object-oriented programming and pointers.", btnText: "▶ START QUIZ" },
    { id: "dbms", tag: "[ DBMS ]", desc: "Test SQL queries, normalization, and relational database concepts.", btnText: "▶ START QUIZ" }
  ];

  return (
    <div style={{ maxWidth: "1400px", margin: "40px auto 80px", padding: "0 30px" }}>
      <div className="term-box" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 25px", fontSize: "14px", marginBottom: "40px", backgroundColor: "rgba(10, 3, 15, 0.9)" }}>
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <span style={{ fontWeight: "bold", color: "#b026ff" }}>// SECURE CONNECTION ESTABLISHED</span>
          <span style={{ color: "var(--term-dim)" }}>SESSION: ACTIVE | ROLE: STUDENT</span>
        </div>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "4px", margin: "0 0 15px 0", fontFamily: "'VT323', monospace", color: "#ffffff", textShadow: "0 0 10px rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
          WELCOME, {storedName}.EXE
        </h1>
        <p style={{ fontSize: "18px", letterSpacing: "2px", color: "#f5d0fe", margin: 0 }}>
          SYSTEM READY. SELECT A SUBJECT TRACK TO BEGIN...
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr", gap: "40px", alignItems: "start" }}>
        <div className="term-box" style={{ padding: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "35px" }}>
            {tracks.map((track) => (
              <div key={track.id} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "25px", border: "1px dashed var(--term-dim)", backgroundColor: "rgba(10, 3, 15, 0.4)" }}>
                <div>
                  <div className="badge-pill" style={{ marginBottom: "25px", borderColor: "#b026ff", color: "#b026ff" }}>{track.tag}</div>
                  <p style={{ fontSize: "15px", lineHeight: "1.6", margin: 0, minHeight: "75px", color: "#f5d0fe" }}>{track.desc}</p>
                </div>
                <Link to={`/quiz/${track.id}`} className="term-btn-outline" style={{ marginTop: "20px" }}>{track.btnText}</Link>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <div className="term-box" style={{ padding: "35px" }}>
            <h2 style={{ fontSize: "32px", fontFamily: "'VT323', monospace", letterSpacing: "3px", margin: "0 0 20px 0", color: "#b026ff" }}>STUDY FLASHCARDS</h2>
            <p style={{ fontSize: "15px", color: "#f5d0fe", lineHeight: "1.6", marginBottom: "30px" }}>Access the revision module. Flip through digital cards to memorize definitions before attempting a quiz.</p>
            <Link to="/flashcards" className="term-btn-solid" style={{ padding: "15px", fontSize: "16px", letterSpacing: "1px" }}>⚡ OPEN FLASHCARDS</Link>
          </div>
          <div className="term-box" style={{ padding: "35px" }}>
            <div style={{ fontSize: "14px", marginBottom: "15px", color: "var(--term-dim)", letterSpacing: "1px" }}>C:\DEVQUIZ\USER&gt; CHECK_LOGS</div>
            <h3 style={{ margin: "0 0 20px 0", fontSize: "22px", color: "#ffffff" }}>SESSION HISTORY</h3>
            <p style={{ fontSize: "14px", color: "#f5d0fe", marginBottom: "25px", lineHeight: "1.5" }}>Review your previous quiz scores and track your performance over time.</p>
            <Link to="/history" className="term-btn-outline">VIEW SCORE LOGS</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;