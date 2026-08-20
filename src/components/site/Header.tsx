import { useEffect, useState } from "react";
import { ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import { BRAND_LOGO, INSTAGRAM_URL, WHATSAPP_URL } from "./site-config";

export type SiteNavItem = { href: string; label: string };

type HeaderProps = {
  items: SiteNavItem[];
  brandHref: string;
  onBrandClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function Header({ items, brandHref, onBrandClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="utility-bar">
        <div className="site-container utility-inner">
          <span>Sociedade de Advogadas · Salinópolis, Pará</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram size={13} aria-hidden="true" /> @karllaekeyteleradvogadas
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">
          <a className="brand" href={brandHref} onClick={onBrandClick} aria-label="Voltar ao início">
            <span className="brand-mark">
              <img src={BRAND_LOGO} alt="Logo oficial Karlla Pinheiro e Keyteler Leite" width="160" height="160" />
            </span>
            <span className="brand-copy">
              <span>Karlla Pinheiro</span>
              <span>&amp; Keyteler Leite</span>
              <small>Sociedade de Advogadas</small>
            </span>
          </a>

          <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            {items.map((item) => (
              <a key={`${item.href}-${item.label}`} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Fale conosco <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}
