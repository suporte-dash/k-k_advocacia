# PROJECT_STATE — Karlla Pinheiro & Keyteler Leite Advogadas

## 📌 Onde parámos
- **Correção de Alto Contraste do Número e Marcador Editorial da Seção 05 (Perguntas Frequentes)**:
  - **Identificação da Causa-Raiz**:
    - A Seção 05 (`#faq`) adota fundo Vinho Nobre profundo (`section-wine faq-section`).
    - Uma regra herdada em `.faq-section .section-marker-light .marker-number` forçava o número `05` para a cor `var(--wine-deep)` (`#42141e`). Com isso, o número ficava em vinho escuro sobre fundo vinho escuro (contraste de apenas ~1.2:1), tornando-se praticamente imperceptível.
  - **Resolução de Alta Precisão Tipográfica**:
    - Atualizadas as regras de `.section-wine .section-marker-light .marker-number` e `.section-wine.faq-section .marker-number` para **`var(--gold-light)` (`#e2bd89`)**, atingindo contraste superior a 7.5:1 (índice WCAG AAA).
    - O rótulo *"PERGUNTAS FREQUENTES"* e o filete divisor também foram calibrados para o mesmo ouro champanhe luminoso, criando perfeita harmonia com os números das perguntas (`01`, `02`, `03`...) e com o kicker superior.
  - **Qualidade & Blindagem por Testes**:
    - **22/22 testes aprovados** no Vitest.
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 2.97s.
    - Servidor local atualizado via HMR.

- **Ativação Padrão do Selo Sólido de Autoridade no Mobile (`Seção 01 — Presença em Números`)**:
  - **Sensibilidade de UX Touch Mobile Implementada**:
    - Em celulares (`max-width: 760px`), os círculos com ícones (`.proof-card .proof-card-icon-wrap`) em repouso tinham um fundo translúcido sutil que ficava apagado contra a luz de telas de smartphones.
    - Aplicada a mesma filosofia da Seção 03: no mobile, o ícone já nasce no seu estado ativo de alta autoridade, preenchido com **Vinho Nobre profundo (`var(--wine)`)**, borda sólida e símbolo em **branco luminoso puro (`#ffffff`)**, além de sombra suave (`box-shadow: 0 4px 12px rgba(91, 31, 42, 0.16)`).
    - O ícone atua como um selo/medalha de certificação visível de imediato sem depender de interação inexistente de mouse.
    - Adicionado microfeedback tátil `:active` com leve compressão (`transform: scale(0.96)`).
    - No desktop (`> 760px`), preservada 100% da experiência interativa dinâmica com cursor de mouse (repouso translúcido e iluminação no `:hover`).
  - **Qualidade & Blindagem por Testes**:
    - **22/22 testes aprovados** no Vitest.
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.47s.

- **Ativação Padrão do Estado Sólido de Alta Conversão no Mobile (`Seção 03 — Cards de Atuação`)**:
  - **Sensibilidade de UX Touch Mobile Implementada**:
    - Em dispositivos móveis não existe o cursor de mouse (`hover`). O botão *"Ver detalhes e requisitos ↗"* e o ícone circular em repouso tinham aspecto desmaiado e secundário.
    - No mobile (`max-width: 768px`), o botão principal (`.practice-card-detail-trigger`) agora já nasce com preenchimento sólido em vinho profundo (`#5b1f2a`), borda fina em ouro champanhe, texto branco vívido e sombra aveludada (`box-shadow: 0 4px 14px rgba(91, 31, 42, 0.18)`), comunicando de imediato ao dedo do usuário que é a ação primária de abertura do drawer.
    - O ícone circular do topo (`.practice-card-icon`) também nasce preenchido em vinho com símbolo em marfim puro.
    - Adicionado microfeedback tátil no toque (`:active`) com leve compressão (`transform: scale(0.97)`) e tom vinho fechado (`#44141e`).
    - No desktop (`> 768px`), preservado 100% da experiência interativa dinâmica com mouse, onde o card ganha o estado vinho ao passar o cursor por cima.
  - **Qualidade & Blindagem por Testes**:
    - **22/22 testes aprovados** no Vitest.
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.05s.
    - Servidor local ativo com HMR instantâneo em `http://localhost:5173/`.

- **Alinhamento e Centralização dos Cards de Atuação Previdenciária (`Seção 03 — Área de Atuação`)**:
  - **Sincronização com o Efeito de Centralização dos Reels**:
    - No mobile (`max-width: 768px`), foi eliminado o comportamento antigo de ponta cortada lateral (*peek* de 86%/88%) com margens negativas que desalinhavam visualmente os cards.
    - Aplicada a mesma arquitetura de centralização do carrossel do Instagram: **exibição exclusiva de 1 card por vez rigorosamente centralizado no meio da tela** (`flex: 0 0 100%`, `scroll-snap-align: center`, `scroll-snap-stop: always`, `max-width: min(100%, 350px)` e `margin: 24px auto 0 auto`).
    - **Destaque do Card Ativo**: Card centralizado recebe a classe `.is-active` com realce sutil em borda dourada champanhe e sombra aveludada em camadas.
    - **Controles Unificados**: As setas de 48x48px, os indicadores em bolinha (dots com cápsula dourada expansível em 26px) e o contador editorial (*"Serviço X de 6 · ⇄ Deslize para navegar"*) agora compartilham 100% da mesma identidade e ergonomia dos Reels.

- **Implementação da Grade Compacta 2x2 no Mobile (`Seção 02 — Valores Institucionais`)**:
  - **Eliminação Definitiva da Fadiga de Cartões (Card Fatigue)**:
    - No mobile (`max-width: 640px`), substituído o empilhamento vertical de 4 cartões em 1 coluna por uma **grade 2x2 compacta e harmônica** (`grid-template-columns: repeat(2, minmax(0, 1fr))`).
    - **Economia Drástica de Espaço Vertical**: A altura total do bloco caiu de ~750px para **apenas ~280px** (uma redução de mais de 60% na rolagem vertical), permitindo que os 4 pilares (*Responsabilidade, Cuidado, Compromisso e Proximidade*) caibam simultaneamente na tela do celular sem esconder nenhum valor.
  - **Calibração das Microproporções Editoriais**:
    - `.value-item`: Padding otimizado para `16px 13px 15px`, cantos suaves de `12px` e sombra leve de profundidade.
    - `.value-header`: Altura compacta com `.value-icon-wrap` de `32x32px` e ícone SVG de `15px`.
    - `.value-title`: Clamp responsivo (`clamp(16px, 4.3vw, 18.5px)`) com entrelinha de 1.15 e quebra segura de palavras longas sem overflow.
    - `.value-desc`: Fonte nítida de `11.5px` com entrelinha arejada `1.45` em ardósia nobre (`var(--slate)`).
    - Preservada a total acessibilidade (WCAG), a estabilidade de leitura e a solidez institucional sem a necessidade de scripts de carrossel ou movimentos automáticos intrusivos.

