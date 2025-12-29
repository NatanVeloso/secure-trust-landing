import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Home, Heart, Briefcase, Shield, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo com coberturas personalizadas e assistência 24h.",
    features: ["Assistência 24h", "Carro reserva", "Cobertura nacional"],
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Garanta o futuro da sua família com planos flexíveis e coberturas amplas.",
    features: ["Morte e invalidez", "Doenças graves", "Renda mensal"],
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Tranquilidade para sua casa e família contra imprevistos e sinistros.",
    features: ["Incêndio e roubo", "Danos elétricos", "Vendaval"],
  },
  {
    icon: Briefcase,
    title: "Seguro Empresarial",
    description: "Soluções corporativas para proteger seu negócio e colaboradores.",
    features: ["Incêndio", "Roubo", "Vendaval"],
  },
];

const Services = () => {
  const whatsappNumber = "5511999999999";
  
  const handleServiceClick = (service: string) => {
    const message = encodeURIComponent(
      `Olá, gostaria de saber mais sobre ${service}.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const header = useScrollAnimation(0.1);
  const info = useScrollAnimation(0.1);

  return (
    <section id="servicos" className="relative py-24 bg-background overflow-hidden">
      {/* Elementos decorativos de background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Círculos concêntricos top-right */}
        <div className="absolute -top-3122 -right-32 w-96 h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-2xl"></div>
          <div className="absolute inset-24 rounded-full border border-primary/10"></div>
        </div>
        
        {/* Círculos concêntricos bottom-left */}
        <div className="absolute -bottom-1 -left-32 w-[500px] h-[500px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-secondary/5 to-transparent blur-2xl"></div>
          <div className="absolute inset-32 rounded-full border border-secondary/10"></div>
        </div>

        {/* Círculo médio flutuante */}
        <div className="absolute top-1/2 right-1/4 w-64 h-64 opacity-30">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
          <div className="absolute inset-8 rounded-full border border-primary/10"></div>
        </div>

        {/* Forma geométrica rotacionada */}
        <div className="absolute bottom-1/4 right-10 w-40 h-40 border border-primary/10 rotate-45 opacity-50"
             style={{ borderRadius: '30%' }}>
        </div>

        {/* Grid de pontos sutis */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: 'radial-gradient(circle, currentColor 1.5px, transparent 1.5px)',
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-700 ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Proteção completa para todas as áreas da sua vida
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluções personalizadas com atendimento especializado e condições competitivas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardAnim = useScrollAnimation(0.1);
            const isEven = index % 2 === 0;
            return (
              <Card
                key={index}
                ref={cardAnim.ref}
                className={`group hover:shadow-lg transition-all duration-700 hover:-translate-y-1 gradient-card border-2 ${
                  cardAnim.isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'}`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => handleServiceClick(service.title)}
                  >
                    Saiba mais
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional info */}
        <div
          ref={info.ref}
          className={`mt-16 grid md:grid-cols-3 gap-8 text-center transition-all duration-700 ${
            info.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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