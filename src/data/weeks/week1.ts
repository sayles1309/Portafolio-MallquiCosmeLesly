import { WeekData } from "./types";

export const week1: WeekData = {
  semana: 1,
  titulo: "FUNDAMENTOS DE LA TECNOLOGIA WEB",
  descripcion:
    "Se presento el curso y la estrategia de aprendizaje basada en un portafolio publicado en GitHub Pages. Se explico el contexto de la web (clientes, servidores, frontend y backend), el rol del DNS, y los principales estandares abiertos de la Open Web Platform (HTTP/HTTPS, HTML, CSS, XML, JavaScript y Web APIs).",
  objetivo:
    "Comprender como funciona la web y sus estandares (DNS, HTTP/HTTPS, HTML, CSS, JS) e iniciar el portafolio en GitHub Pages, dominando herramientas basicas de trabajo (VS Code, Git y Emmet).",
  queAprendi:
    "Que es la Open Web Platform y sus principios, los estandares internacionales base para desarrollo web, como el DNS traduce dominios a IP, la diferencia entre frontend y backend, y el uso de VS Code con terminal y comandos Git para versionar y publicar avances.",
  comoAprendi:
    "Revisando la separata y realizando la Practica 01: use VS Code (paleta de comandos, terminal), ejecute comandos Git (init, add, commit, push) y practique Emmet y atajos para acelerar la escritura de codigo; ademas, estructure el portafolio para documentar el aprendizaje semanal.",
  recursos: [
    "Microsoft Teams",
    "Grupo de WhatsApp",
    "GitHub (GitHub Pages / Site Web Portafolio)",
    "Laptop / Internet",
    "Visual Studio Code",
    "Git (init, add, commit, checkout, push, ramas y merge)",
    "GitHub Codespaces",
    "Emmet (cheat sheet)",
    "Open Web Platform (W3C, IETF, ECMA, Unicode Consortium)",
    "HTTP/HTTPS",
    "HTML",
    "CSS",
    "XML",
    "JavaScript",
    "Web APIs",
    "SVG",
    "WebGL",
    "MathML",
    "WAI-ARIA",
    "Figma",
    "Adobe XD",
    "Gliffy",
    "Balsamiq",
    "Gravity",
  ],
  elementos: [
    {
      titulo:
        "La Open Web Platform agrupa tecnologias y estandares abiertos (W3C/IETF/ECMA/Unicode) y promueve transparencia, integracion y libertad de uso.",
      tipo: "Open Web Platform (web abierta)",
    },
    {
      titulo:
        "Los estandares base del desarrollo web incluyen HTTP/HTTPS, HTML, CSS, XML y JavaScript para estructurar, presentar e interactuar con el contenido.",
      tipo: "Estandares internacionales web",
    },
    {
      titulo:
        "DNS funciona como un directorio: traduce nombres de dominio a direcciones IP para que el navegador pueda ubicar el servidor y cargar recursos.",
      tipo: "DNS",
    },
    {
      titulo:
        "Frontend es la interfaz y experiencia del usuario (HTML/CSS/JS); backend es la logica, base de datos y APIs que hacen funcionar la aplicacion.",
      tipo: "Frontend vs Backend",
    },
    {
      titulo:
        "El portafolio en GitHub Pages permite documentar aprendizaje por semanas (temas, ejercicios, reflexion) y evidenciar progreso de manera publica.",
      tipo: "Portafolio electronico",
    },
    {
      titulo:
        "Un flujo basico con Git en VS Code (init, add, commit, push) asegura control de versiones y facilita trabajo en equipo con ramas y merge.",
      tipo: "Control de versiones (Git)",
    },
    {
      titulo:
        "UX/UI busca soluciones agradables, intuitivas y eficientes; herramientas como Figma permiten diseno y colaboracion en vivo para prototipos.",
      tipo: "UX/UI y prototipado",
    },
  ],
  practica: {
    descripcion:
      "Practica de Laboratorio 01: manejo de Visual Studio Code (areas, menus, paleta de comandos y Codespaces), uso de terminal con Git (init/add/commit/checkout/push, ramas y merge), uso de Emmet para generar codigo rapido, creacion/uso de snippets y atajos de teclado. Ademas, iniciar el portafolio en GitHub Pages con estructura (portada, sobre mi, proyectos, cuaderno por semanas, bibliografia).",
    githubUrl: "https://github.com/sayles1309/Monografia-css-Basico.git",
  },
  bibliografia: [
    "MDN: Introduccion a la Web (HTTP, clientes/servidores) - https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web",
    "MDN: Que es HTTP - https://developer.mozilla.org/es/docs/Web/HTTP/Overview",
  ],
};
