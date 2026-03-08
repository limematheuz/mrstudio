import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="not-found" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 style={{ fontSize: '8rem', color: 'var(--accent-color)', fontWeight: 300, lineHeight: 1 }}>404</h1>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 400 }}>Parece que te has perdido.</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '400px', margin: '0 auto 3rem auto' }}>
                    La página que buscas no existe o fue movida. Volvamos a encontrar tu rumbo digital.
                </p>
                <Link to="/" className="btn-primary">Regresar al inicio</Link>
            </motion.div>
        </div>
    );
}
