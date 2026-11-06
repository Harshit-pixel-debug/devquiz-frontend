import { useState } from "react";
import { Link } from "react-router-dom";

function Flashcards() {
  // Temporary mock data until the backend is connected
  const flashcardsData = [
    { id: 1, subject: "HTML5", term: "Semantic HTML", definition: "The use of HTML markup to reinforce the semantics, or meaning, of the information in webpages (e.g., using <article> instead of <div>)." },
    { id: 2, subject: "CSS3", term: "Flexbox", definition: "A one-dimensional CSS layout model used to distribute space between items in an interface and align them dynamically." },
    { id: 3, subject: "JAVASCRIPT", term: "Closure", definition: "A feature in JS where an inner function has access to the outer (enclosing) function's variables, even after the outer function has executed." },
    { id: 4, subject: "C++", term: "Pointer", definition: "A variable whose value is the memory address of another variable." },
    { id: 5, subject: "DBMS", term: "Normalization", definition: "The process of organizing data in a database to reduce redundancy and improve data integrity." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcardsData[currentIndex];

  const handleNext = () => {
    if (currentIndex < flashcardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false); // Reset flip state for the new card
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto 80px", padding: "0 30px" }}>
      
      {/* Header section */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "30px" }}>
        <div>
          <div style={{ fontSize: "14px", color: "var(--term-dim)", marginBottom: "10px", letterSpacing: "1px" }}>
            C:\DEVQUIZ\MODULES&gt; EXECUTE FLASHCARDS.EXE
          </div>
          <h1 style={{ margin: 0, fontSize: "48px", fontFamily: "'VT323', monospace", letterSpacing: "4px", color: "#ffffff" }}>
            REVISION DECK
          </h1>
        </div>
        <div style={{ fontSize: "18px", fontWeight: "bold", color: "#66ff66" }}>
          CARD [ {currentIndex + 1} / {flashcardsData.length} ]
        </div>
      </div>

      {/* The Flashcard */}
      <div 
        className="term-box" 
        onClick={toggleFlip}
        style={{ 
          minHeight: "350px", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          padding: "40px",
          cursor: "pointer",
          backgroundColor: isFlipped ? "rgba(0, 30, 10, 0.85)" : "rgba(3, 10, 4, 0.85)",
          transition: "background-color 0.3s ease"
        }}
      >
        <div style={{ position: "absolute", top: "20px", left: "20px", color: "#aaffaa", fontSize: "14px", letterSpacing: "1px" }}>
          SUBJECT: [ {currentCard.subject} ]
        </div>
        <div style={{ position: "absolute", top: "20px", right: "20px", color: "var(--term-dim)", fontSize: "14px" }}>
          {isFlipped ? "// DEFINITION_SIDE" : "// TERM_SIDE"}
        </div>

        {!isFlipped ? (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "42px", color: "#ffffff", letterSpacing: "2px", margin: "0 0 20px 0" }}>
              {currentCard.term}
            </h2>
            <p style={{ color: "var(--term-dim)", fontSize: "14px", margin: 0 }}>
              [ CLICK ANYWHERE TO REVEAL DEFINITION ]
            </p>
          </div>
        ) : (
          <div style={{ textAlign: "center", maxWidth: "80%" }}>
            <p style={{ fontSize: "24px", color: "#66ff66", lineHeight: "1.6", margin: "0 0 20px 0" }}>
              {currentCard.definition}
            </p>
            <p style={{ color: "var(--term-dim)", fontSize: "14px", margin: 0 }}>
              [ CLICK ANYWHERE TO HIDE DEFINITION ]
            </p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="term-btn-outline"
          style={{ width: "150px", opacity: currentIndex === 0 ? 0.3 : 1, cursor: currentIndex === 0 ? "not-allowed" : "pointer" }}
        >
          &lt;&lt; PREVIOUS
        </button>

        <button 
          onClick={toggleFlip}
          className="term-btn-solid"
          style={{ width: "200px" }}
        >
          FLIP CARD
        </button>

        <button 
          onClick={handleNext} 
          disabled={currentIndex === flashcardsData.length - 1}
          className="term-btn-outline"
          style={{ width: "150px", opacity: currentIndex === flashcardsData.length - 1 ? 0.3 : 1, cursor: currentIndex === flashcardsData.length - 1 ? "not-allowed" : "pointer" }}
        >
          NEXT &gt;&gt;
        </button>
      </div>

      {/* Back navigation */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/dashboard" style={{ color: "var(--term-dim)", textDecoration: "none", fontSize: "14px", borderBottom: "1px dashed var(--term-dim)", paddingBottom: "3px" }}>
          RETURN TO DASHBOARD
        </Link>
      </div>

    </div>
  );
}

export default Flashcards;