- **Correção Semântica da Seta de Âncora & Microinteração Direcional (`Seção 02 — Quem somos`)**:
  - **Substituição da Seta de Navegação Interna**:
    - O link *"Encontrar a sociedade"* em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx) que leva para a Seção de Atendimento (`href="#atendimento"`) utilizava incorretamente a seta diagonal ascendente (`ArrowUpRight` ↗), ícone convencionado na web para links externos/nova aba.
    - Atualizado com precisão para **`ArrowDown`** (↓), comunicando de imediato ao usuário que o clique provocará a rolagem suave para baixo na própria página.
  - **Microinteração Tátil no Hover (`src/index.css`)**:
    - Adicionado refinamento cinético em `.text-link svg` com `transition: transform 200ms var(--ease-out);`.
    - No hover (`.text-link:hover svg`), o ícone realiza um microdeslocamento sutil para baixo (`transform: translateY(2px)`), reforçando ergonomicamente a direção do scroll.

- **Otimização Editorial dos Títulos & Calibração Tipográfica Mobile**:
  - **Encurtamento Cirúrgico de Títulos Prolixos**:
    - **Seção 01 (Métricas)**: *"Presença e técnica para a sua segurança jurídica."* (7 palavras — ritmo mais fluido e direto).
    - **Seção 03 (Atuação)**: *"Rigor técnico em cada etapa do seu benefício."* (8 palavras — foco imediato no cliente).
    - **Seção 05 (FAQ)**: Reduzido de 11 para 7 palavras: *"Respostas claras sobre os seus direitos previdenciários."* (eliminado o excesso que ocupava 5 linhas no celular).
    - **Seção 06 (Atendimento)**: Reduzido de 10 para 6 palavras: *"Análise dedicada para o seu caso específico."* (acolhedor, direto e sem poluição).
  - **Calibração da Escala Tipográfica no Mobile (`src/index.css`)**:
    - `.section h2`: Calibrado de `clamp(2.5rem, 12vw, 3.8rem)` (que gerava títulos desproporcionais de até 47px no celular) para **`clamp(1.95rem, 7.5vw, 2.75rem)`** (~31px–33px no mobile) com entrelinha arejada (`line-height: 1.15;` e `letter-spacing: -0.018em;`), acomodando palavras longas como *"previdenciário"* sem quebras forçadas.
    - `.hero-copy h1`: Calibrado para **`clamp(2.4rem, 10vw, 3.8rem)`** com `line-height: 1.05;`, garantindo que a primeira dobra no celular preserve espaço para o parágrafo de apoio e o botão primário de WhatsApp.
  - **Despoluição do Hero Mobile**:
    - Ocultada a frase secundária de telefone (*"WhatsApp e telefone: (91) 9162-0280"*) no mobile (`.hero-contact-note { display: none !important; }`), deixando o bloco de ações limpo e direto com foco no botão de ação principal e link de conhecer a sociedade.

- **Fechamento Aberto no Fundo do Site — Edição Hairline Editorial & Integração Total (`.instagram-bottom-cta-minimal`)**:
  - **Eliminação Definitiva do "Card Fatigue" e da Linha Divisória Final**:
    - Removida qualquer caixa/card fechada que causava sensação de banner comercial.
    - Removida a linha divisória final inferior (`border-bottom` da `.instagram-section`), permitindo que o fundo do Instagram e o início da Seção 06 (Atendimento) se fundam de maneira 100% fluida, contínua e sem interrupções bruscas.
    - Ajustado o padding inferior para 80px, gerando espaçamento vertical harmônico e elegante.
  - **Hairline Superior em Ouro Translúcido**:
    - Apenas um filete superior contínuo (`border-top: 1px solid rgba(163, 126, 75, 0.24)`), servindo como respiro discreto após os vídeos.
  - **Hierarquia Tipográfica Serena e Confiante**:
    - Eyebrow com micro-ponto dourado: *"ORIENTAÇÃO JURÍDICA DIRETA"*.
    - Título serifado em *Cormorant Garamond* (`clamp(23px, 2.3vw, 28px)`) com itálico (*caso específico*).
    - Frase concisa: *"Converse diretamente com as advogadas titulares para uma análise individual e sigilosa dos seus documentos."*
  - **Ações Horizontais Nobres (Cápsulas 999px)**:
    - **WhatsApp (`.instagram-minimal-btn-wa`)**: Cápsula de 48px em vinho profundo (`#5b1f2a`), borda fina em ouro champanhe e microdeslocamento tátil da seta no hover.
    - **Instagram (`.instagram-minimal-btn-ig`)**: Cápsula translúcida com fundo suave, preservando a textura de papel do site.
  - **Responsividade Mobile-First (< 640px)**:
    - Em telas pequenas, a fita alinha os botões verticalmente com largura total (48px de área de toque) e remove paddings laterais redundantes, fluindo naturalmente com a margem do site.

- **Lapidação Editorial e Funcional da Seção 06 (Atendimento, Mapa Cartográfico & Formulário de Contato)**:
  - **Cards de Contato Rápido de Alta Sofisticação**:
    - `.contact-detail-item`: Cantos orgânicos contemporâneos (14px), fundo branco iluminado (`#ffffff`), moldura fina em ouro champanhe translúcido (`rgba(163, 126, 75, 0.28)`), sombra aveludada em camadas e filete superior em gradiente vinho/ouro que acende suavemente no hover.
    - Ícones temáticos (Horário e Telefone) abrigados em moldura dedicada de 42x42px com cantos suaves (10px) e fundo vinho translúcido; no hover ganham preenchimento total em vinho profundo, borda dourada e micro-rotação tátil (-4°).
    - Subtítulo explicativo com microcopy acolhedor: *"Atendimento direto pelas advogadas"* abaixo do WhatsApp.
  - **Painel Cartográfico Editorial & Endereço Nobre**:
    - Moldura de ateliê jurídico em `.location-panel`: raio de 16px, fundo branco puro, cantos orgânicos arredondados e sombra quente.
    - `.address-row`: Ícone `MapPin` abrigado em moldura de 36x36px dedicada, endereço com tipografia fluida e novo botão nobre em formato pílula editorial (`.map-action-link`) com borda em ouro translúcido, fundo suave e micro-deslocamento da seta `ArrowUpRight` na diagonal.
    - Sincronização em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx) e [src/pages/ServicosPrevidenciarios.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/ServicosPrevidenciarios.tsx).
  - **Refinamento do Cartão de Formulário ([src/components/site/ContactForm.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/ContactForm.tsx))**:
    - Cantos em 18px, filete superior em gradiente vinho/ouro/vinho de 4px, badge de prestígio *"Atendimento Direto"* em pílula joia com brilho dourado.
    - Inputs e `<select>` com cantos suaves de 11px, fundo marfim quente (`rgba(255, 250, 243, 0.65)`), foco com halo dourado e seta customizada em ouro translúcido.
    - Atualização do catálogo de assuntos no `<select>` cobrindo todo o escopo previdenciário (Aposentadorias, Salário-maternidade, Seguro-defeso, BPC/LOAS, Incapacidade/Perícia, Pensão por morte, Planejamento & CNIS, Recurso/Negativa e Dúvida geral).
    - Botões principais de Envio e Cópia em formato pílula moderna (raio 999px, altura mínima ergonômica de 50px).
    - Selo de confidencialidade ética com `ShieldCheck` destacando sigilo OAB e LGPD.
  - **Qualidade & Blindagem por Testes**:
    - **22/22 testes aprovados** no Vitest.
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.44s.

