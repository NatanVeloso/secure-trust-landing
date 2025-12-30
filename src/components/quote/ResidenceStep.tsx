import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { QuoteFormData } from "@/types/quote";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, ArrowLeft, Info } from "lucide-react";

interface ResidenceStepProps {
  formData: QuoteFormData;
  onUpdate: (data: Partial<QuoteFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const ResidenceStep = ({ formData, onUpdate, onNext, onBack }: ResidenceStepProps) => {
  const [residenceType, setResidenceType] = useState(formData.residenceType);
  const [hasGarage, setHasGarage] = useState(formData.hasGarage);
  const [studyUsage, setStudyUsage] = useState(formData.studyUsage);
  const [studyGarage, setStudyGarage] = useState(formData.studyGarage);
  const [workUsage, setWorkUsage] = useState(formData.workUsage);
  const [workGarage, setWorkGarage] = useState(formData.workGarage);

  const showStudyGarage = studyUsage && ["high_school", "college", "postgrad", "other"].includes(studyUsage);
  const showWorkGarage = workUsage === "yes";

  // Limpa o campo studyGarage quando ele fica oculto
  useEffect(() => {
    if (!showStudyGarage && studyGarage) {
      setStudyGarage(undefined);
    }
  }, [showStudyGarage, studyGarage]);

  // Limpa o campo workGarage quando ele fica oculto
  useEffect(() => {
    if (!showWorkGarage && workGarage) {
      setWorkGarage(undefined);
    }
  }, [showWorkGarage, workGarage]);

  const handleNext = () => {
    if (
      residenceType &&
      hasGarage &&
      studyUsage &&
      workUsage &&
      (!showStudyGarage || studyGarage) &&
      (!showWorkGarage || workGarage)
    ) {
      onUpdate({
        residenceType,
        hasGarage,
        studyUsage,
        studyGarage: showStudyGarage ? studyGarage : undefined,
        workUsage,
        workGarage: showWorkGarage ? workGarage : undefined,
      });
      onNext();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
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
      className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Residência e Guarda do Veículo</h2>
        <p className="text-muted-foreground">Informações sobre onde o veículo fica guardado</p>
      </motion.div>

      <div className="space-y-5">
        {/* Residence Type */}
        <motion.div variants={itemVariants}>
          <Label className="text-sm mb-2">
            Local de residência <span className="text-destructive">*</span>
          </Label>
          <Select value={residenceType} onValueChange={(value: any) => setResidenceType(value)}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Escolha uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">Casa/Sobrado</SelectItem>
              <SelectItem value="apartment">Apartamento</SelectItem>
              <SelectItem value="condo">Condomínio de casas</SelectItem>
              <SelectItem value="other">Outro</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Has Garage at Home */}
        <motion.div variants={itemVariants}>
          <Label className="text-sm mb-2">
            Estaciona em garagem na residência ou em estacionamento protegido? <span className="text-destructive">*</span>
          </Label>
          <div className="flex items-start gap-2 mb-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground">
              Considere garagem fechada no trabalho se for exclusiva aos funcionários ou se tiver controle de entrada e saída (Cancela ou Porteiro).
            </p>
          </div>
          <Select value={hasGarage} onValueChange={(value: any) => setHasGarage(value)}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Escolha uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manual">Sim, com portão manual</SelectItem>
              <SelectItem value="automatic">Sim, com portão automático</SelectItem>
              <SelectItem value="private">Sim, em estacionamento privado ou pago</SelectItem>
              <SelectItem value="no">Não</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Study Usage */}
        <motion.div variants={itemVariants}>
          <Label className="text-sm mb-2">
            Usa para ir e voltar do local de estudo? <span className="text-destructive">*</span>
          </Label>
          <Select value={studyUsage} onValueChange={(value: any) => setStudyUsage(value)}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Escolha uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="not_use">Estuda, mas não utiliza o veículo</SelectItem>
              <SelectItem value="not_study">Não estuda</SelectItem>
              <SelectItem value="high_school">Sim, Ensino Médio</SelectItem>
              <SelectItem value="college">Sim, Ensino Superior</SelectItem>
              <SelectItem value="postgrad">Sim, Pós-Graduação</SelectItem>
              <SelectItem value="other">Sim, Outros</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Study Garage (conditional) */}
        {showStudyGarage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Label className="text-sm mb-2">
              Estaciona em garagem no local de estudo ou em estacionamento protegido? <span className="text-destructive">*</span>
            </Label>
            <div className="flex items-start gap-2 mb-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                Considere garagem fechada se for exclusiva aos estudantes ou se tiver controle de entrada e saída.
              </p>
            </div>
            <Select value={studyGarage} onValueChange={(value: any) => setStudyGarage(value)}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Escolha uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manual">Sim, com portão manual</SelectItem>
                <SelectItem value="automatic">Sim, com portão automático</SelectItem>
                <SelectItem value="private">Sim, em estacionamento privado ou pago</SelectItem>
                <SelectItem value="no">Não</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        )}

        {/* Work Usage */}
        <motion.div variants={itemVariants}>
          <Label className="text-sm mb-2">
            Usa para ir e voltar do local de trabalho? <span className="text-destructive">*</span>
          </Label>
          <Select value={workUsage} onValueChange={(value: any) => setWorkUsage(value)}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Escolha uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Sim</SelectItem>
              <SelectItem value="no">Não</SelectItem>
              <SelectItem value="not_work">Não trabalha</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Work Garage (conditional) */}
        {showWorkGarage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Label className="text-sm mb-2">
              Estaciona em garagem no local de trabalho ou em estacionamento protegido? <span className="text-destructive">*</span>
            </Label>
            <div className="flex items-start gap-2 mb-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                Considere garagem fechada se for exclusiva aos funcionários ou se tiver controle de entrada e saída (Cancela ou Porteiro).
              </p>
            </div>
            <Select value={workGarage} onValueChange={(value: any) => setWorkGarage(value)}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Escolha uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manual">Sim, com portão manual</SelectItem>
                <SelectItem value="automatic">Sim, com portão automático</SelectItem>
                <SelectItem value="private">Sim, em estacionamento privado ou pago</SelectItem>
                <SelectItem value="no">Não</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        )}

        {/* Actions */}
        <motion.div variants={itemVariants} className="pt-4 space-y-3">
          <Button
            onClick={handleNext}
            disabled={
              !residenceType ||
              !hasGarage ||
              !studyUsage ||
              !workUsage ||
              (showStudyGarage && !studyGarage) ||
              (showWorkGarage && !workGarage)
            }
            size="lg"
            className="w-full h-12 group"
          >
            Finalizar Questionário
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
        Último passo!
      </motion.p>
    </motion.div>
  );
};

export default ResidenceStep;
