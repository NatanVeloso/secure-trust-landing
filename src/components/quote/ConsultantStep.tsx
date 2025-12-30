import { motion } from "framer-motion";
import { QuoteFormData } from "@/types/quote";
import { Button } from "@/components/ui/button";
import { MessageCircle, ClipboardList, Star, Award, ArrowLeft } from "lucide-react";

interface ConsultantStepProps {
  formData: QuoteFormData;
  onQar?: () => void;
  onBack?: () => void;
}

const ConsultantStep = ({ formData, onQar, onBack }: ConsultantStepProps) => {

  const whatsappNumber = "5544988325210";

  // Verifica se o usuário já preencheu o QAR
  const hasCompletedQar = formData.vehicleUsage || formData.residenceType;

  // Verifica se é fluxo curto (buying/researching) - não deve mostrar opção QAR
  const isShortFlow = formData.vehicleOwnership === "buying" || formData.vehicleOwnership === "researching";

  // Só mostra o botão QAR se NÃO for fluxo curto E NÃO tiver completado o QAR
  const shouldShowQarButton = !isShortFlow && !hasCompletedQar;

  const formatWhatsAppMessage = () => {
    let message = "Olá! Gostaria de fazer uma cotação de seguro.\n\n";
    message += "📋 *Dados informados:*\n\n";

    // Dados pessoais
    if (formData.name) message += `👤 *Nome:* ${formData.name}\n`;
    if (formData.phone) message += `📱 *Telefone:* ${formData.phone}\n\n`;

    // Posse do veículo
    if (formData.vehicleOwnership) {
      message += "🚗 *POSSE DO VEÍCULO*\n";
      const ownership = {
        have: "Já possuo o veículo",
        buying: "Estou em processo de compra",
        researching: "Estou pesquisando"
      }[formData.vehicleOwnership];
      message += `${ownership}\n\n`;
    }

    // Situação do seguro
    if (formData.insuranceStatus) {
      message += "🛡️ *SITUAÇÃO DO SEGURO*\n";
      const insurance = {
        no_insurance: "Ainda não tenho seguro",
        expiring_soon: "Vence em breve",
        expiring_3months: "Vence em até 3 meses",
        expiring_more_3months: "Vence em mais de 3 meses"
      }[formData.insuranceStatus];
      message += `${insurance}\n`;
      if (formData.quotingFor) {
        message += `Cotando para: ${formData.quotingFor === "me" ? "Mim" : "Outra pessoa"}\n\n`;
      }
    }

    // Dados do veículo
    message += "🚙 *DADOS DO VEÍCULO*\n";
    if (formData.vehiclePlate) message += `Placa: ${formData.vehiclePlate}\n`;
    if (formData.noPlate) message += `Não possui placa\n`;
    if (formData.isNew) message += `Veículo 0 km\n`;
    if (formData.zipCode) message += `CEP de pernoite: ${formData.zipCode}\n`;
    if (formData.cpf) message += `CPF do segurado: ${formData.cpf}\n`;
    if (formData.maritalStatus) {
      const marital = {
        single: "Solteiro(a)",
        married: "Casado(a)",
        divorced: "Divorciado(a)",
        widowed: "Viúvo(a)",
        partner: "Reside com companheiro(a)"
      }[formData.maritalStatus];
      message += `Estado civil: ${marital}\n`;
    }
    if (formData.isMainDriver === false && formData.mainDriverCpf) {
      message += `CPF do condutor principal: ${formData.mainDriverCpf}\n`;
    }
    message += "\n";

    // QAR - Detalhes do veículo
    if (formData.vehicleUsage) {
      message += "📝 *QAR - DETALHES DO VEÍCULO*\n";
      const usage = {
        daily: "Particular - Locomoção Diária",
        leisure: "Particular - Somente para lazer",
        commercial: "Visitas/representação comercial",
        taxi: "Táxi",
        passengers: "Transporte de passageiros",
        delivery: "Entregas",
        travel: "Viagens mais de 2x ao mês"
      }[formData.vehicleUsage];
      message += `Uso principal: ${usage}\n`;

      if (formData.hasRemarchedChassis) message += `✓ Chassi remarcado\n`;
      if (formData.isFinanced) message += `✓ Veículo alienado\n`;
      if (formData.isTuned) message += `✓ Tunado ou rebaixado\n`;
      if (formData.isArmored) message += `✓ Blindado\n`;
      if (formData.hasGasKit) message += `✓ Kit gás\n`;
      if (formData.isAuction) message += `✓ Veículo de leilão\n`;

      if (formData.youngDriverCoverage) {
        const coverage = {
          no: "Não",
          no_drivers: "Não tem condutores menores de 26 anos",
          under_24: "Sim, menores de 24 anos",
          not_drive: "Sim, mas não dirige"
        }[formData.youngDriverCoverage];
        message += `Cobertura jovem (18-26): ${coverage}\n`;
      }
      message += "\n";
    }

    // Residência e guarda
    if (formData.residenceType) {
      message += "🏠 *RESIDÊNCIA E GUARDA*\n";
      const residence = {
        house: "Casa/Sobrado",
        apartment: "Apartamento",
        condo: "Condomínio de casas",
        other: "Outro"
      }[formData.residenceType];
      message += `Local: ${residence}\n`;

      if (formData.hasGarage) {
        const garage = {
          manual: "Garagem com portão manual",
          automatic: "Garagem com portão automático",
          private: "Estacionamento privado/pago",
          no: "Não tem garagem"
        }[formData.hasGarage];
        message += `${garage}\n`;
      }

      if (formData.studyUsage) {
        const study = {
          not_use: "Estuda mas não usa o veículo",
          not_study: "Não estuda",
          high_school: "Ensino Médio",
          college: "Ensino Superior",
          postgrad: "Pós-Graduação",
          other: "Outros"
        }[formData.studyUsage];
        message += `Estudo: ${study}\n`;

        if (formData.studyGarage) {
          const studyGar = {
            manual: "Garagem manual no estudo",
            automatic: "Garagem automática no estudo",
            private: "Estacionamento privado no estudo",
            no: "Sem garagem no estudo"
          }[formData.studyGarage];
          message += `${studyGar}\n`;
        }
      }

      if (formData.workUsage) {
        const work = {
          yes: "Usa para trabalho",
          no: "Não usa para trabalho",
          not_work: "Não trabalha"
        }[formData.workUsage];
        message += `Trabalho: ${work}\n`;

        if (formData.workGarage) {
          const workGar = {
            manual: "Garagem manual no trabalho",
            automatic: "Garagem automática no trabalho",
            private: "Estacionamento privado no trabalho",
            no: "Sem garagem no trabalho"
          }[formData.workGarage];
          message += `${workGar}\n`;
        }
      }
    }

    message += "\n✅ *Aguardo contato para receber minha cotação!*";
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
              AM
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2">
              <Award className="w-5 h-5" />
            </div>
          </div>

          {/* Consultant Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-1">Alessandro Magalhães</h3>
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

        {shouldShowQarButton && onQar && (
          <>
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
          </>
        )}

        {onBack && (
          <motion.div variants={itemVariants}>
            <Button
              onClick={onBack}
              variant="ghost"
              className="w-full group"
            >
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ConsultantStep;
