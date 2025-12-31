import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Como funciona a contratação de um seguro?",
    answer: "O processo é simples e rápido! Entre em contato conosco pelo WhatsApp ou formulário, faça uma cotação personalizada sem compromisso, escolha o plano ideal para suas necessidades e finalize a contratação. Todo o processo pode ser feito online e você recebe sua apólice por e-mail."
  },
  {
    question: "Como aciono o seguro em caso de sinistro?",
    answer: "Em caso de sinistro, entre em contato imediatamente com nossa central de atendimento 24h. Informe os detalhes do ocorrido, siga as orientações do atendente e providencie a documentação necessária. Nossa equipe acompanhará todo o processo até a resolução."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Os pagamentos podem ser feitos por boleto ou PIX."
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
  const content = useScrollAnimation(0.1);
  const faqList = useScrollAnimation(0.1);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Elementos decorativos de background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-12 rounded-full border border-primary/10"></div>
        </div>

        <div className="absolute -bottom-24 -right-24 w-96 h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-secondary/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-16 rounded-full border border-secondary/10"></div>
        </div>

        <div
          className="absolute top-1/3 left-10 w-32 h-32 border border-primary/10 rotate-12 opacity-40"
          style={{ borderRadius: '25%' }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Lado esquerdo - Header + CTA (2 colunas) */}
          <div
            ref={content.ref}
            className={`lg:col-span-2 transition-all duration-700 ${content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="text-center lg:text-left lg:sticky lg:top-24 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Perguntas Frequentes</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Tire suas <span className="text-gradient">dúvidas</span>
              </h2>

              <p className="text-lg text-muted-foreground">
                Reunimos as perguntas mais frequentes dos nossos clientes. Se não encontrar o que procura, entre em contato conosco!
              </p>

              {/* CTA Card */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground mt-8">
                <h3 className="font-bold text-lg mb-3">
                  Não encontrou sua resposta?
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Nossa equipe está pronta para esclarecer todas as suas dúvidas de forma personalizada.
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale com um especialista
                </a>
              </div>
            </div>
          </div>

          {/* Lado direito - Perguntas (3 colunas) */}
          <div
            ref={faqList.ref}
            className={`lg:col-span-3 flex flex-col gap-4 transition-all duration-700 ${faqList.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left bg-card border-2 rounded-xl px-4 py-3 hover:border-primary/50 transition-all group shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-md font-semibold pr-8 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;