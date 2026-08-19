# Notas de inspeção — melhorias do briefing

## Validação visual local

A Home local renderizou corretamente após o ajuste temporário de `server.allowedHosts`. O header compartilhado, o logo SVG plano, o hero com `picture` WebP/JPG, o novo bloco `Presença em números`, os CTAs e o botão flutuante de WhatsApp aparecem na composição editorial vinho/marfim.

A página de Serviços também renderizou corretamente com o mesmo Header e Footer da Home. O hero, o card de orientação, os seis serviços, o fluxo em três passos, o contato e o endereço foram confirmados visualmente. O carregamento exibiu os assets com os caminhos relativos esperados.

A captura inicial da Home parecia branca porque foi feita antes da estabilização da página; após aguardar o carregamento, a composição ficou visível e interativa. A permissão de host usada localmente é temporária e deve ser removida antes do commit final.

## Validação mobile

A Home foi renderizada em viewport de 375×667, equivalente ao iPhone SE. O H1 respeitou o `clamp` previsto, a descrição permaneceu legível e o CTA principal “Falar com as advogadas” ficou visível na primeira dobra. O menu compacto, o logo SVG e o botão flutuante de WhatsApp também permaneceram acessíveis.
