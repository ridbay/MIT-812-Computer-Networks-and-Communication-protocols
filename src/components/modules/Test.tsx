import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck,
  Timer,
  Award,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  Trophy,
} from "lucide-react";
import { TestMcqQuestions } from "../../data/mcqData";

const Test: React.FC = () => {
  const [testState, setTestState] = useState<"intro" | "testing" | "results">(
    "intro",
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleStart = () => {
    setTestState("testing");
    setCurrentIndex(0);
    setUserAnswers({});
    setScore(0);
  };

  const handleOptionSelect = (option: string) => {
    if (testState !== "testing" || userAnswers[currentIndex]) return;
    setUserAnswers({ ...userAnswers, [currentIndex]: option });
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < TestMcqQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowExplanation(false);
    } else {
      handleFinish();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowExplanation(false);
    }
  };

  const handleFinish = () => {
    let finalScore = 0;
    TestMcqQuestions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        finalScore++;
      }
    });
    setScore(finalScore);
    setTestState("results");
  };

  const currentQuestion = TestMcqQuestions[currentIndex];
  const progress = ((currentIndex + 1) / TestMcqQuestions.length) * 100;

  if (testState === "intro") {
    return (
      <div className="test-container" style={{ color: "white" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background:
              "linear-gradient(135deg, rgba(240, 10, 4, 0.1) 0%, rgba(240, 10, 4, 0.05) 100%)",
            padding: "2.5rem",
            borderRadius: "24px",
            border: "1px solid rgba(240, 10, 4, 0.2)",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "var(--primary)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              boxShadow: "0 12px 24px rgba(240, 10, 4, 0.3)",
            }}
          >
            <ClipboardCheck color="white" size={32} />
          </div>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            Continuous Assessment (CA) Test
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              opacity: 0.8,
              maxWidth: "700px",
              margin: "0 auto 2rem",
              lineHeight: "1.6",
            }}
          >
            This comprehensive test contains {TestMcqQuestions.length} questions
            covering all aspects of Data Communication and Computer Networks.
            Test your knowledge and prepare for your exams.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginBottom: "2.5rem",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                {TestMcqQuestions.length}
              </div>
              <div style={{ fontSize: "0.9rem", opacity: 0.5 }}>Questions</div>
            </div>
            <div
              style={{ width: "1px", background: "rgba(255,255,255,0.1)" }}
            />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>70%</div>
              <div style={{ fontSize: "0.9rem", opacity: 0.5 }}>To Pass</div>
            </div>
          </div>

          <button
            onClick={handleStart}
            style={{
              padding: "1.2rem 3.5rem",
              background: "var(--primary)",
              color: "white",
              border: "none",
              borderRadius: "16px",
              fontSize: "1.2rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 15px 30px rgba(240, 10, 4, 0.4)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            Start CA Test
          </button>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              icon: <Award size={20} />,
              title: "Detailed Results",
              desc: "Get a comprehensive breakdown of your performance.",
            },
            {
              icon: <AlertCircle size={20} />,
              title: "Passing Grade",
              desc: "Aim for at least 70% to pass.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                padding: "1.5rem",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ color: "var(--primary)", marginBottom: "0.8rem" }}>
                {item.icon}
              </div>
              <h3 style={{ marginBottom: "0.5rem" }}>{item.title}</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (testState === "results") {
    const percentage = Math.round((score / TestMcqQuestions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div
        className="test-results"
        style={{ color: "white", textAlign: "center" }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            background: "rgba(255,255,255,0.03)",
            padding: "4rem 2rem",
            borderRadius: "32px",
            border: "1px solid rgba(255,255,255,0.1)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: passed
                ? "rgba(16, 185, 129, 0.1)"
                : "rgba(240, 10, 4, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 2rem",
            }}
          >
            {passed ? (
              <Trophy color="#10B981" size={40} />
            ) : (
              <AlertCircle color="var(--primary)" size={40} />
            )}
          </div>

          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              marginBottom: "0.5rem",
            }}
          >
            {percentage}%
          </h1>
          <h2
            style={{ fontSize: "1.5rem", opacity: 0.6, marginBottom: "2rem" }}
          >
            {passed
              ? "Excellent! You Passed."
              : "Keep Studying. You'll get it!"}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                background: "rgba(255,255,255,0.02)",
                borderRadius: "20px",
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: 700 }}>{score}</div>
              <div style={{ fontSize: "0.8rem", opacity: 0.5 }}>Correct</div>
            </div>
            <div
              style={{
                padding: "1.5rem",
                background: "rgba(255,255,255,0.02)",
                borderRadius: "20px",
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: 700 }}>
                {TestMcqQuestions.length - score}
              </div>
              <div style={{ fontSize: "0.8rem", opacity: 0.5 }}>Incorrect</div>
            </div>
          </div>

          <div
            style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
          >
            <button
              onClick={handleStart}
              style={{
                padding: "1rem 2rem",
                background: "var(--primary)",
                color: "white",
                border: "none",
                borderRadius: "14px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <RotateCcw size={18} /> Retake CA Test
            </button>
            <button
              onClick={() => setTestState("intro")}
              style={{
                padding: "1rem 2rem",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Back to Start
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="testing-interface" style={{ color: "white" }}>
      {/* Test Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          padding: "1rem 1.5rem",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              padding: "0.5rem 1rem",
              background: "rgba(240, 10, 4, 0.1)",
              color: "var(--primary)",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            Question {currentIndex + 1} of {TestMcqQuestions.length}
          </div>
        </div>
        <button
          onClick={handleFinish}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255, 255, 255, 0.6)",
            padding: "0.5rem 1rem",
            borderRadius: "10px",
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Finish Early
        </button>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: "100%",
          height: "6px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "3px",
          marginBottom: "3rem",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          style={{ height: "100%", background: "var(--primary)" }}
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "rgba(255,255,255,0.02)",
            padding: "2.5rem",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.05)",
            marginBottom: "2rem",
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              marginBottom: "2.5rem",
              lineHeight: "1.4",
              color: "white",
            }}
          >
            {currentQuestion?.question}
          </h2>

          <div style={{ display: "grid", gap: "1rem", flex: 1 }}>
            {Object.entries(currentQuestion?.options || {}).map(
              ([key, value]) => {
                const isSelected = userAnswers[currentIndex] === key;
                const hasAnswered = !!userAnswers[currentIndex];
                const isCorrect = key === currentQuestion.answer;
                const isWrong = isSelected && !isCorrect;

                let backgroundColor = "rgba(255,255,255,0.03)";
                let borderColor = "rgba(255,255,255,0.1)";
                let textColor = "white";

                if (hasAnswered) {
                  if (isCorrect) {
                    backgroundColor = "rgba(16, 185, 129, 0.1)";
                    borderColor = "#10B981";
                    textColor = "#10B981";
                  } else if (isWrong) {
                    backgroundColor = "rgba(240, 10, 4, 0.1)";
                    borderColor = "var(--primary)";
                    textColor = "var(--primary)";
                  }
                } else if (isSelected) {
                  backgroundColor = "rgba(240, 10, 4, 0.1)";
                  borderColor = "var(--primary)";
                  textColor = "var(--primary)";
                }

                return (
                  <button
                    key={key}
                    onClick={() => handleOptionSelect(key)}
                    disabled={hasAnswered}
                    style={{
                      padding: "1.2rem 1.5rem",
                      background: backgroundColor,
                      border: `2px solid ${borderColor}`,
                      borderRadius: "16px",
                      textAlign: "left",
                      color: textColor,
                      fontSize: "1.1rem",
                      fontWeight: isSelected || (hasAnswered && isCorrect) ? 700 : 500,
                      cursor: hasAnswered ? "default" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      transition: "all 0.2s ease",
                      opacity: hasAnswered && !isCorrect && !isSelected ? 0.5 : 1,
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "8px",
                        background: isCorrect && hasAnswered 
                          ? "#10B981" 
                          : (isSelected ? "var(--primary)" : "rgba(255,255,255,0.05)"),
                        color: (isSelected || (hasAnswered && isCorrect))
                          ? "white"
                          : "rgba(255, 255, 255, 0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.9rem",
                        fontWeight: 800,
                      }}
                    >
                      {key}
                    </div>
                    {value}
                    {hasAnswered && isCorrect && (
                      <CheckCircle2 size={20} style={{ marginLeft: 'auto' }} />
                    )}
                    {hasAnswered && isWrong && (
                      <AlertCircle size={20} style={{ marginLeft: 'auto' }} />
                    )}
                  </button>
                );
              },
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{
            padding: "1rem 2rem",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "white",
            borderRadius: "14px",
            fontWeight: 600,
            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            opacity: currentIndex === 0 ? 0.3 : 1,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <ChevronLeft size={20} /> Previous
        </button>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            style={{
              padding: "1rem",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "white",
              borderRadius: "14px",
              cursor: "pointer",
            }}
            title="Hint"
          >
            <HelpCircle size={20} />
          </button>

          <button
            onClick={handleNext}
            style={{
              padding: "1rem 3rem",
              background: "var(--primary)",
              color: "white",
              border: "none",
              borderRadius: "14px",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 8px 20px rgba(240, 10, 4, 0.3)",
            }}
          >
            {currentIndex === TestMcqQuestions.length - 1
              ? "Submit CA Test"
              : "Next Question"}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Explanation Hint Overlay */}
      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            background: "rgba(16, 185, 129, 0.05)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            borderRadius: "20px",
            color: "#10B981",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "0.5rem",
            }}
          >
            <CheckCircle2 size={18} />
            <span style={{ fontWeight: 700 }}>Explanation:</span>
          </div>
          <p style={{ fontSize: "0.95rem", opacity: 0.9 }}>
            {currentQuestion?.explanation ||
              "No explanation provided for this question."}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Test;
