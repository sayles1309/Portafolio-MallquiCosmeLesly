import { WeekData } from "./types";

export const week10: WeekData = {
  semana: 10,
  titulo: "DESARROLLO BACKEND CON JSP Y API REST CON SPRING BOOT",
  descripcion:
    "Se trabajo el backend con Java usando Apache Tomcat como contenedor, JSP para generar paginas dinamicas (HTML + Java) y la base de un API REST con Spring Boot (MVC, JPA, repositorios) incluyendo gestion de dependencias con Maven.",
  objetivo:
    "Instalar y configurar OpenJDK y Apache Tomcat para ejecutar proyectos JSP, y construir un API REST con Spring Boot usando MVC y MySQL, validando endpoints y probando el CRUD con Postman.",
  queAprendi:
    "A usar Tomcat (estructura de carpetas y server.xml), entender el ciclo de ejecucion de JSP, usar sintaxis JSP (scriptlets, declaraciones y expresiones), directivas/acciones y objetos implicitos (request, response, out, session). Tambien aprendi Maven (pom.xml, dependencias y ciclo de build), conceptos de Spring (IoC, DI, beans) y crear una API REST con Spring Boot (controller, model, repository) conectada a MySQL.",
  comoAprendi:
    "Siguiendo las guias de laboratorio: instale OpenJDK, configure JAVA_HOME/PATH, instale Tomcat y ejecute ejemplos JSP (fecha/hora, formulario GET/POST, factorial y contador con session). Luego genere un proyecto Spring Boot en start.spring.io, configure application properties para MySQL, cree paquetes (controllers, models, repositories, services) y verifique el CRUD con Postman.",
  recursos: [
    "OpenJDK (java.net)",
    "Apache Tomcat",
    "Jakarta Server Pages (JSP)",
    "IntelliJ IDEA",
    "Maven (pom.xml, mvn)",
    "Spring Framework",
    "Spring Boot (start.spring.io)",
    "Spring Data JPA",
    "MySQL",
    "Postman",
    "Swagger / OpenAPI (documentacion)",
  ],
  elementos: [
    {
      titulo:
        "Tomcat funciona como contenedor de servlets y motor JSP, ejecutando aplicaciones web Java y gestionando despliegues en webapps.",
      tipo: "Servidor web y contenedor (Tomcat)",
    },
    {
      titulo:
        "El archivo server.xml define conectores, motor y hosts; parametros como port, maxThreads y connectionTimeout controlan el rendimiento del servidor.",
      tipo: "Configuracion de Tomcat (server.xml)",
    },
    {
      titulo:
        "JSP combina HTML + codigo Java: el contenedor intercepta el request, traduce/compila la pagina y devuelve la respuesta dinamica al cliente.",
      tipo: "Ejecucion de JSP",
    },
    {
      titulo:
        "Scriptlet, declaration y expression permiten insertar logica, declarar variables/metodos e imprimir valores directamente en la pagina.",
      tipo: "Sintaxis JSP",
    },
    {
      titulo:
        "Directivas (page/include/taglib) ajustan la estructura de la pagina; acciones JSP en XML controlan comportamiento del motor (incluir, redirigir, usar beans).",
      tipo: "Directivas y acciones JSP",
    },
    {
      titulo:
        "Objetos implicitos como request/response/out/session facilitan manejo de parametros, salida HTML y estado por sesion (contador de visitas).",
      tipo: "Objetos implicitos en JSP",
    },
    {
      titulo:
        "MVC separa vista, controlador y modelo: la vista inicia el flujo, el controlador procesa, y el modelo interactua con datos para devolver resultados.",
      tipo: "Arquitectura MVC",
    },
    {
      titulo:
        "Maven estandariza el proyecto con pom.xml, resuelve dependencias, compila, empaqueta y permite deploy/redeploy a Tomcat con comandos.",
      tipo: "Gestion de dependencias (Maven)",
    },
    {
      titulo:
        "Spring aplica IoC y DI: el container crea y administra beans, reduce acoplamiento y facilita configuracion y escalabilidad.",
      tipo: "Spring: IoC y DI",
    },
    {
      titulo:
        "Spring Boot simplifica configuracion y dependencias, integra servidor embebido y acelera el desarrollo de APIs REST con controladores y repositorios JPA.",
      tipo: "Spring Boot y API REST",
    },
  ],
  practica: {
    descripcion:
      "Lab 09: instalar OpenJDK y Tomcat; crear una app JSP que muestre fecha/hora, use formularios GET/POST, calcule factorial y cuente visitas con session (saludo por hora). Lab 10: crear proyecto Spring Boot (Maven), configurar MySQL, implementar modelo Estudiante + Repository + Controller y probar CRUD en Postman. Practica calificada: API REST de Docente con CRUD, filtros (ciudad, experiencia), edad promedio, validaciones, Swagger, excepciones globales y paginacion.",
    githubUrl: "https://github.com/sayles1309/Semana10.git",
  },
    bibliografia: [
    "Jakarta Servlet (overview) - https://jakarta.ee/specifications/servlet/",
    "Jakarta Pages (JSP) - https://jakarta.ee/specifications/pages/",
  ],
};