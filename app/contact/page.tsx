import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionHeading from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Gwydan Properties Ltd. Email, phone and office location in West Sussex, United Kingdom.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <section className="px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Get In Touch"
              title="Let’s talk property."
              description="Do you have a property to sell? Or are you looking for your next home? We’d love to hear from you."
            />

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Email */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">Email</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  For sales enquiries, investment opportunities or viewings.
                </p>
                <a
                  href="mailto:john@gwydan.com"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  john@gwydan.com <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">Phone</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer a quick chat? Give us a call.
                </p>
                <a
                  href="tel:+447956568626"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                  +44 7956 568626 <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Office */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">Office</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  West Sussex, United Kingdom
                </p>
                <p className="mt-6 text-sm text-muted-foreground">
                  We operate across West Sussex and nearby counties including Surrey and Hampshire borders.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl border border-border bg-secondary p-10 text-center">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Ready to get started?
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Whether you’re selling a property or looking for a move-in-ready home, we’ll guide you through the next steps clearly and professionally.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:john@gwydan.com"
                  className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Email us
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                  View our projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
