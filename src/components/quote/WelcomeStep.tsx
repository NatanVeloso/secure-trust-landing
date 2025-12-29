import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, CheckCircle2, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface WelcomeStepProps {
  onNext: () => void;
}

const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl"
    >
      {/* Icon */}
      <motion.div variants={itemVariants} className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
          <div className="relative bg-primary/10 p-6 rounded-full">
            <Shield className="w-16 h-16 text-primary" />
          </div>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        Bem-vindo à sua
        <span className="block text-primary mt-2">Cotação Inteligente</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={itemVariants}
        className="text-center text-muted-foreground text-lg mb-8"
      >
        Sua segurança é nossa prioridade. Vamos encontrar a melhor proteção para você.
      </motion.p>

      {/* Features */}
      <motion.div
        variants={itemVariants}
        className="space-y-4 mb-8"
      >
        {[
          "Processo 100% online e seguro",
          "Cotação personalizada em minutos",
          "Melhores seguradoras do mercado",
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 text-muted-foreground"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
            <span>{feature}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="space-y-3">
        <Button
          onClick={onNext}
          size="lg"
          className="w-full h-14 text-lg shadow-lg hover:shadow-primary/50 transition-all group"
        >
          Vamos Começar
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          asChild
          variant="ghost"
          className="w-full group"
        >
          <Link to="/">
            <Home className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para Home
          </Link>
        </Button>
      </motion.div>

      {/* Footer note */}
      <motion.p
        variants={itemVariants}
        className="text-center text-sm text-muted-foreground mt-6"
      >
        Leva apenas 3-5 minutos
      </motion.p>
    </motion.div>
  );
};

export default WelcomeStep;
