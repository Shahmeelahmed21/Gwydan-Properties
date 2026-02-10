import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionHeading from "@/components/section-heading"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Gwydan Properties Ltd. Enquire about property renovations, investment opportunities, or partnerships in Sussex.",
}

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@gwydanproperties.co.uk",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 (0) 1234 567 890",
  },
  {
    icon: MapPin,
    label: "Area",
    value: "Goring-by-Sea, Worthing & Sussex",
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Get in Touch"
            title="We Would Love to Hear From You"
            description="Whether you have a property enquiry, an investment opportunity, or simply want to learn more about what we do, drop us a message."
          />

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Contact Details
                </h3>
                <div className="flex flex-col gap-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-blue/10 text-accent-blue">
                        <detail.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {detail.label}
                        </p>
                        <p className="text-sm font-medium text-foreground mt-0.5">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Areas We Serve
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We focus our renovation work in Goring-by-Sea, Worthing, and
                    the wider Sussex area. If you have a property in these areas,
                    we would love to hear from you.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Send a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
