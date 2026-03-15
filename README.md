# Documentación del Proyecto: Arquitectura Frontend MVC

Esta arquitectura ha sido recientemente refactorizada para implementar principios **Model-View-Controller (MVC)** adaptados al flujo unidireccional de React. El objetivo central es mantener una alta cohesión técnica y una clara separación de responsabilidades para favorecer la mantenibilidad y el crecimiento futuro del portal.

## Estructura de Directorios (`/src`)

```
src/
├── animations/        # Lógica de animaciones complejas (GSAP)
├── assets/            # Archivos estáticos globales (fuentes, iconos puntuales)
├── components/        # Vistas Reutilizables (El "View" de MVC)
│   ├── common/        # Componentes compartidos (Header, Footer, ContactForm)
│   └── home/          # Componentes específicos de la Home (Hero, ServiceCards)
├── models/            # Datos y Tipos (El "Model" estático)
│   ├── projectsData.js 
│   └── servicesData.js
├── pages/             # Controladores de Orquestación o "Views Principales"
│   └── Home.jsx 
├── services/          # Lógica de Negocio y APIs (El "Controller" de servicios)
│   └── contactService.js
├── styles/            # Sistema de Estilos Desacoplado
│   ├── tokens.css     # Variables base (colores, fuentes, spacing)
│   ├── global.css     # Estilos estructurales y tipografía
│   └── components.css # (Opcional) Estilos particulares
└── main.jsx           # Entry point
```

## Guía Básica: Añadir Funcionalidades

### 1. Añadir Datos Nuevos (Ej: Un Nuevo Caso de Éxito)
Si un usuario o developer requiere sumar un nuevo proyecto a la lista de "Casos de éxito", **NO debe editar** el componente UI (`Home.jsx` o `ProjectGridCard.jsx`).
Debe dirigirse a `src/models/projectsData.js` y añadir el objeto al array. Esto garantiza que la gestión de datos se mantenga independiente de la pintura en el DOM.

### 2. Actualizar Lógica de Negocios (FormSubmit/Email)
La orquestación de envíos (requests) reside exclusivamente en `/services/`. Si mañana se cambia a un proveedor distinto (como Serverless, AWS o un CMS Backend), solo debes alterar la promesa de fetch en `src/services/contactService.js`. El componente Visual `ContactForm.jsx` ignorará este cambio bajo el capó.

### 3. Modificaciones de Diseño Visual
Todas las directivas visuales (Colores Primarios, Paddings Genéricos y Radios) existen como tokens CSS en `src/styles/tokens.css`. Antes de insertar CSS inline o valores en pixeles duros, **verifica siempre si existe un token equivalente** (ej: `var(--accent-color)` o `var(--radius-card)`).

## Decisiones Técnicas: "Mobile First" y Responsive
Esta estructura está pensada para ser **Mobile First**. La base CSS (`global.css` y las media queries) asumen un formato vertical y los breakpoints adaptan la experiencia progresivamente a Tablet y Desktop, minimizando la carga visual en dispositivos con pantallas restringidas.
