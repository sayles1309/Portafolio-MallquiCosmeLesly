import { WeekData } from "./types";

export const week8: WeekData = {
  semana: 8,
  titulo: "PARCIAL 01: HTML + CSS PURO (UI, ANIMACIONES, RESPONSIVE, GIT)",
  descripcion:
    "Practica calificada en equipos de 3 para construir 4 paginas (index, page01, page02, page03) usando solo HTML y CSS (sin librerias). Se trabaja por ramas en GitHub y el lider realiza el merge final para entregar el link en Teams. Incluye animaciones (floating label, cards 3D), drag & drop de imagen, sliders RGB y diseno responsive con flexbox + media queries.",
  objetivo:
    "Desarrollar interfaces web con HTML y CSS puro, aplicando animaciones y responsividad, e integrando una estructura de trabajo colaborativo con GitHub (ramas por integrante y merge final), cumpliendo los requisitos de cada pagina (page01, page02, page03 e index).",
  queAprendi:
    "A maquetar ventanas y cards con una UI limpia en HTML/CSS puro, crear animaciones de formularios (floating label con cambio de color), implementar drag & drop de imagen mostrando el nombre/ruta, sincronizar sliders e inputs numericos para controlar un color RGB, aplicar hover con cambio de opacidad en imagenes, y construir un index con cards 3D que giran 180 grados. Tambien aprendi a trabajar en equipo con ramas y merge en GitHub.",
  comoAprendi:
    "Use el enunciado como checklist: (1) flujo GitHub (repo, ramas, trabajo por integrante, merge), (2) page01 primero (estructura + estilos + animacion del label + drag&drop), (3) page02 agregando el card RGB con actualizacion en tiempo real, (4) page03 replicando la distribucion y aplicando responsive por breakpoints, y (5) index con cards 3D enlazadas. Verifique cada requisito comparando con la referencia del PDF y probando en el navegador.",
  recursos: [
    "HTML5",
    "CSS3",
    "JavaScript (para drag&drop y sliders)",
    "SVG icons",
    "Flexbox",
    "Media Queries",
    "CSS Transforms 3D (rotateX/rotateY)",
    "CSS Transitions",
    "Git",
    "GitHub (branches + merge)",
  ],
  elementos: [
    {
      titulo:
        "Trabajo en equipo: lider crea repo GitHub, crea 3 ramas (apellido-apellido), cada integrante trabaja en su rama, lider hace merge y entrega link en Teams.",
      tipo: "Gestion de versiones (Git/GitHub)",
    },
    {
      titulo:
        "page01.html: ventana con 4 iconos SVG y formulario (3 text field, 1 checkbox, 2 button) solo con HTML y CSS (sin librerias).",
      tipo: "Maquetacion UI (HTML/CSS puro)",
    },
    {
      titulo:
        "page01.html: animacion floating label: al hacer click/focus en un text field (ej. Email), el label sube y cambia el color del texto y la linea inferior de blanco a celeste agua.",
      tipo: "Animaciones CSS (inputs)",
    },
    {
      titulo:
        "page01.html: agregar campo image del mismo ancho que los text field, altura 50px, icono SVG centrado; soporta drag & drop y muestra el pathname/nombre del archivo.",
      tipo: "Interaccion (Drag & Drop)",
    },
    {
      titulo:
        "page02.html: repetir la ventana del formulario (igual que page01) y agregar debajo un card de 2 partes: (1) preview de color con bordes redondeados, (2) 3 sliders + 3 inputs numericos (0-255) que cambian el color.",
      tipo: "UI + Control RGB",
    },
    {
      titulo:
        "page03.html: landing con texto/fondo/imagenes similares y misma distribucion; hover: al pasar el mouse una imagen aumenta su opacidad en 10%.",
      tipo: "Landing + Hover effects",
    },
    {
      titulo:
        "page03.html: diseno responsive con flexbox y media queries para: pequeno <480px, mediano <900px, grande <1200px y extra >1200px.",
      tipo: "Responsive Design",
    },
    {
      titulo:
        "index.html: pagina principal con 3 cards animados que vinculan a page1, page2 y page3; cada card gira 180 grados sobre eje horizontal e incluye eje vertical (3D flip).",
      tipo: "Animaciones 3D + Navegacion",
    },
  ],
  practica: {
    descripcion:
      "Implementar la Practica Calificada 2 con 4 paginas: (1) index.html con 3 cards 3D enlazadas a page01/page02/page03; (2) page01.html con ventana, 4 SVG, formulario, floating labels y campo image con drag&drop; (3) page02.html con la misma ventana + card RGB (preview + sliders + inputs 0-255 sincronizados); (4) page03.html landing con galeria, hover de opacidad y responsive por breakpoints. Todo sin librerias (solo HTML/CSS y JS minimo para drag&drop y RGB). Trabajo en GitHub por ramas y merge final del lider.",
    githubUrl: "https://github.com/sayles1309/Parcial.git",
  },
  bibliografia: [
    "MDN: Formularios HTML - https://developer.mozilla.org/es/docs/Learn/Forms",
    "MDN: Pseudo-clase :focus - https://developer.mozilla.org/es/docs/Web/CSS/:focus",
    "MDN: Drag and Drop API - https://developer.mozilla.org/es/docs/Web/API/HTML_Drag_and_Drop_API",
    "MDN: <input type='range'> - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range",
    "MDN: Flexbox - https://developer.mozilla.org/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox",
    "MDN: Media Queries - https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries",
    "MDN: CSS Transforms (3D) - https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
    "MDN: CSS Transitions - https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
    "MDN: SVG (conceptos) - https://developer.mozilla.org/es/docs/Web/SVG",
    "Git Book (ES): Ramas y merge - https://git-scm.com/book/es/v2/Ramificaciones-en-Git-Ramas-en-pocas-palabras",
  ],
};
