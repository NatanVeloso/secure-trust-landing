import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const insuranceTypes = [
  { value: "auto", label: "Seguro Auto" },
  { value: "residencial", label: "Seguro Residencial" },
  { value: "vida", label: "Seguro de Vida" },
  { value: "empresarial", label: "Seguro Empresarial" },
  { value: "outros", label: "Outros" },
];

const contactItems = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(44) 98832-5210",
    subtitle: "Segunda a Sexta, 8h às 18h",
    href: "tel:+5544988325210",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "atendimento@segxseguros.com.br",
    subtitle: "Respondemos em até 24h",
    href: "mailto:atendimento@segxseguros.com.br",
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Av. Presidente Castelo Branco, 3806 - Sala 1302A",
    subtitle: "Umuarama, PR - CEP 87501-170",
  },
];

const benefits = [
  "Atendimento personalizado",
  "Melhores preços do mercado",
  "Suporte 24 horas",
  "+20 seguradoras parceiras",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.segxseguros.com.br/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Solicitação enviada!",
          description: "Em breve entraremos em contato com você.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Fale Conosco
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Entre em <span className="text-gradient">contato</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            Estamos prontos para ajudar você a encontrar a proteção ideal.
            Preencha o formulário ou entre em contato pelos nossos canais.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-2 space-y-6 lg:space-y-8 min-w-0"
          >
            <motion.div
              variants={cardVariants}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border/50 overflow-hidden"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {contactItems.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="flex items-start gap-3 lg:gap-4 min-w-0"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors block truncate text-sm lg:text-base"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm lg:text-base break-words">{item.content}</p>
                      )}
                      <p className="text-xs lg:text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-primary rounded-2xl p-6 lg:p-8 text-primary-foreground"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 shrink-0" />
                <h3 className="font-bold text-base lg:text-lg">Por que escolher a SegX?</h3>
              </div>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 text-primary-foreground/90 text-sm lg:text-base"
              >
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground shrink-0" />
                    {benefit}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={formVariants}
            className="lg:col-span-3 min-w-0"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border/50"
            >
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl font-bold text-foreground mb-6"
              >
                Solicite sua cotação gratuita
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-4 lg:gap-6"
              >
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    maxLength={100}
                    className="bg-background"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    maxLength={255}
                    className="bg-background"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    maxLength={20}
                    className="bg-background"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="service">Tipo de seguro *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger id="service" className="bg-background">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {insuranceTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div variants={itemVariants} className="sm:col-span-2 space-y-2">
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    maxLength={1000}
                    className="bg-background resize-none"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full mt-6 bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Solicitar Cotação
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  🔒 Seus dados estão seguros. Ao enviar, você concorda com nossa{" "}
                  <a href="#" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;