import { motion } from "framer-motion";
import { QuoteFormData } from "@/types/quote";
import { Button } from "@/components/ui/button";
import { MessageCircle, ClipboardList, Star, Award } from "lucide-react";

interface ConsultantStepProps {
  formData: QuoteFormData;
  onQar?: () => void;
}

const ConsultantStep = ({ formData, onQar }: ConsultantStepProps) => {

  const whatsappNumber = "5544988325210";

  const formatWhatsAppMessage = () => {
    let message = "Olá! Gostaria de fazer uma cotação de seguro.\n\n";
    message += "📋 *Dados informados:*\n\n";

    if (formData.name) message += `👤 Nome: ${formData.name}\n`;
    if (formData.phone) message += `📱 Telefone: ${formData.phone}\n`;
    if (formData.vehicleOwnership) {
      const ownership = {
        have: "Já possuo o veículo",
        buying: "Estou em processo de compra",
        researching: "Estou pesquisando"
      }[formData.vehicleOwnership];
      message += `🚗 Posse: ${ownership}\n`;
    }
    if (formData.vehiclePlate) message += `🔖 Placa: ${formData.vehiclePlate}\n`;
    if (formData.zipCode) message += `📍 CEP: ${formData.zipCode}\n`;
    if (formData.cpf) message += `📄 CPF: ${formData.cpf}\n`;

    message += "\nAguardo contato!";
    return encodeURIComponent(message);
  };

  const handleWhatsApp = () => {
    const message = formatWhatsAppMessage();
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleQar = () => {
    if (onQar) {
      onQar();
    }
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
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Conheça seu Consultor!</h2>
        <p className="text-muted-foreground text-lg">
          Veja quem vai cuidar da sua proposta e fale já
        </p>
      </motion.div>

      {/* Consultant Card */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 mb-6 border-2 border-primary/20"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Photo Placeholder */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              SF
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2">
              <Award className="w-5 h-5" />
            </div>
          </div>

          {/* Consultant Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-1">Soosthynys de Freitas</h3>
            <p className="text-primary font-semibold mb-3">Especialista em Seguros</p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>10+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-primary" />
                <span>Certificado SUSEP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-background/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            "Vou te ajudar a encontrar a melhor proteção para seu veículo com as condições mais vantajosas do mercado."
          </p>
        </div>
      </motion.div>

      {/* Actions */}
      <div className="space-y-4">
        <motion.div variants={itemVariants}>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="w-full h-16 text-lg group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
          >
            <MessageCircle className="mr-3 w-6 h-6" />
            Falar Agora!
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-4 py-2">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-sm text-muted-foreground">ou</span>
          <div className="flex-1 h-px bg-border"></div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            onClick={handleQar}
            variant="outline"
            size="lg"
            className="w-full h-14 text-base group border-2 hover:border-primary"
          >
            <ClipboardList className="mr-2 w-5 h-5" />
            Preencher QAR
          </Button>
        </motion.div>
      </div>

      <motion.p variants={itemVariants} className="text-center text-xs text-muted-foreground mt-6">
        💬 Resposta em menos de 2 minutos
      </motion.p>
    </motion.div>
  );
};

export default ConsultantStep;
