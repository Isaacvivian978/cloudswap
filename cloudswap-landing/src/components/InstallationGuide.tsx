import React, { useState } from 'react';
import { Terminal, Copy, CheckCircle } from 'lucide-react';

const InstallationGuide: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npx cloudswap-init@latest');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="installation" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
            Install in <span className="text-gradient">Seconds</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Bring the autonomous migration engine directly into your local Antigravity IDE workflow. No complex web dashboards, just raw engine power.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          
          <div className="glass-panel" style={{ 
            maxWidth: '650px', 
            width: '100%', 
            padding: '2.5rem', 
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '8px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}>
                <Terminal size={24} color="var(--accent-blue)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Inject Engine Skills</h3>
            </div>
            
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Run this single command in your target Firebase repository. It dynamically injects the `.agent` rules architecture enabling the `/cloudswap` and `/verify` autonomous skills.
            </p>

            <div className="install-command-box" style={{ 
              background: '#0d1117', 
              border: '1px solid #30363d', 
              borderRadius: '8px', 
              padding: '1rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'monospace',
              fontSize: '1rem',
              color: '#c9d1d9'
            }}>
              <span>
                <span style={{ color: 'var(--accent-pink)' }}>$</span> npx cloudswap-init@latest
              </span>
              <button 
                onClick={handleCopy}
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  color: copied ? '#3fb950' : '#8b949e', 
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                aria-label="Copy command"
              >
                {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
              </button>
            </div>
            
            <div className="install-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ color: 'var(--accent-purple)' }}>01.</div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', fontWeight: 600 }}>Initialize</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Command generates engine core securely into your local `.agent/` configuration.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ color: 'var(--accent-blue)' }}>02.</div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', fontWeight: 600 }}>Execute</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Use the IDE chat to type `/cloudswap` and let the structural migration begin.</p>
                </div>
              </div>
            </div>

            <div style={{
              position: 'absolute',
              top: '-50%', left: '-20%',
              width: '200px', height: '200px',
              background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
              filter: 'blur(30px)',
              zIndex: -1
            }} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;
