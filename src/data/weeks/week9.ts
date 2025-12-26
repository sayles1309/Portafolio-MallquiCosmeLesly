import { WeekData } from "./types";

export const week9: WeekData = {
  semana: 9,
  titulo: "DESARROLLO BACKEND: ARQUITECTURAS WEB, SERVIDORES Y TOKENS",
  descripcion:
    "Se revisaron arquitecturas de aplicaciones web (MPA, multicapa, SPA, hibridas y hexagonal), conceptos de servidores web y hosting/cloud, administracion de dominios/DNS, configuracion basica de servidores (Apache/Tomcat), el flujo server-side y fundamentos de autenticacion basada en tokens (JWT, OAuth, SAML).",
  objetivo:
    "Comprender como se organiza y opera el backend en una aplicacion web (arquitectura, servidor, BD y seguridad) y preparar la base para desplegar aplicaciones en un servidor (Tomcat) de forma controlada.",
  queAprendi:
    "Diferencias entre MPA, SPA, hibridas y arquitectura hexagonal; que es hosting vs cloud hosting; como funciona el DNS y el dominio; parametros clave de configuracion (DocumentRoot, Listen, ServerName, DirectoryIndex, SSL, MaxClients, Timeout); flujo server-side (request, ejecucion, BD, response); conceptos de Tomcat y gestion de dependencias con Maven; y autenticacion por tokens (JWT, OAuth, SAML).",
  comoAprendi:
    "Estudiando la separata y analizando los diagramas de arquitectura; identifique componentes y configuraciones de servidor, y segui la guia de laboratorio para instalar JDK y Tomcat como base de despliegue.",
  recursos: [
    "Apache HTTP Server",
    "NGINX",
    "Apache Tomcat",
    "Node.js",
    "LAMP/LEMP",
    "MEAN/MERN",
    "XAMPP",
    "WAMP",
    "Hosting (compartido, VPS, dedicado, administrado, nube)",
    "Cloud Hosting / Cloud Computing",
    "DNS / Dominio Web",
    "who.is (verificacion de dominio)",
    "OpenJDK",
    "IntelliJ IDEA",
    "Maven",
    "Gradle",
    "JWT",
    "OAuth",
    "SAML",
  ],
  elementos: [
    {
      titulo:
        "MPA (multi page) es la web clasica: varias paginas y rutas; el navegador recarga por cada navegacion.",
      tipo: "Arquitectura MPA",
    },
    {
      titulo:
        "SPA (single page) carga una sola pagina y navega con JavaScript; el servidor se enfoca en entregar datos (JSON) y habilita otros clientes (movil).",
      tipo: "Arquitectura SPA",
    },
    {
      titulo:
        "Arquitecturas hibridas combinan MPA + SPA (por ejemplo, componentes tipo SPA manteniendo enfoque multipagina).",
      tipo: "Arquitectura hibrida",
    },
    {
      titulo:
        "Arquitectura hexagonal (puertos y adaptadores) separa dominio e infraestructura para evolucionar capas de forma independiente y testeable.",
      tipo: "Arquitectura hexagonal",
    },
    {
      titulo:
        "Un servidor web se configura con parametros como DocumentRoot, Listen, ServerName, DirectoryIndex, SSL, MaxClients y Timeout para rendimiento y seguridad.",
      tipo: "Configuracion de servidores",
    },
    {
      titulo:
        "Tomcat es un contenedor de Servlets/JSP; su estructura (bin, conf, logs, webapps, work/temp) soporta despliegue y administracion de apps Java.",
      tipo: "Servidor Tomcat",
    },
    {
      titulo:
        "Maven gestiona dependencias y el ciclo de vida (compile, test, package, install, deploy) usando pom.xml, facilitando compilar y desplegar proyectos.",
      tipo: "Maven y dependencias",
    },
    {
      titulo:
        "Autenticacion por tokens evita reenviar credenciales en cada request: se genera token, se usa en solicitudes, se valida, expira y se renueva (JWT/OAuth/SAML).",
      tipo: "Seguridad con tokens",
    },
  ],
  practica: {
    descripcion:
      "Instalar OpenJDK y configurar JAVA_HOME/PATH; instalar Apache Tomcat y validar ejecucion en localhost. (Base para desplegar aplicaciones web Java y comprender el flujo server-side).",
    githubUrl: "Desarrollado en Tom Cat",
  },
    bibliografia: [
    "Apache Tomcat: Documentacion oficial - https://tomcat.apache.org/",
    "Apache Maven: Getting Started - https://maven.apache.org/guides/getting-started/",
  ],
};