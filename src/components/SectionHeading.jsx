import Reveal from './Reveal.jsx'

/* Consistent section header: mono kicker + large heading + optional lead text. */
export default function SectionHeading({ kicker, title, text, align = 'left' }) {
  return (
    <div className={`section-head section-head--${align}`}>
      <Reveal>
        <p className="kicker">{kicker}</p>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={130}>
          <p className="section-lead">{text}</p>
        </Reveal>
      )}
    </div>
  )
}
