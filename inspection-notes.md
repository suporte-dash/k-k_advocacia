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

## Correção definitiva do eixo do hero de Serviços

Após o deploy do commit `d2184ea`, a medição no DOM público confirmou o alinhamento: container e texto principal começam em `x=33`; o card começa em `x=788`; o indicador `Atendimento próximo` começa em `x=33`; `Salinópolis / PA` começa em `x=788`; e `Atuação nacional` termina em `x=1233`, coincidente com a borda direita do card. O workflow `32365274280` concluiu com sucesso.

## Centralização do nome da página de Serviços

O texto `Serviços previdenciários em Salinópolis, PA` foi movido para um bloco próprio acima do grid do hero e centralizado em relação ao container total. A validação pública após o commit `4bd514c` mediu o centro do elemento em `x=633` contra o centro da viewport em `x=640`, diferença de apenas 7 px devido ao scrollbar. A captura desktop e a captura mobile confirmaram a centralização visual e a legibilidade.

## Restauração da logo original

A logo original `logo-oficial.png` foi recuperada do histórico do repositório e voltou a ser a referência do componente compartilhado `BRAND_LOGO`. O SVG plano foi removido para evitar duplicidade. O build otimizou a PNG para aproximadamente 307 kB no artefato final.

Após o commit `042fc06` e o workflow `32373992896`, a inspeção pública confirmou a logo original no cabeçalho e no rodapé da Home e da página de Serviços, mantendo também a centralização do título da página secundária.

## Reorganização da primeira dobra de Serviços

A primeira dobra foi reorganizada com uma hierarquia mais clara. O eyebrow agora funciona como marcador editorial central com linhas laterais; o grid do hero foi alinhado pelo topo; o card ganhou índice `01`, rótulo `Comece por aqui`, checklist e CTA contextual `Enviar uma mensagem`; e a faixa inferior recebeu uma linha de separação e espaçamento mais integrado.

A inspeção desktop em `1309x818` confirmou equilíbrio entre título e card, leitura sequencial e CTA contextual. A inspeção mobile em `390x950` confirmou marcador central legível, CTA em largura total e card reorganizado sem sobreposição.

## Validação pública da reorganização do hero

O workflow `32381725977` concluiu com sucesso para o commit `873559d`. A página pública passou a exibir o novo índice `01 Comece por aqui`, o CTA contextual `Enviar uma mensagem`, o marcador editorial com linhas laterais e a faixa inferior com separação visual. A Home e o rodapé continuam usando a logo original PNG.

## Centralização dos indicadores da faixa inferior

Os indicadores `Atendimento próximo`, `Salinópolis / PA` e `Atuação nacional` passaram a ser tratados como um único grupo centralizado, com largura máxima controlada em desktop. No mobile, os três permanecem visíveis, distribuídos com espaçamento compacto e legível. As capturas desktop `1172x760` e mobile `390x950` confirmaram a composição sem sobreposição.

## Restauração das fotos institucionais — candidatos finais

A candidata `foto-oficial-advogadas.cleaned.jpg` foi revisada após várias iterações do script `scripts/clean_embedded_text.py`. A máscara final usa apenas caixas OCR no painel textual esquerdo, máscaras locais para vestígios de baixo contraste e faixas estreitas para a legenda inferior; não há máscara ampla sobre rostos ou corpos. A inspeção visual confirmou a preservação do monograma K, do enquadramento e da identidade, pose e expressão das duas advogadas. O título, parágrafo, nomes, OABs e separador embutidos não aparecem mais na candidata. OCR independente detectou somente artefatos não linguísticos (`IK`, `~`, `a`, `ae`, `/)`), sem palavras institucionais legíveis. Os candidatos dos dois retratos também foram regenerados nas proporções originais (1122×1402); a equipe permanece em 1080×1351. A inspeção visual dos retratos confirmou que o monograma K dourado foi preservado, que as legendas embutidas foram removidas e que não há alteração perceptível de identidade, pose ou expressão. Ainda não substituí os JPG oficiais nem publiquei esta alteração.
