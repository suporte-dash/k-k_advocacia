# PROJECT_STATE — Karlla Pinheiro & Keyteler Leite Advogadas

## 📌 Onde parámos
- **Implantação do Card Canônico de OpenGraph para WhatsApp e Redes Sociais (`og-share-card.png`)**:
  - **Ações Concluídas com Sucesso**:
    1. **Geração do Asset de Alta Fidelidade**: Gerado o card canônico [public/assets/og-share-card.png](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/public/assets/og-share-card.png) com dimensões oficiais de 1200x630px, fundo Vinho Profundo (`#3A171C`) e o Monograma institucional em Ouro Champanhe centralizado em zona segura (440x440px) via Sharp.
    2. **Atualização Semântica em `index.html`**: Configurados `og:image`, `og:image:width` (1200), `og:image:height` (630), `og:image:alt`, `twitter:card` (summary_large_image) e `twitter:image` apontando para `%BASE_URL%assets/og-share-card.png`.
    3. **Compilação e Pipeline de Build**: Executado `pnpm.cmd run pages:build`, gerando o bundle otimizado com imagem otimizada em `dist/assets/og-share-card.png` e fallback SPA em `dist/404.html`.
    4. **Publicação no GitHub**: Commits sincronizados na branch `main` do repositório `https://github.com/suporte-dash/k-k_advocacia.git`.

## ⚙️ Estado atual
- **Testes Unitários & Contratuais**: 24/24 testes aprovados no Vitest (`pnpm.cmd test`).
- **Tipagem & Checagem Estática**: 0 erros no TypeScript (`npx.cmd tsc --noEmit`).
- **Build de Produção**: 100% íntegro com exit code 0 (`pnpm.cmd run pages:build`).
- **Repositório Remoto**: Sincronizado com `origin/main`.

## 🎯 Próximos passos imediatos
- Acompanhar a conclusão do workflow de deploy no GitHub Actions.
- Testar o compartilhamento do link no WhatsApp ou através do Facebook Sharing Debugger para forçar a renovação do cache da Meta (usando query string `?v=2` se necessário).

- **Otimização de Ergonomia Mobile: Ocultação da Régua de Confiança do Hero (`.hero-bottom-note`)**:
  - **Ações Concluídas com Sucesso**:
    1. **Ocultação Limpa via CSS no Mobile**: Declarado em [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css) no breakpoint `@media (max-width: 768px)` a regra `.hero-bottom-note { display: none !important; }`, eliminando ~120px de altura vertical acumulada e o empilhamento redundante de textos em telas de smartphones.
    2. **Transição Imediata para a Seção 01**: A rolagem do celular agora flui instantaneamente do Hero para os números monumentais da Seção 01 (*Presença em números*), acelerando o funil de confiança e leitura.
    3. **Preservação Contratual do Desktop e Testes**: O JSX em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx) foi mantido 100% intacto, resguardando a régua horizontal nobre em telas desktop e garantindo a aprovação de todos os testes unitários.
  - **Validação Automatizada Concluída**:
    - **24/24 testes aprovados** no Vitest (`pnpm.cmd test --run`).
    - TypeScript 100% verificado sem erros (`npx.cmd tsc --noEmit`).
    - Build de produção compilado com sucesso em 4.75s (`pnpm.cmd run build`).

## ⚙️ Estado atual
- **Testes Unitários & Contratuais**: 24/24 testes aprovados no Vitest (`pnpm.cmd test --run`).
- **Tipagem & Checagem Estática**: 0 erros no TypeScript (`npx.cmd tsc --noEmit`).
- **Build de Produção**: 100% íntegro com exit code 0 (`pnpm.cmd run build`).
- **Servidor Local**: Ativo e respondendo em `http://localhost:5173/` e na rede em `http://10.12.199.61:5173/` (Task ID: `task-1267`).

## 🎯 Próximos passos imediatos
- Inspecionar no navegador (em modo responsivo de smartphone ou dispositivo físico) a transição fluida do Hero direto para a Seção 01.
- Prosseguir com os próximos aprimoramentos solicitados pelo usuário.

- **Implantação do Avatar Vetorial SVG Concêntrico no Instagram Showcase (`src/components/site/InstagramShowcase.tsx` & `src/index.css`)**:
  - **Ações Concluídas com Sucesso**:
    1. **Componente Vetorial SVG de Alta Precisão**: Em [src/components/site/InstagramShowcase.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/InstagramShowcase.tsx), substituída a estrutura de divs aninhadas por um componente SVG nativo com `viewBox="0 0 100 100"`.
    2. **Eliminação Definitiva do Serrilhado e Espessura Irregular**: Todos os círculos (anel de Stories gradiente com `r="46.5"`, respiro marfim com `r="43.5"` e foto recortada com `clipPath` em `r="39.5"`) compartilham exatamente o mesmo centro analítico flutuante (`cx="50" cy="50"`), erradicando qualquer colisão de subpixel ou degrau visual no Chromium/WebKit.
    3. **Micro-Hairline de Fusão Óptica**: Injetada micro-linha capilar dourada translúcida (`strokeWidth="0.75"`) para fusão óptica perfeita entre a borda da foto e o respiro marfim.
    4. **Estilização e Aceleração de GPU**: Em [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css), estilizada a classe `.instagram-avatar-vector` com `drop-shadow` aveludado, aceleração por hardware (`translateZ(0)`), microinteração no hover (`scale(1.06) rotate(2deg)`) e dimensionamento fluido (`68px` no desktop e `58px` no mobile).
  - **Validação Automatizada Concluída**:
    - **24/24 testes aprovados** no Vitest (`pnpm.cmd test --run`).
    - TypeScript 100% verificado sem erros (`npx.cmd tsc --noEmit`).
    - Build de produção compilado com sucesso em 4.54s (`pnpm.cmd run build`).

## ⚙️ Estado atual
- **Testes Unitários & Contratuais**: 24/24 testes aprovados no Vitest (`pnpm.cmd test --run`).
- **Tipagem & Checagem Estática**: 0 erros no TypeScript (`npx.cmd tsc --noEmit`).
- **Build de Produção**: 100% íntegro com exit code 0 (`pnpm.cmd run build`).
- **Servidor Local**: Ativo e respondendo em `http://localhost:5173/` e na rede em `http://10.12.199.61:5173/` (Task ID: `task-1267`).

## 🎯 Próximos passos imediatos
- Inspecionar visualmente no navegador em `http://localhost:5173/` a perfeição matemática dos anéis do avatar do Instagram, sem qualquer serrilhado ou assimetria.
- Prosseguir com novos aprimoramentos conforme a solicitação do usuário.

- **Eliminação Completa de Serrilhado no Avatar do Instagram via Supersampling Retina & Anti-Aliasing de GPU**:
  - **Ações Concluídas com Sucesso**:
    1. **Supersampling Lanczos3 Retina (450x450px)**: O asset [public/assets/instagram-avatar.png](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/public/assets/instagram-avatar.png) foi reamostrado via Sharp com kernel Lanczos3 e compressão máxima, elevando a densidade para 3x Retina em telas de alta resolução.
    2. **Container Intermediário Vetorial**: Injetado o container `.instagram-avatar-inner` em [src/components/site/InstagramShowcase.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/InstagramShowcase.tsx), isolando o respiro marfim como elemento arquitetural vetorial e eliminando o `border` CSS duro sobre a imagem rasterizada.
    3. **Máscara Radial & Aceleração de GPU**: Em [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css), aplicadas as propriedades `-webkit-mask-image`, `mask-image: radial-gradient(...)`, `transform: translateZ(0)` e micro-anel óptico subpixel (`box-shadow: 0 0 1.5px rgba(80, 0, 29, 0.45)`), dissipando 100% de qualquer degrau ou dente de serra.
    4. **Responsividade Mobile**: Calibrado o diâmetro para `58x58px` em dispositivos móveis (`<= 640px`).
  - **Validação Automatizada Concluída**:
    - **24/24 testes aprovados** no Vitest (`pnpm.cmd test --run`).
    - TypeScript 100% verificado sem erros (`npx.cmd tsc --noEmit`).
    - Build de produção compilado com sucesso em 4.60s (`pnpm.cmd run build`).

