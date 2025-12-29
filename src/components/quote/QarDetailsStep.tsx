import { useState } from "react";
import { motion } from "framer-motion";
import { QuoteFormData } from "@/types/quote";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

interface QarDetailsStepProps {
  formData: QuoteFormData;
  onUpdate: (data: Partial<QuoteFormData>) => void;
  onNext: () => void;
}

const QarDetailsStep = ({ formData, onUpdate, onNext }: QarDetailsStepProps) => {
  const [vehicleUsage, setVehicleUsage] = useState(formData.vehicleUsage);
  const [hasRemarchedChassis, setHasRemarchedChassis] = useState(formData.hasRemarchedChassis || false);
  const [isFinanced, setIsFinanced] = useState(formData.isFinanced || false);
  const [isTuned, setIsTuned] = useState(formData.isTuned || false);
  const [isArmored, setIsArmored] = useState(formData.isArmored || false);
  const [hasGasKit, setHasGasKit] = useState(formData.hasGasKit || false);
  const [isAuction, setIsAuction] = useState(formData.isAuction || false);
  const [youngDriverCoverage, setYoungDriverCoverage] = useState(formData.youngDriverCoverage);

  const handleNext = () => {
    if (vehicleUsage && youngDriverCoverage) {
      onUpdate({
        vehicleUsage,
        hasRemarchedChassis,
        isFinanced,
        isTuned,
        isArmored,
        hasGasKit,
        isAuction,
        youngDriverCoverage,
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
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Detalhes e Utilização do Veículo</h2>
        <p className="text-muted-foreground">Questionário de Avaliação de Risco (QAR)</p>
      </motion.div>

      <div className="space-y-5">
        {/* Vehicle Usage */}
        <motion.div variants={itemVariants}>
          <Label className="text-sm mb-2">
            Qual será o principal uso do veículo? <span className="text-destructive">*</span>
          </Label>
          <Select value={vehicleUsage} onValueChange={(value: any) => setVehicleUsage(value)}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Particular - Locomoção Diária</SelectItem>
              <SelectItem value="leisure">Particular - Somente para lazer</SelectItem>
              <SelectItem value="commercial">Utilizado para visitas/representação comercial</SelectItem>
              <SelectItem value="taxi">Táxi</SelectItem>
              <SelectItem value="passengers">Utilizado para transporte de passageiros</SelectItem>
              <SelectItem value="delivery">Utilizado para entregas</SelectItem>
              <SelectItem value="travel">Em viagens mais de 2 vezes ao mês</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        <motion.div variants={itemVariants} className="border-t border-border pt-5">
          <p className="text-sm font-medium mb-4">Características do veículo</p>
          <div className="space-y-3">
            {/* Toggles */}
            {[
              { label: "O veículo possui chassi remarcado?", value: hasRemarchedChassis, onChange: setHasRemarchedChassis },
              { label: "O veículo é alienado?", value: isFinanced, onChange: setIsFinanced },
              { label: "O veículo é tunado ou rebaixado?", value: isTuned, onChange: setIsTuned },
              { label: "O veículo é blindado?", value: isArmored, onChange: setIsArmored },
              { label: "O veículo tem kit gás?", value: hasGasKit, onChange: setHasGasKit },
              { label: "O veículo é de leilão?", value: isAuction, onChange: setIsAuction },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Label htmlFor={`toggle-${index}`} className="text-sm cursor-pointer flex-1">
                  {item.label}
                </Label>
                <Switch
                  id={`toggle-${index}`}
                  checked={item.value}
                  onCheckedChange={item.onChange}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Young Driver Coverage */}
        <motion.div variants={itemVariants}>
          <Label className="text-sm mb-2">
            Deseja incluir cobertura adicional para condutores de 18 a 26 anos? <span className="text-destructive">*</span>
          </Label>
          <Select value={youngDriverCoverage} onValueChange={(value: any) => setYoungDriverCoverage(value)}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no">Não</SelectItem>
              <SelectItem value="no_drivers">Não tem condutores menores de 26 anos</SelectItem>
              <SelectItem value="under_24">Sim, e são menores de 24 anos</SelectItem>
              <SelectItem value="not_drive">Sim, porém não dirige o veículo</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Actions */}
        <motion.div variants={itemVariants} className="pt-4">
          <Button
            onClick={handleNext}
            disabled={!vehicleUsage || !youngDriverCoverage}
            size="lg"
            className="w-full h-12 group"
          >
            Continuar
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <motion.p variants={itemVariants} className="text-center text-sm text-muted-foreground mt-6">
        Passo 6 de 7
      </motion.p>
    </motion.div>
  );
};

export default QarDetailsStep;
