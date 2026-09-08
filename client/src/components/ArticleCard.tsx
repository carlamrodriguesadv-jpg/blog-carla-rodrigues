import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "wouter";

export type ArticleCardData = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl?: string | null;
  publishedAt?: Date | string | null;
  categoryName: string;
  categoryColor?: string | null;
};

function formatDate(value?: Date | string | null) {
  if (!value) return "Conteúdo editorial";
  return new Date(value).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function ArticleCard({ article, featured = false }: { article: ArticleCardData; featured?: boolean }) {
  return (
    <article className={`group grid overflow-hidden border border-[color:var(--line)] bg-white/55 backdrop-blur-sm ${featured ? "md:grid-cols-[1.08fr_0.92fr]" : "grid-rows-[210px_1fr]"}`}>
      <Link href={`/artigos/${article.slug}`} className="relative block min-h-52 overflow-hidden bg-[color:var(--beige)]">
        {article.coverImageUrl ? (
          <img src={article.coverImageUrl} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
        ) : (
          <div className="editorial-pattern absolute inset-0"><span className="absolute bottom-6 left-6 font-display text-6xl text-[color:var(--amber)]/45">§</span></div>
        )}
      </Link>
      <div className={`flex flex-col ${featured ? "p-7 sm:p-10" : "p-6"}`}>
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--petrol)]">
          <span className="h-px w-7" style={{ backgroundColor: article.categoryColor || "#2D5A5A" }} />{article.categoryName}
        </div>
        <h2 className={`mt-5 font-display font-semibold leading-[1.04] tracking-tight ${featured ? "text-4xl lg:text-5xl" : "text-3xl"}`}>
          <Link href={`/artigos/${article.slug}`} className="transition-colors hover:text-[color:var(--amber-dark)]">{article.title}</Link>
        </h2>
        <p className="mt-5 line-clamp-3 text-sm leading-7 text-[color:var(--ink-soft)]">{article.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-7 text-xs text-[color:var(--muted)]">
          <span className="flex items-center gap-2"><Clock3 className="size-3.5" />{formatDate(article.publishedAt)}</span>
          <Link href={`/artigos/${article.slug}`} className="grid size-9 place-items-center border border-[color:var(--line)] transition-colors group-hover:border-[color:var(--amber)] group-hover:bg-[color:var(--amber)] group-hover:text-[color:var(--ink)]" aria-label={`Ler ${article.title}`}><ArrowUpRight className="size-4" /></Link>
        </div>
      </div>
    </article>
  );
}
