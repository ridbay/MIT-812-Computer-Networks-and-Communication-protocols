import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Zap,
  Target,
  TriangleAlert,
  Home,
  ClipboardCheck,
  FileEdit,
} from "lucide-react";
import { useStore } from "./hooks/useStore";
import { QuizBank } from "./data/quizBank";

// Components
import Dashboard from "./components/Dashboard";
import Summaries from "./components/modules/Summaries";
import Flashcards from "./components/modules/Flashcards";
import QuizMode from "./components/modules/QuizMode";
import Revision from "./components/modules/Revision";
import Test from "./components/modules/Test";
import Assignment from "./components/modules/Assignment";

const App: React.FC = () => {
  const { data, progress, toggleBookmark, markFlashcard, saveQuizScore } =
    useStore();
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [isDarkMode] = useState<boolean>(true);

  const renderContent = () => {
    if (!data)
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "white"
          }}
        >
          Loading Study Packet...
        </div>
      );

    switch (activeTab) {
      case "dashboard":
        return (
          <Dashboard
            progress={progress}
            data={data}
            onNavigate={setActiveTab}
          />
        );
      case "summaries":
        return (
          <Summaries
            data={data}
            progress={progress}
            onToggleBookmark={toggleBookmark}
          />
        );
      case "flashcards":
        return <Flashcards data={data} onMark={markFlashcard} />;
      case "quiz":
        return <QuizMode data={{...data, mcqs: QuizBank}} onSaveScore={saveQuizScore} />;
      case "revision":
        return <Revision data={data} />;
      case "test":
        return <Test />;
      case "assignment":
        return <Assignment />;
      default:
        return (
          <Dashboard
            progress={progress}
            data={data}
            onNavigate={setActiveTab}
          />
        );
    }
  };

  const navItems = [
    { id: "dashboard", label: "Home", icon: <Home size={20} /> },
    { id: "summaries", label: "Guide", icon: <BookOpen size={20} /> },
    { id: "flashcards", label: "Cards", icon: <Zap size={20} /> },
    { id: "quiz", label: "Quiz", icon: <Target size={20} /> },
    { id: "test", label: "Test", icon: <ClipboardCheck size={20} /> },
    { id: "assignment", label: "Assignment", icon: <FileEdit size={20} /> },
  ];

  return (
    <div
      className={`app-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
      style={{ minHeight: "100vh", paddingBottom: "100px" }}
    >
      {/* Top Header */}
      <header
        style={{
          padding: "1.5rem 10%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(240, 10, 4, 0.8)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderBottom: "1px solid var(--surface-border)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
          }}
          onClick={() => setActiveTab("dashboard")}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "var(--primary)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LayoutDashboard size={20} color="white" />
          </div>
          <h1
            style={{
              fontSize: "1.4rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "white"
            }}
          >
            MIT812{" "}
            <span style={{ opacity: 0.6, fontWeight: 400 }}>by RIDBAY</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{ padding: "3rem 10%", maxWidth: "1400px", margin: "0 auto" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation (Mobile Friendly) */}
      <nav
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "0.8rem",
          borderRadius: "24px",
          display: "flex",
          gap: "0.5rem",
          zIndex: 1000,
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              padding: "0.8rem 1.5rem",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background:
                activeTab === item.id ? "var(--primary)" : "transparent",
              color: activeTab === item.id ? "white" : "rgba(255, 255, 255, 0.6)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              fontWeight: 600,
              border: "none",
              cursor: "pointer"
            }}
          >
            {item.icon}
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-label { display: none; }
          main { padding: 2rem 5%; }
          header { padding: 1rem 5%; }
        }
      `}</style>
    </div>
  );
};

export default App;
