import { useState } from "react";
import { useTheme } from "next-themes";

// Import das logos dos parceiros
import allianz from "@/assets/parceiros/Allianz.png";
import allseg from "@/assets/parceiros/allseg.png";
import axxa from "@/assets/parceiros/axxa.png";
import azos from "@/assets/parceiros/azos.png";
import azul from "@/assets/parceiros/azul.png";
import bb from "@/assets/parceiros/bb.png";
import bradesco from "@/assets/parceiros/bradesco.png";
import darwin from "@/assets/parceiros/darwin.png";
import ezzeSeguros from "@/assets/parceiros/Ezze-seguros.png";
import hdiSeguros from "@/assets/parceiros/hdi-seguros-logo.png";
import itau from "@/assets/parceiros/itau.png";
import justos from "@/assets/parceiros/justos.png";
import mapfre from "@/assets/parceiros/mapfre.png";
import mitsui from "@/assets/parceiros/mitsui.png";
import pier from "@/assets/parceiros/pier.png";
import porto from "@/assets/parceiros/porto.png";
import sancor from "@/assets/parceiros/sancor.png";
import suhai from "@/assets/parceiros/suhai.png";
import tokioMarine from "@/assets/parceiros/tokio-marine.png";
import zurich from "@/assets/parceiros/zurich.png";

const PartnersCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const { theme } = useTheme();

  // Lista de logos dos parceiros
  const partners = [
    { name: "Allianz", logo: allianz },
    { name: "Allseg", logo: allseg },
    { name: "Axxa", logo: axxa, invertOnLight: true }, // Logo branca, precisa inverter no tema light
    { name: "Azos", logo: azos },
    { name: "Azul", logo: azul },
    { name: "BB", logo: bb },
    { name: "Bradesco", logo: bradesco },
    { name: "Darwin", logo: darwin },
    { name: "Ezze Seguros", logo: ezzeSeguros },
    { name: "HDI Seguros", logo: hdiSeguros },
    { name: "Itaú", logo: itau },
    { name: "Justos", logo: justos },
    { name: "Mapfre", logo: mapfre },
    { name: "Mitsui", logo: mitsui },
    { name: "Pier", logo: pier },
    { name: "Porto", logo: porto },
    { name: "Sancor", logo: sancor },
    { name: "Suhai", logo: suhai },
    { name: "Tokio Marine", logo: tokioMarine },
    { name: "Zurich", logo: zurich },
  ];

  // Duplicar o array para criar o efeito infinito
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as maiores e mais confiáveis seguradoras do mercado
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradientes nas bordas para efeito de fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Container do carrossel */}
          <div className="flex overflow-hidden">
            <div
              className={`flex gap-8 ${isPaused ? 'animation-paused' : ''}`}
              style={{
                animation: 'scroll 40s linear infinite',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ${
                      partner.invertOnLight && theme === 'light' ? 'invert' : ''
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animation-paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default PartnersCarousel;
