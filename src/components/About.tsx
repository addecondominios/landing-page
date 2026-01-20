import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Nossa missão é entregar qualidade de forma eficaz e transparente, democratizar acesso às informações condominiais e estabelecer um padrão de qualidade nos serviços prestados.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Trazer inovações tecnológicas na administração condominial, aumentando a produtividade e facilitando o contato entre prestador e cliente.",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Valorizamos fornecer o melhor serviço, cuidar com zelo do patrimônio, sempre trabalhando com honestidade e transparência.",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Nós</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Especialistas em <span className="text-gradient">Gestão Condominial</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Somos especialistas em gestão transparente, há mais de 15 anos no mercado 
            administrativo condominial desburocratizando o acesso às informações.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 border border-primary/20">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl font-extrabold text-gradient mb-4">15+</div>
                  <p className="text-xl text-muted-foreground">Anos de experiência</p>
                  <p className="text-muted-foreground/60 mt-2">administrando condomínios</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Possuímos como pilares a <span className="text-foreground font-semibold">qualidade, eficiência, honestidade e comodidade</span> de nossos serviços com os condomínios.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sendo uma das maiores administradoras de Itapevi e região, gerenciando <span className="text-primary font-semibold">mais de 50 condomínios</span> em toda a região metropolitana de São Paulo.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Transparência", "Qualidade", "Eficiência", "Confiança"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:glow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