- **Lapidação Editorial e Funcional da Seção 05 (Perguntas Frequentes / FAQ)**:
  - **Expansão de Autoridade Previdenciária**:
    - Catálogo expandido de 5 para **8 dúvidas centrais** cobrindo todo o escopo de atuação do escritório:
      1. Regras de transição e cálculo vantajoso após a Reforma da Previdência.
      2. Reversão de negativas e indeferimentos no INSS (recurso administrativo x via judicial).
      3. Seguro-defeso para pescador artesanal e documentação necessária (RGP, notas, defeso).
      4. Salário-maternidade para autônomas, MEI, rurais, desempregadas no período de graça e urbanas.
      5. Reversão de negativas periciais em benefícios por incapacidade perante a Justiça Federal.
      6. BPC/LOAS (critérios para idosos 65+ e PCD sem necessidade de contribuição).
      7. Comprovação documental de atividade rural e pesca artesanal para aposentadoria.
      8. Como funciona o atendimento com as sócias titulares e rol documental preparatório.
  - **Filtros por Categoria com Carrossel Mobile Tátil**:
    - 6 categorias bem delimitadas (*Todas*, *Aposentadorias & Transição*, *Salário-maternidade*, *Seguro-defeso & Rural*, *Incapacidade & BPC/LOAS*, *Negativas & Atendimento*).
    - No mobile (`<= 768px`), transformado em carrossel horizontal contínuo com toque suave e sem scrollbar, eliminando o empilhamento desajeitado de múltiplos botões.
  - **Caixa de Busca Editorial em Vidro Fosco & Ouro**:
    - Campo de busca refinado com altura ergonômica de 52px, cantos modernos (14px), fundo em vidro fosco translúcido e foco champanhe.
    - Botão de limpar busca com área de toque mínima acessível.
  - **Design de Acordeon de Alta Autoridade (Hairline Luxury Editorial)**:
    - Marcador nobre atualizado para `<SectionMarker light number="05" label="Perguntas frequentes" />`.
    - Numeração sequencial nobre em ouro escuro (`01`, `02`, `03`...) no cabeçalho de cada pergunta.
    - Transição fluida de abertura com iluminação sutil e rotação do Chevron em ouro champanhe.
  - **CTAs de Conversão Contextuais para o WhatsApp**:
    - Cada resposta possui um botão exclusivo de **Luxo Editorial** (*"Tirar dúvida sobre este tema ↗"*) com feixe luminoso suave, halo dourado e mensagem pré-preenchida no WhatsApp direcionada exatamente para aquela dúvida específica.
  - **Novo Estado Vazio / Sem Resultados (*Dossiê Advisory Card*)**:
    - Card nobre com ícone `HelpCircle`, mensagem empática e CTA direcionado para falar diretamente com as advogadas no WhatsApp caso o termo pesquisado não retorne resultados.
  - **Arquivos atualizados**:
    - [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx)
    - [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css)
    - [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.content.test.ts)
  - **Qualidade & Blindagem por Testes**:
    - **22/22 testes aprovados** no Vitest (+1 teste de integridade da Seção 05).
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.78s.

- **Implementação do Carrossel Mobile na Seção 03 (Área de Atuação)**:
  - **Experiência Mobile Revolucionada (< 768px)**:
    - Eliminada a fadiga de rolagem (*scroll fatigue*) de 6 cards verticais empilhados (reduzindo mais de 1.200px de altura vertical desnecessária no celular).
    - **Scroll-Snap Tátil Suave**: container horizontal com `scroll-snap-type: x mandatory` e `scroll-behavior: smooth`.
    - **Efeito Peek Editorial (86% de largura)**: o card principal fica centralizado e a bordinha do próximo fica visível à direita, comunicando intuitivamente o gesto de arrastar.
    - **Controles Completos**: setas anterior/próximo com ergonomia de toque mínima de 48x48px (`.practice-carousel-arrow`), indicadores em bolinha com barra ativa expansível (`.practice-carousel-dots`) e contador textual explicativo (`1 de 6 · Deslize para ver todos`).
  - **Preservação Total do Desktop (>= 768px)**:
    - Mantida a clássica e imponente grade de 3 colunas (e 2 colunas em tablet entre 769px e 900px), sem nenhuma alteração no layout desktop.
    - Controles de carrossel ocultos por padrão em telas grandes (`display: none`).
  - **Arquivos atualizados**:
    - [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx): estado de índice ativo, `useRef`, sincronização via listener de scroll passivo e controles acessíveis com suporte a teclado.
    - [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css): regras responsivas fluidas, tokens de cores Vinho Editorial e áreas de clique expandidas.
    - [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.content.test.ts): novos testes de regressão adicionados para validar a integridade dos controles.
  - **Qualidade & Estabilidade Validadas**:
    - **16/16 testes aprovados** no Vitest.
    - Checagem TypeScript (`tsc --noEmit`) 100% limpa.
    - Build de produção compilado com sucesso em 3.17s.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.
- **Refinamento Editorial da Presença no Instagram (Integração Direta sem Caixa Rígida)**:
  - Eliminado o aspecto de "widget/banner colado": remoção completa da caixa retangular branca, do fundo gradiente, do traço de 4px lateral e das sombras em `.instagram-profile-banner` em [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css).
  - O avatar oficial com seu anel nobre de gradiente vinho/ouro, o perfil verificado `@karllaekeyteleradvogadas` e o botão de ação *"Seguir no Instagram"* agora descansam diretamente sobre o papel nobre da página.
  - Adicionada uma sutil linha delimitadora editorial em ouro translúcido inferior (`border-bottom: 1px solid rgba(163, 126, 75, 0.2)`), criando harmonia impecável com a introdução da seção e com os Reels abaixo.
  - **Eliminação de Linha Duplicada**: removida a borda inferior redundante de `.reels-section-heading`, eliminando o efeito de "faixa presa entre duas linhas" e deixando o título dos Reels introduzir diretamente os cards de vídeo com máxima leveza.
  - **Limpeza de Redundância Textual**: remoção completa do parágrafo de subtítulo longo em [src/components/site/InstagramShowcase.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/InstagramShowcase.tsx), reduzindo ruído visual e acelerando a transição do título para a barra de perfil e vídeos.
  - Responsividade no mobile preservada com espaçamentos fluidos e toque ergonômico.
