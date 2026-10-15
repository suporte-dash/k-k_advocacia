import { useState } from "react";
import { MessageCircle, Copy, Check, Sparkles, ShieldCheck, ChevronDown, ArrowUpRight } from "lucide-react";
import { PHONE_TEL } from "./site-config";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Aposentadorias");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function getFormattedMessage() {
    return `Olá, Dras. Karlla e Keyteler! Gostaria de uma orientação jurídica:
• Nome: ${name.trim() || "Não informado"}
• Contato: ${phone.trim() || "Não informado"}
• Assunto: ${subject}
• Mensagem: ${message.trim() || "Gostaria de agendar um atendimento inicial para análise do meu caso."}`;
  }

  function handleSubmitWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const text = encodeURIComponent(getFormattedMessage());
    const url = `https://wa.me/${PHONE_TEL.replace(/\D/g, "")}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleCopy() {
    navigator.clipboard.writeText(getFormattedMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <div className="contact-form-card" data-reveal>
      <div className="contact-form-header">
        <span className="contact-form-badge">
          <Sparkles size={13} aria-hidden="true" />
          <span>Atendimento Direto</span>
        </span>
        <h3 className="contact-form-title">Envie uma mensagem rápida</h3>
        <p className="contact-form-desc">
          Preencha os dados abaixo para adiantar seu atendimento. A mensagem será encaminhada diretamente para a equipe jurídica.
        </p>
      </div>

      <form onSubmit={handleSubmitWhatsApp} className="contact-form-body">
        <div className="contact-form-row">
          <div className="contact-form-field">
            <label htmlFor="contact-name">Seu nome completo</label>
            <input
              id="contact-name"
              type="text"
              required
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
              placeholder="(91) 90000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              onChange={(e) => setSubject(e.target.value)}
              className="contact-select"
            >
              <option value="Aposentadorias">Aposentadorias (Idade, Tempo, Rural, Especial)</option>
              <option value="Salário-maternidade">Salário-maternidade (Urbano, Rural, Pescadora)</option>
              <option value="Seguro-defeso">Seguro-defeso (Pescador artesanal)</option>
              <option value="BPC / LOAS">BPC / LOAS (Idoso 65+ ou Deficiência)</option>
              <option value="Pensão por morte">Pensão por morte</option>
              <option value="Auxílio por incapacidade">Auxílio por incapacidade / Doença</option>
              <option value="Revisão ou Planejamento">Revisão ou Planejamento Previdenciário</option>
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
            placeholder="Conte brevemente sobre o seu trabalho, tempo de contribuição ou se o benefício já foi negado..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contact-textarea"
          />
        </div>

        <div className="contact-form-actions">
          <button type="submit" className="button button-wine contact-submit-btn">
            <MessageCircle size={18} aria-hidden="true" />
            <span>Enviar pelo WhatsApp</span>
            <ArrowUpRight size={15} aria-hidden="true" className="contact-submit-arrow" />
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="button button-outline contact-copy-btn"
            title="Copiar mensagem para colar em outro aplicativo"
          >
            {copied ? (
              <>
                <Check size={16} aria-hidden="true" className="text-emerald-600" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <Copy size={16} aria-hidden="true" />
                <span>Copiar texto</span>
              </>
            )}
          </button>
        </div>

        <div className="contact-security-note">
          <ShieldCheck size={14} className="contact-security-icon" aria-hidden="true" />
          <span>Seus dados são protegidos pelo sigilo profissional da advocacia.</span>
        </div>

        {submitted && (
          <p className="contact-form-note" role="status">
            ✓ Abrindo conversa no WhatsApp oficial da K&K Advocacia...
          </p>
        )}
      </form>
    </div>
  );
}
