"use client"

import { useState, useMemo } from "react"
import { projects } from "@/data/projects"
import ProjectCard from "@/components/project-card"
import TagPills from "@/components/tag-pills"

const ALL_TAG = "All"

export default function ProjectsGrid() {
  const [activeTag, setActiveTag] = useState(ALL_TAG)

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    for (const p of projects) {
      for (const t of p.tags) tagSet.add(t)
    }
    return [ALL_TAG, ...Array.from(tagSet)]
  }, [])

  const filtered = useMemo(() => {
    if (activeTag === ALL_TAG) return projects
    return projects.filter((p) => p.tags.includes(activeTag))
  }, [activeTag])

  return (
    <>
      <TagPills tags={allTags} activeTag={activeTag} onTagChange={setActiveTag} />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          No projects found for this filter.
        </p>
      )}
    </>
  )
}
