import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, MapPin, Calendar, CheckCircle2 } from "lucide-react"
import { getProjectBySlug, getAllSlugs } from "@/data/projects"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BeforeAfterSlider from "@/components/before-after-slider"

export async function generateStaticParams() {
  return getAllSlugs().map((slug: string) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} | ${project.area}`,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const beforeAfterPairs: typeof project.beforeAfterPairs =
    (project.beforeAfterPairs ?? []).length > 0
      ? project.beforeAfterPairs
      : [
          {
            label: "Before & After",
            before: project.beforeImages?.[0],
            after: project.afterImages?.[0],
          },
        ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gwydanproperties.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://gwydanproperties.co.uk/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://gwydanproperties.co.uk/projects/${project.slug}`,
      },
    ],
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.summary,
    author: {
      "@type": "Organization",
      name: "Gwydan Properties Ltd",
    },
    datePublished: `${project.year}-01-01`,
    image: project.afterImages[0],
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        {/* Back link */}
        <div className="mx-auto max-w-5xl px-6 mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-blue transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-5xl px-6 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-3">
            {project.type}
          </p>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {project.area}, {project.county}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>
          </div>
          <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Before / After */}
        <div className="mx-auto max-w-5xl px-6 mb-16">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Before & After
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {(beforeAfterPairs ?? []).map((pair: any) => (
              <div key={pair.label}>
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  {pair.label}
                </p>
                <BeforeAfterSlider
                  beforeImage={pair.before}
                  afterImage={pair.after}
                  beforeAlt={`${project.title} before renovation`}
                  afterAlt={`${project.title} after renovation`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mx-auto max-w-5xl px-6 mb-16">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Project Highlights
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.highlights.map((h: string) => (
              <li key={h} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-blue mt-0.5" />
                <span className="text-sm text-foreground/90 leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div className="mx-auto max-w-5xl px-6 mb-16">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Gallery
          </h2>

          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            After
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.afterImages.map((img: string, i: number) => (
              <div
                key={`after-${img}-${i}`}
                className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border"
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${project.title} after renovation ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Before
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.beforeImages.map((img: string, i: number) => (
              <div
                key={`before-${img}-${i}`}
                className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border"
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${project.title} before renovation ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-lg border border-border bg-secondary p-10">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Interested in What We Do?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto">
              Get in touch to discuss investment opportunities or learn more about our renovation process.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent-blue px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent-blue/90 hover:shadow-lg hover:shadow-accent-blue/20"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