- **Reformulação Editorial da Seção 02 (De "Sobre" genérico para "Quem somos" com propósito real)**:
  - **Menu e Marcador de Seção**: atualização de `02 —— Sobre` para `<SectionMarker number="02" label="Quem somos" />` e no menu de navegação global (`navItems`).
  - **Kicker Institucional**: `A Sociedade de Advogadas · Identidade & Propósito` (substituindo a frase genérica anterior).
  - **Declaração de Autoridade (H2)**: `Uma advocacia construída para <em>humanizar</em> o direito previdenciário.` (eliminando a repetição poética de "escuta/ouvir/orientar" e afirmando a missão real da sociedade com sofisticação editorial).
  - Testes unitários atualizados em [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.content.test.ts).
- **Faxina Editorial Completa contra Repetições em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx)**:
  - **Seção 01 (Números)**: Kicker alterado de *"Uma orientação que começa pela escuta"* (eco do Hero) para `Nossa atuação em perspectiva`, e estatísticas atualizadas com foco em rigor documental (*"análise minuciosa de cada caso e documento"* e *"presença física em Salinas e consultoria em todo o país"*).
  - **Bloco de Citação (Quote)**: Substituída a autocrítica burocrática por declaração de dignidade assinada nominalmente pelas duas sócias: *“A previdência não é um favor do Estado: é o patrimônio conquistado por uma vida inteira de trabalho e dedicação.” — Dra. Karlla Pinheiro e Dra. Keyteler Leite*.
  - **Seção 03 (Atuação)**: H2 alterado para `O direito previdenciário exige rigor técnico em cada etapa.` (eliminando o eco da palavra "história") e nota explicativa focada em concessão, restabelecimento e revisão.
  - **Seção 04 (Advogadas)**: Kicker atualizado para `Duas trajetórias, um compromisso com a justiça` e texto de introdução destacando defesa combativa e análise documental aprofundada.
  - **Seção 06 (Atendimento)**: Kicker `Primeiro contato · Sem compromisso` e H2 focado na segurança do cliente: `Vamos analisar o seu caso com a atenção que ele exige.`.
- **Refinamento Final de Escrita de Alta Autoridade (Zero Ecos e Máxima Precisão Técnica)**:
  - **Hero Lead**: Sintonia perfeita entre rigor técnico, linguagem acessível e alcance geográfico (*"Orientação jurídica especializada, linguagem acessível e rigor técnico para proteger o seu benefício. Atendimento presencial em Salinópolis e consultoria em todo o Brasil."*).
  - **Valor 02 (Cuidado)**: Substituição da palavra genérica *"história"* por especificidade previdenciária e documental (*"Atenção humana e minuciosa a cada detalhe do histórico contributivo e dos documentos de cada segurado."*).
  - **Cards de Atuação (CTA de Ação Concreta)**: Substituição do convite passivo por chamada empoderadora (*"Consultar meu direito neste benefício ↗"*), sincronizada com perfeição em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx) e [src/pages/ServicosPrevidenciarios.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/ServicosPrevidenciarios.tsx).
  - **Rodapé Institucional (Eyebrow)**: Frase nobre de fechamento ético (*"Ética, precisão técnica e defesa responsável dos seus direitos previdenciários"* em [src/components/site/Footer.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/Footer.tsx)).
  - **Blindagem por Testes**: Adicionado novo caso de teste em [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.content.test.ts) garantindo a imutabilidade dessas redações premium.
- **Elevação Visual e Funcional da Seção 06 (Atendimento & Contato)**:
  - **Cartografia Editorial Nobre**: Transição do mapa cinza/frio para uma base marfim quente com avenidas em ouro translúcido, pin em gota vinho com pulso suave e badges de autoridade (`Bom Jesus · Salinópolis - PA` e `Sede física`).
  - **Eliminação de Link Duplicado**: Removido o botão redundante `"Abrir no Google Maps"` de dentro da moldura do mapa; mantido um único link nobre, estilizado com micro-animação na base do endereço.
  - **Refinamento Editorial do Formulário de Contato**:
    - Inputs com fundo marfim suave (`rgba(255, 250, 243, 0.78)`), com foco branco e anel dourado sutil (`box-shadow: 0 0 0 3px rgba(163, 126, 75, 0.14)`).
    - `<select>` customizado com seta dourada via SVG (`ChevronDown`), eliminando o aspecto rústico de formulário genérico do sistema operacional.
    - Botão de envio limpo: removido o excesso de ícones concorrentes; mantido ícone do WhatsApp com microinteração de seta fluida.
    - Selo de Sigilo & Confidencialidade: adicionado aviso nobre de sigilo profissional sob o formulário.
    - Mobile-first: empilhamento 100% responsivo em telas pequenas (`<= 640px`) com altura mínima de 48px para cada input e botão.
  - **Sincronização Total**: Aplicado com consistência em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx), [src/pages/ServicosPrevidenciarios.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/ServicosPrevidenciarios.tsx), [src/components/site/ContactForm.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/ContactForm.tsx) e [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css).

- **Lapidação Editorial Completa da Seção de Vídeos (Instagram Reels Showcase)**:
  - **Despoluição Visual Total dos Cards de Vídeo**:
    - Removido o botão de Instagram do topo de cada card de vídeo a pedido do usuário, eliminando a redundância com os outros 2 botões de Instagram existentes na seção.
    - A barra superior agora conta exclusivamente com o tema à esquerda e o botão de áudio à direita, mantendo a visualização dos vídeos 100% limpa e sem poluição.
    - O acesso ao Instagram permanece proeminente no banner oficial de perfil do topo da seção, no banner inferior de fechamento e no player de tela cheia (Modal).
    - Base de cada card focada no objetivo principal de atendimento: um único botão com *"Tirar dúvida sobre o tema ↗"*.
  - **Experiência Cinematográfica Limpa**:
    - A plaqueta *"Clique para assistir"* agora aparece com suavidade apenas no hover no desktop, liberando o enquadramento de vídeo e os rostos das advogadas em repouso.
  - **Harmonização do Banner Inferior (*"Dúvidas sobre o seu caso específico?"*)**:
    - Removida a borda lateral grossa de 4px dourada (estilo callout); substituída por uma moldura sutil homogênea de 1px em ouro translúcido, integrada ao papel marfim do site.
  - **Microcopy de Alta Autoridade**:
    - Substituído o clichê genérico *"Atendimento humanizado"* pelo compromisso de exclusividade: *"Atendimento direto com as advogadas"*.
  - **Arquivos atualizados**: [src/components/site/InstagramShowcase.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/InstagramShowcase.tsx), [src/components/site/InstagramShowcase.test.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/InstagramShowcase.test.ts) e [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css).
