import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bookmark, ChevronDown, ChevronUp } from 'lucide-react';
import { StudyData, Progress } from '../../types';

interface SummariesProps {
  data: StudyData;
  progress: Progress;
  onToggleBookmark: (title: string) => void;
}

const Summaries: React.FC<SummariesProps> = ({ data, progress, onToggleBookmark }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const formatBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} style={{ color: 'white', fontWeight: 800 }}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const filteredSummaries = data?.summaries?.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.content.some(l => l.toLowerCase().includes(searchTerm.toLowerCase()))
  ) || [];

  const toggleExpand = (title: string) => {
    setExpanded(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="summaries">
      <div style={{ marginBottom: '3rem', position: 'relative' }}>
        <input 
          type="text" 
          placeholder="Search study guide..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="glass-card"
          style={{ 
            width: '100%', 
            padding: '1.2rem 1.2rem 1.2rem 3.5rem', 
            fontSize: '1.1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            outline: 'none',
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            color: "white"
          }}
        />
        <Search style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5, color: "white" }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {filteredSummaries.map((summary, i) => (
          <div key={i} className="glass-card" style={{ padding: '0', overflow: 'hidden', background: "rgba(255, 255, 255, 0.03)", borderRadius: "16px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <div 
              style={{ 
                padding: '1.5rem', 
                cursor: 'pointer', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                background: expanded[summary.title] ? 'rgba(255,255,255,0.03)' : 'transparent',
                color: "white"
              }}
              onClick={() => toggleExpand(summary.title)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem' }}>{summary.title}</h3>
                {progress.bookmarks.includes(summary.title) && (
                  <Bookmark size={18} color="var(--primary)" fill="var(--primary)" />
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark(summary.title);
                  }}
                  style={{ opacity: 0.6, background: "none", border: "none", cursor: "pointer", color: "white" }}
                >
                  <Bookmark size={20} fill={progress.bookmarks.includes(summary.title) ? "var(--primary)" : "none"} />
                </button>
                {expanded[summary.title] ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>

            <AnimatePresence>
              {expanded[summary.title] && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 2rem 2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    {(() => {
                      let inCodeBlock = false;
                      let currentCodeLines: string[] = [];
                      const renderedLines: React.ReactNode[] = [];

                      summary.content.forEach((line, idx) => {
                        const trimmedLine = line.trim();

                        if (trimmedLine.startsWith('```')) {
                          if (inCodeBlock) {
                            // Close code block
                            renderedLines.push(
                              <pre key={`code-${idx}`} style={{ 
                                background: 'rgba(0,0,0,0.4)', 
                                padding: '1.5rem', 
                                borderRadius: '12px', 
                                fontFamily: '"Fira Code", "Courier New", monospace', 
                                fontSize: '0.85rem',
                                overflowX: 'auto',
                                margin: '1rem 0',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#a5d6ff',
                                lineHeight: '1.4'
                              }}>
                                {currentCodeLines.join('\n')}
                              </pre>
                            );
                            currentCodeLines = [];
                          }
                          inCodeBlock = !inCodeBlock;
                          return;
                        }

                        if (inCodeBlock) {
                          currentCodeLines.push(line);
                          return;
                        }

                        // Handle Headers
                        if (line.startsWith('###')) {
                          renderedLines.push(
                            <h4 key={idx} style={{ color: 'white', margin: '1.5rem 0 0.5rem', borderLeft: '4px solid var(--primary)', paddingLeft: '1rem' }}>
                              {line.replace('###', '').trim()}
                            </h4>
                          );
                          return;
                        }

                        // Handle Lists
                        if (line.startsWith('- ')) {
                          renderedLines.push(
                            <li key={idx} style={{ marginLeft: '1.5rem', marginBottom: '0.5rem', listStyleType: 'disc' }}>
                              {formatBold(line.replace('- ', ''))}
                            </li>
                          );
                          return;
                        }

                        // Default Paragraph
                        if (line.trim()) {
                          renderedLines.push(
                            <p key={idx} style={{ marginBottom: '0.8rem', lineHeight: '1.6' }}>
                              {formatBold(line)}
                            </p>
                          );
                        }
                      });

                      return renderedLines;
                    })()}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summaries;
