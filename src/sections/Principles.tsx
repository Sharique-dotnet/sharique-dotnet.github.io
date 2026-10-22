import { SectionLabel } from '../components'
import { PRINCIPLES } from '../data'

export default function Principles() {
  return (
    <section id="principles" data-nav className="section section-alt">
      <div className="container principles-grid">
        <div>
          <SectionLabel n="06" cmd="~/principles $ cat README" />
          <h2 data-reveal="up" className="h2 pr-h2">The standards behind my work.</h2>
          <p data-reveal="up" className="pr-sub">Principles I apply to every system I touch.</p>
        </div>

        <div data-reveal="scale" className="pr-panel">
          <div className="pr-head mono"><span>principles.txt</span><span>{PRINCIPLES.length} entries</span></div>
          <ul className="pr-list">
            {PRINCIPLES.map(([title, text], i) => (
              <li key={title} data-reveal="up" style={{ '--d': i * 60 }} className="pr-item mono">
                <span className="pr-n accent">0x{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="pr-title">{title}</div>
                  <div className="pr-text">{text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
