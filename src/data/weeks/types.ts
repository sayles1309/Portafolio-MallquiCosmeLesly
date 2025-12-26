export interface Elemento {
  titulo: string;
  tipo: string;
}

export interface WeekData {
  semana: number;
  titulo: string;
  descripcion: string;
  objetivo: string;
  queAprendi: string;
  comoAprendi: string;
  recursos: string[];
  elementos: Elemento[];
  practica?: {
    descripcion: string;
    githubUrl: string;
  };
  bibliografia?: string[];
}
