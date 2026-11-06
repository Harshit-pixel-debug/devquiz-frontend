import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import Flashcards from "./pages/Flashcards";
import QuizPage from "./pages/QuizPage";
import AdminDashboard from "./pages/AdminDashboard";
import History from "./pages/History";
import About from "./pages/About"; // <-- ADD IMPORT
import Contact from "./pages/Contact"; // <-- ADD IMPORT

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* <-- ADD ROUTE */}
          <Route path="/contact" element={<Contact />} /> {/* <-- ADD ROUTE */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/quiz/:categoryId" element={<QuizPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;