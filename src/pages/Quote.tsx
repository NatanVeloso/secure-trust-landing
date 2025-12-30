import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuoteFormData, QuoteStep } from "@/types/quote";
import WelcomeStep from "@/components/quote/WelcomeStep";
import OwnershipStep from "@/components/quote/OwnershipStep";
import InsuranceStep from "@/components/quote/InsuranceStep";
import PersonalStep from "@/components/quote/PersonalStep";
import VehicleStep from "@/components/quote/VehicleStep";
import QarChoiceStep from "@/components/quote/QarChoiceStep";
import ConsultantStep from "@/components/quote/ConsultantStep";
import QarDetailsStep from "@/components/quote/QarDetailsStep";
import ResidenceStep from "@/components/quote/ResidenceStep";

const Quote = () => {
  const [currentStep, setCurrentStep] = useState<QuoteStep>("welcome");
  const [formData, setFormData] = useState<QuoteFormData>({});

  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const goToNextStep = (nextStep: QuoteStep) => {
    setCurrentStep(nextStep);
  };

  const goToPreviousStep = () => {
    // Mapeia qual step anterior mostrar baseado no step atual e nas respostas
    switch (currentStep) {
      case "ownership":
        setCurrentStep("welcome");
        break;
      case "insurance":
        setCurrentStep("ownership");
        break;
      case "personal":
        // Se tem veículo, volta para insurance, senão volta para ownership
        if (formData.vehicleOwnership === "have") {
          setCurrentStep("insurance");
        } else {
          setCurrentStep("ownership");
        }
        break;
      case "vehicle":
        setCurrentStep("personal");
        break;
      case "qar_choice":
        setCurrentStep("vehicle");
        break;
      case "consultant":
        // Se é fluxo curto (buying/researching), volta para personal
        // Senão, pode vir de qar_choice ou residence
        if (formData.vehicleOwnership === "buying" || formData.vehicleOwnership === "researching") {
          setCurrentStep("personal");
        } else if (formData.residenceType) {
          setCurrentStep("residence");
        } else {
          setCurrentStep("qar_choice");
        }
        break;
      case "qar_details":
        // Pode vir de qar_choice ou do botão "Preencher QAR" no consultant
        setCurrentStep("qar_choice");
        break;
      case "residence":
        setCurrentStep("qar_details");
        break;
      default:
        break;
    }
  };

  // Calcula o progresso baseado no step atual
  const getProgress = () => {
    // Fluxo curto para buying e researching
    const isShortFlow = formData.vehicleOwnership === "buying" || formData.vehicleOwnership === "researching";

    if (isShortFlow) {
      const shortProgressMap: Record<QuoteStep, number> = {
        welcome: 0,
        ownership: 33,
        personal: 66,
        consultant: 100,
        final: 100,
      };
      return shortProgressMap[currentStep] || 0;
    }

    // Fluxo completo para "have"
    const progressMap: Record<QuoteStep, number> = {
      welcome: 0,
      ownership: 12,
      insurance: 25,
      personal: 38,
      vehicle: 50,
      qar_choice: 62,
      qar_details: 75,
      residence: 87,
      consultant: 100,
      final: 100,
    };
    return progressMap[currentStep] || 0;
  };

  const pageVariants = {
    initial: { opacity: 0, x: 50, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -50, scale: 0.95 },
  };

  const pageTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-muted/30 backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/50"
          initial={{ width: "0%" }}
          animate={{ width: `${getProgress()}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="w-full max-w-2xl relative z-10"
        >
          {currentStep === "welcome" && (
            <WelcomeStep onNext={() => goToNextStep("ownership")} />
          )}
          {currentStep === "ownership" && (
            <OwnershipStep
              formData={formData}
              onUpdate={updateFormData}
              onNext={(ownership) => {
                if (ownership === "have") {
                  goToNextStep("insurance");
                } else {
                  goToNextStep("personal");
                }
              }}
              onBack={goToPreviousStep}
            />
          )}
          {currentStep === "insurance" && (
            <InsuranceStep
              formData={formData}
              onUpdate={updateFormData}
              onNext={() => goToNextStep("personal")}
              onBack={goToPreviousStep}
            />
          )}
          {currentStep === "personal" && (
            <PersonalStep
              formData={formData}
              onUpdate={updateFormData}
              onNext={() => {
                // Se é fluxo curto (buying/researching), vai direto para consultant
                if (formData.vehicleOwnership === "buying" || formData.vehicleOwnership === "researching") {
                  goToNextStep("consultant");
                } else {
                  goToNextStep("vehicle");
                }
              }}
              onBack={goToPreviousStep}
            />
          )}
          {currentStep === "vehicle" && (
            <VehicleStep
              formData={formData}
              onUpdate={updateFormData}
              onNext={() => goToNextStep("qar_choice")}
              onBack={goToPreviousStep}
            />
          )}
          {currentStep === "qar_choice" && (
            <QarChoiceStep
              onConsultant={() => goToNextStep("consultant")}
              onQar={() => goToNextStep("qar_details")}
              onBack={goToPreviousStep}
            />
          )}
          {currentStep === "consultant" && (
            <ConsultantStep
              formData={formData}
              onQar={() => goToNextStep("qar_details")}
              onBack={goToPreviousStep}
            />
          )}
          {currentStep === "qar_details" && (
            <QarDetailsStep
              formData={formData}
              onUpdate={updateFormData}
              onNext={() => goToNextStep("residence")}
              onBack={goToPreviousStep}
            />
          )}
          {currentStep === "residence" && (
            <ResidenceStep
              formData={formData}
              onUpdate={updateFormData}
              onNext={() => goToNextStep("consultant")}
              onBack={goToPreviousStep}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quote;
