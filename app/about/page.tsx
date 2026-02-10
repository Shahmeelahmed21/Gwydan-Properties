import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Target, Award, Heart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionHeading from "@/components/section-heading"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Gwydan Properties Ltd. We specialise in premium property renovations across Goring-by-Sea, Worthing and Sussex.",
}

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every project is meticulously planned and executed. We sweat the details so the finished home speaks for itself.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We use premium materials and work with trusted tradespeople. There are no shortcuts in a Gwydan renovation.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "We treat every property as if it were our own home. The result is spaces that people genuinely love to live in.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        {/* Hero */}
        <section className="px-6 mb-20">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-3">
                About Us
              </p>
              <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance leading-tight">
                Transforming Sussex Homes with Quality and Purpose
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Gwydan Properties Ltd is a Sussex-based property renovation
                company. We buy homes with untapped potential, renovate them to
                the highest standard, and present them beautifully for sale.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Operating primarily in Goring-by-Sea and Worthing, we focus on
                creating homes that combine contemporary living with the
                character and charm these coastal communities are known for.
                Every renovation is an opportunity to add real value, both to the
                property and to the neighbourhood.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-accent-blue px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent-blue/90 hover:shadow-lg hover:shadow-accent-blue/20"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80"
                alt="Beautifully renovated Sussex interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-6 bg-secondary">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              label="Our Mission"
              title="Adding Value Through Renovation"
              description="We believe that great design and quality craftsmanship can transform not just a property, but an entire street. Our mission is to unlock the potential in every home we touch."
            />
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="What Drives Us"
              title="Our Values"
            />
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-lg border border-border bg-card p-8 transition-all hover:border-accent-blue/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-blue/10 text-accent-blue">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6">
          <div className="mx-auto max-w-3xl text-center rounded-lg border border-border bg-secondary p-12">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Interested in Working Together?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto">
              Whether you have a property to sell or want to explore investment opportunities, we are always open to a conversation.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent-blue px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent-blue/90"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
