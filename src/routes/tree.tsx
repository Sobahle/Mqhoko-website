import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { ROOT, getChildren, getPerson } from "@/lib/lineage";

function Node({ id, depth = 0 }: { id: string; depth?: number }) {
  const person = getPerson(id);
  if (!person) return null;
  const kids = getChildren(id);

  return (
    <li className="relative">
      <div className="flex items-center gap-3">
        <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-gradient-warm" />
        <Link
          to={`/person/${person.id}`}
          className="group inline-flex items-baseline gap-3 rounded-md px-2 py-1 transition-colors hover:bg-secondary"
        >
          <span
            className={
              depth === 0
                ? "font-display text-3xl font-semibold tracking-tight"
                : depth === 1
                  ? "font-display text-2xl font-semibold tracking-tight"
                  : "font-display text-lg"
            }
          >
            u{person.name}
          </span>
          {person.note && (
            <span className="text-xs italic text-muted-foreground">{person.note}</span>
          )}
        </Link>
      </div>

      {(kids.length > 0 || person.children.length > 0) && (
        <ul className="ml-3 mt-2 space-y-2 border-l border-border/70 pl-5">
          {kids.map((k) => (
            <Node key={k.id} id={k.id} depth={depth + 1} />
          ))}
          {person.children
            .filter(
              (c) => !kids.some((k) => k.name.toLowerCase() === c.toLowerCase()),
            )
            .map((c, i) => (
              <li key={c + i} className="flex items-center gap-3 text-muted-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                <span className="text-base">u{c}</span>
              </li>
            ))}
        </ul>
      )}
    </li>
  );
}

export default function Tree() {
  useEffect(() => {
    document.title = "Family Tree — Mqhoko Lineage";
  }, []);
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        <header className="mb-12">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Umthi wosapho</p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight md:text-6xl">
            The full family tree
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every documented name in the Mqhoko lineage. Tap any name with a dot to open their page.
          </p>
        </header>

        <ul className="space-y-3">
          <Node id={ROOT.id} />
        </ul>
      </div>
    </div>
  );
}
