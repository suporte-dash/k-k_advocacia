/**
 * Destaque da Presença Digital Oficial — Instagram Showcase com Card Fan Carousel 3D (GSAP)
 * 
 * Implementação editorial de alto padrão:
 * - 7 Reels reais gravados pelas advogadas em Salinópolis, Belém (Ver-o-Peso) e escritório
 * - Animação 3D em leque (Card Fan Carousel) com física elástica (GSAP elastic.out)
 * - Efeito interativo de hover spread: ao passar o mouse, as cartas vizinhas se abrem e a carta ativa sobe
 * - Player nativo com controles acessíveis de play/pause, áudio e progresso
 * - Visualizador imersivo em tela cheia (ReelModalViewer) estilo Instagram Stories
 * - Conexão direta com WhatsApp personalizada para cada tema abordado
 */
import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import {
  Instagram,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { INSTAGRAM_URL, WHATSAPP_URL, INSTAGRAM_AVATAR, ASSET_BASE } from "./site-config";

const PROFILE_AVATAR = INSTAGRAM_AVATAR;

export interface ReelItem {
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

export const REEL_ITEMS: ReelItem[] = [
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
    id: "reel-maternidade-3",
    videoSrc: `${ASSET_BASE}reel-salario-maternidade-3-situacoes.mp4`,
    tag: "Salário-Maternidade",
    formatBadge: "Reel Oficial · 3 Situações",
    speaker: "Dra. Karlla & Dra. Keyteler",
    speakerRole: "Direito das Mães & Família",
    title: "3 Situações em que Você Pode Ter Direito ao Salário-Maternidade",
    summary:
      "Grávida sem nunca ter contribuído, demitida no período de graça ou autônoma: saiba os caminhos para garantir o benefício de mais de R$ 6.000.",
    whatsappMessage:
      "Olá, doutoras! Assisti ao vídeo das 3 situações do Salário-Maternidade no site e gostaria de orientação para o meu caso.",
    durationLabel: "1:32",
  },
  {
    id: "reel-defeso-salgado",
    videoSrc: `${ASSET_BASE}reel-seguro-defeso-salgado.mp4`,
    tag: "Seguro-Defeso",
    formatBadge: "Reel Oficial · Região do Salgado",
    speaker: "Dra. Keyteler Leite",
    speakerRole: "Direitos da Pesca Artesanal",
    title: "Prazo Aberto para o Seguro-Defeso na Região do Salgado",
    summary:
      "Direto do porto em Salinas: requisitos cruciais de guias INSS, sem vínculo, CadÚnico atualizado e manutenção anual do REAP para não perder o prazo.",
    whatsappMessage:
      "Olá, Dra. Keyteler! Assisti ao vídeo gravado no porto de Salinas sobre o prazo e requisitos do Seguro-Defeso e gostaria de orientações.",
    durationLabel: "0:21",
  },
  {
    id: "reel-rural-roca",
    videoSrc: `${ASSET_BASE}reel-aposentadoria-rural-roca.mp4`,
    tag: "Aposentadoria Rural",
    formatBadge: "Reel Oficial · Ver-o-Peso",
    speaker: "Dra. Karlla & Dra. Keyteler",
    speakerRole: "Segurados Especiais & Campo",
    title: "Trabalhou a Vida Inteira na Roça e Nunca Pagou INSS?",
    summary:
      "Direto do Ver-o-Peso em Belém: agricultores familiares e pescadores têm redução de idade (55 mulher / 60 homem) comprovando 15 anos de atividade rural.",
    whatsappMessage:
      "Olá, doutoras! Assisti ao vídeo sobre Aposentadoria Rural gravado no Ver-o-Peso e gostaria de saber se tenho direito à aposentadoria por tempo de roça.",
    durationLabel: "0:50",
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

const FAN_POSITIONS_DESKTOP = [
  { rot: -18, scale: 0.85, x: -28, y: 3.5, zIndex: 1 },
  { rot: -9,  scale: 0.92, x: -14, y: 1.0, zIndex: 3 },
  { rot: 0,   scale: 1.0,  x: 0,   y: 0.0, zIndex: 10 },
  { rot: 9,   scale: 0.92, x: 14,  y: 1.0, zIndex: 3 },
  { rot: 18,  scale: 0.85, x: 28,  y: 3.5, zIndex: 1 },
];

const FAN_POSITIONS_MOBILE = [
  { rot: -9, scale: 0.88, x: -12, y: 1.2, zIndex: 3 },
  { rot: 0,  scale: 1.0,  x: 0,   y: 0.0, zIndex: 10 },
  { rot: 9,  scale: 0.88, x: 12,  y: 1.2, zIndex: 3 },
];

function getSlotConfig(slotCount: number, slot: number) {
  if (slotCount === 3) {
    return FAN_POSITIONS_MOBILE[slot] || FAN_POSITIONS_MOBILE[1];
  }
  return FAN_POSITIONS_DESKTOP[slot] || FAN_POSITIONS_DESKTOP[2];
}

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.28;
  if (width < 640) return 0.38;
  if (width < 768) return 0.5;
  if (width < 1024) return 0.75;
  return 1.0;
}

function getHeightMultiplier(width: number) {
  let idealPx: number;
  if (width < 480) idealPx = 352;
  else if (width < 640) idealPx = 416;
  else if (width < 768) idealPx = 448;
  else if (width < 1024) idealPx = 544;
  else idealPx = 608;

  const available = typeof window !== "undefined" ? window.innerHeight * 0.7 : idealPx;
  if (available >= idealPx) return 1;
  return available / idealPx;
}

interface ReelCardProps {
  reel: ReelItem;
  isActive: boolean;
  isMuted: boolean;
  onTogglePlay: () => void;
  onToggleMute: (e: React.MouseEvent) => void;
  onOpenModal: () => void;
}

function ReelCard({
  reel,
  isActive,
  isMuted,
  onTogglePlay,
  onToggleMute,
  onOpenModal,
}: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
  }, [isActive]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
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
    // Ao clicar no card, abre diretamente o visualizador imersivo em tela cheia se for o card central ativo
    if (isActive) {
      onOpenModal();
    }
  };

  return (
    <article
      className={`reel-card ${isActive ? "is-active" : ""} ${isPlaying ? "is-playing" : ""}`}
      onClick={handleCardClick}
      tabIndex={0}
      role="button"
      aria-label={`Reproduzir Reel: ${reel.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (isActive) {
            onOpenModal();
          } else {
            onTogglePlay();
          }
        }
      }}
    >
      <div className="reel-media-wrapper">
        <video
          ref={videoRef}
          src={reel.videoSrc}
          playsInline
          muted={isMuted}
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => {
            setIsPlaying(false);
            setProgress(0);
          }}
          className="reel-video-element"
        />

        <div className="reel-progress-track" aria-hidden="true">
          <div className="reel-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="reel-top-bar" onClick={(e) => e.stopPropagation()}>
          <span className="reel-tag-badge">{reel.tag}</span>
          <button
            type="button"
            className="reel-sound-btn"
            onClick={onToggleMute}
            aria-label={isMuted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
            title={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span className="reel-sound-label">{isMuted ? "Sem som" : "Com som"}</span>
          </button>
        </div>

        <div className={`reel-play-overlay ${isPlaying ? "is-hidden" : ""}`}>
          <div className="reel-play-circle">
            {isPlaying ? (
              <Pause size={28} className="reel-play-icon" aria-hidden="true" />
            ) : (
              <Play size={28} className="reel-play-icon is-play" aria-hidden="true" />
            )}
          </div>
          <span className="reel-play-hint">CLIQUE PARA ASSISTIR</span>
        </div>

        <div className="reel-overlay-content">
          <div className="reel-speaker-badge">
            <span className="reel-speaker-name">{reel.speaker}</span>
            <span className="reel-speaker-sep">·</span>
            <span className="reel-speaker-role">{reel.speakerRole}</span>
          </div>
          <h4 className="reel-card-title">{reel.title}</h4>
        </div>
      </div>

      <div className="reel-actions" onClick={(e) => e.stopPropagation()}>
        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent(reel.whatsappMessage)}`}
          target="_blank"
          rel="noreferrer"
          className="reel-whatsapp-link"
          aria-label={`Tirar dúvida sobre ${reel.tag} com as advogadas pelo WhatsApp`}
        >
          <WhatsAppIcon size={15} aria-hidden="true" />
          <span>Tirar dúvida sobre o tema</span>
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
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

export function ReelModalViewer({
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      else if (e.key === "ArrowRight" && currentIndex < reels.length - 1) onNavigate(currentIndex + 1);
      else if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, reels.length, onClose, onNavigate]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setProgress(0);
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [currentIndex]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
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
    >
      <div className="reel-modal-shell">
        <div className="reel-modal-card-wrapper">
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
            <video
              ref={videoRef}
              src={currentReel.videoSrc}
              playsInline
              preload="auto"
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="reel-modal-video"
            />

            <div className="reel-modal-progress-bar">
              <div
                className="reel-modal-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

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
                  </div>
                  <span className="reel-modal-format-badge">{currentReel.formatBadge}</span>
                </div>
              </div>

              <div className="reel-modal-controls">
                <button
                  type="button"
                  className="reel-modal-mute-btn"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button
                  type="button"
                  className="reel-modal-close-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  aria-label="Fechar visualizador"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className={`reel-modal-play-overlay ${isPlaying ? "is-hidden" : ""}`}>
              <div className="reel-modal-play-circle">
                <Play size={40} className="reel-modal-play-icon" aria-hidden="true" />
              </div>
            </div>

            <div className="reel-modal-bottom-content" onClick={(e) => e.stopPropagation()}>
              <span className="reel-modal-tag">{currentReel.tag}</span>
              <h3 className={`reel-modal-title ${isPlaying ? "is-hidden" : ""}`}>
                {currentReel.title}
              </h3>
              <p className={`reel-modal-summary ${isPlaying ? "is-hidden" : ""}`}>
                {currentReel.summary}
              </p>

              <div className="reel-modal-actions">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(currentReel.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="reel-modal-cta-wa"
                  aria-label="Conversar com as advogadas pelo WhatsApp sobre este vídeo"
                >
                  <WhatsAppIcon size={16} aria-hidden="true" />
                  <span>Tirar dúvida sobre este tema</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="reel-modal-cta-ig"
                  aria-label="Ver mais vídeos no Instagram oficial"
                >
                  <Instagram size={15} aria-hidden="true" />
                  <span>Ver no Instagram</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

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
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);
  const directionRef = useRef<"left" | "right" | null>(null);
  const prevVisible = useRef<Set<number>>(new Set());

  const totalCards = REEL_ITEMS.length;
  const [centerIndex, setCenterIndex] = useState(3); // Inicia no card central (Aposentadoria Rural Ver-o-Peso)
  const [isMuted, setIsMuted] = useState(true);
  const [modalReelIndex, setModalReelIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  const getVisibleMap = useCallback(
    (center: number, isMobileMode = isMobile) => {
      const slotCount = isMobileMode ? 3 : 5;
      const half = isMobileMode ? 1 : 2;
      const map = new Map<number, number>();
      for (let slot = 0; slot < slotCount; slot++) {
        map.set(((center + slot - half) % totalCards + totalCards) % totalCards, slot);
      }
      return map;
    },
    [totalCards, isMobile]
  );

  const cycle = useCallback(
    (direction: "left" | "right") => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      directionRef.current = direction;
      setCenterIndex((prev) =>
        direction === "right" ? (prev + 1) % totalCards : (prev - 1 + totalCards) % totalCards
      );
    },
    [totalCards]
  );

  // Animação GSAP Fan Deck
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !totalCards) return;

    const cardElements = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"));
    if (!cardElements.length) return;

    const mobileCurrent = window.innerWidth < 768;
    const slotCount = mobileCurrent ? 3 : 5;
    const visibleMap = getVisibleMap(centerIndex, mobileCurrent);
    const previouslyVisible = prevVisible.current;
    const direction = directionRef.current;
    const isFirstMount = !hasEntered.current;
    const multiplier = getResponsiveMultiplier(window.innerWidth);
    const hMult = getHeightMultiplier(window.innerWidth);
    const config = (slot: number) => getSlotConfig(slotCount, slot);

    if (isFirstMount) isAnimating.current = true;

    let completedCount = 0;
    const visibleCount = visibleMap.size;
    const onCardDone = () => {
      if (++completedCount >= visibleCount) {
        isAnimating.current = false;
        if (isFirstMount) hasEntered.current = true;
      }
    };

    cardElements.forEach((card, cardIndex) => {
      const slot = visibleMap.get(cardIndex);
      const wasVisible = previouslyVisible.has(cardIndex);

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = config(slot);
        const target = {
          x: `${x * multiplier}rem`,
          y: `${y * hMult}rem`,
          rotation: rot,
          scale,
          opacity: 1,
          zIndex,
        };

        if (isFirstMount) {
          gsap.set(card, { x: 0, y: `${12 * hMult}rem`, rotation: 0, scale: 0.5, opacity: 0 });
          gsap.to(card, {
            ...target,
            duration: 1.2,
            ease: "elastic.out(1.05,.78)",
            delay: 0.2 + slot * 0.06,
            onComplete: onCardDone,
          });
        } else if (!wasVisible) {
          const enterX = direction === "right" ? 35 : -35;
          gsap.set(card, {
            x: `${enterX}rem`,
            y: `${y * hMult}rem`,
            rotation: direction === "right" ? 25 : -25,
            scale: 0.5,
            opacity: 0,
          });
          gsap.to(card, { ...target, duration: 0.55, ease: "power2.out", onComplete: onCardDone });
        } else {
          gsap.to(card, { ...target, duration: 0.5, ease: "power2.out", onComplete: onCardDone });
        }
      } else if (wasVisible) {
        const exitX = direction === "right" ? -35 : 35;
        gsap.to(card, {
          x: `${exitX}rem`,
          opacity: 0,
          scale: 0.5,
          rotation: direction === "right" ? -25 : 25,
          duration: 0.4,
          ease: "power2.in",
          zIndex: 0,
        });
      } else if (isFirstMount) {
        gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 });
      }
    });

    prevVisible.current = new Set(visibleMap.keys());

    // Interações de Hover Spread
    const visibleEntries: { el: HTMLElement; slot: number }[] = [];
    cardElements.forEach((el, i) => {
      const slot = visibleMap.get(i);
      if (slot !== undefined) visibleEntries.push({ el, slot });
    });
    visibleEntries.sort((a, b) => a.slot - b.slot);

    let activeSlot: number | null = null;
    let leaveTimer: ReturnType<typeof setTimeout> | null = null;

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const mobileHover = window.innerWidth < 768;
      const hoverSlotCount = mobileHover ? 3 : 5;
      const mult = getResponsiveMultiplier(window.innerWidth);
      const hM = getHeightMultiplier(window.innerWidth);
      const hoverConfig = (slot: number) => getSlotConfig(hoverSlotCount, slot);

      visibleEntries.forEach(({ el, slot }) => {
        const base = hoverConfig(slot);
        let targetX = base.x * mult;
        let targetY = base.y * hM;
        let targetRot = base.rot;
        let targetScale = base.scale;
        let currentZIndex = base.zIndex;

        if (hoveredSlot !== null && slot === hoveredSlot) {
          // Apenas a carta focada ganha uma elevação sutil e elegante
          targetY -= 1.0 * hM;
          targetScale *= 1.03;
          currentZIndex = 25; // Garante que a carta focada fique à frente das vizinhas
        }
        // As demais cartas permanecem 100% imóveis em suas posições de leque originais

        gsap.to(el, {
          x: `${targetX}rem`,
          y: `${targetY}rem`,
          rotation: targetRot,
          scale: targetScale,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.set(el, { zIndex: currentZIndex });
      });
    };

    const enterHandlers = visibleEntries.map(({ el, slot }) => {
      const handler = () => {
        if (isAnimating.current) return;
        if (leaveTimer) {
          clearTimeout(leaveTimer);
          leaveTimer = null;
        }
        if (activeSlot !== slot) {
          activeSlot = slot;
          updateHoverLayout(slot);
        }
      };
      el.addEventListener("mouseenter", handler);
      return { el, handler };
    });

    const onMouseLeave = () => {
      if (isAnimating.current) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => {
        activeSlot = null;
        updateHoverLayout(null);
      }, 50);
    };
    container.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => {
      const mobileNow = window.innerWidth < 768;
      setIsMobile((prev) => (prev !== mobileNow ? mobileNow : prev));
      if (!isAnimating.current) updateHoverLayout(activeSlot);
    };
    window.addEventListener("resize", onResize);

    return () => {
      enterHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [centerIndex, totalCards, getVisibleMap, isMobile]);

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  return (
    <section
      id="instagram"
      className="section section-paper instagram-section"
      aria-labelledby="instagram-showcase-title"
    >
      <div className="site-container">
        {/* Cabeçalho Editorial Centralizado Monumental */}
        <div className="instagram-header instagram-header-centered" data-reveal>
          <h2 id="instagram-showcase-title">
            Acompanhe nossas orientações no Instagram.
          </h2>
        </div>

        {/* Faixa Oficial do Perfil com Avatar e Selo Verificado */}
        <div className="instagram-profile-banner" data-reveal>
          <div className="instagram-profile-left">
            <div className="instagram-avatar-ring-container" aria-label="Perfil verificado no Instagram">
              <svg
                viewBox="0 0 100 100"
                className="instagram-avatar-vector"
                width="68"
                height="68"
                role="img"
                aria-label="Avatar oficial Karlla e Keyteler Advogadas"
              >
                <defs>
                  <linearGradient id="ig-story-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                  <clipPath id="ig-avatar-cutout">
                    <circle cx="50" cy="50" r="39.5" />
                  </clipPath>
                </defs>

                {/* 1. Anel Externo de Stories (Gradiente Oficial com Espessura Uniforme) */}
                <circle
                  cx="50"
                  cy="50"
                  r="46.5"
                  fill="none"
                  stroke="url(#ig-story-gradient)"
                  strokeWidth="3.5"
                />

                {/* 2. Anel de Respiro Marfim (Matemática Vetorial Concêntrica Perfeita) */}
                <circle
                  cx="50"
                  cy="50"
                  r="43.5"
                  fill="var(--bg-primary, #FAF6F0)"
                />

                {/* 3. Foto de Perfil Oficial com Fundo Vinho e Corte Circular Analítico */}
                <g clipPath="url(#ig-avatar-cutout)">
                  <circle cx="50" cy="50" r="39.5" fill="#50001D" />
                  <image
                    href={PROFILE_AVATAR}
                    xlinkHref={PROFILE_AVATAR}
                    x="10.5"
                    y="10.5"
                    width="79"
                    height="79"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* 4. Micro-linha capilar para fusão óptica e anti-aliasing sedoso */}
                <circle
                  cx="50"
                  cy="50"
                  r="39.5"
                  fill="none"
                  stroke="rgba(163, 126, 75, 0.35)"
                  strokeWidth="0.75"
                />
              </svg>
            </div>
            <div className="instagram-profile-meta">
              <div className="instagram-profile-handle-row">
                <span className="instagram-profile-handle">@karllaekeyteleradvogadas</span>
                <span className="instagram-verified-badge" title="Perfil oficial verificado">
                  <svg viewBox="0 0 40 40" width="16" height="16" role="img" aria-label="Verificado">
                    <path
                      d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Z"
                      fill="#0095f6"
                    />
                    <path
                      d="m16.88 28.1-6.1-6.1 2.36-2.36 3.74 3.74 10.6-10.6 2.36 2.36-12.96 12.96Z"
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
              className="button-instagram-main"
              aria-label="Seguir perfil oficial @karllaekeyteleradvogadas no Instagram"
            >
              <Instagram size={17} aria-hidden="true" />
              <span>SEGUIR NO INSTAGRAM</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* CONTAINER DO LEQUE 3D (GSAP FAN CAROUSEL) */}
        <div className="card-fan-container-outer" data-reveal>
          <div className="card-fan-viewport">
            <div
              ref={containerRef}
              className="fan-layout reels-carousel-track"
              role="region"
              aria-label="Carrossel de Reels em Leque 3D"
            >
              {REEL_ITEMS.map((reel, index) => (
                <div
                  key={reel.id}
                  className="fan-card"
                  onClick={() => {
                    if (index !== centerIndex) {
                      // Se o usuário clicar em uma carta lateral, gira o leque para trazê-la ao centro
                      setCenterIndex(index);
                    } else {
                      // Se for a carta central, abre imediatamente o vídeo em tela cheia com áudio
                      setModalReelIndex(index);
                    }
                  }}
                >
                  <ReelCard
                    reel={reel}
                    isActive={index === centerIndex}
                    isMuted={isMuted}
                    onTogglePlay={() => {
                      if (index === centerIndex) {
                        setModalReelIndex(index);
                      } else {
                        setCenterIndex(index);
                      }
                    }}
                    onToggleMute={handleToggleMute}
                    onOpenModal={() => {
                      if (index === centerIndex) {
                        setModalReelIndex(index);
                      } else {
                        setCenterIndex(index);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Controles do Carrossel de Leque com Ouro Champanhe e Vidro Fosco (Sempre Visível) */}
          <div className="reels-carousel-controls card-fan-navigation" aria-label="Navegação dos Reels">
            <div className="card-fan-nav-bar reels-carousel-nav">
              <button
                type="button"
                className="reels-carousel-arrow card-fan-arrow is-prev"
                onClick={() => cycle("left")}
                aria-label="Ver vídeo anterior"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>

              <div className="reels-carousel-dots card-fan-dots" role="tablist" aria-label="Indicadores dos vídeos">
                {REEL_ITEMS.map((reel, idx) => (
                  <button
                    key={reel.id}
                    type="button"
                    role="tab"
                    aria-selected={centerIndex === idx}
                    aria-label={`Ir para o vídeo ${idx + 1} de ${REEL_ITEMS.length}: ${reel.title}`}
                    className={`reels-carousel-dot card-fan-dot ${centerIndex === idx ? "is-active" : ""}`}
                    onClick={() => setCenterIndex(idx)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="reels-carousel-arrow card-fan-arrow is-next"
                onClick={() => cycle("right")}
                aria-label="Ver próximo vídeo"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="reels-carousel-info">
              <span className="reels-carousel-counter">
                Vídeo <strong>{centerIndex + 1}</strong> de {REEL_ITEMS.length}
              </span>
            </div>
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
              <WhatsAppIcon size={16} aria-hidden="true" />
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
          }}
          onNavigate={(index) => {
            setModalReelIndex(index);
            setCenterIndex(index);
          }}
        />
      )}
    </section>
  );
}
