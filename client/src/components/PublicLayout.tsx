import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]">
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <SiteFooter />
      <a
        href="https://wa.me/5551985109395"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[color:var(--petrol)] px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(45,90,90,0.3)] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--amber)]/40"
        aria-label="Abrir canal institucional no WhatsApp"
      >
        <MessageCircle className="size-5" /><span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
