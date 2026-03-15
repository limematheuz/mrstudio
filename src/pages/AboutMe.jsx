import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Drop your portrait photo at: src/assets/matheus-portrait.jpg
const portraitPhoto = '/src/assets/matheus-portrait.jpg';

export default function AboutMe() {
    return (
        <div className="aboutme-page">

            {/* ── Full-screen portrait background ── */}
            <div className="aboutme-bg-wrapper">
                <img src={portraitPhoto} alt="" aria-hidden="true" className="aboutme-bg-img" />
                <div className="aboutme-bg-overlay" />
                <div className="aboutme-mask-left" />
                <div className="aboutme-mask-right" />
            </div>

            {/* ── Content ── */}
            <div className="aboutme-content">
                <motion.div
                    className="aboutme-inner"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="about-heading">
                        Diseño webs pensadas para que tus{' '}
                        <span style={{ color: 'var(--accent-color)' }}>
                            visitantes se conviertan en clientes.
                        </span>
                    </h1>

                    <div className="about-cols">
                        <div className="about-col">
                            <p className="about-para">
                                <strong>Soy Matheus, creador de MRStudio.</strong><br /><br />
                                Trabajo con profesionales y negocios que buscan más que una web bonita: necesitan un lugar digital que genere confianza, facilite el contacto y les represente de verdad.
                            </p>
                            <p className="about-para">
                                En un mundo donde la primera impresión suele ser digital, una web bien diseñada puede marcar la diferencia entre un visitante que se va… o un cliente que contacta.
                            </p>

                            <h3 className="about-subheading">Mi enfoque</h3>
                            <ul className="about-list">
                                <li><span>→</span> Transmitir confianza desde el primer segundo</li>
                                <li><span>→</span> Explicar claramente los servicios del negocio</li>
                                <li><span>→</span> Convertir visitas en oportunidades reales</li>
                            </ul>
                        </div>

                        <div className="about-col">
                            <h3 className="about-subheading">Cómo trabajo</h3>
                            <ul className="about-list">
                                <li><span>→</span> Comunicación directa</li>
                                <li><span>→</span> Procesos claros</li>
                                <li><span>→</span> Entregas rápidas</li>
                                <li><span>→</span> Webs que realmente representan tu negocio</li>
                            </ul>

                            <div className="about-quote-box">
                                <p>
                                    Si estás buscando una web profesional que represente bien tu negocio, estaré encantado de ayudarte.<br /><br />
                                    Tu web puede ser mucho más que una tarjeta de presentación.
                                </p>
                            </div>

                            <Link to="/#servicios" className="btn-primary" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.9rem 2rem', fontSize: '1rem' }}>
                                Ver mis servicios
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                /* ── Background ─────────────────────────────────── */
                .aboutme-bg-wrapper {
                    position: fixed;
                    inset: 0;
                    z-index: 0;
                    pointer-events: none;
                }
                .aboutme-bg-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                    filter: grayscale(100%) contrast(1.05) brightness(0.8);
                }
                .aboutme-bg-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(255,255,255,0.94) 0%,
                        rgba(255,255,255,0.75) 35%,
                        rgba(139,92,246,0.22) 70%,
                        rgba(99,58,240,0.50) 100%
                    );
                }
                .aboutme-mask-left {
                    position: absolute;
                    top: 0; left: 0; bottom: 0;
                    width: 15%;
                    background: linear-gradient(to right, rgba(255,255,255,0.97), transparent);
                }
                .aboutme-mask-right {
                    position: absolute;
                    top: 0; right: 0; bottom: 0;
                    width: 15%;
                    background: linear-gradient(to left, rgba(99,58,240,0.55), transparent);
                }

                /* ── Layout ─────────────────────────────────────── */
                .aboutme-page {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                .aboutme-content {
                    position: relative;
                    z-index: 2;
                    flex: 1;
                    display: flex;
                    align-items: center;
                    padding: 8rem 5vw 4rem;
                    max-width: 100%;
                }

                .aboutme-inner {
                    width: 100%;
                }

                /* ── Heading ────────────────────────────────────── */
                .about-heading {
                    font-size: clamp(1.8rem, 3.5vw, 3rem);
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                    color: var(--text-primary);
                    margin-bottom: 2.5rem;
                    max-width: 860px;
                }

                /* ── Two-column content ─────────────────────────── */
                .about-cols {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                }

                .about-col {
                    background: rgba(255,255,255,0.78);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-radius: 18px;
                    padding: 2rem 2.5rem;
                    border: 1px solid rgba(255,255,255,0.6);
                }

                .about-subheading {
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-bottom: 0.8rem;
                    color: var(--text-primary);
                }

                .about-para {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin-bottom: 1.2rem;
                    line-height: 1.75;
                }

                .about-list {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.55rem;
                }
                .about-list li {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    display: flex;
                    align-items: center;
                    gap: 0.7rem;
                }
                .about-list li span {
                    color: var(--accent-color);
                    font-weight: 700;
                }

                .about-quote-box {
                    background: rgba(139,92,246,0.07);
                    padding: 1.4rem 1.6rem;
                    border-radius: 12px;
                    border-left: 4px solid var(--accent-color);
                    margin-top: 1rem;
                }
                .about-quote-box p {
                    font-size: 1rem;
                    color: var(--text-primary);
                    font-style: italic;
                    margin: 0;
                    line-height: 1.7;
                }

                /* ── Mobile ─────────────────────────────────────── */
                @media (max-width: 768px) {
                    .aboutme-content {
                        padding: 7rem 1.2rem 3rem;
                    }
                    .about-cols {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    .about-col {
                        padding: 1.5rem 1.2rem;
                    }
                    .aboutme-mask-left, .aboutme-mask-right {
                        width: 8%;
                    }
                }
            `}</style>
        </div>
    );
}
