// Unified MRStudio brand gradient (purple) applied to all isometric cards
const brandConfig = {
    background: "linear-gradient(145deg, #ede9fe 0%, #ddd6fe 20%, #c4b5fd 45%, #a78bfa 65%, #8b5cf6 80%, #7c3aed 100%)",
    shadow: "0px 20px 40px rgba(139, 92, 246, 0.35)",
    lightSpots: [
        { top: '8%', left: '60%', size: '200px', color: 'rgba(237,233,254,0.5)' },
        { top: '60%', left: '12%', size: '170px', color: 'rgba(196,181,253,0.35)' }
    ]
};

export const projectsData = [
    {
        title: "Elha Epilation Láser",
        desc: "Portales refinados para el sector de belleza, diseñados para hacer que la reserva de citas sea un proceso sencillo y fluido.",
        isIsometric: true,
        img: ["/images/elha1.avif", "/images/elha2.avif"],
        isometricConfig: {
            ...brandConfig,
            transform: { rotateX: 14, rotateY: -22, rotateZ: 4 },
            hoverTransform: { rotateX: 6, rotateY: -10, rotateZ: 1, scale: 1.05 },
            images: [
                { top: '-20%', left: '18%', width: '105%', height: '105%', zIndex: 1 },
                { top: '22%', left: '-8%', width: '95%', height: '95%', zIndex: 2 }
            ]
        },
        link: "https://elhaepilationlaser.fr/"
    },
    {
        title: "Centri Elha (Italia)",
        desc: "Consolidación de marca en Italia con una interfaz limpia, enfocada en la estética premium y servicios de belleza.",
        isIsometric: true,
        img: ["/images/centrielha1.avif"],
        isometricConfig: {
            ...brandConfig,
            transform: { rotateX: 10, rotateY: 15, rotateZ: -3 },
            hoverTransform: { rotateX: 4, rotateY: 7, rotateZ: -1, scale: 1.06 },
            images: [
                { top: '0%', left: '5%', width: '100%', height: '100%', zIndex: 1 }
            ]
        },
        link: "https://centrielha.it/"
    },
    {
        title: "RRJ Remodeling",
        desc: "Una presencia digital que genera confianza. Estructura pensada para que los usuarios encuentren lo que buscan fácilmente.",
        isIsometric: true,
        img: ["/images/rrj1.avif", "/images/rrj2.avif"],
        isometricConfig: {
            ...brandConfig,
            transform: { rotateX: 8, rotateY: -12, rotateZ: -2 },
            hoverTransform: { rotateX: 3, rotateY: -5, rotateZ: 0, scale: 1.04 },
            images: [
                { top: '-25%', left: '-12%', width: '115%', height: '115%', zIndex: 2 },
                { top: '25%', left: '25%', width: '90%', height: '90%', zIndex: 1 }
            ]
        },
        link: "https://rrjremodeling.com/"
    },
    {
        title: "Pedro's Remodeling NC",
        desc: "Digitalización local que facilita el contacto. Diseño minimalista y formularios claros para conectar con clientes.",
        isIsometric: true,
        img: ["/images/pedro1.avif", "/images/pedro2.avif"],
        isometricConfig: {
            ...brandConfig,
            transform: { rotateX: 10, rotateY: 18, rotateZ: -3 },
            hoverTransform: { rotateX: 4, rotateY: 8, rotateZ: -1, scale: 1.04 },
            images: [
                { top: '20%', left: '22%', width: '95%', height: '95%', zIndex: 2 },
                { top: '-18%', left: '-10%', width: '110%', height: '110%', zIndex: 1 }
            ]
        },
        link: "https://pedrosremodelingnc.com/"
    },
    {
        title: "Innovatic",
        desc: "Modernidad y soporte IT para empresas catalanas. Interfaz tecnológica profesional que transmite seguridad operativa y vanguardia.",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
        link: "https://innovatic.cat/"
    },
    {
        title: "Kernel Audit",
        desc: "Plataforma de auditoría y seguridad informática con diseño corporativo sólido que transmite confianza y profesionalidad.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
        link: "https://www.kernel-audit.com/"
    }
];
