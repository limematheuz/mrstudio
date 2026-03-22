import { motion } from 'framer-motion';

export default function ProjectGridCard({ project, onClick }) {
    return (
        <motion.div
            className="project-grid-card"
            onClick={onClick}
            whileHover={{ y: -5, boxShadow: project.isIsometric ? project.isometricConfig?.shadow : undefined }}
        >
            <div className="project-grid-img" style={{ height: '350px' }}>
                {project.isIsometric ? (
                    <div style={{ width: '100%', height: '100%', background: project.isometricConfig?.background || '#fdfbf9', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1500px' }}>
                        {/* Studio Light Spots */}
                        {project.isometricConfig?.lightSpots?.map((spot, i) => (
                            <div key={i} style={{ position: 'absolute', top: spot.top, left: spot.left, width: spot.size, height: spot.size, borderRadius: '50%', background: spot.color, filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0 }} />
                        ))}
                        <motion.div 
                            style={{ position: 'relative', width: project.img.length === 1 ? '200px' : '280px', height: project.img.length === 1 ? '130px' : '170px', transformStyle: 'preserve-3d', zIndex: 1 }}
                            initial={project.isometricConfig?.transform}
                            whileHover={project.isometricConfig?.hoverTransform}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <img src={project.img[0]} alt="Mockup 1" style={{ position: 'absolute', top: project.isometricConfig?.images[0].top, left: project.isometricConfig?.images[0].left, zIndex: project.isometricConfig?.images[0].zIndex, width: project.isometricConfig?.images[0].width || '100%', height: project.isometricConfig?.images[0].height || '100%', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.1)' }} />
                            {project.img.length > 1 && (
                                <img src={project.img[1]} alt="Mockup 2" style={{ position: 'absolute', top: project.isometricConfig?.images[1].top, left: project.isometricConfig?.images[1].left, zIndex: project.isometricConfig?.images[1].zIndex, width: project.isometricConfig?.images[1].width || '100%', height: project.isometricConfig?.images[1].height || '100%', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 30px 60px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.15)' }} />
                            )}
                        </motion.div>
                    </div>
                ) : (
                    <img src={project.img} alt={project.title} />
                )}

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
                        <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'block', fontWeight: 600 }}>Caso de Éxito</span>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.6rem', lineHeight: 1.2 }}>{project.title}</h4>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontWeight: 500, borderBottom: '1px solid var(--accent-color)', paddingBottom: '2px' }}>
                            Ver detalles <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
