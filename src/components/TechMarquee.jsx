const TECH = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Responsive Design',
  'API Integration',
  'Git',
  'GitHub',
  'AI Development Tools',
]

/* Subtle infinite marquee dividing the hero from the content below. */
export default function TechMarquee() {
  const row = [...TECH, ...TECH]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span className="marquee__item" key={i}>
            <span className="marquee__dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