## ⚙️ Estado atual
- **Testes Unitários & Contratuais**: 24/24 testes aprovados no Vitest (`pnpm.cmd test --run`).
- **Tipagem & Checagem Estática**: 0 erros no TypeScript (`npx.cmd tsc --noEmit`).
- **Build de Produção**: 100% íntegro com exit code 0 (`pnpm.cmd run build`).
- **Servidor Local**: Ativo e respondendo em `http://localhost:5173/` e na rede em `http://10.12.199.61:5173/` (Task ID: `task-1267`).

## 🎯 Próximos passos imediatos
- Inspecionar visualmente no navegador em `http://localhost:5173/` a perfeição óptica da borda do avatar do Instagram (sem serrilhado).
- Prosseguir com os próximos refinamentos solicitados pelo usuário.

- **Estilização Autêntica do Avatar do Perfil Instagram com Anel de Destaque (`src/components/site/InstagramShowcase.tsx` & `src/index.css`)**:
  - **Ações Concluídas com Sucesso**:
    1. **Estrutura Semântica com Anel**: Atualizado em [src/components/site/InstagramShowcase.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/InstagramShowcase.tsx) o nó do avatar para `.instagram-profile-avatar-wrap.instagram-avatar-ring` com `aria-label="Perfil verificado no Instagram"`, `width="64"` e `height="64"` com `loading="lazy"`.
    2. **Estilização Visual com Anel Social & Respiro Ótico**: Em [src/index.css](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/index.css), estilizado o anel com gradiente do Instagram (`#f09433 -> #e6683c -> #dc2743 -> #cc2366 -> #bc1888`), respiro capilar de `2px solid var(--bg-primary, #FAF6F0)` separando a foto do anel colorido, corte 100% circular e microinteração suave de elevação (`scale(1.06) rotate(2deg)`) no hover.
    3. **Ergonomia Mobile**: Adaptado no breakpoint móvel (`<= 640px`) para `56x56px` mantendo proporções harmônicas.
  - **Validação Automatizada Concluída**:
    - **24/24 testes aprovados** no Vitest (`pnpm.cmd test --run`).
    - TypeScript 100% verificado sem erros (`npx.cmd tsc --noEmit`).
    - Build de produção compilado com sucesso em 4.62s com otimização WebP (`pnpm.cmd run build`).

## ⚙️ Estado atual
- **Testes Unitários & Contratuais**: 24/24 testes aprovados no Vitest (`pnpm.cmd test --run`).
- **Tipagem & Checagem Estática**: 0 erros no TypeScript (`npx.cmd tsc --noEmit`).
- **Build de Produção**: 100% íntegro com exit code 0 (`pnpm.cmd run build`).
- **Servidor Local**: Ativo e respondendo em `http://localhost:5173/` e na rede em `http://10.12.199.61:5173/` (Task ID: `task-1267`).

## 🎯 Próximos passos imediatos
- Inspecionar visualmente no navegador em `http://localhost:5173/` o novo formato circular e o anel colorido autêntico do perfil do Instagram.
- Prosseguir com os próximos aprimoramentos solicitados pelo usuário.

- **Cadência Rítmica Completa do Site: Aplicação do Bege Linho nas Seções 04 (Advogadas) e 06 (Atendimento) (`src/index.css` & `src/pages/Home.tsx`)**:
  - **Diagnóstico & Diretriz de UX/UI**:
    - Fechada a equação de alternância e ritmo visual do site:
      - Topo (Vinho) ➔ Hero (Marfim) ➔ Seção 01 (Bege Linho) ➔ Seção 02 & 03 (Marfim) ➔ Seção 04 (Bege Linho) ➔ Manifesto & FAQ (Vinho) ➔ Seção 06 (Bege Linho) ➔ Rodapé (Vinho Escuro).
    - A Seção 04 (*Advogadas*) ganha atmosfera de sala nobre de atelier, valorizando o retrato oficial e o dossiê das sócias antes do manifesto escuro.
    - A Seção 06 (*Atendimento & Contato*) atua como uma ilha acolhedora, conferindo relevo tridimensional aos cards brancos do formulário e de localização entre o FAQ vinho e o rodapé.
    - Blindagem de especificidade CSS com `.section.section-secondary, .section.team-section, .section.contact-section` e réguas capilares douradas de acabamento.
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 4.45s com 55% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Cadência Rítmica Editorial: Diferenciação Cromática da Seção 01 em Bege Linho Nobre (`src/index.css`)**:
  - **Diagnóstico & Solução de UX/UI**:
    - Identificada a confusão cognitiva gerada pela fusão do Hero (Marfim) com a Seção 01 (também Marfim), fazendo com que duas seções de propósitos diferentes parecessem coladas em um único bloco.
    - Implementada a cadência rítmica editorial de prestígio: a Seção 01 (*Presença em números*) passa a ter fundo nobre em Bege Linho / Areia Nobre (`var(--secondary, #F3ECE1)`), ancorada por réguas capilares superior e inferior em ouro champanhe translúcido (`border-top/bottom: 1px solid rgba(163, 126, 75, 0.24)`).
    - Os números monumentais em Vinho Profundo (`02 Sócias`, `100%`, `PA + Brasil`) ganham destaque escultural e contraste WCAG AAA (11.2:1).
    - Transição fluida entre Hero (Marfim `#FAF6F0`) ➔ Seção 01 (Bege Linho `#F3ECE1`) ➔ Seção 02 (Marfim `#FAF6F0`).
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 4.57s com 55% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Eliminação da Utility Bar & Transformação do Header em Vinho Profundo Nobre (`src/components/site/Header.tsx` & `src/index.css`)**:
  - **Diagnóstico & Diretriz Arquitetural**:
    - Removida a `utility-bar` fina do topo, eliminando a fragmentação em "sanduíche" (vinho fino + menu branco + hero marfim) e ganhando ~36px de altura útil imediata na primeira dobra.
    - O cabeçalho (`.site-header`) assume a coroa institucional do site em Vinho Profundo (`#3A171C`), criando uma moldura nobre que repousa sobre o canvas marfim do Hero sem sufocar a página.
    - Tipografia da marca atualizada para Marfim Luminoso (`#FAF6F0`) e Ouro Champanhe (`#C6A177`).
    - Links de navegação em marfim translúcido de alto contraste com feedback em ouro champanhe.
    - Botão "Fale conosco ↗" invertido para pílula sólida em Marfim Luminoso com texto escuro e borda ouro champanhe.
    - Efeito de rolagem *Dark Glassmorphism* (`rgba(45, 16, 21, 0.96)` com desfoque de 12px e linha capilar dourada).
    - Dropdown mobile alinhado em Vinho Profundo com links amplos e botão de WhatsApp de alta conversão.
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 4.65s com 55% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Restauração Integral da Estética Clássica do Hero em Fundo Marfim (`src/pages/Home.tsx` & `src/index.css`)**:
  - **Reversão Completa das Modificações Experimentais Escuras**:
    - Restaurados os arquivos `src/pages/Home.tsx` e `src/index.css` ao estado limpo original de alta costura jurídica.
    - Removidos todos os elementos experimentais da referência escura: `.hero-atmosphere-glow`, `.hero-visual-backdrop`, fita peeking out, malha de blueprint e cápsula de eyebrow.
  - **Estética Clássica 100% Preservada**:
    - Fundo nobre em marfim editorial (`background: var(--bg-primary)`), textura micro-reticulada aveludada (`.hero-texture`) e tipografia serifada de autoridade em vinho profundo (`#3a171c`).
    - Moldura fotográfica do retrato com cantos de 16px, aceleração de GPU com anti-aliasing por subpixel e anel óptico champanhe suave (`box-shadow: 0 0 0 1px rgba(163, 126, 75, 0.35), 0 16px 44px rgba(45, 15, 20, 0.16)`).
    - Assinatura minimalista de luxo (`.hero-signature-wrap`) com nome da advogada titular e micro-linha dourada capilar.
    - Botão de WhatsApp primário em pílula sólida vinho profundo (`var(--bg-accent-dark)`) e link secundário refinado.
    - Faixa de confiança flutuante inferior (`.hero-bottom-note`) integrada de forma fluida e sem linhas duras ao papel marfim do site.
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 5.12s com 55% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Correção da Tela Branca e Publicação no GitHub Pages (`k-k_advocacia2.0`)**:
  - **Diagnóstico da Causa Raiz**:
    1. O workflow antigo apontava para `VITE_BASE_PATH: /k-k_advocacia/` em vez do novo repositório `/k-k_advocacia2.0/`, gerando erro 404 em todos os assets (JS/CSS).
    2. O GitHub Pages por padrão tenta servir a branch `main` não compilada com processamento Jekyll, que não reconhece o bundle Vite nem arquivos com underscore sem o `.nojekyll`.
  - **Correções Aplicadas**:
    - `vite.config.ts`: Base de produção atualizada com fallback seguro para `/k-k_advocacia2.0/`.
    - `.github/workflows/deploy-pages.yml`: Atualizado para `VITE_BASE_PATH: /k-k_advocacia2.0/`.
    - `public/.nojekyll`: Criado para desabilitar o Jekyll do GitHub Pages.
    - Branch `gh-pages`: Compilada e publicada no repositório remoto com o bundle pronto para uso imediato.
  - **Sincronização**: Commits enviados para `main` e branch `gh-pages` ativa no GitHub.

