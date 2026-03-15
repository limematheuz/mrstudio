import { motion } from 'framer-motion';

export default function ProjectGridCard({ project, onClick }) {
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
