import { useParams, Link, useNavigate } from "react-router-dom";
import { getWeekByNumber } from "@/data/weeks";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Target,
  Lightbulb,
  BookOpen,
  Wrench,
  FileText,
  Code,
  GraduationCap,
  Layers,
  Github,
  ExternalLink,
} from "lucide-react";

const getTypeIcon = (tipo: string) => {
  switch (tipo) {
    case "práctica":
      return <Code className="w-4 h-4" />;
    case "proyecto":
      return <Layers className="w-4 h-4" />;
    case "tarea":
      return <FileText className="w-4 h-4" />;
    case "concepto":
      return <GraduationCap className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

const getTypeColor = (tipo: string) => {
  switch (tipo) {
    case "práctica":
      return "bg-primary/20 text-primary border-primary/30";
    case "proyecto":
      return "bg-secondary/20 text-secondary border-secondary/30";
    case "tarea":
      return "bg-accent/20 text-accent-foreground border-accent/30";
    case "concepto":
      return "bg-muted text-muted-foreground border-border";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const WeekProjects = () => {
  const { weekNumber } = useParams();
  const navigate = useNavigate();
  const currentWeek = parseInt(weekNumber || "1");
  const week = getWeekByNumber(currentWeek);

  const prevWeek = currentWeek > 1 ? currentWeek - 1 : 16;
  const nextWeek = currentWeek < 16 ? currentWeek + 1 : 1;

  if (!week) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Semana no encontrada</h1>
          <Link to="/#proyectos">
            <Button variant="gradient">Volver a Proyectos</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header - Inspired by movie profile design */}
      <div className="relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        </div>

        {/* Navigation */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/#proyectos">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Home className="w-4 h-4 mr-2" />
                Inicio
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => navigate(`/semana/${prevWeek}`)}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <span className="text-white/80 text-sm font-medium px-3">
                {currentWeek} / 16
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => navigate(`/semana/${nextWeek}`)}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-16 pt-8">
          <div className="text-center text-white">
            <div className="inline-block px-4 py-1 bg-cover bg-center backdrop-blur-sm rounded-full text-sm font-medium mb-4" style={{ backgroundImage: `url('/images/week${week.semana}.jpg')` }}>
              Semana {week.semana}
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight">
              {week.titulo}
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
              {week.descripcion}
            </p>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Objetivo */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-2">Objetivo</h3>
                <p className="text-muted-foreground leading-relaxed">{week.objetivo}</p>
              </div>
            </div>
          </div>

          {/* Qué Aprendí */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-2">¿Qué aprendí?</h3>
                <p className="text-muted-foreground leading-relaxed">{week.queAprendi}</p>
              </div>
            </div>
          </div>

          {/* Cómo Aprendí */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-2">¿Cómo aprendí?</h3>
                <p className="text-muted-foreground leading-relaxed">{week.comoAprendi}</p>
              </div>
            </div>
          </div>

          {/* Recursos */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shrink-0">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-3">Herramientas usadas</h3>
                <div className="flex flex-wrap gap-2">
                  {week.recursos.map((recurso, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-muted rounded-full text-muted-foreground font-medium"
                    >
                      {recurso}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos Section */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-border mb-8">
          <h2 className="font-serif text-2xl font-bold text-center mb-8">
            Contenido de la Semana
          </h2>
          
          {week.elementos.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {week.elementos.map((elemento, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(elemento.tipo)}`}>
                      {getTypeIcon(elemento.tipo)}
                    </div>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full border capitalize ${getTypeColor(elemento.tipo)}`}>
                      {elemento.tipo}
                    </span>
                  </div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {elemento.titulo}
                  </h4>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">
                Aún no hay elementos agregados para esta semana.
              </p>
            </div>
          )}
        </div>

        {/* Prácticas de la Semana Section */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-foreground to-foreground/80 flex items-center justify-center">
              <Github className="w-6 h-6 text-background" />
            </div>
            <h2 className="font-serif text-2xl font-bold">Prácticas de la Semana</h2>
          </div>
          
          {week.practica ? (
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {week.practica.descripcion}
              </p>
              <a
                href={week.practica.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-colors group"
              >
                <Github className="w-5 h-5" />
                Ver Proyecto en GitHub
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ) : (
            <p className="text-muted-foreground">
              Aún no hay prácticas agregadas para esta semana.
            </p>
          )}
        </div>

        {/* Bibliografía Section */}
        <section className="p-4">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" /> Bibliografía
          </h2>
          <ul className="list-disc pl-5">
            {week.bibliografia?.map((item, index) => (
              <li key={index}>{item}</li>
            )) || <p>No hay bibliografía disponible.</p>}
          </ul>
        </section>
      </div>

      {/* Footer Navigation */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to={`/semana/${prevWeek}`}>
              <Button variant="outline" size="lg" className="group">
                <ChevronLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Semana {prevWeek}
              </Button>
            </Link>

            <Link to="/#proyectos">
              <Button variant="gradient" size="lg">
                <Home className="mr-2 w-4 h-4" />
                Volver a Inicio
              </Button>
            </Link>

            <Link to={`/semana/${nextWeek}`}>
              <Button variant="outline" size="lg" className="group">
                Semana {nextWeek}
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Week Indicators */}
          <div className="flex justify-center gap-1.5 mt-8">
            {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => navigate(`/semana/${num}`)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  num === currentWeek
                    ? "bg-primary w-6"
                    : "bg-muted hover:bg-primary/50"
                }`}
                aria-label={`Ir a semana ${num}`}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WeekProjects;