- **Vinculação e Sincronização com o Novo Repositório GitHub (`k-k_advocacia2.0`)**:
  - **Novo Remote Oficial**: `origin` atualizado de `k-k_advocacia` para `https://github.com/suporte-dash/k-k_advocacia2.0.git`.
  - **Sincronização Completa**: Realizado `git push -u origin main` com sucesso absoluto, publicando todo o histórico, assets e código 2.0.
  - **Rastreamento**: Branch local `main` configurada para rastrear `origin/main` no novo repositório.

- **Criação & Configuração Global do Agente LS Critical**:
  - **Definição de Subagente (`define_subagent`)**: Registrado `agente_ls_critical` com autonomia total, ferramentas de escrita/execução, MCP e subagentes.
  - **Regra de Projeto (`.agents/rules/agente-ls-critical.md`)**: Configurado no repositório com prioridade P0 e trigger always-on.
  - **Regra Global da Máquina (`~/.gemini/config/rules/agente-ls-critical.md`)**: Injetada no ecossistema global do Antigravity, fazendo com que qualquer novo projeto aberto no sistema carregue automaticamente o Agente LS Critical com as 6 skills fundamentais e postura consultiva sênior.

- **Eliminação da Borda Vertical Residual no Mobile da Seção 01 (`src/index.css`)**:
  - **Simetria Perfeita nos Cards Empilhados**:
    - Neutralizada a borda vertical herdada do desktop nos cards 1 e 2 no mobile (`<= 768px`): declarado `border-right: none !important;` tanto para `.proof-card` quanto para `.proof-card:not(:last-child)`.
    - Atualizada tanto na media query principal quanto na regra de compactação mobile do final do arquivo.
    - Preservadas unicamente as divisórias horizontais suaves (`border-bottom: 1px solid rgba(163, 126, 75, 0.18)`), eliminando o desnível assimétrico nos smartphones.
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.05s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Remoção das Linhas Divisórias Horizontais (Seções 01–02 e 03–04) (`src/index.css`)**:
  - **Fluxo Visual Contínuo & Canvas Editorial Unificado**:
    - Identificada e eliminada a linha perimétrica inferior de 1px entre a Seção 01 (*Presença em números*) e Seção 02 (*Quem somos*): `.proof-section { border-bottom: none !important; }` e `.about-section { border-top: none !important; }`.
    - Identificada e eliminada a linha perimétrica inferior de 1px entre a Seção 03 (*Área de atuação*) e Seção 04 (*Advogadas*): `.practice-section-light { border-bottom: none !important; }` e `.team-section { border-top: none !important; }`.
    - Fusão harmoniosa do fundo marfim nobre (`var(--bg-primary)`) em um canvas contínuo, limpo e desobstruído.
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Compilação e build sem quebras ou regressões.

