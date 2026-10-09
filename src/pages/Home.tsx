/**
 * Design reminder — Vinho Editorial.
 * Use editorial contrast, asymmetry, wine/ivory/graphite, quiet gold rules and direct human language.
 * Avoid invented legal claims, generic stock imagery and decorative effects that dilute the brand.
 */
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SectionMarker from "@/components/site/SectionMarker";
import SiteButton from "@/components/site/SiteButton";
import { ASSET_BASE, GOOGLE_MAPS_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/components/site/site-config";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Baby,
  Anchor,
  Clock,
  ShieldAlert,
  HeartPulse,
  Scale,
  Search,
  X,
  HeartHandshake,
  Users,
} from "lucide-react";
import { internalHref } from "@/lib/site-path";
import BenefitScreener from "@/components/site/BenefitScreener";
import ContactForm from "@/components/site/ContactForm";
import InstagramShowcase from "@/components/site/InstagramShowcase";
import BackToTop from "@/components/site/BackToTop";

const TEAM_PHOTO = `${ASSET_BASE}foto-oficial-advogadas.webp`;
const HERO_SLIDES = [
  {
    id: "karlla",
    image: `${ASSET_BASE}karlla-pinheiro-hero.webp`,
    fallback: `${ASSET_BASE}karlla-pinheiro-hero.jpg`,
    alt: "Retrato institucional da Dra. Karlla Pinheiro, em composição vinho e dourado.",
    caption: "Dra. Karlla Pinheiro",
  },
  {
    id: "keyteler",
    image: `${ASSET_BASE}keyteler-leite-hero.webp`,
    fallback: `${ASSET_BASE}keyteler-leite-hero.jpg`,
    alt: "Retrato institucional da Dra. Keyteler Leite, em composição vinho e dourado.",
    caption: "Dra. Keyteler Leite",
  },
] as const;

const commitments = [
  {
    number: "01",
    title: "Escuta atenta",
    description: "Cada conversa começa pela compreensão do histórico, dos documentos e das necessidades de quem nos procura.",
  },
  {
    number: "02",
    title: "Análise individual",
    description: "A orientação considera os fatos apresentados, as regras vigentes e o contexto específico de cada situação.",
  },
  {
    number: "03",
    title: "Comunicação clara",
    description: "Explicamos possibilidades e próximos passos com linguagem acessível, responsabilidade e transparência.",
  },
  {
    number: "04",
    title: "Atuação responsável",
    description: "O trabalho é conduzido com organização, respeito e compromisso em cada etapa do atendimento jurídico.",
  },
];

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#advogadas", label: "Advogadas" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#atendimento", label: "Contato" },
];

const FAQ_CATEGORIES = [
  { id: "todos", label: "Todas as dúvidas" },
  { id: "aposentadoria", label: "Aposentadorias" },
  { id: "maternidade", label: "Salário-maternidade" },
  { id: "defeso", label: "Seguro-defeso" },
  { id: "atendimento", label: "Atendimento & Documentos" },
];

const faqItems = [
  {
    category: "aposentadoria",
    question: "Como saber qual tipo de aposentadoria ou benefício é o mais adequado para o meu caso?",
    answer: "A definição do benefício ideal exige uma análise individual do seu histórico de trabalho, das contribuições realizadas ao longo da vida e das regras vigentes. O escritório realiza essa triagem inicial para orientar com clareza sobre as possibilidades jurídicas cabíveis."
  },
  {
    category: "maternidade",
    question: "O que é preciso para solicitar o salário-maternidade?",
    answer: "O salário-maternidade é devido à pessoa que se afasta da atividade por motivo de nascimento de filho, aborto não criminoso, adoção ou guarda judicial para fins de adoção. A análise verifica os requisitos de qualidade de segurada ou segurado no período do evento."
  },
  {
    category: "defeso",
    question: "Quem tem direito ao seguro-defeso?",
    answer: "O seguro-defeso é destinado ao pescador artesanal que exerce a atividade de forma exclusiva e contínua, durante o período de defeso (paralisação da pesca para preservação das espécies). É necessária a comprovação documental do exercício da profissão e do registro ativo."
  },
  {
    category: "atendimento",
    question: "Quais documentos são importantes para a análise de aposentadorias e pensões?",
    answer: "Os documentos fundamentais incluem carteira de trabalho (CTPS), carnês de contribuição (GPS), extrato do CNIS (Cadastro Nacional de Informações Sociais), documentos pessoais e certidões de estado civil. Documentos específicos podem ser solicitados conforme o tipo de atividade exercida."
  },
  {
    category: "atendimento",
    question: "Como funciona o atendimento e qual é o primeiro passo para falar com o escritório?",
    answer: "O primeiro passo é entrar em contato por WhatsApp ou telefone para relatar brevemente a sua situação. A partir daí, o escritório orienta sobre a documentação necessária e os próximos passos para a condução responsável do seu caso."
  }
];

