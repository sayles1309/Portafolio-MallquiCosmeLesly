import { Download, Mail } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen gradient-hero flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-slide-up">
            <p className="text-primary font-medium mb-2 tracking-wide">
              ¡Hola!
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Soy{" "}
              <span className="gradient-text">Lesly Briyith</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary font-medium mb-6">
              Web Designer
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Soy estudiante de Ingeniería de Sistemas en la UNCP, me apasiona
              el desarrollo de software, la gestión de proyectos y las
              tecnologías de redes. A través de este portafolio comparto algunos
              de mis trabajos y proyectos académicos, con el objetivo de seguir
              aprendiendo, aplicando mis conocimientos y aportando soluciones
              innovadoras.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
  <a href="/CV_Mallqui_Cosme_Lesly.pdf" download>
    <Download className="mr-2" />
    Descargar CV
  </a>
</Button>

            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -inset-4 rounded-full gradient-bg opacity-20 blur-2xl animate-pulse-glow" />
              <div className="absolute -inset-2 rounded-full border-2 border-primary/20" />
              
              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-float">
                <img
                  src="/foto.jpg"
                  alt="Foto de Lesly Briyith"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-secondary opacity-60 animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-primary opacity-60 animate-float" style={{ animationDelay: "2s" }} />
              <div className="absolute top-1/4 -left-8 w-4 h-4 rounded-full bg-secondary-light opacity-80 animate-float" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
