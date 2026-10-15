import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  FileText,
  MessageCircle,
  X,
} from "lucide-react";
import type { DetailedService } from "@/data/servicesData";
import { PHONE_TEL } from "@/components/site/site-config";

interface ServiceDetailDrawerProps {
  service: DetailedService | null;
  allServices: DetailedService[];
  onClose: () => void;
  onSelectService: (service: DetailedService) => void;
}

export default function ServiceDetailDrawer({
  service,
  allServices,
  onClose,
  onSelectService,
}: ServiceDetailDrawerProps) {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Fecha no Esc e bloqueia scroll de fundo
  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const Icon = service.icon;
  const waUrl = `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${encodeURIComponent(
    service.whatsappMessage
  )}`;

  return (
    <div
      className="service-drawer-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-service-title"
    >
      <div
        className="service-drawer-panel"
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Puxador tátil no mobile */}
        <div className="service-drawer-drag-handle" aria-hidden="true" />

        {/* Topo do Drawer com Badge e Botão Fechar */}
        <div className="service-drawer-header">
          <div className="service-drawer-header-info">
            <span className="service-drawer-badge">{service.badge}</span>
            <span className="service-drawer-category">· {service.categoryLabel}</span>
          </div>

          <button
            type="button"
            className="service-drawer-close-btn"
            onClick={onClose}
            aria-label="Fechar detalhamento do serviço"
            title="Fechar (Esc)"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Conteúdo com rolagem suave */}
        <div className="service-drawer-content">
          <div className="service-drawer-title-row">
            <span className="service-drawer-icon-wrap" aria-hidden="true">
              <Icon size={24} />
            </span>
            <h2 id="drawer-service-title" className="service-drawer-title">
              {service.title}
            </h2>
          </div>

          <p className="service-drawer-overview">{service.overview}</p>

          {/* Bloco de público-alvo com destaque editorial */}
          <div className="service-drawer-target">
            <div className="service-drawer-target-label">
              <span>Para quem é este benefício:</span>
            </div>
            <p className="service-drawer-target-text">{service.targetAudience}</p>
          </div>

          {/* O que o escritório analisa */}
          <div className="service-drawer-subblock">
            <h3 className="service-drawer-subblock-title">
              <CheckCircle2 size={16} aria-hidden="true" />
              <span>O que o escritório analisa minuciosamente:</span>
            </h3>
            <ul className="service-drawer-checklist">
              {service.analysisPoints.map((point, idx) => (
                <li key={idx}>
                  <Check size={14} className="service-drawer-check-icon" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documentos recomendados */}
          <div className="service-drawer-subblock">
            <h3 className="service-drawer-subblock-title">
              <FileText size={16} aria-hidden="true" />
              <span>Documentos essenciais recomendados para a consulta:</span>
            </h3>
            <ul className="service-drawer-checklist">
              {service.recommendedDocuments.map((doc, idx) => (
                <li key={idx}>
                  <Check size={14} className="service-drawer-check-icon" aria-hidden="true" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seletor rápido para explorar outros benefícios sem fechar o drawer */}
          <div className="service-drawer-switch-box">
            <span className="service-drawer-switch-label">Explorar outros benefícios:</span>
            <div className="service-drawer-switch-pills" role="tablist" aria-label="Outros benefícios disponíveis">
              {allServices.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`service-drawer-switch-pill ${item.id === service.id ? "is-active" : ""}`}
                  onClick={() => onSelectService(item)}
                  aria-selected={item.id === service.id}
                >
                  {item.shortTitle}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé fixo de conversão com CTA em destaque */}
        <div className="service-drawer-footer">
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="service-drawer-cta-btn"
            aria-label={`Tirar dúvida no WhatsApp sobre ${service.title}`}
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span className="service-drawer-cta-text">Tirar dúvida sobre este benefício no WhatsApp</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <span className="service-drawer-footer-hint">
            Atendimento individualizado e sigiloso · Salinópolis & Atuação Nacional
          </span>
        </div>
      </div>
    </div>
  );
}