const practiceCardsData = [
  {
    title: "Salário-maternidade",
    icon: Baby,
    badge: "Maternidade & Adoção",
    description: "Amparo para seguradas urbanas, rurais, pescadoras artesanais e MEI em casos de nascimento, guarda judicial ou adoção.",
    whatsappText: "Olá! Gostaria de uma orientação jurídica sobre Salário-maternidade.",
  },
  {
    title: "Seguro defeso",
    icon: Anchor,
    badge: "Pesca Artesanal",
    description: "Garantia de renda ao pescador(a) artesanal profissional durante a paralisação da pesca na região e litoral paraense.",
    whatsappText: "Olá! Gostaria de orientações sobre Seguro-defeso para pescador artesanal.",
  },
  {
    title: "Aposentadorias",
    icon: Clock,
    badge: "Urbana, Rural & Especial",
    description: "Planejamento e análise de tempo de serviço, regras de transição, insalubridade e atividade rural com checagem de CNIS.",
    whatsappText: "Olá! Gostaria de uma análise para a minha Aposentadoria.",
  },
  {
    title: "Pensão por morte",
    icon: ShieldAlert,
    badge: "Proteção Familiar",
    description: "Orientação e suporte a viúvos(as), filhos e dependentes econômicos com foco em comprovação documental.",
    whatsappText: "Olá! Preciso de orientação sobre Pensão por morte.",
  },
  {
    title: "Auxílio-doença",
    icon: HeartPulse,
    badge: "Incapacidade",
    description: "Suporte em benefícios por incapacidade temporária ou permanente, auxílio-acidente e laudos para perícias.",
    whatsappText: "Olá! Gostaria de consultar sobre Auxílio por incapacidade/doença.",
  },
  {
    title: "Outros serviços jurídicos",
    icon: Scale,
    badge: "BPC / LOAS & Revisões",
    description: "Benefício assistencial para idosos ou PcD de baixa renda, além de recursos administrativos e revisão de cálculos.",
    whatsappText: "Olá! Gostaria de orientações sobre BPC/LOAS ou revisão de benefício previdenciário.",
  },
];

