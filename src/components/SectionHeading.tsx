interface SectionHeadingProps {
  eyebrow?: string
  title: string
  accentIndex?: number
  subtitle?: string
  align?: 'left' | 'center'
  decoratedUnderline?: boolean
}

function renderTitleWithAccent(title: string, accentIndex?: number) {
  if (accentIndex === undefined) return title
  const words = title.split(' ')
  const target = accentIndex < 0 ? words.length + accentIndex : accentIndex
  if (target < 0 || target >= words.length) return title
  return words.map((word, i) =>
    i === target ? (
      <em key={i} className="italic text-coral not-italic font-bold bg-gradient-to-r from-coral via-sunflower to-sky bg-clip-text text-transparent">
        {word}
      </em>
    ) : (
      <span key={i}>{i > 0 ? ` ${word}` : word}</span>
    ),
  )
}

function SectionHeading({
  eyebrow,
  title,
  accentIndex,
  subtitle,
  align = 'left',
  decoratedUnderline = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const subtitleAlign = align === 'center' ? 'mx-auto' : ''
  const decoratedClass = decoratedUnderline
    ? `decorated-heading ${align === 'center' ? 'center' : ''}`
    : ''

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-[11px] tracking-editorial uppercase text-sky mb-4 font-semibold">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl text-charcoal leading-[1.08] ${decoratedClass}`}
      >
        {renderTitleWithAccent(title, accentIndex)}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 max-w-2xl text-base md:text-lg text-charcoal-soft/85 leading-relaxed ${subtitleAlign}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
