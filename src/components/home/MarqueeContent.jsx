export default function MarqueeContent() {
    const items = ["RRJ Remodeling", "Pedro's Remodeling NC", "ELHA EPILATION", "Centri Elha", "Elha Depilación", "INNOVATIC"];
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
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
        </div>
    );
}
