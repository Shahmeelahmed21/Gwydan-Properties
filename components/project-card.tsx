import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar } from "lucide-react"

interface Project {
  slug: string
  title: string
  area: string
  year: number
  type: string
  summary: string
  tags: string[]
  afterImages: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-accent-blue/40 hover:shadow-lg hover:shadow-accent-blue/5">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.afterImages[0] || "/placeholder.svg"}
            alt={`${project.title} - after renovation`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
          <span className="absolute bottom-3 left-3 rounded-md bg-accent-blue/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
            {project.type}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent-blue transition-colors text-balance">
            {project.title}
          </h3>
          <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {project.area}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {project.year}
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
