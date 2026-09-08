import ArticleBody from "@/components/ArticleBody";
import PublicLayout from "@/components/PublicLayout";
import { getArticleBySlug } from "@/data/articles";
import { ArrowLeft, Check, ExternalLink, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function ArticleDetail({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState(false);
  useEffect(() => {
    if (!article) { document.title = "Artigo não encontrado | Dra. Carla Rodrigues"; return; }
    document.title = `${article.title} | Dra. Carla Rodrigues`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", article.metaDescription);
  }, [article]);

  async function share() {
    if (!article) return;
    setShareError(false);
    try {
      if (navigator.share) { await navigator.share({ title: article.title, text: article.excerpt, url: window.location.href }); return; }
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true); window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShareError(true);
    }
  }

  if (!article) return <PublicLayout><div className="container py-28 text-center"><p className="font-display text-7xl text-[color:var(--amber)]">404</p><h1 className="mt-5 font-display text-4xl font-semibold">Artigo não encontrado</h1><Link href="/artigos" className="button-secondary mt-8"><ArrowLeft className="size-4" /> Voltar aos artigos</Link></div></PublicLayout>;
  const publishedDate = new Date(article.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" });
  return <PublicLayout><article><header className="border-b border-[color:var(--line)] bg-[color:var(--beige)]/55"><div className="container max-w-5xl py-14 sm:py-20"><Link href="/artigos" className="editorial-link inline-flex items-center gap-2 text-sm font-semibold"><ArrowLeft className="size-4" /> Voltar ao arquivo</Link><div className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--petrol)]"><span className="h-px w-8" style={{ backgroundColor: article.categoryColor }} />{article.categoryName}</div><h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl">{article.title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-[color:var(--ink-soft)]">{article.excerpt}</p><div className="mt-9 flex flex-col gap-5 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between"><p>Por <strong className="text-[color:var(--ink)]">{article.authorName}</strong> · {publishedDate}</p><button type="button" onClick={share} className="inline-flex h-9 items-center justify-center gap-2 border border-[color:var(--line)] bg-white/50 px-4 text-sm font-medium transition-colors hover:border-[color:var(--amber)] hover:bg-[color:var(--beige)]">{copied ? <Check className="size-4" /> : <Share2 className="size-4" />} {copied ? "Copiado" : "Compartilhar"}</button></div><p aria-live="polite" className="mt-3 text-sm text-[color:var(--amber-dark)]">{shareError ? "Não foi possível compartilhar. Copie o endereço exibido no navegador." : ""}</p></div></header><div className="container grid max-w-6xl gap-12 py-14 lg:grid-cols-[1fr_240px] lg:py-20"><div className="article-content min-w-0"><ArticleBody content={article.content} /></div><aside className="border-t border-[color:var(--amber)] pt-6 lg:sticky lg:top-28 lg:self-start"><p className="eyebrow">Nota editorial</p><p className="mt-4 text-sm leading-6 text-[color:var(--ink-soft)]">Este conteúdo possui caráter informativo e não substitui a análise individualizada de um caso concreto.</p><div className="mt-7 flex flex-wrap gap-2">{article.tags.map(tag => <span key={tag} className="border border-[color:var(--line)] px-2.5 py-1 text-xs text-[color:var(--muted)]">{tag}</span>)}</div>{article.sourceUrl ? <a href={article.sourceUrl} target="_blank" rel="noreferrer" className="editorial-link mt-7 inline-flex items-center gap-2 text-sm font-semibold">Fonte consultada <ExternalLink className="size-3.5" /></a> : null}</aside></div></article></PublicLayout>;
}
