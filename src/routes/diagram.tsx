import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { ROOT, getChildren, getPerson, type Person } from "@/lib/lineage";

type Node = {
  id: string;
  name: string;
  note?: string;
  children: Node[];
};

function buildTree(id: string, depth: number, maxDepth: number): Node {
  const p = getPerson(id)!;
  const kids = depth < maxDepth ? getChildren(id) : [];
  return {
    id: p.id,
    name: p.name,
    note: p.note,
    children: kids.map((k) => buildTree(k.id, depth + 1, maxDepth)),
  };
}

function Cell({ node, isRoot = false }: { node: Node; isRoot?: boolean }) {
  return (
    <Link
      to={`/person/${node.id}`}
      className={`group block rounded-lg border bg-card px-3 py-2 text-center transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft ${
        isRoot
          ? "border-primary/60 bg-gradient-warm text-primary-foreground shadow-elegant"
          : "border-border"
      }`}
    >
      <div
        className={`font-display font-semibold tracking-tight ${
          isRoot ? "text-xl" : "text-sm"
        }`}
      >
        u{node.name}
      </div>
    </Link>
  );
}



export default function Diagram() {
  useEffect(() => {
    document.title = "Diagram — Mqhoko Lineage";
  }, []);

  const root = buildTree(ROOT.id, 0, 2);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            Umzobo wosapho
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight md:text-6xl">
            Lineage diagram
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A top-down view of uMqhoko and the branches descending from him.
            Tap any name to open their page.
          </p>
        </header>

        {/* Punnett-style grid*/}
        <section className="mb-16">
          <div className="rounded-2xl border border-border bg-card/40 p-6 md:p-10 overflow-x-auto">
            <div className="mx-auto flex justify-center min-w-fit">
              {/* Root */}
              <div className="flex flex-col items-center">
                <div className="mb-2 w-56">
                  <Cell node={{ id: root.id, name: root.name, children: [] }} isRoot />
                </div>
                <div className="h-6 w-px bg-border" />
                {/* horizontal bar above branches */}
                <div className="relative w-full">
                  <div
                    className="absolute left-0 right-0 top-0 h-px bg-border"
                    style={{
                      left: `${100 / (root.children.length * 2)}%`,
                      right: `${100 / (root.children.length * 2)}%`,
                    }}
                  />
                </div>
                <div className="flex items-start gap-8 pt-0">
                  {root.children.map((branch) => (
                    <div key={branch.id} className="flex flex-col items-center">
                      <div className="h-6 w-px bg-border" />
                      <Cell node={branch} />
                      {branch.children.length > 0 && (
                        <>
                          <div className="h-5 w-px bg-border" />
                          <div className="grid auto-cols-max grid-flow-col gap-2 border-t border-border pt-4">
                            {branch.children.map((g) => (
                              <Cell key={g.id} node={g} />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Punnett-square style matrix*/}
        <section>
          <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight">
            Branches side-by-side
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-r border-border bg-secondary/60 px-4 py-3 text-left text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Generation
                  </th>
                  {root.children.map((b) => (
                    <th
                      key={b.id}
                      className="border-b border-r border-border bg-secondary/60 px-4 py-3 text-center"
                    >
                      <Link
                        to={`/person/${b.id}`}
                        className="font-display text-lg font-semibold tracking-tight hover:text-primary"
                      >
                        u{b.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r border-border bg-secondary/30 px-4 py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Children
                  </td>
                  {root.children.map((b) => (
                    <td
                      key={b.id}
                      className="border-r border-border px-4 py-4 align-top"
                    >
                      <div className="flex flex-wrap gap-2">
                        {b.children.length > 0 ? (
                          b.children.map((g) => (
                            <Link
                              key={g.id}
                              to={`/person/${g.id}`}
                              className="rounded-md border border-border bg-card px-2.5 py-1 text-sm transition-colors hover:border-primary/50 hover:bg-secondary"
                            >
                              u{g.name}
                            </Link>
                          ))
                        ) : (
                          <span className="text-sm text-muted-foreground">—</span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}


export type { Person };
