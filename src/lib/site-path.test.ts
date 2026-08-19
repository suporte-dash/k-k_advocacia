import { describe, expect, it } from "vitest";
import { internalHref } from "./site-path";

describe("internalHref", () => {
  it("preserva o caminho de repositório usado pelo GitHub Pages", () => {
    expect(internalHref("/servicos-previdenciarios-salinopolis", "/karlla-keyteler-advogadas/")).toBe(
      "/karlla-keyteler-advogadas/servicos-previdenciarios-salinopolis",
    );
  });

  it("constrói links da página inicial com âncoras", () => {
    expect(internalHref("/#atendimento", "/karlla-keyteler-advogadas/")).toBe(
      "/karlla-keyteler-advogadas/#atendimento",
    );
  });
});
