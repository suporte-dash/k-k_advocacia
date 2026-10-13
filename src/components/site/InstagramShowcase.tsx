/**
 * Destaque da Presença Digital Oficial — Instagram Showcase com Reels Reais
 * 
 * Implementação editorial de alto padrão:
 * - Banner institucional oficial (@karllaekeyteleradvogadas) com avatar do logotipo e selo verificado
 * - Grade de 4 Reels reais gravados pelas advogadas (formato vertical 9:16)
 * - Player de vídeo nativo de alta performance com controles de Play/Pause, Mute/Unmute e progresso
 * - Conexão direta de cada vídeo com WhatsApp (mensagem personalizada) e link para o perfil oficial
 */
import { useState, useRef, useEffect } from "react";
import {
  Instagram,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Check,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Video,
} from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL, INSTAGRAM_AVATAR, ASSET_BASE } from "./site-config";

const PROFILE_AVATAR = INSTAGRAM_AVATAR;

interface ReelItem {
  id: string;
  videoSrc: string;
  tag: string;
  formatBadge: string;
  speaker: string;
  speakerRole: string;
  title: string;
  summary: string;
  whatsappMessage: string;
  durationLabel: string;
}

const REEL_ITEMS: ReelItem[] = [
  {
    id: "reel-perguntas",
    videoSrc: `${ASSET_BASE}reel-perguntas-previdencia.mp4`,
    tag: "Dúvidas Frequentes",
    formatBadge: "Reel Oficial · Q&A",
    speaker: "Dra. Karlla & Dra. Keyteler",
    speakerRole: "Advogadas Previdenciaristas",
    title: "5 Dúvidas Rápidas sobre Previdência e INSS",
    summary:
      "Aposentadoria sem carteira assinada, contagem de maternidade, benefício negado e requisitos para o trabalhador rural.",
    whatsappMessage:
      "Olá, Dra. Karlla e Dra. Keyteler! Assisti ao Reel de Perguntas Rápidas sobre Previdência no site e gostaria de orientações sobre o meu caso.",
    durationLabel: "1:07",
  },
  {
    id: "reel-bpc",
    videoSrc: `${ASSET_BASE}reel-bpc-loas-idoso.mp4`,
    tag: "BPC / LOAS",
    formatBadge: "Reel Oficial · Idoso (65+)",
    speaker: "Dra. Karlla & Dra. Keyteler",
    speakerRole: "Benefício Assistencial",
    title: "Tem 65 anos ou mais e nunca contribuiu para o INSS?",
    summary:
      "Entenda quem tem direito ao BPC/LOAS, o requisito da idade mínima de 65 anos e como funciona a comprovação de renda familiar.",
    whatsappMessage:
      "Olá, doutoras! Assisti ao Reel sobre o BPC/LOAS para idosos de 65 anos no site e gostaria de saber se eu ou um familiar temos direito ao benefício.",
    durationLabel: "0:32",
  },
  {
    id: "reel-maternidade",
    videoSrc: `${ASSET_BASE}reel-salario-maternidade.mp4`,
    tag: "Salário-Maternidade",
    formatBadge: "Reel Oficial · Recurso",
    speaker: "Dra. Karlla Pinheiro",
    speakerRole: "Direito das Mães e Família",
    title: "Teve filho nos últimos 5 anos e o benefício foi negado?",
    summary:
      "O 'não' do INSS não precisa ser o fim da história: orientações sobre como reanalisar a negativa e buscar o reconhecimento do seu direito.",
    whatsappMessage:
      "Olá, Dra. Karlla! Assisti ao Reel sobre Salário-Maternidade negado nos últimos 5 anos e gostaria de solicitar uma análise da negativa do meu pedido.",
    durationLabel: "0:45",
  },
  {
    id: "reel-defeso",
    videoSrc: `${ASSET_BASE}reel-pescador-seguro-defeso.mp4`,
    tag: "Seguro-Defeso",
    formatBadge: "Reel Oficial · Salinópolis",
    speaker: "Dra. Keyteler Leite",
    speakerRole: "Direitos da Pesca Artesanal",
    title: "Pescador artesanal que ainda não recebe o Seguro-Defeso",
    summary:
      "Direto do Farol de Salinas: orientações essenciais sobre cadastramento e regularização para ter o direito garantido na época do defeso.",
    whatsappMessage:
      "Olá, Dra. Keyteler! Assisti ao Reel gravado em Salinópolis sobre Seguro-Defeso para pescadores e gostaria de verificar minha documentação.",
    durationLabel: "0:12",
  },
];

