import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Precios() {
    return (
        <div className="precios-page" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container">
                <div className="text-center mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="section-title"
                    >
                        Planes e Inversión
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="section-subtitle"
                    >
                        Transparencia total. Elige la opción que mejor encaje con el momento actual de tu negocio.
                    </motion.p>
                </div>

                {/* Tabla de Precios (Cards en mobile, Grid en desktop) */}
                <div className="pricing-grid">
                    <PricingCard
                        title="Web Minimalista"
                        price="497€"
                        pages="1 Página"
                        desc="Ideal para validar ideas o tener tu primera web."
                        includes={[
                            "Diseño profesional y persuasivo",
                            "Adaptación móvil perfecta",
                            "Formulario de captación",
                            "Optimización técnica",
                            "Certificado SSL",
                            "Hosting incluido",
                            "Dominio el primer año"
                        ]}
                        link="/servicios/1-pagina"
                        ctaText="Ver detalles"
                    />

                    <PricingCard
                        title="Web Standard"
                        price="697€"
                        pages="Hasta 3 Páginas"
                        desc="Perfecta para conectar con tus clientes y generar confianza."
                        includes={[
                            "Todo lo del plan Minimalista",
                            "Hasta 3 páginas organizadas",
                            "Navegación guiada para conectar",
                            "CTAs estratégicos",
                            "Velocidad de carga superior",
                            "Diseño personalizado",
                            "Hosting incluido",
                            "Dominio el primer año"
                        ]}
                        link="/servicios/3-paginas"
                        featured
                        badge="Recomendado"
                        ctaText="Ver detalles"
                    />

                    <PricingCard
                        title="Web Premium"
                        price="997€"
                        pages="Hasta 5 Páginas"
                        desc="Para marcas que lideran su sector y proyectan autoridad."
                        includes={[
                            "Todo lo del plan Standard",
                            "Hasta 5 páginas premium",
                            "Diseño interactivo",
                            "Animaciones modernas",
                            "Sección portfolio a medida",
                            "Máximo rendimiento garantizado",
                            "Hosting VIP incluido",
                            "Dominio el primer año"
                        ]}
                        link="/servicios/5-paginas"
                        ctaText="Ver detalles"
                    />
                </div>

                {/* Servicios Extra */}
                <div style={{ marginTop: '6rem' }}>
                    <div className="text-center mb-4">
                        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>Servicios recomendados</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Complementos opcionales para potenciar tu plataforma digital.</p>
                    </div>

                    <div className="extras-grid">
                        <ExtraServiceCard
                            title="Web con Tienda Online"
                            price="Desde 1490€"
                            desc="Vende sin interrupciones con una plataforma e-commerce fácil de gestionar."
                        />
                        <ExtraServiceCard
                            title="Landing pages promocionales"
                            price="120€ - 350€ (1-5 días)"
                            desc="Plantillas personalizadas estacionales (San Valentín, Black Friday...). Packs de 3 a 5 disponibles con descuento."
                        />
                        <ExtraServiceCard
                            title="SEO Continuo"
                            price="Desde 180€/mes"
                            desc="Posicionamiento en Google. Atrae clientes mes a mes destacando en las búsquedas de tu sector."
                        />
                        <ExtraServiceCard
                            title="Mantenimiento Básico"
                            price="29€/mes"
                            desc="Actualizaciones, copias de seguridad diarias, seguridad y soporte cercano."
                        />
                    </div>
                </div>

            </div>

            <style>{`
                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    align-items: stretch;
                }
                @media (max-width: 968px) {
                    .pricing-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }
                
                .pricing-card-col {
                    background: #fff;
                    border: 1px solid #eaeaea;
                    border-radius: var(--radius-card);
                    padding: 3rem 2rem;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.3s, box-shadow 0.3s;
                    position: relative;
                }
                
                .pricing-card-col:hover {
                    box-shadow: 0 20px 40px rgba(0,0,0,0.06);
                    transform: translateY(-5px);
                }
                
                .pricing-card-col.featured {
                    border: 2px solid var(--accent-color);
                    box-shadow: 0 15px 35px rgba(139,92,246,0.1);
                    transform: scale(1.03);
                    z-index: 10;
                }
                
                @media (max-width: 968px) {
                    .pricing-card-col.featured {
                        transform: none; /* remove scale on mobile */
                    }
                }
                
                .extras-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                }
                
                .extra-card {
                    background: #fafafa;
                    border: 1px solid #eaeaea;
                    padding: 1.5rem;
                    border-radius: 15px;
                }
            `}</style>
        </div>
    );
}

function getSemanticIcon(text, isFeatured) {
    const lowerText = text.toLowerCase();
    const color = isFeatured ? 'white' : 'var(--accent-color)';

    if (lowerText.includes('diseño') || lowerText.includes('estética')) {
        return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>;
    }
    if (lowerText.includes('móvil') || lowerText.includes('responsive') || lowerText.includes('adaptación')) {
        return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
    }
    if (lowerText.includes('formulario') || lowerText.includes('cta') || lowerText.includes('captación')) {
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

    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
}

function PricingCard({ title, pages, desc, link, featured, badge, price, includes, ctaText = "Ver más detalles" }) {
    const isWebStandard = title === 'Web Standard';
    const wrapperClass = isWebStandard ? 'service-card-web-standard' : `service-card ${featured ? 'featured' : ''}`;
    const effectiveFeatured = isWebStandard ? false : featured;

    return (
        <div className={wrapperClass.trim()} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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

function ExtraServiceCard({ title, price, desc }) {
    return (
        <div className="extra-card">
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>{title}</h4>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '0.8rem' }}>{price}</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{desc}</p>
        </div>
    );
}
