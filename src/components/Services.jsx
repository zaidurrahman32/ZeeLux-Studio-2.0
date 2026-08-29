import { services } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeading
          kicker="// what I do"
          title="Services"
          text="Web solutions designed and built with care — from first page to full online presence."
        />

        <div className="services__grid">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              delay={(i % 3) * 90}
              className="card service-card"
            >
              <div className="service-card__top">
                <span className="service-card__icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <span className="service-card__num">{s.id}</span>
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
              <a href="#contact" className="service-card__link">
                Request this service
                <Icon name="arrowRight" size={14} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
