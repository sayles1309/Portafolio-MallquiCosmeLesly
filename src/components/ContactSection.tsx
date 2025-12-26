import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Gmail",
    value: "leslybriyith1309@gmail.com",
    href: "mailto:leslybriyith1309@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+51 968313238",
    href: "tel:+51968313238",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Huancayo, Perú",
    href: "#",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/sayles1309", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarme. Te responderé pronto.",
    });
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Contáctame</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ¿Tienes algún proyecto en mente o simplemente quieres saludar? 
            ¡Me encantaría escucharte!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border border-border/50 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a
                        href={info.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-muted-foreground mb-4">Sígueme en redes sociales:</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-soft transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 gradient-bg opacity-10 blur-3xl rounded-full" />
                <Card className="border border-border/50 shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center">
                      <Send className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <p className="text-muted-foreground">
                      Estoy disponible para colaboraciones y oportunidades.
                      ¡No dudes en escribirme!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="border border-border shadow-card">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium mb-2"
                      >
                        Nombre
                      </label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="asunto"
                      className="block text-sm font-medium mb-2"
                    >
                      Asunto
                    </label>
                    <Input
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      placeholder="¿En qué puedo ayudarte?"
                      required
                      className="border-border focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium mb-2"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                      required
                      className="border-border focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gradient" size="lg" className="w-full">
                    <Send className="mr-2 w-4 h-4" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
