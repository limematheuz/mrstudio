import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="not-found" style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            textAlign: 'center',
            padding: '2rem',
            overflow: 'hidden',
            position: 'relative'
        }}>
            
            {/* Background elements for space vibe */}
            <motion.div 
                animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '20%', left: '15%', fontSize: '4rem', filter: 'blur(2px)' }}
            >
                ✨
            </motion.div>
            <motion.div 
                animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }} 
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ position: 'absolute', bottom: '25%', right: '20%', fontSize: '3rem', filter: 'blur(1px)' }}
            >
                🪐
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
                style={{ position: 'relative', zIndex: 10 }}
            >
                {/* Floating 404 */}
                <motion.h1 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ 
                        fontSize: 'clamp(6rem, 15vw, 10rem)', 
                        color: 'transparent',
                        WebkitTextStroke: '3px var(--accent-color)',
                        fontWeight: 900, 
                        lineHeight: 1,
                        margin: 0,
                        textShadow: '0 20px 40px rgba(139, 92, 246, 0.2)'
                    }}
                >
                    404
                </motion.h1>

                <h2 style={{ 
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
                    marginBottom: '1rem', 
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginTop: '2rem'
                }}>
                    ¡Houston, tenemos un <span style={{ color: 'var(--accent-color)' }}>404</span>! 🛸
                </h2>

                <p style={{ 
                    color: 'var(--text-secondary)', 
                    marginBottom: '2.5rem', 
                    maxWidth: '450px', 
                    margin: '0 auto 2.5rem auto',
                    fontSize: '1.1rem',
                    lineHeight: 1.6
                }}>
                    Parece que esta página fue abducida, se perdió en el hiperespacio o simplemente nunca llegó a existir.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link to="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontSize: '1.05rem' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        Volver a la base
                    </Link>
                </div>

                <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#9ca3af' }}>
                    Mientras resolvemos este misterio intergaláctico, ponte cómodo.
                </p>
            </motion.div>
        </div>
    );
}
