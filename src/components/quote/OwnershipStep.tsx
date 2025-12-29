import { motion } from "framer-motion";
import { QuoteFormData } from "@/types/quote";
import { Car, ShoppingCart, Search } from "lucide-react";

interface OwnershipStepProps {
  formData: QuoteFormData;
  onUpdate: (data: Partial<QuoteFormData>) => void;
  onNext: (ownership: "have" | "buying" | "researching") => void;
}

const OwnershipStep = ({ onUpdate, onNext }: OwnershipStepProps) => {
  const handleSelect = (ownership: "have" | "buying" | "researching") => {
    onUpdate({ vehicleOwnership: ownership });
    setTimeout(() => onNext(ownership), 300);
  };

  const options = [
    {
      value: "have" as const,
      icon: Car,
      label: "Sim, já tenho meu veículo",
      description: "Já sou proprietário do veículo",
    },
    {
      value: "buying" as const,
      icon: ShoppingCart,
      label: "Estou em processo de compra",
      description: "Vou adquirir em breve",
    },
    {
      value: "researching" as const,
      icon: Search,
      label: "Estou apenas pesquisando",
      description: "Quero conhecer as opções",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Posse do Veículo</h2>
        <p className="text-muted-foreground text-lg">Você já possui o veículo?</p>
      </motion.div>

      <div className="space-y-4">
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <motion.button
              key={option.value}
              variants={itemVariants}
              onClick={() => handleSelect(option.value)}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-6 bg-background/50 hover:bg-primary/5 border-2 border-border hover:border-primary/50 rounded-2xl transition-all text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{option.label}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <motion.p
        variants={itemVariants}
        className="text-center text-sm text-muted-foreground mt-6"
      >
        Passo 1 de 6
      </motion.p>
    </motion.div>
  );
};

export default OwnershipStep;