function scrollToTop(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Home() {
  const [heroCarouselApi, setHeroCarouselApi] = useState<CarouselApi>();
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [heroAutoplayPaused, setHeroAutoplayPaused] = useState(false);
  const [faqSearch, setFaqSearch] = useState("");
  const [faqCategory, setFaqCategory] = useState("todos");

  const filteredFaqItems = faqItems.filter((item) => {
    const matchesCategory = faqCategory === "todos" || item.category === faqCategory;
    const matchesSearch =
      faqSearch.trim() === "" ||
      item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (!heroCarouselApi) return;

    const handleSelect = () => setActiveHeroSlide(heroCarouselApi.selectedScrollSnap());
    handleSelect();
    heroCarouselApi.on("select", handleSelect);

    return () => {
      heroCarouselApi.off("select", handleSelect);
    };
  }, [heroCarouselApi]);

  useEffect(() => {
    if (!heroCarouselApi || heroAutoplayPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => heroCarouselApi.scrollNext(), 7000);
    return () => window.clearInterval(timer);
  }, [heroCarouselApi, heroAutoplayPaused]);

  useEffect(() => {
    const revealNodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Header items={navItems} brandHref="#inicio" onBrandClick={scrollToTop} />

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-texture" aria-hidden="true" />
          <div className="site-container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Advocacia previdenciária · SALINÓPOLIS - PA</p>
              <h1>
                Direitos bem orientados começam com <em>escuta.</em>
              </h1>
              <p className="hero-lead hero-lead-national">
                <span>Orientação jurídica previdenciária com atendimento próximo, linguagem clara e análise cuidadosa de cada história. Atendimento em Salinópolis e atuação nacional.</span>
              </p>
              <div className="hero-actions">
                <SiteButton href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="primary">
                  <MessageCircle size={17} aria-hidden="true" /> Falar com as advogadas
                </SiteButton>
                <a className="text-link text-link-light" href="#sobre">
                  Conhecer a sociedade <ArrowDownRight size={16} aria-hidden="true" />
                </a>
                <p className="hero-contact-note">
                  <Phone size={14} aria-hidden="true" /> WhatsApp e telefone: {PHONE_DISPLAY}
                </p>
              </div>
            </div>

            <div className="hero-visual" data-reveal style={{ transitionDelay: "140ms" }}>
              <div
                className="hero-image-wrap"
                onMouseEnter={() => setHeroAutoplayPaused(true)}
                onMouseLeave={() => setHeroAutoplayPaused(false)}
                onFocusCapture={() => setHeroAutoplayPaused(true)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setHeroAutoplayPaused(false);
                  }
                }}
              >
                <Carousel
                  className="hero-carousel"
                  opts={{ loop: true }}
                  setApi={setHeroCarouselApi}
                  aria-label="Retratos das advogadas"
                >
                  <CarouselContent className="hero-carousel-track">
                    {HERO_SLIDES.map((slide) => (
                      <CarouselItem className="hero-carousel-item" key={slide.id}>
                        <picture>
                          <source srcSet={slide.image} type="image/webp" />
                          <img className="hero-image" src={slide.fallback} alt={slide.alt} width="1122" height="1402" decoding="async" />
                        </picture>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hero-carousel-controls" aria-label="Indicadores de slides">
                    <div className="hero-carousel-dots">
                      {HERO_SLIDES.map((slide, index) => (
                        <button
                          key={slide.id}
                          type="button"
                          className={`hero-carousel-dot ${activeHeroSlide === index ? "is-active" : ""}`}
                          aria-label={`Mostrar foto ${index + 1}: ${slide.caption}`}
                          aria-current={activeHeroSlide === index ? "true" : undefined}
                          onClick={() => heroCarouselApi?.scrollTo(index)}
                        />
                      ))}
                    </div>
                  </div>
                </Carousel>
              </div>
              <div className="hero-image-caption" aria-live="polite">
                <span>{String(activeHeroSlide + 1).padStart(2, "0")}</span>
                <span>Retrato institucional · {HERO_SLIDES[activeHeroSlide]?.caption ?? HERO_SLIDES[0].caption}</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom-note site-container" data-reveal style={{ transitionDelay: "260ms" }}>
            <span>Atendimento próximo</span>
            <span>Salinópolis / PA</span>
            <span>Atuação nacional</span>
          </div>
        </section>


          <section
            className="section section-ivory proof-section"
            aria-labelledby="proof-title"
          >
          <div className="site-container">
            <div className="proof-header" data-reveal>
              <SectionMarker number="01" label="Presença em números" />
              <p className="section-kicker">Uma orientação que começa pela escuta</p>
              <h2 id="proof-title">Clareza para o <em>próximo passo</em>.</h2>
            </div>
            <div className="proof-stats" data-reveal>
              <article>
                <strong>02</strong>
                <span>advogadas à frente da sociedade</span>
              </article>
              <article>
                <strong>1:1</strong>
                <span>análise individual de cada história</span>
              </article>
              <article>
                <strong>PA + Brasil</strong>
                <span>atendimento em Salinópolis e atuação nacional</span>
              </article>
            </div>
          </div>
        </section>

          <section id="sobre" className="section section-ivory about-section">
          <div className="site-container">
            <div className="about-header" data-reveal>
              <SectionMarker number="02" label="Sobre" />
              <p className="section-kicker">Uma nova casa para uma advocacia próxima</p>
              <h2>Presença para <em>ouvir</em>. Clareza para <em>orientar</em>.</h2>
              <div className="about-columns">
                <p>
                  A Karlla Pinheiro e Keyteler Leite Sociedade de Advogadas atua na orientação de
                  questões previdenciárias com atendimento próximo, linguagem acessível e análise
                  individual de cada caso.
                </p>
                <p>
                  O trabalho começa pela escuta atenta e pela compreensão da história de cada pessoa,
                  para que as possibilidades jurídicas sejam apresentadas com transparência e segurança.
                </p>
              </div>
              <a className="text-link" href="#atendimento">
                Encontrar a sociedade <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="values-row" data-reveal>
              <div className="value-item">
                <div className="value-header">
                  <span className="value-index">01</span>
                  <Scale size={16} className="value-icon" aria-hidden="true" />
                </div>
                <strong>Responsabilidade</strong>
                <p className="value-desc">Condução técnica, ética e minuciosa em cada pedido administrativo e judicial.</p>
              </div>
              <div className="value-item">
                <div className="value-header">
                  <span className="value-index">02</span>
                  <HeartHandshake size={16} className="value-icon" aria-hidden="true" />
                </div>
                <strong>Cuidado</strong>
                <p className="value-desc">Atenção humana a cada detalhe documental da história de cada segurado.</p>
              </div>
              <div className="value-item">
                <div className="value-header">
                  <span className="value-index">03</span>
                  <Check size={16} className="value-icon" aria-hidden="true" />
                </div>
                <strong>Compromisso</strong>
                <p className="value-desc">Atuação presente, comunicação transparente e respeito em cada etapa do atendimento.</p>
              </div>
              <div className="value-item">
                <div className="value-header">
                  <span className="value-index">04</span>
                  <Users size={16} className="value-icon" aria-hidden="true" />
                </div>
                <strong>Proximidade</strong>
                <p className="value-desc">Diálogo direto com as advogadas, escuta acolhedora e linguagem clara sem barreiras.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="site-container quote-inner" data-reveal>
            <span className="quote-mark">“</span>
            <blockquote>
              Atendimento próximo, humano e personalizado para compreender sua história e buscar os
              melhores caminhos para o seu direito.
            </blockquote>
            <span className="quote-source">— Posicionamento público da sociedade</span>
          </div>
        </section>

        <section id="atuacao" className="section section-paper practice-section-light">
          <div className="site-container">
            <div className="practice-header" data-reveal>
              <SectionMarker number="03" label="Área de atuação" />
              <p className="section-kicker">Áreas atendidas pelo escritório</p>
              <h2>O direito previdenciário pede atenção aos <em>detalhes da sua história</em>.</h2>
              <p className="practice-intro-note">
                A atuação é definida a partir da análise individual de cada situação, considerando documentos, histórico e o contexto de cada beneficiário.
              </p>
              <div className="practice-feature">
                <span className="practice-number">01</span>
                <div>
                  <h3>Advocacia previdenciária</h3>
                  <p>
                    O escritório presta orientação e suporte em benefícios e direitos previdenciários. Caso você não saiba qual medida se aplica ao seu caso, converse com o escritório para uma orientação inicial.
                  </p>
                  <div className="practice-feature-links">
                    <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                      Conversar sobre o meu caso <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <a className="text-link practice-route-link" href={internalHref("/servicos-previdenciarios-salinopolis")}>
                      Conhecer os serviços previdenciários <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="practice-cards-grid" aria-label="Principais direitos e benefícios atendidos">
              {practiceCardsData.map((card) => {
                const Icon = card.icon;
                const waUrl = `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${encodeURIComponent(card.whatsappText)}`;
                return (
                  <article className="practice-card-item" key={card.title}>
                    <div className="practice-card-top">
                      <span className="practice-card-icon">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="practice-card-tag">{card.badge}</span>
                    </div>
                    <h3 className="practice-card-title">{card.title}</h3>
                    <p className="practice-card-desc">{card.description}</p>
                    <a
                      className="practice-card-action"
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      title={`Conversar sobre ${card.title} no WhatsApp`}
                    >
                      Orientação sobre este benefício <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>

            <div className="practice-screener-divider" data-reveal>
              <div className="practice-divider-line" />
              <div className="practice-divider-badge">
                <span>Diagnóstico guiado</span>
                <small>Dúvida sobre qual é o seu caso?</small>
              </div>
              <div className="practice-divider-line" />
            </div>

            <BenefitScreener />
          </div>
        </section>

        <section id="advogadas" className="section section-paper team-section">
          <div className="site-container team-grid">
            <div className="team-intro" data-reveal>
              <SectionMarker light number="04" label="Advogadas" />
              <p className="section-kicker">Duas histórias, um propósito em comum</p>
              <h2>Uma sociedade feita de <em>presença</em>.</h2>
              <p className="team-description">
                Karlla Pinheiro e Keyteler Leite são as duas advogadas à frente da sociedade. O
                trabalho começa com uma conversa responsável e atenta à pessoa que chega.
              </p>
              <a className="button button-outline-team" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <Instagram size={16} aria-hidden="true" /> Ver no Instagram
              </a>
            </div>

            <div className="team-portrait" data-reveal>
              <img src={TEAM_PHOTO} alt="Karlla Pinheiro e Keyteler Leite em retrato institucional" width="1122" height="1402" loading="lazy" decoding="async" />
            </div>

            <div className="team-names" data-reveal>
              <div className="team-name-row">
                <span>01</span>
                <div className="team-name-copy">
                  <strong>Karlla Pinheiro</strong>
                  <small>OAB/PA 40.209</small>
                  <p className="team-bio-text">Advogada com atuação focada em Direito Previdenciário, planejamento contributivo e condução técnica de benefícios do INSS.</p>
                </div>
              </div>
              <div className="team-name-row">
                <span>02</span>
                <div className="team-name-copy">
                  <strong>Keyteler Leite</strong>
                  <small>OAB/PA 40.642</small>
                  <p className="team-bio-text">Advogada com dedicação especial ao amparo de segurados do INSS, trabalhadores rurais e pesca artesanal.</p>
                </div>
              </div>
              <p>Sociedade de Advogadas</p>
            </div>
          </div>
        </section>

        <section id="compromissos" className="section section-wine commitments-section">
          <div className="site-container commitments-header" data-reveal>
            <SectionMarker number="05" label="Compromissos" />
            <div>
              <p className="section-kicker">Compromissos institucionais · Método de atendimento</p>
              <h2>Cuidado em cada etapa da <em>orientação</em>.</h2>
              <p>
                Uma atuação que começa na escuta e segue com análise individual, comunicação clara e responsabilidade.
              </p>
            </div>
          </div>
          <div className="site-container commitments-grid">
            {commitments.map((commitment, index) => (
              <article className="commitment-card" key={commitment.number} data-reveal style={{ transitionDelay: `${index * 55}ms` }}>
                <div className="commitment-card-top">
                  <span className="commitment-number">{commitment.number}</span>
                  <span className="commitment-step-tag">Etapa {commitment.number}</span>
                </div>
                <h3>{commitment.title}</h3>
                <p>{commitment.description}</p>
                <span className="commitment-mark"><Check size={13} aria-hidden="true" /></span>
              </article>
            ))}
          </div>
        </section>

          <section id="faq" className="section section-paper faq-section">
          <div className="site-container">
            <SectionMarker light number="06" label="Perguntas frequentes" />
            <div className="faq-header" data-reveal>
              <p className="section-kicker">Esclarecimentos essenciais</p>
              <h2>Perguntas frequentes sobre <em>direito previdenciário</em></h2>
              <p className="faq-subtitle">
                Respostas orientativas para ajudar você a compreender os conceitos fundamentais antes da orientação jurídica individual.
              </p>
            </div>

            <div className="faq-filter-wrap" data-reveal>
              <div className="faq-search-box">
                <Search size={18} className="faq-search-icon" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Pesquise por palavra-chave... (ex: aposentadoria, documentos, defeso)"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="faq-search-input"
                  aria-label="Pesquisar nas perguntas frequentes"
                />
                {faqSearch && (
                  <button
                    type="button"
                    className="faq-search-clear"
                    onClick={() => setFaqSearch("")}
                    aria-label="Limpar pesquisa"
                  >
                    <X size={16} aria-hidden="true" />
                  </button>
                )}
              </div>

              <div className="faq-category-pills" role="tablist" aria-label="Filtrar por categoria">
                {FAQ_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={faqCategory === cat.id}
                    className={`faq-pill-btn ${faqCategory === cat.id ? "is-active" : ""}`}
                    onClick={() => setFaqCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="faq-accordion-wrap" data-reveal>
              {filteredFaqItems.length > 0 ? (
                <Accordion type="single" collapsible className="faq-accordion">
                  {filteredFaqItems.map((item, index) => (
                    <AccordionItem key={item.question} value={`item-${index}`} className="faq-item">
                      <AccordionTrigger className="faq-question">
                        <span>{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="faq-answer">
                        <p>{item.answer}</p>
                        <a className="faq-whatsapp-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                          <MessageCircle size={14} aria-hidden="true" /> Falar sobre a minha situação
                        </a>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="faq-no-results">
                  <p>Nenhuma dúvida encontrada com o termo "{faqSearch}".</p>
                  <a
                    className="button button-wine"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={16} aria-hidden="true" /> Perguntar diretamente no WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        <InstagramShowcase />

        <section id="atendimento" className="section section-paper contact-section">
          <div className="site-container">
            <div className="contact-header" data-reveal>
              <SectionMarker number="07" label="Atendimento" />
              <p className="section-kicker">A porta está aberta</p>
              <h2>Sua história merece uma <em>orientação clara</em>.</h2>
              <p className="contact-lead">
                Atendimento inicial pelo WhatsApp com análise responsável do seu caso, ou envie sua mensagem pelo formulário ao lado. Atendimento presencial em Salinópolis e digital em todo o Brasil.
              </p>
            </div>

            <div className="contact-main-grid">
              <div className="contact-info-col" data-reveal>
                <div className="contact-details-grid">
                  <div className="contact-detail-item">
                    <Clock size={18} className="contact-detail-icon" aria-hidden="true" />
                    <div>
                      <strong>Horário de atendimento</strong>
                      <span>Segunda a sexta-feira, das 08:00 às 18:00</span>
                    </div>
                  </div>
                  <div className="contact-detail-item">
                    <Phone size={18} className="contact-detail-icon" aria-hidden="true" />
                    <div>
                      <strong>WhatsApp e telefone</strong>
                      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="contact-phone-link">
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="location-panel">
                  <div className="map-frame">
                    <a className="map-fallback" href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" aria-label="Abrir a localização da sociedade no Google Maps">
                      <span className="map-grid-lines" aria-hidden="true" />
                      <span className="map-pin"><MapPin size={19} aria-hidden="true" /></span>
                      <span className="map-fallback-copy">
                        <strong>Bom Jesus</strong>
                        <span>Salinópolis — PA</span>
                      </span>
                      <span className="map-open-label">Abrir no Google Maps <ArrowUpRight size={14} aria-hidden="true" /></span>
                    </a>
                  </div>
                  <div className="address-row">
                    <MapPin size={18} aria-hidden="true" />
                    <div>
                      <strong>Onde estamos</strong>
                      <address>Avenida Modesto da Encarnação Rodrigues, 756 — Bom Jesus<br />Salinópolis — PA, 68721-000</address>
                      <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="text-link">
                        Abrir no Google Maps <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-col" data-reveal style={{ transitionDelay: "110ms" }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com as advogadas pelo WhatsApp"
        title="Falar com as advogadas pelo WhatsApp"
      >
        <span className="whatsapp-float-pulse" aria-hidden="true" />
        <MessageCircle size={21} strokeWidth={2.2} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>

      <BackToTop />

      <Footer homeHref="#inicio" onHomeClick={scrollToTop} />
    </div>
  );
}
