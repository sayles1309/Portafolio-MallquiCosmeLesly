import { WeekData } from "./types";

export const week7: WeekData = {
  semana: 7,
  titulo: "HOOKS Y GESTION DE ESTADO EN REACT",
  descripcion:
    "Se estudio el uso de Hooks en React (desde la version 16.8) para manejar estado y ciclo de vida en componentes funcionales, incluyendo useState, useEffect, useContext, useReducer, custom hooks y navegacion con React Router (useNavigate, useParams), asi como buenas practicas de state management.",
  objetivo:
    "Aplicar Hooks en React para gestionar estado, efectos y comparticion de datos entre componentes, construyendo componentes funcionales mas mantenibles y escalables.",
  queAprendi:
    "Que es un Hook y por que reemplaza gran parte de componentes de clase; uso de useState (incluyendo objetos), useEffect (mount, post-render, updates y dependencias), useContext para estado global sin props drilling, useReducer para estados complejos, custom hooks para reutilizar logica, y navegacion/parametros con useNavigate y useParams.",
  comoAprendi:
    "Revisando la separata y practicando los ejemplos: inicialice estados con useState, ejecute efectos con dependencias, cree un Provider/Consumer con Context, modele estado complejo con reducer+dispatch y replique logica reutilizable mediante custom hooks.",
  recursos: [
    "React 16.8+",
    "Hooks (useState, useEffect, useContext, useReducer, useRef)",
    "React Router DOM 6 (useNavigate, useParams)",
    "JavaScript",
    "Fetch API",
    "Jinja/No (N/A) - solo frontend React",
    "Referencia: etatvasoft.com (React state management)",
  ],
  elementos: [
    {
      titulo:
        "Los Hooks permiten usar estado y ciclo de vida en componentes funcionales, reduciendo la necesidad de componentes de clase.",
      tipo: "Concepto de Hooks (React 16.8+)",
    },
    {
      titulo:
        "useState define una propiedad de estado y su setter; al cambiar el valor, React re-renderiza automaticamente el componente.",
      tipo: "Hook useState",
    },
    {
      titulo:
        "useEffect ejecuta logica en eventos del componente: mount (deps []), post-render (sin deps) y updates (deps con estados).",
      tipo: "Hook useEffect",
    },
    {
      titulo:
        "useContext permite compartir datos y funciones como estado global usando Provider/Consumer, evitando pasar props entre muchos niveles.",
      tipo: "Hook useContext",
    },
    {
      titulo:
        "useReducer administra estado complejo mediante un reducer (state, action) y dispatch, siendo una alternativa a useState cuando hay multiples cambios relacionados.",
      tipo: "Hook useReducer",
    },
    {
      titulo:
        "Los custom hooks encapsulan una sola pieza de logica reutilizable (ej. useFetch) siguiendo buenas practicas de nombre, dependencias y pruebas.",
      tipo: "Custom Hooks",
    },
    {
      titulo:
        "useNavigate simplifica la navegacion en React Router DOM 6 y reemplaza hooks anteriores como useHistory/useLocation para manejar historial y cambios de URL.",
      tipo: "Navegacion (useNavigate)",
    },
    {
      titulo:
        "useParams devuelve pares clave/valor de parametros dinamicos de la URL que coinciden con el path de un <Route>, util para vistas detalle (ej. /productos/:id).",
      tipo: "Parametros de ruta (useParams)",
    },
  ],
  practica: {
    descripcion:
      "Implementar un formulario CRUD para una tabla productos (idproduct, nameproduct, description, price, photo) usando useContext para compartir estado global y useReducer para manejar acciones (ADD, UPDATE, DELETE, LOAD). Complementar con useEffect para cargar datos y useNavigate/useParams para navegar entre lista y detalle/edicion.",
    githubUrl: ".....................",
  },
    bibliografia: [
    "MDN: Metodos HTTP (GET, POST, PUT, DELETE) - https://developer.mozilla.org/es/docs/Web/HTTP/Methods",
    "Postman Learning Center: API testing - https://learning.postman.com/",
  ],
};