# Auditoria de assets — K&K Advocacia

A inspeção visual confirmou que `public/assets/foto-oficial-advogadas.jpg` não é uma foto limpa: contém o monograma, o título “Somos”, um parágrafo promocional, textos-fantasma de fundo e as OABs embutidas na parte inferior. Ela não deve ser usada como retrato sem composição. Não há, na pasta `public/assets`, uma versão alternativa limpa das duas advogadas.

O retrato `karlla-pinheiro-hero.png` é um retrato individual com o monograma no canto superior e a legenda gravada “DRA. KARLLA PINHEIRO” na base. A legenda duplica a legenda HTML existente. O retrato de Keyteler deve ser tratado da mesma forma após inspeção/edição.

A listagem de assets contém somente `abstract-archival-texture.png`, `favicon-192.png`, `favicon-512.png`, `foto-oficial-advogadas.jpg`, `karlla-pinheiro-hero.png`, `keyteler-leite-hero.png` e `logo-oficial.png`. Não existe arquivo-fonte original sem composição para a foto da equipe.

A auditoria técnica também mostrou que o arquivo chamado `abstract-archival-texture.png` é identificado pelo sistema como WebP VP8, apesar da extensão PNG, portanto o pipeline deve normalizar esse asset para uma extensão/formato coerente.

Os números visíveis na composição atual são `OAB/PA 40.642` para Keyteler Leite e `OAB/PA 40.209` para Karlla Pinheiro. Eles ainda precisam de confirmação explícita da cliente antes de serem publicados como HTML real.

## Mapeamento visual para restauração

A foto de equipe tem texto concentrado no terço esquerdo e na faixa inferior, enquanto as pessoas ocupam principalmente o centro-direita; o monograma no canto superior esquerdo deve ser preservado. O retrato de Karlla tem apenas a legenda e sublinhado no rodapé, sobre uma área de gradiente vinho/cinza, com o monograma K no canto superior esquerdo preservado. A edição generativa tentou remover os textos, mas alterou identidade, pose e composição; portanto, não será usada como fonte final. A restauração determinística será aplicada somente às áreas de fundo e legenda.

## Validação intermediária das máscaras

A primeira restauração determinística preservou os sujeitos, mas a inspeção visual mostrou resíduos: palavras-fantasma ainda aparecem na foto de equipe, e a legenda inferior da Karlla deixou uma sombra escura. Nenhum desses candidatos será usado sem nova limpeza focada. As áreas inferiores serão reconstruídas por preenchimento suave de gradiente, sem tocar nos sujeitos ou no monograma.

## Candidatos restaurados

Os retratos individuais de Karlla e Keyteler estão limpos, sem nome ou sublinhado, com o monograma K preservado e o gradiente inferior contínuo. A foto de equipe foi refinada com máscaras OCR/localizadas, preservando integralmente as pessoas e o monograma; a inspeção final não encontrou palavras institucionais legíveis.

## Correção do pipeline WebP

Após o primeiro deploy da restauração, a inspeção pública mostrou que o elemento `picture` ainda carregava os WebP antigos. A causa foi a existência de WebP pré-restauração versionados em `public/assets`, que o build copiava sem recriá-los a partir dos JPG atualizados. O script `scripts/prepare-assets.mjs` agora usa Sharp para gerar os três WebP diretamente dos JPG canônicos, e o script `pages:build` executa essa etapa antes do Vite. O cache de otimização foi removido durante a validação do build final.
