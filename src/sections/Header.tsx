import { useState } from 'react'
import { NAV } from '../data'
import { useActiveSection, useScrolled } from '../hooks'

export default function Header() {
  const scrolled = useScrolled(24)
  const active = useActiveSection()
  const [menu, setMenu] = useState(false)
  const close = () => setMenu(false)

  return (
    <header className={'header' + (scrolled || menu ? ' solid' : '')}>
      <div className="container header-bar">
        <a href="#home" onClick={close} aria-label="Back to top" className="logo">
          <span className="logo-mark mono">SA</span>
          <span className="mono">sharique<span className="accent">.</span>ansari</span>
        </a>

        <div className="header-desktop">
          <nav aria-label="Primary" className="nav">
            {NAV.map(([id, label]) => (
              <a key={id} href={'#' + id} className={'nav-link' + (active === id ? ' active' : '')} aria-current={active === id ? 'true' : undefined}>
                {label}
              </a>
            ))}
          </nav>
          <span className="status mono"><span className="status-dot" />open to opportunities</span>
          <a href="#contact" className="header-cta">Let's Connect</a>
        </div>

        <button className={'menu-btn' + (menu ? ' open' : '')} onClick={() => setMenu(m => !m)} aria-label="Toggle menu" aria-expanded={menu}>
          <span />
          <span />
        </button>
      </div>

      {menu && (
        <div className="mobile-menu">
          <nav aria-label="Mobile" className="mobile-nav">
            {NAV.map(([id, label], i) => (
              <a key={id} href={'#' + id} onClick={close} className={active === id ? 'active' : undefined}>
                <span>{label}</span>
                <span className="mono">0{i}</span>
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={close} className="btn btn-primary mobile-cta">Let's Connect</a>
        </div>
      )}
    </header>
  )
}
