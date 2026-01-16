import socios from "../assets/socios.jpg";
import { useEffect, useRef, useState } from "react";
import { Shield, Users, Award, Clock } from "lucide-react";
import { animate, motion, useInView } from "framer-motion";

const AnimatedNumber = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  // Fallback: se após 3 segundos ainda estiver em 0, força o valor final
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (displayValue === 0) {
        setDisplayValue(value);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [value, displayValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const values = [
  {
    icon: Shield,
    title: "Confiança",
    description: "Construímos relacionamentos sólidos baseados na transparência e honestidade com nossos clientes.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Cada cliente é único. Oferecemos atendimento personalizado e próximo em todos os momentos.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Buscamos sempre as melhores soluções do mercado para proteger o que é mais importante para você.",
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Processos rápidos e eficientes. Estamos prontos para ajudar quando você mais precisa.",
  },
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

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <section id="quem-somos" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Mais de <span className="text-gradient">10 anos</span> protegendo sonhos e conquistas
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A SEGX nasceu com a missão de oferecer proteção acessível e de qualidade
              para famílias e empresas brasileiras. Desde 2009, trabalhamos com as
              melhores seguradoras do mercado para garantir tranquilidade aos nossos clientes.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe é formada por profissionais experientes e apaixonados pelo
              que fazem. Acreditamos que um bom seguro vai além da apólice – é sobre
              construir relacionamentos de confiança e estar presente nos momentos
              mais importantes.
            </p>

            {/* Stats inline */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-8"
            >
              <motion.div variants={itemVariants}>
                <span className="text-3xl font-bold text-primary">
                  <AnimatedNumber value={10} suffix="+" />
                </span>
                <p className="text-sm text-muted-foreground">Anos de mercado</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <span className="text-3xl font-bold text-primary">
                  <AnimatedNumber value={10} suffix="k+" />
                </span>
                <p className="text-sm text-muted-foreground">Clientes atendidos</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <span className="text-3xl font-bold text-primary">
                  <AnimatedNumber value={98} suffix="%" />
                </span>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Values Grid com foto dos sócios */}
          <motion.div
            variants={containerVariants}
            className="relative"
            onMouseEnter={() => isDesktop && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Foto dos sócios - Background - SÓ DESKTOP */}
            <motion.div
              className="absolute -right-8 -translate-y-1/2 w-[90%] h-[110%] z-0 hidden lg:block"
              initial={{ rotate: 12, x: 60, opacity: 0.6 }}
              animate={{
                rotate: isHovered ? 0 : 12,
                x: isHovered ? 0 : 60,
                opacity: isHovered ? 1 : 0.6,
                scale: isHovered ? 1.02 : 1,
                zIndex: isHovered ? 20 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                <img
                  src={socios}
                  alt="Sócios da SEGX Seguros"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradiente */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Texto sobre a foto */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Willian & Alessandro</h3>
                  <p className="text-white/90">Fundadores da SEGX Seguros</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6 relative z-10"
              animate={isDesktop ? {
                opacity: isHovered ? 0.15 : 1,
                scale: isHovered ? 0.95 : 1,
              } : {}}
              style={isDesktop && isHovered ? { filter: "blur(2px)" } : {}}
              transition={{ duration: 0.4 }}
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={!isHovered ? { scale: 1.03, y: -5 } : {}}
                  className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Hint para o usuário - aparece só no desktop */}
            <motion.div
              className="text-center mt-4 hidden lg:block"
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="inline-block px-4 py-2 bg-card backdrop-blur-sm rounded-full text-sm text-muted-foreground border border-border/50 shadow-sm">
                Passe o mouse para conhecer nossos fundadores ✨
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;