import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Como funciona a contratação de um seguro?",
    answer: "O processo é simples e rápido! Entre em contato conosco pelo WhatsApp ou formulário, faça uma cotação personalizada sem compromisso, escolha o plano ideal para suas necessidades e finalize a contratação. Todo o processo pode ser feito online e você recebe sua apólice por e-mail."
  },
  {
    question: "Posso cancelar meu seguro a qualquer momento?",
    answer: "Sim! Você tem total liberdade para cancelar seu seguro quando desejar. Basta entrar em contato conosco e solicitar o cancelamento. Dependendo do tipo de seguro e do momento do cancelamento, você pode ter direito a restituição proporcional do valor pago."
  },
  {
    question: "Quanto tempo leva para a aprovação do seguro?",
    answer: "A aprovação geralmente é rápida! Para seguros mais simples como auto e residencial, a aprovação pode ocorrer em até 24 horas. Seguros de vida podem levar de 3 a 5 dias úteis, dependendo da análise de saúde. Casos mais complexos podem requerer documentação adicional."
  },
  {
    question: "Como aciono o seguro em caso de sinistro?",
    answer: "Em caso de sinistro, entre em contato imediatamente com nossa central de atendimento 24h. Informe os detalhes do ocorrido, siga as orientações do atendente e providencie a documentação necessária. Nossa equipe acompanhará todo o processo até a resolução."
  },
  {
    question: "O seguro cobre todas as situações?",
    answer: "Cada tipo de seguro possui coberturas específicas detalhadas na apólice. Existem coberturas básicas e opcionais que podem ser adicionadas. Durante a cotação, explicamos claramente o que está coberto e o que não está, garantindo total transparência antes da contratação."
  },
  {
    question: "Posso parcelar o pagamento do seguro?",
    answer: "Sim! Oferecemos diversas opções de pagamento para facilitar: pagamento anual com desconto, parcelamento mensal no cartão de crédito ou débito automático em conta. As condições variam conforme a seguradora e o tipo de seguro contratado."
  },
  {
    question: "É necessário fazer vistoria no veículo ou imóvel?",
    answer: "Depende do tipo e valor do seguro. Para seguros auto, geralmente é necessária vistoria prévia. Para seguros residenciais, a vistoria pode ser solicitada em casos específicos. Nossa equipe orientará sobre a necessidade e agendará a vistoria da forma mais conveniente para você."
  },
  {
    question: "Como funciona a renovação do seguro?",
    answer: "Antes do vencimento, entramos em contato para renovação. Você pode manter as mesmas condições ou fazer ajustes na cobertura. Enviamos uma nova cotação com valores atualizados e, após sua aprovação, a renovação é processada automaticamente sem interrupção da cobertura."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const header = useScrollAnimation(0.1);
  const cta = useScrollAnimation(0.2);

  return (
    <section id="faq" className="relative py-24 bg-muted/30 overflow-hidden">
      
      {/* Elementos decorativos de background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Círculo top-left */}
        <div className="absolute -top-24 -left-24 w-80 h-80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-12 rounded-full border border-primary/10"></div>
        </div>

        {/* Círculo bottom-right */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-secondary/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-16 rounded-full border border-secondary/10"></div>
        </div>

        {/* Forma geométrica flutuante */}
        <div className="absolute top-1/3 left-10 w-32 h-32 border border-primary/10 rotate-12 opacity-40"
          style={{ borderRadius: '25%' }}>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Perguntas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tire suas dúvidas
          </h2>
          <p className="text-xl text-muted-foreground">
            Respondemos as perguntas mais comuns sobre nossos serviços e seguros
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const faqAnim = useScrollAnimation(0.1);
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                ref={faqAnim.ref}
                className={`transition-all duration-700 ${faqAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left bg-card border-2 rounded-lg p-6 hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold pr-8 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA adicional */}
        <div
          ref={cta.ref}
          className={`text-center mt-12 transition-all duration-700 ${cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-muted-foreground mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;