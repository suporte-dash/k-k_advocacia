/**
 * Design reminder — Vinho Editorial.
 * Use editorial contrast, asymmetry, wine/ivory/graphite, quiet gold rules and direct human language.
 * Avoid invented legal claims, generic stock imagery and decorative effects that dilute the brand.
 */
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { internalHref } from "@/lib/site-path";

const WHATSAPP_URL =
  "https://wa.me/559191620280?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20as%20advogadas.";
const PHONE_DISPLAY = "(91) 9162-0280";
const PHONE_TEL = "+559191620280";
const INSTAGRAM_URL = "https://www.instagram.com/karllaekeyteleradvogadas/";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/nYM61PbWSiUUTxLa6";
const ASSET_BASE = `${import.meta.env.BASE_URL}assets/`;
const TEAM_PHOTO = `${ASSET_BASE}foto-oficial-advogadas.jpg`;
const HERO_SLIDES = [
  {
    id: "karlla",
    image: `${ASSET_BASE}karlla-pinheiro-hero.png`,
    alt: "Retrato institucional da Dra. Karlla Pinheiro, em composição vinho e dourado.",
    caption: "Dra. Karlla Pinheiro",
  },
  {
    id: "keyteler",
    image: `${ASSET_BASE}keyteler-leite-hero.png`,
    alt: "Retrato institucional da Dra. Keyteler Leite, em composição vinho e dourado.",
    caption: "Dra. Keyteler Leite",
  },
] as const;
const TEXTURE_IMAGE = `${ASSET_BASE}abstract-archival-texture.png`;
const BRAND_LOGO = `${ASSET_BASE}logo-oficial.png`;

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
  { href: internalHref("/servicos-previdenciarios-salinopolis"), label: "Serviços" },
  { href: "#advogadas", label: "Advogadas" },
  { href: "#compromissos", label: "Compromissos" },
  { href: "#faq", label: "FAQ" },
  { href: "#atendimento", label: "Atendimento" },
];

const faqItems = [
  {
    question: "Como saber qual tipo de aposentadoria ou benefício é o mais adequado para o meu caso?",
    answer: "A definição do benefício ideal exige uma análise individual do seu histórico de trabalho, das contribuições realizadas ao longo da vida e das regras vigentes. O escritório realiza essa triagem inicial para orientar com clareza sobre as possibilidades jurídicas cabíveis."
  },
  {
    question: "O que é preciso para solicitar o salário-maternidade?",
    answer: "O salário-maternidade é devido à pessoa que se afasta da atividade por motivo de nascimento de filho, aborto não criminoso, adoção ou guarda judicial para fins de adoção. A análise verifica os requisitos de qualidade de segurada ou segurado no período do evento."
  },
  {
    question: "Quem tem direito ao seguro-defeso?",
    answer: "O seguro-defeso é destinado ao pescador artesanal que exerce a atividade de forma exclusiva e contínua, durante o período de defeso (paralisação da pesca para preservação das espécies). É necessária a comprovação documental do exercício da profissão e do registro ativo."
  },
  {
    question: "Quais documentos são importantes para a análise de aposentadorias e pensões?",
    answer: "Os documentos fundamentais incluem carteira de trabalho (CTPS), carnês de contribuição (GPS), extrato do CNIS (Cadastro Nacional de Informações Sociais), documentos pessoais e certidões de estado civil. Documentos específicos podem ser solicitados conforme o tipo de atividade exercida."
  },
  {
    question: "Como funciona o atendimento e qual é o primeiro passo para falar com o escritório?",
    answer: "O primeiro passo é entrar em contato por WhatsApp ou telefone para relatar brevemente a sua situação. A partir daí, o escritório orienta sobre a documentação necessária e os próximos passos para a condução responsável do seu caso."
  }
];

const practiceAreas = [
  "Salário-maternidade",
  "Seguro defeso",
  "Aposentadorias",
  "Pensão por morte",
  "Auxílio-doença",
  "Outros serviços jurídicos",
];

