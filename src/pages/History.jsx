import { Link } from "react-router-dom";

function History() {
  // Mock data for Day 2 testing before MongoDB is connected
  const mockHistory = [
    { id: "TX-9901", date: "2026-11-03", subject: "HTML5", score: 14, total: 15, status: "PASSED" },
    { id: "TX-9902", date: "2026-11-02", subject: "CSS3", score: 8, total: 15, status: "FAILED" },
    { id: "TX-9903", date: "2026-11-01", subject: "JAVASCRIPT", score: 18, total: 20, status: "PASSED" },
    { id: "TX-9904", date: "2026-10-28", subject: "C++", score: 12, total: 15, status: "PASSED" }
  ];

  return (
    <div style={{ maxWidth: "1000px", margin: "40px auto 80px", padding: "0 30px" }}>
      
      {/* Page Header */}
      <div style={{ marginBottom: "40px" }}>
        <div style={{ fontSize: "14px", color: "var(--term-dim)", marginBottom: "10px", letterSpacing: "1px" }}>
          C:\DEVQUIZ\USER&gt; GET_HISTORY_LOGS.EXE
        </div>
        <h1 style={{ margin: 0, fontSize: "48px", fontFamily: "'VT323', monospace", letterSpacing: "4px", color: "#ffffff" }}>
          PERFORMANCE LOGS
        </h1>
        <p style={{ fontSize: "16px", color: "#aaffaa", marginTop: "10px" }}>
          SYSTEM RECORD OF PREVIOUS ASSESSMENT ATTEMPTS.
        </p>
      </div>

      {/* Terminal Data Table */}
      <div className="term-box" style={{ padding: "40px" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "16px" }}>
            <thead>
              <tr style={{ borderBottom: "2px dashed var(--term-dim)", color: "#aaffaa" }}>
                <th style={{ padding: "15px", letterSpacing: "1px" }}>TIMESTAMP</th>
                <th style={{ padding: "15px", letterSpacing: "1px" }}>SUBJECT</th>
                <th style={{ padding: "15px", letterSpacing: "1px" }}>SCORE</th>
                <th style={{ padding: "15px", letterSpacing: "1px" }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {mockHistory.map((row) => (
                <tr key={row.id} style={{ borderBottom: "1px solid rgba(57, 255, 20, 0.2)" }}>
                  <td style={{ padding: "15px", color: "var(--term-dim)" }}>{row.date}</td>
                  <td style={{ padding: "15px", color: "#ffffff", fontWeight: "bold" }}>[ {row.subject} ]</td>
                  <td style={{ padding: "15px" }}>{row.score} / {row.total}</td>
                  <td style={{ 
                    padding: "15px", 
                    color: row.status === "PASSED" ? "#39ff14" : "#ff3939",
                    fontWeight: "bold"
                  }}>
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Navigation */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Link to="/dashboard" className="term-btn-outline" style={{ display: "inline-block", width: "auto", padding: "12px 30px" }}>
            &lt;&lt; RETURN TO DASHBOARD
          </Link>
        </div>
      </div>
    </div>
  );
}

export default History;