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

  it("descreve SEO local sem avaliações, notas ou promessas de resultado", () => {
    expect(pageSource).toContain('"@type": "LegalService"');
    expect(pageSource).toContain("serviceType");
    expect(pageSource).not.toContain("aggregateRating");
    expect(pageSource).not.toContain("garantia");
  });
});
