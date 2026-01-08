import logo from "@/assets/logo.png";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const whatsappNumber = "5544988325210";
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de fazer uma cotação de seguro."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const content = useScrollAnimation(0.1);

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const addresses = [
    {
      city: "Umuarama - PR",
      label: "(Matriz)",
      address: "Av. Presidente Castelo Branco, 3806 - Sala 1302A",
      cep: "CEP 87501-170",
      phone: "(41) 99245-5013",
      phoneLink: "tel:+5541002455013",
      mapsUrl: "https://maps.google.com/maps?q=Av+Presidente+Castelo+Branco+3806+Umuarama+PR",
    },
    {
      city: "Curitiba - PR",
      label: "",
      address: "Edifício AR 3000 - Praça São Paulo da Cruz, 50 - Sala 1904, Juvevê",
      cep: "CEP 80030-480",
      phone: "(11) 92189-2608",
      phoneLink: "tel:+5511921892608",
      mapsUrl: "https://maps.google.com/maps?q=Praça+São+Paulo+da+Cruz+50+Juvevê+Curitiba+PR",
    },
  ];

  return (
    <footer className="footer-bg text-background">
      <div className="container mx-auto px-4 py-16">
        <div
          ref={content.ref}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 transition-all duration-700 ${
            content.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="SegX Seguros"
              className={`h-12 w-auto ${mounted && theme === "light" ? "brightness-0 invert" : ""}`}
            />
            <p className="text-background/70 text-sm leading-relaxed">
              Protegendo o que é importante para você há mais de 10 anos com
              transparência e compromisso.
            </p>
            <Button
              asChild
              className="bg-background text-foreground hover:bg-background/90"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-4 h-4" />
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicos" className="text-background/70 hover:text-background transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/70 hover:text-background transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-background/70 hover:text-background transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/70 hover:text-background transition-colors">
                  Faq
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicos" className="text-background/70 hover:text-background transition-colors">
                  Seguro Auto
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/70 hover:text-background transition-colors">
                  Seguro Residencial
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/70 hover:text-background transition-colors">
                  Seguro de Vida
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/70 hover:text-background transition-colors">
                  Seguro Empresarial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:atendimento@segxseguros.com.br"
                  className="text-background/70 hover:text-background transition-colors break-all"
                >
                  atendimento@segxseguros.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="text-background/70 space-y-4">
                  {addresses.map((item) => (
                    <div key={item.city} className="space-y-1">
                      <a
                        href={item.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group hover:text-background transition-colors"
                      >
                        <span className="font-medium text-background/90 group-hover:text-background flex items-center gap-1">
                          {item.city} {item.label && <span className="text-xs font-normal">{item.label}</span>}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <span className="text-xs leading-relaxed block">
                          {item.address}
                          <br />
                          {item.cep}
                        </span>
                      </a>
                      <a
                        href={item.phoneLink}
                        className="text-xs flex items-center gap-1 hover:text-background transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        {item.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <div className="flex flex-wrap justify-center gap-4">
              <p>CNPJ: 63.117.957/0001-32</p>
              <p>•</p>
              <p>SUSEP: 252174335</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          <p className="text-center mt-6 text-background/70 text-sm">
            © {new Date().getFullYear()} SegX Seguros. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;