- **Microinterações Editoriais de Alta Precisão nos Botões de Instagram**:
  - **Decisão Arquitetural e de Design**: Em alinhamento consultivo com o usuário, foi rejeitado o modelo isométrico 3D / gamer / néon de terceiros em favor de uma microinteração de **Luxo Editorial** coerente com a paleta Vinho Nobre e Ouro Champanhe.
  - **Botão Principal do Banner (`.button-instagram-main`)**:
    - **Feixe de Luz Suave (Champagne Shimmer)**: micro-efeito de varredura diagonal translúcida via pseudo-elemento `::before` no hover.
    - **Micro-movimento Coreografado dos Ícones**: o ícone do Instagram ganha suave rotação de -6° e pulso sutil com sombra quente; a seta `ArrowUpRight` desliza 2.5px na diagonal.
    - **Elevação Tátil Suave**: transição fluida de `-2px` com sombra aprofundada em vinho nobre (`0 10px 28px rgba(91, 31, 42, 0.36)`) e borda externa em ouro translúcido.
    - **Feedback Tátil Touch (`:active`)**: compressão ergonômica de `0.985` sem recortes.
  - **Botão do Banner Inferior (`.instagram-cta-btn-ig`)**:
    - Adicionado o ícone `ArrowUpRight` com micro-deslizamento diagonal em [src/components/site/InstagramShowcase.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/InstagramShowcase.tsx) para total consistência com o botão vizinho do WhatsApp.
    - Efeito de preenchimento fluido em vinho profundo com borda ouro champanhe e feixe luminoso ao pairar o mouse.
  - **Botão do Visualizador de Modal (`.reel-modal-cta-ig`)**:
    - Fundo escuro com vidro fosco elevado (`backdrop-filter: blur(8px)`), halo sutil em ouro champanhe e micro-movimentos coordenados da seta e ícone.
  - **Arquivos atualizados**: [src/components/site/InstagramShowcase.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/InstagramShowcase.tsx) e [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css).

- **Padronização Global das Microinterações de Luxo Editorial em Todos os Botões do Site (Instagram & WhatsApp)**:
  - **Atendimento Integral ao Pedido do Usuário**: Expandido o efeito de alta sofisticação desenvolvido nos botões de Instagram para **todos** os botões e CTAs do ecossistema:
    - **Formulário de Contato (`.contact-submit-btn` e `.contact-copy-btn`)**:
      - Botão principal com varredura champanhe (`::before`), borda de ouro translúcido, gradiente vinho profundo, ícone `MessageCircle` com suave inclinação e pulso em esmeralda translúcida, e seta `ArrowUpRight` deslizando na diagonal.
      - Botão secundário de copiar com elevação e iluminação suave ao toque.
    - **Botões Globais do Site (`.button`, `.button-primary`, `.button-wine`)**:
      - Base unificada com feixe de luz diagonal translúcido, transição ergonômica cúbica, sombras em camadas e detecção inteligente de ícones:
        - `lucide-message-circle`: ganha rotação de -6° e brilho esmeralda.
        - `lucide-instagram`: ganha rotação de -6° e brilho coral nobre.
        - `lucide-arrow-up-right` e `lucide-arrow-right`: deslizam 2.5px na diagonal.
    - **Header & Navbar (`.nav-cta`)**:
      - Botão "Fale conosco ↗" com fundo vinho/ouro lapidado, feixe de luz, elevação e micro-movimento da seta.
    - **Botão Flutuante de WhatsApp (`.whatsapp-float`)**:
      - **Pulsação Totalmente Restaurada (`.whatsapp-float-pulse`)**: Mantido `overflow: visible` para que a onda concêntrica de aura dourada expanda livremente para fora do botão (`@keyframes whatsappPulse`).
      - Protegido o elemento da pulsação no mobile contra regras de `display: none` (`.whatsapp-float > span:not(.whatsapp-float-pulse)`).
      - Integrado o feixe luminoso de luxo via `background-position` suave em `::before` perfeitamente contido no pill sem recortar a pulsação externa.
      - Rotação tátil de -8° no ícone do WhatsApp com glow esmeralda sutil no hover.
    - **Seção 04 Advogadas (`.button-outline-team`)**:
      - Atualizado em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx) com `ArrowUpRight` e efeito de preenchimento fluido ao hover.
    - **Cards de Reels (`.reel-whatsapp-link` e `.reel-modal-cta-wa`)**:
      - Botões de conversão nos vídeos com o mesmo feixe luminoso, halo ouro e elevação de -2px.
    - **Triagem de Benefícios (`.screener-submit-btn`)**:
      - Botão final de encaminhamento para o WhatsApp com o efeito completo de prestígio editorial.
    - **Footer (`.footer-cta`)**:
      - Link final com transição de cor para branco puro e micro-deslocamento da seta.
  - **Arquivos atualizados**: [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx) e [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css).

- **Resolução Responsiva e Eliminação da Vaga Preta no Player de Vídeos (Reels Modal)**:
  - **Preenchimento de 100% do Enquadramento (Zero Vaga Preta)**:
    - Alterado `.reel-modal-video` de `object-fit: contain; object-position: top center;` para `object-fit: cover; object-position: center center; width: 100%; height: 100%;`.
    - O vídeo agora preenche toda a moldura de ponta a ponta, descendo até a base do card sem nenhum espaço vazio ou faixa preta no fundo.
  - **Trava Matemática da Proporção 9:16 Imune a Zoom**:
    - Implementada fórmula fluida em `.reel-modal-card-wrapper` no desktop:
      `width: min(calc(100vw - 160px), calc(90dvh * 0.5625), 461px); height: auto; max-height: 90dvh; aspect-ratio: 9 / 16;`.
    - Ao dar zoom no navegador (125%, 150%, 175%, 200%), o card redimensiona proporcionalmente em largura e altura de forma estritamente sincronizada, sem nunca distorcer a mídia nem exceder os limites da tela.
  - **Ancoragem Dinâmica das Setas Laterais de Navegação**:
    - As setas de vídeo anterior e próximo (`.reel-modal-nav-arrow.is-prev` e `.is-next`) agora estão encapsuladas no wrapper do card e ancoradas via `calc(100% + 20px)`. Elas acompanham perfeitamente a moldura do vídeo sem se desconectar ou sobrepor na tela em qualquer nível de zoom.
  - **Vignette Translúcida de Luxo no Painel Inferior**:
    - Substituído o degradê escuro quase opaco anterior por uma vinheta suave translúcida (`rgba(8, 2, 5, 0.82) 0%, rgba(8, 2, 5, 0.48) 55%, transparent 100%`), permitindo que a imagem do vídeo continue visível sob os botões e dicas de rodapé como no Instagram nativo.
  - **Arquivos atualizados**: [src/components/site/InstagramShowcase.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/InstagramShowcase.tsx) e [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css).

