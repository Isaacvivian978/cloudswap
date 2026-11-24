import React from 'react';
import { Layers, Bot, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <Bot size={24} color="var(--accent-blue)" />,
    title: "Autonomous Discovery",
    desc: "Automatically maps Firebase rules, functions, and config files across your entire repository."
  },
  {
    icon: <Zap size={24} color="var(--accent-purple)" />,
    title: "Intelligent Transpilation",
    desc: "Converts NoSQL Firestore queries into optimized PostgreSQL without manual rewrites."
  },
  {
    icon: <ShieldCheck size={24} color="var(--accent-pink)" />,
    title: "QA Shadow Validation",
    desc: "Guarantees 100% API Parity before deployment using built-in self-healing emulator checks."
  },
  {
    icon: <Layers size={24} color="var(--text-main)" />,
    title: "Terraform & Docker",
    desc: "Scaffolds standard enterprise-grade deployment files for direct translation to GCP."
  }
];

const FeaturesCarousel: React.FC = () => {
  return (
    <section className="features-section" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
             Engineered for <span className="text-gradient">Scale</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            A modular AI architecture built completely around code safety and zero-downtime structural migrations.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="glass-panel hover-card" 
              style={{ 
                padding: '2rem', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
              }}
            >
              <div style={{ 
                marginBottom: '1.5rem', 
                background: 'rgba(255,255,255,0.05)', 
                width: '50px', height: '50px', 
                borderRadius: '12px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center' 
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                 {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
