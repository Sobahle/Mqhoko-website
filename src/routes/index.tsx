import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { PEOPLE, ROOT, getChildren } from "@/lib/lineage";
import heroImg from "@/assets/lineage-hero.jpg";

export default function Index() {
  const rootChildren = getChildren(ROOT.id);
  const totalDocumented = PEOPLE.length;

  useEffect(() => {
    document.title = "Mqhoko Lineage — Inzalo yakwa Mqhoko";
  }, []);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt=""
            width={1600}
            height={1024}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Inzalo yakwa Mqhoko
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            The lineage of{" "}
            <span className="bg-gradient-warm bg-clip-text text-transparent">uMqhoko</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            A living record of the Mqhoko family — the elders, the branches and
            the children carried forward through generations. Walk the tree,
            trace a name, remember.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to={`/person/${ROOT.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              Begin with uMqhoko
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/tree"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-card"
            >
              View full tree
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 md:grid-cols-4">
            <Stat label="Documented names" value={String(totalDocumented)} />
            <Stat label="Generations" value="6+" />
            <Stat label="Main branches" value={String(rootChildren.length)} />
            <Stat label="Origin" value="uMqhoko" />
          </dl>
        </div>
      </section>

      {/* Branches */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Amagatya — The branches
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              The three sons of uMqhoko, each the head of a line that grew into
              its own family.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {rootChildren.map((p, i) => {
            const grandChildren = getChildren(p.id);
            return (
              <Link
                key={p.id}
                to={`/person/${p.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-warm opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
                <div className="relative">
                  <span className="font-display text-sm tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                    u{p.name}
                  </h3>
                  {p.note && (
                    <p className="mt-1 text-sm italic text-muted-foreground">
                      {p.note}
                    </p>
                  )}
                  <p className="mt-6 text-sm text-muted-foreground">
                    {grandChildren.length > 0
                      ? `${grandChildren.length} documented descendant${grandChildren.length === 1 ? "" : "s"}`
                      : `${p.children.length} children recorded`}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Explore branch
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
          <p>Inzalo yakwa Mqhoko · Compiled with care for the family.</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2 font-display text-3xl font-semibold tracking-tight">
        {value}
      </dd>
    </div>
  );
}
