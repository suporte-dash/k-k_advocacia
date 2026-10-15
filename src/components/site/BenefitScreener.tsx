import { useState, useRef } from "react";
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
  FileText,
  Hourglass,
  TrendingUp,
  Briefcase,
  Store,
  Landmark,
  Check,
} from "lucide-react";
import { PHONE_TEL } from "./site-config";

interface ScreenerOption {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
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
    id: "planejamento",
    title: "Planejamento previdenciário",
    subtitle: "Contagem de tempo, simulação e acerto de CNIS.",
    icon: FileText,
  },
  {
    id: "recurso-negado",
    title: "Recurso / Pedido negado",
    subtitle: "Benefício indeferido, cessado ou revisão no INSS.",
    icon: RotateCcw,
  },
];

const STAGE_OPTIONS: ScreenerOption[] = [
  {
    id: "planejamento",
    title: "Ainda não dei entrada no INSS",
    subtitle: "Quero entender meus direitos e organizar os documentos necessários.",
    icon: FileText,
  },
  {
    id: "em-analise",
    title: "Pedido em análise / demorado",
    subtitle: "Já solicitei no Meu INSS e estou aguardando resposta.",
    icon: Hourglass,
  },
  {
    id: "negado",
    title: "Pedido foi indeferido (negado)",
    subtitle: "Preciso de recurso administrativo ou verificar viabilidade judicial.",
    icon: ShieldAlert,
  },
  {
    id: "revisao",
    title: "Já recebo e busco revisão",
    subtitle: "Quero avaliar se o cálculo do benefício foi feito corretamente.",
    icon: TrendingUp,
  },
];

const WORKER_OPTIONS: ScreenerOption[] = [
  {
    id: "clt",
    title: "Trabalhador(a) urbano(a) CLT",
    subtitle: "Carteira assinada ou ex-empregado com contribuições.",
    icon: Briefcase,
  },
  {
    id: "pescador-rural",
    title: "Pescador(a) artesanal ou trabalhador rural",
    subtitle: "Atividade de pesca ou agricultura familiar comprovada.",
    icon: Anchor,
  },
  {
    id: "autonomo-mei",
    title: "Autônomo(a), MEI ou facultativo",
    subtitle: "Contribuição por carnê GPS, MEI ou dona de casa.",
    icon: Store,
  },
  {
    id: "servidor-outro",
    title: "Servidor(a) público(a) ou sem vínculo recente",
    subtitle: "Regime próprio de previdência ou período sem contribuição recente.",
    icon: Landmark,
  },
];

interface BenefitScreenerProps {
  layout?: "default" | "main";
}

function getScreenerInsight(benefitId: string, stageId: string, workerId: string) {
  if (stageId === "negado") {
    return {
      title: "Reversão de Decisão & Prazos Rígidos no INSS",
      text: "Pedidos indeferidos possuem prazo administrativo de 30 dias para interposição de recurso e possibilidade de ação na Justiça Federal com pedido liminar. O foco imediato é analisar os motivos da carta de indeferimento e suprir as exigências com provas adicionais.",
      badge: "Atenção a Prazos Legais",
    };
  }

  if (benefitId === "seguro-defeso") {
    return {
      title: "Proteção à Pesca Artesanal no Litoral Paraense",
      text: "A concessão do defeso em Salinópolis e região exige regularidade ativa no RGP, declaração comprobatória de colônia/associação e inexistência de vínculo urbano concorrente ou outro benefício contínuo no período de reprodução das espécies.",
      badge: "Pescador(a) Artesanal",
    };
  }

  if (benefitId === "salario-maternidade") {
    if (workerId === "clt") {
      return {
        title: "Isenção Legal de Carência e Proteção à Maternidade",
        text: "Para trabalhadoras urbanas com carteira assinada, a legislação não exige tempo prévio de carência de meses. A verificação examina apenas o vínculo na época do parto, adoção ou guarda judicial.",
        badge: "Direito Assegurado",
      };
    }
    return {
      title: "Carência e Comprovação Material da Atividade",
      text: "Para seguradas MEI, autônomas ou trabalhadoras rurais e pescadoras, analisa-se o cumprimento de 10 meses de carência contributiva ou o início de prova material do trabalho nos meses antecedentes ao parto.",
      badge: "Comprovação Documental",
    };
  }

  if (benefitId === "bpc-loas") {
    return {
      title: "Critérios de Renda Familiar e Impedimento de Longo Prazo",
      text: "O BPC não exige contribuição ao INSS, mas demanda Cadastro Único (CadÚnico) rigorosamente atualizado, apuração per capita familiar com desconto de despesas médicas contínuas e laudos médicos detalhados para pessoas com deficiência.",
      badge: "Benefício Assistencial",
    };
  }

  if (benefitId === "auxilio-incapacidade") {
    return {
      title: "Consistência Probatória para a Perícia Médica",
      text: "O deferimento por incapacidade depende do alinhamento entre relatórios médicos circunstanciados (com CID e indicação de afastamento), prontuários atualizados e a manutenção da qualidade de segurado.",
      badge: "Critérios Periciais",
    };
  }

  if (benefitId === "aposentadoria") {
    return {
      title: "Análise de Regras de Transição e Acerto de CNIS",
      text: "A Reforma da Previdência (EC 103/2019) criou múltiplas regras de transição (pedágios de 50% e 100%, pontos e idade mínima). O diagnóstico previdenciário simula qual regra garante o valor mais vantajoso e identifica pendências a sanar no Meu INSS.",
      badge: "Cálculo Mais Vantajoso",
    };
  }

  if (benefitId === "pensao-morte") {
    return {
      title: "Comprovação de Dependência e Qualidade de Segurado",
      text: "O escritório avalia a manutenção da qualidade de segurado do falecido na data do óbito e reúne as provas documentais necessárias de união estável ou dependência econômica exigidas pela Previdência.",
      badge: "Proteção Familiar",
    };
  }

  return {
    title: "Orientação Individualizada com Rigor Técnico",
    text: "Com base nas suas respostas, as advogadas realizarão o levantamento prévio das suas contribuições e requisitos documentais para apresentar com transparência o caminho jurídico mais seguro.",
    badge: "Diagnóstico Personalizado",
  };
}

