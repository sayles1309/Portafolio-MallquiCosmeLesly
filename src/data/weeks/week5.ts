import { WeekData } from "./types";

export const week5: WeekData = {
  semana: 5,
  titulo: "INTRODUCCION A REACT JS (CDN, NODE, VITE/CRA/NEXT, TOOLING)",
  descripcion:
    "Sesion introductoria a React JS como libreria de JavaScript para crear interfaces de usuario basadas en componentes reutilizables y orientadas a SPA. Se revisa el uso de React via CDN (React/ReactDOM + Babel), la instalacion de Node.js, y el ecosistema de herramientas para proyectos (Webpack, Babel, ESLint, Sass) junto con creadores de proyectos como Create React App, Vite y Next.js para reducir la 'fatiga de JavaScript'.",
  objetivo:
    "Comprender que es React y como se usa para crear SPA con componentes reutilizables; configurar un entorno de desarrollo con Node.js; ejecutar React de forma rapida con CDN o mediante un proyecto con Vite/CRA/Next; e identificar el rol de herramientas como Webpack, Babel y ESLint dentro del flujo de desarrollo.",
  queAprendi:
    "Aprendi que React es una libreria para construir interfaces con componentes reutilizables y enfoque SPA, que puede ejecutarse de forma basica con CDN (React, ReactDOM y Babel) o de forma profesional con Node y herramientas de build. Tambien aprendi el proposito de node_modules (dependencias instaladas), el rol de Webpack/Turbopack (empaquetado), Babel (transpilacion ES6/JSX) y ESLint (analisis de calidad), y que Vite/CRA/Next ayudan a evitar configuracion manual compleja.",
  comoAprendi:
    "Aprendi revisando la documentacion y siguiendo un flujo practico: primero identifique que es React y sus usos; luego probe el enfoque CDN agregando scripts y un div contenedor; despues instale Node.js LTS para usar gestores de paquetes; finalmente compare herramientas de creacion de proyectos (CRA, Vite, Next) y respondi las preguntas de investigacion sobre package.json, node_modules, archivos de inicio y el servidor interno.",
  recursos: [
    "React",
    "ReactDOM",
    "CDN (unpkg)",
    "Babel (standalone)",
    "Node.js (LTS)",
    "npm",
    "node_modules",
    "Create React App",
    "Vite",
    "Next.js",
    "Webpack / Turbopack / Rollup",
    "ESLint",
    "Sass / Scss",
    "Font Awesome",
    "Favicon",
  ],
  elementos: [
    {
      titulo:
        "React: libreria JavaScript para crear interfaces y SPA con componentes reutilizables; referencias a su documentacion y contexto historico.",
      tipo: "Conceptos base de React",
    },
    {
      titulo:
        "React con CDN: incluir React, ReactDOM y Babel; agregar <div id='mydiv'></div>; escribir JSX en <script type='text/babel'> y probar la pagina.",
      tipo: "Uso de React via CDN",
    },
    {
      titulo:
        "node_modules: directorio esencial donde se almacenan dependencias instaladas con npm install.",
      tipo: "Estructura del proyecto",
    },
    {
      titulo:
        "Instalacion de Node.js: descargar version LTS, ejecutar instalador y completar asistente para habilitar entorno de desarrollo.",
      tipo: "Instalacion de entorno",
    },
    {
      titulo:
        "Tooling: Webpack/Turbopack/Rollup (empaquetado), Babel (transpilacion ES6+/JSX), ESLint (deteccion de errores y buenas practicas), Sass/Scss (preprocesador).",
      tipo: "Herramientas de desarrollo",
    },
    {
      titulo:
        "Fatiga de JavaScript: la configuracion manual (webpack.config.js, .babelrc, .eslintrc) puede ser tediosa; se recomienda instalacion automatizada.",
      tipo: "Motivacion del uso de starters",
    },
    {
      titulo:
        "Creacion de proyectos: Create React App, Vite y Next.js como opciones principales para iniciar proyectos React con configuracion lista para desarrollo/produccion.",
      tipo: "Inicializacion de proyectos",
    },
    {
      titulo:
        "Actividad de investigacion: diferencias Vite vs CRA, que contiene package.json, para que sirve node_modules, archivo de inicio en Vite, uso de main.jsx y App.jsx, ubicacion de la libreria react, clases React/ReactDOM y limitaciones del servidor interno.",
      tipo: "Guia de practica / evaluacion",
    },
  ],
  practica: {
    descripcion:
      "1) Ejecutar un 'Hola Mundo' con React via CDN: agregar scripts de React/ReactDOM y Babel, crear el div contenedor y renderizar un componente basico. 2) Instalar Node.js LTS y crear un proyecto con Vite (o CRA/Next) para comparar estructura. 3) Documentar respuestas: diferencia Vite vs CRA, contenido de package.json, funcion de node_modules, archivo de inicio en Vite, funcion de main.jsx y App.jsx, donde se almacena React, que expone React/ReactDOM y limites del servidor interno de desarrollo.",
    githubUrl: "https://github.com/TU_USUARIO/TU_REPO",
  },
  bibliografia: [
    "Documentacion general (React) - https://es.reactjs.org/ ",
    "Inicio rapido (React) - https://es.reactjs.org/docs/getting-started.html ",
    "CDN React/ReactDOM (unpkg) - https://unpkg.com/ ",
    "Babel (docs) - https://babeljs.io/ ",
    "Babel REPL (demo) - https://babeljs.io/repl ",
    "ESLint (docs) - https://eslint.org/ ",
    "ESLint demo - https://eslint.org/demo ",
    "Node.js (descarga LTS) - https://nodejs.org/es/ ",
    "Webpack (docs) - https://webpack.js.org/ ",
    "Sass (docs) - https://sass-lang.com/ ",
    "Create React App (docs) - https://create-react-app.dev/ ",
    "Vite (docs) - https://vitejs.dev/ ",
    "Next.js (docs) - https://nextjs.org/ ",
    "Font Awesome - https://fontawesome.com/ ",
    "Favicon generator - https://favicon.io/ ",
  ],
};
