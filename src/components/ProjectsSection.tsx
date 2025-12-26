import { useState } from "react";
import { ArrowRight, FolderOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { weeksData } from "@/data/weeks";

const ITEMS_PER_PAGE = 4;

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(weeksData.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleWeeks = weeksData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="proyectos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mi <span className="gradient-text">Cuaderno</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora mi trabajo académico organizado por semanas. Cada semana
            incluye proyectos con objetivos, aprendizajes y recursos utilizados.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
          <Button
            variant="outline"
            size="lg"
            onClick={goToPrevious}
            className="group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline ml-2">Anterior</span>
          </Button>

          {/* Page Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir a página ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={goToNext}
            className="group"
          >
            <span className="hidden sm:inline mr-2">Siguiente</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Page Info */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">
            Semanas {startIndex + 1} -{" "}
            {Math.min(startIndex + ITEMS_PER_PAGE, weeksData.length)} de{" "}
            {weeksData.length}
          </p>
        </div>

        {/* Weeks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {visibleWeeks.map((week, index) => (
            <Card
              key={week.semana}
              className="group border border-border shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div className="p-5 text-center" style={{ backgroundImage: `url('/images/week${week.semana}.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary-foreground text-xl font-bold">
                      {week.semana}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary-foreground">
                    Semana {week.semana}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="font-semibold text-foreground text-sm mb-2 line-clamp-1">
                    {week.titulo}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                    {week.descripcion}
                  </p>

                  {/* Elements count */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <FolderOpen className="w-4 h-4 text-primary" />
                    <span>
                      {week.elementos.length}{" "}
                      {week.elementos.length === 1 ? "elemento" : "elementos"}
                    </span>
                  </div>

                  {/* Button */}
                  <Link to={`/semana/${week.semana}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Ver
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Navigation */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Ir directamente a:</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {weeksData.map((week) => (
              <Link key={week.semana} to={`/semana/${week.semana}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 rounded-full hover:bg-primary hover:text-primary-foreground"
                >
                  {week.semana}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
