import { useState } from "react";
import { motion } from "framer-motion";
import { QuoteFormData } from "@/types/quote";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface VehicleStepProps {
  formData: QuoteFormData;
  onUpdate: (data: Partial<QuoteFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const VehicleStep = ({ formData, onUpdate, onNext, onBack }: VehicleStepProps) => {
  const [vehiclePlate, setVehiclePlate] = useState(formData.vehiclePlate || "");
  const [noPlate, setNoPlate] = useState(formData.noPlate || false);
  const [isNew, setIsNew] = useState(formData.isNew || false);
  const [zipCode, setZipCode] = useState(formData.zipCode || "");
  const [cpf, setCpf] = useState(formData.cpf || "");
  const [maritalStatus, setMaritalStatus] = useState(formData.maritalStatus);
  const [isMainDriver, setIsMainDriver] = useState(formData.isMainDriver ?? true);
  const [mainDriverCpf, setMainDriverCpf] = useState(formData.mainDriverCpf || "");

  const handleNext = () => {
    if (
      (vehiclePlate || noPlate) &&
      zipCode &&
      cpf &&
      maritalStatus &&
      (isMainDriver || mainDriverCpf)
    ) {
      onUpdate({
        vehiclePlate: noPlate ? "" : vehiclePlate,
        noPlate,
        isNew,
        zipCode,
        cpf,
        maritalStatus,
        isMainDriver,
        mainDriverCpf: isMainDriver ? "" : mainDriverCpf,
      });
      onNext();
    }
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return numbers
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  };

  const formatZipCode = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/(\d{5})(\d)/, "$1-$2").slice(0, 9);
  };

  const formatPlate = (value: string) => {
    return value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 7);
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
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Dados do Veículo</h2>
        <p className="text-muted-foreground">
          Digite a placa e o CEP de pernoite para buscarmos automaticamente as informações.
        </p>
      </motion.div>

      <div className="space-y-5">
        {/* Vehicle Plate */}
        {!noPlate && (
          <motion.div variants={itemVariants}>
            <Label htmlFor="plate" className="text-sm mb-2">
              Insira a placa do seu veículo <span className="text-destructive">*</span>
            </Label>
            <Input
              id="plate"
              type="text"
              placeholder="ABC1D23"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(formatPlate(e.target.value))}
              className="h-11"
            />
          </motion.div>
        )}

        {/* No Plate Toggle */}
        <motion.div variants={itemVariants} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
          <Label htmlFor="no-plate" className="text-sm cursor-pointer">
            Não possuo placa
          </Label>
          <Switch id="no-plate" checked={noPlate} onCheckedChange={setNoPlate} />
        </motion.div>

        {/* New Vehicle Toggle */}
        <motion.div variants={itemVariants} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
          <Label htmlFor="is-new" className="text-sm cursor-pointer">
            Veículo 0 km
          </Label>
          <Switch id="is-new" checked={isNew} onCheckedChange={setIsNew} />
        </motion.div>

        {/* ZIP Code */}
        <motion.div variants={itemVariants}>
          <Label htmlFor="zipCode" className="text-sm mb-2">
            CEP de pernoite do veículo <span className="text-destructive">*</span>
          </Label>
          <Input
            id="zipCode"
            type="text"
            placeholder="00000-000"
            value={zipCode}
            onChange={(e) => setZipCode(formatZipCode(e.target.value))}
            className="h-11"
          />
        </motion.div>

        {/* CPF */}
        <motion.div variants={itemVariants}>
          <Label htmlFor="cpf" className="text-sm mb-2">
            CPF do segurado <span className="text-destructive">*</span>
          </Label>
          <Input
            id="cpf"
            type="text"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(e) => setCpf(formatCPF(e.target.value))}
            className="h-11"
          />
        </motion.div>

        {/* Marital Status */}
        <motion.div variants={itemVariants}>
          <Label htmlFor="marital-status" className="text-sm mb-2">
            Estado civil do segurado <span className="text-destructive">*</span>
          </Label>
          <Select value={maritalStatus} onValueChange={(value: any) => setMaritalStatus(value)}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Solteiro(a)</SelectItem>
              <SelectItem value="married">Casado(a)</SelectItem>
              <SelectItem value="divorced">Divorciado(a)</SelectItem>
              <SelectItem value="widowed">Viúvo(a)</SelectItem>
              <SelectItem value="partner">Reside com companheiro(a) / Namorado(a)</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground mt-2">
            Se reside com seu(sua) companheiro(a) há mais de 2 anos, selecione "Reside com companheiro(a)". Caso contrário, selecione "Solteiro(a)".
          </p>
        </motion.div>

        {/* Main Driver Toggle */}
        <motion.div variants={itemVariants} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
          <Label htmlFor="main-driver" className="text-sm cursor-pointer">
            Sou o condutor principal do veículo
          </Label>
          <Switch id="main-driver" checked={isMainDriver} onCheckedChange={setIsMainDriver} />
        </motion.div>

        {/* Main Driver CPF (conditional) */}
        {!isMainDriver && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Label htmlFor="main-driver-cpf" className="text-sm mb-2">
              CPF do condutor principal <span className="text-destructive">*</span>
            </Label>
            <Input
              id="main-driver-cpf"
              type="text"
              placeholder="000.000.000-00"
              value={mainDriverCpf}
              onChange={(e) => setMainDriverCpf(formatCPF(e.target.value))}
              className="h-11"
            />
          </motion.div>
        )}

        {/* Actions */}
        <motion.div variants={itemVariants} className="pt-4 space-y-3">
          <Button
            onClick={handleNext}
            disabled={
              (!vehiclePlate && !noPlate) ||
              !zipCode ||
              !cpf ||
              !maritalStatus ||
              (!isMainDriver && !mainDriverCpf)
            }
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
        Passo 4 de 6
      </motion.p>
    </motion.div>
  );
};

export default VehicleStep;
