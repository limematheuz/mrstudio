import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

// Helper function for semantic icons
function getSemanticIcon(text, isFeatured = false) {
    const lowerText = text.toLowerCase();
    const color = 'currentColor';

    if (lowerText.includes('diseño') || lowerText.includes('estética') || lowerText.includes('personalizado')) {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>;
    }
    if (lowerText.includes('móvil') || lowerText.includes('responsive') || lowerText.includes('adaptación')) {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
    }
    if (lowerText.includes('formulario') || lowerText.includes('cta') || lowerText.includes('ctas')) {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
    }
    if (lowerText.includes('seguridad') || lowerText.includes('ssl')) {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
    }
    if (lowerText.includes('hosting') || lowerText.includes('dominio')) {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
    }
    if (lowerText.includes('optimización') || lowerText.includes('velocidad') || lowerText.includes('rendimiento') || lowerText.includes('conversión')) {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
    }
    if (lowerText.includes('animaciones') || lowerText.includes('portfolio') || lowerText.includes('interactiva') || lowerText.includes('arquitectura')) {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
    }
    if (lowerText.includes('inclusión') || lowerText.includes('todo lo del plan')) {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>;
    }

    // Default checkmark
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
}

const servicesData = {
    '1-pagina': {
        title: 'Web Minimalista (1 Página)',
        desc: 'El punto de partida ideal. Una presencia online directa y profesional, perfecta para profesionales o pequeños negocios que necesitan validarse en internet de manera rápida, efectiva y sin gastos superfluos.',
        features: [
            'Diseño web profesional, estratégico y orientado a acción',
            'Adaptación impecable en dispositivos móviles',
            'Formulario directo de captación de clientes',
            'Optimización técnica básica y certificados de seguridad',
            'Hosting premium y dominio primer año incluidos'
        ]
    },
    '3-paginas': {
        title: 'Web Standard (Hasta 3 Páginas)',
        desc: 'La decisión inteligente. Arquitectura persuasiva en tres páginas (Inicio, Servicios, Contacto), diseñada para transmitir confianza y convertir visitantes en clientes.',
        features: [
            'Inclusión íntegra del valor Minimalista',
            'Hasta 3 páginas con estructura optimizada para conversión',
            'CTAs estratégicos',
            'Velocidad de carga optimizada',
            'Diseño personalizado y coherente con la marca'
        ]
    },
    '5-paginas': {
        title: 'Web Premium (Hasta 5 Páginas)',
        desc: 'El nivel corporativo definitivo. Experiencia inmersiva para marcas que deben mostrar volumen de servicios y máxima autoridad.',
        features: [
            'Todo lo del plan Standard',
            'Hasta 5 páginas con acabado premium',
            'Estética interactiva y animaciones modernas',
            'Portfolio o secciones a medida',
            'Máximo rendimiento técnico garantizado'
        ]
    },
    'tienda-online': {
        title: 'Tienda Online (E-commerce)',
        desc: 'Multiplica tus ingresos construyendo una máquina de ventas 24/7. Una tienda online segura, atractiva y de fácil gestión para operar tu negocio digital. El tiempo estimado es de 3 a 5 semanas.',
        features: [
            'Configuración profunda de tu infraestructura E-commerce',
            'Integración funcional de pasarelas de pago (Stripe, PayPal, etc)',
            'Alta de productos y estructura de variantes comerciales',
            'Sistematización de logística y costos de envíos',
            'Entrenamiento inicial sobre la gestión autoadministrable de la tienda'
        ]
    }
};

export default function ServiceDetail() {
    const { id } = useParams();
    const service = servicesData[id];

    if (!service) {
        return (
            <div className="section text-center" style={{ paddingTop: '15rem' }}>
                <h1>Servicio no encontrado</h1>
                <Link to="/#servicios" className="btn-primary mt-8">Volver a inicio</Link>
            </div>
        );
    }

    return (
        <div className="service-page">
            <section className="section" style={{ paddingTop: '12rem', paddingBottom: '4rem' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '2rem', textAlign: 'center', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}
                    >
                        {service.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.8 }}
                    >
                        {service.desc}
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}
                    >
                        Beneficios principales:
                    </motion.h2>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ listStyleType: 'none', padding: 0, marginBottom: '6rem' }}
                    >
                        {service.features.map((feat, i) => (
                            <li key={i} style={{ padding: '1.2rem 0', borderBottom: '1px solid #eaeaea', display: 'flex', alignItems: 'center', gap: '1.2rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(139, 92, 246, 0.1)', padding: '0.8rem', borderRadius: '50%', color: 'var(--accent-color)' }}>
                                    {getSemanticIcon(feat, false)}
                                </div>
                                <span>{feat}</span>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </section>

            {/* Form at the bottom of the service page */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <ContactForm defaultService={service.title} />
                </div>
            </section>
        </div>
    );
}
