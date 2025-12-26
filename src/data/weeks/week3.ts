import { WeekData } from "./types";

export const week3: WeekData = {
  semana: 3,
  titulo: "PRACTICA: HTML + CSS PURO (FORMULARIOS, ANIMACIONES, RGB, RESPONSIVE, GITHUB)",
  descripcion:
    "Proyecto practico usando solo HTML y CSS (sin librerias adicionales) para construir Page01, Page02 y Page03. Incluye una ventana con iconos SVG y formulario, animacion de floating label al enfocar inputs, un campo de imagen con drag and drop, un card RGB con sliders e inputs numericos (0-255) y una landing con hover en imagenes. Se gestiona el trabajo en GitHub con ramas por integrante y merge final.",
  objetivo:
    "Desarrollar paginas web con HTML y CSS puro aplicando: (1) formularios y UI limpia, (2) animaciones de inputs (floating label + cambio de color), (3) campo image con drag and drop, (4) control RGB con sliders e inputs 0-255, y (5) diseno responsivo con Flexbox y Media Queries (breakpoints: <480, <900, <1200 y >1200), trabajando colaborativamente con GitHub (ramas y merge).",
  queAprendi:
    "Aprendi a desarrollar paginas web utilizando HTML y CSS, sin librerias adicionales, para crear formularios, animaciones y disenos responsivos con Flexbox y Media Queries. Tambien aprendi a gestionar proyectos con GitHub, creando ramas para cada miembro del equipo y realizando merges al finalizar.",
  comoAprendi:
    "Aprendi mediante trabajo en equipo, realizando casos practicos en los que desarrollamos paginas web con interactividad. Utilizamos GitHub para gestionar el proyecto y Visual Studio Code para escribir el codigo, aprendiendo a colaborar y controlar versiones de manera efectiva.",
  recursos: [
    "HTML5",
    "CSS3",
    "Flexbox",
    "Media Queries",
    "SVG icons",
    "Transitions / Animaciones CSS",
    "Drag and Drop (si se usa JS minimo)",
    "Sliders <input type='range'>",
    "Git",
    "GitHub (branches + merge)",
    "Visual Studio Code",
  ],
  elementos: [
    {
      titulo:
        "Page01.html (a): Disenar una ventana en HTML y CSS puro (sin librerias) con 4 iconos SVG y un formulario con 3 text field, 1 checkbox y 2 buttons.",
      tipo: "Page01 - UI Form",
    },
    {
      titulo:
        "Page01.html (b): Al hacer click/focus en cualquier text field (ej. Email), el label se desplaza hacia arriba (floating label) y cambia de color el texto y la linea inferior de blanco a celeste agua.",
      tipo: "Page01 - Animacion Floating Label",
    },
    {
      titulo:
        "Page01.html (c): Agregar un campo image del mismo ancho que los text field, altura 50px, icono SVG centrado; responder al drag and drop de una imagen y mostrar el pathname del archivo.",
      tipo: "Page01 - Campo Image (Drag & Drop)",
    },
    {
      titulo:
        "Page02.html (a): Disenar una ventana en HTML y CSS puro (sin librerias) con 4 iconos SVG y un formulario con 3 text field, 1 checkbox y 2 buttons.",
      tipo: "Page02 - UI Form",
    },
    {
      titulo:
        "Page02.html (b): Debajo del formulario, disenar un card de 2 partes: Parte 1 un rectangulo con bordes redondeados que muestra el color; Parte 2 con 3 sliders y 3 text field numericos (0-255) que al mover los sliders cambian el color (RGB).",
      tipo: "Page02 - Card RGB",
    },
    {
      titulo:
        "Page03.html (a): Disenar una pagina web (landing) en HTML y CSS puro con texto, fondo, colores e imagenes parecidas manteniendo la distribucion solicitada.",
      tipo: "Page03 - Landing Layout",
    },
    {
      titulo:
        "Page03.html (b): Al colocar el cursor sobre una imagen, aumenta su opacidad en 10%.",
      tipo: "Page03 - Hover Opacidad",
    },
    {
      titulo:
        "Page03.html (c): Diseno responsivo con Flexbox y Media Queries para: pequeno <480px, mediano <900px, grande <1200px y extra >1200px.",
      tipo: "Page03 - Responsive Breakpoints",
    },
    {
      titulo:
        "Volver: incorporar navegacion para regresar (por ejemplo, a index.html o pagina principal).",
      tipo: "Navegacion",
    },
  ],
  practica: {
    descripcion:
      "Implementar Page01, Page02 y Page03 con HTML/CSS puro: Page01 con ventana, 4 SVG, formulario, floating label y campo image drag&drop; Page02 con la misma ventana + card RGB (preview + sliders + inputs 0-255); Page03 landing con hover opacidad y responsive por breakpoints. Agregar enlaces para 'Volver' a la pagina principal. Gestionar el proyecto en GitHub con ramas por integrante y merge final.",
    githubUrl: "https://github.com/sayles1309/Practica-Calificada-01.git",
  },
  bibliografia: [
    "MDN: Formularios HTML - https://developer.mozilla.org/es/docs/Learn/Forms",
    "MDN: :focus - https://developer.mozilla.org/es/docs/Web/CSS/:focus",
    "MDN: Transitions - https://developer.mozilla.org/es/docs/Web/CSS/transition",
    "MDN: Flexbox - https://developer.mozilla.org/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox",
    "MDN: Media Queries - https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries",
    "MDN: <input type='range'> - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range",
    "MDN: Opacity - https://developer.mozilla.org/es/docs/Web/CSS/opacity",
    "MDN: SVG - https://developer.mozilla.org/es/docs/Web/SVG",
    "MDN: Drag and Drop API - https://developer.mozilla.org/es/docs/Web/API/HTML_Drag_and_Drop_API",
    "Git Book (ES): Ramas y merge - https://git-scm.com/book/es/v2/Ramificaciones-en-Git-Ramas-en-pocas-palabras",
  ],
};
