import KernelAuditLogo from '../../assets/kernel-audit.svg';

export default function MarqueeContent() {
    const items = ["RRJ Remodeling", "Pedro's Remodeling NC", "ELHA EPILATION", "Centri Elha", "Elha Depilación", "INNOVATIC"];
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
            {/* Regular text items */}
            {items.map((item, i) => (
                <span key={i} style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'rgba(0,0,0,0.8)',
                    whiteSpace: 'nowrap',
                    padding: '0 3rem'
                }}>
                    {item}
                </span>
            ))}
            {/* Kernel Audit logo */}
            <span style={{ padding: '0 3rem', display: 'inline-flex', alignItems: 'center' }}>
                <img
                    src={KernelAuditLogo}
                    alt="Kernel Audit Auditores"
                    style={{ height: '2.2rem', filter: 'brightness(0)', opacity: 0.8 }}
                />
            </span>
        </div>
    );
}
