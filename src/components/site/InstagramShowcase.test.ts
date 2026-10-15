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
    expect(source).toContain("reel-modal-cta-ig");
    expect(source).toContain("@karllaekeyteleradvogadas");
  });

  it("isola os cliques dos botões de ação para não disparar o play/pause do card", () => {
    expect(source).toContain('target.closest(".reel-actions")');
    expect(source).toContain('className="reel-actions" onClick={(e) => e.stopPropagation()}');
  });

  it("oferece suporte a carrossel mobile com controles acessíveis de navegação", () => {
    expect(source).toContain("reels-carousel-controls");
    expect(source).toContain("reels-carousel-track");
    expect(source).toContain("reels-carousel-arrow");
    expect(source).toContain("reels-carousel-dots");
    expect(source).toContain("reels-carousel-dot");
    expect(source).toContain('role="tablist"');
    expect(source).toContain('role="tab"');
  });

  it("oferece visualizador imersivo de reels em tela cheia com estilo Instagram Stories", () => {
    expect(source).toContain("ReelModalViewer");
    expect(source).toContain("reel-modal-backdrop");
    expect(source).toContain("reel-modal-card");
    expect(source).toContain("reel-modal-video");
    expect(source).toContain("reel-modal-progress-bar");
    expect(source).toContain("reel-modal-cta-wa");
    expect(source).toContain("reel-modal-cta-ig");
    expect(source).toContain('role="dialog"');
    expect(source).toContain('aria-modal="true"');
    expect(source).toContain("Escape");
    expect(source).toContain('reel-modal-title ${isPlaying ? "is-hidden" : ""}');
    expect(source).toContain('reel-modal-summary ${isPlaying ? "is-hidden" : ""}');
  });

  it("fecha o modal ao clicar fora do card ou pressionar Escape", () => {
    expect(source).toContain('!target.closest(".reel-modal-card")');
    expect(source).toContain("onClose()");
    expect(source).toContain("Escape");
  });
});
