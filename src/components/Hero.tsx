import { Button } from "@/components/ui/button";
import reclameAqui from "@/assets/reclame-aqui.png";
import iconeSemFundo from "@/assets/iconesemfundo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Shield, CheckCircle2, Star } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de fazer uma cotação de seguro."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const badge = useScrollAnimation(0.1);
  const title = useScrollAnimation(0.1);
  const description = useScrollAnimation(0.1);
  const cta = useScrollAnimation(0.1);
  const stats = useScrollAnimation(0.1);
  const bgImage = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Grid futurista de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Partículas grandes */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/15 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-primary/25 rounded-full blur-sm"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-primary/20 rounded-full blur-sm"></div>

        {/* Gradiente de fundo */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Animated Image Background */}
      <div
        ref={bgImage.ref}
        className={`absolute inset-0 flex items-center justify-start pl-20 md:pl-40 pointer-events-none transition-all duration-1000 delay-200 ${bgImage.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
      >
        <div className="relative">
          {/* Círculo de brilho atrás da imagem */}
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <img
            src={iconeSemFundo}
            alt=""
            className="w-[300px] md:w-[400px] opacity-10 dark:opacity-20 relative z-10"
            style={{
              animation: 'spin3d 20s linear infinite',
              transform: 'rotate(-15deg)',
              filter: 'drop-shadow(0 0 80px rgba(var(--primary), 0.3))'
            }}
          />
        </div>
      </div>

      {/* Decorative glowing shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse dark:from-primary/20"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse dark:from-secondary/20" style={{ animationDelay: '1s' }}></div>

      <div className="container relative z-10 flex items-center justify-center py-20 px-4">
        {/* Content - Centralized */}
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div
            ref={badge.ref}
            className={`inline-flex items-center gap-2 px-5 py-2.5 mt-5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/20 backdrop-blur-sm transition-all duration-700 ${badge.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Líder em Proteção e Confiança
            </span>
            <Star className="w-4 h-4 text-primary fill-primary" />
          </div>

          <div className="space-y-6">
            <h1
              ref={title.ref}
              className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] transition-all duration-700 delay-100 ${title.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Segurança{" "}
              <span className="text-primary relative inline-block">
                inteligente
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
              </span>
              <br />
              para o seu futuro
            </h1>
            <p
              ref={description.ref}
              className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${description.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Tecnologia, transparência e atendimento humanizado.
              <br className="hidden md:block" />
              Proteja sua família, seu patrimônio e seus sonhos com quem entende do assunto.
            </p>
          </div>

          {/* Features rápidas */}
          <div
            ref={cta.ref}
            className={`flex flex-wrap items-center justify-center gap-6 text-sm transition-all duration-700 delay-250 ${cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Cotação em minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Sem burocracia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Suporte 24/7</span>
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-5 items-center justify-center transition-all duration-700 delay-300 ${cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <Button
              size="lg"
              className="shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all text-lg h-16 px-10 bg-gradient-to-r from-primary to-primary/90 dark:glow-primary group"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Faça sua Cotação Grátis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-md p-4 rounded-xl border-2 shadow-lg hover:shadow-xl transition-all dark:bg-card/50 dark:border-primary/20">
              <img
                src={reclameAqui}
                alt="Selo Reclame AQUI"
                className="w-14 h-14 object-contain"
              />
              <div className="text-sm text-left">
                <p className="font-bold flex items-center gap-1">
                  Reputação RA1000
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                </p>
                <p className="text-muted-foreground">Excelente avaliação</p>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div
            ref={stats.ref}
            className={`grid grid-cols-3 gap-8 pt-12 border-t border-border/50 max-w-3xl mx-auto transition-all duration-700 delay-500 ${stats.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                15+
              </p>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Anos de experiência</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                50k+
              </p>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Clientes protegidos</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                98%
              </p>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Satisfação garantida</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin3d {
          from {
            transform: rotateY(0deg) rotate(-15deg);
          }
          to {
            transform: rotateY(360deg) rotate(-15deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;