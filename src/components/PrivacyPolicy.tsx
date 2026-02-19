import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 bg-background">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Política de <span className="text-gradient">Privacidade</span>
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {/* Main Intro */}
            <div className="space-y-4 mb-8">
              <p className="text-foreground text-lg leading-relaxed">
                A sua privacidade é importante para nós. É política do Addecondomínios respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://addecondominios.com.br/" className="text-primary hover:text-primary/80 transition-colors">Addecondomínios</a>, e outros sites que possuímos e operamos.
              </p>

              <p className="text-foreground text-lg leading-relaxed">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
              </p>

              <p className="text-foreground text-lg leading-relaxed">
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>

              <p className="text-foreground text-lg leading-relaxed">
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
              </p>

              <p className="text-foreground text-lg leading-relaxed">
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <a href="https://politicaprivacidade.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">políticas de privacidade</a>.
              </p>

              <p className="text-foreground text-lg leading-relaxed">
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
              </p>

              <p className="text-foreground text-lg leading-relaxed">
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
              </p>
            </div>

            {/* Compromisso do Usuário */}
            <div className="space-y-6 my-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Compromisso do Usuário
              </h2>

              <p className="text-foreground text-lg leading-relaxed">
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Addecondomínios oferece no site e com caráter enunciativo, mas não limitativo:
              </p>

              <ul className="space-y-3 pl-6">
                <li className="text-foreground text-lg leading-relaxed list-disc">
                  <span>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</span>
                </li>
                <li className="text-foreground text-lg leading-relaxed list-disc">
                  <span>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</span>
                </li>
                <li className="text-foreground text-lg leading-relaxed list-disc">
                  <span>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Addecondomínios, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</span>
                </li>
              </ul>
            </div>

            {/* Mais informações */}
            <div className="space-y-6 my-12 border-t border-border pt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Mais Informações
              </h2>

              <p className="text-foreground text-lg leading-relaxed">
                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
              </p>

              <p className="text-foreground/80 text-base">
                Esta política é efetiva a partir de <strong>19 Fevereiro de 2026</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
