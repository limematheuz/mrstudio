import { motion } from 'framer-motion';

export default function AvisoLegal() {
    return (
        <div className="legal-page section" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                        Aviso <span style={{ color: 'var(--accent-color)' }}>Legal</span>
                    </h1>
                    
                    <div className="legal-content">
                        <p>Última actualización: {new Date().toLocaleDateString()}</p>

                        <h3>1. Datos Identificativos</h3>
                        <p>
                            En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se hace constar que la página web mrstudio.es (en adelante, la "Web") está operada por <strong>Matheus Ribeiro</strong>, creador de MRStudio. Puedes ponerte en contacto directamente escribiendo al correo electrónico: <strong>mribeiro17.info@gmail.com</strong>.
                        </p>

                        <h3>2. Usuarios</h3>
                        <p>
                            El acceso y/o uso de este portal web atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Si no estás de acuerdo con estas condiciones, debes abstenerte de utilizar la página web.
                        </p>

                        <h3>3. Uso del sitio web</h3>
                        <p>
                            mrstudio.es proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet, pertenecientes a MRStudio o a sus licenciantes, a los que el USUARIO puede tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro y correcto uso en formularios como el de contacto.
                        </p>
                        <p>
                            El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que MRStudio ofrece a través de su web y con carácter enunciativo pero no limitativo, a no emplearlos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público; o provocar daños en los sistemas físicos y lógicos de MRStudio, de sus proveedores o de terceras personas.
                        </p>

                        <h3>4. Propiedad Intelectual e Industrial</h3>
                        <p>
                            MRStudio es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).
                        </p>
                        <p>
                            Cualquier uso no autorizado previamente por MRStudio, será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de MRStudio.
                        </p>

                        <h3>5. Modificaciones</h3>
                        <p>
                            MRStudio se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
                        </p>

                        <h3>6. Exclusión de garantías y responsabilidad</h3>
                        <p>
                            MRStudio no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                        </p>

                        <h3>7. Legislación aplicable y jurisdicción</h3>
                        <p>
                            La relación entre MRStudio y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad correspondiente al domicilio fiscal/legal de MRStudio (España), salvo que la Ley determine lo contrario.
                        </p>
                    </div>
                </motion.div>
            </div>
            {/* The global styles will be applied via the <style> tag from Privacy Policy if we move them to index.css, 
                let's just replicate the specific styling for ease or let index.css handle it */}
            <style>{`
                .legal-content h3 { margin-top: 2.5rem; margin-bottom: 1rem; font-size: 1.3rem; color: var(--text-primary); }
                .legal-content p { color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.2rem; font-size: 1.05rem; }
                .legal-content strong { color: var(--text-primary); font-weight: 600; }
            `}</style>
        </div>
    );
}
