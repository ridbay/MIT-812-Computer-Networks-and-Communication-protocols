import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Info, Trophy, RotateCcw } from "lucide-react";
import { StudyData, MCQ, ShortAnswer } from "../../types";

interface QuizModeProps {
  data: StudyData;
  onSaveScore: (type: string, score: number, total: number) => void;
}

const QuizMode: React.FC<QuizModeProps> = ({ data, onSaveScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const mcqs = data?.mcqs || [];
  const currentMcq: MCQ | undefined = mcqs[currentIndex];

  const handleOptionSelect = (letter: string) => {
    if (showFeedback || !currentMcq) return;
    setSelectedOption(letter);
    setShowFeedback(true);
    if (letter === currentMcq.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < mcqs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setQuizFinished(true);
      onSaveScore("mcq", score, mcqs.length);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 0" }}>
        <Trophy
          size={64}
          color="var(--primary)"
          style={{ marginBottom: "2rem" }}
        />
        <h2
          style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "white" }}
        >
          Quiz Completed!
        </h2>
        <p
          style={{
            fontSize: "1.5rem",
            color: "var(--text-muted)",
            marginBottom: "3rem",
          }}
        >
          Your Score:{" "}
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>
            {score} / {mcqs.length}
          </span>
        </p>
        <button
          className="btn-primary"
          onClick={resetQuiz}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "0 auto",
            background: "var(--primary)",
            border: "none",
            padding: "12px 24px",
            borderRadius: "12px",
            color: "white",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          <RotateCcw size={20} /> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-mode" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ opacity: 0.6, color: "white" }}>
          Question {currentIndex + 1} of {mcqs.length}
        </span>
        <span style={{ fontWeight: 600, color: "var(--primary)" }}>
          Score: {score}
        </span>
      </div>

      <div className="mcq-content">
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "2.5rem",
            lineHeight: 1.4,
            color: "white",
          }}
        >
          {currentMcq?.question}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {Object.entries(currentMcq?.options || {}).map(([letter, text]) => {
            let status = "";
            if (showFeedback && currentMcq) {
              if (letter === currentMcq.answer) status = "correct";
              else if (letter === selectedOption) status = "wrong";
            }
            return (
              <button
                key={letter}
                onClick={() => handleOptionSelect(letter)}
                className="glass-card"
                style={{
                  padding: "1.2rem",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  transition: "all 0.2s ease",
                  border:
                    status === "correct"
                      ? "2px solid #00ffff"
                      : status === "wrong"
                        ? "2px solid #ff00ff"
                        : "1px solid rgba(255, 255, 255, 0.1)",
                  background:
                    status === "correct"
                      ? "rgba(0, 255, 255, 0.1)"
                      : status === "wrong"
                        ? "rgba(255, 0, 255, 0.1)"
                        : "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {letter}
                </div>
                <span style={{ flex: 1 }}>{text}</span>
                {status === "correct" && <Check size={20} color="#00ffff" />}
                {status === "wrong" && <X size={20} color="#ff00ff" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {showFeedback && currentMcq && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card"
              style={{
                marginTop: "2rem",
                padding: "1.5rem",
                borderLeft: "4px solid var(--primary)",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                }}
              >
                <Info size={18} /> Explanation
              </div>
              <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                {currentMcq.explanation}
              </p>
              <button
                className="btn-primary"
                onClick={handleNext}
                style={{
                  marginTop: "1.5rem",
                  width: "100%",
                  background: "var(--primary)",
                  border: "none",
                  padding: "12px",
                  borderRadius: "12px",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                Next Question
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
//     </div>
//   );
// };

export default QuizMode;
