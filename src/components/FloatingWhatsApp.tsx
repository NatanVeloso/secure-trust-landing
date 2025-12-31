import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "5544988325210";
  const message = encodeURIComponent(
    "Olá! Vim através do site e gostaria de falar com um consultor sobre seguros. Poderia me ajudar?"
  );

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Tooltip */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 md:right-8 z-[9999] max-w-xs"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-border/50 p-4 relative">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-2 -right-2 bg-muted hover:bg-muted/80 rounded-full p-1.5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="flex items-start gap-3">
                <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Precisa de ajuda?</h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    Fale conosco agora pelo WhatsApp! Nossa equipe está pronta para te atender.
                  </p>
                  <button
                    onClick={handleClick}
                    className="bg-green-500 hover:bg-green-600 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors w-full"
                  >
                    Iniciar Conversa
                  </button>
                </div>
              </div>

              {/* Triangle pointer */}
              <div className="absolute bottom-4 -right-2 w-4 h-4 bg-white dark:bg-gray-900 border-r border-b border-border/50 rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        // onMouseEnter={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>

        {/* Button */}
        <div className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 md:p-5 rounded-full shadow-2xl transition-all duration-300">
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        </div>

        {/* Badge de notificação (opcional) */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
          1
        </div>
      </motion.button>
    </>
  );
};

export default FloatingWhatsApp;