interface ReelCardProps {
  reel: ReelItem;
  isActive: boolean;
  isMuted: boolean;
  onTogglePlay: () => void;
  onToggleMute: (e: React.MouseEvent) => void;
  onEnded: () => void;
}

function ReelCard({
  reel,
  isActive,
  isMuted,
  onTogglePlay,
  onToggleMute,
  onEnded,
}: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
  }, [isMuted]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setHasStarted(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
    }
    setIsPlaying(false);
    onEnded();
  };

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("a") ||
      target.closest("button.reel-sound-btn") ||
      target.closest(".reel-actions")
    ) {
      return;
    }
    onTogglePlay();
  };

  return (
    <article
      className={`reel-card ${isActive ? "is-active" : ""} ${isPlaying ? "is-playing" : ""}`}
      onClick={handleCardClick}
    >
      <div className="reel-media-wrapper">
        <video
          ref={videoRef}
          src={reel.videoSrc}
          playsInline
          preload="metadata"
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          onEnded={handleVideoEnded}
          className="reel-video-element"
        />

        {/* Linha de progresso de reprodução */}
        <div className="reel-progress-track">
          <div className="reel-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Barra superior de controles sobre o vídeo */}
        <div className="reel-top-bar">
          <span className="reel-tag-pill">{reel.tag}</span>
          <button
            type="button"
            className={`reel-sound-btn ${!isMuted ? "is-unmuted" : ""}`}
            onClick={onToggleMute}
            aria-label={isMuted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
            title={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            <span>{isMuted ? "Sem som" : "Com som"}</span>
          </button>
        </div>

        {/* Botão de Play central */}
        <div className={`reel-play-overlay ${isPlaying ? "is-playing" : ""}`}>
          <div className="reel-play-circle" aria-hidden="true">
            {isPlaying ? (
              <Pause size={20} className="reel-play-icon" />
            ) : (
              <Play size={22} className="reel-play-icon is-play" />
            )}
          </div>
          {!hasStarted && <span className="reel-play-hint">Clique para assistir</span>}
        </div>

        {/* Painel inferior com informações e chamadas para ação */}
        <div className="reel-bottom-panel">
          <div className="reel-speaker-row">
            <CheckCircle2 size={12} className="reel-verified-icon" aria-hidden="true" />
            <strong className="reel-speaker-name">{reel.speaker}</strong>
            <span className="reel-speaker-role">· {reel.speakerRole}</span>
          </div>

          <h3 className="reel-title">{reel.title}</h3>

          <div className="reel-actions" onClick={(e) => e.stopPropagation()}>
            <a
              href={`https://wa.me/559191620280?text=${encodeURIComponent(reel.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="reel-whatsapp-link"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Tirar dúvida no WhatsApp sobre ${reel.title}`}
            >
              <MessageCircle size={15} aria-hidden="true" />
              <span>Tirar dúvida sobre o tema</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="reel-ig-link"
              onClick={(e) => e.stopPropagation()}
              title="Ver publicação no Instagram"
              aria-label="Ver publicação oficial no Instagram"
            >
              <Instagram size={14} aria-hidden="true" />
              <span>Ver no Instagram</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function InstagramShowcase() {
  const [activeReelId, setActiveReelId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleTogglePlay = (reelId: string) => {
    setActiveReelId((prev) => (prev === reelId ? null : reelId));
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  return (
    <section className="instagram-section" aria-labelledby="instagram-showcase-title">
      <div className="site-container">
        {/* Cabeçalho de Seção Editorial de Luxo */}
        <div className="instagram-header" data-reveal>
          <div className="instagram-editorial-marker" aria-label="Presença digital oficial no Instagram">
            <span className="instagram-marker-icon-pill">
              <Instagram size={13} aria-hidden="true" />
              <span>Presença Digital</span>
            </span>
            <span className="instagram-marker-line" aria-hidden="true" />
            <span className="instagram-marker-label">Canal Oficial</span>
          </div>

          <p className="section-kicker">Orientações em vídeo · Salinópolis & Atuação Nacional</p>

          <h2 id="instagram-showcase-title">
            Acompanhe nossas orientações no <em>Instagram</em>.
          </h2>

          <p className="instagram-subtitle">
            Vídeos explicativos e esclarecimentos práticos sobre benefícios previdenciários, novidades do INSS e respostas a dúvidas fundamentais de trabalhadores e famílias em Salinópolis e em todo o Brasil.
          </p>
        </div>

        {/* Banner Institucional do Perfil Oficial */}
        <div className="instagram-profile-banner" data-reveal>
          <div className="instagram-profile-left">
            <div className="instagram-avatar-ring">
              <img
                src={PROFILE_AVATAR}
                alt="Logotipo oficial de Karlla Pinheiro & Keyteler Leite Advogadas"
                className="instagram-avatar-img"
                width="64"
                height="64"
                loading="lazy"
              />
            </div>
            <div className="instagram-profile-info">
              <div className="instagram-profile-kicker">
                <span>Perfil Institucional Oficial</span>
              </div>
              <div className="instagram-profile-handle-row">
                <strong className="instagram-profile-handle">@karllaekeyteleradvogadas</strong>
                <span className="instagram-verified-badge" title="Perfil verificado no Instagram">
                  <svg
                    viewBox="0 0 40 40"
                    width="18"
                    height="18"
                    aria-label="Perfil verificado no Instagram"
                    role="img"
                    className="instagram-verified-icon"
                  >
                    <path
                      d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Z"
                      fill="#0095f6"
                    />
                    <path
                      d="m18.25 25.82-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18 2.254 2.287-11.43 11.5Z"
                      fill="#ffffff"
                    />
                  </svg>
                </span>
              </div>
              <p className="instagram-profile-bio">
                Advocacia Previdenciária · Atendimento em Salinópolis/PA e atuação nacional
              </p>
            </div>
          </div>

          <div className="instagram-profile-actions">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="button button-instagram-main"
            >
              <Instagram size={16} aria-hidden="true" />
              <span>Seguir no Instagram</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Barra de Instrução / Destaque de Vídeos */}
        <div className="reels-section-heading" data-reveal>
          <div className="reels-heading-left">
            <Video size={16} className="reels-heading-icon" aria-hidden="true" />
            <h3 className="reels-heading-title">Reels em Destaque</h3>
            <span className="reels-heading-count">4 vídeos informativos</span>
          </div>
          <span className="reels-heading-hint">Clique em qualquer vídeo para assistir</span>
        </div>

        {/* Grade de Reels Verticais (Proporção 9:16) */}
        <div className="instagram-reels-grid" data-reveal>
          {REEL_ITEMS.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              isActive={activeReelId === reel.id}
              isMuted={isMuted}
              onTogglePlay={() => handleTogglePlay(reel.id)}
              onToggleMute={handleToggleMute}
              onEnded={() => setActiveReelId(null)}
            />
          ))}
        </div>

        {/* Barra de Fechamento Integrada ao WhatsApp — Edição Editorial de Luxo */}
        <div className="instagram-bottom-cta" data-reveal>
          <div className="instagram-bottom-badge-column">
            <div className="instagram-bottom-icon-badge" aria-hidden="true">
              <Sparkles size={22} className="instagram-sparkle-icon" />
            </div>
          </div>

          <div className="instagram-bottom-copy">
            <div className="instagram-bottom-kicker">
              <span>Orientação Jurídica Direta</span>
            </div>
            <h3 className="instagram-bottom-title">
              Dúvidas sobre o seu <em>caso específico</em>?
            </h3>
            <p>
              Além das orientações em vídeo no feed, você pode conversar diretamente com as advogadas para uma análise individual, transparente e sigilosa dos seus documentos.
            </p>
            <div className="instagram-bottom-perks">
              <span className="instagram-perk-item">
                <Check size={13} className="instagram-perk-icon" aria-hidden="true" />
                <span>Atendimento humanizado</span>
              </span>
              <span className="instagram-perk-item">
                <Check size={13} className="instagram-perk-icon" aria-hidden="true" />
                <span>Análise documental sigilosa</span>
              </span>
              <span className="instagram-perk-item">
                <Check size={13} className="instagram-perk-icon" aria-hidden="true" />
                <span>Salinópolis & Atuação Nacional</span>
              </span>
            </div>
          </div>

          <div className="instagram-bottom-buttons">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="button button-wine instagram-cta-btn-wa"
            >
              <MessageCircle size={16} aria-hidden="true" />
              <span>Tirar dúvida no WhatsApp</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="button button-outline-team instagram-cta-btn-ig"
            >
              <Instagram size={16} aria-hidden="true" />
              <span>Acessar perfil no Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
