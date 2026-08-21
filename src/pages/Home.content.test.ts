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

  it("mantém caminhos de contato e a numeração editorial completa das seções", () => {
    expect(homeSource).toContain("Atendimento inicial pelo WhatsApp");
    expect(homeSource).toContain("WhatsApp e telefone:");
    expect(homeSource).toContain('<SectionMarker number="01" label="Presença em números" />');
    expect(homeSource).toContain('<SectionMarker number="02" label="Sobre" />');
    expect(homeSource).toContain('<SectionMarker number="03" label="Área de atuação" />');
    expect(homeSource).toContain('<SectionMarker light number="04" label="Advogadas" />');
    expect(homeSource).toContain('<SectionMarker number="05" label="Compromissos" />');
    expect(homeSource).toContain('<SectionMarker light number="06" label="Perguntas frequentes" />');
    expect(homeSource).toContain('<SectionMarker number="07" label="Atendimento" />');
    expect(homeSource).not.toContain('SectionMarker number="00"');
  });

  it("inclui um caminho interno para a página de serviços previdenciários", () => {
    expect(homeSource).toContain('internalHref("/servicos-previdenciarios-salinopolis")');
    expect(homeSource).toContain("Conhecer os serviços previdenciários");
  });
});
