import { Instagram, ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "./site-config";

const INSTAGRAM_POSTS = [
  {
    category: "Direito Previdenciário",
    tag: "Aposentadorias",
    title: "Como comprovar a atividade rural ou de pesca artesanal perante o INSS?",
    summary: "Documentos indispensáveis para quem trabalhou no campo ou nas águas e precisa do reconhecimento de tempo.",
  },
  {
    category: "Amparo à Família",
    tag: "Salário-Maternidade",
    title: "Trabalhadora rural, pescadora, MEI ou desempregada tem direito?",
    summary: "Esclarecimentos sobre carência, qualidade de segurada e prazos para requerer o salário-maternidade.",
  },
  {
    category: "Pesca Artesanal",
    tag: "Seguro-Defeso",
    title: "Documentação e requisitos durante o defeso na região do Salgado",
    summary: "Orientações orientativas para garantir o benefício com tranquilidade durante a paralisação da pesca.",
  },
];

export default function InstagramShowcase() {
  return (
    <section className="instagram-section" aria-labelledby="instagram-showcase-title">
      <div className="site-container">
        <div className="instagram-header" data-reveal>
          <div className="instagram-badge">
            <Instagram size={14} aria-hidden="true" />
            <span>Presença Digital Oficial</span>
          </div>
          <h2 id="instagram-showcase-title">Acompanhe nossas orientações no Instagram</h2>
          <p className="instagram-subtitle">
            Publicamos atualizações frequentes sobre direitos previdenciários, novidades do INSS e
            respostas a dúvidas práticas de trabalhadores e famílias em Salinópolis e em todo o Brasil.
          </p>
        </div>

        <div className="instagram-grid" data-reveal>
          {INSTAGRAM_POSTS.map((post) => (
            <article className="instagram-card" key={post.title}>
              <div className="instagram-card-top">
                <span className="instagram-card-tag">{post.tag}</span>
                <span className="instagram-card-cat">{post.category}</span>
              </div>
              <h3 className="instagram-card-title">{post.title}</h3>
              <p className="instagram-card-summary">{post.summary}</p>
              <div className="instagram-card-footer">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="instagram-card-link"
                >
                  <Instagram size={14} aria-hidden="true" />
                  <span>Ver publicação</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="instagram-cta-bar" data-reveal>
          <div className="instagram-stats">
            <strong>@karllaekeyteleradvogadas</strong>
            <span>Publicações informativas e atendimento humanizado</span>
          </div>
          <div className="instagram-actions">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="button button-instagram"
            >
              <Instagram size={16} aria-hidden="true" />
              <span>Seguir no Instagram</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="button button-outline-team"
            >
              <MessageCircle size={15} aria-hidden="true" />
              <span>Tirar dúvida por mensagem</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
