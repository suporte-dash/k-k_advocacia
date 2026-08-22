# Changelog — Marcas d’água decorativas

## Prompt executado

Implementação do padrão de textura dourada discreta em duas seções da Home do site K&K Advocacia:

- `.proof-section` — seção **Presença em números**.
- `.contact-section` — seção **Atendimento / A porta está aberta**.

## Alterações

O mesmo glifo abstrato linear já utilizado em `.commitments-section` foi reaproveitado diretamente como SVG inline em `background-image`. O desenho usa traço dourado `#A37E4B`, sem palavras, siglas ou frases, e mantém `opacity='0.04'` dentro do SVG. Nenhum arquivo de imagem novo foi criado.

Na seção `.proof-section`, o glifo fica no canto superior direito, afastado do marcador editorial, do título e do grid `.proof-stats`. Na seção `.contact-section`, fica no canto inferior direito, fora do texto, dos CTAs e do painel de localização.

As duas seções usam `background-repeat: no-repeat` e escala responsiva com `background-size: clamp(170px, 22vw, 300px)`. O posicionamento também usa `clamp()` para preservar respiro em telas largas e estreitas.

A seção `.quote-section` não foi alterada, conforme solicitado, e a textura existente de `.commitments-section` foi preservada.

## Validação

A implementação foi conferida em capturas desktop de 1280×900px e mobile de 390×844px. Em ambos os tamanhos, o glifo permanece ambiental e secundário, sem perda perceptível de contraste, sem sobreposição aos números, ao CTA, ao mapa ou ao conteúdo textual.

Também foram aprovados:

- TypeScript com `pnpm check`;
- 7 de 7 testes Vitest;
- build do GitHub Pages com `pnpm pages:build`;
- `git diff --check`.

Data: 22 de agosto de 2026.
