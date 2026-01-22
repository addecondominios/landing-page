import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      value: "(11) 91489-5831 / (11) 4774-6263",
      href: "tel:+5511914895831",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@addecon.com.br",
      href: "mailto:contato@addecon.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Itapevi - SP",
      href: "#",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg - Sex: 8h às 18h",
      href: "#",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contato</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Estamos prontos para atender você e seu condomínio. 
            Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <p className="text-sm text-foreground mb-1 group-hover:text-primary-foreground transition-colors">{info.title}</p>
                    <p className="text-foreground font-semibold group-hover:text-primary-foreground transition-colors flex items-center gap-2">
                      {info.title === "Telefone / WhatsApp" && <MessageCircle className="w-4 h-4" />}
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="aspect-video rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8!2d-46.9437!3d-23.5489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0f4b0e1e1e1f%3A0x1e1e1e1e1e1e1e1e!2sR.%20Prof.%20Dimar%C3%A3es%20Ant%C3%B4nio%20Sandei%2C%20185%20-%20Cidade%20da%20Saude%2C%20Itapevi%20-%20SP%2C%2006693-130!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização - R. Prof. Dimarães Antônio Sandei, 185 - Itapevi, SP"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-3xl bg-background border border-border">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none text-foreground"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>
              <Button variant="hero" size="xl" className="w-full gap-2">
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
