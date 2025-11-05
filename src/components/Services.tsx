import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Home, Heart, Briefcase, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo com coberturas personalizadas e assistência 24h.",
    features: ["Assistência 24h", "Carro reserva", "Cobertura nacional"],
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Tranquilidade para sua casa e família contra imprevistos e sinistros.",
    features: ["Incêndio e roubo", "Danos elétricos", "Responsabilidade civil"],
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Garanta o futuro da sua família com planos flexíveis e coberturas amplas.",
    features: ["Morte e invalidez", "Doenças graves", "Renda mensal"],
  },
  {
    icon: Briefcase,
    title: "Seguro Empresarial",
    description: "Soluções corporativas para proteger seu negócio e colaboradores.",
    features: ["Patrimônio", "Responsabilidade", "Vida em grupo"],
  },
];

const Services = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  
  const handleServiceClick = (service: string) => {
    const message = encodeURIComponent(
      `Olá, gostaria de saber mais sobre ${service}.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
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
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 gradient-card border-2"
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
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
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
