import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de fazer uma cotação de seguro."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="SEG X Seguros" className="h-12 w-auto brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed">
              Protegendo o que é importante para você há mais de 15 anos com
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
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Seguro Auto
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Seguro Residencial
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Seguro de Vida
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Seguro Empresarial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/70">(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/70">contato@segxseguros.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/70">
                  Av. Paulista, 1000 - Sala 100<br />
                  São Paulo, SP - 01310-100
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <div className="flex flex-wrap justify-center gap-4">
              <p>CNPJ: 12.345.678/0001-90</p>
              <p>•</p>
              <p>SUSEP: 12345.678901/2023-45</p>
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
            © {new Date().getFullYear()} SEG X Seguros. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
