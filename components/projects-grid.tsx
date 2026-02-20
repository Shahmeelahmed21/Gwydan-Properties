import { projects } from "@/data/projects"
import ProjectCard from "@/components/project-card"

export default function ProjectsGrid() {
  // Keep the most recent work first.
  const sorted = [...projects].sort((a, b) => (b.year ?? 0) - (a.year ?? 0))

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {sorted.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
