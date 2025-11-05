import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

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
      "Já tinha seguro em outra empresa, mas a SEG X ofereceu condições muito melhores e um atendimento personalizado. Fiz a troca e não me arrependo!",
    rating: 5,
    avatar: "AC",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            A confiança de milhares de clientes satisfeitos em todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">
                      {testimonial.avatar}
                    </span>
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
          ))}
        </div>

        {/* Social proof stats */}
        <div className="mt-16 pt-16 border-t grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-primary mb-2">4.9</p>
            <p className="text-sm text-muted-foreground">Avaliação média</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">50mil+</p>
            <p className="text-sm text-muted-foreground">Clientes atendidos</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">98%</p>
            <p className="text-sm text-muted-foreground">Taxa de satisfação</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">15+</p>
            <p className="text-sm text-muted-foreground">Anos de experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
