import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import ScrollProgress from "./ScrollProgress";
import { BRAND_LOGO, INSTAGRAM_URL, WHATSAPP_URL } from "./site-config";

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

  useEffect(() => {
    let frame = 0;

    const updateScrolledState = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 48);
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
    const sectionIds = Array.from(new Set(items.map((item) => getSamePageSectionId(item.href)).filter((id): id is string => Boolean(id))));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      setActiveSection(null);
      return;
    }

    const visibility = new Map(sections.map((section) => [section.id, 0]));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set((entry.target as HTMLElement).id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        const nextActive = sections
          .map((section) => ({ id: section.id, ratio: visibility.get(section.id) ?? 0 }))
          .filter(({ ratio }) => ratio > 0)
          .sort((a, b) => b.ratio - a.ratio)[0]?.id;

        setActiveSection(nextActive ?? null);
      },
      {
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0, 0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <ScrollProgress />
      <div className="utility-bar">
        <div className="site-container utility-inner">
          <span>Sociedade de Advogadas · Salinópolis, Pará</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram size={13} aria-hidden="true" /> @karllaekeyteleradvogadas
          </a>
        </div>
      </div>

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
                  onClick={() => setMenuOpen(false)}
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
