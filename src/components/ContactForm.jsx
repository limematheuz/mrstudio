import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '../services/contactService';

export default function ContactForm({ defaultService = '' }) {
    const [status, setStatus] = useState('idle');
    const [consent, setConsent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!consent) return;

        setStatus('sending');

        const form = e.target;

        const params = {
            from_name: form.name.value,
            user_email: form.email.value,
            service: form.service.value,
            message: form.message.value
        };

        const result = await submitContactForm(params);

        if (result.success) {
            setStatus('success');
            form.reset();
            setConsent(false);
        } else {
            console.error(result.error);
            setStatus('error');
        }
    };

    return (
        <div id="contacto" className="contact-section">
            <div className="contact-hero">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
                >
                    Hablemos de tu <span style={{ color: 'var(--accent-color)' }}>proyecto</span>.
                </motion.h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left' }}>
                        <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '0.8rem', borderRadius: '50%', color: 'var(--accent-color)', flexShrink: 0 }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>Contacto Directo</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Escríbenos y cuéntanos tu objetivo. Te responderemos con la mejor estrategia en menos de 24 horas laborables.</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left' }}>
                        <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '0.8rem', borderRadius: '50%', color: 'var(--accent-color)', flexShrink: 0 }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>Desarrollo Ágil</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Nos organizamos para que tu proyecto avance de forma fluida y sin complicaciones.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-form-container">
                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', damping: 15 }}
                        style={{ textAlign: 'center', padding: '3rem 2rem' }}
                    >
                        {/* Animated check circle */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', damping: 10, delay: 0.1 }}
                            style={{
                                width: '90px', height: '90px', borderRadius: '50%',
                                background: 'linear-gradient(135deg, #8b5cf6, #633af0)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 1.5rem auto',
                                boxShadow: '0 15px 40px rgba(139, 92, 246, 0.3)'
                            }}
                        >
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </motion.div>

                        <h3 style={{ fontSize: '2rem', marginBottom: '0.8rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                            ¡Tu mensaje está en camino! 🚀
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                            Hemos enviado una <strong>confirmación a tu correo</strong>.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Te responderemos en menos de <strong>24 horas laborables</strong>. Si no ves el email, revisa tu carpeta de spam.
                        </p>

                        <button
                            onClick={() => setStatus('idle')}
                            className="btn-primary"
                            style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
                        >
                            Enviar otra solicitud
                        </button>
                    </motion.div>
                ) : (
                    <>
                        <div className="mobile-only-intro" style={{ marginBottom: '2rem' }}>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                Respondo en menos de 24h
                            </p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                Proceso sencillo y paso a paso
                            </p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                Orientación en cada etapa
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>

                            <div>
                                <label style={labelStyle}>Nombre Completo</label>
                                <input type="text" name="name" required style={inputStyle} placeholder="Ej. Juan Pérez" />
                            </div>

                            <div>
                                <label style={labelStyle}>Email Profesional</label>
                                <input type="email" name="email" required style={inputStyle} placeholder="tu@email.com" />
                            </div>

                            <div>
                                <label style={labelStyle}>¿En qué servicio estás interesado?</label>
                                <select name="service" defaultValue={defaultService} style={inputStyle} required>
                                    <option value="" disabled>Selecciona un servicio</option>
                                    <option value="Web Minimalista (1 Página)">Web Minimalista (1 Página)</option>
                                    <option value="Web Standard (Hasta 3 Páginas)">Web Standard (Hasta 3 Páginas)</option>
                                    <option value="Web Premium (Hasta 5 Páginas)">Web Premium (Hasta 5 Páginas)</option>
                                    <option value="Tienda Online (E-commerce)">Tienda Online (E-commerce)</option>
                                    <option value="Servicios Adicionales (SEO/Mantenimiento)">Servicios Adicionales (SEO/Mantenimiento)</option>
                                    <option value="Otro Proyecto a Medida">Otro Proyecto a Medida</option>
                                </select>
                            </div>

                            <div>
                                <label style={labelStyle}>Detalles del Proyecto</label>
                                <textarea name="message" rows="4" required style={{ ...inputStyle, resize: 'vertical' }} placeholder="Cuéntame un poco más sobre lo que tienes en mente..."></textarea>
                            </div>

                            {/* RGPD Consent */}
                            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                <input
                                    type="checkbox"
                                    checked={consent}
                                    onChange={(e) => setConsent(e.target.checked)}
                                    required
                                    style={{ marginTop: '3px', accentColor: 'var(--accent-color)', width: '18px', height: '18px', flexShrink: 0 }}
                                />
                                <span>
                                    Acepto que MRStudio almacene mis datos con el único fin de responder a mi consulta, conforme a la <a href="/politica-de-privacidad" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>Política de Privacidad</a>.
                                </span>
                            </label>

                            <button
                                type="submit"
                                className="btn-primary"
                                disabled={status === 'sending' || !consent}
                                style={{
                                    marginTop: '0.5rem', width: '100%', padding: '1.2rem', fontSize: '1.1rem',
                                    opacity: !consent ? 0.5 : 1,
                                    cursor: !consent ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {status === 'sending' ? 'Enviando...' : 'Pedir presupuesto'}
                            </button>

                            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#888', marginTop: '0.5rem' }}>
                                🔒 Sin compromiso. Respondemos en menos de 24 horas.
                            </p>

                            {status === 'error' && (
                                <p style={{ color: '#ef4444', marginTop: '0.5rem', textAlign: 'center', fontSize: '0.9rem', background: 'rgba(239,68,68,0.05)', padding: '1rem', borderRadius: '10px' }}>
                                    Hubo un error al enviar. Por favor intenta de nuevo en unos minutos.
                                </p>
                            )}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

const labelStyle = { display: 'block', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.95rem' };
const inputStyle = {
    width: '100%',
    padding: '1.1rem',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#f8fafc',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s, background-color 0.3s'
};
