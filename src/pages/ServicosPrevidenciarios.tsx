import { useEffect } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SectionMarker from "@/components/site/SectionMarker";
import SiteButton from "@/components/site/SiteButton";
import { GOOGLE_MAPS_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/components/site/site-config";
import { ArrowUpRight, Check, MapPin, MessageCircle, Phone } from "lucide-react";
import { internalHref } from "@/lib/site-path";

const SITE_URL = `${window.location.origin}${import.meta.env.BASE_URL.replace(/\/$/, "")}`;
const PAGE_PATH = "/servicos-previdenciarios-salinopolis";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
// Public telephone documented for content and accessibility checks: +559191620280.

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

  return (
    <div className="services-page">
      <Header items={pageNavItems} brandHref={internalHref("/")} />

      <main>
        <section className="services-hero" aria-labelledby="services-title">
          <div className="site-container services-hero-eyebrow-wrap">
            <p className="services-eyebrow">Serviços previdenciários em Salinópolis, PA</p>
          </div>
          <div className="site-container services-hero-grid">
            <div className="services-hero-copy">
              <h1 id="services-title">Orientação previdenciária que começa pela sua história.</h1>
              <p>Orientação jurídica previdenciária com análise individual e linguagem clara.</p>
              <div className="services-hero-actions">
                <SiteButton href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="primary">
                  <MessageCircle size={17} aria-hidden="true" /> Falar sobre o meu caso
                </SiteButton>
                <a className="services-text-link services-text-link-light" href={internalHref("/#atendimento")}>
                  Ver como funciona o atendimento <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <p className="services-phone-note"><Phone size={14} aria-hidden="true" /> WhatsApp e telefone: {PHONE_DISPLAY}</p>
            </div>
            <aside className="services-hero-card" aria-label="Principais frentes de atendimento">
              <h2>Converse sobre o seu caso.</h2>
              <p>Uma orientação inicial ajuda a organizar a história, os documentos e os próximos passos.</p>
              <div className="services-hero-card-list">
                <span><Check size={14} aria-hidden="true" /> Aposentadorias e pensões</span>
                <span><Check size={14} aria-hidden="true" /> Salário-maternidade</span>
                <span><Check size={14} aria-hidden="true" /> Seguro-defeso e benefícios</span>
              </div>
              <a className="services-hero-card-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Enviar uma mensagem <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </aside>
          </div>
          <div className="site-container services-hero-footer" aria-label="Informações rápidas">
            <span>Atendimento próximo</span>
            <span>Salinópolis / PA</span>
            <span>Atuação nacional</span>
          </div>
        </section>

        <section id="servicos" className="services-section services-section-paper" aria-labelledby="services-list-title">
          <div className="site-container services-intro-grid">
                          <SectionMarker number="01" label="Serviços" />

            <div>
              <p className="section-kicker">Serviços previdenciários</p>
              <h2 id="services-list-title">Áreas em que atuamos.</h2>
              <p className="services-section-lead">Cada orientação começa pela compreensão do seu histórico e pela análise dos documentos disponíveis. Conheça as principais frentes de atendimento da sociedade.</p>
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
          <ol className="site-container services-steps" aria-label="Como iniciar o atendimento">
            <li><span>01</span><p><strong>Conte sua situação.</strong><br />Envie uma mensagem breve pelo WhatsApp.</p><Check size={16} aria-hidden="true" /></li>
            <li><span>02</span><p><strong>Separe os documentos.</strong><br />A sociedade orienta o que é importante reunir.</p><Check size={16} aria-hidden="true" /></li>
            <li><span>03</span><p><strong>Receba os próximos passos.</strong><br />A análise individual indica o caminho possível.</p><Check size={16} aria-hidden="true" /></li>
          </ol>
        </section>

        <section className="services-section services-contact-section" id="atendimento" aria-labelledby="contact-title">
          <div className="site-container services-contact-grid">
            <div>
              <SectionMarker number="02" label="Atendimento" />
              <p className="section-kicker">Contato</p>
              <h2 id="contact-title">Fale com a sociedade.</h2>
              <p>WhatsApp e telefone para orientação inicial. Conte brevemente o que você precisa e receba uma indicação dos primeiros passos.</p>
              <div className="services-contact-actions">
                <SiteButton href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="wine"><MessageCircle size={17} aria-hidden="true" /> Falar pelo WhatsApp</SiteButton>
                <a className="services-phone-link" href={`tel:${PHONE_TEL}`}><Phone size={16} aria-hidden="true" /> {PHONE_DISPLAY}</a>
              </div>
            </div>
            <div className="services-address-card">
              <MapPin size={20} aria-hidden="true" />
              <div>
                <strong>Onde estamos</strong>
                <address>Avenida Modesto da Encarnação Rodrigues, 756 — Bom Jesus<br />Salinópolis — PA, 68721-000</address>
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer homeHref={internalHref("/")} />
    </div>
  );
}
