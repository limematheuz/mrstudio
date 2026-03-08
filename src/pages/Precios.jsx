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
                        Transparencia total. Elige el plan que mejor se adapte al momento actual de tu negocio.
                    </motion.p>
                </div>

                {/* Tabla de Precios (Cards en mobile, Grid en desktop) */}
                <div className="pricing-grid">
                    <PricingCard
                        title="Web Minimalista"
                        price="497€"
                        pages="1 Página"
                        desc="Para validar ideas o presencia rápida."
                        features={[
                            "Diseño profesional y persuasivo",
                            "Adaptación móvil perfecta",
                            "Formulario de captación",
                            "Optimización técnica",
                            "Certificado SSL",
                            "Hosting incluido",
                            "Dominio el primer año"
                        ]}
                        link="/servicios/1-pagina"
                    />

                    <PricingCard
                        title="Web Standard"
                        price="697€"
                        pages="Hasta 3 Páginas"
                        desc="Para captar clientes y transmitir confianza."
                        features={[
                            "Todo lo del plan Minimalista",
                            "Hasta 3 páginas organizadas",
                            "Arquitectura de neuromarketing",
                            "CTAs estratégicos",
                            "Velocidad de carga superior",
                            "Diseño personalizado",
                            "Hosting incluido",
                            "Dominio el primer año"
                        ]}
                        link="/servicios/3-paginas"
                        featured
                        badge="La decisión inteligente"
                    />

                    <PricingCard
                        title="Web Premium"
                        price="997€"
                        pages="Hasta 5 Páginas"
                        desc="Para marcas que dominan su mercado."
                        features={[
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
                            desc="Vende tus productos 24/7 con una plataforma e-commerce autogestionable y escalable."
                        />
                        <ExtraServiceCard
                            title="Landing pages promocionales"
                            price="120€ - 350€ (1-5 días)"
                            desc="Plantillas personalizadas estacionales (San Valentín, Black Friday...). Packs de 3 a 5 disponibles con descuento."
                        />
                        <ExtraServiceCard
                            title="SEO Continuo"
                            price="Desde 180€/mes"
                            desc="Posicionamiento en Google. Atrae clientes cualificados mes a mes dominando las búsquedas de tu sector."
                        />
                        <ExtraServiceCard
                            title="Mantenimiento Básico"
                            price="29€/mes"
                            desc="Actualizaciones, copias de seguridad diarias, seguridad avanzada y soporte continuado."
                        />
                    </div>
                </div>

            </div>

            <style>{`
                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    align-items: start;
                }
                @media (max-width: 968px) {
                    .pricing-grid {
                        grid-template-columns: 1fr;
                        /* Apiladas verticalmente, ancho completo fluido */
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

function PricingCard({ title, price, pages, desc, features, link, featured, badge }) {
    const isWebStandard = title === 'Web Standard';
    const wrapperClass = isWebStandard ? 'service-card-web-standard' : `pricing-card-col ${featured ? 'featured' : ''}`;
    const effectiveFeatured = isWebStandard ? false : featured;

    return (
        <div className={wrapperClass.trim()}>
            {badge && (
                <div style={{
                    position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--accent-color)', color: 'white', fontWeight: 600, fontSize: '0.8rem',
                    padding: '0.4rem 1.2rem', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.05em'
                }}>
                    {badge}
                </div>
            )}
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem', flexGrow: 1 }}>{desc}</p>
            <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{price}</span>
            </div>
            <div style={{ fontWeight: 600, color: 'var(--accent-color)', marginBottom: '2rem' }}>{pages}</div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {features.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{feat}</span>
                    </li>
                ))}
            </ul>

            <Link to={link} className={effectiveFeatured ? "btn-primary" : "btn-secondary"} style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                Ver detalles
            </Link>
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
