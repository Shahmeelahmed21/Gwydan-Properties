import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Gwydan Properties Ltd
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Restoring Potential, Renewing Communities. We acquire and
              refurbish residential properties across West Sussex and the
              surrounding counties.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="mailto:john@gwydan.com"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                john@gwydan.com
              </a>
              <a
                href="tel:+447956568626"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                +44 7956 568626
              </a>
               <a
                href="tel:02083371777"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                02083371777
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                West Sussex, United Kingdom
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest">
              Navigation
            </h4>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Footer navigation">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest">
              Areas We Cover
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>West Sussex</li>
              <li>Surrey </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Gwydan Properties Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              Company
            </Link>
            <a
              href="mailto:john@gwydan.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