function scrollToTop(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroCarouselApi, setHeroCarouselApi] = useState<CarouselApi>();
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [heroAutoplayPaused, setHeroAutoplayPaused] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="site-container utility-inner">
          <span>Sociedade de Advogadas · Salinópolis, Pará</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram size={13} aria-hidden="true" /> @karllaekeyteleradvogadas
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">
          <a className="brand" href="#inicio" onClick={scrollToTop} aria-label="Voltar ao início">
            <span className="brand-mark">
              <img src={BRAND_LOGO} alt="Logo oficial Karlla Pinheiro e Keyteler Leite" />
            </span>
            <span className="brand-copy">
              <span>Karlla Pinheiro</span>
              <span>&amp; Keyteler Leite</span>
              <small>Sociedade de Advogadas</small>
            </span>
          </a>

          <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Fale conosco <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

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
                <a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} aria-hidden="true" /> Falar com as advogadas
                </a>
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
                        <img className="hero-image" src={slide.image} alt={slide.alt} decoding="async" />
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
            <span>KP + KL</span>
            <span>Salinópolis / PA</span>
            <span>↓ 01 — 05</span>
          </div>
        </section>

        <section id="sobre" className="section section-ivory">
          <div className="site-container about-grid">
            <div className="section-marker" data-reveal>
              <span>01</span>
              <span className="marker-rule" />
              <span>Sobre a sociedade</span>
            </div>
            <div className="about-main" data-reveal>
              <p className="section-kicker">Uma nova casa para uma advocacia próxima</p>
              <h2>Presença para ouvir. Clareza para orientar.</h2>
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
          </div>
          <div className="site-container values-row" data-reveal>
            <div className="value-item">
              <span className="value-index">01</span>
              <strong>Responsabilidade</strong>
            </div>
            <div className="value-item">
              <span className="value-index">02</span>
              <strong>Cuidado</strong>
            </div>
            <div className="value-item">
              <span className="value-index">03</span>
              <strong>Compromisso</strong>
            </div>
            <div className="value-item">
              <span className="value-index">04</span>
              <strong>Proximidade</strong>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-image" style={{ backgroundImage: `url(${TEXTURE_IMAGE})` }} aria-hidden="true" />
          <div className="site-container quote-inner" data-reveal>
            <span className="quote-mark">“</span>
            <blockquote>
              Atendimento próximo, humano e personalizado para compreender sua história e buscar os
              melhores caminhos para o seu direito.
            </blockquote>
            <span className="quote-source">— Posicionamento público da sociedade</span>
          </div>
        </section>

        <section id="atuacao" className="section section-paper">
          <div className="site-container practice-grid">
            <div className="section-marker" data-reveal>
              <span>02</span>
              <span className="marker-rule" />
              <span>Área de atuação</span>
            </div>
            <div className="practice-main" data-reveal>
              <p className="section-kicker">Áreas atendidas pelo escritório</p>
              <h2>O direito previdenciário pede atenção aos detalhes da sua história.</h2>
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
                  <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Conversar sobre o meu caso <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <a className="text-link practice-route-link" href={internalHref("/servicos-previdenciarios-salinopolis")}>
                    Conhecer os serviços previdenciários <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <ul className="practice-list" aria-label="Áreas de atuação informadas pelo escritório">
                {practiceAreas.map((area, index) => (
                  <li key={area}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{area}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="advogadas" className="section section-wine">
          <div className="site-container team-grid">
            <div className="team-intro" data-reveal>
              <div className="section-marker section-marker-light">
                <span>03</span>
                <span className="marker-rule" />
                <span>As advogadas</span>
              </div>
              <p className="section-kicker section-kicker-light">Duas histórias, um propósito em comum</p>
              <h2>Uma sociedade feita de presença.</h2>
              <p className="team-description">
                Karlla Pinheiro e Keyteler Leite são as duas advogadas à frente da sociedade. O
                trabalho começa com uma conversa responsável e atenta à pessoa que chega.
              </p>
              <a className="button button-outline-light" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <Instagram size={16} aria-hidden="true" /> Ver no Instagram
              </a>
            </div>

            <div className="team-portrait" data-reveal>
              <img src={TEAM_PHOTO} alt="Karlla Pinheiro e Keyteler Leite em retrato institucional" />
            </div>

            <div className="team-names" data-reveal>
              <div className="team-name-row">
                <span>01</span>
                <strong>Karlla Pinheiro</strong>
              </div>
              <div className="team-name-row">
                <span>02</span>
                <strong>Keyteler Leite</strong>
              </div>
              <p>Sociedade de Advogadas</p>
            </div>
          </div>
        </section>

        <section id="compromissos" className="section section-ivory commitments-section">
          <div className="site-container commitments-header" data-reveal>
            <div className="section-marker">
              <span>04</span>
              <span className="marker-rule" />
              <span>Como atuamos</span>
            </div>
            <div>
              <p className="section-kicker">Compromissos institucionais</p>
              <h2>Cuidado em cada etapa da orientação.</h2>
              <p>
                Uma atuação que começa na escuta e segue com análise individual, comunicação clara e responsabilidade.
              </p>
            </div>
          </div>
          <div className="site-container commitments-grid">
            {commitments.map((commitment, index) => (
              <article className="commitment-card" key={commitment.number} data-reveal style={{ transitionDelay: `${index * 55}ms` }}>
                <span className="commitment-number">{commitment.number}</span>
                <h3>{commitment.title}</h3>
                <p>{commitment.description}</p>
                <span className="commitment-mark"><Check size={13} aria-hidden="true" /></span>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section section-wine faq-section">
          <div className="site-container">
            <div className="section-marker section-marker-light" data-reveal>
              <span>05</span>
              <span className="marker-rule" />
              <span>Dúvidas frequentes</span>
            </div>
            <div className="faq-header" data-reveal>
              <p className="section-kicker section-kicker-light">Esclarecimentos essenciais</p>
              <h2 className="text-white">Perguntas frequentes sobre direito previdenciário</h2>
              <p className="faq-subtitle text-white/80">
                Respostas orientativas para ajudar você a compreender os conceitos fundamentais antes da orientação jurídica individual.
              </p>
            </div>
            <div className="faq-accordion-wrap" data-reveal>
              <Accordion type="single" collapsible className="faq-accordion">
                {faqItems.map((item, index) => (
                  <AccordionItem key={item.question} value={`item-${index}`} className="faq-item">
                    <AccordionTrigger className="faq-question">
                      <span>{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="faq-answer">
                      <p>{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="atendimento" className="section contact-section">
          <div className="site-container contact-grid">
            <div className="contact-copy" data-reveal>
              <div className="section-marker">
                <span>06</span>
                <span className="marker-rule" />
                <span>Atendimento</span>
              </div>
              <p className="section-kicker">A porta está aberta</p>
              <h2>Sua história merece uma orientação clara.</h2>
              <p>
                Para iniciar o atendimento, envie uma mensagem pelo WhatsApp e conte brevemente a sua situação. Se preferir, fale por telefone ou visite o escritório em Salinópolis.
              </p>
              <div className="contact-guidance">
                <MessageCircle size={17} aria-hidden="true" />
                <span><strong>Atendimento inicial pelo WhatsApp</strong>Uma conversa direta para indicar os primeiros passos e a documentação necessária.</span>
              </div>
              <div className="contact-actions">
                <a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} aria-hidden="true" /> Falar pelo WhatsApp
                </a>
                <a className="phone-link" href={`tel:${PHONE_TEL}`}>
                  <Phone size={16} aria-hidden="true" /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="location-panel" data-reveal>
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
        <MessageCircle size={21} strokeWidth={2.2} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>

      <footer className="site-footer">
        <div className="site-container footer-top">
          <a className="brand brand-footer" href="#inicio" onClick={scrollToTop} aria-label="Voltar ao início">
            <span className="brand-mark">
              <img src={BRAND_LOGO} alt="Logo oficial Karlla Pinheiro e Keyteler Leite" />
            </span>
            <span className="brand-copy">
              <span>Karlla Pinheiro</span>
              <span>&amp; Keyteler Leite</span>
              <small>Sociedade de Advogadas</small>
            </span>
          </a>
          <p className="eyebrow footer-eyebrow">Responsabilidade, cuidado e compromisso em cada conversa</p>
          <a className="footer-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Fale conosco <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="site-container footer-bottom">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram <Instagram size={13} aria-hidden="true" />
          </a>
          <span>© {new Date().getFullYear()} Karlla Pinheiro e Keyteler Leite Sociedade de Advogadas</span>
          <span>Salinópolis / PA</span>
        </div>
      </footer>
    </div>
  );
}
