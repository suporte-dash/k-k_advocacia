import { useState } from "react";
import {
  Baby,
  Anchor,
  Clock,
  ShieldAlert,
  HeartPulse,
  Scale,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { PHONE_TEL } from "./site-config";

interface ScreenerOption {
  id: string;
  title: string;
  subtitle: string;
  icon?: React.ElementType;
}

const BENEFIT_OPTIONS: ScreenerOption[] = [
  {
    id: "aposentadoria",
    title: "Aposentadorias",
    subtitle: "Por idade, tempo de contribuição, especial ou rural.",
    icon: Clock,
  },
  {
    id: "salario-maternidade",
    title: "Salário-maternidade",
    subtitle: "Para mães urbanas, rurais, pescadoras artesanais ou MEI.",
    icon: Baby,
  },
  {
    id: "seguro-defeso",
    title: "Seguro-defeso",
    subtitle: "Para pescadores e pescadoras artesanais profissionais.",
    icon: Anchor,
  },
  {
    id: "bpc-loas",
    title: "BPC / LOAS",
    subtitle: "Idosos (65+) ou pessoas com deficiência de baixa renda.",
    icon: HeartPulse,
  },
  {
    id: "pensao-morte",
    title: "Pensão por morte",
    subtitle: "Para dependentes de segurados falecidos.",
    icon: ShieldAlert,
  },
  {
    id: "auxilio-incapacidade",
    title: "Auxílio por incapacidade",
    subtitle: "Afastamento por doença, acidente ou incapacidade temporária.",
    icon: Scale,
  },
  {
    id: "outro",
    title: "Planejamento / Outra situação",
    subtitle: "Contagem de tempo, revisão de benefício ou cálculo previdenciário.",
    icon: HelpCircle,
  },
];

const STAGE_OPTIONS: ScreenerOption[] = [
  {
    id: "planejamento",
    title: "Ainda não dei entrada no INSS",
    subtitle: "Quero entender meus direitos e organizar os documentos necessários.",
  },
  {
    id: "em-analise",
    title: "Pedido em análise / demorado",
    subtitle: "Já solicitei no Meu INSS e estou aguardando resposta.",
  },
  {
    id: "negado",
    title: "Pedido foi indeferido (negado)",
    subtitle: "Preciso de recurso administrativo ou verificar viabilidade judicial.",
  },
  {
    id: "revisao",
    title: "Já recebo e busco revisão",
    subtitle: "Quero avaliar se o cálculo do benefício foi feito corretamente.",
  },
];

const WORKER_OPTIONS: ScreenerOption[] = [
  {
    id: "clt",
    title: "Trabalhador(a) urbano(a) CLT",
    subtitle: "Carteira assinada ou ex-empregado com contribuições.",
  },
  {
    id: "pescador-rural",
    title: "Pescador(a) artesanal ou trabalhador rural",
    subtitle: "Atividade de pesca ou agricultura familiar comprovada.",
  },
  {
    id: "autonomo-mei",
    title: "Autônomo(a), MEI ou facultativo",
    subtitle: "Contribuição por carnê GPS, MEI ou dona de casa.",
  },
  {
    id: "servidor-outro",
    title: "Servidor(a) público(a) ou sem vínculo recente",
    subtitle: "Regime próprio de previdência ou período sem contribuição recente.",
  },
];

export default function BenefitScreener() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedBenefit, setSelectedBenefit] = useState<string>("");
  const [selectedStage, setSelectedStage] = useState<string>("");
  const [selectedWorker, setSelectedWorker] = useState<string>("");

  const benefitObj = BENEFIT_OPTIONS.find((b) => b.id === selectedBenefit);
  const stageObj = STAGE_OPTIONS.find((s) => s.id === selectedStage);
  const workerObj = WORKER_OPTIONS.find((w) => w.id === selectedWorker);

  function resetScreener() {
    setStep(1);
    setSelectedBenefit("");
    setSelectedStage("");
    setSelectedWorker("");
  }

  function generateWhatsAppMessage() {
    const text = `Olá, Dras. Karlla e Keyteler! Fiz a triagem inicial no site da sociedade:
• Benefício de interesse: ${benefitObj?.title || "Não especificado"}
• Situação atual: ${stageObj?.title || "Não especificado"}
• Vínculo de trabalho: ${workerObj?.title || "Não especificado"}

Gostaria de uma orientação jurídica preliminar sobre o meu caso.`;
    return encodeURIComponent(text);
  }

  const whatsappHref = `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${generateWhatsAppMessage()}`;

  return (
    <div className="screener-card" data-reveal>
      <div className="screener-header">
        <div className="screener-badge">
          <Sparkles size={14} aria-hidden="true" />
          <span>Triagem Orientativa Rápida</span>
        </div>
        <h3 className="screener-title">Descubra os primeiros passos para o seu benefício</h3>
        <p className="screener-subtitle">
          Responda a 3 perguntas rápidas para receber uma orientação direcionada ao seu perfil.
        </p>

        <div className="screener-progress-bar" aria-label={`Etapa ${step} de 3`}>
          <div
            className="screener-progress-fill"
            style={{ width: `${step === 4 ? 100 : (step / 3) * 100}%` }}
          />
        </div>
      </div>

      <div className="screener-body">
        {step === 1 && (
          <fieldset className="screener-step">
            <legend className="screener-step-legend">
              <span className="screener-step-num">Passo 1 de 3</span>
              Qual benefício ou assunto você deseja consultar?
            </legend>
            <div className="screener-grid">
              {BENEFIT_OPTIONS.map((item) => {
                const Icon = item.icon || HelpCircle;
                const isSelected = selectedBenefit === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`screener-option-btn ${isSelected ? "is-selected" : ""}`}
                    onClick={() => {
                      setSelectedBenefit(item.id);
                      setStep(2);
                    }}
                  >
                    <span className="screener-icon-wrap">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div className="screener-option-text">
                      <strong>{item.title}</strong>
                      <small>{item.subtitle}</small>
                    </div>
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="screener-step">
            <legend className="screener-step-legend">
              <span className="screener-step-num">Passo 2 de 3</span>
              Em que estágio se encontra o seu pedido?
            </legend>
            <div className="screener-grid">
              {STAGE_OPTIONS.map((item) => {
                const isSelected = selectedStage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`screener-option-btn ${isSelected ? "is-selected" : ""}`}
                    onClick={() => {
                      setSelectedStage(item.id);
                      setStep(3);
                    }}
                  >
                    <div className="screener-option-text">
                      <strong>{item.title}</strong>
                      <small>{item.subtitle}</small>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="screener-actions">
              <button
                type="button"
                className="screener-back-btn"
                onClick={() => setStep(1)}
              >
                <ArrowLeft size={15} aria-hidden="true" /> Voltar ao passo anterior
              </button>
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="screener-step">
            <legend className="screener-step-legend">
              <span className="screener-step-num">Passo 3 de 3</span>
              Qual é a sua principal categoria ou atividade de trabalho?
            </legend>
            <div className="screener-grid">
              {WORKER_OPTIONS.map((item) => {
                const isSelected = selectedWorker === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`screener-option-btn ${isSelected ? "is-selected" : ""}`}
                    onClick={() => {
                      setSelectedWorker(item.id);
                      setStep(4);
                    }}
                  >
                    <div className="screener-option-text">
                      <strong>{item.title}</strong>
                      <small>{item.subtitle}</small>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="screener-actions">
              <button
                type="button"
                className="screener-back-btn"
                onClick={() => setStep(2)}
              >
                <ArrowLeft size={15} aria-hidden="true" /> Voltar ao passo anterior
              </button>
            </div>
          </fieldset>
        )}

        {step === 4 && (
          <div className="screener-summary">
            <div className="screener-summary-header">
              <CheckCircle2 size={24} className="screener-check-icon" aria-hidden="true" />
              <div>
                <h4>Triagem concluída com sucesso!</h4>
                <p>Veja o resumo do seu perfil para iniciar a conversa já qualificada:</p>
              </div>
            </div>

            <div className="screener-summary-box">
              <div className="summary-item">
                <span className="summary-label">Benefício:</span>
                <span className="summary-value">{benefitObj?.title}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Situação:</span>
                <span className="summary-value">{stageObj?.title}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Vínculo de trabalho:</span>
                <span className="summary-value">{workerObj?.title}</span>
              </div>
            </div>

            <div className="screener-ethical-note">
              <p>
                <strong>Importante:</strong> Esta triagem tem caráter informativo. Cada caso exige
                análise documental minuciosa das contribuições e requisitos legais pelas advogadas.
              </p>
            </div>

            <div className="screener-final-actions">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="screener-submit-btn"
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Enviar análise para o WhatsApp das advogadas</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={resetScreener}
                className="screener-reset-btn"
              >
                <RotateCcw size={14} aria-hidden="true" /> Reiniciar triagem
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
