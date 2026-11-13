import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import type { DetailedService } from "@/data/servicesData";
import { PHONE_TEL } from "@/components/site/site-config";
import WhatsAppIcon from "./WhatsAppIcon";

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
  const [checkedDocs, setCheckedDocs] = useState<string[]>([]);

  // Limpa documentos selecionados ao alternar entre serviços
  useEffect(() => {
    setCheckedDocs([]);
  }, [service?.id]);

  const toggleDoc = (doc: string) => {
    setCheckedDocs((prev) =>
      prev.includes(doc) ? prev.filter((d) => d !== doc) : [...prev, doc]
    );
  };

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
  const customMessage =
    checkedDocs.length > 0
      ? `Olá, Dras. Karlla e Keyteler! Gostaria de consultar sobre ${service.title}. Já possuo os seguintes documentos: ${checkedDocs.join(", ")}.`
      : service.whatsappMessage;

  const waUrl = `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${encodeURIComponent(
    customMessage
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

          {/* 1. Bloco de Público-Alvo & Elegibilidade em Bege Linho Nobre */}
          <div className="service-drawer-target">
            <div className="service-drawer-target-label">
              <Users size={14} aria-hidden="true" />
              <span>Para quem é este benefício:</span>
            </div>
            <p className="service-drawer-target-text">{service.targetAudience}</p>
          </div>

          {/* 2. Dossiê de Rigor Técnico & Análise Minuciosa */}
          <div className="service-drawer-subblock service-drawer-analysis-block">
            <h3 className="service-drawer-subblock-title">
              <ShieldCheck size={16} aria-hidden="true" />
              <span>O que o escritório analisa minuciosamente:</span>
            </h3>
            <ul className="service-drawer-checklist">
              {service.analysisPoints.map((point, idx) => (
                <li key={idx} className="service-drawer-analysis-card">
                  <span className="service-drawer-check-badge" aria-hidden="true">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span className="service-drawer-analysis-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Checklist Tátil de Documentos Recomendados */}
          <div className="service-drawer-subblock service-drawer-doc-block">
            <div className="service-drawer-doc-header">
              <h3 className="service-drawer-subblock-title">
                <FileText size={16} aria-hidden="true" />
                <span>Documentos recomendados:</span>
              </h3>
              {checkedDocs.length > 0 && (
                <span className="service-drawer-counter-badge">
                  ✦ {checkedDocs.length} de {service.recommendedDocuments.length} selecionado(s)
                </span>
              )}
            </div>

            <p className="service-drawer-check-hint">
              {checkedDocs.length > 0
                ? "Os documentos marcados serão incluídos automaticamente na sua mensagem para o WhatsApp."
                : "Selecione os documentos que você já tem em mãos para incluirmos na conversa pelo WhatsApp."}
            </p>

            <ul className="service-drawer-checklist service-drawer-doc-checklist">
              {service.recommendedDocuments.map((doc, idx) => {
                const isChecked = checkedDocs.includes(doc);
                return (
                  <li
                    key={idx}
                    className={`service-drawer-check-item ${isChecked ? "is-checked" : ""}`}
                    onClick={() => toggleDoc(doc)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleDoc(doc);
                      }
                    }}
                    role="checkbox"
                    aria-checked={isChecked}
                    tabIndex={0}
                  >
                    <span className={`service-drawer-checkbox ${isChecked ? "is-checked" : ""}`}>
                      {isChecked && <Check size={12} strokeWidth={3} aria-hidden="true" />}
                    </span>
                    <span className="service-drawer-doc-text">{doc}</span>
                  </li>
                );
              })}
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
            <WhatsAppIcon size={18} aria-hidden="true" />
            <span className="service-drawer-cta-text">
              {checkedDocs.length > 0
                ? `Enviar com ${checkedDocs.length} documento(s) marcado(s)`
                : "Tirar dúvida sobre este benefício no WhatsApp"}
            </span>
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
