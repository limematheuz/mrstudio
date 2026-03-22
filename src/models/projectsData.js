export const projectsData = [
    {
        title: "RRJ Remodeling",
        desc: "Una presencia digital que genera confianza. Estructura pensada para que los usuarios encuentren lo que buscan fácilmente.",
        isIsometric: true,
        img: ["/images/rrj1.avif", "/images/rrj2.avif"],
        isometricConfig: {
            background: "linear-gradient(145deg, #1a1a1a 0%, #2d0a0a 30%, #b91c1c 70%, #ef4444 100%)",
            shadow: "0px 20px 40px rgba(185, 28, 28, 0.5)",
            transform: { rotateX: 12, rotateY: -20, rotateZ: -3 },
            hoverTransform: { rotateX: 5, rotateY: -10, rotateZ: -1, scale: 1.05 },
            images: [
                { top: '-20%', left: '-5%', zIndex: 2 },
                { top: '20%', left: '20%', zIndex: 1 }
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
            background: "linear-gradient(160deg, #0c4a6e 0%, #0ea5e9 40%, #bae6fd 80%, #f0f9ff 100%)",
            shadow: "0px 20px 40px rgba(14, 165, 233, 0.35)",
            transform: { rotateX: 15, rotateY: 25, rotateZ: -5 },
            hoverTransform: { rotateX: 5, rotateY: 15, rotateZ: -2, scale: 1.05 },
            images: [
                { top: '-10%', left: '20%', zIndex: 1 },
                { top: '15%', left: '-15%', zIndex: 2 }
            ]
        },
        link: "https://pedrosremodelingnc.com/"
    },
    {
        title: "Elha Epilation Láser",
        desc: "Portales refinados para el sector de belleza, diseñados para hacer que la reserva de citas sea un proceso sencillo y fluido.",
        isIsometric: true,
        img: ["/images/elha1.avif", "/images/elha2.avif"],
        isometricConfig: {
            background: "linear-gradient(135deg, #fdf2f8 0%, #ecd4d4 35%, #d4a0a0 70%, #eadddc 100%)",
            shadow: "0px 20px 40px rgba(212, 160, 160, 0.6)",
            transform: { rotateX: 20, rotateY: -25, rotateZ: 5 },
            hoverTransform: { rotateX: 10, rotateY: -15, rotateZ: 2, scale: 1.05 },
            images: [
                { top: '-15%', left: '-10%', zIndex: 1 },
                { top: '15%', left: '15%', zIndex: 2 }
            ]
        },
        link: "https://elhaepilationlaser.fr/"
    },
    {
        title: "Centri Elha (Italia)",
        desc: "Consolidación de marca en Italia con una interfaz limpia, enfocada en la estética premium y servicios de belleza.",
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200",
        link: "https://centrielha.it/"
    },
    {
        title: "Innovatic",
        desc: "Modernidad y soporte IT para empresas catalanas. Interfaz tecnológica profesional que transmite seguridad operativa y vanguardia.",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
        link: "https://innovatic.cat/"
    }
];
