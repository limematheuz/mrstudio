export const projectsData = [
    {
        title: "RRJ Remodeling",
        desc: "Una presencia digital que genera confianza. Estructura pensada para que los usuarios encuentren lo que buscan fácilmente.",
        isIsometric: true,
        img: ["/images/rrj1.avif", "/images/rrj2.avif"],
        isometricConfig: {
            background: "linear-gradient(145deg, #0f0f0f 0%, #1a0505 25%, #7f1d1d 55%, #dc2626 85%, #f87171 100%)",
            shadow: "0px 20px 40px rgba(220, 38, 38, 0.5)",
            lightSpots: [
                { top: '10%', left: '15%', size: '180px', color: 'rgba(239,68,68,0.25)' },
                { top: '70%', left: '75%', size: '140px', color: 'rgba(248,113,113,0.15)' }
            ],
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
            background: "linear-gradient(170deg, #0c4a6e 0%, #075985 20%, #0ea5e9 50%, #7dd3fc 80%, #f0f9ff 100%)",
            shadow: "0px 20px 40px rgba(14, 165, 233, 0.4)",
            lightSpots: [
                { top: '5%', left: '60%', size: '200px', color: 'rgba(125,211,252,0.3)' },
                { top: '65%', left: '10%', size: '160px', color: 'rgba(56,189,248,0.2)' }
            ],
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
        title: "Elha Epilation Láser",
        desc: "Portales refinados para el sector de belleza, diseñados para hacer que la reserva de citas sea un proceso sencillo y fluido.",
        isIsometric: true,
        img: ["/images/elha1.avif", "/images/elha2.avif"],
        isometricConfig: {
            background: "linear-gradient(135deg, #fdf2f8 0%, #f9d4e0 25%, #d4a0a0 50%, #c08080 75%, #eadddc 100%)",
            shadow: "0px 20px 40px rgba(192, 128, 128, 0.5)",
            lightSpots: [
                { top: '15%', left: '70%', size: '170px', color: 'rgba(253,242,248,0.4)' },
                { top: '60%', left: '20%', size: '130px', color: 'rgba(212,160,160,0.25)' }
            ],
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
            background: "linear-gradient(140deg, #1a0a08 0%, #7c2d12 30%, #FF563D 60%, #ffcfc7 85%, #fff5f2 100%)",
            shadow: "0px 20px 40px rgba(255, 86, 61, 0.45)",
            lightSpots: [
                { top: '20%', left: '50%', size: '200px', color: 'rgba(255,207,199,0.3)' },
                { top: '70%', left: '15%', size: '120px', color: 'rgba(255,86,61,0.15)' }
            ],
            transform: { rotateX: 10, rotateY: 15, rotateZ: -3 },
            hoverTransform: { rotateX: 4, rotateY: 7, rotateZ: -1, scale: 1.06 },
            images: [
                { top: '0%', left: '5%', width: '100%', height: '100%', zIndex: 1 }
            ]
        },
        link: "https://centrielha.it/"
    },
    {
        title: "Innovatic",
        desc: "Modernidad y soporte IT para empresas catalanas. Interfaz tecnológica profesional que transmite seguridad operativa y vanguardia.",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
        link: "https://innovatic.cat/"
    }
];
