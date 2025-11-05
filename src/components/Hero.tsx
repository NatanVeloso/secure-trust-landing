import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";
import reclameAqui from "@/assets/reclame-aqui.png";

const Hero = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de fazer uma cotação de seguro."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10 dark:opacity-20"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl dark:bg-primary/10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl dark:bg-secondary/10"></div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20 px-4">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Certificada e Confiável
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Proteção séria.{" "}
              <span className="text-primary">Simples.</span> Para você.
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Planos de seguro personalizados com atendimento humano e
              transparência total. Proteja o que realmente importa.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button
              size="lg"
              className="shadow-cta hover:scale-105 transition-all text-lg h-14 px-8 dark:glow-primary"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Fale no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <div className="flex items-center gap-3 bg-card p-4 rounded-lg border shadow-sm dark:glow-card dark:bg-card/50 dark:backdrop-blur-sm">
              <img
                src={reclameAqui}
                alt="Selo Reclame AQUI"
                className="w-12 h-12 object-contain"
              />
              <div className="text-sm">
                <p className="font-semibold">Reputação RA1000</p>
                <p className="text-muted-foreground">Excelente avaliação</p>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8 pt-8 border-t">
            <div>
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Anos no mercado</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">50mil+</p>
              <p className="text-sm text-muted-foreground">Clientes atendidos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Satisfação</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative lg:block hidden animate-fade-in">
          <div className="absolute -inset-4 gradient-hero opacity-20 blur-2xl rounded-3xl dark:opacity-40"></div>
          <img
            src={heroImage}
            alt="Família protegida com seguro"
            className="relative rounded-3xl shadow-2xl w-full object-cover dark:glow-card"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
