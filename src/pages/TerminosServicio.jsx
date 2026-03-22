import { motion } from 'framer-motion';

export default function TerminosServicio() {
    return (
        <div className="legal-page section" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                        Términos del <span style={{ color: 'var(--accent-color)' }}>Servicio</span>
                    </h1>
                    
                    <div className="legal-content">
                        <p>Última actualización: {new Date().toLocaleDateString()}</p>

                        <h3>1. Objeto y Aceptación</h3>
                        <p>
                            Los presentes Términos y Condiciones regulan el uso de la página web mrstudio.es y la contratación de los servicios de diseño y desarrollo web ofrecidos por <strong>MRStudio</strong>. Al acceder a esta web y/o contratar cualquiera de nuestros servicios, aceptas estos términos en su totalidad.
                        </p>

                        <h3>2. Servicios Ofrecidos</h3>
                        <p>
                            MRStudio ofrece servicios profesionales de diseño web, creación de tiendas online (e-commerce), páginas de aterrizaje (landing pages/One Page) y servicios adicionales como mantenimiento y optimización web, descritos en la sección de <a href="/#servicios" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>Servicios</a> y en <a href="/precios" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>Precios</a>. El alcance estricto de cada proyecto se definirá siempre en un presupuesto personalizado enviado al cliente antes de comenzar el trabajo.
                        </p>

                        <h3>3. Presupuestos y Pagos</h3>
                        <p>
                            Los precios mostrados en la web son "A partir de" y sirven como guía inicial. Tras la toma de contacto, se enviará un presupuesto final y definitivo.
                        </p>
                        <ul>
                            <li>El presupuesto tiene una validez de 15 días tras su emisión.</li>
                            <li>Para dar comienzo al trabajo, generalmente se requiere un anticipo del 50% (o la cantidad estipulada en el presupuesto). El abono del 50% restante se realizará al finalizar el proyecto y antes de su publicación o pase a producción (lanzamiento).</li>
                            <li>Los pagos se realizarán mediante transferencia bancaria u otros medios acordados.</li>
                        </ul>

                        <h3>4. Proceso de Trabajo y Entregas</h3>
                        <p>
                            Nos comprometemos a entregar los servicios en los plazos estipulados en el presupuesto, siempre que el cliente facilite a tiempo el material necesario (textos, imágenes, accesos). Los retrasos ocasionados por la falta de entrega de dicho material por parte del cliente eximirán a MRStudio de responsabilidad sobre la fecha de entrega final acordada.
                        </p>

                        <h3>5. Revisiones y Modificaciones</h3>
                        <p>
                            Cada proyecto incluye un ciclo de revisiones estipuladas en el presupuesto inicial. Cualquier modificación estructural severa o cambio de funcionalidades solicitadas fuera de dicho ciclo o una vez aprobado el diseño, será presupuestado como horas adicionales.
                        </p>

                        <h3>6. Cancelación del Proyecto</h3>
                        <p>
                            En caso de que el cliente decida paralizar o cancelar el proyecto una vez iniciado, MRStudio facturará horas proporcionales al trabajo realizado hasta el momento del aviso. El anticipo del 50% no será reembolsable, sirviendo como garantía de recursos y tiempo ya invertido.
                        </p>

                        <h3>7. Mantenimiento y Responsabilidad</h3>
                        <p>
                            Finalizada la entrega del producto y tras su publicación, MRStudio no se hará responsable de fallos técnicos derivados de manipulaciones de terceros o actualizaciones externas, salvo que el cliente tenga contratado explícitamente un plan de Mantenimiento con nosotros.
                        </p>
                    </div>
                </motion.div>
            </div>
            <style>{`
                .legal-content h3 { margin-top: 2.5rem; margin-bottom: 1rem; font-size: 1.3rem; color: var(--text-primary); }
                .legal-content p { color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.2rem; font-size: 1.05rem; }
                .legal-content ul { color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.05rem; }
                .legal-content li { margin-bottom: 0.5rem; }
                .legal-content strong { color: var(--text-primary); font-weight: 600; }
            `}</style>
        </div>
    );
}
