import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlurEnabled, setIsBlurEnabled] = useState(true); // controla o blur manualmente

  const whatsappNumber = "5544988325210";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de fazer uma cotação de seguro.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const toggleMenu = () => {
    if (!isMenuOpen) {
      // → abrir menu: remove blur imediatamente
      setIsBlurEnabled(false);
      setIsMenuOpen(true);
    } else {
      // → fechar menu: adiciona blur só depois da animação (~300ms)
      setIsMenuOpen(false);
      setTimeout(() => {
        setIsBlurEnabled(true);
      }, 300);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      setIsBlurEnabled(true);
    }, 300);
  };

  const sanitizeAnchor = (text) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999999999] border-b transition-all duration-300",
        "dark:bg-background/90 dark:border-border/50",
        isBlurEnabled && "backdrop-blur-lg bg-background/80"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="SegX Seguros" className="h-12 w-auto dark:brightness-0 dark:invert" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Serviços", "Sobre", "Depoimentos", "FAQ", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${sanitizeAnchor(item)}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              className="shadow-md hover:shadow-cta transition-all dark:glow-primary hidden sm:inline-flex"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-4 h-4" />
                Fale Conosco
              </a>
            </Button>
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-md hover:bg-muted transition">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-[9998]",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={closeMenu}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-3/4 max-w-xs",
          "bg-white dark:bg-gray-900 border-r border-border shadow-2xl",
          "transform transition-transform duration-300 md:hidden z-[9999]",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="SegX Seguros" className="h-10 w-auto dark:brightness-0 dark:invert" />
          <button onClick={closeMenu} className="p-2 rounded-md hover:bg-muted">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-6">
          {["Serviços", "Sobre", "Depoimentos", "FAQ", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${sanitizeAnchor(item)}`}
              onClick={closeMenu}
              className="text-base font-medium hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button
            asChild
            className="mt-6 w-full shadow-md hover:shadow-cta transition-all dark:glow-primary"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 w-4 h-4" />
              Fale Conosco
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
