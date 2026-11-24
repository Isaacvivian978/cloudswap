import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the QA Shadow validation work?",
    answer: "The QA Shadow spins up two local mock servers—one simulating the legacy Firebase emulator and one running the generated Cloud Run container. It sends identical GET requests to both and strictly verifies the JSON structures match byte-for-byte to guarantee API Parity."
  },
  {
    question: "Do I need to rewrite my NoSQL rules?",
    answer: "No. CloudSwap autonomously maps your Firestore queries and transpiles them natively to PostgreSQL logic, ensuring you maintain data structural equivalence without needing manual schema translations."
  },
  {
    question: "Is the generated infrastructure ready for production?",
    answer: "Yes. Every migration generates enterprise-grade Dockerfiles and Terraform configurations adhering strictly to the Google Cloud provider specifications, ready to be pushed to your CI/CD pipeline immediately."
  }
];

const PricingFAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section id="pricing" style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Pricing Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
            Enterprise Migration, <span className="text-gradient">Simplified</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Whether you are a solo developer migrating a side project or an enterprise replatforming your backend fleet.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '6rem' }}>
          
          <div className="glass-panel" style={{ padding: '3rem 2rem', flex: '1 1 300px', maxWidth: '400px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Developer</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '48px' }}>For single repositories and local IDE testing.</p>
            <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
              Free <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>forever</span>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-blue)" /> Local IDE execution</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-blue)" /> Single Repository Auto-Select</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-blue)" /> Community Rules Extension</li>
            </ul>
            
            <button className="btn btn-secondary" style={{ width: '100%' }}>Copy npx command</button>
          </div>

          <div className="glass-panel" style={{ padding: '3rem 2rem', flex: '1 1 300px', maxWidth: '400px', border: '1px solid var(--accent-purple)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))', padding: '4px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>RECOMMENDED</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Enterprise Fleet</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '48px' }}>Automated fleet structural migrations and continuous parity assurance.</p>
            <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
              Custom <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>quoting</span>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-pink)" /> Multi-repository CI/CD hooking</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-pink)" /> Managed DB Schema Transitions</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Check size={20} color="var(--accent-pink)" /> Dedicated Edge Validations</li>
            </ul>
            
            <button className="btn btn-primary" style={{ width: '100%' }}>Contact Sales</button>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFAQ === idx;
              return (
                <div 
                  key={idx} 
                  className="glass-panel" 
                  style={{ padding: '1.5rem', cursor: 'pointer', transition: 'all 0.3s' }}
                  onClick={() => setOpenFAQ(isOpen ? null : idx)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{faq.question}</h4>
                    {isOpen ? <ChevronUp size={20} color="var(--accent-blue)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                  </div>
                  {isOpen && (
                    <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, animation: 'fade-in-up 0.2s ease-out' }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingFAQ;
