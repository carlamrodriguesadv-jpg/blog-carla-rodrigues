import ArticleCard from "@/components/ArticleCard";
import PublicLayout from "@/components/PublicLayout";
import { categories, filterArticles } from "@/data/articles";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { useDeferredValue, useEffect, useMemo, useState } from "react";

const PAGE_SIZE = 6;
function initialCategory() {
  const source = window.location.hash.includes("?") ? window.location.hash.split("?")[1] : window.location.search.slice(1);
  return new URLSearchParams(source).get("categoria") ?? "";
}

export default function Articles() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [page, setPage] = useState(1);
  const deferredQuery = useDeferredValue(query);
  const filtered = useMemo(() => filterArticles(deferredQuery, category), [deferredQuery, category]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  useEffect(() => { document.title = "Artigos de Direito Criminal | Dra. Carla Rodrigues"; }, []);
  useEffect(() => { setPage(1); }, [deferredQuery, category]);

  return <PublicLayout><section className="border-b border-[color:var(--line)] bg-[color:var(--beige)]/55"><div className="container py-16 sm:py-24"><p className="eyebrow">Arquivo editorial</p><div className="mt-5 grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"><h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">Conhecimento para compreender o Direito Criminal.</h1><p className="max-w-xl leading-7 text-[color:var(--ink-soft)] lg:justify-self-end">Artigos informativos organizados por tema, com linguagem acessível e compromisso editorial.</p></div></div></section><section className="container py-14 sm:py-20"><div className="grid gap-4 border-b border-[color:var(--line)] pb-8"><label className="relative block"><span className="sr-only">Buscar artigos</span><Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[color:var(--muted)]" /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar por assunto, título ou palavra-chave" className="h-12 w-full rounded-none border border-[color:var(--line)] bg-white/60 pl-11 pr-4 text-sm outline-none placeholder:text-[color:var(--muted)] focus-visible:ring-2 focus-visible:ring-[color:var(--petrol)]" /></label><div className="flex gap-2 overflow-x-auto pb-1" aria-label="Filtrar por categoria"><button type="button" onClick={() => setCategory("")} className={`filter-tab ${!category ? "filter-tab-active" : ""}`}>Todos</button>{categories.map(item => <button type="button" key={item.id} onClick={() => setCategory(item.slug)} className={`filter-tab ${category === item.slug ? "filter-tab-active" : ""}`}>{item.name}</button>)}</div></div>{visible.length ? <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{visible.map(article => <ArticleCard key={article.id} article={article} />)}</div> : <div className="mx-auto max-w-2xl py-24 text-center"><p className="font-display text-6xl text-[color:var(--amber)]">§</p><h2 className="mt-6 font-display text-3xl font-semibold">Nenhum artigo encontrado</h2><p className="mt-4 leading-7 text-[color:var(--ink-soft)]">Ajuste os termos de busca ou escolha outra categoria.</p></div>}{totalPages > 1 ? <div className="mt-14 flex items-center justify-between border-t border-[color:var(--line)] pt-7"><button type="button" onClick={() => setPage(value => Math.max(1, value - 1))} disabled={page === 1} className="button-secondary disabled:opacity-40"><ArrowLeft className="size-4" /> Anterior</button><span className="text-sm text-[color:var(--muted)]">Página {page} de {totalPages}</span><button type="button" onClick={() => setPage(value => Math.min(totalPages, value + 1))} disabled={page === totalPages} className="button-secondary disabled:opacity-40">Próxima <ArrowRight className="size-4" /></button></div> : null}</section></PublicLayout>;
}
