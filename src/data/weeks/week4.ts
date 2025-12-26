import { WeekData } from "./types";

export const week4: WeekData = {
  semana: 4,
  titulo: "PRACTICA: HTML + TAILWIND CSS (LISTAS, CARDS, GRID/FLEXBOX, HOVER, RESPONSIVE, GITHUB)",
  descripcion:
    "Proyecto practico para desarrollar paginas web usando HTML y Tailwind CSS, aplicando layouts responsivos con grids y flexbox. Incluye diseno de listas tipo email con iconos SVG, cards informativos con imagenes y botones con hover, y una landing con distribucion exacta. El trabajo se gestiona en GitHub en equipo mediante ramas por integrante y merge final.",
  objetivo:
    "Construir interfaces web modernas con HTML y Tailwind CSS implementando: (1) listas con asunto/remitente/vista previa usando iconos SVG, (2) cards con imagenes y botones con efectos hover, (3) distribucion de multiples cards con flexbox y separacion controlada (10px y 5px), (4) una pagina con layout exacto y efectos de opacidad en hover, y (5) responsividad por breakpoints (<480, <900, <1200 y >1200), trabajando colaborativamente con GitHub (branches + merge).",
  queAprendi:
    "Aprendi a desarrollar paginas web usando HTML y Tailwind CSS, creando disenos responsivos con grids y flexbox. Disene cards interactivas con imagenes y botones, y aprendi a aplicar efectos como cambios de color y opacidad. Tambien utilice GitHub para gestionar el proyecto y colaborar en equipo.",
  comoAprendi:
    "Aprendi a traves de trabajo en equipo y ejercicios practicos. Disenamos paginas web en grupo usando Tailwind CSS, gestionamos el proyecto en GitHub, creamos ramas para cada miembro y realizamos merges al finalizar, lo que facilito la colaboracion y el control de versiones.",
  recursos: [
    "HTML5",
    "Tailwind CSS",
    "Flexbox (Tailwind utilities)",
    "Grid (Tailwind utilities)",
    "SVG icons",
    "Hover / transitions (Tailwind)",
    "Responsive utilities (sm, md, lg, xl) + breakpoints",
    "Git",
    "GitHub (branches + merge)",
  ],
  elementos: [
    {
      titulo:
        "Page01.html (a): Disenar una lista en HTML + Tailwind con 2 iconos SVG; cada entrada muestra asunto (negrita), remitente y un fragmento de contenido. Mantener colores, formas y estilos como los ejemplos.",
      tipo: "Page01 - Lista (Email/Inbox)",
    },
    {
      titulo:
        "Page01.html (b): Disenar una segunda lista similar (HTML + Tailwind) con 2 iconos SVG, asunto en negrita, remitente y fragmento de vista previa, consistente en estilos y colores.",
      tipo: "Page01 - Lista adicional",
    },
    {
      titulo:
        "Page02.html (a): Disenar un card en HTML + Tailwind con 4 imagenes (200px y 120px) con informacion de las 10 playas mas importantes del Peru. Botones 'Share' y 'Explore' cambian a gris mas claro en hover. Distribuir los 10 cards con flexbox, separacion 10px y simetria matematica.",
      tipo: "Page02 - Cards Playas (Flexbox + Hover)",
    },
    {
      titulo:
        "Page02.html (b): Disenar un card en HTML + Tailwind (250px y 200px) con informacion de las 10 ciudades mas importantes del Peru. Boton 'Full Report' cambia a gris mas claro en hover. Distribuir 10 cards con flexbox, separacion 5px y simetria matematica.",
      tipo: "Page02 - Cards Ciudades (Flexbox + Hover)",
    },
    {
      titulo:
        "Page03.html (a): Disenar una pagina web en HTML + Tailwind con texto, fondo, colores e imagenes especificados, manteniendo distribucion exacta y coherencia visual.",
      tipo: "Page03 - Layout completo",
    },
    {
      titulo:
        "Page03.html (b): Efecto hover en imagenes: al pasar cursor, la opacidad aumenta 15% usando utilidades Tailwind (opacity + transition).",
      tipo: "Page03 - Hover Opacidad",
    },
    {
      titulo:
        "Page03.html (c): Implementar diseno responsivo ajustando distribucion para pantallas: pequeno (<480px), mediano (<900px), grande (<1200px), extra grande (>1200px), usando flexbox y reglas responsive.",
      tipo: "Page03 - Responsive Breakpoints",
    },
  ],
  practica: {
    descripcion:
      "Implementar el proyecto en 3 paginas: Page01 con listas tipo inbox (asunto/remitente/vista previa) y 2 iconos SVG por entrada, usando Tailwind y estilos consistentes. Page02 con 10 cards de playas y 10 cards de ciudades, con imagenes (200px/120px y 250px/200px), botones con hover (gris mas claro) y distribucion con flexbox (gap 10px y 5px) cuidando simetria visual. Page03 con layout exacto, imagenes con hover de opacidad (+15%) y responsividad por breakpoints. Gestionar el trabajo en GitHub con ramas por integrante y merge final.",
    githubUrl: "https://github.com/sayles1309/Practica-Calificada-02.git",
  },
  bibliografia: [
    "Tailwind CSS (docs) - https://tailwindcss.com/docs",
    "Tailwind: Flexbox - https://tailwindcss.com/docs/flex",
    "Tailwind: Grid - https://tailwindcss.com/docs/grid-template-columns",
    "Tailwind: Hover, Focus y estados - https://tailwindcss.com/docs/hover-focus-and-other-states",
    "Tailwind: Transitions - https://tailwindcss.com/docs/transition-property",
    "Tailwind: Opacity - https://tailwindcss.com/docs/opacity",
    "Tailwind: Responsive Design - https://tailwindcss.com/docs/responsive-design",
    "MDN: SVG - https://developer.mozilla.org/es/docs/Web/SVG",
    "Git Book (ES): Ramas y merge - https://git-scm.com/book/es/v2/Ramificaciones-en-Git-Ramas-en-pocas-palabras",
  ],
};
