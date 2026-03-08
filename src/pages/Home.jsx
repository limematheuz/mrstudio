import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "RRJ Remodeling",
            desc: "Una presencia confiable y sólida para una empresa de remodelación. Arquitectura de la información pensada para captar clientes desde el primer segundo.",
            img: "/images/rrj_mockup.avif",
            link: "https://rrjremodeling.com/"
        },
        {
            title: "Pedro's Remodeling NC",
            desc: "Digitalización en Carolina del Norte. Generando tracción local combinando diseño minimalista, formularios de alto impacto y resultados palpables.",
            img: "/images/pedros_mockup.avif",
            link: "https://pedrosremodelingnc.com/"
        },
        {
            title: "Elha Epilation Láser",
            desc: "Expansión internacional. Portales refinados orientados al sector de belleza, guiando la atención hacia la reserva de citas y maximizando la conversión.",
            img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1200",
            link: "https://elhaepilationlaser.fr/"
        },
        {
            title: "Centri Elha (Italia)",
            desc: "Consolidación de marca en Italia con una interfaz limpia, enfocada en la estética premium y servicios de belleza.",
            img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200",
            link: "https://centrielha.it/"
        },
        {
            title: "Innovatic",
            desc: "Modernidad y soporte IT para empresas catalanas. Interfaz tecnológica profesional que transmite seguridad operativa y vanguardia.",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
            link: "https://innovatic.cat/"
        }
    ];

    return (
        <div className="home" style={{ position: 'relative' }}>
            <ParticlesBackground />

            {/* Hero Section */}
            <section className="section text-center" style={{ paddingTop: '15rem', paddingBottom: '10rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            display: 'inline-block',
                            padding: '0.4rem 1rem',
                            background: 'rgba(139,92,246,0.1)',
                            color: 'var(--accent-color)',
                            borderRadius: '100px',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            marginBottom: '1.5rem'
                        }}>
                            Diseño Web Premium
                        </span>
                    </motion.div>
                    <motion.h1
                        className="hero-text mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        Webs diseñadas para<br />
                        convertir visitantes en <span style={{
                            background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-color) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>clientes</span>.
                    </motion.h1>
                    <motion.p
                        className="mb-8"
                        style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Sitios web profesionales, rápidos y diseñados estratégicamente para vender. Diseño, hosting y dominio incluidos.
                    </motion.p>
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <a href="#servicios" className="btn-primary">Ver paquetes</a>
                        <a href="#proyectos" className="btn-secondary">Ver proyectos</a>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicios" className="section">
                <div className="container">
                    <div className="text-center mb-8">
                        <h2 className="section-title">Planes de Diseño Web</h2>
                        <p className="section-subtitle">Inversiones rentables diseñadas para escalar tu negocio en internet.</p>
                    </div>

                    <div className="services-container">

                        <ServiceCard
                            title="Web Minimalista"
                            pages="1 Página"
                            price="497€"
                            desc="El punto de partida ideal. Una presencia online directa y profesional, perfecta para pequeños negocios o profesionales que necesitan presentarse en internet rápida y efectivamente."
                            includes={[
                                "Diseño web profesional",
                                "Adaptación móvil",
                                "Formulario de contacto",
                                "Optimización básica",
                                "Seguridad básica",
                                "Hosting incluido",
                                "Dominio incluido el primer año"
                            ]}
                            link="/servicios/1-pagina"
                            ctaText="Ver más detalles"
                        />

                        <ServiceCard
                            title="Web Standard"
                            pages="Hasta 3 Páginas"
                            price="690€"
                            desc="La decisión más inteligente. Una estructura sólida diseñada psicológicamente para destacar tu valor diferencial, transmitir confianza absoluta y captar clientes."
                            includes={[
                                "Todo lo del plan Minimalista",
                                "Hasta 3 páginas",
                                "Arquitectura optimizada para conversión",
                                "Optimización de velocidad",
                                "Diseño personalizado",
                                "Formularios avanzados",
                                "Hosting incluido",
                                "Dominio incluido el primer año"
                            ]}
                            link="/servicios/3-paginas"
                            featured
                            badge="Más popular"
                            ctaText="Ver más detalles"
                        />

                        <ServiceCard
                            title="Web Premium"
                            pages="Hasta 5 Páginas"
                            price="990€"
                            desc="El estándar más alto. Una plataforma exclusiva y completa para marcas empoderadas que exigen transmitir autoridad y dominar su mercado."
                            includes={[
                                "Todo lo del plan Standard",
                                "Hasta 5 páginas",
                                "Diseño avanzado personalizado",
                                "Sección portfolio o proyectos",
                                "Animaciones modernas",
                                "Optimización avanzada"
                            ]}
                            link="/servicios/5-paginas"
                            ctaText="Ver más detalles"
                        />
                    </div>

                    {/* Trust Badges */}
                    <div className="trust-badges">
                        <div className="trust-badge">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            <span>Diseño Premium</span>
                        </div>
                        <div className="trust-badge">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            <span>Seguridad Incluida</span>
                        </div>
                        <div className="trust-badge">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            <span>Carga Ultra Rápida</span>
                        </div>
                        <div className="trust-badge">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <span>Soporte Experto</span>
                        </div>
                    </div>

                    {/* Aditional Services */}
                    <div style={{ marginTop: '5rem' }}>
                        <div className="text-center mb-4">
                            <h3 className="section-title" style={{ fontSize: '2rem' }}>Escala tu proyecto</h3>
                            <p className="section-subtitle">Soluciones estratégicas adicionales para llevar tu negocio al siguiente nivel.</p>
                        </div>
                        <div className="add-service-grid">
                            <AdditionalServiceItem
                                title="Landing pages promocionales"
                                content={
                                    <div>
                                        <p>Plantillas modulares personalizadas para tus campañas (San Valentín, Black Friday...).</p>
                                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                            <li>Rápida publicación (1 a 5 días)</li>
                                            <li>Optimizada para conversiones</li>
                                            <li>Adaptable a tu branding</li>
                                        </ul>
                                        <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--accent-color)' }}>
                                            <b>Valor estimado: 120€ - 350€. </b>
                                            <i>Packs de 3 o 5 landings disponibles con descuento.</i>
                                        </p>
                                    </div>
                                }
                            />
                            <AdditionalServiceItem
                                title="Web con tienda online (E-commerce)"
                                content={
                                    <>
                                        <p style={{ marginBottom: '1rem' }}>Multiplica tus ingresos construyendo una máquina de ventas 24/7. Una tienda online segura, atractiva y de fácil gestión para operar tu negocio digital.</p>
                                        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                            <li><span style={{ color: 'var(--accent-color)' }}>✔</span> <strong>Configuración profunda</strong> de tienda online y pasarelas de pago.</li>
                                            <li><span style={{ color: 'var(--accent-color)' }}>✔</span> <strong>Gestión simplificada</strong> de productos y opciones de envío.</li>
                                            <li><span style={{ color: 'var(--accent-color)' }}>✔</span> <strong>Optimización móvil</strong> para un proceso de compra sin fricciones.</li>
                                            <li><span style={{ color: 'var(--accent-color)' }}>✔</span> <strong>Formación básica</strong> para gestionar la tienda tú mismo.</li>
                                        </ul>
                                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}><em>Precio: Desde 1490€ - Tiempo estimado: 3 a 5 semanas</em></p>
                                    </>
                                }
                            />
                            <AdditionalServiceItem
                                title="Mantenimiento básico (29€/mes)"
                                content={
                                    <>
                                        <p style={{ marginBottom: '1rem' }}>Mantén tu web blindada y operando al 100%. Incluye: actualizaciones, copias de seguridad, seguridad y soporte básico.</p>
                                        <p style={{ fontSize: '0.9rem' }}><em>Nota: Cambios estructurales o rediseños importantes no están incluidos y se presupuestan aparte.</em></p>
                                    </>
                                }
                            />
                            <AdditionalServiceItem
                                title="SEO continuo (Desde 180€/mes)"
                                content="Aparece cuando tus clientes te busquen. Estrategia y optimización mensual enfocada en dominar tu nicho en Google, atraer tráfico relevante y hacer crecer tus oportunidades de negocio."
                            />
                            <AdditionalServiceItem
                                title="Creación de blogs (90€ por artículo)"
                                content="Contenido estratégico y persuasivo, optimizado para posicionamiento, pensado para educar a tu audiencia, captar visitas cualificadas y establecerte como autoridad."
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
                        <p className="section-subtitle">Negocios que ya han dado el salto digital y están multiplicando sus resultados.</p>
                    </div>

                    <div className="projects-grid">
                        {projects.map((proj, idx) => (
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
                                    <img src={selectedProject.img} alt={selectedProject.title} />
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
                                            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Estrategia centrada en la conversión y alto impacto visual.</span>
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
                        <h2 className="section-title">Lo que dicen mis clientes</h2>
                        <p className="section-subtitle">Resultados reales y relaciones a largo plazo.</p>
                    </div>
                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <div style={{ display: 'flex', color: '#fbbf24', marginBottom: '1rem' }}>★★★★★</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"Desde que renovamos la web, la cantidad de clientes que nos contactan ha subido significativamente. El diseño es exactamente lo que queríamos, muy profesional."</p>
                            <h4 style={{ fontWeight: 600 }}>Director - Elha Epilation</h4>
                        </div>
                        <div className="testimonial-card">
                            <div style={{ display: 'flex', color: '#fbbf24', marginBottom: '1rem' }}>★★★★★</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"Trabajar con Matheus fue un acierto. Entendió nuestra visión para la empresa de remodelación al instante y nos entregó una web que da mucha confianza."</p>
                            <h4 style={{ fontWeight: 600 }}>Gerente - RRJ Remodeling</h4>
                        </div>
                        <div className="testimonial-card">
                            <div style={{ display: 'flex', color: '#fbbf24', marginBottom: '1rem' }}>★★★★★</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"La web es limpia, rápida y muy intuitiva. Exactamente el reflejo tecnológico que queríamos dar a nuestra empresa IT."</p>
                            <h4 style={{ fontWeight: 600 }}>CEO - Innovatic</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee Slider */}
            <section style={{ padding: '6rem 0', overflow: 'hidden' }}>
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
            </section>

            {/* Functional Contact */}
            <section className="section" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}

// Helper function for semantic icons
function getSemanticIcon(text, isFeatured) {
    const lowerText = text.toLowerCase();
    const color = isFeatured ? 'white' : 'var(--accent-color)';

    if (lowerText.includes('diseño') || lowerText.includes('estética')) {
        return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>;
    }
    if (lowerText.includes('móvil') || lowerText.includes('responsive') || lowerText.includes('adaptación')) {
        return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
    }
    if (lowerText.includes('formulario') || lowerText.includes('cta')) {
        return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
    }
    if (lowerText.includes('seguridad') || lowerText.includes('ssl')) {
        return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
    }
    if (lowerText.includes('hosting') || lowerText.includes('dominio')) {
        return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
    }
    if (lowerText.includes('optimización') || lowerText.includes('velocidad') || lowerText.includes('rendimiento')) {
        return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
    }
    if (lowerText.includes('animaciones') || lowerText.includes('portfolio') || lowerText.includes('interactiva') || lowerText.includes('arquitectura')) {
        return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
    }

    // Default checkmark
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
}

function ServiceCard({ title, pages, desc, link, featured, badge, price, includes, ctaText = "Ver más detalles" }) {
    const isWebStandard = title === 'Web Standard';
    const wrapperClass = isWebStandard ? 'service-card-web-standard' : `service-card ${featured ? 'featured' : ''}`;
    const effectiveFeatured = isWebStandard ? false : featured;

    return (
        <div className={wrapperClass.trim()} style={{ display: 'flex', flexDirection: 'column' }}>
            {badge && <div className="badge-popular">{badge}</div>}
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{title}</h3>
            {pages && <div style={{ color: 'var(--text-primary)', fontWeight: 800, marginBottom: '0.5rem' }}>{pages}</div>}

            {price && <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-color)', marginBottom: '1rem' }}>{price}</div>}

            <p style={{ marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>{desc}</p>

            <div style={{ flexGrow: 1 }}>
                {includes && (
                    <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left' }}>
                        {includes.map((item, i) => (
                            <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                                <div style={{ flexShrink: 0, marginTop: '2px', color: 'var(--accent-color)' }}>
                                    {getSemanticIcon(item, effectiveFeatured)}
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <Link to={link || '#'} className="btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>{ctaText}</Link>
        </div>
    );
}

function ProjectGridCard({ project, onClick }) {
    return (
        <motion.div
            className="project-grid-card"
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
        >
            <div className="project-grid-img" style={{ height: '350px' }}>
                <img src={project.img} alt={project.title} />

                {/* Default Bottom Bar */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                    <div style={{ background: 'var(--accent-color)', color: 'white', padding: '0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"></path><path d="M5 21v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"></path><path d="M12 12v-3"></path><path d="M12 9A3 3 0 1 0 12 3a3 3 0 0 0 0 6z"></path></svg>
                    </div>
                    <span style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{project.title.split(' - ')[0]}</span>
                </div>

                {/* Hover Overlay */}
                <div className="project-grid-overlay">
                    <span style={{ textAlign: 'left' }}>
                        <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'block' }}>Caso de Éxito</span>
                        <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.6rem', lineHeight: 1.2 }}>{project.title}</h4>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: '2px' }}>
                            Ver detalles <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

// No more ProjectRow needed here.

function MarqueeContent() {
    const items = ["RRJ Remodeling", "Pedro's Remodeling NC", "ELHA EPILATION", "Centri Elha", "Elha Depilación", "INNOVATIC"];
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
            {items.map((item, i) => (
                <span key={i} style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'rgba(0,0,0,0.8)',
                    whiteSpace: 'nowrap',
                    padding: '0 3rem'
                }}>
                    {item}
                </span>
            ))}
        </div>
    );
}

function AdditionalServiceItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="add-service-item" onClick={() => setIsOpen(!isOpen)}>
            <div className="add-service-header">
                <span>{title}</span>
                <div className="add-service-icon" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </div>
            <div className={`add-service-content ${isOpen ? 'open' : ''}`}>
                <div style={{ paddingBottom: '0.5rem' }}>{content}</div>
            </div>
        </div>
    );
}
