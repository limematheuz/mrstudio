import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHomeAnimations() {
    // 1. Accessibility Check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        // If reduced motion is preferred, ensure all target elements are fully visible immediately
        gsap.set('.hero-anim-item', { opacity: 1, y: 0 });
        gsap.set('.service-card, .project-grid-card, .trust-badge', { opacity: 1, y: 0, scale: 1 });
        return;
    }

    const isMobile = window.matchMedia("(max-width: 480px)").matches;

    // --- A: HERO ANIMATIONS (Fade In) ---
    // Note: The typewriter effect itself is handled in the React component via local useGSAP 
    // to map over the character array smoothly. We handle the generic items here.
    gsap.fromTo('.hero-anim-item', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out", delay: 0.2 }
    );

    // --- B & C: SCROLL ANIMATIONS & BUILD-IN MOUNTS ---
    ScrollTrigger.matchMedia({
        // Desktop & Tablet
        "(min-width: 769px)": function() {
            // 1. Services Cards
            gsap.from('.service-card', {
                y: 30,
                scale: 0.98,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.services-container',
                    start: "top 80%",
                    once: true
                }
            });

            // 2. Trust Badges
            gsap.from('.trust-badge', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.trust-badges',
                    start: "top 85%",
                    once: true
                }
            });

            // 3. Projects Grid
            gsap.from('.project-grid-card', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.projects-grid', /* Fixed typo from .project-grid */
                    start: "top 75%",
                    once: true
                }
            });

            // 4. White Cards (Features/Benefits)
            gsap.from('.bg-gradient-brand .white-card', {
                y: 25,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.bg-gradient-brand .services-container',
                    start: "top 80%",
                    once: true
                }
            });

            // 5. Testimonials
            gsap.from('.testimonial-card', {
                y: 20,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.testimonial-grid',
                    start: "top 85%",
                    once: true
                }
            });
        },

        // Mobile (Subtle translations and faster times to avoid scroll jank/fatigue)
        "(max-width: 768px)": function() {
            const mobileDefaults = {
                y: 15,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
            };

            gsap.from('.service-card',      { ...mobileDefaults, scrollTrigger: { trigger: '.services-container', start: "top 85%", once: true } });
            gsap.from('.project-grid-card', { ...mobileDefaults, scrollTrigger: { trigger: '.projects-grid', start: "top 85%", once: true } });
            gsap.from('.bg-gradient-brand .white-card', { ...mobileDefaults, scrollTrigger: { trigger: '.bg-gradient-brand .services-container', start: "top 85%", once: true } });
            gsap.from('.testimonial-card',  { ...mobileDefaults, scrollTrigger: { trigger: '.testimonial-grid', start: "top 85%", once: true } });
        }
    });
}
