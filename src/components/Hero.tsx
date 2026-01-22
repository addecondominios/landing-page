import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Shield, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(82 85% 50% / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(82 85% 50% / 0.05) 0%, transparent 50%)`
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float blur-xl" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-primary/5 animate-float blur-2xl" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-foreground">+15 anos de experiência</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-primary" style={{ fontFamily: 'Arbotek, sans-serif', fontWeight: 300 }}>ADDECON</span>
            <span className="text-foreground" style={{ fontFamily: 'Arbotek, sans-serif', fontWeight: 300 }}>DOMÍNIOS</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Administradora de Condomínios
          </p>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Gestão transparente e eficiente para o seu condomínio. 
            Mais de 50 condomínios gerenciados na região metropolitana de São Paulo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5511914895831?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="relative overflow-hidden group">
              <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10 font-semibold group-hover:text-primary-foreground transition-colors">Conheça Nossos Serviços</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 border border-border glow-primary">
              <Building2 className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl font-bold text-foreground">50+</span>
              <span className="text-foreground">Condomínios</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 border border-border">
              <Users className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl font-bold text-foreground">15+</span>
              <span className="text-foreground">Anos de Experiência</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 border border-border">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <span className="text-3xl font-bold text-foreground">100%</span>
              <span className="text-foreground">Transparência</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
