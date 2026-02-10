import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionHeading from "@/components/section-heading"
import ProjectsGrid from "@/components/projects-grid"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse our portfolio of property renovations across Goring-by-Sea, Worthing and Sussex. Before and after transformations.",
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Our Work"
            title="Property Transformations"
            description="Explore our portfolio of renovations across Sussex. Each project showcases our commitment to quality craftsmanship and thoughtful design."
          />
          <div className="mt-12">
            <ProjectsGrid />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
