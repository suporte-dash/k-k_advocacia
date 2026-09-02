# Changelog — Ritmo cromático e reversão de imagens

**Data:** 02 de setembro de 2026
**Projeto:** K&K Advocacia

## Alterações realizadas

### Fundos de imagem revertidos

Foram removidos do Home os fundos fotográficos dos wrappers de Presença em números/Sobre, Área de atuação/Advogadas e FAQ/Atendimento. A página de Serviços também deixou de aplicar o fundo fotográfico no fluxo entre Serviços e Atendimento. As constantes e propriedades `backgroundImage` associadas a esses assets foram removidas do código.

Os dez WebP que ficaram sem uso foram apagados de `public/assets/`: fundos de Advogadas, FAQ, Posicionamento público, Presença em números, Presença/Sobre e Atendimento de Serviços.

### Novo ritmo cromático no Home

A seção **03 — Área de atuação** passou de `section-paper` para `section-wine`. Os textos, links, listas, linhas e marcadores foram adaptados para as variantes claras e douradas já utilizadas em Compromissos.

A seção **07 — Atendimento / A porta está aberta** também passou a usar `section-wine`. O texto principal, orientação de WhatsApp, telefone e informações de endereço foram ajustados para contraste sobre o fundo vinho, enquanto o cartão do mapa recebeu bordas e fundo translúcido compatíveis com a seção escura.

A sequência visual resultante é: Hero vinho → Presença clara → Sobre clara → **Atuação vinho** → Advogadas clara → **Compromissos vinho** → FAQ clara → **Atendimento vinho**.

### Glifos decorativos

A seção **02 — Sobre** recebeu um glifo arquitetônico SVG inline, em `#A37E4B` com opacidade de 4%, posicionado no canto inferior direito e afastado da área principal de texto.

A seção **06 — Perguntas frequentes** recebeu um glifo geométrico SVG inline exclusivo, também em `#A37E4B` com opacidade de 4%, posicionado no canto inferior direito para não competir com o accordion nem com o link de WhatsApp.

A seção **04 — Advogadas** não recebeu glifo, conforme solicitado, pois já possui as fotografias reais como elemento visual principal.

## Validação

- TypeScript: aprovado com `pnpm run check`.
- Testes: **8 de 8 aprovados** em 3 arquivos de teste.
- Build de produção: aprovado com `pnpm run build`.
- Integridade do diff: `git diff --check` sem erros.
- Prévia local: HTTP 200 em `http://127.0.0.1:4174/`.
- Referências a `PROOF_BACKGROUND_IMAGE`, `SERVICES_CONTACT_BACKGROUND_IMAGE` e aos fundos removidos: nenhuma encontrada no código.
- Assets órfãos especificados no prompt: nenhum restante em `public/assets/`.
- GitHub: nenhuma publicação realizada após estas alterações; o projeto local contém a nova versão para aprovação.

## Prévia

[Abra a prévia local temporária na seção Atuação](https://4174-ib2fctn3dwcq6rfd1bpx3-0be50889.us4.manus.computer/?preview=prompt-color-rhythm#atuacao)
