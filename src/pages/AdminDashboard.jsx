import { useState } from "react";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("users");
  const storedName = localStorage.getItem("userName") || "ADMIN";

  const tabs = [
    { id: "users", label: "[ USERS ]" },
    { id: "quizzes", label: "[ QUIZZES ]" },
    { id: "questions", label: "[ QUESTIONS ]" },
    { id: "flashcards", label: "[ FLASHCARDS ]" }
  ];

  const mockData = {
    users: [
      { id: 1, name: "Student One", email: "student1@test.com", role: "Student" },
      { id: 2, name: "Harshit", email: "harshit@test.com", role: "Admin" }
    ],
    quizzes: [
      { id: "html", title: "HTML5 Basics", questions: 15 },
      { id: "css", title: "CSS3 Layouts", questions: 15 }
    ]
  };

  return (
    <div style={{ maxWidth: "1400px", margin: "40px auto 80px", padding: "0 30px" }}>
      <div className="term-box" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 25px", fontSize: "14px", marginBottom: "40px", backgroundColor: "rgba(15, 3, 3, 0.9)", borderColor: "#ff3939" }}>
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <span style={{ fontWeight: "bold", color: "#ff6666" }}>// ROOT PRIVILEGES ACTIVE</span>
          <span style={{ color: "var(--term-dim)" }}>ACCESS LEVEL: ADMINISTRATOR</span>
        </div>
        <div style={{ fontWeight: "bold", color: "#ff6666" }}>⚠️ RESTRICTED AREA</div>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "4px", margin: "0 0 15px 0", fontFamily: "'VT323', monospace", color: "#ffffff", textShadow: "0 0 10px rgba(255,255,255,0.5)" }}>
          SYSADMIN: {storedName}
        </h1>
        <p style={{ fontSize: "18px", letterSpacing: "2px", color: "#f5d0fe", margin: 0 }}>
          DATABASE MANAGEMENT CONSOLE. SELECT A TABLE TO MODIFY.
        </p>
      </div>

      <div style={{ display: "flex", gap: "15px", marginBottom: "30px", flexWrap: "wrap" }}>
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={activeTab === tab.id ? "term-btn-solid" : "term-btn-outline"} style={{ width: "auto", padding: "12px 24px" }}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="term-box" style={{ padding: "40px", minHeight: "400px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <h2 style={{ margin: 0, fontSize: "28px", fontFamily: "'VT323', monospace", color: "#b026ff", letterSpacing: "2px" }}>
            TABLE: {activeTab.toUpperCase()}
          </h2>
          <button className="term-btn-solid" style={{ width: "auto", padding: "10px 20px" }}>+ CREATE NEW RECORD</button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "15px" }}>
            <thead>
              <tr style={{ borderBottom: "2px dashed var(--term-dim)", color: "#f5d0fe" }}>
                <th style={{ padding: "15px" }}>ID</th>
                <th style={{ padding: "15px" }}>{activeTab === 'users' ? 'NAME' : 'TITLE'}</th>
                <th style={{ padding: "15px" }}>{activeTab === 'users' ? 'ROLE' : 'DETAILS'}</th>
                <th style={{ padding: "15px", textAlign: "right" }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {(mockData[activeTab] || []).map((row, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid rgba(176, 38, 255, 0.2)" }}>
                  <td style={{ padding: "15px" }}>{row.id}</td>
                  <td style={{ padding: "15px" }}>{row.name || row.title}</td>
                  <td style={{ padding: "15px" }}>{row.role || `${row.questions} items`}</td>
                  <td style={{ padding: "15px", textAlign: "right" }}>
                    <button className="term-btn-outline" style={{ display: "inline-block", width: "auto", padding: "6px 12px", marginRight: "10px", fontSize: "12px" }}>EDIT</button>
                    <button className="term-btn-outline" style={{ display: "inline-block", width: "auto", padding: "6px 12px", fontSize: "12px", color: "#ff6666", borderColor: "#ff6666" }}>DELETE</button>
                  </td>
                </tr>
              ))}
              {(!mockData[activeTab] || mockData[activeTab].length === 0) && (
                <tr>
                  <td colSpan="4" style={{ padding: "30px", textAlign: "center", color: "var(--term-dim)" }}>
                    NO RECORDS FOUND IN DATABASE
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;