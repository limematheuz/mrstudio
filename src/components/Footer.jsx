import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem' }}>
                    <div style={{ flex: '1 1 300px' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                            <span className="logo-highlight" style={{ fontSize: '2.4rem' }}>MR</span>Studio
                        </h3>
                        <p style={{ maxWidth: '350px', fontSize: '0.95rem', lineHeight: 1.6 }}>Diseño web que convierte. Construimos experiencias digitales inmersivas y ultra eficientes.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Empresa</h4>
                            <Link to="/aboutme" className="footer-link">Sobre mí</Link>
                            <a href="/#proyectos" className="footer-link">Portfolio</a>
                            <a href="/#contacto" className="footer-link">Contacto</a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Legal</h4>
                            <a href="#" className="footer-link">Política de privacidad</a>
                            <a href="#" className="footer-link">Aviso Legal</a>
                            <a href="#" className="footer-link">Términos del servicio</a>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #eaeaea', fontSize: '0.9rem' }}>
                    <p>&copy; {currentYear} MRStudio. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
