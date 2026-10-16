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
  MessageCircle,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Video,
  ChevronLeft,
  ChevronRight,
  X,
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
          preload="auto"
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
              <ArrowUpRight size={13} aria-hidden="true" className="reel-cta-arrow" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

interface ReelModalViewerProps {
  reels: ReelItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function ReelModalViewer({
  reels,
  currentIndex,
  onClose,
  onNavigate,
}: ReelModalViewerProps) {
  const currentReel = reels[currentIndex];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPlayPulse, setShowPlayPulse] = useState(false);

  const touchStartY = useRef(0);
  const touchStartX = useRef(0);

  // Bloqueia a rolagem da página ao fundo enquanto o visualizador estiver aberto
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Atalhos de teclado (Esc para fechar, setas para navegar, espaço para play/pause, M para som)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (currentIndex > 0) onNavigate(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (currentIndex < reels.length - 1) onNavigate(currentIndex + 1);
      } else if (e.key === " " || e.key === "k") {
        e.preventDefault();
        togglePlay();
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        setIsMuted((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, reels.length, onClose, onNavigate]);

  // Carrega e reproduz o novo vídeo ao trocar de slide
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setProgress(0);
    video.currentTime = 0;
    video.muted = isMuted;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay fallback caso a política do navegador requeira início mutado
          video.muted = true;
          setIsMuted(true);
          video
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        });
    }
  }, [currentIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
  }, [isMuted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
    setShowPlayPulse(true);
    setTimeout(() => setShowPlayPulse(false), 500);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleVideoEnded = () => {
    // Ao finalizar o vídeo, avança automaticamente para o próximo se houver
    if (currentIndex < reels.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    // Deslizar para baixo fecha o modal imersivo
    if (deltaY > 80 && Math.abs(deltaY) > Math.abs(deltaX)) {
      onClose();
      return;
    }

    // Deslizar para os lados navega entre os Reels
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0 && currentIndex < reels.length - 1) {
        onNavigate(currentIndex + 1);
      } else if (deltaX > 0 && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
    }
  };

  return (
    <div
      className="reel-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Visualizador do Reel: ${currentReel.title}`}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".reel-modal-card") && !target.closest(".reel-modal-nav-arrow")) {
          onClose();
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="reel-modal-shell"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (!target.closest(".reel-modal-card") && !target.closest(".reel-modal-nav-arrow")) {
            onClose();
          }
        }}
      >
        <div className="reel-modal-card-wrapper">
          {/* Botão lateral de navegação Anterior (Desktop / Tablet) */}
          {currentIndex > 0 && (
          <button
            type="button"
            className="reel-modal-nav-arrow is-prev"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex - 1);
            }}
            aria-label="Vídeo anterior"
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </button>
        )}

        <div
          className={`reel-modal-card ${isPlaying ? "is-playing" : "is-paused"}`}
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
        >
          {/* Vídeo Nativo de Alta Performance */}
          <video
            ref={videoRef}
            src={currentReel.videoSrc}
            playsInline
            preload="auto"
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            className="reel-modal-video"
          />

          {/* Linha de Progresso no Topo (Estilo Stories/Reels) */}
          <div className="reel-modal-progress-bar">
            <div
              className="reel-modal-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Barra Superior do Modal (Instagram Official Bar) */}
          <div className="reel-modal-top-bar" onClick={(e) => e.stopPropagation()}>
            <div className="reel-modal-creator-info">
              <img
                src={PROFILE_AVATAR}
                alt="Karlla Pinheiro & Keyteler Leite Advogadas"
                className="reel-modal-avatar"
                width="38"
                height="38"
              />
              <div className="reel-modal-handle-box">
                <div className="reel-modal-handle-row">
                  <span className="reel-modal-handle">@karllaekeyteleradvogadas</span>
                  <span className="reel-modal-verified" title="Perfil verificado">
                    <svg viewBox="0 0 40 40" width="14" height="14" role="img" aria-label="Verificado">
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
                <span className="reel-modal-format-badge">{currentReel.formatBadge}</span>
              </div>
            </div>

            <div className="reel-modal-top-actions">
              <button
                type="button"
                className={`reel-modal-icon-btn ${!isMuted ? "is-unmuted" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted((prev) => !prev);
                }}
                aria-label={isMuted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
                title={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              <button
                type="button"
                className="reel-modal-icon-btn is-close"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                aria-label="Fechar vídeo em tela cheia"
                title="Fechar (Esc)"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Indicador Central de Play / Pause com feedback tátil */}
          <div
            className={`reel-modal-play-indicator ${!isPlaying || showPlayPulse ? "is-visible" : ""}`}
            aria-hidden="true"
          >
            <div className="reel-modal-play-indicator-bubble">
              {isPlaying ? <Pause size={32} /> : <Play size={34} style={{ marginLeft: "4px" }} />}
            </div>
          </div>

          {/* Painel Inferior de Informações e Ações de Conversão */}
          <div
            className={`reel-modal-bottom-panel ${isPlaying ? "is-playing" : "is-paused"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="reel-modal-speaker-row">
              <CheckCircle2 size={13} className="reel-verified-icon" aria-hidden="true" />
              <strong className="reel-modal-speaker">{currentReel.speaker}</strong>
              <span className="reel-modal-role">· {currentReel.speakerRole}</span>
            </div>

            {/* Título do vídeo que desaparece durante a reprodução para liberar visualização das legendas gravadas no vídeo */}
            <h2 className={`reel-modal-title ${isPlaying ? "is-hidden" : ""}`}>
              {currentReel.title}
            </h2>

            {/* Legenda/resumo que desaparece durante a reprodução do vídeo para não obstruir a visualização */}
            <p className={`reel-modal-summary ${isPlaying ? "is-hidden" : ""}`}>
              {currentReel.summary}
            </p>

            <div className="reel-modal-actions">
              <a
                href={`https://wa.me/559191620280?text=${encodeURIComponent(currentReel.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="reel-modal-cta-wa"
                aria-label={`Tirar dúvida no WhatsApp sobre ${currentReel.title}`}
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span className="reel-modal-cta-text-desktop">Tirar dúvida no WhatsApp</span>
                <span className="reel-modal-cta-text-mobile">Tirar dúvida sobre o tema no WhatsApp</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="reel-modal-cta-ig"
                title="Acessar publicação oficial no Instagram"
              >
                <Instagram size={15} aria-hidden="true" />
                <span className="reel-modal-cta-text-desktop">Ver no Instagram</span>
                <span className="reel-modal-cta-text-mobile">Ver publicação no Instagram</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>

            {/* Dica de navegação e contador de vídeos */}
            <div className="reel-modal-footer-hint">
              <span>Vídeo {currentIndex + 1} de {reels.length}</span>
              <span className="reel-modal-dot-sep">·</span>
              <span className="reel-modal-hint-mobile">Deslize para baixo para fechar</span>
              <span className="reel-modal-hint-desktop">Esc ou clique fora para fechar</span>
            </div>
          </div>
        </div>

        {/* Botão lateral de navegação Próximo (Desktop / Tablet) */}
        {currentIndex < reels.length - 1 && (
          <button
            type="button"
            className="reel-modal-nav-arrow is-next"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex + 1);
            }}
            aria-label="Próximo vídeo"
          >
            <ChevronRight size={28} aria-hidden="true" />
          </button>
        )}
        </div>
      </div>
    </div>
  );
}

export default function InstagramShowcase() {
  const [activeReelId, setActiveReelId] = useState<string | null>(null);
  const [modalReelIndex, setModalReelIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleTogglePlay = (reelId: string) => {
    const index = REEL_ITEMS.findIndex((item) => item.id === reelId);
    if (index !== -1) {
      setModalReelIndex(index);
    }
    setActiveReelId(reelId);
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  const scrollToSlide = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(REEL_ITEMS.length - 1, index));
    const container = carouselRef.current;
    if (container) {
      const cards = container.querySelectorAll<HTMLElement>(".reel-card");
      if (cards[clampedIndex]) {
        cards[clampedIndex].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
    setActiveSlideIndex(clampedIndex);
    // Se outro vídeo estiver em reprodução, pausar para não sobrepor áudios
    if (activeReelId && REEL_ITEMS[clampedIndex].id !== activeReelId) {
      setActiveReelId(null);
    }
  };

  const handleNavigate = (direction: -1 | 1) => {
    scrollToSlide(activeSlideIndex + direction);
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const cards = container.querySelectorAll<HTMLElement>(".reel-card");
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

        setActiveSlideIndex(closestIdx);
      }, 50);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

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

        {/* Grade de Reels Verticais (Desktop: 4 Colunas | Mobile: Carrossel Horizontal com Snap) */}
        <div
          className="instagram-reels-grid reels-carousel-track"
          ref={carouselRef}
          data-reveal
        >
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

        {/* Controles do Carrossel (Visíveis exclusivamente no Mobile) */}
        <div className="reels-carousel-controls" aria-label="Navegação dos Reels">
          <div className="reels-carousel-nav">
            <button
              type="button"
              className="reels-carousel-arrow"
              onClick={() => handleNavigate(-1)}
              disabled={activeSlideIndex === 0}
              aria-label="Ver vídeo anterior"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            <div className="reels-carousel-dots" role="tablist" aria-label="Indicadores dos vídeos">
              {REEL_ITEMS.map((reel, idx) => (
                <button
                  key={reel.id}
                  type="button"
                  role="tab"
                  aria-selected={activeSlideIndex === idx}
                  aria-label={`Ir para o vídeo ${idx + 1} de ${REEL_ITEMS.length}: ${reel.title}`}
                  className={`reels-carousel-dot ${activeSlideIndex === idx ? "is-active" : ""}`}
                  onClick={() => scrollToSlide(idx)}
                />
              ))}
            </div>

            <button
              type="button"
              className="reels-carousel-arrow"
              onClick={() => handleNavigate(1)}
              disabled={activeSlideIndex === REEL_ITEMS.length - 1}
              aria-label="Ver próximo vídeo"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="reels-carousel-info">
            <span className="reels-carousel-counter">
              Vídeo <strong>{activeSlideIndex + 1}</strong> de {REEL_ITEMS.length}
            </span>
            <span className="reels-carousel-swipe-hint">
              ⇄ Deslize para navegar
            </span>
          </div>
        </div>

        {/* Barra de Fechamento Integrada — Edição Minimalista Editorial */}
        <div className="instagram-bottom-cta instagram-bottom-cta-minimal" data-reveal>
          <div className="instagram-minimal-copy">
            <h3 className="instagram-minimal-title">
              Dúvidas sobre o seu <em>caso específico</em>?
            </h3>
            <p className="instagram-minimal-desc">
              Converse diretamente com as advogadas titulares para uma análise individual e sigilosa dos seus documentos.
            </p>
          </div>

          <div className="instagram-minimal-actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="instagram-minimal-btn-wa"
              aria-label="Tirar dúvida sobre o seu caso pelo WhatsApp"
            >
              <MessageCircle size={16} aria-hidden="true" />
              <span>Conversar no WhatsApp</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="instagram-minimal-btn-ig"
              aria-label="Acessar o perfil oficial no Instagram"
            >
              <Instagram size={15} aria-hidden="true" />
              <span>Ver perfil no Instagram</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Visualizador Imersivo de Reel em Tela Cheia (Estilo Reels/Stories) */}
      {modalReelIndex !== null && (
        <ReelModalViewer
          reels={REEL_ITEMS}
          currentIndex={modalReelIndex}
          onClose={() => {
            setModalReelIndex(null);
            setActiveReelId(null);
          }}
          onNavigate={(index) => {
            setModalReelIndex(index);
            setActiveReelId(REEL_ITEMS[index].id);
            scrollToSlide(index);
          }}
        />
      )}
    </section>
  );
}
