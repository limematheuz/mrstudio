export default function TestimonialCard({ text, author, title, company, avatar }) {
    return (
        <div className="testimonial-card" style={{ position: 'relative' }}>
            <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            <div style={{ display: 'flex', color: '#fbbf24', marginBottom: '1rem' }}>★★★★★</div>
            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: 1.6 }}>"{text}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #eaeaea', paddingTop: '1.5rem' }}>
                <div className="testimonial-author-avatar">{avatar || author.charAt(0)}</div>
                <div>
                    <h4 style={{ fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>{title}</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{company}</span>
                </div>
            </div>
        </div>
    );
}
