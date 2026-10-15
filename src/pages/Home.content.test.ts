import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const homeSource = readFileSync(new URL("./Home.tsx", import.meta.url), "utf8");

describe("conteúdo institucional da página inicial", () => {
  it("mantém foco institucional e ético sem reutilizar avaliações públicas", () => {
    expect(homeSource).not.toContain("Avaliações públicas no Google");
    expect(homeSource).not.toContain("11 avaliações");
  });

  it("mantém caminhos de contato e a numeração editorial completa das seções", () => {
    expect(homeSource).toContain("Atendimento inicial pelo WhatsApp");
    expect(homeSource).toContain("WhatsApp e telefone:");
    expect(homeSource).toContain('<SectionMarker number="01" label="Presença em números" />');
    expect(homeSource).toContain('<SectionMarker number="02" label="Quem somos" />');
    expect(homeSource).toContain('<SectionMarker number="03" label="Área de atuação" />');
    expect(homeSource).toContain('<SectionMarker light number="04" label="Advogadas" />');
    expect(homeSource).toContain('<SectionMarker number="05" label="Perguntas frequentes" />');
    expect(homeSource).toContain('<section id="faq" className="section section-wine faq-section">');
    expect(homeSource).toContain('<SectionMarker number="06" label="Atendimento" />');
    expect(homeSource).not.toContain('SectionMarker number="00"');
    expect(homeSource).not.toContain('label="Compromissos"');
  });

  it("unifica a experiência de serviços diretamente na página sem links externos redundantes", () => {
    expect(homeSource).not.toContain("Conhecer os serviços previdenciários");
    expect(homeSource).not.toContain('internalHref("/servicos-previdenciarios-salinopolis")');
  });

  it("inclui carrossel com controles ergonômicos e dots para os serviços no mobile", () => {
    expect(homeSource).toContain('practice-cards-grid practice-carousel-track');
    expect(homeSource).toContain('practice-carousel-controls');
    expect(homeSource).toContain('practice-carousel-arrow');
    expect(homeSource).toContain('practice-carousel-dots');
  });

  it("assegura a escrita refinada de alta autoridade sem ecos ou redundâncias", () => {
    expect(homeSource).toContain("Orientação jurídica especializada, linguagem acessível e rigor técnico para proteger o seu benefício");
    expect(homeSource).toContain("Atenção humana e minuciosa a cada detalhe do histórico contributivo e dos documentos de cada segurado");
    expect(homeSource).toContain("Consultar meu direito neste benefício");
    expect(homeSource).toContain("Uma advocacia construída para <em>humanizar</em> o direito previdenciário");
  });

  it("integra o drawer de detalhes e requisitos nos cards de atuação diretamente na página", () => {
    expect(homeSource).toContain("ServiceDetailDrawer");
    expect(homeSource).toContain("ALL_DETAILED_SERVICES");
    expect(homeSource).toContain("practice-card-detail-trigger");
    expect(homeSource).toContain("Ver detalhes e requisitos");
    expect(homeSource).toContain("practice-card-footer-actions");
  });

  it("apresenta os 3 cards de autoridade em 'Presença em números' com rigor documental de 100%", () => {
    expect(homeSource).toContain("proof-card");
    expect(homeSource).toContain("proof-card-tag");
    expect(homeSource).toContain("Sócias Titulares");
    expect(homeSource).toContain("Rigor Documental");
    expect(homeSource).toContain("100%");
    expect(homeSource).toContain("Presença & Alcance");
    expect(homeSource).not.toContain(">1:1<");
  });

  it("apresenta a Seção 04 de Advogadas com selos de OAB, tags de atuação e CTA de atendimento direto", () => {
    expect(homeSource).toContain("team-portrait-column");
    expect(homeSource).toContain("team-portrait-frame");
    expect(homeSource).toContain("Retrato Institucional das Sócias");
    expect(homeSource).toContain("Sede Salinópolis / PA");
    expect(homeSource).not.toContain("team-portrait-badge");
    expect(homeSource).toContain("team-profile-card");
    expect(homeSource).toContain("OAB/PA 40.209");
    expect(homeSource).toContain("OAB/PA 40.642");
    expect(homeSource).toContain("Estratégia &amp; CNIS");
    expect(homeSource).toContain("Rural &amp; Pesca Artesanal");
    expect(homeSource).toContain("team-whatsapp-cta");
    expect(homeSource).toContain("Falar diretamente com as advogadas");
  });
});



