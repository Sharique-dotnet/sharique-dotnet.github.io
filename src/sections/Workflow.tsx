import { SectionLabel } from '../components'
import { WORKFLOW } from '../data'

export default function Workflow() {
  return (
    <section id="workflow" data-nav className="section">
      <div className="container">
        <SectionLabel n="05" cmd="~/workflow $ dotnet build --verbose" />
        <h2 data-reveal="up" className="h2 wf-h2">From requirement to release.</h2>
        <p data-reveal="up" className="wf-sub">A disciplined delivery loop, refined across years of Agile teamwork.</p>

        <ol className="workflow">
          {WORKFLOW.map(([icon, title, text], i) => (
            // --d is inherited by the line, diamond and text below
            <li key={title} className="wf-step" style={{ '--d': i * 140 }}>
              <span data-reveal="line" aria-hidden="true" className="wf-line" />
              <span data-reveal="diamond" aria-hidden="true" className="wf-diamond" />
              <div data-reveal="up">
                <div className="wf-top mono"><span className="wf-n">0{i + 1}</span><span className="wf-icon">{icon}</span></div>
                <div className="wf-title">{title}</div>
                <div className="wf-text">{text}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
