import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  FileText, 
  Vote, 
  MessageSquare, 
  Calendar,
  Download
} from "lucide-react";

const AppSection = () => {
  const features = [
    { icon: FileText, text: "2ª via de Boleto" },
    { icon: FileText, text: "Documentos do condomínio" },
    { icon: Vote, text: "Assembleia Online" },
    { icon: MessageSquare, text: "Enquetes e Reclamações" },
    { icon: Calendar, text: "Reserva de área comum" },
    { icon: MessageSquare, text: "Críticas e sugestões" },
  ];

  return (
    <section id="aplicativo" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Aplicativo</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Informação na <span className="text-gradient">palma da sua mão</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Acesse a prestação de contas, atas e documentos do condomínio pelo nosso app. 
              Tudo em um só clique!
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="gap-3">
                <Download className="w-5 h-5" />
                Download iOS
              </Button>
              <Button variant="heroOutline" size="xl" className="gap-3">
                <Download className="w-5 h-5" />
                Download Android
              </Button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* Phone Frame */}
              <div className="relative w-72 h-[580px] rounded-[3rem] bg-gradient-to-b from-secondary to-muted border-4 border-border shadow-2xl p-3">
                {/* Screen */}
                <div className="w-full h-full rounded-[2.5rem] bg-background overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-8 bg-card flex items-center justify-center">
                    <div className="w-20 h-5 rounded-full bg-border" />
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-6 h-6 text-primary" />
                      <span className="font-bold text-primary">ADDECON</span>
                      <span className="font-bold text-foreground text-sm">APP</span>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="space-y-3 mt-6">
                      {["Boletos", "Documentos", "Assembleias", "Reservas", "Contato"].map((item, i) => (
                        <div
                          key={item}
                          className="p-3 rounded-xl bg-card border border-border flex items-center gap-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <div className="w-4 h-4 rounded bg-primary/50" />
                          </div>
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center animate-float">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Vote className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
