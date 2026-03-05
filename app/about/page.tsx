import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Hammer, Home, CheckCircle2, MapPin } from "lucide-react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionHeading from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gwydan Properties Ltd specialises in the acquisition and high-end refurbishment of residential properties across West Sussex and surrounding counties.",
};

const whatWeDo = [
  {
    icon: Building2,
    title: "Property Acquisition",
    description:
      "We buy properties throughout West Sussex and the surrounding counties. Whether it’s a house in need of modernisation, a probate property, or a project that’s seen better days, we offer a straightforward, professional exit for sellers.",
  },
  {
    icon: Hammer,
    title: "Expert Refurbishment",
    description:
      "Our team focuses on quality craftsmanship. We don’t just “flip” houses; we restore them. From structural upgrades to bespoke interior design, we ensure every Gwydan home meets the highest standards.",
  },
  {
    icon: Home,
    title: "Exceptional Resales",
    description:
      "We bring revitalised homes back to the market, providing move-in-ready properties for families, professionals, and first-time buyers.",
  },
];

const whyUs = [
  "Local Expertise: Deep knowledge of the West Sussex, Surrey, and Hampshire property markets.",
  "Transparency: A fair, efficient process whether you are selling to us or buying from us.",
  "Quality First: We pride ourselves on attention to detail and a finish that lasts.",
];

const areas = [
  "West Sussex",
  "Surrey",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        {/* Hero */}
        <section className="px-6 mb-16">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Gwydan Properties Ltd
              </p>

              <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance leading-tight">
                Restoring Potential, Renewing Communities.
              </h1>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Who We Are</span>
                <br />
                Based in the heart of West Sussex, Gwydan Properties Ltd specializes in the strategic acquisition and
                high-end refurbishment of residential properties. We take homes with untapped potential and transform
                them into modern, beautiful living spaces designed for the contemporary buyer.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                  Get In Touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80"
                  alt="Renovated interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="px-6 py-20 bg-secondary">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="What We Do"
              title="Acquisition. Refurbishment. Resale."
              description="We operate end-to-end — from identifying opportunity to delivering a finished home that’s ready for the market."
            />

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {whatWeDo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why work with us */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SectionHeading
                label="Why Work With Us?"
                title="Quality-led, local-first."
                description="A trusted, straightforward approach — with craftsmanship that lasts."
              />
            </div>

            <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-8 shadow-sm">
              <blockquote className="rounded-2xl border border-border bg-secondary p-6 text-foreground">
                <p className="font-serif text-xl leading-relaxed">
                  “Our mission is simple: To add value to the local landscape by breathing new life into every property we touch.”
                </p>
              </blockquote>

              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {whyUs.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="px-6 pb-8">
          <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Areas We Cover
            </h2>
            <p className="mt-3 text-muted-foreground">
              While our roots are in West Sussex, we actively look for opportunities in:
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {areas.map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-xl border border-border bg-secondary p-4">
                  <MapPin className="h-5 w-5 text-foreground mt-0.5" />
                  <span className="text-sm text-foreground/90">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Get in touch */}
        <section className="px-6 mt-10">
          <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-secondary p-10 text-center">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Get In Touch
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Do you have a property to sell? Or are you looking for your next home?
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:john@gwydan.com"
                className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Email: john@gwydan.com
              </a>
              <a
                href="tel:+447956568626"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                Call: +44 7956 568626
              </a>
              <a
                href="tel:02083371777"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                Call: 02083371777
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Office: West Sussex, United Kingdom
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}