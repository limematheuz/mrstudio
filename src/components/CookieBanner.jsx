import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
                Utilizamos cookies genéricas para mejorar su experiencia. Puede aceptar o rechazar su uso.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={handleReject} style={{
                    background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: 500
                }}>Rechazar</button>
                <button onClick={handleAccept} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    Aceptar
                </button>
            </div>
        </div>
    );
}
