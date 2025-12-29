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
            />
          )}
          {currentStep === "insurance" && (
            <InsuranceStep
              formData={formData}
              onUpdate={updateFormData}
              onNext={() => goToNextStep("personal")}
            />
          )}
          {currentStep === "personal" && (
            <PersonalStep
              formData={formData}
              onUpdate={updateFormData}
              onNext={() => goToNextStep("vehicle")}
            />
          )}
          {currentStep === "vehicle" && (
            <VehicleStep
              formData={formData}
              onUpdate={updateFormData}
              onNext={() => goToNextStep("qar_choice")}
            />
          )}
          {currentStep === "qar_choice" && (
            <QarChoiceStep
              onConsultant={() => goToNextStep("consultant")}
              onQar={() => goToNextStep("qar_details")}
            />
          )}
          {currentStep === "consultant" && (
            <ConsultantStep
              formData={formData}
              onQar={() => goToNextStep("qar_details")}
            />
          )}
          {currentStep === "qar_details" && (
            <QarDetailsStep
              formData={formData}
              onUpdate={updateFormData}
              onNext={() => goToNextStep("residence")}
            />
          )}
          {currentStep === "residence" && (
            <ResidenceStep
              formData={formData}
              onUpdate={updateFormData}
              onNext={() => goToNextStep("consultant")}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quote;