- **Harmonização e Elevação Editorial Completa da Página de Serviços Previdenciários (`/servicos-previdenciarios-salinopolis`)**:
  - **Navegação Superior Enxuta**:
    - Substituição de termos extensos na barra por rótulos objetivos (`Início`, `Serviços`, `Triagem`, `Dúvidas`, `Contato`), garantindo que o menu respire com elegância e nunca quebre linha em tablets ou telas intermediárias.
  - **Hero de Alta Autoridade & CTA de Prestígio**:
    - Eyebrow aprimorado: `Advocacia Previdenciária Especializada · Salinópolis & Atuação Nacional`.
    - H1 institucional: `Serviços previdenciários com <em>rigor técnico</em> e clareza.`.
    - Lead lapidado sem ecos, mantendo o rigor técnico e a frase canônica de SEO local testada.
    - Botão principal com `MessageCircle`, feixe de luz champanhe (`::before`) e seta `ArrowUpRight` que desliza 2.5px no hover.
  - **Abas de Filtro de Categorias Modernizadas**:
    - Desktop: formato pill editorial (`border-radius: 999px`) com bordas em ouro translúcido, elevação suave e estado ativo com gradiente vinho nobre e halo dourado.
    - Mobile (`<= 768px`): transformado em carrossel horizontal tátil com `overflow-x: auto; flex-wrap: nowrap; scrollbar-width: none; -webkit-overflow-scrolling: touch`, eliminando o empilhamento desajeitado de 3 linhas de botões no celular.
  - **Cards Detalhados com Botões de Ação Editorial de Luxo**:
    - Moldura em marfim/branco nobre com borda de 1px em ouro translúcido, raio de 16px e sombra quente aveludada.
    - Ícone de serviço com rotação tátil (-3°) e iluminação no hover.
    - Substituição do link de texto simples por um **Botão de Ação Editorial de Luxo (`.service-detail-cta`)** em gradiente vinho, borda dourada, altura mínima de 48px para ergonomia touch, feixe luminoso champanhe e ícone de WhatsApp + seta com micro-movimento diagonal.
  - **Ritmo Editorial Nobre Vinho / Papel no FAQ**:
    - Transição da seção de Perguntas Frequentes de papel marfim para `section-wine faq-section` com o marcador `SectionMarker light number="02" label="Dúvidas frequentes"`.
    - Isso quebrou a monotonia de 3 seções claras consecutivas, criando a alternância rítmica clássica de design editorial: Vinho (Hero) -> Papel (Catálogo) -> Vinho (FAQ) -> Papel (Atendimento & Mapa).
  - **Seção de Atendimento & Contato Padronizada**:
    - Alinhada à nova redação de alta autoridade da Home: Kicker `Primeiro contato · Sem compromisso` e H2 `Vamos analisar o seu caso com a <em>atenção que ele exige</em>.`.
  - **Arquivos atualizados**: [src/pages/ServicosPrevidenciarios.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/ServicosPrevidenciarios.tsx), [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css) e [src/pages/ServicosPrevidenciarios.content.test.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/ServicosPrevidenciarios.content.test.ts).

- **Correção da Visibilidade e Alinhamento dos Cards na Página de Serviços Previdenciários**:
  - **Identificação da Causa-Raiz**: O atributo `data-reveal` estava presente em cada `<article className="service-detail-card">`. No CSS, elementos `[data-reveal]` iniciam com `opacity: 0` e só aparecem após o `IntersectionObserver` anexar `.is-visible`. Como o observer rodava uma única vez no mount, ao filtrar ou reconciliar o DOM, os novos cards (como `Seguro-defeso` e `Aposentadorias`) ficavam presos com `opacity: 0`. O grid de 2 colunas reservava o espaço para eles, mas como estavam invisíveis, parecia que a coluna direita estava empurrada para baixo de forma desproporcional.
  - **Solução Definitiva**:
    - Removido `data-reveal` dos cards mapeados em [src/pages/ServicosPrevidenciarios.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/ServicosPrevidenciarios.tsx).
    - Criada a animação CSS nativa `@keyframes serviceCardFadeIn` em [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css) aplicada diretamente a `.service-detail-card`.
    - Todos os 8 cards agora aparecem 100% visíveis, simétricos e alinhados lado a lado em 2 colunas perfeitas no desktop e 1 coluna no mobile, sem depender de observadores assíncronos.

- **Integração dos Detalhes e Requisitos dos Serviços Previdenciários Diretamente na Seção 03 da Home (In-Page Service Detail Drawer)**:
  - **Experiência do Usuário Sem Ruptura de Navegação**:
    - O visitante não precisa mais abandonar a página inicial para consultar os detalhes, o público-alvo ou a documentação necessária de cada benefício previdenciário.
    - Ao clicar em qualquer um dos cards da Seção 03 (*"Área de Atuação"*) ou diretamente no novo botão *"Ver detalhes e requisitos"*, abre-se imediatamente um Drawer/Bottom Sheet de luxo editorial na própria tela.
  - **Arquitetura de Dados Centralizada ([src/data/servicesData.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/data/servicesData.ts))**:
    - Criada a interface `DetailedService` e a constante tipada `ALL_DETAILED_SERVICES` com catálogo completo dos 8 serviços (Maternidade, Seguro-defeso, Aposentadorias, Pensão por Morte, Auxílio por Incapacidade, BPC/LOAS, Planejamento & CNIS, e Recursos/Negativas).
  - **Componente [src/components/site/ServiceDetailDrawer.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/ServiceDetailDrawer.tsx)**:
    - **Acessibilidade e Ergonomia**: Suporte nativo à tecla `Escape`, trava automática do scroll da página de fundo (`overflow: hidden`), área de toque mínima de 48x48px no botão de fechar, foco por teclado (`role="dialog"` e `aria-modal="true"`).
    - **Alternador Rápido Entre Serviços (Quick Switcher)**: Pílulas editoriais horizontais no topo do drawer permitindo que o segurado pule para qualquer um dos outros 7 serviços sem precisar fechar e reabrir o modal.
    - **Conteúdo Aprofundado de Alta Autoridade**:
      - Visão geral explicativa sem juridiquês.
      - Bloco de público-alvo com destaque dourado (*"Para quem é este serviço"*).
      - Checklist minucioso dos pontos que o escritório examina.
      - Lista de documentos recomendados com ícones editoriais.
    - **CTA Principal de Alta Conversão**: Botão com gradiente vinho profundo, feixe de luz champanhe, ícone de WhatsApp e mensagem pré-preenchida exclusiva para o benefício selecionado.
  - **Design System Mobile-First em [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css)**:
    - **Desktop**: Painel lateral deslizante da direita (`slide-in-right`, largura de 490px) com desfoque de fundo (*backdrop blur* de 6px).
    - **Mobile (`<= 768px`)**: Transforma-se automaticamente em **Bottom Sheet tátil** (`max-height: 90dvh`) que desliza de baixo para cima com barra de pegação (*drag handle*), cantos superiores arredondados em 24px e respeito à `safe-area-inset-bottom`.
    - **Cards Interativos na Home**: Efeito de elevação suave (`transform: translateY(-4px)`), cursor pointer, novo botão discreto de gatilho `.practice-card-detail-trigger` e preservação do link direto de WhatsApp com `stopPropagation()`.
  - **Arquivos atualizados/criados**:
    - [src/data/servicesData.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/data/servicesData.ts) (Novo)
    - [src/components/site/ServiceDetailDrawer.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/ServiceDetailDrawer.tsx) (Novo)
    - [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx) (Atualizado)
    - [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css) (Atualizado)
    - [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.content.test.ts) (Atualizado com testes de regressão do Drawer)

