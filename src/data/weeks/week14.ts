import { WeekData } from "./types";

export const week14: WeekData = {
  semana: 14,
    titulo: "DESARROLLO BACKEND CON PYTHON",
  descripcion:
    "Se abordo el desarrollo backend con Python, desde la base (sintaxis, PEP-8 y dependencias con pip) hasta el despliegue web con Apache y mod_wsgi, y la construccion de una aplicacion Flask con plantillas Jinja2 y conexion a MySQL.",
  objetivo:
    "Configurar un entorno backend con Python y servidor web (Apache + mod_wsgi) y desarrollar una app web en Flask que procese formularios y registre datos en MySQL usando buenas practicas de codigo.",
  queAprendi:
    "El rol de Apache como servidor web, como integrar apps Python con mod_wsgi (WSGI), fundamentos de Python (POO, control de flujo, archivos), gestion de paquetes con pip, estilo PEP-8, rutas en Flask, render_template y plantillas con Jinja2, y conexion a MySQL con PyMySQL.",
  comoAprendi:
    "Siguiendo la guia de laboratorio: instale y configure Apache, agregue mod_wsgi, practique POO con clases Persona/Estudiante, y construui una app Flask con formulario HTML que inserta registros en MySQL mediante una capa de conexion.",
  recursos: [
    "Apache HTTP Server (Apache Lounge)",
    "Visual C++ Redistributable (VC15/VC17)",
    "Python 3.x",
    "pip",
    "mod_wsgi",
    "Flask",
    "Jinja2",
    "PyMySQL",
    "MySQL",
    "HTML",
    "Documentacion: python.org / docs.python.org",
    "Documentacion: flask.palletsprojects.com",
  ],
  elementos: [
    {
      titulo:
        "Apache recibe requests HTTP/HTTPS y responde entregando contenido (HTML, imagenes, archivos), actuando como la puerta de entrada del sistema web.",
      tipo: "Servidor Web Apache",
    },
    {
      titulo:
        "mod_wsgi permite ejecutar aplicaciones Python dentro de Apache mediante el estandar WSGI, facilitando el despliegue de Flask o Django sin servidores intermedios.",
      tipo: "Integracion WSGI con mod_wsgi",
    },
    {
      titulo:
        "pip gestiona dependencias desde PyPI (instalar, listar y actualizar paquetes), asegurando reproducibilidad del entorno de desarrollo.",
      tipo: "Gestion de dependencias con pip",
    },
    {
      titulo:
        "PEP-8 estandariza estilo (indentacion, nombres, longitud de linea e importaciones) para mantener codigo legible y mantenible.",
      tipo: "Buenas practicas PEP-8",
    },
    {
      titulo:
        "Flask organiza el backend con rutas (@app.route), request/response y render_template para construir apps ligeras basadas en el protocolo WSGI.",
      tipo: "Framework Flask",
    },
    {
      titulo:
        "Jinja2 separa presentacion y logica: variables, condicionales, bucles y herencia de plantillas para generar HTML dinamico.",
      tipo: "Motor de plantillas Jinja2",
    },
    {
      titulo:
        "La POO (clases, herencia y sobreescritura) modela entidades como Persona y Estudiante para reutilizar y escalar la logica del sistema.",
      tipo: "POO aplicada al backend",
    },
  ],
  practica: {
    descripcion:
      "Practica 1: crear clases Persona y Estudiante (herencia y metodos). Practica 2: desarrollar una app Flask con formulario HTML que capture nombre, direccion y ciudad, y guarde los datos en una tabla MySQL usando PyMySQL; ejecutar y probar en localhost.",
    githubUrl: "https://github.com/sayles1309/Semana14.git",
  },
    bibliografia: [
    "Docker Docs: Get Started - https://docs.docker.com/get-started/",
    "Nginx Docs (reverse proxy) - https://docs.nginx.com/",
  ],
};
