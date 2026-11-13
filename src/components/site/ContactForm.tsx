import { useState } from "react";
import { Send, Loader2, CheckCircle2, ShieldCheck, ChevronDown, AlertCircle, RotateCcw } from "lucide-react";
import { PHONE_TEL, WEB3FORMS_ACCESS_KEY } from "./site-config";
import WhatsAppIcon from "./WhatsAppIcon";

function formatPhoneInput(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Aposentadorias");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function getWhatsAppFallbackUrl() {
    const text = encodeURIComponent(
      `Olá, Dras. Karlla e Keyteler! Gostaria de uma orientação jurídica:\n• Nome: ${name.trim() || "Não informado"}\n• Contato: ${phone.trim() || "Não informado"}\n• Assunto: ${subject}\n• Mensagem: ${message.trim() || "Gostaria de agendar um atendimento inicial."}`
    );
    return `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${text}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name.trim(),
          whatsapp: phone.trim(),
          assunto_beneficio: subject,
          resumo_do_caso: message.trim() || "Não informado pelo cliente",
          subject: `Novo Contato do Site: ${name.trim()} (${subject})`,
          from_name: "Site Karlla & Keyteler Advocacia",
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Erro no processamento do e-mail.");
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Houve uma oscilação na conexão ao enviar sua mensagem. Você pode tentar novamente ou falar diretamente pelo WhatsApp."
      );
    }
  }

  function handleReset() {
    setName("");
    setPhone("");
    setSubject("Aposentadorias");
    setMessage("");
    setStatus("idle");
    setErrorMessage("");
  }

  return (
    <div className="contact-form-card" data-reveal>
      <div className="contact-form-header">
        <span className="contact-form-badge">
          <ShieldCheck size={13} aria-hidden="true" />
          <span>Triagem &amp; Atendimento Direto</span>
        </span>
        <h3 className="contact-form-title">Envie sua mensagem para análise</h3>
        <p className="contact-form-desc">
          Preencha os dados abaixo para adiantar seu atendimento. Nossa equipe jurídica receberá seu resumo e entrará em contato pelo seu WhatsApp com a orientação adequada.
        </p>
      </div>

      {status === "success" ? (
        <div className="contact-form-success" role="status" aria-live="polite">
          <div className="contact-form-success-icon">
            <CheckCircle2 size={36} aria-hidden="true" />
          </div>
          <h4 className="contact-form-success-title">Mensagem Enviada com Sucesso!</h4>
          <p className="contact-form-success-desc">
            Olá, <strong>{name}</strong>! Recebemos suas informações sobre <strong>{subject}</strong>. Nossa equipe jurídica já está com o seu resumo e retornará o contato pelo WhatsApp <strong>{phone}</strong> com brevidade.
          </p>
          <button type="button" onClick={handleReset} className="contact-form-reset-btn">
            <RotateCcw size={14} aria-hidden="true" />
            <span>Enviar outra mensagem</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form-body">
          <div className="contact-form-row">
            <div className="contact-form-field">
              <label htmlFor="contact-name">Seu nome completo</label>
              <input
                id="contact-name"
                type="text"
                required
                disabled={status === "submitting"}
                placeholder="Ex.: Maria de Fátima Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact-input"
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="contact-phone">Seu WhatsApp com DDD</label>
              <input
                id="contact-phone"
                type="tel"
                required
                disabled={status === "submitting"}
                placeholder="(91) 90000-0000"
                value={phone}
                onChange={(e) => setPhone(formatPhoneInput(e.target.value))}
                className="contact-input"
              />
            </div>
          </div>

          <div className="contact-form-field">
            <label htmlFor="contact-subject">Assunto ou benefício</label>
            <div className="contact-select-wrap">
              <select
                id="contact-subject"
                value={subject}
                disabled={status === "submitting"}
                onChange={(e) => setSubject(e.target.value)}
                className="contact-select"
              >
                <option value="Aposentadorias">Aposentadorias (Idade, Tempo, Rural, Especial)</option>
                <option value="Salário-maternidade">Salário-maternidade (Urbano, Rural, Pescadora, MEI)</option>
                <option value="Seguro-defeso">Seguro-defeso (Pescador artesanal profissional)</option>
                <option value="BPC / LOAS">BPC / LOAS (Idoso 65+ ou Pessoa com Deficiência)</option>
                <option value="Auxílio por incapacidade">Benefício por incapacidade / Perícia médica</option>
                <option value="Pensão por morte">Pensão por morte &amp; Amparo a dependentes</option>
                <option value="Planejamento e CNIS">Planejamento Previdenciário &amp; Acerto de CNIS</option>
                <option value="Recurso e Negativa">Benefício negado no INSS / Recurso</option>
                <option value="Outro assunto jurídico">Outro assunto ou dúvida geral</option>
              </select>
              <ChevronDown size={16} className="contact-select-arrow" aria-hidden="true" />
            </div>
          </div>

          <div className="contact-form-field">
            <label htmlFor="contact-message">Resumo da sua situação (opcional)</label>
            <textarea
              id="contact-message"
              rows={3}
              disabled={status === "submitting"}
              placeholder="Conte brevemente sobre o seu trabalho, tempo de contribuição ou se o benefício já foi negado..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact-textarea"
            />
          </div>

          {status === "error" && (
            <div className="contact-form-error-alert" role="alert">
              <div className="flex items-center gap-2 font-semibold">
                <AlertCircle size={16} aria-hidden="true" />
                <span>Não foi possível enviar por e-mail</span>
              </div>
              <p>{errorMessage}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="submit"
                  className="button button-wine text-xs px-3 py-1.5 rounded-full inline-flex items-center gap-1.5"
                >
                  <RotateCcw size={13} />
                  <span>Tentar novamente</span>
                </button>
                <a
                  href={getWhatsAppFallbackUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline text-xs px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 text-emerald-800 border-emerald-600/40"
                >
                  <WhatsAppIcon size={13} />
                  <span>Enviar pelo WhatsApp agora</span>
                </a>
              </div>
            </div>
          )}

          <div className="contact-form-actions">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="button button-wine contact-submit-btn w-full sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={17} className="animate-spin" aria-hidden="true" />
                  <span>Enviando informações...</span>
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden="true" />
                  <span>Solicitar Análise da Equipe Jurídica</span>
                </>
              )}
            </button>
          </div>

          <div className="contact-security-note">
            <ShieldCheck size={15} className="contact-security-icon" aria-hidden="true" />
            <span>Atendimento ético e estritamente sigiloso · Dados protegidos conforme as normas da OAB e LGPD.</span>
          </div>
        </form>
      )}
    </div>
  );
}
