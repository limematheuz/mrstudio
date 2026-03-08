import { useEffect, useRef } from 'react';

export default function CursorGlow() {
    const glowRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });
    const hasMoved = useRef(false);

    useEffect(() => {
        let requestId;

        const updatePosition = (e) => {
            if (!hasMoved.current) {
                pos.current.x = e.clientX;
                pos.current.y = e.clientY;
                hasMoved.current = true;
                if (glowRef.current) {
                    glowRef.current.style.opacity = '1';
                }
            }
            target.current.x = e.clientX;
            target.current.y = e.clientY;
        };

        const animate = () => {
            if (glowRef.current && hasMoved.current) {
                // Smooth interpolation for the trailing effect
                pos.current.x += (target.current.x - pos.current.x) * 0.1;
                pos.current.y += (target.current.y - pos.current.y) * 0.1;

                glowRef.current.style.left = `${pos.current.x}px`;
                glowRef.current.style.top = `${pos.current.y}px`;
            }
            requestId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', updatePosition);
        requestId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            if (requestId) cancelAnimationFrame(requestId);
        };
    }, []);

    return <div ref={glowRef} className="cursor-glow" style={{ opacity: 0 }} />;
}
