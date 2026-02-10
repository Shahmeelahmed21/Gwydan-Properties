interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export default function SectionHeading({
  label,
  title,
  description,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {label && (
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-3">
          {label}
        </p>
      )}
      <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
