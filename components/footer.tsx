import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Gwydan Properties Ltd
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium property renovations across Sussex. We buy, renovate,
              style and sell beautiful homes in Goring-by-Sea, Worthing and
              beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Footer navigation">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-accent-blue transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-accent-blue transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-accent-blue transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-accent-blue transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <p>hello@gwydanproperties.co.uk</p>
              <p>+44 (0) 1234 567 890</p>
              <p>Sussex, United Kingdom</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Gwydan Properties Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
