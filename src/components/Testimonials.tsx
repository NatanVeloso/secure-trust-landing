import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresária",
    location: "São Paulo, SP",
    content:
      "Excelente atendimento! A equipe foi muito atenciosa e me ajudou a encontrar o seguro perfeito para minha empresa. Recomendo!",
    rating: 5,
    avatar: "MS",
  },
  {
    name: "João Santos",
    role: "Engenheiro",
    location: "Rio de Janeiro, RJ",
    content:
      "Quando precisei acionar o seguro auto, o processo foi rápido e sem complicação. Estou muito satisfeito com o serviço prestado.",
    rating: 5,
    avatar: "JS",
  },
  {
    name: "Ana Costa",
    role: "Professora",
    location: "Belo Horizonte, MG",
    content:
      "Já tinha seguro em outra empresa, mas a SegX ofereceu condições muito melhores e um atendimento personalizado. Fiz a troca e não me arrependo!",
    rating: 5,
    avatar: "AC",
  },
];

const statsData = [
  { value: 4.9, label: "Avaliação média", suffix: "", decimals: 1 },
  { value: 5, label: "Clientes atendidos", suffix: "mil+", decimals: 0 },
  { value: 98, label: "Taxa de satisfação", suffix: "%", decimals: 0 },
  { value: 10, label: "Anos de experiência", suffix: "+", decimals: 0 },
];

// Hook para animação de números
const useCountUp = (end: number, duration: number = 2000, decimals: number = 0, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (end - startValue) * easeOut;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return decimals > 0 ? count.toFixed(decimals) : Math.floor(count);
};

const AnimatedStat = ({ value, label, suffix, decimals, isVisible }: {
  value: number;
  label: string;
  suffix: string;
  decimals: number;
  isVisible: boolean;
}) => {
  const count = useCountUp(value, 2000, decimals, isVisible);

  return (
    <div>
      <p className="text-4xl font-bold text-primary mb-2">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const Testimonials = () => {
  const header = useScrollAnimation(0.1);
  const stats = useScrollAnimation(0.1);
  const cta = useScrollAnimation(0.1);

  // Carousel states
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = touchStart - touchEnd;
    const minSwipe = 50;

    if (diff > minSwipe) {
      nextSlide();
    } else if (diff < -minSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-700 ${header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A confiança de nossos clientes satisfeitos em todo o Brasil
          </p>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const cardAnim = useScrollAnimation(0.1);
            return (
              <Card
                key={index}
                ref={cardAnim.ref}
                className={`relative hover:shadow-lg transition-all duration-700 hover:-translate-y-1 ${cardAnim.isVisible
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "opacity-0 translate-y-12 -rotate-3"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          <div
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <Card className="relative transition-all duration-300 h-full">
                    <CardContent className="pt-6">
                      <Quote className="w-10 h-10 text-primary/20 mb-4" />

                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-semibold text-primary">{testimonial.avatar}</span>
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} • {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Setas de navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-background border-2 border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-background border-2 border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicadores (dots) */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Social proof stats com animação de números */}
        <div
          ref={stats.ref}
          className={`mt-16 pt-16 border-t grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700 ${stats.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          {statsData.map((stat, index) => (
            <AnimatedStat
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              decimals={stat.decimals}
              isVisible={stats.isVisible}
            />
          ))}
        </div>

        {/* CTA adicional */}
        <div
          ref={cta.ref}
          className={`text-center mt-12 transition-all duration-700 ${cta.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <a
            href="/cotacao"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Cote gratuitamente
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;