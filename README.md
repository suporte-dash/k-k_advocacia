# Karlla Pinheiro e Keyteler Leite Sociedade de Advogadas

Este pacote contém uma versão **100% estática** do site institucional, pronta para ser publicada em um repositório GitHub público e servida pelo GitHub Pages. As imagens institucionais necessárias já estão incluídas em `public/assets`, portanto a publicação não depende do ambiente anterior.

## Estrutura de publicação

| Elemento | Finalidade |
|---|---|
| `src/` | Código React, estilos e componentes do site. |
| `public/assets/` | Logo, fotos, textura e ícones usados pelo site. |
| `vite.config.ts` | Configuração de build Vite, incluindo a base do repositório. |
| `.github/workflows/deploy-pages.yml` | Automação que valida, compila e publica no GitHub Pages. |
| `scripts/create-spa-fallback.mjs` | Cria `404.html` para preservar o acesso direto à página de serviços. |

> O site é estático: não requer banco de dados, API, servidor Node em produção ou chaves de ambiente para funcionar no GitHub Pages.

## Publicação no repositório público

Depois de extrair o ZIP, abra um terminal dentro da pasta do projeto e execute os comandos abaixo. O exemplo considera o repositório `suporte-dash/karlla-keyteler-advogadas`.

```bash
git init
git add .
git commit -m "Publica site institucional no GitHub Pages"
git branch -M main
git remote add origin https://github.com/suporte-dash/karlla-keyteler-advogadas.git
git push -u origin main
```

No GitHub, abra **Settings → Pages** e, no campo **Source**, selecione **GitHub Actions**. O workflow incluído será executado a cada envio para a branch `main`; ele instala as dependências, executa a validação de tipos e os testes, gera a pasta `dist` e publica essa versão no GitHub Pages. O endereço final normalmente seguirá o formato `https://suporte-dash.github.io/karlla-keyteler-advogadas/`. [1] [2]

| Comando | Uso local |
|---|---|
| `pnpm install` | Instala as dependências do projeto. |
| `pnpm dev` | Abre o ambiente de desenvolvimento local. |
| `pnpm check` | Verifica erros de TypeScript. |
| `pnpm test` | Executa os testes de conteúdo existentes. |
| `pnpm pages:build` | Gera o site para GitHub Pages na pasta `dist/`. |
| `pnpm preview` | Permite visualizar localmente a pasta `dist/`. |

## Observações de implantação

A automação calcula automaticamente o caminho-base a partir do nome do repositório. Isso é necessário porque um projeto hospedado em `https://<usuário>.github.io/<repositório>/` não fica na raiz do domínio. [2] A rota `/servicos-previdenciarios-salinopolis` também possui fallback estático, de modo que a página pode ser aberta diretamente após a publicação.

Caso o repositório seja renomeado, não é necessário alterar o código: o workflow utiliza o nome do repositório que acionou a publicação. Se, em algum momento, o site for movido para um domínio próprio ou para um repositório especial chamado `<usuário>.github.io`, ajuste `VITE_BASE_PATH` no workflow para `/`.

## Referências

[1]: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages "GitHub Docs — Using custom workflows with GitHub Pages"
[2]: https://vite.dev/guide/static-deploy "Vite — Deploying a Static Site"
