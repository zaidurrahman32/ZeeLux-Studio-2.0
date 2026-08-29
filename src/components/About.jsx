import { about } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

/* Developer code window: a stylized "developer profile" object.
   Line structure lives in src/data/content.js → about.codeWindow. */
function CodeWindow() {
  return (
    <div className="code-window reveal is-visible" role="img" aria-label="Code snippet describing Zaid Ur Rahman">
      <div className="code-window__bar">
        <span className="code-window__dot" />
        <span className="code-window__dot" />
        <span className="code-window__dot" />
        <span className="code-window__title">developer.js</span>
      </div>
      <pre className="code-window__body">
        <code>
          <span className="tok-kw">const</span> <span className="tok-fn">developer</span> <span className="tok-pun">={'{'}</span>
          {'\n'}  <span className="tok-prop">name</span><span className="tok-pun">:</span> <span className="tok-str">'Zaid Ur Rahman'</span><span className="tok-pun">,</span>
          {'\n'}  <span className="tok-prop">role</span><span className="tok-pun">:</span> <span className="tok-str">'Web Developer'</span><span className="tok-pun">,</span>
          {'\n'}  <span className="tok-prop">studio</span><span className="tok-pun">:</span> <span className="tok-str">'ZeeLux Studio'</span><span className="tok-pun">,</span>
          {'\n'}  <span className="tok-prop">focus</span><span className="tok-pun">: [</span><span className="tok-str">'modern web'</span><span className="tok-pun">,</span> <span className="tok-str">'clean design'</span><span className="tok-pun">],</span>
          {'\n'}  <span className="tok-prop">available</span><span className="tok-pun">:</span> <span className="tok-bool">true</span><span className="tok-pun">,</span>
          {'\n'}  <span className="tok-fn">building</span><span className="tok-pun">:</span> <span className="tok-str">'modern digital experiences'</span>
          {'\n'}<span className="tok-pun">{'}'}</span>
        </code>
      </pre>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading kicker={about.kicker} title={about.heading} />

        <div className="about__grid">
          <div className="about__text">
            <Reveal>
              <p className="about__lead">{about.lead}</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="about__bio">{about.bio}</p>
            </Reveal>

            <Reveal delay={160}>
              <dl className="about__facts">
                {about.facts.map((fact) => (
                  <div className="about__fact" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={220}>
              <a href="#contact" className="btn btn--ghost">
                Let’s Build Something
              </a>
            </Reveal>
          </div>

          <div className="about__visual">
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  )
}
