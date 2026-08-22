# Changelog — Botão flutuante de WhatsApp na página de Serviços

## Alteração

A página `src/pages/ServicosPrevidenciarios.tsx` passou a incluir, entre o conteúdo principal e o Footer, o mesmo link `.whatsapp-float` já utilizado na Home. Foram preservados o `WHATSAPP_URL`, o ícone `MessageCircle`, o rótulo visível `WhatsApp`, o `aria-label`, o `title`, o `target="_blank"` e o `rel="noreferrer"`.

Nenhuma regra CSS nova foi criada: a página reutiliza integralmente o estilo global existente, incluindo o pill vinho/dourado no desktop e o círculo compacto no mobile, com `position: fixed`, `z-index: 40`, safe-area inset e estados de hover, foco e active.

## Validação

A página local de Serviços foi conferida em desktop e mobile. O botão apareceu no canto inferior direito sem alterar o fluxo do layout. Em mobile, o texto é ocultado pela regra global e o controle se transforma no círculo de 2,85rem, mantendo o mesmo padrão da Home.

A inspeção do DOM confirmou o link com:

- `position: fixed`;
- `z-index: 40`;
- URL `https://wa.me/559191620280?text=Olá%2C%20gostaria%20de%20falar%20com%20as%20advogadas.`;
- `aria-label="Falar com as advogadas pelo WhatsApp"`;
- `title="Falar com as advogadas pelo WhatsApp"`.

Também foram aprovados TypeScript, **8 de 8 testes Vitest**, build do GitHub Pages e `git diff --check`.

Data: 22 de agosto de 2026.


## Publicação

O commit `686998a` foi publicado em `main`. O workflow do GitHub Pages `32577024582` concluiu com sucesso. A rota pública de Serviços também foi aberta com cache bust em `https://suporte-dash.github.io/k-k_advocacia/servicos-previdenciarios-salinopolis?v=686998a`; o navegador renderizou a página e listou o botão flutuante como link acessível.
