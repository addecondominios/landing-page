import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/addecon08", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/addecondominios/", label: "Instagram" },
    { icon: Phone, href: "https://api.whatsapp.com/message/T2RUN2KJNEY7C1?autoload=1&app_absent=0", label: "WhatsApp" },
  ];

  const quickLinks = [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Aplicativo", href: "#aplicativo" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-1 mb-6">
              <span className="text-2xl text-primary" style={{ fontFamily: 'Arbotek, sans-serif', fontWeight: 300 }}>ADDECON</span>
              <span className="text-2xl text-foreground" style={{ fontFamily: 'Arbotek, sans-serif', fontWeight: 300 }}>DOMÍNIOS</span>
            </a>
            <p className="text-foreground mb-6 leading-relaxed">
              Especialistas em gestão transparente de condomínios há mais de 15 anos.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base break-words flex-1">
                  (11) 91489-5831 / (11) 4774-6263
                </span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base break-all sm:break-normal flex-1">
                  Addecondominios@hotmail.com
                </span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base flex-1">
                  R. Prof. Dimarães Antônio Sandei, 185 - Itapevi, SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground text-sm">
            © {new Date().getFullYear()} Addecondomínios. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
