import { WeekData } from "./types";

export const week6: WeekData = {
  semana: 6,
  titulo: "COMPONENTES EN REACT, JSX, PROPS Y ESTILOS",
  descripcion:
    "Se estudio como React renderiza el DOM usando Virtual DOM (diffing y reconciliacion), la creacion e invocacion de componentes (clase y funcion), el uso de JSX y TypeScript, el paso de datos con props y children, renderizado condicional y bucles con map, y formas de aplicar estilos (CSS, CSS Modules, inline) incluyendo configuracion de Tailwind en proyectos Vite.",
  objetivo:
    "Construir interfaces en React mediante componentes reutilizables, dominando JSX, props/children y estilos, para desarrollar aplicaciones mantenibles y con mejor organizacion de la UI.",
  queAprendi:
    "ReactDOM.render y el flujo Virtual DOM -> diffing -> reconciliacion; que es un componente y reglas de nombre (inicia en mayuscula); componentes de clase vs funcion; JSX (variables, expresiones, atributos, condicionales, map, fragment/div); tipado basico con TypeScript; props y children para transferir datos; y estilos con CSS, CSS Modules, inline y Tailwind.",
  comoAprendi:
    "Revisando la separata y replicando los ejemplos: cree componentes en .jsx/.tsx, renderice contenido con ReactDOM.render, pase datos con props y children, aplique condicionales/iteraciones en JSX, y configure estilos con CSS y Tailwind en un proyecto Vite.",
  recursos: [
    "React",
    "ReactDOM.render",
    "JSX",
    "Babel (transpilacion JSX)",
    "TypeScript",
    "CSS",
    "CSS Modules (*.module.css)",
    "Inline styles",
    "Vite",
    "npm / npx",
    "Tailwind CSS",
    "PostCSS",
    "Autoprefixer",
  ],
  elementos: [
    {
      titulo:
        "React crea un Virtual DOM; cuando cambia un componente genera otro, compara (diffing) y actualiza solo lo necesario en el DOM real (reconciliacion).",
      tipo: "Virtual DOM, diffing y reconciliacion",
    },
    {
      titulo:
        "Un componente es una unidad de interfaz/logica reutilizable; en React debe iniciar con letra mayuscula y puede estar en .js/.jsx/.ts/.tsx.",
      tipo: "Concepto y reglas de componentes",
    },
    {
      titulo:
        "Los componentes pueden ser de clase o funcion; los de funcion requieren menos codigo y son mas faciles de mantener.",
      tipo: "Tipos de componentes",
    },
    {
      titulo:
        "JSX mezcla JavaScript y HTML: permite variables y expresiones dentro de {}, asignar atributos dinamicos y ejecutar logica simple de renderizado.",
      tipo: "JSX y expresiones",
    },
    {
      titulo:
        "El renderizado condicional se logra con if (fuera del JSX), operador ternario o el operador && para mostrar contenido segun una condicion.",
      tipo: "Renderizado condicional",
    },
    {
      titulo:
        "map permite iterar arrays/objetos para renderizar listas de elementos/componentes de forma declarativa.",
      tipo: "Renderizado de listas con map",
    },
    {
      titulo:
        "Props transfieren datos del padre al hijo; children permite enviar contenido dentro de la etiqueta del componente.",
      tipo: "Transferencia de datos (props y children)",
    },
    {
      titulo:
        "Los estilos pueden aplicarse con CSS global, CSS Modules o inline; Tailwind se integra configurando paths y directivas @tailwind en el CSS base.",
      tipo: "Estilos en React y Tailwind",
    },
  ],
  practica: {
    descripcion:
      "Desarrollar: (1) una app responsiva con 7 componentes (uno por seccion) usando CSS puro; (2) componentes anidados (4 niveles) pasando un objeto {nombre, direccion, ciudad} del componente 1 al 4 y mostrando en un card; (3) paso de datos de hijo a padre; (4) paso de datos entre hermanos; (5) renderizar un arreglo de estudiantes en tabla y cards con estilos.",
    githubUrl: ".....................",
  },
    bibliografia: [
    "Node.js Docs: Introduccion - https://nodejs.org/es/docs",
    "Express: Guia oficial - https://expressjs.com/es/",
  ],
};
