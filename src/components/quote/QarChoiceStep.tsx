import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ClipboardList, ArrowLeft } from "lucide-react";

interface QarChoiceStepProps {
  onConsultant: () => void;
  onQar: () => void;
  onBack: () => void;
}

const QarChoiceStep = ({ onConsultant, onQar, onBack }: QarChoiceStepProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Quase lá!</h2>
        <p className="text-muted-foreground text-lg">
          Para finalizar, precisamos do <strong>QAR</strong> (Questionário de Avaliação de Risco),
          exigido por algumas seguradoras.
        </p>
        <p className="text-muted-foreground mt-3">
          Você pode preenchê-lo agora ou falar com um consultor para receber ajuda personalizada.
        </p>
      </motion.div>

      <div className="space-y-4">
        {/* Falar com Consultor */}
        <motion.div variants={itemVariants}>
          <Button
            onClick={onConsultant}
            size="lg"
            className="w-full h-16 text-lg group bg-gradient-to-r from-primary to-primary/90"
          >
            <MessageCircle className="mr-3 w-6 h-6" />
            Falar com Consultor
          </Button>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 py-2">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-sm text-muted-foreground">ou</span>
          <div className="flex-1 h-px bg-border"></div>
        </motion.div>

        {/* Preencher QAR */}
        <motion.div variants={itemVariants}>
          <Button
            onClick={onQar}
            variant="outline"
            size="lg"
            className="w-full h-16 text-lg group border-2 hover:border-primary"
          >
            <ClipboardList className="mr-3 w-6 h-6" />
            Preencher QAR
          </Button>
        </motion.div>

        {/* Voltar */}
        <motion.div variants={itemVariants} className="mt-2">
          <Button
            onClick={onBack}
            variant="ghost"
            className="w-full group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </Button>
        </motion.div>
      </div>

      <motion.p variants={itemVariants} className="text-center text-sm text-muted-foreground mt-6">
        Passo 5 de 6
      </motion.p>
    </motion.div>
  );
};

export default QarChoiceStep;
