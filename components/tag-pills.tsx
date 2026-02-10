"use client"

import { cn } from "@/lib/utils"

interface TagPillsProps {
  tags: string[]
  activeTag: string
  onTagChange: (tag: string) => void
}

export default function TagPills({ tags, activeTag, onTagChange }: TagPillsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onTagChange(tag)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 border",
            activeTag === tag
              ? "bg-accent-blue text-primary-foreground border-accent-blue"
              : "bg-transparent text-muted-foreground border-border hover:border-accent-blue/50 hover:text-foreground"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
