import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const homeSource = readFileSync(new URL("./Home.tsx", import.meta.url), "utf8");

describe("conteúdo institucional da página inicial", () => {
  it("apresenta compromissos institucionais sem reutilizar avaliações públicas", () => {
    expect(homeSource).toContain('id="compromissos"');
    expect(homeSource).toContain("Compromissos institucionais");
    expect(homeSource).toContain("Escuta atenta");
    expect(homeSource).not.toContain("Avaliações públicas no Google");
    expect(homeSource).not.toContain("11 avaliações");
  });

  it("mantém caminhos de contato claros e a numeração correta das seções finais", () => {
    expect(homeSource).toContain("Atendimento inicial pelo WhatsApp");
    expect(homeSource).toContain("WhatsApp e telefone:");
    expect(homeSource).toContain('<span>06</span>');
  });

  it("inclui um caminho interno para a página de serviços previdenciários", () => {
    expect(homeSource).toContain('internalHref("/servicos-previdenciarios-salinopolis")');
    expect(homeSource).toContain("Conhecer os serviços previdenciários");
  });
});
