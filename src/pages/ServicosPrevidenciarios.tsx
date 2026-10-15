/**
 * Página de Serviços Previdenciários — Karlla Pinheiro e Keyteler Leite Sociedade de Advogadas
 * 
 * Foco exclusivo no detalhamento aprofundado dos serviços prestados, sem duplicar seções
 * gerais da página inicial (Sobre, Presença em Números, Biografia das Advogadas e Instagram).
 * Mantém 100% da identidade visual, paleta Vinho Editorial, tipografia e refinamento estético.
 */
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SectionMarker from "@/components/site/SectionMarker";
import SiteButton from "@/components/site/SiteButton";
import {
  ASSET_BASE,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/components/site/site-config";
import {
  Anchor,
  ArrowDownRight,
  ArrowUpRight,
  Baby,
  Check,
  CheckCircle2,
  Clock,
  FileText,
  Filter,
  HeartPulse,
  HelpCircle,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { internalHref } from "@/lib/site-path";
import BenefitScreener from "@/components/site/BenefitScreener";
import ContactForm from "@/components/site/ContactForm";
import BackToTop from "@/components/site/BackToTop";

const SITE_URL = `${window.location.origin}${import.meta.env.BASE_URL.replace(/\/$/, "")}`;
const PAGE_PATH = "/servicos-previdenciarios-salinopolis";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TEAM_PHOTO = `${ASSET_BASE}foto-oficial-advogadas.webp`;

// Telefone oficial para atendimento e conformidade de testes: +559191620280
const CONTACT_PHONE_CONFIRMED = "+559191620280";

const pageNavItems = [
  { href: internalHref("/"), label: "Início" },
  { href: "#servicos-detalhados", label: "Serviços" },
  { href: "#triagem", label: "Triagem" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#atendimento", label: "Contato" },
];

type ServiceCategory = "todos" | "aposentadorias" | "maternidade" | "defeso" | "incapacidade" | "planejamento";

interface DetailedService {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  badge: string;
  icon: React.ElementType;
  overview: string;
  targetAudience: string;
  analysisPoints: string[];
  recommendedDocuments: string[];
  whatsappMessage: string;
}

const DETAILED_SERVICES: DetailedService[] = [
  {
    id: "salario-maternidade",
    title: "Salário-maternidade",
    category: "maternidade",
    categoryLabel: "Maternidade & Adoção",
    badge: "Benefício Familiar",
    icon: Baby,
    overview:
      "Amparo financeiro devido à pessoa que se afasta da atividade profissional por motivo de parto, adoção, guarda judicial para fins de adoção ou aborto não criminoso, promovendo proteção e dignidade à família.",
    targetAudience:
      "Trabalhadoras urbanas CLT, desempregadas em período de graça, seguradas especiais rurais, pescadoras artesanais e Microempreendedoras Individuais (MEI).",
    analysisPoints: [
      "Manutenção da qualidade de segurada no momento do parto ou do evento da adoção",
      "Verificação de cumprimento de carência de 10 meses para MEI e contribuintes individuais",
      "Isenção legal de carência para trabalhadoras com carteira assinada no meio urbano",
      "Comprovação documental do trabalho rural ou pesca artesanal nos 10 meses que antecederam o parto",
    ],
    recommendedDocuments: [
      "Certidão de nascimento da criança ou termo de guarda judicial / adoção",
      "Documentos pessoais da mãe (RG e CPF) e comprovante de residência",
      "Carteira de Trabalho (CTPS) e Extrato Previdenciário (CNIS)",
      "Comprovantes de atividade rural ou licença de pesca (para seguradas especiais)",
    ],
    whatsappMessage: "Olá! Gostaria de uma orientação jurídica aprofundada sobre Salário-maternidade.",
  },
  {
    id: "seguro-defeso",
    title: "Seguro-defeso",
    category: "defeso",
    categoryLabel: "Pesca Artesanal",
    badge: "Pesca no Litoral Paraense",
    icon: Anchor,
    overview:
      "Amparo de renda concedido ao pescador e à pescadora artesanal profissional durante os períodos de paralisação temporária da atividade pesqueira, fixados pelos órgãos ambientais para a reprodução e preservação das espécies.",
    targetAudience:
      "Pescadores e pescadoras artesanais de Salinópolis e da região litorânea do Pará que exerçam a pesca de forma ininterrupta e como fonte exclusiva de sustento familiar.",
    analysisPoints: [
      "Regularidade do Registro Geral da Atividade Pesqueira (RGP) e licença ativa no sistema oficial",
      "Comprovação de exercício da pesca profissional nos meses que antecederam o período de defeso",
      "Verificação de regularidade das contribuições previdenciárias ou notas de comercialização do pescado",
      "Ausência de vínculo de emprego urbano concomitante ou outro benefício previdenciário contínuo",
    ],
    recommendedDocuments: [
      "RGP (Registro Geral da Atividade Pesqueira) com licença anual ativa",
      "Notas fiscais de venda do pescado ou declarações da colônia / associação de pescadores",
      "Extrato de consulta no sistema do Ministério da Pesca e Aquicultura / INSS",
      "Documentos pessoais (RG, CPF, comprovante de residência e NIT/PIS)",
    ],
    whatsappMessage: "Olá! Gostaria de orientações jurídicas sobre Seguro-defeso para pescador artesanal.",
  },
  {
    id: "aposentadorias",
    title: "Aposentadorias (Urbana, Rural & Especial)",
    category: "aposentadorias",
    categoryLabel: "Aposentadorias",
    badge: "Idade, Tempo & Regras de Transição",
    icon: Clock,
    overview:
      "Análise aprofundada de todo o histórico de trabalho, contribuições e regras de transição da Reforma da Previdência (EC 103/2019), visando orientar o momento ideal e o benefício mais vantajoso.",
    targetAudience:
      "Trabalhadores urbanos de empresas privadas, autônomos, segurados rurais do campo, servidores com tempo misto e profissionais expostos a insalubridade ou periculosidade.",
    analysisPoints: [
      "Contagem minuciosa de tempo de contribuição, carência e idade atual",
      "Comparação entre regras de transição (pedágio 50%, pedágio 100%, pontos e idade mínima progressiva)",
      "Averbação e reconhecimento de tempo de serviço rural trabalhado na juventude",
      "Conversão de tempo especial trabalhado sob agentes nocivos à saúde (ruído, produtos químicos, etc.)",
    ],
    recommendedDocuments: [
      "Todas as Carteiras de Trabalho (CTPS físicas e digital)",
      "Carnês e guias de recolhimento previdenciário (GPS) para autônomos",
      "Extrato analítico completo do CNIS emitido pelo Meu INSS",
      "Perfil Profissiográfico Previdenciário (PPP) e LTCAT para períodos especiais",
    ],
    whatsappMessage: "Olá! Gostaria de uma análise detalhada para a minha Aposentadoria.",
  },
  {
    id: "pensao-morte",
    title: "Pensão por morte",
    category: "maternidade",
    categoryLabel: "Maternidade & Família",
    badge: "Proteção Familiar",
    icon: ShieldAlert,
    overview:
      "Benefício previdenciário pago aos dependentes do segurado falecido para assegurar a manutenção da subsistência da família, com acolhimento humano e rigor técnico documental.",
    targetAudience:
      "Viúvas e viúvos, companheiros(as) em união estável, filhos menores de 21 anos ou inválidos, e pais sob dependência econômica comprovada.",
    analysisPoints: [
      "Confirmação da qualidade de segurado do falecido na data do óbito (inclusive período de graça)",
      "Comprovação consistente de união estável para casais sem certidão de casamento formal",
      "Cálculo exato das cotas familiares e verificação da duração legal do benefício conforme a idade do cônjuge",
      "Reunião de provas documentais para comprovar dependência econômica quando exigida pela lei",
    ],
    recommendedDocuments: [
      "Certidão de óbito do instituidor da pensão",
      "Documentos pessoais do falecido e de todos os dependentes que solicitam o amparo",
      "Certidão de casamento ou conjunto de provas de união estável (endereço conjunto, contas, filhos)",
      "Carteira de Trabalho ou extrato de contribuições do segurado falecido",
    ],
    whatsappMessage: "Olá! Preciso de orientação jurídica sobre Pensão por morte.",
  },
  {
    id: "auxilio-incapacidade",
    title: "Auxílio por incapacidade (Temporária & Permanente)",
    category: "incapacidade",
    categoryLabel: "Incapacidade & Saúde",
    badge: "Incapacidade & Doença",
    icon: HeartPulse,
    overview:
      "Suporte jurídico ao segurado que se encontra impedido de exercer suas funções habituais em virtude de enfermidade ou acidente, preparando o conjunto probatório para a perícia médica.",
    targetAudience:
      "Trabalhadores com carteira assinada, autônomos, MEI, trabalhadores rurais e pescadores que apresentam limitações de saúde comprovadas por médicos.",
    analysisPoints: [
      "Manutenção da qualidade de segurado e apuração de carência de 12 contribuições (quando exigida)",
      "Enquadramento em casos de isenção de carência (acidentes de qualquer natureza ou doenças graves)",
      "Análise da coerência e robustez dos laudos médicos e exames frente aos critérios periciais do INSS",
      "Diferenciação técnica entre auxílio temporário (auxílio-doença) e aposentadoria por incapacidade permanente",
    ],
    recommendedDocuments: [
      "Laudo médico circunstanciado com CID, histórico do tratamento e indicação do tempo de afastamento",
      "Exames de imagem, relatórios laboratoriais e prontuários médicos recentes",
      "Receituários médicos atualizados e comprovantes de medicamentos em uso",
      "Comunicação de Acidente de Trabalho (CAT) se a incapacidade tiver relação com a atividade profissional",
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre Auxílio por incapacidade temporária ou permanente.",
  },
  {
    id: "bpc-loas",
    title: "BPC / LOAS (Benefício Assistencial)",
    category: "incapacidade",
    categoryLabel: "Incapacidade & Saúde",
    badge: "Amparo Social",
    icon: Scale,
    overview:
      "Benefício assistencial de um salário mínimo mensal concedido a pessoas que não possuem meios de prover a própria subsistência e nem de tê-la provida pela sua família, independentemente de terem contribuído ao INSS.",
    targetAudience:
      "Idosos a partir de 65 anos de idade ou Pessoas com Deficiência (PcD) de qualquer faixa etária em situação de vulnerabilidade socioeconômica.",
    analysisPoints: [
      "Regularidade cadastral e atualização dos dados do núcleo familiar no Cadastro Único (CadÚnico)",
      "Apuração da renda per capita familiar e aplicação de deduções legais com gastos contínuos de saúde",
      "Comprovação de impedimento de longo prazo (mínimo de 2 anos) de natureza física, mental ou sensorial",
      "Orientação preventiva para a avaliação social e perícia médica obrigatórias",
    ],
    recommendedDocuments: [
      "Folha de resumo do Cadastro Único (CadÚnico) devidamente atualizada no CRAS",
      "Documentos de identificação (RG e CPF) de todos os membros que residem no mesmo domicílio",
      "Comprovantes de rendimentos ou declarações de ausência de renda de todos os membros da família",
      "Laudos médicos, receitas e comprovantes de despesas regulares com tratamentos médicos contínuos",
    ],
    whatsappMessage: "Olá! Gostaria de orientações sobre BPC/LOAS para idoso ou pessoa com deficiência.",
  },
  {
    id: "planejamento-cnis",
    title: "Planejamento Previdenciário & Acerto de CNIS",
    category: "planejamento",
    categoryLabel: "Planejamento & Acertos",
    badge: "Diagnóstico Preventivo",
    icon: FileText,
    overview:
      "Estudo detalhado e preventivo de todo o histórico contributivo para simular cenários futuros, corrigir indicadores de pendência no Meu INSS e definir o momento mais vantajoso para o pedido.",
    targetAudience:
      "Segurados que desejam se programar financeiramente, empresários, autônomos e qualquer trabalhador com pendências cadastrais no extrato do INSS.",
    analysisPoints: [
      "Identificação e saneamento de indicadores de erro no extrato previdenciário (PEXT, PREM-RET, AEXT-VI)",
      "Regularização de períodos sem data de encerramento de vínculo ou recolhimentos abaixo do piso",
      "Simulação de retorno financeiro para guiar o valor ideal de futuras contribuições",
      "Definição da melhor data para requerimento com o maior benefício financeiro possível",
    ],
    recommendedDocuments: [
      "Extrato analítico completo do CNIS com todas as remunerações históricas",
      "Todas as Carteiras de Trabalho e termos de rescisão de contrato de trabalho",
      "Comprovantes de recolhimento como autônomo, MEI ou facultativo",
      "Contracheques antigos para comprovação de valores que não constam no sistema",
    ],
    whatsappMessage: "Olá! Gostaria de solicitar um Planejamento Previdenciário com acerto do meu CNIS.",
  },
  {
    id: "recursos-negativas",
    title: "Recursos Administrativos e Ações Judiciais",
    category: "planejamento",
    categoryLabel: "Planejamento & Acertos",
    badge: "Reversão de Negativas",
    icon: HelpCircle,
    overview:
      "Atuação técnica contra decisões desfavoráveis do INSS em casos de pedidos indeferidos, benefícios cessados indevidamente ou valores concedidos abaixo do correto.",
    targetAudience:
      "Segurados que tiveram requerimentos negados administrativamente ou buscam restabelecimento de benefício por via judicial.",
    analysisPoints: [
      "Leitura minuciosa da fundamentação jurídica contida na carta de indeferimento do INSS",
      "Avaliação de cabimento de recurso administrativo perante o Conselho de Recursos da Previdência (CRPS)",
      "Análise da viabilidade de ação perante a Justiça Federal com pedido de tutela de urgência",
      "Organização de novos elementos probatórios para suprir as exigências apontadas pelo órgão",
    ],
    recommendedDocuments: [
      "Cópia integral do processo administrativo baixado pelo portal Meu INSS",
      "Carta de indeferimento ou comunicação de cessação de benefício",
      "Toda a documentação que já havia sido protocolada no pedido original",
      "Novos documentos, laudos ou declarações capazes de sanar a exigência do INSS",
    ],
    whatsappMessage: "Olá! Meu benefício foi indeferido no INSS e gostaria de uma orientação jurídica.",
  },
];

const FILTER_TABS: { id: ServiceCategory; label: string }[] = [
  { id: "todos", label: "Todos os serviços" },
  { id: "maternidade", label: "Salário-maternidade & Família" },
  { id: "defeso", label: "Seguro-defeso & Pesca" },
  { id: "aposentadorias", label: "Aposentadorias" },
  { id: "incapacidade", label: "Incapacidade & BPC/LOAS" },
  { id: "planejamento", label: "Planejamento & Recursos" },
];

const serviceFaqItems = [
  {
    question: "Como funciona a triagem e o primeiro atendimento pelo WhatsApp?",
    answer:
      "Você entra em contato pelo nosso WhatsApp relatando resumidamente o seu caso ou o benefício que deseja consultar. Nossa equipe realiza uma escuta atenta, verifica quais documentos são necessários para a análise inicial e orienta sobre os próximos passos de forma transparente, técnica e responsável.",
  },
  {
    question: "O que fazer se o meu benefício já foi negado pelo INSS?",
    answer:
      "Quando um benefício é indeferido, é fundamental ter em mãos a carta de indeferimento e a cópia do processo administrativo no Meu INSS para entender o motivo exato da negativa (ex: falta de carência, pendência no CNIS ou questão pericial). A partir dessa análise, verificamos se o caminho mais adequado é um recurso administrativo ou uma ação perante a Justiça Federal.",
  },
  {
    question: "Como pescadores e trabalhadores rurais comprovam o tempo de atividade?",
    answer:
      "Para os segurados especiais (pesca artesanal e trabalhadores rurais), a comprovação exige um conjunto harmonioso de documentos da época dos fatos: licença de pesca (RGP), notas de venda de pescado ou produtor, certidões de casamento/nascimento com menção à profissão, declarações sindicais e comprovante de residência na comunidade.",
  },
  {
    question: "Qual a vantagem de fazer o planejamento antes de dar entrada no pedido?",
    answer:
      "O planejamento previdenciário identifica pendências no extrato do CNIS antes do protocolo, evitando que o benefício seja concedido com valor reduzido ou negado por documentação incompleta. Além disso, permite calcular em qual regra de transição você alcançará o melhor resultado financeiro.",
  },
  {
    question: "O escritório atende apenas em Salinópolis ou também a distância?",
    answer:
      "Atendemos de forma presencial em nosso escritório físico em Salinópolis/PA e também de forma digital para clientes de todo o Brasil. O contato por WhatsApp e telefone permite o envio seguro de documentos com atendimento humanizado, próximo e responsável.",
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
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("todos");

  const filteredServices = DETAILED_SERVICES.filter(
    (service) => activeCategory === "todos" || service.category === activeCategory
  );

  useEffect(() => {
    const previousTitle = document.title;
    const description = setMeta(
      'meta[name="description"]',
      "name",
      "Serviços de advocacia previdenciária em Salinópolis, PA: aposentadorias, salário-maternidade, seguro-defeso, pensão por morte e análise previdenciária responsável."
    );
    const ogTitle = setMeta(
      'meta[property="og:title"]',
      "property",
      "Serviços previdenciários em Salinópolis, PA | Karlla Pinheiro e Keyteler Leite"
    );
    const ogDescription = setMeta(
      'meta[property="og:description"]',
      "property",
      "Orientação jurídica previdenciária com análise individual e atendimento responsável em Salinópolis, Pará."
    );
    const canonical =
      document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
      document.createElement("link");
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
      telephone: CONTACT_PHONE_CONFIRMED,
      description:
        "Serviços de advocacia previdenciária com atendimento responsável em Salinópolis, Pará.",
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
      serviceType: DETAILED_SERVICES.map((service) => service.title),
      sameAs: [INSTAGRAM_URL],
    });

    document.title =
      "Serviços previdenciários em Salinópolis, PA | Karlla Pinheiro e Keyteler Leite";
    document.head.appendChild(structuredData);

    const revealNodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    let observer: IntersectionObserver | null = null;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );
      revealNodes.forEach((node) => observer?.observe(node));
    }

    return () => {
      observer?.disconnect();
      document.title = previousTitle;
      structuredData.remove();
      description.content =
        "Karlla Pinheiro e Keyteler Leite Sociedade de Advogadas: advocacia previdenciária com atendimento responsável, cuidadoso e próximo em Salinópolis, Pará.";
      ogTitle.content = "Karlla Pinheiro e Keyteler Leite | Sociedade de Advogadas";
      ogDescription.content =
        "Advocacia previdenciária com responsabilidade, cuidado e compromisso em Salinópolis, Pará.";
      canonical.href = `${SITE_URL}/`;
    };
  }, []);

  return (
    <div className="site-shell services-page">
      <Header items={pageNavItems} brandHref={internalHref("/")} />

      <main>
        {/* =========================================================================
            Hero Section — Especializada em Serviços Previdenciários
            Paleta Vinho Editorial idêntica à página principal, com foco direto na atuação.
            ========================================================================= */}
        <section id="inicio" className="hero-section">
          <div className="hero-texture" aria-hidden="true" />
          <div className="site-container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Advocacia Previdenciária Especializada · Salinópolis & Atuação Nacional</p>
              <h1>
                Serviços previdenciários com <em>rigor técnico</em> e clareza.
              </h1>
              <p className="hero-lead hero-lead-national">
                <span>
                  Serviços previdenciários em Salinópolis, PA com análise minuciosa de cada benefício do INSS,
                  requisitos legais e documentação necessária. Atendimento presencial e consultoria
                  em todo o Brasil para proteger o seu direito.
                </span>
              </p>
              <div className="hero-actions">
                <SiteButton
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                >
                  <MessageCircle size={18} aria-hidden="true" /> Tirar dúvida no WhatsApp
                  <ArrowUpRight size={15} aria-hidden="true" />
                </SiteButton>
                <a className="text-link text-link-light" href="#servicos-detalhados">
                  Explorar os serviços <ArrowDownRight size={16} aria-hidden="true" />
                </a>
                <p className="hero-contact-note">
                  <Phone size={14} aria-hidden="true" /> WhatsApp e telefone: {PHONE_DISPLAY}
                </p>
              </div>
            </div>

            <div className="hero-visual" data-reveal style={{ transitionDelay: "140ms" }}>
              <div className="hero-image-wrap">
                <picture>
                  <source srcSet={TEAM_PHOTO} type="image/webp" />
                  <img
                    className="hero-image"
                    src={TEAM_PHOTO}
                    alt="Retrato oficial das advogadas Karlla Pinheiro e Keyteler Leite"
                    width="1122"
                    height="1402"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="hero-image-caption" aria-live="polite">
                <span>01</span>
                <span>Sociedade de Advogadas · Karlla Pinheiro e Keyteler Leite</span>
              </div>
            </div>
          </div>

          <div
            className="hero-bottom-note site-container"
            data-reveal
            style={{ transitionDelay: "260ms" }}
          >
            <span>Atendimento individualizado</span>
            <span>Salinópolis / PA</span>
            <span>Atuação nacional</span>
          </div>
        </section>

        {/* =========================================================================
            Seção de Serviços Detalhados (O Núcleo da Página)
            Sem repetições de outras seções da Home: foco 100% no aprofundamento prático.
            ========================================================================= */}
        <section id="servicos-detalhados" className="services-detail-section">
          <div className="site-container">
            <div className="services-detail-header" data-reveal>
              <SectionMarker number="01" label="Serviços Previdenciários" />
              <p className="section-kicker">Catálogo Técnico e Orientativo de Atuação</p>
              <h2>
                Cada benefício possui requisitos, prazos e <em>documentos específicos</em>.
              </h2>
              <p className="practice-intro-note">
                Selecionamos e detalhamos as principais áreas previdenciárias atendidas pelo escritório.
                Entenda o que a lei exige e como é feita a análise responsável de cada caso.
              </p>

              {/* Filtro por abas de categorias */}
              <div className="services-filter-pills" role="tablist" aria-label="Filtrar serviços previdenciários">
                {FILTER_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === tab.id}
                    className={`service-filter-btn ${activeCategory === tab.id ? "is-active" : ""}`}
                    onClick={() => setActiveCategory(tab.id)}
                  >
                    <Filter size={13} aria-hidden="true" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Grid com os cards aprofundados dos serviços */}
            <div className="services-detail-grid" aria-label="Lista de serviços previdenciários detalhados">
              {filteredServices.map((service) => {
                const Icon = service.icon;
                const waUrl = `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${encodeURIComponent(
                  service.whatsappMessage
                )}`;

                return (
                  <article className="service-detail-card" key={service.id}>
                    <div className="service-detail-top">
                      <span className="service-detail-icon-wrap" aria-hidden="true">
                        <Icon size={21} />
                      </span>
                      <span className="service-detail-badge">{service.badge}</span>
                    </div>

                    <h3 className="service-detail-title">{service.title}</h3>
                    <p className="service-detail-overview">{service.overview}</p>

                    <div className="service-detail-target">
                      <strong>Para quem é:</strong>
                      <span>{service.targetAudience}</span>
                    </div>

                    <div className="service-detail-subblock">
                      <h4 className="service-detail-subblock-title">
                        <CheckCircle2 size={14} aria-hidden="true" />
                        <span>O que o escritório analisa neste caso:</span>
                      </h4>
                      <ul className="service-detail-checklist">
                        {service.analysisPoints.map((point, idx) => (
                          <li key={idx}>
                            <Check size={14} aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-detail-subblock">
                      <h4 className="service-detail-subblock-title">
                        <FileText size={14} aria-hidden="true" />
                        <span>Documentos essenciais recomendados:</span>
                      </h4>
                      <ul className="service-detail-checklist">
                        {service.recommendedDocuments.map((doc, idx) => (
                          <li key={idx}>
                            <Check size={14} aria-hidden="true" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-detail-actions">
                      <a
                        className="service-detail-cta"
                        href={waUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Orientação sobre ${service.title}`}
                      >
                        <MessageCircle size={16} aria-hidden="true" />
                        <span>Consultar meu direito neste benefício</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Triagem integrada para quem tem dúvidas sobre qual benefício solicitar */}
            <div id="triagem" className="practice-screener-divider" data-reveal style={{ marginTop: "72px" }}>
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

        {/* =========================================================================
            Perguntas Frequentes sobre os Serviços Previdenciários
            ========================================================================= */}
        <section id="duvidas" className="section section-wine faq-section">
          <div className="site-container">
            <SectionMarker light number="02" label="Dúvidas frequentes" />
            <div className="faq-header" data-reveal>
              <p className="section-kicker">Respostas diretas · Procedimentos & Atendimento</p>
              <h2>
                Dúvidas comuns sobre <em>atendimento e procedimentos</em>
              </h2>
              <p className="faq-subtitle">
                Respostas orientativas para você compreender como o escritório atua e como se preparar
                antes de solicitar a sua análise.
              </p>
            </div>

            <div className="faq-accordion-wrap" data-reveal>
              <Accordion type="single" collapsible className="faq-accordion">
                {serviceFaqItems.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="faq-item">
                    <AccordionTrigger className="faq-question">
                      <span>{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="faq-answer">
                      <p>{item.answer}</p>
                      <a
                        className="faq-whatsapp-link"
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageCircle size={14} aria-hidden="true" />
                        <span>Falar sobre a minha situação</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* =========================================================================
            Atendimento & Localização Oficial
            ========================================================================= */}
        <section id="atendimento" className="section section-paper contact-section">
          <div className="site-container">
            <div className="contact-header" data-reveal>
              <SectionMarker number="03" label="Atendimento" />
              <p className="section-kicker">Primeiro contato · Sem compromisso</p>
              <h2>
                Vamos analisar o seu caso com a <em>atenção que ele exige</em>.
              </h2>
              <p className="contact-lead">
                Atendimento inicial pelo WhatsApp com análise responsável do seu caso, ou envie sua mensagem pelo formulário abaixo. Atendimento presencial em Salinópolis e consultoria em todo o Brasil.
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
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-phone-link"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="location-panel">
                  <div className="map-frame">
                    <a
                      className="map-fallback"
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Abrir a localização da sociedade no Google Maps"
                    >
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
                    <MapPin size={18} aria-hidden="true" />
                    <div>
                      <strong>Onde estamos</strong>
                      <address>
                        Avenida Modesto da Encarnação Rodrigues, 756 — Bom Jesus
                        <br />
                        Salinópolis — PA, 68721-000
                      </address>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="map-action-link"
                      >
                        Abrir no Google Maps <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="contact-form-col"
                data-reveal
                style={{ transitionDelay: "110ms" }}
              >
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Botão flutuante de WhatsApp oficial */}
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

      <Footer homeHref={internalHref("/")} />
    </div>
  );
}
