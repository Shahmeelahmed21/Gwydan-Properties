import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionHeading from "@/components/section-heading"
import ProjectsGrid from "@/components/projects-grid"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of property renovations across West Sussex, including Horsham and Goring-by-Sea. Before and after transformations.",
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <section className="px-6">
          <div className="mx-auto max-w-7xl">
            {/* Simple header (old-style vibe) */}
            <SectionHeading
              label="Our Work"
              title="Property Transformations"
              description="Explore our portfolio of renovations across West Sussex. Click a project to view the full refurbishment story and before/after sliders."
            />

            {/* Simple CTA row (optional but nice) */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Enquire <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:john@gwydan.com"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                john@gwydan.com
              </a>
            </div>

            {/* Grid */}
            <div className="mt-14">
              <ProjectsGrid />
            </div>

            {/* Small bottom CTA (simple) */}
            <div className="mt-16 rounded-2xl border border-border bg-secondary p-10 text-center">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Do you have a property to sell?
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                We’re always looking for our next refurbishment opportunity across West Sussex and the surrounding areas.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
