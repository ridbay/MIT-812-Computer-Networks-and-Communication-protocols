import React from 'react';
import { Clock } from 'lucide-react';
import { StudyData } from '../../types';

interface RevisionProps {
  data: StudyData;
}

const Revision: React.FC<RevisionProps> = ({ data }) => {
  return (
    <div className="revision" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ display: 'inline-flex', padding: '10px 20px', background: 'rgba(240, 10, 4, 0.1)', borderRadius: '30px', color: 'var(--primary)', fontWeight: 700, gap: '10px', alignItems: 'center', marginBottom: '1.5rem' }}>
          <Clock size={18} /> Last-Minute Prep
        </div>
        <h1 style={{ fontSize: '3rem', color: "white" }}>Ultra-Condensed <span className="premium-gradient-text">Revision</span></h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>High-yield concepts for final review before the exam.</p>
      </header>

      <div className="glass-card" style={{ padding: '3rem', background: "rgba(255, 255, 255, 0.05)", borderRadius: "24px" }}>
        {data?.revisionSheet?.length > 0 ? (
          (() => {
            const formatBold = (text: string) => {
              const parts = text.split(/(\*\*.*?\*\*)/g);
              return parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={i} style={{ color: 'white', fontWeight: 800 }}>{part.slice(2, -2)}</strong>;
                }
                return part;
              });
            };

            return data.revisionSheet.map((line, i) => {
              if (line.startsWith('##')) return <h2 key={i} style={{ color: 'var(--primary)', margin: '3rem 0 1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5rem' }}>{line.replace('##', '').trim()}</h2>;
              if (line.startsWith('-')) {
                const parts = line.split('=');
                if (parts.length > 1) {
                  return (
                    <div key={i} style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                      <div style={{ fontWeight: 700, minWidth: '150px', color: 'white' }}>{parts[0].replace('-', '').trim()}</div>
                      <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{formatBold(parts[1].trim())}</div>
                    </div>
                  );
                }
                return <li key={i} style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.7)', listStyleType: 'disc' }}>{formatBold(line.replace('-', '').trim())}</li>;
              }
              if (line.startsWith('###')) return <h3 key={i} style={{ margin: '2rem 0 1rem', fontSize: '1.3rem', color: "white" }}>{line.replace('###', '').trim()}</h3>;
              return line.trim() ? <p key={i} style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>{formatBold(line)}</p> : null;
            });
          })()
        ) : <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No revision notes available yet.</p>}
      </div>
    </div>
  );
};

export default Revision;
