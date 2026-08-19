# Auditoria de assets — K&K Advocacia

A inspeção visual confirmou que `public/assets/foto-oficial-advogadas.jpg` não é uma foto limpa: contém o monograma, o título “Somos”, um parágrafo promocional, textos-fantasma de fundo e as OABs embutidas na parte inferior. Ela não deve ser usada como retrato sem composição. Não há, na pasta `public/assets`, uma versão alternativa limpa das duas advogadas.

O retrato `karlla-pinheiro-hero.png` é um retrato individual com o monograma no canto superior e a legenda gravada “DRA. KARLLA PINHEIRO” na base. A legenda duplica a legenda HTML existente. O retrato de Keyteler deve ser tratado da mesma forma após inspeção/edição.

A listagem de assets contém somente `abstract-archival-texture.png`, `favicon-192.png`, `favicon-512.png`, `foto-oficial-advogadas.jpg`, `karlla-pinheiro-hero.png`, `keyteler-leite-hero.png` e `logo-oficial.png`. Não existe arquivo-fonte original sem composição para a foto da equipe.

A auditoria técnica também mostrou que o arquivo chamado `abstract-archival-texture.png` é identificado pelo sistema como WebP VP8, apesar da extensão PNG, portanto o pipeline deve normalizar esse asset para uma extensão/formato coerente.

Os números visíveis na composição atual são `OAB/PA 40.642` para Keyteler Leite e `OAB/PA 40.209` para Karlla Pinheiro. Eles ainda precisam de confirmação explícita da cliente antes de serem publicados como HTML real.
