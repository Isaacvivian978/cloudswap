import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" style={{ padding: '6rem 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div style={{ maxWidth: '600px' }}>
          <h1 className="animate-fade-in delay-1" style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Migrate Firebase to Google Cloud. <span className="text-gradient">Autonomously.</span>
          </h1>
          <p className="animate-fade-in delay-2" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            The complete AI-driven engine that auto-discovers your legacy setup and transpiles it into modern Cloud Run & Cloud SQL infrastructure.
          </p>
          <div className="animate-fade-in delay-3 hero-buttons" style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-primary" onClick={() => scrollTo('demo')}>
              Run /cloudswap <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('features')}>
              <Terminal size={18} /> View Architecture
            </button>
          </div>
        </div>

        <div className="animate-fade-in delay-3" style={{ position: 'relative', animation: 'float 6s ease-in-out infinite' }}>
          <div className="glass-panel" style={{ padding: '2rem', position: 'relative', zIndex: 10, border: '1px solid var(--accent-purple)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Migration Pipeline Status</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 600 }}>100% Parity</span>
             </div>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--accent-pink)' }}>{`>`} Discovery.scan()</span>
                  <span style={{ color: 'var(--text-muted)' }}>[3 files found]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--accent-purple)' }}>{`>`} Transpiler.exec()</span>
                  <span style={{ color: 'var(--text-muted)' }}>[functions/ -{'>'} app.js]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--accent-blue)' }}>{`>`} QAShadow.verify()</span>
                  <span style={{ color: 'var(--text-muted)' }}>[Identical API Res]</span>
                </div>
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,255,0,0.1)', borderRadius: '8px', border: '1px solid rgba(0,255,0,0.2)' }}>
                  <span style={{ color: '#4ade80' }}>✓ Deployment ready.</span>
                </div>
             </div>
          </div>
          
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%', height: '120%',
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, transparent 60%)',
            filter: 'blur(40px)',
            zIndex: 1
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
