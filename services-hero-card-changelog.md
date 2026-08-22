# Changelog — Card do hero de Serviços

## Alterações

- Removido o bloco `services-hero-card-topline` de `src/pages/ServicosPrevidenciarios.tsx`.
- Removidos do CSS os seletores exclusivos `services-hero-card-topline`, `services-hero-card-index` e `services-hero-card-label`, após confirmação de que não eram usados em outro lugar.
- Removida a margem superior de `30px` do título do card. O `padding: clamp(26px, 3vw, 40px)` do próprio painel passou a fornecer o respiro superior adequado.
- Mantidos sem alteração o título, o texto de apoio, o checklist de três itens, os ícones de confirmação e o link `Enviar uma mensagem`.
- O sistema correto de numeração `SectionMarker` da página de Serviços permanece intacto: `01 Serviços` e `02 Atendimento`.

## Validação

- TypeScript aprovado.
- 7 de 7 testes Vitest aprovados.
- Build de Pages aprovado.
- Revisão visual local em desktop e mobile de 390×844px.
- Revisão pública após o deploy confirmou o card sem rótulo residual e com proporção equilibrada.

## Publicação

- Commit de implementação: `fb1aea9`.
- Deploy validado pelo workflow `32570926138`.
