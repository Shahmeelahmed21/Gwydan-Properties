"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-blue/10 text-accent-blue mb-4">
          <Send className="h-6 w-6" />
        </div>
        <h4 className="font-serif text-xl font-semibold text-foreground">
          Message Sent
        </h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for getting in touch. We will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-5"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Name <span className="text-accent-blue">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-colors"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Email <span className="text-accent-blue">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Phone <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-colors"
          placeholder="+44 (0) 7000 000000"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Message <span className="text-accent-blue">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-colors resize-none"
          placeholder="Tell us about your enquiry..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-blue px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent-blue/90 hover:shadow-lg hover:shadow-accent-blue/20 w-full sm:w-auto self-start"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}
