import { Link } from "react-router-dom";

function StudentDashboard() {
  const categories = [
    { id: "html", name: "HTML", desc: "Tags, semantic structure, forms, and attributes." },
    { id: "css", name: "CSS", desc: "Flexbox, Grid, styling, and responsive layout rules." },
    { id: "javascript", name: "JavaScript", desc: "Variables, ES6 features, functions, and the DOM." }
  ];

  return (
    <div style={{ maxWidth: "850px", margin: "40px auto", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "28px" }}>Student Dashboard</h1>
          <p style={{ color: "#4b5563", marginTop: "5px" }}>Pick a category to test your knowledge or revise concepts.</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link
            to="/flashcards"
            style={{ padding: "8px 14px", backgroundColor: "#0284c7", color: "white", textDecoration: "none", borderRadius: "6px", fontSize: "14px", fontWeight: "bold" }}
          >
            Study Flashcards
          </Link>
          <Link
            to="/history"
            style={{ padding: "8px 14px", backgroundColor: "#374151", color: "white", textDecoration: "none", borderRadius: "6px", fontSize: "14px", fontWeight: "bold" }}
          >
            Quiz History
          </Link>
        </div>
      </div>

      <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>Available Quiz Categories</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 10px 0", color: "#1f2937" }}>{cat.name}</h3>
              <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.5" }}>{cat.desc}</p>
            </div>
            <Link
              to={`/quiz/${cat.id}`}
              style={{
                display: "block",
                textAlign: "center",
                marginTop: "20px",
                padding: "10px",
                backgroundColor: "#2563eb",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "bold"
              }}
            >
              Start {cat.name} Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;