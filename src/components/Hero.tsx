import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const content = useScrollAnimation(0.1);
  const illustration = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-blue-600 dark:from-primary/90 dark:via-primary/80 dark:to-blue-800">
      {/* Shapes decorativos de fundo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-400/20 rounded-full translate-x-1/2" />

      {/* Pattern de dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container relative z-10 pt-32 pb-20 px-4 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado esquerdo - Conteúdo */}
          <div
            ref={content.ref}
            className={`space-y-8 transition-all duration-700 ${content.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            {/* Título */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
                Cote, compare e
                <br />
                economize com{" "}
                <span className="text-white underline decoration-yellow-300 decoration-4 underline-offset-4">segurança</span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100/90 max-w-lg leading-relaxed">
                Tenha um <strong className="text-white">corretor exclusivo</strong> para te ajudar junto às{" "}
                <strong className="text-white">melhores seguradoras do Brasil!</strong>
              </p>
            </div>

            {/* CTA Principal */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="h-14 px-10 text-base font-semibold bg-white text-primary hover:bg-blue-50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                asChild
              >
                <Link to="/cotacao">
                  Cote grátis!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Features em lista */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <span className="text-white/90">
                  Sem spam e sem ligações chatas
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <span className="text-white/90">
                  Cotação gratuita e sem compromisso
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <span className="text-white/90">
                  Atendimento humanizado 24/7
                </span>
              </div>
            </div>
          </div>

          {/* Lado direito - Escudo */}
          <div
            ref={illustration.ref}
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${illustration.isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
              }`}
          >
            <div className="relative">
              {/* Card branco de fundo */}
              <div className="bg-white/95 dark:bg-slate-800/95 rounded-3xl shadow-2xl p-8 sm:p-12">
                {/* Escudo SVG */}
                <div className="relative w-[280px] sm:w-[320px] h-[320px] sm:h-[360px] flex items-center justify-center">
                  {/* Blob de fundo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[95%] h-[90%] bg-gradient-to-br from-blue-100 to-primary/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" />
                  </div>

                  {/* Escudo principal */}
                  <svg
                    viewBox="0 0 200 240"
                    className="relative z-10 w-[180px] sm:w-[220px] h-[216px] sm:h-[264px] drop-shadow-2xl"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Sombra do escudo */}
                    <defs>
                      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0066cc" />
                        <stop offset="100%" stopColor="#0044aa" />
                      </linearGradient>
                      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
                      </filter>
                    </defs>

                    {/* Escudo */}
                    <path
                      d="M100 0L200 40V120C200 180 150 220 100 240C50 220 0 180 0 120V40L100 0Z"
                      fill="url(#shieldGradient)"
                      filter="url(#shadow)"
                    />

                    {/* Brilho interno */}
                    <path
                      d="M100 10L190 46V120C190 174 144 210 100 228C56 210 10 174 10 120V46L100 10Z"
                      fill="none"
                      stroke="white"
                      strokeOpacity="0.3"
                      strokeWidth="2"
                    />

                    {/* Check dentro do escudo */}
                    <path
                      d="M60 120L90 150L145 85"
                      stroke="white"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>

                  {/* Ícones flutuantes */}
                  <div className="absolute top-2 right-2 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDuration: '3s' }}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>

                  <div className="absolute top-1/3 -right-3 w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center animate-pulse shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                    </svg>
                  </div>

                  <div className="absolute bottom-1/3 -left-3 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500" fill="currentColor">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                    </svg>
                  </div>

                  <div className="absolute bottom-4 right-4 w-11 h-11 bg-red-100 rounded-xl flex items-center justify-center animate-pulse shadow-lg" style={{ animationDelay: '1s' }}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-500" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>

                  <div className="absolute top-4 left-4 w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-purple-600" fill="currentColor">
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                    </svg>
                  </div>
                </div>

                {/* Stats abaixo do escudo */}
                <div className="flex justify-center gap-8 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-primary">+15 mil</p>
                    <p className="text-xs sm:text-sm text-slate-500">clientes</p>
                  </div>
                  <div className="w-px bg-slate-200 dark:bg-slate-700" />
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">98%</p>
                    <p className="text-xs sm:text-sm text-slate-500">satisfação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;