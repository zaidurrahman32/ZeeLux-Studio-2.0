import { useState } from 'react'
import { hero, site } from '../data/content.js'
import Icon from './Icon.jsx'

/* Portrait frame: renders /public/images/profile.jpg when present.
   Until the owner adds that file, an elegant monogram placeholder is shown. */
function Portrait() {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="portrait">
      <div className="portrait__glow" aria-hidden="true" />
      <div className="portrait__frame">
        {imgError ? (
          <div className="portrait__placeholder" role="img" aria-label="Portrait placeholder">
            <span className="portrait__monogram">ZR</span>
            <span className="portrait__hint">Add your photo at<br /><code>public/images/profile.jpg</code></span>
          </div>
        ) : (
          <img
            className="portrait__img"
            src={site.profileImage}
            alt="Zaid Ur Rahman — Web Developer and Founder of ZeeLux Studio"
            loading="eager"
            onError={() => setImgError(true)}
          />
        )}
        {/* Corner brackets */}
        <span className="portrait__corner portrait__corner--tl" aria-hidden="true" />
        <span className="portrait__corner portrait__corner--tr" aria-hidden="true" />
        <span className="portrait__corner portrait__corner--bl" aria-hidden="true" />
        <span className="portrait__corner portrait__corner--br" aria-hidden="true" />
      </div>

      {/* Floating developer UI cards */}
      <div className="float-card float-card--1" aria-hidden="true">
        <Icon name="code" size={15} />
        <span>React · Next.js</span>
      </div>
      <div className="float-card float-card--2" aria-hidden="true">
        <span className="float-card__dot" />
        <span className="float-card__mono">200 OK</span>
        <span className="float-card__sub">deployed</span>
      </div>
      <div className="float-card float-card--3" aria-hidden="true">
        <Icon name="sparkles" size={14} />
        <span>UI / UX · Responsive</span>
      </div>
      <span className="portrait__bracket portrait__bracket--open" aria-hidden="true">{'</>'}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="status-pill reveal is-visible">
            <span className="status-pill__dot" aria-hidden="true" />
            {hero.status}
          </p>

          <p className="hero__greeting">{hero.greeting}</p>
          <h1 className="hero__title">
            <span className="text-gradient">Web Developer</span>
            <br />
            Building Modern Digital
            <br />
            Experiences.
          </h1>

          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Work
              <Icon name="arrowRight" size={16} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Start a Project
            </a>
          </div>

          <p className="hero__meta">
            <Icon name="code" size={14} />
            <span>HTML · CSS · JavaScript · React · Next.js</span>
          </p>
        </div>

        <div className="hero__visual">
          <Portrait />
        </div>
      </div>

      <a href="#about" className="hero__scroll-hint" aria-label="Scroll to about section">
        <span className="hero__scroll-line" aria-hidden="true" />
        <span>Scroll</span>
      </a>
    </section>
  )
}
