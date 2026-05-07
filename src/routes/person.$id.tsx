import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { PersonChip } from "@/components/PersonCard";
import { getPerson, getChildren, getAncestry } from "@/lib/lineage";

export default function PersonPage() {
  const { id = "" } = useParams();
  const person = getPerson(id);

  useEffect(() => {
    if (person) document.title = `u${person.name} — Mqhoko Lineage`;
  }, [person]);

  if (!person) {
    return (
      <div className="min-h-screen">
        <SiteHeader />
        <div className="mx-auto max-w-2xl px-6 py-32 text-center">
          <h1 className="font-display text-5xl font-semibold">Akafumaneki</h1>
          <p className="mt-4 text-muted-foreground">
            This person isn't in the lineage record yet.
          </p>
          <Link to="/" className="mt-8 inline-block text-primary underline-offset-4 hover:underline">
            ← Back home
          </Link>
        </div>
      </div>
    );
  }

  const children = getChildren(person.id);
  const ancestry = getAncestry(person.id);
  const parent = ancestry.length > 1 ? ancestry[ancestry.length - 2] : null;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {ancestry.map((a, i) => (
            <span key={a.id} className="flex items-center gap-2">
              {i > 0 && <span className="opacity-50">›</span>}
              {a.id === person.id ? (
                <span className="font-medium text-foreground">u{a.name}</span>
              ) : (
                <Link
                  to={`/person/${a.id}`}
                  className="transition-colors hover:text-foreground"
                >
                  u{a.name}
                </Link>
              )}
            </span>
          ))}
        </nav>

        <header className="border-b border-border pb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            Inzalo ka {person.name}
          </p>
          <h1 className="mt-4 font-display text-6xl font-semibold tracking-tight md:text-7xl">
            u{person.name}
          </h1>
          {person.note && (
            <p className="mt-4 font-display text-xl italic text-muted-foreground">
              {person.note}
            </p>
          )}
          {person.bio && (
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/90">
              {person.bio}
            </p>
          )}
        </header>

        <section className="py-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Inzalo — Descendants
          </h2>

          {person.children.length === 0 ? (
            <p className="mt-6 text-muted-foreground">
              Akukho nzalo ibhalwe phantsi ka {person.name} okwangoku.
            </p>
          ) : (
            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {person.children.map((c: string, i: number) => {
                const found = getPerson(c.toLowerCase());
                const Wrapper = found
                  ? ({ children }: { children: React.ReactNode }) => (
                      <Link
                        to={`/person/${found.id}`}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft"
                      >
                        {children}
                      </Link>
                    )
                  : ({ children }: { children: React.ReactNode }) => (
                      <div className="flex items-center justify-between gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-5">
                        {children}
                      </div>
                    );
                return (
                  <li key={c + i}>
                    <Wrapper>
                      <div className="flex items-center gap-4">
                        <span className="font-display text-sm tabular-nums text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-xl">u{c}</span>
                      </div>
                      {found && (
                        <span className="text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          Explore →
                        </span>
                      )}
                    </Wrapper>
                  </li>
                );
              })}
            </ol>
          )}
        </section>

        {children.length > 0 && (
          <section className="border-t border-border pt-12">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              Continue the line
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              These descendants have their own documented lineage:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {children.map((c) => (
                <PersonChip key={c.id} name={c.name} />
              ))}
            </div>
          </section>
        )}

        {parent && (
          <div className="mt-16 border-t border-border pt-8">
            <Link
              to={`/person/${parent.id}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Buyela ku {parent.name}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
