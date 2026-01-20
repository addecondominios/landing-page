import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
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
      value: "(11) 99999-9999",
      href: "tel:+5511999999999",
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
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
                  className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                  <p className="text-foreground font-semibold">{info.value}</p>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-2xl bg-muted/30 border border-border flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                <p className="text-muted-foreground">Itapevi, São Paulo</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-3xl bg-background border border-border">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
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
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
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
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
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
                <label className="block text-sm font-medium text-muted-foreground mb-2">
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
