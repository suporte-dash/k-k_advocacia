# Validação da marca d’água — pasted_content_6

## Implementação

As seções `.proof-section` e `.contact-section` receberam o mesmo glifo SVG inline linear já usado em `.commitments-section`, com `opacity='0.04'`, traço dourado `#A37E4B`, sem texto e sem novo arquivo de imagem. A seção `.quote-section` permaneceu sem alteração.

## Inspeção computada no navegador

Na viewport desktop usada pelo navegador, os estilos computados confirmaram:

| Seção | background-position | background-size | background-repeat |
|---|---|---:|---|
| `.proof-section` | `calc(100% - 102.4px) 64px` | `281.6px` | `no-repeat` |
| `.contact-section` | `calc(100% - 102.4px) calc(100% - 100px)` | `281.6px` | `no-repeat` |
| `.commitments-section` | preservado | `358.4px` | `no-repeat` |
| `.quote-section` | `none` | `auto` | `repeat` |

A opacidade computada das seções continua `1`; a discrição visual está contida no próprio SVG em `0.04`, como solicitado. A textura da prova está no canto superior direito, oposto ao marcador e ao texto principal; a textura do atendimento está no canto inferior direito, fora do copy principal e do início do painel de localização.

## Verificações automatizadas

- TypeScript: aprovado.
- Vitest: 3 arquivos e 7 testes aprovados.
- Build GitHub Pages: aprovado.
- `git diff --check`: aprovado.

## Observação

A validação mobile deve confirmar a escala mínima responsiva de `170px` e o afastamento lateral/inferior de pelo menos `24px`/`28px`, sem sobreposição dos números, formulário ou CTA.

Data: 22 de agosto de 2026.
