import { useState } from "react";
import { motion } from "framer-motion";
import { QuoteFormData } from "@/types/quote";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, User, Phone } from "lucide-react";

interface PersonalStepProps {
  formData: QuoteFormData;
  onUpdate: (data: Partial<QuoteFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const PersonalStep = ({ formData, onUpdate, onNext, onBack }: PersonalStepProps) => {
  const [name, setName] = useState(formData.name || "");
  const [phone, setPhone] = useState(formData.phone || "");

  const handleNext = () => {
    if (name && phone) {
      onUpdate({ name, phone });
      onNext();
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return phone;
  };

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
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Vamos nos conhecer?</h2>
        <p className="text-muted-foreground text-lg">Nos conte um pouco sobre você</p>
      </motion.div>

      <div className="space-y-6">
        {/* Name */}
        <motion.div variants={itemVariants}>
          <Label htmlFor="name" className="text-base mb-2">
            Como podemos te chamar? <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-11 h-12 text-base"
            />
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div variants={itemVariants}>
          <Label htmlFor="phone" className="text-base mb-2">
            Telefone para contato <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              className="pl-11 h-12 text-base"
            />
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div variants={itemVariants} className="pt-4 space-y-3">
          <Button
            onClick={handleNext}
            disabled={!name || !phone}
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
      </div>

      <motion.p variants={itemVariants} className="text-center text-sm text-muted-foreground mt-6">
        Passo 3 de 6
      </motion.p>
    </motion.div>
  );
};

export default PersonalStep;
