import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, LucideIcon } from "lucide-react";
import { useState } from "react";

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  onClick?: () => void;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[\d\s\-\(\)]*$/.test(phone) && phone.length >= 10;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validação
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) newErrors.email = "E-mail é obrigatório";
    if (formData.email && !validateEmail(formData.email)) newErrors.email = "E-mail inválido";
    if (formData.phone && !validatePhone(formData.phone)) newErrors.phone = "Telefone inválido";
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Construir o corpo do email
      const subject = encodeURIComponent("Contato via Site - Landing Page");
      const body = encodeURIComponent(
        `Nome: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n\n` +
        `Mensagem:\n${formData.message}`
      );
      
      // Mostrar feedback de sucesso
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Após 3 segundos, tentar abrir email (fallback)
      setTimeout(() => {
        window.location.href = `mailto:addecondominios@hotmail.com?subject=${subject}&body=${body}`;
        setSubmitStatus("idle");
      }, 1500);
    }
  };

  const handleEmailClick = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
      // Focus no campo de nome
      setTimeout(() => {
        const nameInput = formElement.querySelector('input[type="text"]') as HTMLInputElement;
        if (nameInput) nameInput.focus();
      }, 500);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      value: "(11) 91489-5831 / (11) 4774-6263",
      href: "https://wa.me/5511914895831",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "addecondominios@hotmail.com",
      onClick: handleEmailClick,
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "R. Prof. Dimarães Antônio Sandei, 185 - Cidade da Saúde, Itapevi - SP",
      href: "https://www.google.com/maps/dir/?api=1&destination=R.+Prof.+Dimarães+Antônio+Sandei,+185+-+Cidade+da+Saude,+Itapevi+-+SP,+06693-130",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg – Sex: 9h às 17h",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-card/30">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-black text-sm uppercase tracking-wider">Contato</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
            Entre em <span className="text-gradient font-black">Contato</span>
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-lg font-light">
            Estamos prontos para atender você e seu condomínio. 
            Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {contactInfo.map((info) => {
                const baseClasses = "group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden";
                
                if (info.href) {
                  return (
                    <a
                      key={info.title}
                      href={info.href}
                      className={baseClasses}
                    >
                      <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                          <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <p className="text-xs sm:text-sm text-foreground mb-1 group-hover:text-primary-foreground transition-colors font-light">{info.title}</p>
                        <p className="text-foreground font-extrabold group-hover:text-primary-foreground transition-colors text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs break-all sm:break-normal">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                } else if (info.onClick) {
                  return (
                    <button
                      key={info.title}
                      onClick={info.onClick}
                      className={`${baseClasses} text-left cursor-pointer`}
                      type="button"
                    >
                      <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                          <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <p className="text-xs sm:text-sm text-foreground mb-1 group-hover:text-primary-foreground transition-colors font-light">{info.title}</p>
                        <p className="text-foreground font-extrabold group-hover:text-primary-foreground transition-colors text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs break-all sm:break-normal">
                          {info.value}
                        </p>
                      </div>
                    </button>
                  );
                } else {
                  return (
                    <div
                      key={info.title}
                      className={baseClasses}
                    >
                      <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                          <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <p className="text-xs sm:text-sm text-foreground mb-1 group-hover:text-primary-foreground transition-colors font-light">{info.title}</p>
                        <p className="text-foreground font-extrabold group-hover:text-primary-foreground transition-colors text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs break-all sm:break-normal">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            {/* Map */}
            <div className="aspect-video rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8!2d-46.9437!3d-23.5489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0f4b0e1e1e1f%3A0x1e1e1e1e1e1e1e1e!2sR.%20Prof.%20Dimar%C3%A3es%20Ant%C3%B4nio%20Sandei%2C%20185%20-%20Cidade%20da%20Sa%C3%BAde%2C%20Itapevi%20-%20SP%2C%2006693-130!5e0!3m2!1spt-BR!2sbr!4v1234567890&disableDefaultUI=1"
                alt="Mapa - Localização ADDECON - R. Prof. Dimarães Antônio Sandei, 185 - Cidade da Saúde, Itapevi - SP"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização - R. Prof. Dimarães Antônio Sandei, 185 - Itapevi, SP"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="p-8 rounded-3xl bg-background border border-border">
            <h3 className="text-2xl font-extrabold mb-6">Envie uma mensagem</h3>
            
            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/50 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-green-500 font-medium">Mensagem recebida! Entraremos em contato em breve.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-foreground mb-2">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-muted/50 border transition-colors text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                    errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-border focus:border-primary focus:ring-primary"
                  }`}
                  placeholder="Seu nome"
                />
                {errors.name && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.name}</p>}
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-foreground mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-muted/50 border transition-colors text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                      errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-border focus:border-primary focus:ring-primary"
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-thin text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-muted/50 border transition-colors text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                      errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-border focus:border-primary focus:ring-primary"
                    }`}
                    placeholder="(11) 99999-9999"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.phone}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-thin text-foreground mb-2">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl bg-muted/50 border transition-colors resize-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                    errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-border focus:border-primary focus:ring-primary"
                  }`}
                  placeholder="Como podemos ajudar?"
                />
                {errors.message && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.message}</p>}
              </div>
              
              <Button variant="hero" size="xl" className="w-full gap-2" disabled={submitStatus === "success"}>
                <Send className="w-5 h-5" />
                {submitStatus === "success" ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