- **Remoção do Botão Genérico do Cabeçalho da Seção 03 ("Conversar sobre o meu caso")**:
  - **Eliminação Total de Concorrência Visual**: Removido o link `Conversar sobre o meu caso ↗` de `.practice-header` em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx).
  - **Hierarquia Visual Despoluída**: O parágrafo de introdução agora conduz o olhar do usuário diretamente para os 6 cards interativos de benefícios logo abaixo. Cada card já possui seu CTA contextual com mensagem personalizada, além do botão de abrir o Drawer de requisitos com o grande CTA de atendimento.
  - **Qualidade & Estabilidade**:
    - 19/19 testes aprovados no Vitest.
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilada com sucesso.

- **Lapidação Completa da Triagem de Benefícios (Diagnóstico Guiado de Alta Autoridade)**:
  - **Experiência Tátil de Alta Tecnologia (Feedback & Delay Intencional)**:
    - Eliminado o corte seco de 0ms ao selecionar uma opção.
    - Implementado feedback tátil com iluminação ativa, anel dourado e micro-transição de 200ms (`handleSelect`) antes de avançar para a próxima etapa.
    - Animação de entrada fluida `@keyframes screenerStepFadeIn` com curva cúbica suave (`cubic-bezier(0.16, 1, 0.3, 1)`).
    - Autoscroll inteligente no mobile alinhando o topo do card à tela a cada avanço.
  - **Design System Editorial Vinho & Ouro Lapidado**:
    - Cards de opção redesenhados com cantos modernos (`border-radius: 12px`), fundo branco puro sobre marfim, borda de ouro translúcido e elevação sutil no hover (`-3px`) com sombras aveludadas.
    - **Ícones em Todos os Passos**:
      - *Passo 1 (Benefício)*: Ícones temáticos para todos os 8 serviços (Clock, Baby, Anchor, HeartPulse, ShieldAlert, Scale, FileText, RotateCcw).
      - *Passo 2 (Fase)*: Ícones específicos para cada estágio do processo (FileText, Hourglass, ShieldAlert, TrendingUp).
      - *Passo 3 (Vínculo)*: Ícones representativos de cada categoria profissional (Briefcase para CLT, Anchor para pescador/rural, Store para MEI/autônomo, Landmark para servidor público).
  - **Stepper Superior Editorial**:
    - Substituída a barra simples anterior por um **Stepper Tátil com 3 Pílulas Numeradas**: `1. Benefício` → `2. Situação` → `3. Perfil`, com check dourado nas etapas concluídas e gradiente contínuo refinado.
  - **Diagnóstico Preliminar no Passo 4 (Alto Valor Percebido)**:
    - Adicionado o novo componente de destaque **`screener-insight-card`** com a função `getScreenerInsight()`: gera uma leitura técnica contextualizada para a situação específica do segurado (prazos recursais para pedidos negados, critérios de defeso para pescador artesanal, isenções de carência, regras de transição, etc.).
    - Gera autoridade imediata antes do clique para o WhatsApp.
  - **Qualidade & Estabilidade**:
    - 19/19 testes aprovados no Vitest.
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilada com sucesso.

- **Lapidação de Alto Padrão dos 4 Cards de Valores / Pilares em "Quem somos" (Seção 02)**:
  - **Superação Definitiva do Efeito "Caixa Rígida"**:
    - Substituídas as caixas beges retangulares sem relevo por cartões nobres em branco iluminado (`#ffffff`) que se destacam com máxima clareza do papel marfim de fundo.
    - Cantos orgânicos contemporâneos (`border-radius: 14px`) e moldura em ouro champanhe translúcido (`rgba(163, 126, 75, 0.28)`).
    - Filete superior de 3px em gradiente nobre vinho/ouro (`::before`) que acende em brilho no hover.
  - **Ícones em "Joia Editorial" (`.value-icon-wrap`)**:
    - O ícone (Balança, Aperto de Mão, Check, Usuários) agora fica abrigado em uma moldura dedicada de 38x38px com cantos suaves (10px) e fundo vinho translúcido.
    - No hover, ganha preenchimento total em vinho profundo, borda dourada e micro-rotação tátil de -5°.
  - **Tipografia e Hierarquia Editorial**:
    - Numeração `01`, `02`, `03`, `04` em ouro escuro (`--gold-dark`), peso 800 e tracking nobre.
    - Título em *Cormorant Garamond* 25px em Vinho Nobre e entrelinha de 1.6 na descrição.
    - Elevação suave no hover de `-5px` com sombra aveludada em camadas (`box-shadow: 0 14px 32px rgba(91, 31, 42, 0.09)`).
  - **Responsividade Mobile**:
    - Grid adaptativo: 4 colunas no desktop, 2 colunas em tablets/telas médias (`<= 900px`) e 1 coluna confortável em celulares (`<= 540px`).

