import { useState } from "react";
import { useParams, Link } from "react-router-dom";

function QuizPage() {
  const { categoryId } = useParams();
  
  const allQuizzes = {
    html: [
      { id: 1, text: "Which HTML tag is used to define an internal style sheet?", options: ["<css>", "<script>", "<style>", "<link>"], answer: 2 },
      { id: 2, text: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>", "<hr>"], answer: 2 },
      { id: 3, text: "Choose the correct HTML element to define important text:", options: ["<strong>", "<b>", "<i>", "<important>"], answer: 0 }
    ],
    javascript: [
      { id: 1, text: "Inside which HTML element do we put the JavaScript?", options: ["<js>", "<script>", "<javascript>", "<scripting>"], answer: 1 },
      { id: 2, text: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');"], answer: 3 }
    ]
  };

  const questions = allQuizzes[categoryId] || [
    { id: 1, text: `Sample ${categoryId} question 1?`, options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optionIndex) => {
    setAnswers({ ...answers, [currentIndex]: optionIndex });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) score++;
    });

    return (
      <div style={{ maxWidth: "800px", margin: "80px auto", padding: "0 24px" }}>
        <div className="term-box" style={{ padding: "50px", textAlign: "center" }}>
          <h1 style={{ fontSize: "48px", fontFamily: "'VT323', monospace", color: "#b026ff", margin: "0 0 20px 0" }}>
            ASSESSMENT COMPLETE
          </h1>
          <div style={{ fontSize: "18px", color: "var(--term-dim)", marginBottom: "30px" }}>
            SUBJECT: [ {categoryId.toUpperCase()} ]
          </div>
          
          <div style={{ 
            fontSize: "64px", 
            fontFamily: "'VT323', monospace", 
            color: score === questions.length ? "#b026ff" : "#ffffff",
            marginBottom: "40px",
            textShadow: score === questions.length ? "0 0 15px rgba(176,38,255,0.4)" : "none"
          }}>
            SCORE: {score} / {questions.length}
          </div>

          <Link to="/dashboard" className="term-btn-outline" style={{ display: "inline-block", width: "auto", padding: "15px 40px" }}>
            RETURN TO DASHBOARD
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto 80px", padding: "0 30px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "30px" }}>
        <div>
          <div style={{ fontSize: "14px", color: "var(--term-dim)", marginBottom: "10px", letterSpacing: "1px" }}>
            C:\DEVQUIZ\ASSESSMENT&gt; RUN {categoryId.toUpperCase()}.EXE
          </div>
          <h1 style={{ margin: 0, fontSize: "42px", fontFamily: "'VT323', monospace", letterSpacing: "3px", color: "#ffffff" }}>
            {categoryId.toUpperCase()} MODULE
          </h1>
        </div>
        <div className="badge-pill" style={{ borderColor: "#b026ff", color: "#b026ff" }}>
          Q: {currentIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="term-box" style={{ padding: "40px", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", color: "#ffffff", lineHeight: "1.5", margin: "0 0 30px 0" }}>
          <span style={{ color: "#b026ff", marginRight: "10px" }}>&gt;</span> 
          {currentQ.text}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {currentQ.options.map((option, index) => {
            const isSelected = answers[currentIndex] === index;
            return (
              <button
                key={index}
                onClick={() => handleSelectOption(index)}
                className={isSelected ? "term-btn-solid" : "term-btn-outline"}
                style={{ textAlign: "left", padding: "16px 24px", fontSize: "16px", display: "flex", gap: "15px" }}
              >
                <span style={{ opacity: 0.7 }}>[{index + 1}]</span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={handlePrev} disabled={currentIndex === 0} className="term-btn-outline" style={{ width: "160px", opacity: currentIndex === 0 ? 0.3 : 1, cursor: currentIndex === 0 ? "not-allowed" : "pointer" }}>
          &lt;&lt; PREVIOUS
        </button>

        {currentIndex === questions.length - 1 ? (
          <button onClick={handleSubmit} disabled={answers[currentIndex] === undefined} className="term-btn-solid" style={{ width: "200px", backgroundColor: "#ffffff", color: "#000000", borderColor: "#ffffff" }}>
            SUBMIT ASSESSMENT
          </button>
        ) : (
          <button onClick={handleNext} className="term-btn-outline" style={{ width: "160px" }}>
            NEXT &gt;&gt;
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizPage;