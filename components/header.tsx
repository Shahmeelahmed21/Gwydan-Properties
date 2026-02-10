"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-20 w-20 overflow-hidden rounded-md">
            <Image
              src="/brand/logo.jpg"
              alt="Gwydan Properties Ltd logo"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.style.display = "none"
                const fallback = target.parentElement?.querySelector(".logo-fallback") as HTMLElement
                if (fallback) fallback.style.display = "flex"
              }}
            />
            <span
              className="logo-fallback hidden items-center justify-center h-full w-full bg-accent-blue text-primary-foreground font-serif font-bold text-lg"
              aria-hidden="true"
            >
              G
            </span>
          </div>
          <span className="font-serif text-lg font-semibold text-foreground tracking-tight group-hover:text-accent-blue transition-colors">
            Gwydan Properties
          </span>
        </Link>

        {/* Desktop nav */}
      <nav className="hidden md:flex items-center">
      {/* Glass pill background */}
      <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-black/25 backdrop-blur px-2 py-2 shadow-sm">
        {navLinks.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={[
                "rounded-xl px-4 py-2 text-sm font-semibold transition",
                "text-white/90 hover:text-white hover:bg-white/10",
                "drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]",
                active ? "bg-white/15 text-white shadow-sm" : "",
              ].join(" ")}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="md:hidden bg-navy-deep/98 backdrop-blur-md border-t border-border px-6 pb-6 pt-2"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm font-medium py-3 px-3 rounded-md transition-colors",
                  pathname === link.href
                    ? "text-accent-blue bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
