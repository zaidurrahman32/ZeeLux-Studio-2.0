import { whyPoints } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function WhyZeeLux() {
  return (
    <section id="why" className="section why">
      <div className="container">
        <SectionHeading
          kicker="// why zeeLux"
          title="Why Work With ZeeLux Studio"
          text="A straightforward approach to building websites — focused on quality, communication and care."
        />

        <div className="why__grid">
          {whyPoints.map((point, i) => (
            <Reveal key={point.title} delay={(i % 3) * 90} className="why-card">
              <span className="why-card__icon">
                <Icon name={point.icon} size={20} />
              </span>
              <h3 className="why-card__title">{point.title}</h3>
              <p className="why-card__desc">{point.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
