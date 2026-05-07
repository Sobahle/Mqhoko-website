import { Link } from "react-router-dom";
import { findByName } from "@/lib/lineage";

export function PersonChip({ name }: { name: string }) {
  const person = findByName(name);
  if (person) {
    return (
      <Link
        to={`/person/${person.id}`}
        className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-soft"
      >
        <span>{name}</span>
        <span className="text-xs opacity-60 transition-opacity group-hover:opacity-100">→</span>
      </Link>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground">
      {name}
    </span>
  );
}
