import { motion } from "framer-motion";
import socios from '../assets/socios.jpg';
import { Award, Shield, Users, Target } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { icon: Users, label: "Clientes Atendidos", value: "5.000+" },
    { icon: Shield, label: "Anos de Experiência", value: "10+" },
    { icon: Award, label: "Certificação SUSEP", value: "100%" },
    { icon: Target, label: "Satisfação", value: "98%" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Conheça Quem Está ao <span className="text-gradient">Seu Lado</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proteção e confiança com quem entende do assunto
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 items-center mb-16">
            {/* Image Section */}
            <motion.div
              variants={itemVariants}
              className="relative group flex justify-center "
            >
              {/* Glow effect suave */}
              <div className="absolute inset-20 bg-gradient-to-r from-primary/20 via-blue-400/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl group-hover:opacity-70 transition-all duration-500"></div>

              {/* Borda gradiente */}
              <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-primary/50 via-blue-400/50 to-secondary/50 group-hover:from-primary group-hover:via-blue-400 group-hover:to-secondary transition-all duration-500">
                {/* Container interno */}
                <div className="relative bg-card/90 backdrop-blur-xl rounded-[22px] p-1">
                  <img
                    src={socios}
                    alt="Sócios da SegX Seguros"
                    className="w-full h-auto max-h-[600px] rounded-2xl object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={itemVariants} className="space-y-6 mt-8 lg:mt-0">
              <h3 className="text-3xl md:text-4xl font-bold">
                Uma História de Compromisso e Confiança
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Com mais de <span className="text-primary font-semibold">10 anos de experiência</span> no mercado de seguros,
                nossa equipe é formada por profissionais certificados pela SUSEP, dedicados a oferecer as melhores soluções
                de proteção para você e sua família.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Acreditamos que seguro é sobre <span className="text-primary font-semibold">pessoas cuidando de pessoas</span>.
                Por isso, nossa abordagem é sempre personalizada, transparente e focada em entender suas necessidades reais.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mt-8">
                <p className="text-lg italic text-foreground">
                  "Nosso compromisso é proteger o que realmente importa para você, com transparência,
                  agilidade e as melhores condições do mercado."
                </p>
                <p className="mt-4 font-semibold text-primary">
                  - Willian e Alessandro
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 text-center group hover:border-primary/50 transition-all shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
