import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const pageSource = readFileSync(new URL("./ServicosPrevidenciarios.tsx", import.meta.url), "utf8");

describe("página local de serviços previdenciários", () => {
  it("inclui serviços, localização e contatos confirmados", () => {
    expect(pageSource).toContain("Serviços previdenciários em Salinópolis, PA");
    expect(pageSource).toContain("Avenida Modesto da Encarnação Rodrigues, 756");
    expect(pageSource).toContain("Salário-maternidade");
    expect(pageSource).toContain("Seguro-defeso");
    expect(pageSource).toContain("+559191620280");
  });

  it("inclui o botão flutuante de WhatsApp com acessibilidade", () => {
    expect(pageSource).toContain('className="whatsapp-float"');
    expect(pageSource).toContain('aria-label="Falar com as advogadas pelo WhatsApp"');
    expect(pageSource).toContain('title="Falar com as advogadas pelo WhatsApp"');
  });

  it("descreve SEO local sem avaliações, notas ou promessas de resultado", () => {
    expect(pageSource).toContain('"@type": "LegalService"');
    expect(pageSource).toContain("serviceType");
    expect(pageSource).not.toContain("aggregateRating");
    expect(pageSource).not.toContain("garantia");
  });
});
