import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CookieBanner.css';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    // Cookie preference states
    const [prefs, setPrefs] = useState({
        analytics: true,
        marketing: false
    });

    useEffect(() => {
        // Check if user has already set preferences
        const consent = localStorage.getItem('mrstudio_cookie_consent');
        if (!consent) {
            // Slight delay so it doesn't instantly block the user on page load
            const timer = setTimeout(() => setShowBanner(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const saveConsent = (preferences) => {
        // Save to local storage
        localStorage.setItem('mrstudio_cookie_consent', JSON.stringify({
            essential: true, // always true
            ...preferences,
            timestamp: new Date().toISOString()
        }));
        
        // Hide UI
        setShowBanner(false);
        setShowModal(false);

        // Here you would typically trigger GTM or analytics scripts
        // if (preferences.analytics) { loadAnalytics(); }
    };

    const handleAcceptAll = () => saveConsent({ analytics: true, marketing: true });
    const handleRejectAll = () => saveConsent({ analytics: false, marketing: false });
    const handleSavePreferences = () => saveConsent(prefs);

    return (
        <>
            {/* ── First Layer Banner ── */}
            <AnimatePresence>
                {showBanner && !showModal && (
                    <motion.div
                        className="cookie-banner-container"
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 150, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                    >
                        <div className="cookie-banner-content">
                            <div className="cookie-banner-text">
                                <span className="cookie-icon">🍪</span>
                                <div>
                                    <h4 className="cookie-title">Alerta de galletas (sin chispas de chocolate)</h4>
                                    <p className="cookie-desc">
                                        Usamos cookies para saber si alguien nos lee, mejorar la web y no enviarte publicidad aburrida. 
                                        Son 100% libres de calorías. ¿Nos dejas usarlas?
                                    </p>
                                </div>
                            </div>
                            <div className="cookie-actions">
                                <button onClick={() => setShowModal(true)} className="cookie-btn-ghost">
                                    Personalizar
                                </button>
                                <button onClick={handleRejectAll} className="cookie-btn-outline">
                                    Solo esenciales
                                </button>
                                <button onClick={handleAcceptAll} className="cookie-btn-primary">
                                    ¡Venga, acepto!
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Second Layer Modal (Preferences) ── */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="cookie-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="cookie-modal"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                        >
                            <div className="cookie-modal-header">
                                <h3>Configuración de Cookies</h3>
                                <button className="cookie-modal-close" onClick={() => setShowModal(false)} aria-label="Cerrar">✕</button>
                            </div>
                            
                            <div className="cookie-modal-body">
                                <p className="cookie-modal-intro">
                                    Controla tu privacidad. La única cookie que no puedes apagar es la esencial (básicamente porque si la apagas, la web se rompe).
                                </p>

                                {/* Essential (Always ON) */}
                                <div className="cookie-switch-group always-on">
                                    <div className="cookie-switch-info">
                                        <h4>Estrictamente Necesarias</h4>
                                        <p>Para que la web no explote y para guardar qué cookies has aceptado.</p>
                                    </div>
                                    <div className="cookie-switch-toggle">
                                        <div className="toggle-track active disabled">
                                            <div className="toggle-knob active"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Analytics */}
                                <div className="cookie-switch-group">
                                    <div className="cookie-switch-info">
                                        <h4>Analíticas</h4>
                                        <p>Para contar cuánta gente entra y ver qué páginas gustan más (100% anónimo).</p>
                                    </div>
                                    <button 
                                        className="cookie-switch-btn"
                                        onClick={() => setPrefs({...prefs, analytics: !prefs.analytics})}
                                        aria-pressed={prefs.analytics}
                                        aria-label="Alternar cookies analíticas"
                                    >
                                        <div className={`toggle-track ${prefs.analytics ? 'active' : ''}`}>
                                            <div className={`toggle-knob ${prefs.analytics ? 'active' : ''}`}></div>
                                        </div>
                                    </button>
                                </div>

                                {/* Marketing */}
                                <div className="cookie-switch-group">
                                    <div className="cookie-switch-info">
                                        <h4>Marketing</h4>
                                        <p>Para enseñarte anuncios nuestros por ahí (con la intención de aportar valor, lo prometemos).</p>
                                    </div>
                                    <button 
                                        className="cookie-switch-btn"
                                        onClick={() => setPrefs({...prefs, marketing: !prefs.marketing})}
                                        aria-pressed={prefs.marketing}
                                        aria-label="Alternar cookies de marketing"
                                    >
                                        <div className={`toggle-track ${prefs.marketing ? 'active' : ''}`}>
                                            <div className={`toggle-knob ${prefs.marketing ? 'active' : ''}`}></div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="cookie-modal-footer">
                                <button onClick={handleSavePreferences} className="cookie-btn-primary w-full">
                                    Guardar Preferencias
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
