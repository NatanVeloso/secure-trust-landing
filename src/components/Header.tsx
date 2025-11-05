import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de fazer uma cotação de seguro."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b dark:bg-background/90 dark:border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="SEG X Seguros" className="h-12 w-auto dark:brightness-0 dark:invert" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#servicos"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#depoimentos"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild className="shadow-md hover:shadow-cta transition-all dark:glow-primary">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-4 h-4" />
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
