import { ArrowUpRight, Instagram } from "lucide-react";
import { BRAND_LOGO, INSTAGRAM_URL, WHATSAPP_URL } from "./site-config";

type FooterProps = {
  homeHref: string;
  onHomeClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function Footer({ homeHref, onHomeClick }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-container footer-top">
        <a className="brand brand-footer" href={homeHref} onClick={onHomeClick} aria-label="Voltar ao início">
          <span className="brand-mark">
            <img src={BRAND_LOGO} alt="Logo oficial Karlla Pinheiro e Keyteler Leite" width="160" height="107" loading="lazy" />
          </span>
          <span className="brand-copy">
            <span>Karlla Pinheiro</span>
            <span>&amp; Keyteler Leite</span>
            <small>Sociedade de Advogadas</small>
          </span>
        </a>
        <p className="eyebrow footer-eyebrow">Responsabilidade, cuidado e compromisso em cada conversa</p>
        <a className="footer-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Fale conosco <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="site-container footer-bottom">
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          Instagram <Instagram size={13} aria-hidden="true" />
        </a>
        <span>© {new Date().getFullYear()} Karlla Pinheiro e Keyteler Leite Sociedade de Advogadas</span>
        <span>Salinópolis / PA</span>
      </div>
    </footer>
  );
}
