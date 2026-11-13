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
    expect(homeSource).toContain("WhatsApp e telefone");
    expect(homeSource).not.toContain("hero-contact-note");
    expect(homeSource).not.toContain('label="Presença em números"');
    expect(homeSource).toContain('<SectionMarker number="01" label="Quem somos" />');
    expect(homeSource).toContain('<SectionMarker number="02" label="Área de atuação" />');
    expect(homeSource).toContain('<SectionMarker light number="03" label="Advogadas" />');
    expect(homeSource).toContain('<SectionMarker light number="04" label="Perguntas frequentes" />');
    expect(homeSource).toContain('<section id="faq" className="section section-wine faq-section">');
    expect(homeSource).toContain('<SectionMarker number="05" label="Atendimento" />');
    expect(homeSource).not.toContain('SectionMarker number="06"');
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
    expect(homeSource).toContain("Orientação jurídica especializada, linguagem acessível e rigor técnico na conquista e proteção do seu benefício perante o INSS e a Justiça Federal");
    expect(homeSource).toContain("Atenção humana e minuciosa a cada detalhe do histórico contributivo e dos documentos de cada segurado");
    expect(homeSource).toContain("Consultar meu direito neste benefício");
    expect(homeSource).toContain("Uma advocacia construída para humanizar o direito previdenciário");
    expect(homeSource).toContain('title: "BPC / LOAS"');
    expect(homeSource).not.toContain("Outros serviços jurídicos");
    expect(homeSource).toContain('<p className="eyebrow">Advocacia Previdenciária · Salinópolis &amp; Brasil</p>');
    expect(homeSource).not.toContain("Advocacia previdenciária · SALINÓPOLIS - PA");
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

  it("apresenta a Seção 04 de Advogadas com selos de OAB, tags de atuação e foco editorial nobre", () => {
    expect(homeSource).toContain("team-portrait-column");
    expect(homeSource).toContain("team-portrait-frame");
    expect(homeSource).not.toContain("team-portrait-caption");
    expect(homeSource).not.toContain("Retrato Institucional das Sócias");
    expect(homeSource).not.toContain("team-portrait-badge");
    expect(homeSource).toContain("team-profile-card");
    expect(homeSource).toContain("OAB/PA 40.209");
    expect(homeSource).toContain("OAB/PA 40.642");
    expect(homeSource).toContain("Estratégia &amp; CNIS");
    expect(homeSource).toContain("Rural &amp; Pesca Artesanal");
  });

  it("apresenta a Seção 05 de FAQ com numeração editorial, 6 categorias e CTAs contextuais", () => {
    expect(homeSource).toContain("faq-question-num");
    expect(homeSource).toContain("faq-question-text");
    expect(homeSource).toContain("faq-answer-text");
    expect(homeSource).toContain("faq-no-results-cta");
    expect(homeSource).toContain('label: "Aposentadorias"');
    expect(homeSource).toContain("Seguro-Defeso & Rural");
    expect(homeSource).toContain("Incapacidade & BPC");
    expect(homeSource).toContain("Negativas & Atendimento");
    expect(homeSource).toContain("Tirar dúvida sobre este tema");
  });

  it("apresenta recursos de UX/UI avançados: foco em Google Maps, balão flutuante e destaque regional", () => {
    expect(homeSource).not.toContain("hero-presence-badge");
    expect(homeSource).not.toContain("hero-presence-dot");
    expect(homeSource).toContain("Pesca Artesanal");
    expect(homeSource).not.toContain("waze-action-link");
    expect(homeSource).not.toContain("waze.com/ul");
    expect(homeSource).toContain("map-action-link");
    expect(homeSource).toContain("whatsapp-float-greeting");
    expect(homeSource).toContain("Dúvidas sobre o seu benefício?");
    expect(homeSource).toContain("faq-search-highlight");
    expect(homeSource).toContain("hero-trust-item");
    expect(homeSource).toContain("Atendimento Dedicado");
    expect(homeSource).toContain("Atuação Previdenciária Nacional");
  });

  it("apresenta assinatura tipográfica minimalista com micro-linha dourada no hero", () => {
    expect(homeSource).toContain("hero-signature-wrap");
    expect(homeSource).toContain("hero-signature-name");
    expect(homeSource).toContain("hero-signature-line");
    expect(homeSource).not.toContain("hero-editorial-caption");
    expect(homeSource).not.toContain("hero-slide-glass");
    expect(homeSource).not.toContain("hero-image-caption");
  });
});