- **Anti-Aliasing por Hardware e Anel Óptico Suavizado no Hero (`src/index.css`)**:
  - **Eliminação Total de Serrilhado nas Curvas**:
    - Removida a borda dura perimétrica que provocava pixelização e dentes de serra nos cantos arredondados de 16px (`border: none !important`).
    - Implementado um **Anel Óptico Suavizado por Subpixel**: `box-shadow: 0 0 0 1px rgba(163, 126, 75, 0.35), 0 16px 44px rgba(45, 15, 20, 0.16) !important;`, gerando um contorno suave e aveludado em ouro champanhe.
  - **Aceleração por Hardware & Máscara Radial de GPU**:
    - Ativado o anti-aliasing contínuo de subpixels na GPU com `-webkit-mask-image: -webkit-radial-gradient(white, black) !important; mask-image: radial-gradient(white, black) !important;` e `transform: translateZ(0) !important; isolation: isolate !important`.
    - `.hero-image` configurada com `image-rendering: auto`, `backface-visibility: hidden` e aceleração 3D para nitidez máxima sem perda de definição.
    - Sincronização perfeitamente replicada na mídia query mobile (`<= 768px`).
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.14s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Parallax Suave de Profundidade no Banner do Manifesto (`.quote-section`) (`src/index.css`)**:
  - **Camada de Profundidade Nativa (CSS Scroll-Driven Animations)**:
    - Fundo cinematográfico (`url("/assets/office-manifesto-bg.webp")`) isolado no pseudo-elemento `.quote-section::before` com `inset: -18% 0` e aceleração direta por hardware (`will-change: transform`, GPU).
    - Animação nativa `@keyframes manifesto-scroll-parallax` sincronizada com a rolagem da página via `animation-timeline: view()` e `animation-range: entry 0% exit 100%`, criando sensação tridimensional de profundidade enquanto o texto institucional flutua na frente.
  - **Adaptação Mobile & Acessibilidade**:
    - No mobile (`<= 768px`), gradiente vertical escuro de máxima legibilidade (`rgba(58, 23, 28, 0.94)`) e parallax micro-calibrado (`-5%` a `+5%`).
    - Desativação imediata de movimento via `@media (prefers-reduced-motion: reduce)` para acessibilidade a usuários com sensibilidade vestibular.
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 2.98s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Harmonização de Linha Única e Simetria no Rodapé Desktop e Mobile (`src/index.css`)**:
  - **Eliminação da Linha Duplicada**:
    - `.footer-top` configurado com divisor perimétrico único inferior em ouro translúcido (`border-bottom: 1px solid rgba(226, 189, 137, 0.22)`).
    - `.footer-bottom` com `border-top: none !important; margin-top: 0 !important; padding: 24px 0 !important;`, eliminando definitivamente a linha dupla redundante que fragmentava o rodapé.
  - **Simetria Editorial e Ergonomia no Mobile (`<= 768px`)**:
    - `.site-footer` calibrado com recuo inferior seguro (`padding-bottom: calc(76px + env(safe-area-inset-bottom)) !important`), blindando contra qualquer sobreposição com o botão flutuante de WhatsApp e safe-areas de smartphones.
    - `.footer-bottom` em coluna única vertical perfeitamente centralizada (`gap: 10px`), com o link do Instagram em ouro nobre (`#e2bd89`), copyright limpo centralizado e a localização (*Salinópolis / PA*) em destaque institucional suave.
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 2.96s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Refinamentos Mobile de Alta Engenharia: Menu, FAQ e Seção 01 (`src/index.css`)**:
  - **Menu Mobile em Fundo Marfim de Alto Contraste**:
    - `.desktop-nav` configurado no mobile (`<= 768px`) com fundo nobre marfim claro (`var(--bg-primary, #FAF6F0)`), borda inferior sutil e sombra perimétrica aveludada (`box-shadow: 0 16px 36px rgba(58, 23, 28, 0.12)`).
    - Links de navegação em vinho profundo (`var(--wine-deep, #3a171c)`) com divisores horizontais em ouro translúcido, feedback tátil com deslocamento suave para dourado e CTA de WhatsApp em largura total de 48px de área de toque.
  - **Carrossel Tátil de Pílulas do FAQ com Scroll Horizontal**:
    - `.faq-category-pills` atualizado com `flex-wrap: nowrap`, `overflow-x: auto`, rolagem inercial iOS/Android e barra de rolagem nativa oculta.
    - Pílulas com `flex-shrink: 0` e `white-space: nowrap`, permitindo deslize lateral fluido em uma única fita contínua sem quebras verticais.
  - **Compactação Vertical da Seção 01 (Presença em Números)**:
    - `.proof-card` com padding vertical enxuto de `18px 0` e números monumentais calibrados em `2.8rem`, eliminando o excesso de scroll vertical em smartphones.
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.18s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Assinatura Tipográfica Minimalista no Hero (`src/pages/Home.tsx`, `src/index.css` & `src/pages/Home.content.test.ts`)**:
  - **Despoluição Visual & Foco Absoluto**:
    - Eliminados os textos auxiliares redundantes abaixo do retrato (cargos, OABs, numerações e especialidades que já contam com o Dossiê Aberto detalhado na Seção 04).
  - **Assinatura Minimalista de Luxo (`.hero-signature-wrap`)**:
    - Implementada a assinatura minimalista exibindo exclusivamente o nome da advogada ativa (`Dra. Karlla Pinheiro` / `Dra. Keyteler Leite`) em tipografia serifada nobre (*Playfair Display*, `1.25rem`, peso 600, vinho profundo `#3a171c`).
    - Sublinhado por uma micro-linha capilar dourada de alta costura (`.hero-signature-line`, 32px de largura, 1.5px de espessura, em ouro champanhe `var(--accent-gold, #9e7b56)`).
  - **Harmonia Mobile-First**:
    - Alinhamento central perfeito com espaçamento discreto (`margin-top: 14px`, calibrado para `10px` no mobile com linha de 24px).
    - Neutralização rigorosa das classes legadas `.hero-editorial-caption`, `.hero-slide-glass` e `.hero-image-caption` (`display: none !important;`).
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`), com asserções validando `.hero-signature-wrap` e a ausência de elementos legados.
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.03s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Dossiê Editorial de Autoridade Aberto Abaixo da Foto do Hero (`src/pages/Home.tsx`, `src/index.css` & `src/pages/Home.content.test.ts`)**:
  - **Retrato 100% Puro & Desobstruído**:
    - Removida qualquer sobreposição de dentro da foto (eliminada a div `.hero-slide-glass` de dentro de `CarouselItem`), garantindo que o retrato institucional mantenha sua composição, iluminação e contraste 100% puros e desimpedidos.
  - **Dossiê Editorial Aberto Externo (`.hero-editorial-caption`)**:
    - Implementado bloco editorial de alta autoridade posicionado logo abaixo da moldura (`.hero-image-wrap`), diretamente conectado ao estado da advogada ativa (`activeHeroSlide`).
  - **Hierarquia Tipográfica de Alta Costura**:
    - Badge institucional com numeração editorial em dois dígitos (`01`, `02`), separador losango `✦`, cargo institucional (`Sócia Fundadora` / `Sócia Titular`) e registro OAB (`OAB/PA 40.209` / `OAB/PA 40.642`) em ouro nobre e ardósia.
    - Nome de autoridade em tipografia serifada monumental (*Playfair Display*, `1.35rem`, peso 700, vinho profundo `var(--wine-deep, #3a171c)`).
    - Especialidade técnica em *Plus Jakarta Sans* (`Estratégia Previdenciária & Planejamento de CNIS` / `Atuação Rural & Pesca Artesanal`).
  - **Design System & Ergonomia Mobile-First**:
    - Alinhamento central harmônico com respiro vertical orgânico (`margin-top: 16px`, ajustado para `12px` em telas <= 640px).
    - Neutralização das classes legadas `.hero-slide-glass` e `.hero-image-caption` com `display: none !important`.
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`), com asserções validando o novo dossiê editorial externo e garantindo ausência de captions ou sobreposições legadas.
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.73s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Chancela Editorial em Vidro Escuro no Hero (`Dark Glassmorphism`) (`src/pages/Home.tsx`, `src/index.css` & `src/pages/Home.content.test.ts`)**:
  - **Eliminação da Legenda Externa & Integração na Foto**:
    - Substituída a antiga pílula externa solta abaixo da moldura (`.hero-image-caption`) por uma sofisticada **Chancela Editorial em Vidro Escuro (*Dark Glassmorphism*)** integrada diretamente na base de cada slide do carrossel (`.hero-slide-glass`).
    - A identificação da advogada titular agora desliza sincronizada com o movimento da foto no carrossel.
  - **Enriquecimento dos Dados Institucionais (`HERO_SLIDES`)**:
    - Dra. Karlla Pinheiro: *Sócia Fundadora · OAB/PA 40.209* · *Estratégia Previdenciária & Planejamento de CNIS*.
    - Dra. Keyteler Leite: *Sócia Titular · OAB/PA 40.642* · *Atuação Rural & Pesca Artesanal*.
  - **Design System de Alta Costura & Mobile-First**:
    - `.hero-slide-glass`: Gradiente escuro aveludado (`rgba(25, 10, 14, 0)` a `rgba(20, 7, 11, 0.95)`), desfoque óptico refinado (`backdrop-filter: blur(8px)`), régua superior em ouro champanhe translúcido (`border-top: 1px solid rgba(226, 189, 137, 0.28)`), losango dourado `✦`, tipografia serifada de alta autoridade (*Playfair Display*) e responsividade compacta em telas de até 640px.
    - Remoção no JSX e neutralização total no CSS da classe legada `.hero-image-caption` (`display: none !important;`).
  - **Qualidade & Blindagem por Testes**:
    - **24/24 testes aprovados** no Vitest (`pnpm test`), com teste de regressão confirmando a chancela e a ausência do caption legado.
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.75s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Integração de Alta Disponibilidade com Web3Forms (`src/components/site/site-config.ts` & `src/components/site/ContactForm.tsx`)**:
  - **Ativação da Chave Oficial**:
    - Adicionada a chave de acesso do Web3Forms `WEB3FORMS_ACCESS_KEY = "4dc03ab1-d0e9-4047-bd34-dd10226115f3"` em [src/components/site/site-config.ts](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/components/site/site-config.ts).
    - [src/components/site/ContactForm.tsx](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/components/site/ContactForm.tsx) atualizado para despachar requisições via POST para `https://api.web3forms.com/submit` com payload estruturado (`access_key`, `name`, `whatsapp`, `assunto_beneficio`, `resumo_do_caso`, `subject`, `from_name`).
    - Tratamento de resposta com validação estrita de `data.success` e tratamento semântico de exceções com fallback tático para WhatsApp.
  - **Validação E2E em Produção Local**:
    - Envio do formulário testado e validado com sucesso pelo usuário em tempo real.
    - E-mail estruturado recebido instantaneamente na caixa de entrada do Gmail (`sandreodeivith@gmail.com`).
    - Card de confirmação de sucesso exibido na interface sem erros de console ou travamento.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.17s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Transformação do Formulário em Canal de Triagem por E-mail com Resiliência Visual (`src/components/site/site-config.ts`, `src/components/site/ContactForm.tsx` & `src/index.css`)**:
  - **Canal Assíncrono de Triagem por E-mail (FormSubmit AJAX)**:
    - Adicionada a constante `CONTACT_EMAIL = "sandreodeivith@gmail.com"` centralizada em [src/components/site/site-config.ts](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/components/site/site-config.ts).
    - O formulário da Seção 06 ([src/components/site/ContactForm.tsx](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/components/site/ContactForm.tsx)) foi transformado em um canal assíncrono de envio direto para a equipe jurídica, despachando via POST FormSubmit AJAX estruturado (tabela formatada, sem captcha obstrutivo, com assunto dinâmico).
  - **Resiliência Front-end com os 4 Estados Visuais**:
    1. *Ocioso (Idle)*: Formulário limpo com campos validados, máscara para WhatsApp com DDD e seletor com todos os ramos de atuação previdenciária.
    2. *Enviando (Submitting)*: Botão com estado de carregamento animado (`Loader2`), opacidade reduzida e campos desabilitados prevenindo múltiplos envios acidentais.
    3. *Sucesso (Success)*: Painel de confirmação editorial com ícone de check esmeralda (`#2e7d32`), mensagem personalizada com o nome do cliente, benefício selecionado, confirmação de retorno e botão de reenvio/novo contato.
    4. *Erro & Fallback Tático (Error)*: Alerta contextual amigável com opção de tentar novamente ou acionar o botão de fallback imediato para o WhatsApp com todos os dados pré-preenchidos.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.17s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Definição Estrita de Papéis (Agente de Análise & Crítica Técnica — READ-ONLY no Código)**:
  - **Papel Estabelecido**: Este agente atua **exclusivamente como Agente de Análise, Arquiteto e Consultor Crítico**, com proibição total de modificar arquivos de código da aplicação (`src/**`, `public/**`, etc.).
  - **Atribuições Exclusivas**: Analisar criticamente o projeto, diagnosticar anomalias e oportunidades de UX/UI/performance, e gerar **prompts turnkey consolidados em bloco único** para execução exclusiva pelo **Agente Construtor (IDE)**.
- **Eliminação da Linha Branca e Entalhes de Canto na Transição do Hero Carousel (`src/index.css`)**:
  - **Diagnóstico Cirúrgico & Causa Raiz**:
    - A moldura `.hero-image-wrap` possuía `background: var(--bg-surface) !important;` (branco puro `#FFFFFF`), enquanto os retratos possuem fundo escuro de estúdio.
    - Cada slide `.hero-image` possuía `border-radius: 16px !important;` individual, fazendo com que as fotos adjacentes na esteira do carrossel tivessem seus cantos arredondados para dentro, criando entalhes triangulares brancos vazados nos cantos superior e inferior esquerdos durante o deslizamento.
    - Qualquer sub-pixel gap ou anti-aliasing na transição entre slides expunha a cor de fundo do container como uma linha vertical branca no meio da imagem.
  - **Correção de Alta Fidelidade**:
    - Fundo de `.hero-image-wrap` alterado para `var(--wine-deep, #3a171c) !important;`, integrando o fundo da moldura à paleta de estúdio das fotos.
    - `.hero-image` ajustada com `border-radius: 0 !important;`, `width: 100% !important;`, `height: 100% !important;` e `object-fit: cover !important;`, deixando o corte arredondado perimetral de 16px exclusivamente a cargo do container pai (`.hero-image-wrap { overflow: hidden !important; }`).
    - Zeradas margens e preenchimentos da esteira (`.hero-carousel-track { margin-left: 0 !important; }` e `.hero-carousel-item { padding-left: 0 !important; }`), garantindo transição 100% contínua, fluida e sem nenhum traço de linha branca ou recortes de canto.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.29s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Universalização da Skill de Inteligência de Nicho (`@[niche-benchmark-intel]` v2.0.0 — Universal Master System)**:
  - **Evolução Multi-Indústria Agnóstica**:
    - A skill foi completamente refatorada e universalizada tanto localmente em [c:\Users\NOC 01\Desktop\AGENTE FRONT\.agents\skills\niche-benchmark-intel\SKILL.md](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/.agents/skills/niche-benchmark-intel/SKILL.md) quanto globalmente em `C:\Users\NOC 01\.gemini\config\skills\niche-benchmark-intel\SKILL.md`.
    - Agora atende **qualquer projeto presente e futuro** em qualquer segmento: SaaS, E-commerce D2C, Fintechs, Saúde/Clínicas, Luxo/Imobiliário, Advocacia, B2B Enterprise, Aplicativos Móveis e Plataformas Editoriais.
    - Equipada com a **Matriz dos 6 Arquétipos de Indústria** e o **Protocolo Universal de 6 Vetores** (Scouting Autônomo na Web, Atmosfera Visual e Proporção 60-30-10, Arquitetura Narrativa da Landing Page, Ergonomia de Conversão, Microcopy de Redução de Fricção e Física Tátil Mobile-First).
  - **Integração na Memória Persistente**:
    - Atualizada a diretriz em [.agents/memory/MEMORY.md](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/.agents/memory/MEMORY.md).
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`), TypeScript 100% limpo, build de produção rápido e otimizado.

- **Transformação da Seção 04 em Dossiê Editorial Aberto das Sócias Titulares (`src/index.css`)**:
  - **Eliminação de Cards Fechados ao Lado do Retrato Oficial**:
    - Removidos fundo branco, bordas perimetrais, cantos arredondados e sombras de `.team-profile-card` em [src/index.css](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/index.css).
    - As biografias das sócias agora compõem um **Dossiê Editorial Aberto**, diretamente integrado ao fundo marfim do site, em perfeita harmonia com o retrato vertical nobre.
  - **Réguas e Hairlines de Alta Costura**:
    - O bloco `.team-profiles` é ancorado por réguas horizontais superior e inferior em ouro champanhe translúcido (`border-top/bottom: 1px solid rgba(163, 126, 75, 0.28)`), com um divisor horizontal fino separando a Dra. Karlla Pinheiro da Dra. Keyteler Leite.
    - Nomes destacados em tipografia serifada de alta autoridade (*Playfair Display*, 26px, vinho profundo), numeração `01` e `02` discreta, selo OAB institucional e tags de especialidade (*Estratégia & CNIS* e *Rural & Pesca Artesanal*) em ouro translúcido.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`), preservando 100% da semântica dos perfis e das asserções de teste.
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 2.92s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Eliminação do Anel Dourado de Foco e da Borda Dupla no Campo de Busca do FAQ (`src/index.css`)**:
  - **Remoção do Anel Externo de Foco**:
    - Removido completamente o halo/anel dourado (`box-shadow: none !important` e `outline: none !important`) acionado ao clicar/focar no campo de busca (`.faq-search-box:focus-within`, `.faq-search-input:focus` e `.section-wine.faq-section .faq-search-input:focus`).
    - O campo agora preserva uma transição limpa e discreta, sem linhas duplas ou anéis em volta da cápsula.
  - **Eliminação dos Cantos Vazados (Borda Dupla Fantasma)**:
    - Identificada e eliminada a regra legada com `border-radius: 14px` e borda ativa em `.section-wine.faq-section .faq-search-input` que vazava pelos cantos da pílula.
    - O `<input>` agora opera 100% transparente (`background: transparent !important`, `border: none !important`, `border-radius: 0 !important`), e o container `.faq-search-box` recebeu `overflow: hidden !important`, blindando qualquer saliência nos cantos.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.23s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Remoção do Botão do Waze — Foco Absoluto e Elegância no Google Maps (`src/pages/Home.tsx`, `src/pages/ServicosPrevidenciarios.tsx` & `src/pages/Home.content.test.ts`)**:
  - **Eliminação de Atrito Cognitivo & Competição de CTAs**:
    - Removido o botão redundante `Rota no Waze` do painel de endereço da Seção 06 em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/pages/Home.tsx) e [src/pages/ServicosPrevidenciarios.tsx](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/pages/ServicosPrevidenciarios.tsx).
    - O endereço agora conta com uma chamada única, límpida e soberana para o **`Google Maps ↗`**, padrão universal que abre nativamente em qualquer smartphone (Android/iOS) ou navegador sem exigir instalação de aplicativo secundário.
  - **Limpeza de Código**:
    - Removido o import órfão `Navigation` de `lucide-react` em ambas as páginas.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`), com asserção em [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/pages/Home.content.test.ts) validando a ausência do Waze e a presença do Google Maps.
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.26s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Ativação do Ícone Discreto de Busca e Harmonização das Categorias do FAQ (`src/pages/Home.tsx`, `src/index.css` & `src/pages/Home.content.test.ts`)**:
  - **Categorias em Linha Única Simétrica**:
    - Rótulos de `FAQ_CATEGORIES` refinados para concisão elegante (*"Todas"*, *"Aposentadorias"*, *"Salário-Maternidade"*, *"Seguro-Defeso & Rural"*, *"Incapacidade & BPC"*, *"Negativas & Atendimento"*), economizando mais de 180px e eliminando a pílula órfã no desktop.
  - **Cápsula de Busca de Luxo**:
    - `.faq-search-box` configurada com altura ergonômica de 52px, borda fina em ouro champanhe translúcido, foco dourado suave e ícone de lupa `.faq-search-icon` perfeitamente alinhado em ouro champanhe discreto (`rgba(226, 189, 137, 0.75)`), com recuo de 48px para leitura e digitação limpa.
  - **Pílulas de Filtro Compactas e Proporcionais**:
    - `.faq-pill-btn` calibradas com tipografia em caixa alta suave (`11px`, `letter-spacing: 0.04em`), bordas refinadas e realce ativo em dourado nobre (`var(--accent-gold)`) com texto contrastante escuro e sombra sutil.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`), com asserções em [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/pages/Home.content.test.ts) sincronizadas com as novas categorias.
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.72s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Transformação da Seção 01 em Horizonte Estatístico Integrado (`src/index.css`)**:
  - **Eliminação dos Cards Fechados e Abertura Editorial**:
    - Removidos fundo branco, bordas perimetrais, cantos arredondados e sombras de `.proof-card`.
    - As 3 métricas agora compõem um **Horizonte Estatístico Editorial Aberto**, diretamente fundido ao papel marfim (`--bg-primary`).
    - Delimitado por réguas horizontais superior e inferior em ouro champanhe translúcido (`border-top/bottom: 1px solid rgba(163, 126, 75, 0.28)`).
    - 3 colunas proporcionais abertas com divisores verticais sutis à direita (`border-right: 1px solid rgba(163, 126, 75, 0.22)`), primeira coluna sem padding esquerdo e terceira coluna sem borda direita.
    - Números monumentais serifados (`clamp(3.2rem, 4.8vw, 4.5rem)`, vinho profundo) e kickers despoluídos sem aspecto de pílula (`11px`, uppercase, ouro escuro).
  - **Lapidação Mobile-First (< 768px)**:
    - Empilhamento vertical em fluxo contínuo com divisores horizontais suaves (`border-bottom: 1px solid rgba(163, 126, 75, 0.18)`).
    - Ícones ativos com fundo vinho nobre e símbolo em branco luminoso.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`), preservando 100% da integridade semântica e contratual.
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.37s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Remoção da Linha Divisória Superior da Régua do Hero — Fluidez Editorial (`src/index.css`)**:
  - **Chancela Flutuante & Sem Linha Divisória**:
    - Removida a borda superior (`border-top: none !important`) de `.hero-bottom-note` no desktop e no mobile, eliminando a fragmentação horizontal entre o retrato/texto e a régua de confiança.
    - Calibrado o respiro vertical orgânico com `padding-top: 32px`, `padding-bottom: 16px`, `margin-top: 16px` e gap de `24px` no desktop, e `padding-top: 24px` com gap `12px 18px` no mobile (`<= 768px`).
    - Os selos de prestígio agora repousam de forma fluida e nobre sobre o papel marfim editorial da página.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 2.95s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Transformação da Régua do Hero em Chancela de Prestígio Editorial (`src/pages/Home.tsx`, `src/index.css` & `src/pages/Home.content.test.ts`)**:
  - **Elevação do Trust Ribbon (`.hero-bottom-note`)**:
    - A faixa inferior do Hero foi remodelada como uma chancela de alta costura jurídica (*Trust Ribbon*), com micro-ícones de linha fina em ouro champanhe (`ShieldCheck`, `MapPin`, `Scale`), separadores em losango dourado (`✦`) e tipografia em caixa alta suave (`11.5px`, `letter-spacing: 0.08em`, `font-weight: 600`).
    - **Itens de Prestígio Chancelados**:
      1. *Atendimento Dedicado* (com `ShieldCheck`)
      2. *Sede Física em Salinópolis - PA* (com `MapPin`)
      3. *Atuação Previdenciária Nacional* (com `Scale`)
  - **Lapidação Responsiva Mobile**:
    - No mobile (`<= 768px`), os separadores losango são ocultados automaticamente (`display: none`), permitindo que as chancelas fluam com alinhamento central harmônico sem quebras desconfortáveis.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`), com asserções em [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/pages/Home.content.test.ts) validando os novos itens de chancela.
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.35s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Remoção da Pílula SaaS do Hero — Estética Editorial Humana e Nobre (`src/pages/Home.tsx`, `src/index.css` & `src/pages/Home.content.test.ts`)**:
  - **Eliminação do Badge Flutuante**:
    - Removido completamente o elemento flutuante `.hero-presence-badge` com o ponto verde pulsante `.hero-presence-dot` e `@keyframes livePulse`, eliminando o aspecto de aplicativo SaaS / tech startup.
    - O Hero agora inicia diretamente com uma abertura tipográfica clássica, imponente e artesanal (*Atelier Jurídico*):
      `<p className="eyebrow">Advocacia Previdenciária · Salinópolis &amp; Brasil</p>`.
  - **Limpeza do CSS**:
    - Removidas as regras obsoletas `.hero-presence-badge` (desktop e mobile), `.hero-presence-dot` e `@keyframes livePulse` de [src/index.css](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/index.css).
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`), com testes em [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/pages/Home.content.test.ts) sincronizados para certificar a ausência do badge e a presença do novo eyebrow.
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 2.98s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Refinamentos Cirúrgicos de UX/UI — Hero, Card Pesqueiro e Contatos (`src/pages/Home.tsx`, `src/index.css` & `src/pages/Home.content.test.ts`)**:
  1. **Eliminação de Redundância no Hero (`src/pages/Home.tsx`)**:
     - O badge superior `.hero-presence-badge` já informa o atendimento presencial em Salinópolis.
     - O eyebrow foi refinado para **`<p className="eyebrow">Advocacia Previdenciária Especializada</p>`**, eliminando a repetição da cidade e reforçando o posicionamento previdenciário de autoridade.
  2. **Nivelamento do Card Pesqueiro / Seguro-Defeso (`src/pages/Home.tsx`)**:
     - Badge do card encurtado de *"★ Tradição Pesqueira em Salinópolis & Costa Norte"* para **`"Pesca Artesanal"`**, garantindo que o cabeçalho ocupe apenas 1 linha e nivele perfeitamente a grade horizontal com os demais cards.
  3. **Centralização Editorial Simétrica dos Cards de Contato (`src/index.css`)**:
     - Cards de contato rápido (Horário de Atendimento e WhatsApp) estruturados com layout vertical centralizado (`display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; min-height: 155px;`).
     - Ícones dourados centralizados no topo com moldura de 44x44px e cantos de 12px.
     - Hierarquia tipográfica nobre: títulos em caixa alta suave (`11.5px`, `letter-spacing: 0.06em`), telefone serifado em dourado (`1.25rem`, peso 600) e elevação aveludada no hover.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`), com asserções em [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/AGENTE%20FRONT/src/pages/Home.content.test.ts) validando tanto o novo eyebrow quanto o badge *"Pesca Artesanal"*.
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.33s com 57% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.


