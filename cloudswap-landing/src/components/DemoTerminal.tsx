import React, { useState, useEffect } from 'react';

const baseLines = [
  "[INFO] Initializing CloudSwap Engine...",
  "[INFO] Scanning workspace for legacy Firebase components...",
  "[SUCCESS] Found functions/index.js and firebase.json",
  "[ACTION] Refactoring @google-cloud/firestore -> pg",
  "[ACTION] Spinning up QA Shadow Mock Server on port 5001 & 8080...",
  "[TEST] Validating Endpoint /getUserDetails",
  "[SUCCESS] 100% API Parity Verified. JSON structures match exactly.",
  "[INFO] Generating Terraform and Docker configurations...",
  "[SUCCESS] Workspace ready for GCP Deployment."
];

const DemoTerminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let currentLine = 0;
    let isActive = true;
    
    const interval = setInterval(() => {
      if (!isActive) return;
      if (currentLine < baseLines.length) {
        const nextLine = baseLines[currentLine];
        setLines(prev => [...prev, nextLine]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    
    return () => {
      isActive = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 700, textAlign: 'center' }}>
            Watch it <span className="text-gradient">Work</span>
         </h2>
         
         <div className="glass-panel" style={{ 
            width: '100%', 
            maxWidth: '800px', 
            background: '#0d1117', 
            border: '1px solid #30363d',
            borderRadius: '12px',
            overflow: 'hidden'
         }}>
            <div style={{ 
              background: '#161b22', 
              padding: '0.75rem 1rem', 
              display: 'flex', 
              gap: '8px',
              borderBottom: '1px solid #30363d'
            }}>
               <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
               <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
               <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
               <div style={{ marginLeft: '1rem', color: '#8b949e', fontSize: '0.85rem', fontFamily: 'monospace' }}>
                 bash - cloudswap-engine
               </div>
            </div>
            
            <div className="demo-terminal" style={{ padding: '2rem', fontFamily: 'monospace', minHeight: '350px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
               <div style={{ color: '#58a6ff' }}>$ /cloudswap</div>
               
               {lines.map((line, idx) => {
                 if (!line) return null;
                 let color = '#c9d1d9';
                 if (line.includes('[SUCCESS]')) color = '#3fb950';
                 else if (line.includes('[INFO]')) color = '#8b949e';
                 else if (line.includes('[ACTION]')) color = '#d2a8ff';
                 else if (line.includes('[TEST]')) color = '#ff7b72';
                 
                 return (
                   <div key={idx} style={{ color, animation: 'fade-in-up 0.3s ease-out' }}>
                     {line}
                   </div>
                 );
               })}
               
               {lines.length < baseLines.length && (
                 <div style={{ color: '#c9d1d9', display: 'flex', alignItems: 'center' }}>
                   <span style={{ animation: 'blink-caret 1s step-end infinite', borderRight: '8px solid #58a6ff', height: '16px', display: 'inline-block' }}></span>
                 </div>
               )}
            </div>
         </div>
      </div>
    </section>
  );
};

export default DemoTerminal;
