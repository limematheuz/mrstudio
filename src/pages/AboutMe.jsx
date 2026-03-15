import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Drop your portrait photo at: src/assets/matheus-portrait.jpg
const portraitPhoto = '/src/assets/matheus-portrait.jpg';

export default function AboutMe() {
    return (
        <div className="aboutme-page">

            {/* ── Full-screen portrait background ────────────────────── */}
            <div className="aboutme-bg-wrapper">
                <img
                    src={portraitPhoto}
                    alt=""
                    aria-hidden="true"
                    className="aboutme-bg-img"
                />
                {/* Grayscale + brand-gradient overlay */}
                <div className="aboutme-bg-overlay" />
                {/* Side masks */}
                <div className="aboutme-mask-left" />
                <div className="aboutme-mask-right" />
            </div>

            {/* ── Page content (z-indexed above bg) ──────────────────── */}
            <section className="aboutme-content section" style={{ paddingTop: '10rem', paddingBottom: '6rem', position: 'relative', zIndex: 2 }}>
                <div className="container">
                    <div className="about-grid">

                        {/* Empty left column – portrait is the background */}
                        <div className="about-image-col" />

                        {/* Copy */}
                        <motion.div
                            className="about-text-col"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="about-heading">
                                Diseño webs pensadas para que tus{' '}
                                <span style={{ color: 'var(--accent-color)' }}>
                                    visitantes se conviertan en clientes.
                                </span>
                            </h1>

                            <p className="about-para">
                                <strong>Soy Matheus, creador de MRStudio.</strong><br /><br />
                                Trabajo con profesionales y negocios que buscan más que una web bonita: necesitan un lugar digital que genere confianza, facilite el contacto y les represente de verdad.
                            </p>

                            <p className="about-para">
                                En un mundo donde la primera impresión suele ser digital, una web bien diseñada puede marcar la diferencia entre un visitante que se va… o un cliente que contacta.
                            </p>

                            <h3 className="about-subheading">Mi enfoque</h3>
                            <p className="about-para">
                                Mi enfoque va más allá del diseño visual.<br />
                                Diseño una estructura clara, entendiendo tu negocio y guiando amablemente a los visitantes hacia el contacto o la reserva.
                            </p>

                            <ul className="about-list">
                                <li><span>•</span> Transmitir confianza desde el primer segundo</li>
                                <li><span>•</span> Explicar claramente los servicios del negocio</li>
                                <li><span>•</span> Facilitar que tus visitas se conviertan en oportunidades reales</li>
                            </ul>

                            <h3 className="about-subheading">Cómo trabajo</h3>
                            <p className="about-para">
                                Mantengo los procesos sencillos, ágiles y efectivos.<br />
                                Quienes confían en mí valoran especialmente:
                            </p>

                            <ul className="about-list">
                                <li><span>•</span> Comunicación directa</li>
                                <li><span>•</span> Procesos claros</li>
                                <li><span>•</span> Entregas rápidas</li>
                                <li><span>•</span> Webs que realmente representan su negocio</li>
                            </ul>

                            <div className="about-quote-box">
                                <p>
                                    Si estás buscando una web profesional que represente bien tu negocio y te ayude a captar nuevos clientes, estaré encantado de ayudarte.<br /><br />
                                    Tu web puede ser mucho más que una tarjeta de presentación. Puede convertirse en una herramienta real para crecer.
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                                <Link to="/#servicios" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                    Ver mis servicios
                                </Link>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <style>{`
                /* ── Background portrait ────────────────────────── */
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
                    filter: grayscale(100%) contrast(1.05) brightness(0.85);
                }

                /* Brand gradient overlay: white→transparent→purple tint */
                .aboutme-bg-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(255, 255, 255, 0.92) 0%,
                        rgba(255, 255, 255, 0.70) 30%,
                        rgba(139, 92, 246, 0.25) 70%,
                        rgba(99, 58, 240, 0.55) 100%
                    );
                }

                /* Side masks: fade edges to white */
                .aboutme-mask-left {
                    position: absolute;
                    top: 0; left: 0; bottom: 0;
                    width: 18%;
                    background: linear-gradient(to right, rgba(255,255,255,0.98), transparent);
                }

                .aboutme-mask-right {
                    position: absolute;
                    top: 0; right: 0; bottom: 0;
                    width: 18%;
                    background: linear-gradient(to left, rgba(99,58,240,0.6), transparent);
                }

                /* ── Layout ─────────────────────────────────────── */
                .aboutme-page {
                    min-height: 100vh;
                    position: relative;
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 0.8fr 1.2fr;
                    gap: 5rem;
                    align-items: flex-start;
                }

                /* ── Text styles ─────────────────────────────────── */
                .about-text-col {
                    background: rgba(255, 255, 255, 0.82);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border-radius: 24px;
                    padding: 3rem;
                    border: 1px solid rgba(255,255,255,0.6);
                    box-shadow: 0 20px 60px rgba(99, 58, 240, 0.10);
                }

                .about-heading {
                    font-size: 2.8rem;
                    font-weight: 800;
                    margin-bottom: 2rem;
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                    color: var(--text-primary);
                }

                .about-subheading {
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: var(--text-primary);
                }

                .about-para {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    line-height: 1.75;
                }

                .about-list {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.7rem;
                }

                .about-list li {
                    font-size: 1.05rem;
                    color: var(--text-secondary);
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                }

                .about-list li span {
                    color: var(--accent-color);
                    font-weight: bold;
                }

                .about-quote-box {
                    background: rgba(139, 92, 246, 0.07);
                    padding: 1.8rem;
                    border-radius: 14px;
                    border-left: 4px solid var(--accent-color);
                }

                .about-quote-box p {
                    font-size: 1.1rem;
                    color: var(--text-primary);
                    font-style: italic;
                    margin: 0;
                    line-height: 1.75;
                }

                /* ── Mobile ──────────────────────────────────────── */
                @media (max-width: 968px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 0;
                    }

                    .about-image-col {
                        display: none;
                    }

                    .about-text-col {
                        padding: 2rem 1.5rem;
                        border-radius: 18px;
                        background: rgba(255, 255, 255, 0.88);
                    }

                    .about-heading {
                        font-size: 2rem;
                    }

                    .aboutme-mask-left,
                    .aboutme-mask-right {
                        width: 10%;
                    }

                    .aboutme-bg-wrapper {
                        position: fixed;
                    }
                }
            `}</style>
        </div>
    );
}
