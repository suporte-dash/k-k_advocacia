# Changelog — navegação reativa ao scroll

## `src/components/site/Header.tsx`

O header agora acompanha o scroll com `requestAnimationFrame` e listener passivo, aplicando `is-scrolled` após 48px. Também foi adicionado scrollspy com `IntersectionObserver`, identificando somente âncoras da página atual e aplicando `is-active` e `aria-current="location"` no menu desktop e mobile.

## `src/components/site/ScrollProgress.tsx`

Novo componente compartilhado que calcula o percentual de leitura com base na altura real do documento, atualiza a largura da barra via `requestAnimationFrame` e reage a scroll e resize. A atualização dinâmica é omitida quando `prefers-reduced-motion: reduce` está ativo.

## `src/index.css`

Foram adicionados o offset global de âncoras (`scroll-padding-top` e `section[id] { scroll-margin-top: 96px; }`), a barra dourada fina de progresso, o estado condensado do header com redução de altura e sombra sutil, a redução opcional do logotipo e o sublinhado dourado permanente para links ativos. O menu mobile ajusta sua posição quando o header está condensado e a barra é ocultada para usuários que preferem movimento reduzido.

## `inspection-notes.md`

Foi registrada a decomposição do prompt, as medições de scrollspy, a validação do offset de âncora na Home e em Serviços e a revisão mobile local.