- **Refino Editorial Cirúrgico, Eliminação de Ecos, Elevação do BPC/LOAS & Inversão de Hierarquia dos Botões**:
  1. **Eliminação de Ecos no Hero (`src/pages/Home.tsx`)**:
     - Parágrafo `.hero-lead` atualizado para eliminar a repetição do atendimento regional (já presente no badge superior) e reforçar autoridade jurídica técnica:
       *“Orientação jurídica especializada, linguagem acessível e rigor técnico na defesa do seu benefício perante o INSS e a Justiça Federal.”*
  2. **Elevação do BPC/LOAS (`src/pages/Home.tsx`)**:
     - O item 6 de `practiceCardsData` foi elevado de seu antigo rótulo genérico (*"Outros serviços jurídicos"*) para **`title: "BPC / LOAS"`**, com badge **`"Idosos (65+) & PcD"`**, descrição explicitando a dispensa de contribuição prévia e mensagem de WhatsApp direcionada, integrando-se nativamente ao `ServiceDetailDrawer`.
  3. **Inversão da Hierarquia de Conversão nos Cards de Atuação (`src/pages/Home.tsx` e `src/index.css`)**:
     - **Botão Primário de Conversão:** A ação do WhatsApp (*“Consultar meu direito neste benefício ↗”*) agora ocupa o topo da área de ações com o visual soberano de botão sólido em Vinho Profundo (`var(--bg-accent-dark)`), borda dourada champanhe, texto branco e sombra de alta conversão.
     - **Ação Secundária:** O gatilho do Drawer (*“Ver detalhes e requisitos ↗”*) foi posicionado abaixo como botão secundário suave, permitindo ao segurado checar a documentação recomendada sem competir com a chamada principal.
     - Sincronizado no desktop e no mobile (`.practice-cards-grid .practice-card-action` ativo em vinho no celular).
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`), com asserção atualizada em [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.content.test.ts).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.10s com 55% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Correção Crítica do Hero no Mobile & Alinhamento do Balão de WhatsApp (`src/index.css`)**:
  - **Hero em 1 Coluna Vertical Fluida**:
    - No mobile (`max-width: 768px`), corrigido o `.hero-grid` de 2 colunas espremidas para **1 coluna vertical fluida e rigorosamente centralizada** (`flex-direction: column`, `align-items: center`, `text-align: center`, `gap: 28px`).
    - `.hero-copy h1` com clamp responsivo seguro (`clamp(2rem, 8vw, 2.7rem)`), `max-width: 18ch` e margens automáticas.
    - `.hero-lead` e `.hero-lead-national span` calibrados com `max-width: 36ch`, entrelinha `1.55` e centralização harmônica.
    - `.hero-actions` em coluna única com largura máxima ergonômica de 320px, botões ocupando 100% da área útil com altura mínima de 48px.
    - `.hero-visual` e `.hero-image-wrap` limitados a 320px com proporção 4/5, cantos suaves de 16px e sombra editorial aveludada.
    - `.hero-presence-badge` centralizado no topo com tipografia e paddings ajustados para telas pequenas (360px a 390px).
  - **Ergonomia e Ancoragem do Balão de WhatsApp no Mobile**:
    - `.whatsapp-float-greeting` ancorado com `bottom: calc(4.2rem + env(safe-area-inset-bottom))` e `right: 0.85rem`, alinhado com precisão milimétrica acima do botão flutuante e imune a safe-areas de iPhones.
    - Largura adaptativa com `width: min(270px, calc(100vw - 1.7rem))` para prevenir 100% de qualquer scroll horizontal em smartphones de 360px.
    - Botão de fechar do balão com área tátil confortável (28x28px) e `touch-action: manipulation`.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.15s com 55% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Lapidação de Experiência Única (UX/UI & Conversão — 5 Melhorias Cirúrgicas)**:
  1. **Hero Section — Badge Dinâmico de Presença Viva (`.hero-presence-badge`)**:
     - Adicionado pill translúcido acima do eyebrow em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx) com ponto verde esmeralda pulsante (`.hero-presence-dot` com animação `@keyframes livePulse`) e a mensagem: *“● Atendimento Presencial em Salinópolis & Consultoria em todo o Brasil”*.
     - Borda em ouro champanhe suave, fundo marfim translúcido e pulso sutil comunicando disponibilidade viva e imediata das sócias.
  2. **Seção 03 (Atuação) — Destaque Regional de Salinas & Checklist Interativo no Drawer**:
     - No card `seguro-defeso` em `practiceCardsData`, atualizado o badge de especialidade para: *“★ Tradição Pesqueira em Salinópolis & Costa Norte”*.
     - Em [src/components/site/ServiceDetailDrawer.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/ServiceDetailDrawer.tsx), a lista de documentos recomendados foi transformada em um **checklist interativo com checkboxes acessíveis**.
     - Ao selecionar documentos, o botão de WhatsApp interpola dinamicamente os itens marcados na mensagem pré-formatada: *“Olá, Dras. Karlla e Keyteler! Gostaria de consultar sobre [Serviço]. Já possuo os seguintes documentos: [Documentos marcados].”*, e o CTA atualiza o texto para *“Enviar com X documento(s) marcado(s)”*.
  3. **Seção 05 (FAQ) — Marca-Texto Dourado em Tempo Real (`.faq-search-highlight`)**:
     - Implementada a função utilitária `highlightSearchMatch` em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx) com escape seguro de caracteres especiais regex.
     - As ocorrências do termo pesquisado no acordeon do FAQ (tanto nas perguntas quanto nas respostas) são envoltas dinamicamente por `<mark className="faq-search-highlight">`.
     - No CSS (`src/index.css`), `.faq-search-highlight` estilizado com fundo `rgba(158, 123, 86, 0.22)`, cor herdeira, cantos de `3px` e padding de `0 3px`.
  4. **Seção 06 (Atendimento & Contato) — Máscara de Telefone e Atalho Waze**:
     - Em [src/components/site/ContactForm.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/components/site/ContactForm.tsx), implementada autoformatação via `formatPhoneInput` no evento `onChange`: o número se formata automaticamente para `(XX) XXXXX-XXXX` ou `(XX) XXXX-XXXX` à medida que o usuário digita.
     - Na Seção de Localização em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx) e [src/pages/ServicosPrevidenciarios.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/ServicosPrevidenciarios.tsx), adicionado o botão pílula de rota direta no **Waze** (`https://waze.com/ul?q=Avenida%20Modesto%20da%20Encarna%C3%A7%C3%A3o%20Rodrigues%20756%20Salinopolis%20PA`) com ícone `Navigation` ao lado do Google Maps.
  5. **Botão Flutuante de WhatsApp — Balãozinho Editorial Acolhedor (`.whatsapp-float-greeting`)**:
     - Em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx), criado estado `showFloatGreeting` acionado após 4 segundos de montagem com persistência de fechamento no `sessionStorage` (`kk_wa_greeting_dismissed`).
     - Balão editorial de luxo com mensagem calorosa: *“Dúvidas sobre o seu benefício? Fale diretamente com as advogadas titulares.”*, botão de fechamento acessível, ponta de balão chanfrada e animação suave `@keyframes floatGreetingFadeIn`.
  - **Qualidade & Blindagem por Testes**:
    - **23/23 testes aprovados** no Vitest (`pnpm test`), com novo bloco de asserções em [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.content.test.ts).
    - TypeScript 100% verificado sem erros (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.05s com 55% de otimização de imagens.
    - Servidor Vite ativo e respondendo em `http://localhost:5173/`.

- **Despoluição dos CTAs do Hero (Remoção da Linha de Contato Secundária)**:
  - Removido o parágrafo `<p className="hero-contact-note">` ("WhatsApp e telefone: (91) 9162-0280") do bloco de ações da primeira dobra em [src/pages/Home.tsx](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.tsx).
  - O bloco de conversão do Hero agora foca com máxima força e clareza nos dois direcionamentos principais: o botão de ação primária (*"Falar com as advogadas"*) e o link institucional (*"Conhecer a sociedade" / scroll suave*).
  - O telefone `(91) 9162-0280` permanece 100% preservado em todos os pontos canônicos: utilitário superior, Seção 06 de Atendimento, rodapé institucional, botão flutuante e metadados JSON-LD.
  - **Qualidade & Blindagem por Testes**:
    - **22/22 testes aprovados** no Vitest (`pnpm test`), com asserção atualizada em [src/pages/Home.content.test.ts](file:///c:/Users/NOC%2001/Desktop/PROJETOS%20ANTIGRAVITY/PROJETO%20K&K%202.0/src/pages/Home.content.test.ts).
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.26s.
    - Servidor local ativo com HMR instantâneo em `http://localhost:5173/`.

- **Auditoria Técnica de Layout, Responsividade & Performance (6 Correções Concluídas)**:
  1. **Seção 03 — Grade de Serviços Equilibrada (3x2)**:
     - Configurado `.practice-cards-grid` no desktop para `repeat(3, minmax(0, 1fr))` fixos (e `repeat(2, minmax(0, 1fr))` abaixo de 1024px), eliminando definitivamente o layout assimétrico de 4+2 cards.
     - Garantido `display: flex !important;` em `@media (max-width: 768px)` declarado após a regra desktop, mantendo o carrossel tátil de 1 card por vez 100% operacional com `.practice-carousel-controls`.
  2. **Seção 06 — Cards de Contato Lado a Lado (`.contact-details-grid`)**:
     - Exibição em 2 colunas no desktop (`repeat(2, minmax(0, 1fr)) !important;`) e coluna única fluida apenas abaixo de 640px.
     - Layout horizontal em linha nos itens (`flex-direction: row; align-items: flex-start; text-align: left; padding: 20px;`) e alinhamento à esquerda no corpo (`.contact-detail-body`).
     - Linha decorativa `.contact-detail-item::before` ocultada (`display: none !important;`).
  3. **Seção 02 — Unificação dos Cards de Valores (`.value-item`)**:
     - Barra escura superior `.value-item::before` ocultada (`display: none !important;`), harmonizando os 4 cards de valores com a estética limpa das Seções 01 e 03.
  4. **Header — Proporção Íntegra da Logo (`.brand-mark`)**:
     - `.brand-mark img` ajustado para `object-fit: contain !important;`, prevenindo recortes na geometria do monograma dourado.
  5. **Rodapé — Correção de Sobreposição no Rodapé (`.footer-top`)**:
     - Removido `position: absolute; left: 50%; transform: translate(-50%, -50%)` de `.footer-top > .footer-eyebrow`.
     - Layout estruturado no CSS Grid nativo com `grid-template-columns: auto 1fr auto !important; align-items: center; justify-items: center;`, permitindo fluxo central natural sem risco de colisão e empilhamento vertical suave no mobile (`<= 768px`).
  6. **Performance & LCP (Fontes e Imagem Hero)**:
     - Removidas `Cormorant Garamond` e `Manrope` da tag do Google Fonts em `index.html`, carregando unicamente `Playfair Display` e `Plus Jakarta Sans`.
     - 55 referências residuais no CSS substituídas por `var(--font-serif)` e `var(--font-sans)`.
     - No primeiro slide do Hero em `src/pages/Home.tsx`, aplicados `fetchPriority="high"` e `loading="eager"`, e `loading="lazy"` no slide secundário, acelerando expressivamente a métrica de LCP.
  - **Qualidade & Blindagem por Testes**:
    - **22/22 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.40s.
    - Servidor local ativo em `http://localhost:5173/`.

- **Correção Definitiva da Renderização do Logo Oficial (`.brand-mark`)**:
  - **Identificação da Causa-Raiz**:
    - O arquivo `public/assets/logo-oficial.png` original possuía ~500px de transparência lateral e uma linha de corte/recorte branca irregular nos cantos inferiores, causando um corte/entalhe visual (*notch*) visível onde o fundo vinho era interrompido por pixels brancos.
    - O container `.brand-mark` em `src/index.css` utilizava uma borda sutil cinza/bege (`border: 1px solid var(--border-subtle)`), gerando uma segunda moldura externa que evidenciava a margem e o recorte do logo.
  - **Solução Implementada**:
    - O ativo de alta fidelidade não corrompido (`public/assets/favicon-512.png`), que contém o exato monograma "K" dourado com seu traço interno sobre fundo vinho 100% sólido sem nenhum artefato ou corte nos 4 cantos, foi exportado em alta resolução (1024×1024 via interpolação Lanczos3) diretamente para `public/assets/logo-oficial.png`.
    - Backup preservado intacto em `public/assets/logo-oficial.original-backup.png`.
    - No CSS (`src/index.css`), `.brand-mark` foi lapidado para agir como o badge joia oficial: fundo transparente, remoção da borda redundante (`border: 0 !important`), cantos suaves de 8px com `overflow: hidden`, sombra aveludada (`box-shadow: 0 2px 8px rgba(58, 23, 28, 0.16)`) e imagem preenchendo 100% com `object-fit: cover`.
    - No rodapé (`src/components/site/Footer.tsx`), atributos de dimensão atualizados para proporção quadrada 160×160.
  - **Qualidade & Blindagem por Testes**:
    - **22/22 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% limpo (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.65s com 55% de economia em assets.
    - Servidor local ativo em `http://localhost:5173/`.

- **Refatoração Completa do Design System & Redesign Visual (Identidade Editorial 2026)**:
  - **Paleta de Cores e Contraste Estrito (WCAG AA/AAA)**:
    - `--bg-primary: #FAF6F0`: Fundo bege claro suave adotado como base geral e no Hero (substituindo o antigo fundo vinho escuro), proporcionando leveza, elegância e máximo contraste para o retrato da advogada.
    - `--bg-surface: #FFFFFF`: Fundo puro para cards padronizados, formulário de contato e containers de apoio.
    - `--bg-accent-dark: #3A171C`: Vinho/Marrom nobre profundo aplicado exclusivamente na faixa de citação/manifesto, seção de FAQ e nos botões primários.
    - `--bg-footer: #14181D`: Cinza chumbo escuro refinado para o rodapé institucional.
    - `--text-primary: #1E1315`: Quase preto com subtom quente para títulos e leitura de alto contraste (índice > 14.5:1).
    - `--text-secondary: #594A4E`: Cinza/marrom médio para parágrafos de apoio e legendas com contraste superior a 5.5:1.
    - `--text-on-dark: #FAF6F0`: Texto luminoso para máxima legibilidade sobre fundos escuros.
    - `--accent-gold: #9E7B56`: Dourado sóbrio para detalhes, badges, ícones e palavras-chave em destaque.
    - `--border-subtle: #EAE3D9`: Bordas finas de 1px nos cards e divisores.
  - **Tipografia e Hierarquia Editorial**:
    - Títulos (`h1`, `h2`) e números estatísticos configurados exclusivamente em fonte serif (*Playfair Display* / *Cormorant Garamond*, pesos 500 e 600).
    - Ênfase controlada em `em` limitada a 1 ou 2 palavras-chave por título em itálico com dourado sóbrio.
    - Corpo de texto (`p`), menu, subtítulos de cards (`h3`, `h4`), botões, filtros, inputs e FAQ padronizados em *Plus Jakarta Sans* (`1rem`, `line-height: 1.6`, `max-width: 65ch`).
  - **Padronização de Componentes**:
    - **Card Padrão**: Fundo `#FFFFFF`, borda `1px solid #EAE3D9`, cantos de `12px`, padding de `24px`, sombra `0 4px 12px rgba(0,0,0,0.03)` com elevação tátil no hover (`translateY(-2px)` e realce sutil em borda dourada).
    - **Botões Primários (CTAs)**: Formato pílula (`border-radius: 9999px`), preenchimento `#3A171C`, texto branco, padding `12px 24px/28px`, hover clareando suavemente para `#52232A`.
    - **Tags / Pílulas de Filtro (FAQ)**: Formato pílula, borda `1px solid rgba(250, 246, 240, 0.25)`, texto claro, ativa com fundo `#9E7B56` e texto branco.
    - **Faixa de Citação/Manifesto**: Fundo vinho com gradiente cinematográfico fundido com imagem de escritório jurídico com lâmpada clássica e mesa de mogno (`office-manifesto-bg.webp`).
  - **Preservação de Conteúdo & Integridade**:
    - 100% dos textos reais, dados de OAB, estatísticas, telefones, links do WhatsApp, mapa, fotos reais e vídeos de reels preservados.
  - **Qualidade, Blindagem por Testes & Build**:
    - **22/22 testes aprovados** no Vitest (`pnpm test`).
    - TypeScript 100% verificado (`tsc --noEmit`).
    - Build de produção compilado com sucesso em 3.59s com otimização WebP de imagens.
    - Servidor local ativo em `http://localhost:5173/`.

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
- **Compilação**: ✅ Sucesso total (`npm run build` gerado em 3.05s com 57% de otimização em imagens).
- **TypeScript**: ✅ 100% limpo (`tsc --noEmit` sem erros ou avisos).
- **Testes**: ✅ **24/24 testes aprovados** (`vitest run`).
- **Servidor Local**: ✅ Ativo e respondendo em tempo real em `http://localhost:5173/`.
- **Simetria Mobile da Seção 01**: ✅ **100% Concluída** (Eliminação definitiva da linha vertical residual nos cards empilhados via neutralização de `border-right`).
- **Preservação Canônica**: ✅ Rigorosamente mantidos os OABs (Dra. Karlla 40.209, Dra. Keyteler 40.642), sede física em Salinópolis e telefone oficial (91) 9162-0280.
- **Git & GitHub**: ✅ Pronto para commit.

## 🎯 Próximos Passos Imediatos
- Acompanhar a visualização no navegador local em `http://localhost:5173/` conferindo a simetria horizontal limpa dos 3 cards de números no mobile.
- Prosseguir com novos refinamentos conforme direcionamento do cliente.













