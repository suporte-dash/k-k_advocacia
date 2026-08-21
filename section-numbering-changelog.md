# Changelog — padronização da numeração das seções

## `src/pages/Home.tsx`

A sequência editorial da Home foi corrigida e completada: `01` Presença em números, `02` Sobre, `03` Área de atuação, `04` Advogadas, `05` Compromissos, `06` Perguntas frequentes e `07` Atendimento. As seções de fundo vinho usam a prop `light` do componente compartilhado. O Hero e o bloco de citação permanecem sem numeração.

## `src/pages/ServicosPrevidenciarios.tsx`

A auditoria confirmou que a página já possui a sequência independente correta: `01` Serviços e `02` Atendimento. O Hero permanece sem marcador, sem alterações estruturais.

## `src/components/site/SectionMarker.tsx`

Nenhuma alteração foi necessária. O componente existente continua sendo a única fonte visual dos marcadores, incluindo a variante clara para fundos escuros.

## `src/pages/Home.content.test.ts`

A expectativa antiga da numeração final foi atualizada para validar todos os sete marcadores da Home, suas labels, a variante clara dos fundos vinho e a ausência do marcador obsoleto `00`.
