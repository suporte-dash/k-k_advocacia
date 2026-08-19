import { useEffect, useState } from "react";
import "./services.css";
import {
  ArrowUpRight,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { internalHref } from "@/lib/site-path";

const SITE_URL = `${window.location.origin}${import.meta.env.BASE_URL.replace(/\/$/, "")}`;
const PAGE_PATH = "/servicos-previdenciarios-salinopolis";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const WHATSAPP_URL =
  "https://wa.me/559191620280?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20servi%C3%A7os%20previdenci%C3%A1rios.";
const PHONE_DISPLAY = "(91) 9162-0280";
const PHONE_TEL = "+559191620280";
const INSTAGRAM_URL = "https://www.instagram.com/karllaekeyteleradvogadas/";
const BRAND_LOGO = `${import.meta.env.BASE_URL}assets/logo-oficial.png`;

const pageNavItems = [
  { href: internalHref("/"), label: "Início" },
  { href: internalHref("/#sobre"), label: "Sobre" },
  { href: internalHref("/#atuacao"), label: "Atuação" },
  { href: "#servicos", label: "Serviços" },
  { href: internalHref("/#advogadas"), label: "Advogadas" },
  { href: internalHref("/#compromissos"), label: "Compromissos" },
  { href: internalHref("/#faq"), label: "FAQ" },
  { href: "#atendimento", label: "Atendimento" },
];

const services = [
  {
    number: "01",
    title: "Aposentadorias",
    description: "Análise do histórico contributivo, vínculos e documentos para orientar as regras aplicáveis a cada caso.",
  },
  {
    number: "02",
    title: "Salário-maternidade",
    description: "Orientação sobre requisitos, qualidade de segurada ou segurado e documentação relacionada ao benefício.",
  },
  {
    number: "03",
    title: "Seguro-defeso",
    description: "Análise de documentos e informações da atividade de pescador artesanal para orientar sobre o benefício.",
  },
  {
    number: "04",
    title: "Pensão por morte",
    description: "Avaliação de dependência, documentação e dos pontos relevantes em cada situação familiar.",
  },
  {
    number: "05",
    title: "Auxílio por incapacidade",
    description: "Orientação sobre documentação, qualidade de segurado e critérios ligados aos benefícios por incapacidade.",
  },
  {
    number: "06",
    title: "Análise previdenciária",
    description: "Leitura cuidadosa do histórico e das contribuições para indicar próximos passos com responsabilidade.",
  },
];

function setMeta(selector: string, attribute: "name" | "property", content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, selector.match(/="([^"]+)"/)?.[1] ?? "");
    document.head.appendChild(element);
  }
  element.content = content;
  return element;
}

export default function ServicosPrevidenciarios() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    const description = setMeta('meta[name="description"]', "name", "Serviços de advocacia previdenciária em Salinópolis, PA: aposentadorias, salário-maternidade, seguro-defeso, pensão por morte e análise previdenciária responsável.");
    const ogTitle = setMeta('meta[property="og:title"]', "property", "Serviços previdenciários em Salinópolis, PA | Karlla Pinheiro e Keyteler Leite");
    const ogDescription = setMeta('meta[property="og:description"]', "property", "Orientação jurídica previdenciária com análise individual e atendimento responsável em Salinópolis, Pará.");
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = PAGE_URL;
    if (!canonical.parentNode) document.head.appendChild(canonical);

    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.id = "services-local-business-schema";
    structuredData.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Karlla Pinheiro e Keyteler Leite Sociedade de Advogadas",
      url: PAGE_URL,
      telephone: PHONE_TEL,
      description: "Serviços de advocacia previdenciária com atendimento responsável em Salinópolis, Pará.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Modesto da Encarnação Rodrigues, 756",
        addressLocality: "Salinópolis",
        addressRegion: "PA",
        postalCode: "68721-000",
        addressCountry: "BR",
      },
      areaServed: [
        { "@type": "City", name: "Salinópolis" },
        { "@type": "Country", name: "Brasil" },
      ],
      serviceType: services.map((service) => service.title),
      sameAs: [INSTAGRAM_URL],
    });

    document.title = "Serviços previdenciários em Salinópolis, PA | Karlla Pinheiro e Keyteler Leite";
    document.head.appendChild(structuredData);

    return () => {
      document.title = previousTitle;
      structuredData.remove();
      description.content = "Karlla Pinheiro e Keyteler Leite Sociedade de Advogadas: advocacia previdenciária com atendimento responsável, cuidadoso e próximo em Salinópolis, Pará.";
      ogTitle.content = "Karlla Pinheiro e Keyteler Leite | Sociedade de Advogadas";
      ogDescription.content = "Advocacia previdenciária com responsabilidade, cuidado e compromisso em Salinópolis, Pará.";
      canonical.href = `${SITE_URL}/`;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="services-page">
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
          <a className="brand" href={internalHref("/")} aria-label="Voltar ao início">
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
            {pageNavItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
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
        <section className="services-hero" aria-labelledby="services-title">
          <div className="site-container services-hero-grid">
            <div className="services-hero-copy">
              <p className="services-eyebrow">Serviços previdenciários em Salinópolis, PA</p>
              <h1 id="services-title">Orientação previdenciária que começa pela sua história.</h1>
              <p>Orientação jurídica previdenciária com análise individual e linguagem clara.</p>
              <div className="services-hero-actions">
                <a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} aria-hidden="true" /> Falar sobre o meu caso
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="services-section services-section-paper" aria-labelledby="services-list-title">
          <div className="site-container services-intro-grid">
            <div className="services-marker"><span>01</span><span className="marker-rule" /><span>Serviços</span></div>
            <div>
              <p className="section-kicker">Serviços previdenciários</p>
              <h2 id="services-list-title">Áreas em que atuamos.</h2>
            </div>
          </div>
          <div className="site-container services-grid">
            {services.map((service) => (
              <article className={`service-card ${service.number === "01" ? "service-card-featured" : ""}`} key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section services-contact-section" id="atendimento" aria-labelledby="contact-title">
          <div className="site-container services-contact-grid">
            <div>
              <div className="services-marker"><span>02</span><span className="marker-rule" /><span>Atendimento</span></div>
              <p className="section-kicker">Contato</p>
              <h2 id="contact-title">Fale com a sociedade.</h2>
              <p>WhatsApp e telefone para orientação inicial.</p>
              <div className="services-contact-actions">
                <a className="button button-wine" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" /> Falar pelo WhatsApp</a>
                <a className="services-phone-link" href={`tel:${PHONE_TEL}`}><Phone size={16} aria-hidden="true" /> {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="services-footer">
        <div className="site-container services-footer-inner">
          <a className="services-footer-brand" href={internalHref("/")}>Karlla Pinheiro &amp; Keyteler Leite</a>
          <span>Advocacia previdenciária · Salinópolis, PA</span>
        </div>
      </footer>
    </div>
  );
}
