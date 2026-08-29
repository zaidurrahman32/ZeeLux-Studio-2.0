import { skillGroups } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          kicker="// toolkit"
          title="Skills & Technologies"
          text="The tools I use to design, build and ship modern websites — no percentages, just what I work with."
        />

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100} className="card skill-card">
              <div className="skill-card__head">
                <span className="skill-card__icon">
                  <Icon name={group.icon} size={20} />
                </span>
                <h3 className="skill-card__title">{group.title}</h3>
              </div>
              <ul className="skill-card__badges">
                {group.skills.map((skill) => (
                  <li key={skill} className="badge">
                    <span className="badge__tick" aria-hidden="true">
                      <Icon name="check" size={11} strokeWidth={2.4} />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
