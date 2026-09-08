import { Instagram, Mail, MapPin, Scale } from "lucide-react";
import { Link } from "wouter";

export default function SiteFooter() {
  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--paper)]">
      <div className="container grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center border border-[color:var(--amber)]"><Scale className="size-5" /></span>
            <div><p className="font-display text-2xl">Dra. Carla Rodrigues</p><p className="text-xs uppercase tracking-[0.2em] text-[color:var(--rose)]">OAB/RS 105.614</p></div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-[color:var(--rose)]">Conteúdo jurídico de caráter informativo sobre Direito Criminal. Cada situação exige análise individualizada por profissional habilitado.</p>
        </div>
        <div>
          <p className="eyebrow text-[color:var(--amber)]">Navegação</p>
          <div className="mt-5 grid gap-3 text-sm text-[color:var(--rose)]">
            <Link href="/">Início</Link><Link href="/artigos">Artigos</Link><Link href="/sobre">Sobre</Link><a href="https://www.carlaadvocac.click" target="_blank" rel="noreferrer">Site institucional</a>
          </div>
        </div>
        <div>
          <p className="eyebrow text-[color:var(--amber)]">Canais institucionais</p>
          <div className="mt-5 grid gap-4 text-sm text-[color:var(--rose)]">
            <a className="flex items-start gap-3" href="mailto:carlamrodrigues.adv@gmail.com"><Mail className="mt-0.5 size-4 shrink-0 text-[color:var(--amber)]" /> carlamrodrigues.adv@gmail.com</a>
            <a className="flex items-start gap-3" href="https://instagram.com/carla.rodriguesadv" target="_blank" rel="noreferrer"><Instagram className="mt-0.5 size-4 shrink-0 text-[color:var(--amber)]" /> @carla.rodriguesadv</a>
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-[color:var(--amber)]" /> Av. Maringá, 205, sala 102 térreo, Alvorada/RS</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="container flex flex-col gap-2 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Dra. Carla Rodrigues.</p><p>Publicidade informativa em conformidade com o Provimento 205/2021.</p></div></div>
    </footer>
  );
}
