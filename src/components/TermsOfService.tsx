import React from 'react';

const TermsOfService = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 bg-background">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Termos de <span className="text-gradient">Uso</span>
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-12">
            {/* 1. Termos */}
            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                1. Termos
              </h2>

              <p className="text-foreground text-lg leading-relaxed">
                Ao acessar ao site <a href="https://addecondominios.com.br/" className="text-primary hover:text-primary/80 transition-colors">Addecondomínios</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
              </p>
            </section>

            {/* 2. Uso de Licença */}
            <section className="space-y-6 border-t border-border pt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                2. Uso de Licença
              </h2>

              <p className="text-foreground text-lg leading-relaxed">
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Addecondomínios, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
              </p>

              <ol className="space-y-3 pl-6">
                <li className="text-foreground text-lg leading-relaxed list-decimal">
                  modificar ou copiar os materiais;
                </li>
                <li className="text-foreground text-lg leading-relaxed list-decimal">
                  usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);
                </li>
                <li className="text-foreground text-lg leading-relaxed list-decimal">
                  tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Addecondomínios;
                </li>
                <li className="text-foreground text-lg leading-relaxed list-decimal">
                  remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou
                </li>
                <li className="text-foreground text-lg leading-relaxed list-decimal">
                  transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
                </li>
              </ol>

              <p className="text-foreground text-lg leading-relaxed">
                Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Addecondomínios a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
              </p>
            </section>

            {/* 3. Isenção de responsabilidade */}
            <section className="space-y-6 border-t border-border pt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                3. Isenção de Responsabilidade
              </h2>

              <ol className="space-y-4 pl-6">
                <li className="text-foreground text-lg leading-relaxed list-decimal">
                  Os materiais no site da Addecondomínios são fornecidos 'como estão'. Addecondomínios não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                </li>
                <li className="text-foreground text-lg leading-relaxed list-decimal">
                  Além disso, o Addecondomínios não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                </li>
              </ol>
            </section>

            {/* 4. Limitações */}
            <section className="space-y-6 border-t border-border pt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                4. Limitações
              </h2>

              <p className="text-foreground text-lg leading-relaxed">
                Em nenhum caso o Addecondomínios ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Addecondomínios, mesmo que Addecondomínios ou um representante autorizado da Addecondomínios tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
              </p>
            </section>

            {/* 5. Precisão dos materiais */}
            <section className="space-y-6 border-t border-border pt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                5. Precisão dos Materiais
              </h2>

              <p className="text-foreground text-lg leading-relaxed">
                Os materiais exibidos no site da Addecondomínios podem incluir erros técnicos, tipográficos ou fotográficos. Addecondomínios não garante que qualquer material em seu site seja preciso, completo ou atual. Addecondomínios pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Addecondomínios não se compromete a atualizar os materiais.
              </p>
            </section>

            {/* 6. Links */}
            <section className="space-y-6 border-t border-border pt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                6. Links
              </h2>

              <p className="text-foreground text-lg leading-relaxed">
                O Addecondomínios não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Addecondomínios do site. O uso de qualquer site vinculado é por conta e risco do usuário.
              </p>
            </section>

            {/* Modificações */}
            <section className="space-y-6 border-t border-border pt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Modificações
              </h3>

              <p className="text-foreground text-lg leading-relaxed">
                O Addecondomínios pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
              </p>
            </section>

            {/* Lei aplicável */}
            <section className="space-y-6 border-t border-border pt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Lei Aplicável
              </h3>

              <p className="text-foreground text-lg leading-relaxed">
                Estes termos e condições são regidos e interpretados de acordo com as leis do Addecondomínios e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
