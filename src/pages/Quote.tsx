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
        // Pode vir de qar_choice ou residence
        if (formData.residenceType) {
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
              onNext={() => goToNextStep("vehicle")}
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
