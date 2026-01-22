import { 
  Users, 
  DollarSign, 
  FileText, 
  Briefcase, 
  Wrench, 
  Scale,
  CheckCircle2
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Apoio ao Síndico",
      description: "Trabalhamos apoiando seu plano de trabalho e direcionando para resultados inovadores.",
      features: [
        "Convocar assembleias",
        "Cumprimento das regras da convenção",
        "Cobrança de contribuições",
        "Manutenção das áreas comuns"
      ]
    },
    {
      icon: DollarSign,
      title: "Assessoria Financeira",
      description: "Suporte completo na gestão financeira do seu condomínio.",
      features: [
        "Planejamento financeiro",
        "Controle de cotas condominiais",
        "Gerenciamento bancário",
        "Demonstrativos financeiros"
      ]
    },
    {
      icon: FileText,
      title: "Assessoria Condominial",
      description: "Assessoria direta ao bom cumprimento das obrigações legais.",
      features: [
        "Gestão de conflitos",
        "Elaboração de documentos",
        "Realização de assembleias",
        "Atendimento direto"
      ]
    },
    {
      icon: Briefcase,
      title: "Gestão de RH",
      description: "Administração completa do quadro de funcionários.",
      features: [
        "Contratação de funcionários",
        "Folha de pagamento",
        "Rescisões e férias",
        "Gestão de benefícios"
      ]
    },
    {
      icon: Scale,
      title: "Assessoria Jurídica",
      description: "Suporte jurídico especializado para condomínios.",
      features: [
        "Consultoria legal",
        "Análise de contratos",
        "Defesa jurídica",
        "Cobranças judiciais"
      ]
    },
    {
      icon: Wrench,
      title: "Manutenção",
      description: "Serviços completos de manutenção predial.",
      features: [
        "Manutenção preventiva",
        "Reformas e melhorias",
        "Automação predial",
        "Consultoria arquitetônica"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-card/30">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Soluções <span className="text-gradient">Completas</span>
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Oferecemos uma gama completa de serviços para a administração 
            eficiente e transparente do seu condomínio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
