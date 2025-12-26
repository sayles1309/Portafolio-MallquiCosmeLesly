import { WeekData } from "./types";

export const week16: WeekData = {
  semana: 16,
  titulo: "EVALUACION FINAL: WEB INTELIGENTE (REACT + FLASK + MYSQL + IA)",
  descripcion:
    "Evaluacion final del curso orientada a construir una aplicacion web inteligente completa, con backend en Flask y MySQL (API, autenticacion JWT, ruta protegida y endpoint de IA) y frontend en React para registro/login, analisis de texto y visualizacion de resultados, con diseno responsive y codigo limpio.",
  objetivo:
    "Desarrollar una aplicacion web inteligente usando Flask, MySQL y React que implemente API con JWT (register, login, profile protegido) e incluya un modelo de IA para procesar texto (sentimientos o resumen) y mostrar resultados en un dashboard.",
  queAprendi:
    "A definir una API REST en Flask con endpoints claros, aplicar autenticacion con JWT y rutas protegidas, integrar un modelo de IA para analisis de texto y conectar todo con un frontend en React que gestione token en localStorage y muestre resultados con una UX limpia.",
  comoAprendi:
    "Tomando los requisitos del examen como checklist: diseñe las rutas del backend, configure BD en MySQL, integre la libreria/modelo de IA elegido y luego implemente los componentes React (registro, login, analisis y resultados) probando el flujo completo frontend-backend.",
  recursos: [
    "Python",
    "Flask",
    "MySQL",
    "JWT (autenticacion por token)",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "localStorage",
    "transformers (opcional)",
    "scikit-learn (opcional)",
    "textblob (opcional)",
  ],
  elementos: [
    {
      titulo:
        "API requerida: POST /register (registro), POST /login (login con JWT), POST /analyze-text (procesa texto con IA), GET /profile (protegida por token).",
      tipo: "Rutas del backend (Flask)",
    },
    {
      titulo:
        "Seguridad: uso de JWT para autenticar y autorizar acceso a endpoints protegidos; manejo de token desde el frontend.",
      tipo: "Autenticacion y autorizacion",
    },
    {
      titulo:
        "IA: incorporar un modelo visto en clase con librerias como transformers, scikit-learn o textblob para analisis de sentimientos o resumen de texto.",
      tipo: "Integracion de modelo IA",
    },
    {
      titulo:
        "Frontend: componentes de registro/login, area de analisis (textarea), y visualizacion de resultados; manejo de token en almacenamiento local.",
      tipo: "Componentes en React",
    },
    {
      titulo:
        "Dashboard: interfaz para gestionar y mostrar resultados del modelo de IA de forma clara y responsive.",
      tipo: "Dashboard y UX",
    },
    {
      titulo:
        "Criterios de evaluacion: seguridad (25%), IA (25%), integracion (20%), UX (15%), codigo/documentacion (15%).",
      tipo: "Rubrica de evaluacion",
    },
  ],
  practica: {
    descripcion:
      "Implementar la solucion completa por equipo: backend Flask + MySQL con JWT y endpoints (/register, /login, /profile, /analyze-text) e integrar un modelo de IA (sentimientos o resumen). Frontend React con pantallas de autenticacion, area de analisis y resultados; guardar token en localStorage y asegurar diseno responsive, documentacion y pruebas del flujo end-to-end.",
    githubUrl: "https://github.com/gianfranco25-pro/Parcial_IA.git ",
  },
    bibliografia: [
    "Flask: Quickstart - https://flask.palletsprojects.com/en/stable/quickstart/",
    "Flask-JWT-Extended: Documentation - https://flask-jwt-extended.readthedocs.io/en/stable/",
    "MySQL Connector/Python (docs) - https://dev.mysql.com/doc/connector-python/en/",
    "React (docs) - https://react.dev/",
    "MDN: Fetch API (consumo de API REST) - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
    "OWASP: JWT Cheat Sheet - https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html",
    "Hugging Face Transformers (pipeline texto) - https://huggingface.co/docs/transformers/en/pipeline_tutorial",
    "scikit-learn: Text classification - https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html",
    "TextBlob (sentiment) - https://textblob.readthedocs.io/en/dev/quickstart.html#sentiment-analysis",
  ],
};