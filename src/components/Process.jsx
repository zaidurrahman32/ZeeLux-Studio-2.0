import { processSteps } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <SectionHeading
          kicker="// workflow"
          title="How I Build"
          text="A clear, developer-style process that takes a project from first idea to a launched website."
        />

        <ol className="process__grid">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.step} delay={(i % 3) * 90} className="process-step">
              <span className="process-step__num">{step.step}</span>
              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.description}</p>
              </div>
              <span className="process-step__line" aria-hidden="true" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
