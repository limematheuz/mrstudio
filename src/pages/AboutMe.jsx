import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutMe() {
    return (
        <div className="aboutme-page">
            <section className="section" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div className="about-grid">

                        {/* Imagén y Tarjeta */}
                        <motion.div
                            className="about-image-col"
                            style={{ position: 'sticky', top: '120px' }}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="about-img-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=800"
                                    alt="Matheus Ribeiro"
                                    className="about-img"
                                />
                                <div className="about-badge">
                                    <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-color)' }}>+5</span>
                                    <span style={{ fontSize: '0.9rem', lineHeight: 1.2, fontWeight: 500 }}>Años de<br />Experiencia</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Copy persuasivo exacto */}
                        <motion.div
                            className="about-text-col"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text-primary)' }}>
                                Diseño webs pensadas para que tus <span style={{ color: 'var(--accent-color)' }}>visitantes se conviertan en clientes.</span>
                            </h1>

                            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                <strong>Soy Matheus, creador de MRStudio.</strong><br /><br />
                                Trabajo con profesionales y negocios que buscan más que una web bonita: necesitan un lugar digital que genere confianza, facilite el contacto y les represente de verdad.
                            </p>

                            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                                En un mundo donde la primera impresión suele ser digital, una web bien diseñada puede marcar la diferencia entre un visitante que se va… o un cliente que contacta.
                            </p>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Mi enfoque</h3>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                Mi enfoque va más allá del diseño visual.<br />Diseño una estructura clara, entendiendo tu negocio y guiando amablemente a los visitantes hacia el contacto o la reserva.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span> Transmitir confianza desde el primer segundo
                                </li>
                                <li style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span> Explicar claramente los servicios del negocio
                                </li>
                                <li style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span> Facilitar que tus visitas se conviertan en oportunidades reales
                                </li>
                            </ul>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Cómo trabajo</h3>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                Mantengo los procesos sencillos, ágiles y efectivos.<br />Quienes confían en mí valoran especialmente:
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span> comunicación directa
                                </li>
                                <li style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span> procesos claros
                                </li>
                                <li style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span> entregas rápidas
                                </li>
                                <li style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>•</span> webs que realmente representan su negocio
                                </li>
                            </ul>

                            <div style={{ background: 'rgba(139, 92, 246, 0.05)', padding: '2rem', borderRadius: '15px', marginBottom: '2.5rem', borderLeft: '4px solid var(--accent-color)' }}>
                                <p style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontStyle: 'italic', margin: 0 }}>
                                    Si estás buscando una web profesional que represente bien tu negocio y te ayude a captar nuevos clientes, estaré encantado de ayudarte. <br /><br />Tu web puede ser mucho más que una tarjeta de presentación. Puede convertirse en una herramienta real para crecer.
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <Link to="/#servicios" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Ver mis servicios</Link>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <style>{`
                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 5rem;
                    align-items: flex-start;
                }
                
                .about-img-wrapper {
                    position: relative;
                }
                
                .about-img {
                    width: 100%;
                    height: auto;
                    border-radius: 20px;
                    object-fit: cover;
                    aspect-ratio: 4/5;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
                }
                
                .about-badge {
                    position: absolute;
                    bottom: -30px;
                    right: -30px;
                    background: white;
                    padding: 1.5rem;
                    border-radius: 20px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    border: 1px solid #eaeaea;
                }
                
                @media (max-width: 968px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .about-badge {
                        right: 10px;
                        bottom: -20px;
                    }
                }
            `}</style>
        </div>
    );
}
