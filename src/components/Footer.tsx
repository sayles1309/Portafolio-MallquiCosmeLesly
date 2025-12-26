import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg font-bold gradient-text">
            Lesly Briyith
          </p>
          
          <p className="text-muted-foreground text-sm">
            Portafolio Académico
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
