import { motion } from "framer-motion";
import { useRef, useState } from "react";
import bb from "../assets/parceiros/bp.png";
import axxa from "../assets/parceiros/axxa.png";
import azos from "../assets/parceiros/azos.png";
import azul from "../assets/parceiros/azul.png";
import itau from "../assets/parceiros/itau.png";
import pier from "../assets/parceiros/pier.png";
import porto from "../assets/parceiros/porto.png";
import suhai from "../assets/parceiros/suhai.png";
import justos from "../assets/parceiros/justos.png";
import mapfre from "../assets/parceiros/mapfre.png";
import mitsui from "../assets/parceiros/mitsui.png";
import sancor from "../assets/parceiros/sancor.png";
import allseg from "../assets/parceiros/allseg.png";
import darwin from "../assets/parceiros/darwin.png";
import zurich from "../assets/parceiros/zurich.png";
import allianz from "../assets/parceiros/Allianz.png";
import ezzeSeguros from "../assets/parceiros/ezze.png";
import bradesco from "../assets/parceiros/bradesco.png";
import tokioMarine from "../assets/parceiros/tokio-marine.png";
import hdiSeguros from "../assets/parceiros/hdi-seguros-logo.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PartnersCarousel = () => {
  const partners = [
    { name: "Allianz", logo: allianz },
    { name: "Allseg", logo: allseg },
    { name: "Axxa", logo: axxa },
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

  const duplicatedPartners = [...partners, ...partners];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsPaused(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPaused || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Touch events para mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPaused || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Parceiros
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com as maiores e mais confiáveis seguradoras do mercado
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              className={`flex overflow-hidden ${isPaused ? "cursor-grabbing" : "cursor-grab"}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={`flex gap-8 ${isPaused ? "paused" : "animate-scroll"}`}
              >
                {duplicatedPartners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-border select-none"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain pointer-events-none"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
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

        .animate-scroll {
          animation: scroll 90s linear infinite;
        }

        .paused {
          animation: scroll 90s linear infinite;
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersCarousel;