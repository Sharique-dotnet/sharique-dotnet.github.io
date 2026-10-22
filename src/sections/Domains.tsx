import { SectionLabel } from '../components'
import { DOMAINS, FEATURED } from '../data'

export default function Domains() {
  return (
    <section id="domains" data-nav className="section section-alt">
      <div className="container">
        <SectionLabel n="04" cmd="~/domains $ ls -la" />
        <div className="head-row">
          <h2 data-reveal="up" className="h2">Domain expertise.</h2>
          <p data-reveal="up" className="head-note">Industries where I’ve built production systems — and understand the business problems behind them.</p>
        </div>

        <div className="domain-grid">
          {DOMAINS.map((d, i) => (
            // Reveal on a wrapper so the card's hover lift isn't slowed by the reveal transition
            <div key={d.id} data-reveal="up" style={{ '--d': (i % 2) * 120 }}>
              <article className="domain" style={{ '--radius': d.radius, '--size': d.size, '--base': `${d.base}deg` }}>
                <div className="domain-top">
                  <div className="glyph-box">
                    <span className="glyph-shape" aria-hidden="true" />
                    <span className="glyph mono">{d.glyph}</span>
                  </div>
                  <div className="domain-meta mono"><div>{d.id}</div><div>{d.meta}</div></div>
                </div>
                <h3>{d.title}</h3>
                <p className="domain-problem">{d.problem}</p>
                <div className="bring mono">WHAT I BRING</div>
                <ul className="bullets">
                  {d.contrib.map(c => <li key={c}><span className="accent mono">›</span><span>{c}</span></li>)}
                </ul>
                <div className="domain-tech mono">{d.tech}</div>
              </article>
            </div>
          ))}
        </div>

        <article data-reveal="up" className="featured">
          <div>
            <div className="badges mono">
              <span className="badge badge-solid">{FEATURED.badge}</span>
              <span className="badge badge-outline">{FEATURED.tag}</span>
            </div>
            <h3>{FEATURED.title}</h3>
            <p className="featured-text">{FEATURED.text}</p>
          </div>
          <div>
            <div className="bring mono">WHAT I BRING</div>
            <ul className="bullets">
              {FEATURED.contrib.map(c => <li key={c}><span className="accent mono">›</span><span>{c}</span></li>)}
            </ul>
            <div className="featured-tech mono">{FEATURED.tech.map(t => <span key={t}>{t}</span>)}</div>
          </div>
        </article>
      </div>
    </section>
  )
}
