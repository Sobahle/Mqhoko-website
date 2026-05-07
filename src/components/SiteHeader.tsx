import { Link, NavLink } from "react-router-dom";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-warm text-primary-foreground shadow-soft">
            <span className="font-display text-lg font-semibold">M</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight">
              Mqhoko Lineage
            </span>
            <span className="text-xs text-muted-foreground">Inzalo yakwa Mqhoko</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "text-foreground font-medium"
                : "text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            Ekhaya
          </NavLink>
          <NavLink
            to="/tree"
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "text-foreground font-medium"
                : "text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            Umthi wosapho
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
