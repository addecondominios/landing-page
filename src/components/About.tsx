import { Target, Eye, Heart } from "lucide-react";
import servicosImage from "@/assets/servicos-administradora-condominios.jpg";
import logoBranco from "@/assets/LOGO_Branco.svg";

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
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Nós</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Especialistas em <span className="text-gradient">Gestão Condominial</span>
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Somos especialistas em gestão transparente, há mais de 15 anos no mercado 
            administrativo condominial desburocratizando o acesso às informações.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
              <div 
                className="w-full h-full relative flex items-center justify-center"
                style={{
                  backgroundImage: `url(${servicosImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="relative z-10 flex flex-col items-center justify-between h-full p-8">
                  <div></div>
                  <div className="text-center">
                    <div className="text-7xl md:text-8xl font-extrabold text-primary mb-4 drop-shadow-2xl">+15</div>
                    <p className="text-xl md:text-2xl text-white font-semibold drop-shadow-lg">Anos de experiência</p>
                    <p className="text-white/90 mt-2 drop-shadow-md leading-relaxed">administrando condomínios e pessoas<br /></p>
                  </div>
                  <div className="w-40 h-auto opacity-70">
                    <img src={logoBranco} alt="Addecon" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Possuímos como pilares a <span className="text-foreground font-semibold">qualidade, eficiência, honestidade e comodidade</span> de nossos serviços com os condomínios.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Sendo uma das maiores administradoras de Itapevi e região, atuando <span className="text-white font-bold">em toda a região metropolitana e interior de São Paulo</span>.
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
              <p className="text-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
