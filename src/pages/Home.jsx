import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';

// Models / Data
import { projectsData } from '../models/projectsData';
import { servicesPlans } from '../models/servicesData';

// Components
import ContactForm from '../components/ContactForm';
import ParticlesBackground from '../components/ParticlesBackground';
import HeroSection from '../components/home/HeroSection';
import ServiceCard from '../components/home/ServiceCard';
import AdditionalServiceItem from '../components/home/AdditionalServiceItem';
import ProjectGridCard from '../components/home/ProjectGridCard';
import TestimonialCard from '../components/home/TestimonialCard';
import MarqueeContent from '../components/home/MarqueeContent';

// Triggers
import { initHomeAnimations } from '../animations/homeAnimations';

export default function Home() {
    const [selectedProject, setSelectedProject] = useState(null);

    useGSAP(() => {
        initHomeAnimations();
    });

    return (
        <div className="home" style={{ position: 'relative' }}>
            <ParticlesBackground />
            
            <HeroSection />

            {/* Services Section */}
            <section id="servicios" className="section section-planes">
                <div className="container">
                    <div className="text-center mb-8">
                        <h2 className="section-title">Planes de Diseño Web</h2>
                        <p className="section-subtitle">Opciones diseñadas para ayudar a tu negocio a crecer en internet.</p>
                    </div>

                    <div className="services-container">
                        {servicesPlans.map((plan, idx) => (
                            <ServiceCard key={idx} {...plan} ctaText="Ver más detalles" />
                        ))}
                    </div>

                    {/* Trust Badges */}
                    <div className="trust-badges">
                        <div className="trust-badge">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            <span>Diseño Premium</span>
                        </div>
                        <div className="trust-badge">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            <span>Seguridad y Confianza</span>
                        </div>
                        <div className="trust-badge">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            <span>Navegación Fluida</span>
                        </div>
                        <div className="trust-badge">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <span>Soporte Cercano</span>
                        </div>
                    </div>

                    {/* Aditional Services */}
                    <div style={{ marginTop: '5rem' }}>
                        <div className="text-center mb-4">
                            <h3 className="section-title" style={{ fontSize: '2rem' }}>Escala tu proyecto</h3>
                            <p className="section-subtitle">Soluciones diseñadas para seguir sumando valor y crecimiento a tu negocio.</p>
                        </div>
                        <div className="add-service-grid">
                            <AdditionalServiceItem
                                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>}
                                title="Landing Pages promocionales"
                                content={
                                    <div style={{ padding: '0.5rem 0' }}>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Páginas específicas y atractivas para tus campañas (San Valentín, Black Friday...).</p>
                                        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                                            <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--accent-color)' }}>✔</span> Rápida publicación (1 a 5 días)</li>
                                            <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--accent-color)' }}>✔</span> Optimizada para conversiones</li>
                                            <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--accent-color)' }}>✔</span> Adaptable a tu branding</li>
                                        </ul>
                                        <div style={{ background: 'rgba(139, 92, 246, 0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)' }}>
                                            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Valor estimado: 120€ - 350€</span>
                                            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Packs de 3 o 5 landings disponibles con descuento.</p>
                                        </div>
                                    </div>
                                }
                            />
                            <AdditionalServiceItem
                                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>}
                                title="Web con tiendas online (E-commerce)"
                                content={
                                    <div style={{ padding: '0.5rem 0' }}>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Abre un nuevo canal de ventas disponible 24/7.</p>
                                        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                                            <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--accent-color)' }}>✔</span> Configuración detallada de tienda online y pasarelas de pago.</li>
                                            <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--accent-color)' }}>✔</span> Gestión simplificada de productos y opciones de envío.</li>
                                            <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--accent-color)' }}>✔</span> Optimización móvil para un proceso de compra sin fricciones.</li>
                                            <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--accent-color)' }}>✔</span> Formación básica para gestionar la tienda tú mismo.</li>
                                        </ul>
                                        <div style={{ background: 'rgba(139, 92, 246, 0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)' }}>
                                            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Precio: Desde 1490€</span>
                                            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Tiempo estimado: 3 a 5 semanas</p>
                                        </div>
                                    </div>
                                }
                            />
                            <AdditionalServiceItem
                                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
                                title="Mantenimiento básico"
                                content={
                                    <div style={{ padding: '0.5rem 0' }}>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Mantén tu web segura, actualizada y funcionando. Incluye: actualizaciones, copias y soporte.</p>
                                        <div style={{ background: 'rgba(139, 92, 246, 0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)' }}>
                                            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Precio: 29€ / mes</span>
                                            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Nota: Cambios estructurales o rediseños importantes no incluidos (presupuestar aparte).</p>
                                        </div>
                                    </div>
                                }
                            />
                            <AdditionalServiceItem
                                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>}
                                title="SEO continuo"
                                content={
                                    <div style={{ padding: '0.5rem 0' }}>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Optimización orientada a destacar en Google y atraer visitas de valor.</p>
                                        <div style={{ background: 'rgba(139, 92, 246, 0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)' }}>
                                            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Precio: Desde 180€ / mes</span>
                                        </div>
                                    </div>
                                }
                            />
                            <AdditionalServiceItem
                                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>}
                                title="Creación de blogs"
                                content={
                                    <div style={{ padding: '0.5rem 0' }}>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Artículos pensados para educar a tu audiencia, captar tráfico y posicionarte.</p>
                                        <div style={{ background: 'rgba(139, 92, 246, 0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)' }}>
                                            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Precio: 90€ por artículo</span>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    {/* Nota Hosting / Dominio */}
                    <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-card)', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <strong>Nota importante:</strong> En los packs principales el <strong>hosting y dominio están incluidos el primer año</strong>. A partir del segundo año: renovación de dominio anual y mantenimiento opcional.
                    </div>

                </div>
            </section>

            {/* About Me / Projects (Home) */}
            <section id="proyectos" className="section" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="container">
                    <div className="text-center mb-8">
                        <h2 className="section-title">Casos de éxito</h2>
                        <p className="section-subtitle">Negocios que ya han dado el paso digital y están mejorando sus resultados.</p>
                    </div>

                    <div className="projects-grid">
                        {projectsData.map((proj, idx) => (
                            <ProjectGridCard
                                key={idx}
                                project={proj}
                                onClick={() => setSelectedProject(proj)}
                            />
                        ))}
                    </div>

                    {/* Modal for Projects */}
                    {selectedProject && (
                        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                            <motion.div
                                className="modal-content"
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
                                <div className="modal-img-container">
                                {selectedProject.isIsometric ? (
                                    <div style={{ width: '100%', height: '100%', background: selectedProject.isometricColors?.gradient || '#fdfbf9', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1500px' }}>
                                        <motion.div 
                                            style={{ position: 'relative', width: '260px', height: '150px', transformStyle: 'preserve-3d', transform: 'rotateX(20deg) rotateY(-25deg) rotateZ(5deg)' }}
                                            whileHover={{ rotateX: 10, rotateY: -15, rotateZ: 2, scale: 1.05 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >
                                            <img src={selectedProject.img[0]} alt="Mockup 1" style={{ position: 'absolute', top: '-15%', left: '-10%', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', boxShadow: '-10px 15px 30px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }} />
                                            <img src={selectedProject.img[1]} alt="Mockup 2" style={{ position: 'absolute', top: '15%', left: '15%', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', boxShadow: '-15px 25px 40px rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.5)' }} />
                                        </motion.div>
                                    </div>
                                ) : (
                                    <img src={selectedProject.img} alt={selectedProject.title} />
                                )}
                                </div>
                                <div className="modal-text">
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                                        {selectedProject.title}
                                    </h3>
                                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                                        {selectedProject.desc}
                                    </p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '0.6rem', borderRadius: '50%', color: 'var(--accent-color)', flexShrink: 0 }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                            </div>
                                            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Diseño centrado en la usabilidad y el impacto visual.</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '0.6rem', borderRadius: '50%', color: 'var(--accent-color)', flexShrink: 0 }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                            </div>
                                            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Experiencia fluida y 100% Mobile First.</span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem 2.5rem', background: '#fff', borderTop: '1px solid #eaeaea', position: 'sticky', bottom: '-1px', zIndex: 10, borderRadius: '0 0 var(--radius-card) var(--radius-card)' }}>
                                    <a href={selectedProject.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}>
                                        Visitar Web &rarr;
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-8">
                        <h2 className="section-title">Lo que dicen quienes confían en mí</h2>
                        <p className="section-subtitle">Experiencias reales trabajando juntos en sus proyectos.</p>
                    </div>
                    <div className="testimonial-grid">
                        <TestimonialCard 
                            text="Desde que renovamos la web, la cantidad de clientes que nos contactan ha subido significativamente. El diseño es exactamente lo que queríamos, muy profesional."
                            author="E"
                            title="Director"
                            company="Elha Epilation"
                        />
                        <TestimonialCard 
                            text="Trabajar con Matheus fue un acierto. Entendió nuestra visión para la empresa de remodelación al instante y nos entregó una web que da mucha confianza."
                            author="R"
                            title="Gerente"
                            company="RRJ Remodeling"
                        />
                         <TestimonialCard 
                            text="La web es limpia, rápida y muy intuitiva. Exactamente el reflejo tecnológico que queríamos dar a nuestra empresa IT."
                            author="I"
                            title="CEO"
                            company="Innovatic"
                        />
                    </div>
                </div>
            </section>

            {/* Marquee Slider — temporalmente oculto */}
            {/* <section style={{ padding: '6rem 0', overflow: 'hidden' }}>
                <div className="marquee-mask">
                    <div style={{ display: 'flex', width: '200%', opacity: 0.6, animation: 'marquee 20s linear infinite' }}>
                        <MarqueeContent />
                        <MarqueeContent />
                    </div>
                </div>
                <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
            </section> */}

            {/* Functional Contact */}
            <section className="section" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}
