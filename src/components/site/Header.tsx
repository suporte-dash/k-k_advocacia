import { useEffect, useState, useRef } from "react";
import type { MouseEvent } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ScrollProgress from "./ScrollProgress";
import { BRAND_LOGO, WHATSAPP_URL } from "./site-config";

export type SiteNavItem = { href: string; label: string };

type HeaderProps = {
  items: SiteNavItem[];
  brandHref: string;
  onBrandClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

function getSamePageSectionId(href: string): string | null {
  try {
    const url = new URL(href, window.location.href);
    if (!url.hash || url.origin !== window.location.origin || url.pathname !== window.location.pathname) {
      return null;
    }
    return decodeURIComponent(url.hash.slice(1));
  } catch {
    return null;
  }
}

export default function Header({ items, brandHref, onBrandClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isManualScrollRef = useRef(false);
  const manualScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let frame = 0;

    const updateScrolledState = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 32);
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScrolledState);
    };

    updateScrolledState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sectionIds = Array.from(
      new Set(
        items
          .map((item) => getSamePageSectionId(item.href))
          .filter((id): id is string => Boolean(id))
      )
    );

    const updateActiveSection = () => {
      if (isManualScrollRef.current) return;

      // Se estiver no topo da página (Hero)
      if (window.scrollY < 120) {
        setActiveSection(null);
        return;
      }

      // Se estiver no final da página (rodapé/contato)
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;
      if (isAtBottom) {
        const lastId = sectionIds[sectionIds.length - 1];
        if (lastId) {
          setActiveSection(lastId);
          return;
        }
      }

      // Linha de detecção no terço superior da viewport (abaixo do header fixo)
      const probeLine = Math.min(window.innerHeight * 0.35, 260);

      // Encontra a seção ativa mais avançada na rolagem vertical
      let currentId: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // A seção já tocou ou passou pela linha de prova, e seu rodapé ainda está visível abaixo do header
        if (rect.top <= probeLine && rect.bottom > 80) {
          currentId = id;
        }
      }

      setActiveSection(currentId);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (manualScrollTimerRef.current) {
        clearTimeout(manualScrollTimerRef.current);
      }
    };
  }, [items]);

  const handleNavClick = (sectionId: string | null) => {
    setMenuOpen(false);
    if (sectionId) {
      setActiveSection(sectionId);
      isManualScrollRef.current = true;
      if (manualScrollTimerRef.current) {
        clearTimeout(manualScrollTimerRef.current);
      }
      manualScrollTimerRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
      }, 850);
    }
  };

  return (
    <>
      <ScrollProgress />
      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
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
            {items.map((item) => {
              const sectionId = getSamePageSectionId(item.href);
              const isActive = Boolean(sectionId && activeSection === sectionId);

              return (
                <a
                  key={`${item.href}-${item.label}`}
                  className={isActive ? "is-active" : undefined}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => handleNavClick(sectionId)}
                >
                  {item.label}
                </a>
              );
            })}
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
