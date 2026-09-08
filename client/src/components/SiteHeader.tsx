import { Menu, Scale, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Artigos", href: "/artigos" },
  { label: "Sobre", href: "/sobre" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)]/70 bg-[color:var(--paper)]/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="Página inicial do blog">
          <span className="grid size-10 place-items-center border border-[color:var(--amber)] bg-[color:var(--ink)] text-[color:var(--paper)] transition-transform duration-200 group-hover:-translate-y-0.5">
            <Scale className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-none">
            <strong className="block font-display text-xl font-semibold tracking-tight">Carla Rodrigues</strong>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.23em] text-[color:var(--petrol)]">Direito Criminal · OAB/RS 105.614</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={location === item.href ? "page" : undefined}
              className={`editorial-link text-sm font-semibold ${location === item.href ? "text-[color:var(--amber-dark)]" : "text-[color:var(--ink-soft)]"}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.carlaadvocac.click"
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            Site institucional
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(value => !value)}
          className="grid size-11 place-items-center border border-[color:var(--line)] bg-white/50 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-navigation" className="border-t border-[color:var(--line)] bg-[color:var(--paper)] px-5 py-5 md:hidden" aria-label="Navegação móvel">
          <div className="mx-auto grid max-w-xl gap-1">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} aria-current={location === item.href ? "page" : undefined} onClick={() => setOpen(false)} className="border-b border-[color:var(--line)] px-2 py-4 font-semibold">
                {item.label}
              </Link>
            ))}
            <a href="https://www.carlaadvocac.click" target="_blank" rel="noreferrer" className="button-primary mt-4 justify-center">
              Acessar site institucional
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
