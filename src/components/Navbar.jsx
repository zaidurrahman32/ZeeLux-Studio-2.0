import { useEffect, useState } from 'react'
import { nav } from '../data/content.js'
import Icon from './Icon.jsx'
import useScrollSpy from '../hooks/useScrollSpy.js'

const sectionIds = ['home', 'about', 'services', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open; close on Escape.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`nav ${scrolled || menuOpen ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo" onClick={handleNavClick} aria-label="ZeeLux Studio — home">
          <span className="nav__logo-mark" aria-hidden="true">Z</span>
          <span className="nav__logo-text">
            ZeeLux<span className="nav__logo-dim">Studio</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => {
            const id = item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav__link ${active === id ? 'is-active' : ''}`}
                aria-current={active === id ? 'true' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="nav__actions">
          <a href="#contact" className="btn btn--primary btn--sm nav__cta">
            Let’s Work Together
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`nav__mobile ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="nav__mobile-links" aria-label="Mobile">
          {nav.map((item, i) => {
            const id = item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav__mobile-link ${active === id ? 'is-active' : ''}`}
                onClick={handleNavClick}
                style={{ '--i': i }}
              >
                <span className="nav__mobile-index">0{i + 1}</span>
                {item.label}
              </a>
            )
          })}
          <a href="#contact" className="btn btn--primary nav__mobile-cta" onClick={handleNavClick}>
            Let’s Work Together
            <Icon name="arrowRight" size={16} />
          </a>
        </nav>
      </div>
    </header>
  )
}
