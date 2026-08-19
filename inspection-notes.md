# Notas de inspeção — melhorias do briefing

## Validação visual local

A Home local renderizou corretamente após o ajuste temporário de `server.allowedHosts`. O header compartilhado, o logo SVG plano, o hero com `picture` WebP/JPG, o novo bloco `Presença em números`, os CTAs e o botão flutuante de WhatsApp aparecem na composição editorial vinho/marfim.

A página de Serviços também renderizou corretamente com o mesmo Header e Footer da Home. O hero, o card de orientação, os seis serviços, o fluxo em três passos, o contato e o endereço foram confirmados visualmente. O carregamento exibiu os assets com os caminhos relativos esperados.

A captura inicial da Home parecia branca porque foi feita antes da estabilização da página; após aguardar o carregamento, a composição ficou visível e interativa. A permissão de host usada localmente é temporária e deve ser removida antes do commit final.

## Validação mobile

A Home foi renderizada em viewport de 375×667, equivalente ao iPhone SE. O H1 respeitou o `clamp` previsto, a descrição permaneceu legível e o CTA principal “Falar com as advogadas” ficou visível na primeira dobra. O menu compacto, o logo SVG e o botão flutuante de WhatsApp também permaneceram acessíveis.

## Validação pública pós-deploy

O workflow `32304412089` publicou o commit `0345087` com sucesso. A Home pública em `https://suporte-dash.github.io/k-k_advocacia/` renderizou o logo SVG, os retratos com WebP/JPG, o bloco de prova social, os OABs confirmados e os CTAs.

A rota `https://suporte-dash.github.io/k-k_advocacia/servicos-previdenciarios-salinopolis` abriu diretamente sem 404. O caminho-base `/k-k_advocacia/` foi aplicado nos links internos e nos assets, e a página manteve o Header/Footer compartilhados, os serviços e o endereço.

## Structured data

O Rich Results Test do Google foi aberto com a URL pública de Serviços. A página de teste carregou a URL, mas a ação de `TEST URL` não retornou um resultado automático nesta sessão; por isso, a validação final do JSON-LD deve ser complementada por inspeção direta do HTML público. O código mantém o bloco `LegalService`, `serviceType`, endereço, telefone e `sameAs`, sem `aggregateRating` ou promessas de resultado.

A inspeção do DOM público executado após o deploy encontrou três ocorrências do telefone `+559191620280`, três ocorrências do endereço, duas ocorrências de `LegalService` e uma de `serviceType`, sem ocorrência de `aggregateRating`. Isso confirma que o JSON-LD e o conteúdo de contato estão presentes no DOM final.

## Lighthouse

Linha de base na versão publicada anterior: performance 83, LCP 3,3 s, CLS 0,00013, FCP 2,8 s e TBT 220 ms.

Versão publicada após o commit `0345087`: performance 85, LCP 3,5 s, CLS 0,00013, FCP 2,9 s e TBT 130 ms. O TBT melhorou em aproximadamente 90 ms e a pontuação subiu dois pontos; LCP e FCP oscilaram levemente, portanto não são apresentados como ganho absoluto. A medição é uma amostra única de Lighthouse e pode variar por rede e cache.