export default function BenefitScreener({ layout = "default" }: BenefitScreenerProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedBenefit, setSelectedBenefit] = useState<string>("");
  const [selectedStage, setSelectedStage] = useState<string>("");
  const [selectedWorker, setSelectedWorker] = useState<string>("");
  const [animatingOption, setAnimatingOption] = useState<string | null>(null);
  const screenerRef = useRef<HTMLDivElement | null>(null);

  const isMain = layout === "main";
  const benefitOptions = BENEFIT_OPTIONS;

  const benefitObj = benefitOptions.find((b) => b.id === selectedBenefit);
  const stageObj = STAGE_OPTIONS.find((s) => s.id === selectedStage);
  const workerObj = WORKER_OPTIONS.find((w) => w.id === selectedWorker);

  function resetScreener() {
    setStep(1);
    setSelectedBenefit("");
    setSelectedStage("");
    setSelectedWorker("");
    setAnimatingOption(null);
  }

  function handleSelect(
    setter: (val: string) => void,
    val: string,
    nextStep: 2 | 3 | 4
  ) {
    setter(val);
    setAnimatingOption(val);

    window.setTimeout(() => {
      setStep(nextStep);
      setAnimatingOption(null);
      if (window.innerWidth <= 768 && screenerRef.current) {
        screenerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  }

  function generateWhatsAppMessage() {
    const text = `Olá, Dras. Karlla e Keyteler! Fiz o diagnóstico guiado no site da sociedade:
• Benefício de interesse: ${benefitObj?.title || "Não especificado"}
• Situação atual: ${stageObj?.title || "Não especificado"}
• Vínculo de trabalho: ${workerObj?.title || "Não especificado"}

Gostaria de uma orientação jurídica sobre o meu caso.`;
    return encodeURIComponent(text);
  }

  const whatsappHref = `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${generateWhatsAppMessage()}`;
  const insight = getScreenerInsight(selectedBenefit, selectedStage, selectedWorker);

  return (
    <div className="screener-card" data-reveal ref={screenerRef}>
      <div className="screener-header">
        <div className="screener-badge">
          <Sparkles size={13} aria-hidden="true" />
          <span>Diagnóstico Orientativo Rápido</span>
        </div>
        <h3 className="screener-title">Descubra os primeiros passos para o seu benefício</h3>
        <p className="screener-subtitle">
          Responda a 3 perguntas rápidas para receber uma orientação direcionada ao seu histórico previdenciário.
        </p>

        {/* Stepper Superior */}
        <div className="screener-stepper" aria-label="Etapas do diagnóstico">
          <div className={`screener-stepper-step ${step >= 1 ? "is-active" : ""} ${step > 1 ? "is-completed" : ""}`}>
            <span className="screener-stepper-pill">
              {step > 1 ? <Check size={12} strokeWidth={3} aria-hidden="true" /> : "1"}
            </span>
            <span className="screener-stepper-label">Benefício</span>
          </div>

          <div className={`screener-stepper-line ${step >= 2 ? "is-active" : ""}`} />

          <div className={`screener-stepper-step ${step >= 2 ? "is-active" : ""} ${step > 2 ? "is-completed" : ""}`}>
            <span className="screener-stepper-pill">
              {step > 2 ? <Check size={12} strokeWidth={3} aria-hidden="true" /> : "2"}
            </span>
            <span className="screener-stepper-label">Situação</span>
          </div>

          <div className={`screener-stepper-line ${step >= 3 ? "is-active" : ""}`} />

          <div className={`screener-stepper-step ${step >= 3 ? "is-active" : ""} ${step > 3 ? "is-completed" : ""}`}>
            <span className="screener-stepper-pill">
              {step > 3 ? <Check size={12} strokeWidth={3} aria-hidden="true" /> : "3"}
            </span>
            <span className="screener-stepper-label">Perfil</span>
          </div>
        </div>

        <div className="screener-progress-bar" aria-label={`Etapa ${step} de 3`}>
          <div
            className="screener-progress-fill"
            style={{ width: `${step === 4 ? 100 : (step / 3) * 100}%` }}
          />
        </div>
      </div>

      <div className="screener-body">
        {step === 1 && (
          <fieldset className="screener-step screener-step-animated">
            <legend className="screener-step-legend">
              <span className="screener-step-num">Passo 1 de 3 · Benefício de Interesse</span>
              Qual benefício ou assunto você deseja consultar?
            </legend>
            <div className={isMain ? "screener-grid screener-grid-4col" : "screener-grid"}>
              {benefitOptions.map((item) => {
                const Icon = item.icon || HelpCircle;
                const isSelected = selectedBenefit === item.id;
                const isTapped = animatingOption === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`screener-option-btn ${isSelected ? "is-selected" : ""} ${isTapped ? "is-tapped" : ""}`}
                    onClick={() => handleSelect(setSelectedBenefit, item.id, 2)}
                  >
                    <span className="screener-icon-wrap">
                      <Icon size={19} aria-hidden="true" />
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
          <fieldset className="screener-step screener-step-animated">
            <legend className="screener-step-legend">
              <span className="screener-step-num">Passo 2 de 3 · Fase do Pedido</span>
              Em que estágio se encontra a sua solicitação?
            </legend>
            <div className={isMain ? "screener-grid screener-grid-4col" : "screener-grid"}>
              {STAGE_OPTIONS.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedStage === item.id;
                const isTapped = animatingOption === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`screener-option-btn ${isSelected ? "is-selected" : ""} ${isTapped ? "is-tapped" : ""}`}
                    onClick={() => handleSelect(setSelectedStage, item.id, 3)}
                  >
                    <span className="screener-icon-wrap">
                      <Icon size={19} aria-hidden="true" />
                    </span>
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
          <fieldset className="screener-step screener-step-animated">
            <legend className="screener-step-legend">
              <span className="screener-step-num">Passo 3 de 3 · Atividade & Vínculo</span>
              Qual é a sua principal categoria ou atividade de trabalho?
            </legend>
            <div className={isMain ? "screener-grid screener-grid-4col" : "screener-grid"}>
              {WORKER_OPTIONS.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedWorker === item.id;
                const isTapped = animatingOption === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`screener-option-btn ${isSelected ? "is-selected" : ""} ${isTapped ? "is-tapped" : ""}`}
                    onClick={() => handleSelect(setSelectedWorker, item.id, 4)}
                  >
                    <span className="screener-icon-wrap">
                      <Icon size={19} aria-hidden="true" />
                    </span>
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
          <div className="screener-summary screener-step-animated">
            <div className="screener-summary-header">
              <CheckCircle2 size={26} className="screener-check-icon" aria-hidden="true" />
              <div>
                <h4>Diagnóstico preliminar gerado com sucesso</h4>
                <p>Veja a leitura inicial do seu caso e envie para atendimento direto com as advogadas:</p>
              </div>
            </div>

            {/* Insight Editorial de Alta Autoridade */}
            <div className="screener-insight-card">
              <div className="screener-insight-header">
                <span className="screener-insight-tag">{insight.badge}</span>
                <span className="screener-insight-label">
                  <Sparkles size={12} aria-hidden="true" /> Leitura Técnica Preliminar
                </span>
              </div>
              <h5 className="screener-insight-title">{insight.title}</h5>
              <p className="screener-insight-text">{insight.text}</p>
            </div>

            <div className="screener-summary-box">
              <div className="summary-item">
                <span className="summary-label">Benefício:</span>
                <span className="summary-value">{benefitObj?.title}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Situação atual:</span>
                <span className="summary-value">{stageObj?.title}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Vínculo profissional:</span>
                <span className="summary-value">{workerObj?.title}</span>
              </div>
            </div>

            <div className="screener-ethical-note">
              <p>
                <strong>Sigilo & Ética Profissional:</strong> Esta leitura orientativa não substitui a análise documental e jurídica do extrato previdenciário e laudos, que será realizada com atenção individualizada pelas advogadas.
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
                <span>Enviar diagnóstico para o WhatsApp das advogadas</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={resetScreener}
                className="screener-reset-btn"
              >
                <RotateCcw size={14} aria-hidden="true" /> Refazer diagnóstico
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
