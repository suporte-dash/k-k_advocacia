import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("./InstagramShowcase.tsx", import.meta.url), "utf8");

describe("InstagramShowcase com Reels Reais", () => {
  it("contém os 4 reels reais das advogadas", () => {
    expect(source).toContain("reel-perguntas-previdencia.mp4");
    expect(source).toContain("reel-bpc-loas-idoso.mp4");
    expect(source).toContain("reel-salario-maternidade.mp4");
    expect(source).toContain("reel-pescador-seguro-defeso.mp4");
  });

  it("possui controles interativos de reprodução e áudio", () => {
    expect(source).toContain("reel-video-element");
    expect(source).toContain("reel-sound-btn");
    expect(source).toContain("reel-play-overlay");
    expect(source).toContain("reel-progress-track");
  });

  it("mantém links de conversão contextual para o WhatsApp e perfil oficial", () => {
    expect(source).toContain("reel-whatsapp-link");
    expect(source).toContain("reel-ig-link");
    expect(source).toContain("@karllaekeyteleradvogadas");
  });

  it("isola os cliques dos botões de ação para não disparar o play/pause do card", () => {
    expect(source).toContain('target.closest(".reel-actions")');
    expect(source).toContain('className="reel-actions" onClick={(e) => e.stopPropagation()}');
  });
});
