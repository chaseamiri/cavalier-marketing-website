const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rotate-45 rounded-sm bg-primary" />
              <span className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-foreground">
                Cavalier
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              AI-powered lead systems that capture, qualify, and book every job for home service businesses.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">© {new Date().getFullYear()} Cavalier. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-subtle">
            <a href="#top" className="transition-colors hover:text-muted-foreground">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-muted-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
