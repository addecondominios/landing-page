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
          <span className="text-primary font-black text-sm uppercase tracking-wider">Sobre Nós</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
            Especialistas em <span className="text-gradient font-black">Gestão Condominial</span>
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-lg font-light">
            Somos especialistas em gestão transparente, há mais de 15 anos no mercado 
            administrativo condominial desburocratizando o acesso às informações.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-primary/20 shadow-2xl relative">
              <img 
                src={servicosImage}
                alt="Equipe de especialistas em gestão condominial - ADDECON Domínios"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-between h-full p-8">
                <div></div>
                <div className="text-center space-y-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl md:text-7xl font-extrabold text-primary drop-shadow-2xl">+15</span>
                    <span className="text-xl md:text-2xl text-primary font-extrabold drop-shadow-lg">anos de experiência</span>
                  </div>
                  <div className="space-y-2 mt-6">
                    <p className="text-lg md:text-xl text-white font-extrabold drop-shadow-lg leading-snug">
                      Gestão profissional de condomínios com transparência, eficiência e resultados comprovados.
                    </p>
                    <p className="text-sm md:text-base text-white/80 font-light drop-shadow-md leading-relaxed">
                      Soluções completas para síndicos e moradores, com processos organizados, atendimento próximo e foco na valorização do seu patrimônio.
                    </p>
                  </div>
                </div>
                <div className="w-40 h-auto opacity-70">
                  <img src={logoBranco} alt="Logo ADDECON Domínios" loading="lazy" className="w-full h-auto" />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
          </div>

          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              Possuímos como pilares a <span className="text-foreground font-extrabold">qualidade, eficiência, honestidade e comodidade</span> de nossos serviços com os condomínios.
            </p>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              Sendo uma das maiores administradoras de Itapevi e região, atuando <span className="text-white font-black">em toda a região metropolitana e interior de São Paulo</span>.
            </p>
            <div className="flex justify-center flex-wrap gap-5 pt-8">
              {["Transparência", "Qualidade", "Eficiência", "Confiança"].map((tag) => (
                <span
                  key={tag}
                  className="px-8 py-4 rounded-full bg-primary/10 text-primary text-lg font-black border border-primary/20 h-16 flex items-center justify-center"
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
              <h3 className="text-xl font-extrabold mb-4 text-foreground">{value.title}</h3>
              <p className="text-foreground leading-relaxed font-light">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
