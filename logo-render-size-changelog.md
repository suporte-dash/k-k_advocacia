# Changelog — Tamanho de renderização da logo

## Alterações

A logo original `public/assets/logo-oficial.png` foi mantida sem edição. O CSS do Header agora usa a proporção real de 1,5:1 e tamanhos maiores em todos os estados: `96×64px` no desktop normal, `84×56px` no desktop condensado, `84×56px` no mobile normal e `72×48px` no mobile condensado.

As alturas dos containers do header permanecem suficientes para acomodar a marca centralizada: `78px` no desktop normal, `62px` no desktop condensado, `72px` no mobile normal e `60px` no mobile condensado. A transição existente de largura e altura foi preservada.

No `Footer.tsx`, a declaração intrínseca da imagem foi corrigida de `width="160" height="160"` para `width="160" height="107"`, alinhando o espaço reservado à proporção real da logo.

## Validação

TypeScript, build de Pages, `git diff --check` e os 7 testes Vitest foram aprovados. A revisão visual foi feita em viewport mobile de 390×844px e desktop de 1280×900px. A inspeção após rolagem confirmou o header condensado com a logo em `84×56px`, sem deslocamento inesperado da navegação.
