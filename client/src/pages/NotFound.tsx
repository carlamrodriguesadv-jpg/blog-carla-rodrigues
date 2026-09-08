import PublicLayout from "@/components/PublicLayout";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <PublicLayout><section className="container py-28 text-center sm:py-40"><p className="eyebrow">Página não encontrada</p><p className="mt-6 font-display text-8xl text-[color:var(--amber)]">404</p><h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Este endereço não faz parte do arquivo.</h1><p className="mx-auto mt-5 max-w-xl leading-7 text-[color:var(--ink-soft)]">Retorne à página inicial ou consulte os artigos disponíveis.</p><Link href="/" className="button-primary mt-9"><ArrowLeft className="size-4" /> Voltar ao início</Link></section></PublicLayout>;
}

