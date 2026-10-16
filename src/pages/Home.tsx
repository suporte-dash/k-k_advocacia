/**
 * Design reminder — Vinho Editorial.
 * Use editorial contrast, asymmetry, wine/ivory/graphite, quiet gold rules and direct human language.
 * Avoid invented legal claims, generic stock imagery and decorative effects that dilute the brand.
 */
import { useEffect, useState, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SectionMarker from "@/components/site/SectionMarker";
import SiteButton from "@/components/site/SiteButton";
import { ASSET_BASE, GOOGLE_MAPS_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/components/site/site-config";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
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
  HelpCircle,
  HeartHandshake,
  Users,
  FileText,
  FileCheck,
} from "lucide-react";
import BenefitScreener from "@/components/site/BenefitScreener";
import ContactForm from "@/components/site/ContactForm";
import InstagramShowcase from "@/components/site/InstagramShowcase";
import BackToTop from "@/components/site/BackToTop";
import ServiceDetailDrawer from "@/components/site/ServiceDetailDrawer";
import { ALL_DETAILED_SERVICES, type DetailedService } from "@/data/servicesData";

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

const navItems = [
  { href: "#sobre", label: "Quem somos" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#advogadas", label: "Advogadas" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#atendimento", label: "Contato" },
];

const FAQ_CATEGORIES = [
  { id: "todos", label: "Todas as dúvidas" },
  { id: "aposentadoria", label: "Aposentadorias & Transição" },
  { id: "maternidade", label: "Salário-maternidade" },
  { id: "defeso", label: "Seguro-defeso & Rural" },
  { id: "incapacidade", label: "Incapacidade & BPC/LOAS" },
  { id: "atendimento", label: "Negativas & Atendimento" },
];

const faqItems = [
  {
    category: "aposentadoria",
    question: "Como saber qual regra de aposentadoria é a mais vantajosa após a Reforma?",
    answer: "A Reforma da Previdência (EC 103/2019) estabeleceu regras de transição diversas (pedágio de 50%, pedágio de 100%, idade mínima progressiva e pontos). O momento e a regra ideais variam para cada segurado. Realizamos uma análise minuciosa do CNIS e o planejamento previdenciário para calcular o cenário financeiro mais vantajoso, prevenindo concessões precipitadas com valores reduzidos."
  },
  {
    category: "atendimento",
    question: "O que fazer se o meu benefício foi indeferido ou negado pelo INSS?",
    answer: "A negativa no INSS não encerra os seus direitos. O primeiro passo é obter a cópia integral do processo administrativo no Meu INSS para identificar o fundamento exato do indeferimento (como erro no CNIS, divergência de carência ou discordância médica). Com essa análise técnica em mãos, verificamos se o caminho mais célere e seguro é o recurso administrativo ou o ajuizamento na Justiça Federal."
  },
  {
    category: "defeso",
    question: "Quem tem direito ao seguro-defeso e como comprovar a atividade pesqueira?",
    answer: "O seguro-defeso é devido ao pescador e pescadora artesanal que exerce a atividade de maneira exclusiva e contínua, durante o período de paralisação da pesca para preservação das espécies. A comprovação documental requer Registro Geral da Atividade Pesqueira (RGP) ativo, notas de comercialização do pescado, declarações sindicais e residência na comunidade pesqueira."
  },
  {
    category: "maternidade",
    question: "Quem tem direito ao salário-maternidade e em quais situações ele é concedido?",
    answer: "O salário-maternidade ampara seguradas urbanas, trabalhadoras rurais, pescadoras artesanais, contribuintes individuais (MEI e autônomas) e empregadas formais em casos de parto, adoção, guarda judicial ou aborto não criminoso. Mesmo seguradas desempregadas podem manter o direito caso estejam dentro do período de graça do INSS na data do evento."
  },
  {
    category: "incapacidade",
    question: "Tive o auxílio por incapacidade (auxílio-doença) negado na perícia médica. É possível reverter?",
    answer: "Sim. A conclusão da perícia administrativa do INSS pode ser revisada perante a Justiça Federal, onde a avaliação é realizada por médico perito especialista neutro nomeado pelo juiz. Para uma atuação combativa, é indispensável reunir prontuários, laudos médicos detalhados com CID descritivo, exames atualizados e receitas que atestem o impedimento para o trabalho."
  },
  {
    category: "incapacidade",
    question: "Quem tem direito ao BPC/LOAS e qual a diferença em relação à aposentadoria?",
    answer: "O Benefício de Prestação Continuada (BPC/LOAS) é uma garantia assistencial destinada a pessoas idosas (65 anos ou mais) ou pessoas com deficiência de qualquer idade que comprovem vulnerabilidade social e baixa renda familiar. Diferente da aposentadoria, não exige contribuições prévias ao INSS, mas não gera gratificação natalina (13º salário) nem pensão por morte aos dependentes."
  },
  {
    category: "defeso",
    question: "Como trabalhadores rurais e pescadores comprovam o tempo de serviço para aposentadoria?",
    answer: "Segurados especiais comprovam o trabalho no campo ou na pesca artesanal por meio de início de prova material contemporânea aos fatos: certidões de estado civil antigas com menção à profissão, notas de produtor rural ou de venda de pescado, contratos agrários, histórico escolar em área rural e declarações de sindicatos ou colônias de pescadores."
  },
  {
    category: "atendimento",
    question: "Como funciona o atendimento com o escritório e quais documentos devo preparar?",
    answer: "O primeiro contato pode ser realizado diretamente pelo WhatsApp ou presencialmente em nossa sede física em Salinópolis/PA. Para a triagem preliminar, recomendamos ter em mãos: documento de identidade com foto (RG/CNH), CPF, Carteira de Trabalho (CTPS física ou digital), extrato atualizado do CNIS e a carta de indeferimento do INSS, caso já tenha havido pedido anterior."
  }
];

const practiceCardsData = [
  {
    serviceId: "salario-maternidade",
    title: "Salário-maternidade",
    icon: Baby,
    badge: "Maternidade & Adoção",
    description: "Amparo para seguradas urbanas, rurais, pescadoras artesanais e MEI em casos de nascimento, guarda judicial ou adoção.",
    whatsappText: "Olá! Gostaria de uma orientação jurídica sobre Salário-maternidade.",
  },
  {
    serviceId: "seguro-defeso",
    title: "Seguro defeso",
    icon: Anchor,
    badge: "Pesca Artesanal",
    description: "Garantia de renda ao pescador(a) artesanal profissional durante a paralisação da pesca na região e litoral paraense.",
    whatsappText: "Olá! Gostaria de orientações sobre Seguro-defeso para pescador artesanal.",
  },
  {
    serviceId: "aposentadorias",
    title: "Aposentadorias",
    icon: Clock,
    badge: "Urbana, Rural & Especial",
    description: "Planejamento e análise de tempo de serviço, regras de transição, insalubridade e atividade rural com checagem de CNIS.",
    whatsappText: "Olá! Gostaria de uma análise para a minha Aposentadoria.",
  },
  {
    serviceId: "pensao-morte",
    title: "Pensão por morte",
    icon: ShieldAlert,
    badge: "Proteção Familiar",
    description: "Orientação e suporte a viúvos(as), filhos e dependentes econômicos com foco em comprovação documental.",
    whatsappText: "Olá! Preciso de orientação sobre Pensão por morte.",
  },
  {
    serviceId: "auxilio-incapacidade",
    title: "Auxílio-doença",
    icon: HeartPulse,
    badge: "Incapacidade",
    description: "Suporte em benefícios por incapacidade temporária ou permanente, auxílio-acidente e laudos para perícias.",
    whatsappText: "Olá! Gostaria de consultar sobre Auxílio por incapacidade/doença.",
  },
  {
    serviceId: "bpc-loas",
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
  const [activePracticeIndex, setActivePracticeIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<DetailedService | null>(null);
  const practiceCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollToPracticeSlide = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(practiceCardsData.length - 1, index));
    const container = practiceCarouselRef.current;
    if (container) {
      const cards = container.querySelectorAll<HTMLElement>(".practice-card-item");
      if (cards[clampedIndex]) {
        cards[clampedIndex].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
    setActivePracticeIndex(clampedIndex);
  };

  const handlePracticeNavigate = (direction: -1 | 1) => {
    scrollToPracticeSlide(activePracticeIndex + direction);
  };

  useEffect(() => {
    const container = practiceCarouselRef.current;
    if (!container) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const cards = container.querySelectorAll<HTMLElement>(".practice-card-item");
        if (!cards.length) return;

        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        let closestIdx = 0;
        let minDiff = Infinity;

        cards.forEach((card, idx) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const diff = Math.abs(cardCenter - containerCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });

        setActivePracticeIndex(closestIdx);
      }, 50);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

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
                <span>Orientação jurídica especializada, linguagem acessível e rigor técnico para proteger o seu benefício. Atendimento presencial em Salinópolis e consultoria em todo o Brasil.</span>
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
                <p className="section-kicker">Nossa atuação em perspectiva</p>
                <h2 id="proof-title">Presença e técnica para a sua <em>segurança jurídica</em>.</h2>
              </div>
              <div className="proof-stats" data-reveal>
                <article className="proof-card">
                  <div className="proof-card-header">
                    <span className="proof-card-icon-wrap">
                      <Users size={20} aria-hidden="true" />
                    </span>
                    <span className="proof-card-tag">Sócias Titulares</span>
                  </div>
                  <strong className="proof-card-value">02</strong>
                  <span className="proof-card-label">Advogadas à frente de cada caso</span>
                  <p className="proof-card-desc">Atuação direta das sócias Karlla Pinheiro e Keyteler Leite, garantindo acompanhamento próximo e responsável.</p>
                </article>

                <article className="proof-card">
                  <div className="proof-card-header">
                    <span className="proof-card-icon-wrap">
                      <FileCheck size={20} aria-hidden="true" />
                    </span>
                    <span className="proof-card-tag">Rigor Documental</span>
                  </div>
                  <strong className="proof-card-value">100%</strong>
                  <span className="proof-card-label">Análise minuciosa e artesanal</span>
                  <p className="proof-card-desc">Exame detalhado de vínculos, contribuições e laudos para orientar com transparência as chances reais do benefício.</p>
                </article>

                <article className="proof-card">
                  <div className="proof-card-header">
                    <span className="proof-card-icon-wrap">
                      <MapPin size={20} aria-hidden="true" />
                    </span>
                    <span className="proof-card-tag">Presença & Alcance</span>
                  </div>
                  <strong className="proof-card-value">PA + Brasil</strong>
                  <span className="proof-card-label">Salinópolis e consultoria nacional</span>
                  <p className="proof-card-desc">Sede física acolhedora no Bom Jesus em Salinas e estrutura digital completa para atender segurados em todo o país.</p>
                </article>
              </div>
            </div>
          </section>

          <section id="sobre" className="section section-ivory about-section">
          <div className="site-container">
            <div className="about-header" data-reveal>
              <SectionMarker number="02" label="Quem somos" />
              <p className="section-kicker">A Sociedade de Advogadas · Identidade & Propósito</p>
              <h2>Uma advocacia construída para <em>humanizar</em> o direito previdenciário.</h2>
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
                Encontrar a sociedade <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            <div className="values-row" data-reveal>
              <div className="value-item">
                <div className="value-header">
                  <span className="value-index">01</span>
                  <span className="value-icon-wrap">
                    <Scale size={19} className="value-icon" aria-hidden="true" />
                  </span>
                </div>
                <strong className="value-title">Responsabilidade</strong>
                <p className="value-desc">Condução técnica, ética e minuciosa em cada pedido administrativo e judicial.</p>
              </div>
              <div className="value-item">
                <div className="value-header">
                  <span className="value-index">02</span>
                  <span className="value-icon-wrap">
                    <HeartHandshake size={19} className="value-icon" aria-hidden="true" />
                  </span>
                </div>
                <strong className="value-title">Cuidado</strong>
                <p className="value-desc">Atenção humana e minuciosa a cada detalhe do histórico contributivo e dos documentos de cada segurado.</p>
              </div>
              <div className="value-item">
                <div className="value-header">
                  <span className="value-index">03</span>
                  <span className="value-icon-wrap">
                    <Check size={19} className="value-icon" aria-hidden="true" />
                  </span>
                </div>
                <strong className="value-title">Compromisso</strong>
                <p className="value-desc">Atuação presente, comunicação transparente e respeito em cada etapa do atendimento.</p>
              </div>
              <div className="value-item">
                <div className="value-header">
                  <span className="value-index">04</span>
                  <span className="value-icon-wrap">
                    <Users size={19} className="value-icon" aria-hidden="true" />
                  </span>
                </div>
                <strong className="value-title">Proximidade</strong>
                <p className="value-desc">Diálogo direto com as advogadas, escuta acolhedora e linguagem clara sem barreiras.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="site-container quote-inner" data-reveal>
            <span className="quote-mark">“</span>
            <blockquote>
              A previdência não é um favor do Estado: é o patrimônio conquistado por uma vida inteira de trabalho e dedicação.
            </blockquote>
            <span className="quote-source">— Dra. Karlla Pinheiro e Dra. Keyteler Leite</span>
          </div>
        </section>

        <section id="atuacao" className="section section-paper practice-section-light">
          <div className="site-container">
            <div className="practice-header" data-reveal>
              <SectionMarker number="03" label="Área de atuação" />
              <p className="section-kicker">Especialidades e direitos atendidos</p>
              <h2>Rigor técnico em cada etapa do seu <em>benefício</em>.</h2>
              <p className="practice-intro-note">
                O escritório presta suporte jurídico minucioso na concessão, restabelecimento e revisão de benefícios. Se você tem dúvidas sobre os requisitos do seu benefício, consulte nossa equipe para uma avaliação inicial.
              </p>
            </div>

            <div
              className="practice-cards-grid practice-carousel-track"
              ref={practiceCarouselRef}
              aria-label="Principais direitos e benefícios atendidos"
            >
              {practiceCardsData.map((card, idx) => {
                const Icon = card.icon;
                const waUrl = `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${encodeURIComponent(card.whatsappText)}`;
                const matchedService = ALL_DETAILED_SERVICES.find((s) => s.id === card.serviceId);

                return (
                  <article
                    className={`practice-card-item is-interactive ${activePracticeIndex === idx ? "is-active" : ""}`}
                    key={card.title}
                    tabIndex={0}
                    role="button"
                    aria-label={`Ver detalhes e requisitos de ${card.title}`}
                    onClick={() => {
                      if (matchedService) setSelectedService(matchedService);
                    }}
                    onKeyDown={(e) => {
                      if ((e.key === "Enter" || e.key === " ") && matchedService) {
                        e.preventDefault();
                        setSelectedService(matchedService);
                      }
                    }}
                  >
                    <div className="practice-card-top">
                      <span className="practice-card-icon">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="practice-card-tag">{card.badge}</span>
                    </div>
                    <h3 className="practice-card-title">{card.title}</h3>
                    <p className="practice-card-desc">{card.description}</p>
                    
                    <div className="practice-card-footer-actions">
                      <button
                        type="button"
                        className="practice-card-detail-trigger"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (matchedService) setSelectedService(matchedService);
                        }}
                        aria-label={`Abrir detalhes de ${card.title}`}
                      >
                        <FileText size={14} aria-hidden="true" />
                        <span>Ver detalhes e requisitos</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </button>

                      <a
                        className="practice-card-action"
                        href={waUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={`Conversar sobre ${card.title} no WhatsApp`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Consultar meu direito neste benefício <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Controles do Carrossel (Visíveis exclusivamente no Mobile) */}
            <div className="practice-carousel-controls" aria-label="Navegação dos Serviços Previdenciários">
              <div className="practice-carousel-nav">
                <button
                  type="button"
                  className="practice-carousel-arrow"
                  onClick={() => handlePracticeNavigate(-1)}
                  disabled={activePracticeIndex === 0}
                  aria-label="Ver serviço anterior"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>

                <div className="practice-carousel-dots" role="tablist" aria-label="Indicadores dos serviços">
                  {practiceCardsData.map((card, idx) => (
                    <button
                      key={card.title}
                      type="button"
                      role="tab"
                      aria-selected={activePracticeIndex === idx}
                      aria-label={`Ir para o serviço ${idx + 1} de ${practiceCardsData.length}: ${card.title}`}
                      className={`practice-carousel-dot ${activePracticeIndex === idx ? "is-active" : ""}`}
                      onClick={() => scrollToPracticeSlide(idx)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="practice-carousel-arrow"
                  onClick={() => handlePracticeNavigate(1)}
                  disabled={activePracticeIndex === practiceCardsData.length - 1}
                  aria-label="Ver próximo serviço"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>

              <div className="practice-carousel-info">
                <span className="practice-carousel-counter">
                  Serviço <strong>{activePracticeIndex + 1}</strong> de {practiceCardsData.length}
                </span>
                <span className="practice-carousel-swipe-hint">
                  ⇄ Deslize para navegar
                </span>
              </div>
            </div>

            <div className="practice-screener-divider" data-reveal>
              <div className="practice-divider-line" />
              <div className="practice-divider-badge">
                <span>Diagnóstico guiado</span>
                <small>Dúvida sobre qual é o seu caso?</small>
              </div>
              <div className="practice-divider-line" />
            </div>

            <BenefitScreener layout="main" />
          </div>
        </section>

        <section id="advogadas" className="section section-paper team-section">
          <div className="site-container">
            <div className="team-header" data-reveal>
              <SectionMarker light number="04" label="Advogadas" />
              <p className="section-kicker">Duas trajetórias, um compromisso com a justiça</p>
              <h2>Uma sociedade feita de <em>compromisso real</em>.</h2>
              <p className="team-description">
                Karlla Pinheiro e Keyteler Leite lideram a sociedade combinando análise documental aprofundada, diálogo transparente e defesa combativa dos direitos dos segurados.
              </p>
            </div>

            <div className="team-grid">
              <div className="team-portrait-column" data-reveal>
                <div className="team-portrait-frame">
                  <img
                    src={TEAM_PHOTO}
                    alt="Dra. Karlla Pinheiro e Dra. Keyteler Leite em retrato institucional"
                    width="1122"
                    height="1402"
                    loading="lazy"
                    decoding="async"
                    className="team-portrait-img"
                  />
                </div>
                <div className="team-portrait-caption">
                  <p className="team-caption-title">Retrato Institucional das Sócias</p>
                  <p className="team-caption-sub">Dra. Karlla Pinheiro &amp; Dra. Keyteler Leite · Sede Salinópolis / PA</p>
                </div>
              </div>

              <div className="team-content-column" data-reveal>
                <div className="team-profiles">
                  <article className="team-profile-card">
                    <div className="team-profile-header">
                      <span className="team-profile-num">01</span>
                      <div className="team-profile-title-group">
                        <strong className="team-profile-name">Karlla Pinheiro</strong>
                        <span className="team-profile-oab">OAB/PA 40.209</span>
                      </div>
                      <span className="team-profile-focus-tag">Estratégia &amp; CNIS</span>
                    </div>
                    <p className="team-profile-bio">
                      Advogada com atuação focada em Direito Previdenciário, planejamento contributivo e condução técnica de benefícios do INSS.
                    </p>
                  </article>

                  <article className="team-profile-card">
                    <div className="team-profile-header">
                      <span className="team-profile-num">02</span>
                      <div className="team-profile-title-group">
                        <strong className="team-profile-name">Keyteler Leite</strong>
                        <span className="team-profile-oab">OAB/PA 40.642</span>
                      </div>
                      <span className="team-profile-focus-tag">Rural &amp; Pesca Artesanal</span>
                    </div>
                    <p className="team-profile-bio">
                      Advogada com dedicação especial ao amparo de segurados do INSS, trabalhadores rurais e pesca artesanal.
                    </p>
                  </article>
                </div>

                <div className="team-actions-block">
                  <a
                    className="team-whatsapp-cta"
                    href={`https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${encodeURIComponent("Olá, Dra. Karlla e Dra. Keyteler! Gostaria de conversar sobre uma orientação jurídica previdenciária.")}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Falar diretamente com as advogadas pelo WhatsApp"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    <span>Falar diretamente com as advogadas</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  <span className="team-actions-guarantee">
                    Atendimento conduzido pelas titulares · Sigilo profissional e ético garantido
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section section-wine faq-section">
          <div className="site-container">
            <SectionMarker light number="05" label="Perguntas frequentes" />
            <div className="faq-header" data-reveal>
              <p className="section-kicker">Direito Previdenciário Explicado · Análise &amp; Segurança Jurídica</p>
              <h2>Respostas claras sobre os seus <em>direitos previdenciários</em>.</h2>
              <p className="faq-subtitle">
                Orientações técnicas sobre regras de concessão, documentação comprobatória e soluções jurídicas para pedidos no INSS.
              </p>
            </div>

            <div className="faq-filter-wrap" data-reveal>
              <div className="faq-search-box">
                <Search size={18} className="faq-search-icon" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Pesquise por palavra-chave... (ex: negativa, defeso, aposentadoria, documentos, BPC)"
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
                        <div className="faq-question-inner">
                          <span className="faq-question-num" aria-hidden="true">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="faq-question-text">{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="faq-answer">
                        <p className="faq-answer-text">{item.answer}</p>
                        <a
                          className="faq-whatsapp-link"
                          href={`https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${encodeURIComponent(`Olá, Dra. Karlla e Dra. Keyteler! Li no site a dúvida sobre "${item.question}" e gostaria de uma orientação jurídica para o meu caso.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Tirar dúvida no WhatsApp sobre: ${item.question}`}
                        >
                          <MessageCircle size={15} aria-hidden="true" />
                          <span>Tirar dúvida sobre este tema</span>
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="faq-no-results">
                  <div className="faq-no-results-icon" aria-hidden="true">
                    <HelpCircle size={28} />
                  </div>
                  <div className="faq-no-results-content">
                    <p className="faq-no-results-title">Não encontrou a resposta para a sua dúvida?</p>
                    <p className="faq-no-results-desc">
                      Nenhum resultado com o termo "{faqSearch}". Cada caso previdenciário possui especificidades únicas. Fale diretamente com nossas advogadas.
                    </p>
                  </div>
                  <a
                    className="faq-no-results-cta"
                    href={`https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${encodeURIComponent(`Olá, Dra. Karlla e Dra. Keyteler! Pesquisei no site por "${faqSearch}" e gostaria de uma orientação para o meu caso.`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    <span>Perguntar diretamente no WhatsApp</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
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
              <SectionMarker number="06" label="Atendimento" />
              <p className="section-kicker">Primeiro contato · Sem compromisso</p>
              <h2>Análise dedicada para o seu <em>caso específico</em>.</h2>
              <p className="contact-lead">
                Atendimento inicial pelo WhatsApp com análise responsável do seu caso, ou envie sua mensagem pelo formulário ao lado. Atendimento presencial em Salinópolis e digital em todo o Brasil.
              </p>
            </div>

            <div className="contact-main-grid">
              <div className="contact-info-col" data-reveal>
                <div className="contact-details-grid">
                  <div className="contact-detail-item">
                    <span className="contact-detail-icon" aria-hidden="true">
                      <Clock size={18} />
                    </span>
                    <div className="contact-detail-body">
                      <strong>Horário de atendimento</strong>
                      <span>Segunda a sexta-feira, das 08:00 às 18:00</span>
                    </div>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-detail-icon" aria-hidden="true">
                      <Phone size={18} />
                    </span>
                    <div className="contact-detail-body">
                      <strong>WhatsApp e telefone</strong>
                      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="contact-phone-link">
                        {PHONE_DISPLAY}
                      </a>
                      <span className="contact-phone-sub">Atendimento direto pelas advogadas</span>
                    </div>
                  </div>
                </div>

                <div className="location-panel">
                  <div className="map-frame">
                    <a className="map-fallback" href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" aria-label="Abrir a localização da sociedade no Google Maps">
                      <span className="map-grid-lines" aria-hidden="true" />
                      <span className="map-pin">
                        <span className="map-pin-pulse" aria-hidden="true" />
                        <MapPin size={20} aria-hidden="true" />
                      </span>
                      <span className="map-fallback-copy">
                        <strong>Bom Jesus</strong>
                        <span>Salinópolis — PA</span>
                      </span>
                      <span className="map-badge-tag" aria-hidden="true">Sede física</span>
                      <span className="map-hover-hint" aria-hidden="true">
                        Ver no mapa <ArrowUpRight size={13} />
                      </span>
                    </a>
                  </div>
                  <div className="address-row">
                    <div className="address-icon-wrap" aria-hidden="true">
                      <MapPin size={18} />
                    </div>
                    <div className="address-content">
                      <strong>Onde estamos</strong>
                      <address>Avenida Modesto da Encarnação Rodrigues, 756 — Bom Jesus<br />Salinópolis — PA, 68721-000</address>
                      <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="map-action-link">
                        <span>Abrir no Google Maps</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
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

      <ServiceDetailDrawer
        service={selectedService}
        allServices={ALL_DETAILED_SERVICES}
        onClose={() => setSelectedService(null)}
        onSelectService={(service) => setSelectedService(service)}
      />

      <Footer homeHref="#inicio" onHomeClick={scrollToTop} />
    </div>
  );
}
