import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const location = useLocation();

    const isActive = (path) => {
        if (path.startsWith('/#')) {
            const hash = path.substring(1);
            return location.pathname === '/' && location.hash === hash;
        }
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="logo" onClick={closeMenu} style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                <span className="logo-highlight">MR</span>Studio
            </Link>

            <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label={menuOpen ? "Cerrar Menú" : "Abrir Menú"} aria-expanded={menuOpen}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Backdrop para el modal del menú */}
            <div className={`mobile-menu-backdrop ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-links">
                    <Link to="/" className={location.pathname === '/' && !location.hash ? 'active' : ''} onClick={closeMenu}>Inicio</Link>
                    <Link to="/aboutme" className={isActive('/aboutme') ? 'active' : ''} onClick={closeMenu}>Sobre mí</Link>
                    <Link to="/precios" className={isActive('/precios') ? 'active' : ''} onClick={closeMenu}>Precios</Link>
                    <a href="/#servicios" className={isActive('/#servicios') ? 'active' : ''} onClick={closeMenu}>Servicios</a>
                    <a href="/#proyectos" className={isActive('/#proyectos') ? 'active' : ''} onClick={closeMenu}>Proyectos</a>
                </div>

                <div className="mobile-menu-bottom">
                    <a href="#contacto" className="btn-primary mobile-contact-btn" onClick={closeMenu}>
                        Contactar
                    </a>
                    
                    <div className="mobile-menu-logo">
                        <span className="logo-highlight">MR</span>Studio
                    </div>
                </div>
            </nav>

            <a href="#contacto" className="btn-primary btn-header desktop-only-btn" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem' }}>
                Contactar
            </a>
        </header>
    );
}
