import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Car, Home, Heart, Briefcase, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useRef } from "react";

const services = [
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo com coberturas personalizadas e assistência 24h.",
    features: ["Assistência 24h", "Carro reserva", "Cobertura nacional"],
    color: {
      gradient: "from-blue-500/10 via-transparent to-transparent",
      border: "border-blue-200/50 dark:border-blue-800/30 hover:border-blue-400/50",
      glow: "hover:shadow-blue-500/20",
      icon: "bg-blue-100 dark:bg-blue-900/50",
      iconHover: "group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/30",
      iconText: "text-blue-600 dark:text-blue-400 group-hover:text-white",
      accent: "bg-blue-500",
      button: "hover:bg-blue-500 hover:text-white hover:border-blue-500",
    },
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Garanta o futuro da sua família com planos flexíveis e coberturas amplas.",
    features: ["Morte e invalidez", "Doenças graves", "Renda mensal"],
    color: {
      gradient: "from-rose-500/10 via-transparent to-transparent",
      border: "border-rose-200/50 dark:border-rose-800/30 hover:border-rose-400/50",
      glow: "hover:shadow-rose-500/20",
      icon: "bg-rose-100 dark:bg-rose-900/50",
      iconHover: "group-hover:bg-rose-500 group-hover:shadow-lg group-hover:shadow-rose-500/30",
      iconText: "text-rose-600 dark:text-rose-400 group-hover:text-white",
      accent: "bg-rose-500",
      button: "hover:bg-rose-500 hover:text-white hover:border-rose-500",
    },
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Tranquilidade para sua casa e família contra imprevistos e sinistros.",
    features: ["Incêndio e roubo", "Danos elétricos", "Vendaval"],
    color: {
      gradient: "from-amber-500/10 via-transparent to-transparent",
      border: "border-amber-200/50 dark:border-amber-800/30 hover:border-amber-400/50",
      glow: "hover:shadow-amber-500/20",
      icon: "bg-amber-100 dark:bg-amber-900/50",
      iconHover: "group-hover:bg-amber-500 group-hover:shadow-lg group-hover:shadow-amber-500/30",
      iconText: "text-amber-600 dark:text-amber-400 group-hover:text-white",
      accent: "bg-amber-500",
      button: "hover:bg-amber-500 hover:text-white hover:border-amber-500",
    },
  },
  {
    icon: Briefcase,
    title: "Seguro Empresarial",
    description: "Soluções corporativas para proteger seu negócio e colaboradores.",
    features: ["Incêndio", "Roubo", "Vendaval"],
    color: {
      gradient: "from-emerald-500/10 via-transparent to-transparent",
      border: "border-emerald-200/50 dark:border-emerald-800/30 hover:border-emerald-400/50",
      glow: "hover:shadow-emerald-500/20",
      icon: "bg-emerald-100 dark:bg-emerald-900/50",
      iconHover: "group-hover:bg-emerald-500 group-hover:shadow-lg group-hover:shadow-emerald-500/30",
      iconText: "text-emerald-600 dark:text-emerald-400 group-hover:text-white",
      accent: "bg-emerald-500",
      button: "hover:bg-emerald-500 hover:text-white hover:border-emerald-500",
    },
  },
];

