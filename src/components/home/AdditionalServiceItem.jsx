import { useState } from 'react';

export default function AdditionalServiceItem({ title, content, icon }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div
            className={`add-service-item ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsOpen(!isOpen) } }}
        >
            <div className="add-service-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', width: 'calc(100% - 3rem)' }}>
                    {icon && <div style={{ color: isOpen ? 'var(--accent-color)' : 'var(--text-secondary)', transition: 'color 0.3s', flexShrink: 0 }}>{icon}</div>}
                    <span style={{ fontWeight: 800, fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', color: isOpen ? 'var(--accent-color)' : 'var(--text-primary)', transition: 'color 0.3s', lineHeight: 1.2 }}>{title}</span>
                </div>
                <div className="add-service-icon" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
                </div>
            </div>
            <div className={`add-service-content ${isOpen ? 'open' : ''}`}>
                <div style={{ paddingBottom: '0.5rem' }}>{content}</div>
            </div>
        </div>
    );
}
