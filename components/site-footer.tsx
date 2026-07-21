const socials = [
  { label: 'LinkedIn', href: '#top' },
  { label: 'Instagram', href: '#top' },
  { label: 'YouTube', href: '#top' },
]

export function SiteFooter() {
  return (
    <footer className="bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-8 md:flex-row md:justify-between md:px-8">
        <p className="text-xs text-subtle">
          © {new Date().getFullYear()} Cavalier. All rights reserved.
        </p>

        <nav className="flex items-center gap-6 text-xs text-muted-foreground" aria-label="Footer">
          <a href="#top" className="transition-colors hover:text-foreground">
            Terms
          </a>
          <a href="#top" className="transition-colors hover:text-foreground">
            Privacy Policy
          </a>
        </nav>

        <div className="flex items-center gap-5 text-xs text-subtle">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
