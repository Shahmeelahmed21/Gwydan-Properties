import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Home, Paintbrush, Sparkles, TrendingUp, MapPin, Star, Eye } from "lucide-react"
import { projects } from "@/data/projects"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import SectionHeading from "@/components/section-heading"

const processSteps = [
  {
    icon: Home,
    title: "Buy",
    description: "We source properties with untapped potential across Sussex, focusing on Goring-by-Sea and Worthing.",
  },
  {
    icon: Paintbrush,
    title: "Renovate",
    description: "Every detail is carefully planned and executed with premium materials and skilled tradespeople.",
  },
  {
    icon: Sparkles,
    title: "Style",
    description: "Professional staging and styling to showcase each home at its absolute best.",
  },
  {
    icon: TrendingUp,
    title: "Sell",
    description: "Beautifully presented homes that attract buyers and achieve strong results.",
  },
]

const stats = [
  { label: "Areas Served", value: "Goring & Worthing", icon: MapPin },
  { label: "Focus", value: "Premium Renovations", icon: Star },
  { label: "Approach", value: "Quality First", icon: Eye },
]

export default function Page() {
  const featured = projects.slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1920&q=80"
              alt="Beautifully renovated Sussex home interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-32">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
              Sussex Property Renovation
            </p>
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-6xl lg:text-7xl max-w-3xl text-balance leading-tight">
              Property Transformations in Sussex
            </h1>
            <p className="mt-6 max-w-xl text-lg text-light-highlight/80 leading-relaxed">
              We breathe new life into homes across Goring-by-Sea and Worthing.
              From full renovations to stylish refreshes, every project is
              crafted with care and quality.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-blue px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent-blue/90 hover:shadow-lg hover:shadow-accent-blue/20"
              >
                View Transformations
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-foreground/20 bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-foreground/40 hover:bg-foreground/5 backdrop-blur-sm"
              >
                Enquire
              </Link>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-blue/10 text-accent-blue">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured projects */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Portfolio"
              title="Featured Transformations"
              description="A selection of our recent property renovations across Sussex, showcasing the quality and attention to detail we bring to every project."
            />
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-light-highlight transition-colors"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-6 bg-secondary">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="How We Work"
              title="Our Process"
              description="A proven approach to transforming properties. From sourcing the right home to delivering a stunning finished product."
            />
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="relative rounded-lg border border-border bg-card p-6 transition-all hover:border-accent-blue/40 hover:shadow-lg hover:shadow-accent-blue/5"
                >
                  <span className="absolute -top-3 right-4 rounded-full bg-accent-blue/10 px-2.5 py-0.5 text-xs font-bold text-accent-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-blue/10 text-accent-blue">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="Start a Conversation"
              title="Have a Property in Mind?"
              description="Whether you are looking to invest, sell, or simply want to learn more about what we do, we would love to hear from you."
            />
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-blue px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent-blue/90 hover:shadow-lg hover:shadow-accent-blue/20"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
