import { Code, Palette, Briefcase, GraduationCap, Heart, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skills = [
  { icon: Code, label: "Desarrollo Web", color: "text-primary" },
  { icon: Palette, label: "Diseño UI/UX", color: "text-secondary" },
  { icon: Briefcase, label: "Gestión de Proyectos", color: "text-primary" },
  { icon: GraduationCap, label: "Ingeniería de Sistemas", color: "text-secondary" },
];

const interests = [
  "Desarrollo de Software",
  "Tecnologías de Redes",
  "Diseño Web",
  "Innovación Tecnológica",
  "Soluciones Creativas",
  "Trabajo en Equipo",
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                ¡Hola! Soy <span className="text-primary font-semibold">Lesly Briyith</span>, 
                estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú (UNCP).
              </p>
              <p>
                Me apasiona el mundo del desarrollo de software y el diseño web. 
                Disfruto creando soluciones innovadoras que combinan funcionalidad y estética.
              </p>
              <p>
                A través de este portafolio, comparto mi viaje académico y profesional, 
                mostrando proyectos que reflejan mi dedicación al aprendizaje continuo 
                y mi compromiso con la excelencia.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                    <span className="font-medium text-sm">{skill.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Interests */}
          <div className="animate-fade-in">
            <Card className="border border-border shadow-card overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="gradient-bg p-6 text-center">
                  <Heart className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                    Mis Intereses
                  </h3>
                </div>
                
                {/* Interests List */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium border border-border hover:border-primary/50 transition-colors duration-300"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="px-6 pb-6">
                  <div className="bg-muted/50 rounded-xl p-4 text-center border border-border/50">
                    <Star className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground italic text-sm">
                      "Siempre buscando aprender algo nuevo y aportar soluciones 
                      innovadoras a cada proyecto."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
