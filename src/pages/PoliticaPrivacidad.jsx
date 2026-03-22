import { motion } from 'framer-motion';

export default function PoliticaPrivacidad() {
    return (
        <div className="legal-page section" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                        Política de <span style={{ color: 'var(--accent-color)' }}>Privacidad</span>
                    </h1>
                    
                    <div className="legal-content">
                        <p>Última actualización: {new Date().toLocaleDateString()}</p>

                        <h3>1. Información al usuario</h3>
                        <p>
                            En <strong>MRStudio</strong>, nos tomamos muy en serio la privacidad de tus datos. La presente Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas a través de nuestra página web mrstudio.es, en cumplimiento con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD).
                        </p>

                        <h3>2. Responsable del tratamiento</h3>
                        <p>
                            El responsable del tratamiento de los datos recabados es <strong>Matheus Ribeiro</strong> (MRStudio). Puedes contactarnos en cualquier momento a través del email: <strong>mribeiro17.info@gmail.com</strong>.
                        </p>

                        <h3>3. Finalidad del tratamiento</h3>
                        <p>
                            Tus datos personales solo serán utilizados para los siguientes fines:
                        </p>
                        <ul>
                            <li>Responder a las consultas o solicitudes de presupuesto enviadas a través del formulario de contacto.</li>
                            <li>Gestionar el desarrollo de proyectos web y la prestación de servicios solicitados.</li>
                            <li>Cumplir con las obligaciones legales correspondientes.</li>
                        </ul>
                        <p>En ningún caso utilizamos tus datos para enviar publicidad comercial (SPAM) sin tu consentimiento previo, explícito y verificable.</p>

                        <h3>4. Legitimación para el tratamiento</h3>
                        <p>
                            La base legal para el tratamiento de tus datos es el <strong>consentimiento explícito</strong> que otorgas al marcar la casilla de aceptación al momento de enviar el formulario de contacto, y/o la ejecución de un contrato o precontrato en caso de solicitar nuestros servicios.
                        </p>

                        <h3>5. Conservación de los datos</h3>
                        <p>
                            Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.
                        </p>

                        <h3>6. Comunicación de los datos</h3>
                        <p>
                            MRStudio no cederá ni venderá tus datos a terceros bajo ninguna circunstancia, salvo obligación legal expresa. Utilizamos servicios de terceros (como EmailJS) estrictamente para facilitar la comunicación técnica de los formularios, los cuales actúan como encargados del tratamiento cumpliendo con niveles de seguridad europeos.
                        </p>

                        <h3>7. Tus derechos</h3>
                        <p>
                            Tienes derecho a acceder, rectificar, limitar y suprimir tus datos en cualquier momento. Puedes ejercer estos derechos, así como el de portabilidad u oposición al tratamiento, enviando un correo electrónico a <strong>mribeiro17.info@gmail.com</strong> adjuntando una copia de un documento que acredite tu identidad. Tienes derecho también a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
                        </p>
                    </div>
                </motion.div>
            </div>
            <style>{`
                .legal-content h3 {
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    font-size: 1.3rem;
                    color: var(--text-primary);
                }
                .legal-content p {
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 1.2rem;
                    font-size: 1.05rem;
                }
                .legal-content ul {
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                    font-size: 1.05rem;
                }
                .legal-content li {
                    margin-bottom: 0.5rem;
                }
                .legal-content strong {
                    color: var(--text-primary);
                    font-weight: 600;
                }
            `}</style>
        </div>
    );
}
