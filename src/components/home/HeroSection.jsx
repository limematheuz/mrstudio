import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSection() {
    const heroRef = useRef(null);

    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            gsap.set('.hero-typewriter .char', { opacity: 1, x: 0 });
            return;
        }

        const isMobile = window.matchMedia("(max-width: 480px)").matches;
        const tl = gsap.timeline({ defaults: { ease: "power2.out" }, delay: 0.1 });

        gsap.set('.hero-typewriter', { opacity: 1 });

        const chars = gsap.utils.toArray('.hero-typewriter .char');
        if (chars.length > 0) {
            tl.to(chars, {
                duration: isMobile ? 0.05 : 0.08,
                opacity: 1,
                stagger: isMobile ? 0.015 : 0.03,
                ease: "power2.out"
            });
        }
    }, { scope: heroRef });

    return (
        <section className="section section-hero text-center" ref={heroRef}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <div>
                    <div className="hero-anim-item" style={{ opacity: 0 }}>
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
                    </div>
                    <h1 className="hero-text mb-8">
                        <span className="sr-only">Creamos webs que ayudan a tu negocio a crecer.</span>
                        <span className="hero-typewriter" aria-hidden="true" style={{
                            opacity: 0,
                            display: 'inline-block',
                            background: 'linear-gradient(90deg, var(--text-primary) 0%, var(--text-primary) 40%, var(--accent-color) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            {"Creamos webs que ayudan a tu ".split('').map((char, index) => (
                                <span key={`l1-${index}`} className="char" style={{ opacity: 0, display: 'inline-block', whiteSpace: 'pre' }}>
                                    {char === ' ' ? ' ' : char}
                                </span>
                            ))}
                            <br className="hide-mobile" />
                            {"negocio a ".split('').map((char, index) => (
                                <span key={`l2-${index}`} className="char" style={{ opacity: 0, display: 'inline-block', whiteSpace: 'pre' }}>
                                    {char === ' ' ? ' ' : char}
                                </span>
                            ))}
                            {"crecer".split('').map((char, index) => (
                                <span key={`l3-${index}`} className="char" style={{ opacity: 0, display: 'inline-block', whiteSpace: 'pre' }}>
                                    {char === ' ' ? ' ' : char}
                                </span>
                            ))}
                            <span className="char" style={{ opacity: 0, display: 'inline-block' }}>.</span>
                            <span className="typewriter-caret"></span>
                        </span>
                    </h1>
                    <p className="mb-8 hero-anim-item" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', opacity: 0 }}>
                        Sitios profesionales, rápidos y pensados para generar confianza. Diseño, hosting y dominio incluidos.
                    </p>
                    <div className="hero-buttons hero-anim-item" style={{ opacity: 0 }}>
                        <a href="#servicios" className="btn-primary">Ver mis servicios</a>
                        <a href="#proyectos" className="btn-secondary">Ver proyectos</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
