import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ maxWidth: "900px", margin: "40px auto 80px", padding: "0 30px" }}>
      <div style={{ marginBottom: "40px" }}>
        <div style={{ fontSize: "14px", color: "var(--term-dim)", marginBottom: "10px", letterSpacing: "1px" }}>
          C:\DEVQUIZ&gt; READ ABOUT.TXT
        </div>
        <h1 style={{ margin: 0, fontSize: "48px", fontFamily: "'VT323', monospace", letterSpacing: "4px", color: "#ffffff" }}>
          PROJECT MANIFESTO
        </h1>
      </div>

      <div className="term-box" style={{ padding: "40px", marginBottom: "40px", lineHeight: "1.8", fontSize: "16px", color: "#f5d0fe" }}>
        <h2 style={{ color: "#b026ff", fontSize: "24px", margin: "0 0 20px 0" }}>// SYSTEM_OVERVIEW</h2>
        <p>
          DevQuiz Terminal is a full-stack MERN (MongoDB, Express, React, Node.js) application engineered to test and reinforce fundamental web development concepts. 
        </p>
        <p>
          Built over a strict 3-day development cycle, this platform features secure JWT authentication, role-based routing, stateful quiz runners, and interactive revision flashcards.
        </p>

        <h2 style={{ color: "#b026ff", fontSize: "24px", margin: "40px 0 20px 0" }}>// DEVELOPMENT_TEAM</h2>
        <ul style={{ listStyleType: "square", paddingLeft: "20px", color: "#f5d0fe" }}>
          <li style={{ marginBottom: "10px" }}><strong>MEMBER 1:</strong> Express backend, MongoDB architecture, JWT Auth, and Role management.</li>
          <li style={{ marginBottom: "10px" }}><strong>MEMBER 2:</strong> Quiz logic, scoring algorithms, Flashcards API, and Admin CRUD operations.</li>
          <li style={{ marginBottom: "10px" }}><strong>MEMBER 3:</strong> React UI/UX, Retro-Terminal styling, dynamic routing, and component integration.</li>
        </ul>
      </div>

      <div style={{ textAlign: "center" }}>
        <Link to="/" className="term-btn-outline" style={{ display: "inline-block", width: "auto", padding: "12px 30px" }}>
          RETURN TO HOME
        </Link>
      </div>
    </div>
  );
}

export default About;