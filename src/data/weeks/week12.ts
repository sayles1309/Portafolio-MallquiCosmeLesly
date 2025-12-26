import { WeekData } from "./types";

export const week12: WeekData = {
  semana: 12,
  titulo: "REVISION DE TAREA: JSP (SESION) Y API REST (SPRING BOOT)",
  descripcion:
    "Revision de la tarea enfocada en validar que los ejercicios cumplen requisitos: JSP con session (contador + saludo por hora) ejecutando en Tomcat, y API REST en Spring Boot con MySQL (CRUD + endpoints extra) documentada y probada.",
  objetivo:
    "Verificar y corregir la implementacion de los ejercicios: asegurar funcionamiento en Tomcat (JSP) y consistencia tecnica de la API (Spring Boot) con validaciones, documentacion, manejo de errores y pruebas.",
  queAprendi:
    "A revisar entregables con criterios claros: revisar session y flujo request/response en JSP, y auditar una API REST (rutas, codigos HTTP, validaciones, excepciones, paginacion y Swagger) antes de darla por final.",
  comoAprendi:
    "Comparando cada requisito con el codigo y evidencias: ejecute el JSP varias veces para validar el contador, probe endpoints en Postman (CRUD y extras), revise logs/errores y ajuste configuracion de BD y respuestas HTTP.",
  recursos: [
    "Apache Tomcat",
    "JSP (session, request/response, out)",
    "OpenJDK",
    "IntelliJ IDEA",
    "Spring Boot",
    "Spring Web",
    "Spring Data JPA",
    "MySQL",
    "Postman",
    "Swagger / OpenAPI",
  ],
  elementos: [
    {
      titulo:
        "Checklist JSP: el contador debe ser por sesion (session.getAttribute / setAttribute) y aumentar al refrescar; mostrar fecha/hora y saludo segun rango horario.",
      tipo: "Revision funcional (JSP)",
    },
    {
      titulo:
        "Checklist JSP: evitar errores por null (inicializar contador), y mantener todo en un solo archivo si asi lo pide la consigna.",
      tipo: "Revision de robustez (JSP)",
    },
    {
      titulo:
        "Checklist API: rutas CRUD completas (GET lista, GET por id, POST crear, PUT actualizar, DELETE eliminar) con codigos HTTP correctos.",
      tipo: "Revision de endpoints (CRUD)",
    },
    {
      titulo:
        "Checklist API: endpoints adicionales deben responder correctamente (filtro ciudad, filtro experiencia minima, edad promedio) y retornar formatos consistentes (JSON).",
      tipo: "Revision de endpoints extra",
    },
    {
      titulo:
        "Checklist API: validaciones (email valido, fechaNacimiento < hoy, tiempoServicio >= 0) y mensajes de error claros.",
      tipo: "Validaciones",
    },
    {
      titulo:
        "Checklist API: manejo global de excepciones (404 si no existe, 400 si valida mal) con estructura uniforme de error.",
      tipo: "Excepciones y errores",
    },
    {
      titulo:
        "Checklist API: paginacion funcional con page y size, y Swagger operativo para documentar y probar rapidamente.",
      tipo: "Paginacion y documentacion",
    },
    {
      titulo:
        "Checklist pruebas: coleccion Postman con casos OK y casos de error (datos incompletos, email invalido, id inexistente).",
      tipo: "Pruebas (Postman)",
    },
  ],
  practica: {
    descripcion:
      "Revision final: (1) Ejecutar registroVisitas.jsp en Tomcat y comprobar contador por sesion, fecha/hora y saludo por hora. (2) Probar la API Docente en Postman: CRUD + filtros + edad promedio + paginacion; validar codigos HTTP y respuestas. (3) Confirmar Swagger activo y manejo global de errores. (4) Ajustar configuracion MySQL (conexion, tablas/migraciones) y repetir pruebas hasta que todo pase el checklist.",
    githubUrl: "https://github.com/sayles1309/Semana12.git",
  },
    bibliografia: [
    "Prisma Docs (ORM) - https://www.prisma.io/docs",
    "Hibernate ORM Docs - https://hibernate.org/orm/documentation/",
  ],
};