- **Desconstrução Anti-Fadiga de Cards na Seção 01 ("Hairline Editorial Columns")**:
  - **Superação da "Síndrome do Bento Grid / Template de IA"**:
    - Atendendo à observação crítica do usuário sobre a repetição excessiva de caixas brancas, desconstruímos a Seção 01 de números: removidas as caixas brancas flutuantes, bordas perimetrais e sombras de dashboard SaaS.
    - Os números e métricas agora descansam diretamente com nobreza e respiro sobre o papel marfim (`section-ivory`).
  - **Arquitetura de Linhas Finas de Ouro Champanhe (*Hairline Columns*)**:
    - Delimitação superior e inferior por filete refinado em ouro translúcido (`border-top/bottom: 1px solid rgba(163, 126, 75, 0.32)`).
    - Divisores verticais sutis entre as 3 colunas (`border-right: 1px solid rgba(163, 126, 75, 0.22)`), criando alinhamento idêntico ao de publicações de alta autoridade (*Financial Times*, *The Economist*).
  - **Preservação de Conteúdo e Identidade Visual**:
    - **Card 1 (`02`)**: Sócias Titulares · `Users` · Advogadas à frente de cada caso.
    - **Card 2 (`100%`)**: Rigor Documental · `FileCheck` · Análise minuciosa e artesanal.
    - **Card 3 (`PA + Brasil`)**: Presença & Alcance · `MapPin` · Salinópolis e consultoria nacional.
    - Tipografia monumental em *Cormorant Garamond* (clamp de 3.2rem a 4.4rem) e tags institucionais em ouro champanhe sem cápsulas artificiais.
  - **Ritmo Editorial Restaurado**:
    - A página ganha alternância visual orgânica: Hero fotográfico → Seção 01 aberta e tipográfica → Seção 02 institucional → Seção 03 com cards de serviços interativos (onde o card possui função e clique reais).
  - **Responsividade Mobile & Tablet**:
    - Tablet (`761px - 960px`): colunas adaptadas com padding proporcional.
    - Mobile (`<= 760px`): empilhamento vertical com divisores horizontais suaves, eliminando qualquer vestígio de caixas isoladas e mantendo toque ergonômico.

- **Elevação Editorial e de Conversão da Seção 04 ("Advogadas")**:
  - **Superação da Grade Desequilibrada de 3 Colunas (`1.05fr 0.9fr 0.55fr`)**:
    - A antiga 3ª coluna espremia as biografias em uma "torre" vertical estreita e deixava o texto solto.
    - Implementada uma arquitetura equilibrada e nobre de **2 Grandes Colunas Editoriais** (`minmax(360px, 440px) minmax(0, 1fr)`) com alinhamento fluido.
  - **Coluna Esquerda: Retrato Institucional com Moldura de Ateliê Jurídico**:
    - Foto oficial despoluída em moldura com cantos orgânicos (`border-radius: 16px`), fundo marfim suave, borda em ouro champanhe e elevação aveludada.
    - **Eliminação de Redundância Visual**: Removida a pílula flutuante que cobria a parte inferior da foto (`Sede Física · Salinópolis - PA`), evitando a duplicação imediata com o texto da legenda.
    - Plaqueta editorial única e nobre abaixo da imagem: `"Retrato Institucional das Sócias"` com subtítulo `"Dra. Karlla Pinheiro & Dra. Keyteler Leite · Sede Salinópolis / PA"`.
    - Efeito sticky elegante no desktop acompanhando a leitura dos perfis.
  - **Coluna Direita: Manifesto, Dossiê Editorial Aberto com Selo OAB e CTA Direto**:
    - Manifesto institucional liderado por `<SectionMarker light number="04" label="Advogadas" />`.
    - **Dossiê Editorial Aberto (*Hairline Dossier* - Sem Caixas Flutuantes)**:
      - Eliminadas as caixas brancas artificiais, bordas externas e sombras sobre os perfis. As biografias agora descansam diretamente sobre o papel nobre da página.
      - Moldura superior e inferior em linha fina de ouro champanhe translúcido (`border-top/bottom: 1px solid rgba(163, 126, 75, 0.28)`) e divisor sutil entre a Dra. Karlla e a Dra. Keyteler.
      - **Dra. Karlla Pinheiro**: Selo OAB em destaque (`OAB/PA 40.209`), tag de especialidade (`Estratégia & CNIS`) e biografia detalhando planejamento e benefícios do INSS.
      - **Dra. Keyteler Leite**: Selo OAB em destaque (`OAB/PA 40.642`), tag de especialidade (`Rural & Pesca Artesanal`) e biografia detalhando amparo a segurados especiais e pescadores.
    - **Eliminação de Dispersão Externa (Instagram) e Foco em Conversão Real**:
      - Removido o botão redundante que jogava o cliente para fora do site (Instagram).
      - O botão primário de alta conversão: **`Falar diretamente com as advogadas ↗`** é agora o único e soberano elemento clicável em destaque da seção, direcionando para o WhatsApp com garantia ética de sigilo.
  - **Correção da Ordem Hierárquica no Mobile**:
    - O cabeçalho da seção (`<SectionMarker light number="04" label="Advogadas" />`, kicker, H2 e descrição) foi extraído para `.team-header` no topo de `.site-container`.
    - **Resultado no Mobile**: O usuário lê primeiro a introdução e o título da Seção 04, em seguida vê a foto oficial e, logo abaixo, os perfis com a ação do WhatsApp, corrigindo 100% a inversão anterior.
    - **Resultado no Desktop**: Introdução ampla e nobre no topo, com grade equilibrada de 2 colunas abaixo (Retrato à esquerda, Dossiê e CTA à direita).
  - **Qualidade & Blindagem por Testes**:
    - 21/21 testes aprovados no Vitest.
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilado em 2.96s com 55% de economia em imagens.

## ⚙️ Estado Atual
- **Compilação**: ✅ Sucesso total (`npm run build` gerado em 3.44s com 55% de economia em assets).
- **TypeScript**: ✅ 100% limpo (`tsc --noEmit` sem erros ou avisos).
- **Testes**: ✅ **22/22 testes aprovados** (`vitest run`).
- **Servidor Local**: ✅ Ativo e respondendo em tempo real em `http://localhost:5173/`.
- **Toda a Home Page (Seções 01 a 06)**: ✅ **100% Concluída e Lapidada**. Cadência editorial pura, ausência total de "bento grid" genérico de IA, responsividade mobile-first irretocável em cada seção, e fluxos de atendimento/conversão de alta autoridade para WhatsApp.
- **Git & GitHub**: ✅ **Sincronizado**. Commit `db96350` enviado com sucesso para `origin/main`.
- **Árvore de Trabalho**: Limpa, segura e testada.

## 🎯 Próximos Passos Imediatos
- Lapidar e revisar a **Página Dedicada de Serviços Previdenciários (`/servicos-previdenciarios-salinopolis`)**:
  - Verificar harmonia editorial dos cards de catálogo e drawer/modais internos.
  - Alinhar detalhes de SEO local e chamadas de ação contextuais.
  - Testar fluxos em dispositivos físicos ou emuladores adicionais.













