import { useState } from "react";
import { motion } from "framer-motion";
import { QuoteFormData } from "@/types/quote";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, Calendar, CalendarX2, User, Users, ArrowRight, ArrowLeft } from "lucide-react";

interface InsuranceStepProps {
  formData: QuoteFormData;
  onUpdate: (data: Partial<QuoteFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const InsuranceStep = ({ formData, onUpdate, onNext, onBack }: InsuranceStepProps) => {
  const [insuranceStatus, setInsuranceStatus] = useState(formData.insuranceStatus);
  const [quotingFor, setQuotingFor] = useState(formData.quotingFor);

  const handleNext = () => {
    if (insuranceStatus && quotingFor) {
      onUpdate({ insuranceStatus, quotingFor });
      onNext();
    }
  };

  const insuranceOptions = [
    { value: "no_insurance" as const, icon: CalendarX2, label: "Ainda não tenho seguro" },
    { value: "expiring_soon" as const, icon: Clock, label: "Sim, vence em breve" },
    { value: "expiring_3months" as const, icon: Calendar, label: "Sim, vence em até 3 meses" },
    { value: "expiring_more_3months" as const, icon: ShieldCheck, label: "Sim, vence em mais de 3 meses" },
  ];

  const quotingForOptions = [
    { value: "me" as const, icon: User, label: "Para mim" },
    { value: "other" as const, icon: Users, label: "Para outra pessoa" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Situação do Seguro</h2>
        <p className="text-muted-foreground">
          Proteger seu patrimônio é essencial: informe a situação atual para garantirmos a melhor proposta.
        </p>
      </motion.div>

      {/* Insurance Status */}
      <motion.div variants={itemVariants} className="mb-8">
        <label className="text-sm font-medium mb-3 block">
          O seu veículo já possui um seguro? <span className="text-destructive">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {insuranceOptions.map((option) => {
            const Icon = option.icon;
            return (
              <motion.button
                key={option.value}
                onClick={() => setInsuranceStatus(option.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 border-2 rounded-xl transition-all text-left ${
                  insuranceStatus === option.value
                    ? "border-primary bg-primary/10"
                    : "border-border bg-background/50 hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${insuranceStatus === option.value ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-sm font-medium">{option.label}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Quoting For */}
      <motion.div variants={itemVariants} className="mb-8">
        <label className="text-sm font-medium mb-3 block">
          Estou cotando para: <span className="text-destructive">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {quotingForOptions.map((option) => {
            const Icon = option.icon;
            return (
              <motion.button
                key={option.value}
                onClick={() => setQuotingFor(option.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 border-2 rounded-xl transition-all text-center ${
                  quotingFor === option.value
                    ? "border-primary bg-primary/10"
                    : "border-border bg-background/50 hover:border-primary/30"
                }`}
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 ${quotingFor === option.value ? "text-primary" : "text-muted-foreground"}`} />
                <span className="text-sm font-medium block">{option.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div variants={itemVariants} className="space-y-3">
        <Button
          onClick={handleNext}
          disabled={!insuranceStatus || !quotingFor}
          size="lg"
          className="w-full h-12 group"
        >
          Continuar
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          onClick={onBack}
          variant="ghost"
          className="w-full group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar
        </Button>
      </motion.div>

      <motion.p variants={itemVariants} className="text-center text-sm text-muted-foreground mt-4">
        Passo 2 de 6
      </motion.p>
    </motion.div>
  );
};

export default InsuranceStep;
