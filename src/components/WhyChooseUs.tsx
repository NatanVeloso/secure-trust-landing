import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Clock, FileCheck, HeadphonesIcon, Shield, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "15 Anos de Experiência",
    description: "Mais de uma década protegendo famílias e empresas brasileiras.",
  },
  {
    icon: Shield,
    title: "Certificada SUSEP",
    description: "Regulamentados e supervisionados pela SUSEP para sua segurança.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Humanizado",
    description: "Equipe dedicada disponível para tirar dúvidas e auxiliar em sinistros.",
  },
  {
    icon: TrendingUp,
    title: "Melhores Condições",
    description: "Negociamos com as principais seguradoras para oferecer preços competitivos.",
  },
  {
    icon: Clock,
    title: "Cotação Rápida e Gratuita",
    description: "Receba sua cotação em minutos, sem burocracia ou complicação.",
  },
  {
    icon: FileCheck,
    title: "Transparência Total",
    description: "Contratos claros, sem letras miúdas ou surpresas desagradáveis.",
  },
];

const WhyChooseUs = () => {
  const header = useScrollAnimation(0.1);
  const badges = useScrollAnimation(0.1);

  return (
    <section id="sobre" className="relative py-24 bg-muted/30">
      {/* Wave de transição */}
      <div className="absolute top-10 left-0 right-0 pointer-events-none -translate-y-full">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            className="fill-background"
          />
          <path
            d="M0 40L60 46.7C120 53 240 67 360 70C480 73 600 67 720 63.3C840 60 960 60 1080 63.3C1200 67 1320 73 1380 76.7L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V40Z"
            className="fill-muted/30"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Por Que Escolher</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Por que escolher a<br /><span className="text-primary">SegX Seguros</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Somos referência em seguros pela combinação de experiência, compromisso e atendimento excepcional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const cardAnim = useScrollAnimation(0.1);
            return (
              <div
                key={index}
                ref={cardAnim.ref}
                className={`group p-6 rounded-2xl bg-card border-2 hover:border-primary/50 transition-all duration-700 hover:shadow-lg ${cardAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div
          ref={badges.ref}
          className={`mt-16 pt-16 border-t transition-all duration-700 ${badges.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h3 className="text-center text-2xl font-semibold mb-8">
            Certificações e Parcerias
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <div className="text-center space-y-2">
              <Shield className="w-16 h-16 mx-auto text-primary" />
              <p className="text-sm font-medium">SUSEP</p>
              <a href="https://www2.susep.gov.br/safe/menumercado/certidoes/emite_certidoescorretores_2011.asp?id=2993e57d-df59-40d2-b4cf-7592594d0794" target="_blank" rel="noopener noreferrer">
                <p className="text-xs text-muted-foreground">Regulamentado</p>
              </a>
            </div>
            {/* <div className="text-center space-y-2">
              <Award className="w-16 h-16 mx-auto text-primary" />
              <p className="text-sm font-medium">CNSeg</p>
              <p className="text-xs text-muted-foreground">Associado</p>
            </div> */}
            <div className="text-center space-y-2">
              <FileCheck className="w-16 h-16 mx-auto text-primary" />
              <p className="text-sm font-medium">CNPJ Ativo</p>
              <p className="text-xs text-muted-foreground">63.117.957/0001-32</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute  left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            className="fill-muted/30"
          />
          <path
            d="M0 40L60 46.7C120 53 240 67 360 70C480 73 600 67 720 63.3C840 60 960 60 1080 63.3C1200 67 1320 73 1380 76.7L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V40Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUs;
