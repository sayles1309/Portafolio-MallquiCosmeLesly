import { WeekData } from "./types";

export const week13: WeekData = {
  semana: 13,
  titulo: "DESARROLLO BACKEND CON PHP (LARAVEL)",
  descripcion:
    "Se desarrollo backend con PHP, entendiendo el flujo request/response en Apache, la ejecucion de PHP del lado servidor y la construccion de una aplicacion moderna con Laravel (MVC), usando rutas, controladores, vistas Blade, ORM Eloquent y estilos con Tailwind CSS.",
  objetivo:
    "Conocer el funcionamiento de PHP y el paso de parametros, y construir una aplicacion web en Laravel que registre estudiantes en MySQL mediante rutas, controlador, modelo, migraciones y una vista con Tailwind.",
  queAprendi:
    "Como funciona PHP en un servidor web, configuracion base de Apache (httpd.conf), instalacion de PHP en Windows, gestion de dependencias con Composer, conceptos clave de Laravel (Routes, Controllers, Blade, Eloquent ORM, Middleware, Artisan, Migrations/Seeds) y el flujo CRUD basico con formularios.",
  comoAprendi:
    "Siguiendo la guia de laboratorio: instale Apache y PHP, verifique versiones (php -v), instale Composer, cree un proyecto Laravel, configure .env para MySQL, genere modelo+migracion, ejecute migrate, cree controlador y rutas, y arme la vista Blade con Tailwind para registrar estudiantes.",
  recursos: [
    "Apache HTTP Server",
    "Apache Lounge",
    "Visual C++ Redistributable (VC15/VC17)",
    "PHP (ZIP Windows)",
    "httpd.conf",
    "php.ini (extensiones: mysqli, curl, zip, fileinfo, pdo_sqlite, pgsql)",
    "Composer",
    "Laravel",
    "Artisan",
    "Blade",
    "Eloquent ORM",
    "MySQL",
    "Node.js",
    "npm",
    "Tailwind CSS 3",
    "PostCSS",
    "Autoprefixer",
  ],
  elementos: [
    {
      titulo:
        "Apache actua como servidor web: recibe requests HTTP/HTTPS, ubica el contenido y devuelve la response al navegador.",
      tipo: "Servidor web (Apache)",
    },
    {
      titulo:
        "PHP se ejecuta en el servidor: el interprete procesa el codigo (formularios, BD, logica) y entrega HTML/CSS/JS ya generado al cliente.",
      tipo: "Ejecucion server-side (PHP)",
    },
    {
      titulo:
        "Composer administra dependencias por proyecto y mantiene versiones consistentes, similar a npm/pip.",
      tipo: "Gestion de dependencias (Composer)",
    },
    {
      titulo:
        "Laravel organiza el desarrollo con MVC, separando responsabilidades y facilitando mantenimiento y escalabilidad.",
      tipo: "Arquitectura MVC (Laravel)",
    },
    {
      titulo:
        "Rutas y controladores definen endpoints y la logica de negocio para atender solicitudes (GET/POST) y procesar formularios.",
      tipo: "Routing y Controllers",
    },
    {
      titulo:
        "Blade permite construir vistas reutilizables y limpias, separando presentacion de la logica.",
      tipo: "Vistas (Blade)",
    },
    {
      titulo:
        "Eloquent ORM modela tablas como clases y simplifica operaciones CRUD; migraciones versionan el esquema de BD.",
      tipo: "ORM y Migraciones (Eloquent/Migrations)",
    },
    {
      titulo:
        "Tailwind acelera la UI con clases utilitarias, manteniendo consistencia visual sin escribir mucho CSS manual.",
      tipo: "Estilos UI (Tailwind CSS)",
    },
  ],
  practica: {
    descripcion:
      "Crear un proyecto Laravel (estudiantes-app), configurar MySQL en .env, generar modelo Estudiante con migracion, ejecutar migrate, crear controlador EstudianteController con rutas GET/POST y una vista formulario.blade.php con Tailwind para registrar estudiantes (nombre, direccion, ciudad) en la tabla estudiantes.",
    githubUrl: "https://github.com/sayles1309/Semana13.git",
  },
    bibliografia: [
    "Jest Docs (testing) - https://jestjs.io/docs/getting-started",
    "SuperTest (API testing) - https://github.com/ladjs/supertest",
  ],
};