import { nav, socials, footer, site } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="nav__logo" aria-label="ZeeLux Studio — home">
            <span className="nav__logo-mark" aria-hidden="true">Z</span>
            <span className="nav__logo-text">
              ZeeLux<span className="nav__logo-dim">Studio</span>
            </span>
          </a>
          <p className="footer__tagline">{footer.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="footer__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          {socials.map((s) =>
            s.href ? (
              <a
                key={s.id}
                className="footer__social"
                href={s.href}
                aria-label={`ZeeLux Studio on ${s.label}`}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer noopener"
              >
                <Icon name={s.icon} size={17} />
              </a>
            ) : (
              <span
                key={s.id}
                className="footer__social footer__social--ph"
                aria-label={`${s.label} link not set yet`}
                title={`${s.label} — placeholder`}
              >
                <Icon name={s.icon} size={17} />
              </span>
            ),
          )}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>{footer.copyright}</p>
        <p className="footer__byline">
          Designed &amp; built by <span>{site.founder}</span>
        </p>
      </div>
    </footer>
  )
}
