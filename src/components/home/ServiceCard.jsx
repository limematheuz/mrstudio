import { Link } from 'react-router-dom';

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

    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
}

export default function ServiceCard({ title, pages, desc, link, featured, badge, price, includes, ctaText = "Ver más detalles" }) {
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
