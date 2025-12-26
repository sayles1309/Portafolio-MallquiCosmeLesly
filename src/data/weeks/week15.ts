import { WeekData } from "./types";

export const week15: WeekData = {
  semana: 15,
  titulo: "DESARROLLO WEB DE SISTEMAS INTELIGENTES",
  descripcion: "Los sistemas inteligentes son entidades computacionales capaces de percibir su entorno, procesar información, razonar y ejecutar acciones de forma autónoma, con el objetivo de alcanzar metas definidas.",
  objetivo: "Desarrollar un sistema inteligente básico en Python (reglas IF-THEN y/o control difuso) e integrarlo en una app web con Flask para interactuar con un LLM (Llama 3).",
  queAprendi: "A crear clases y herencia, implementar decisiones con reglas IF-THEN, usar lógica difusa con scikit-fuzzy y consumir un modelo Llama 3 desde una interfaz web (rutas Flask + frontend).",
  comoAprendi: "Siguiendo la guía de laboratorio: construí el proyecto en Python paso a paso, programé la lógica de decisión, instalé librerías necesarias y levanté la app Flask probando entradas y salidas.",
  recursos: ["numpy", "scikit-fuzzy (skfuzzy)", "Flask", "torch", "transformers", "python-dotenv"],
  elementos: [
    { titulo: "La arquitectura define la estructura y la interacción de los componentes del sistema, permitiendo una integración coherente de sus capacidades cognitivas.", tipo: "Arquitectura de los sistemas inteligentes" },
    { titulo: "Las redes neuronales constituyen modelos computacionales inspirados en la estructura del cerebro humano, diseñados para el procesamiento paralelo y adaptativo de información.", tipo: "Redes neuronales artificiales" },
    { titulo: "El deep learning es una subdisciplina del aprendizaje automático que emplea arquitecturas de redes neuronales profundas con múltiples capas ocultas para representar funciones de alta complejidad.", tipo: "Aprendizaje profundo" },
    { titulo: "Son algoritmos que permiten a los sistemas inteligentes seleccionar acciones óptimas en función de objetivos, restricciones y conocimiento del entorno.", tipo: "Algoritmo de toma de decisiones" },
    { titulo: "Son algoritmos diseñados para clasificar datos de entrada en categorías. En términos estadísticos, modelan la probabilidad condicional P(y|x), es decir, la probabilidad de una etiqueta y dada una observación x.", tipo: "Clasificacion de modelos de Deep Learning" },
  ],
  practica: {
    descripcion: "Implementar una interfaz web funcional con Flask y tecnologías frontend (HTML, CSS, JavaScript) que permita la interacción dinámica con el modelo Llama 3 de Meta, ejecutado localmente mediante la librería Transformers de Hugging Face.",
    githubUrl: "https://github.com/sayles1309/Semana15.git",
  },
  bibliografia: [
    "React: Documentacion oficial - https://react.dev/",
    "Vite: Guia - https://vitejs.dev/guide/",
  ],
};