// Componente ServiceCard FORA do Services
const ServiceCard = ({
  service,
  index,
  onServiceClick,
}: {
  service: typeof services[0];
  index: number;
  onServiceClick: (title: string) => void;
}) => {
  const Icon = service.icon;
  const cardAnim = useScrollAnimation(0.1);
  const isEven = index % 2 === 0;

  return (
    <Card
      ref={cardAnim.ref}
      className={`group relative overflow-hidden 
        bg-card border-2 ${service.color.border} 
        shadow-sm hover:shadow-2xl ${service.color.glow}
        hover:-translate-y-2 transition-all duration-300
        h-full ${
          cardAnim.isVisible
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${isEven ? "-translate-x-12" : "translate-x-12"}`
        }`}
      style={{
        transitionDelay: cardAnim.isVisible ? "0ms" : `${index * 150}ms`,
      }}
    >
      {/* Gradiente sutil no topo */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color.gradient} pointer-events-none`} />

      {/* Linha decorativa no topo */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${service.color.accent} opacity-80`} />

      <CardHeader className="relative">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 
          transition-all duration-300 ${service.color.icon} ${service.color.iconHover}`}
        >
          <Icon className={`w-7 h-7 transition-colors duration-300 ${service.color.iconText}`} />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="text-base">{service.description}</CardDescription>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${service.color.accent}`} />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className={`w-full border-2 transition-all duration-300 ${service.color.button}`}
          onClick={() => onServiceClick(service.title)}
        >
          Saiba mais
        </Button>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const whatsappNumber = "5544988325210";
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = (service: string) => {
    const messages: Record<string, string> = {
      "Seguro Auto":
        "Olá! Vim através do site e gostaria de receber mais informações sobre o *Seguro Auto*. Pode me ajudar com os planos e coberturas disponíveis?",
      "Seguro de Vida":
        "Olá! Vim através do site e gostaria de receber mais informações sobre o *Seguro de Vida*. Pode me ajudar com os planos e coberturas disponíveis?",
      "Seguro Residencial":
        "Olá! Vim através do site e gostaria de receber mais informações sobre o *Seguro Residencial*. Pode me ajudar com os planos e coberturas disponíveis?",
      "Seguro Empresarial":
        "Olá! Vim através do site e gostaria de receber mais informações sobre o *Seguro Empresarial*. Pode me ajudar com os planos e coberturas disponíveis?",
    };

    const message = encodeURIComponent(messages[service] || `Olá, gostaria de saber mais sobre ${service}.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = touchStart - touchEnd;
    const minSwipe = 50;

    if (diff > minSwipe) {
      nextSlide();
    } else if (diff < -minSwipe) {
      prevSlide();
    }
  };

  const header = useScrollAnimation(0.1);
  const info = useScrollAnimation(0.1);

  return (
    <section id="servicos" className="relative py-24 bg-background overflow-hidden">
      {/* Elementos decorativos de background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-2xl"></div>
          <div className="absolute inset-24 rounded-full border border-primary/10"></div>
        </div>

        <div className="absolute -bottom-1 -left-32 w-[500px] h-[500px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-secondary/5 to-transparent blur-2xl"></div>
          <div className="absolute inset-32 rounded-full border border-secondary/10"></div>
        </div>

        <div className="absolute top-1/2 right-1/4 w-64 h-64 opacity-30">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
          <div className="absolute inset-8 rounded-full border border-primary/10"></div>
        </div>

        <div
          className="absolute bottom-1/4 right-10 w-40 h-40 border border-primary/10 rotate-45 opacity-50"
          style={{ borderRadius: "30%" }}
        ></div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-700 ${
            header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Proteção completa para <span className="text-gradient">todas as áreas da sua vida</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos as melhores coberturas do mercado com atendimento personalizado e preços que cabem no seu bolso.
          </p>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              onServiceClick={handleServiceClick}
            />
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          <div
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card
                      className={`group relative overflow-hidden transition-all duration-300 
                        bg-card border-2 ${service.color.border} shadow-sm h-full`}
                    >
                      {/* Gradiente sutil */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color.gradient} pointer-events-none`}
                      />

                      {/* Linha decorativa no topo */}
                      <div className={`absolute top-0 left-0 right-0 h-1 ${service.color.accent} opacity-80`} />

                      <CardHeader className="relative">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${service.color.icon}`}>
                          <Icon className={`w-7 h-7 ${service.color.iconText.split(" ")[0]}`} />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="relative space-y-4">
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${service.color.accent}`} />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full border-2"
                          onClick={() => handleServiceClick(service.title)}
                        >
                          Saiba mais
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Setas de navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-background border-2 border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-background border-2 border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicadores (dots) */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div
          ref={info.ref}
          className={`mt-16 grid md:grid-cols-3 gap-8 text-center transition-all duration-700 ${
            info.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-2">
            <Users className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-semibold text-lg">Atendimento Personalizado</h3>
            <p className="text-sm text-muted-foreground">
              Consultores especializados para ajudar na melhor escolha
            </p>
          </div>
          <div className="space-y-2">
            <Shield className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-semibold text-lg">Seguradoras Confiáveis</h3>
            <p className="text-sm text-muted-foreground">
              Parceria com as principais seguradoras do Brasil
            </p>
          </div>
          <div className="space-y-2">
            <Heart className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-semibold text-lg">Suporte Contínuo</h3>
            <p className="text-sm text-muted-foreground">
              Acompanhamento em todas as etapas e na hora do sinistro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;