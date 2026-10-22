import { SectionLabel } from '../components'
import { ABOUT, FLOW } from '../data'

export default function About() {
  return (
    <section id="about" data-nav className="section about">
      <div className="container">
        <SectionLabel n="01" cmd="~/about $ cat profile.md" />
        <div className="about-grid">
          <div className="min0">
            <h2 data-reveal="up" className="h2 about-h2">I build the systems businesses run on.</h2>
            <div className="about-text">
              {ABOUT.map((parts, i) => (
                <p key={i} data-reveal="up">
                  {parts.map((part, j) => (typeof part === 'string' ? part : <span key={j} className="em">{part.em}</span>))}
                </p>
              ))}
            </div>
          </div>

          <div data-reveal="scale" className="flow-card">
            <div className="flow-head mono"><span>how_i_work.flow</span><span className="accent">{FLOW.length} steps</span></div>
            <div className="flow-wrap">
              <span data-reveal="vline" aria-hidden="true" className="flow-line" />
              <ol className="flow">
                {FLOW.map(([title, sub], i) => (
                  <li key={title} data-reveal="up" style={{ '--d': 120 + i * 110 }} className="flow-step">
                    <span className="flow-n mono">0{i + 1}</span>
                    <div>
                      <div className="flow-title">{title}</div>
                      <div className="flow-sub mono">{sub}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
