import { useState } from 'react'
import { contact, socials, site } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

function SocialList() {
  return (
    <ul className="contact__socials">
      {socials.map((s) => {
        const cls = `contact__social ${s.placeholder ? 'is-placeholder' : ''}`
        const title = s.placeholder ? `${s.label} — add your link in src/data/content.js` : s.label
        if (!s.href) {
          return (
            <li key={s.id}>
              <span className={cls} title={title} aria-label={`${s.label} (link not set yet)`}>
                <Icon name={s.icon} size={18} />
                <span>{s.label}</span>
              </span>
            </li>
          )
        }
        return (
          <li key={s.id}>
            <a
              className={cls}
              href={s.href}
              title={title}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer noopener"
            >
              <Icon name={s.icon} size={18} />
              <span>{s.label}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!site.formEndpoint) {
      // No backend configured yet — open the visitor's email client instead.
      const name = data.get('name')
      const email = data.get('email')
      const type = data.get('projectType')
      const budget = data.get('budget')
      const details = data.get('details')
      const subject = encodeURIComponent(`Project request from ${name || 'website visitor'}`)
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nProject type: ${type}\nBudget: ${budget}\n\nDetails:\n${details}`,
      )
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setStatus('done')
      return
    }

    try {
      setStatus('sending')
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('done')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading kicker={contact.kicker} title={contact.heading} text={contact.text} />

        <div className="contact__grid">
          <Reveal className="contact__info">
            <div className="contact__panel card">
              <p className="contact__panel-kicker">// project request</p>
              <h3 className="contact__panel-title">Tell me about your project</h3>
              <p className="contact__panel-text">
                Share a few details and I’ll get back to you to talk through the idea, scope and
                next steps. Typical response time: within a few days.
              </p>

              <div className="contact__status-note">
                <span className="status-pill__dot" aria-hidden="true" />
                Currently accepting new projects
              </div>

              <SocialList />

              <p className="contact__placeholder-note">
                Contact links are placeholders — replace them in
                <code> src/data/content.js</code>.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="contact__form-wrap">
            <form className="contact__form card" onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="field">
                  <span className="field__label">Name</span>
                  <input className="field__input" type="text" name="name" placeholder="Your name" required />
                </label>
                <label className="field">
                  <span className="field__label">Email</span>
                  <input className="field__input" type="email" name="email" placeholder="you@example.com" required />
                </label>
              </div>

              <div className="form-row">
                <label className="field">
                  <span className="field__label">Project Type</span>
                  <select className="field__input" name="projectType" required defaultValue="">
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {contact.projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  <span className="field__label">Budget Range</span>
                  <select className="field__input" name="budget" required defaultValue="">
                    <option value="" disabled>
                      Select a budget range
                    </option>
                    {contact.budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="field">
                <span className="field__label">Project Details</span>
                <textarea
                  className="field__input field__input--area"
                  name="details"
                  rows="5"
                  placeholder="What do you want to build? Goals, pages, timeline…"
                  required
                />
              </label>

              <button type="submit" className="btn btn--primary btn--full" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <>Sending…</>
                ) : (
                  <>
                    Send Project Request
                    <Icon name="send" size={15} />
                  </>
                )}
              </button>

              {status === 'done' && (
                <p className="form-msg form-msg--ok" role="status">
                  Thanks — your request is ready. Your email app should have opened; you can also reach
                  the studio using the contact links.
                </p>
              )}
              {status === 'error' && (
                <p className="form-msg form-msg--err" role="alert">
                  Something went wrong sending the form. Please try again or reach out by email.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
