import { useState } from 'react'
import { SectionLabel } from '../components'
import { GROUPS, STACK, TIMELINE } from '../data'

export default function Experience() {
  const [tag, setTag] = useState<string | null>(null)
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true })
  const allOpen = GROUPS.every((_, i) => open[i])
  const toggleAll = () => setOpen(allOpen ? {} : Object.fromEntries(GROUPS.map((_, i) => [i, true])))

  return (
    <section id="experience" data-nav className="section">
      <div className="container">
        <SectionLabel n="03" cmd="~/experience $ git log --oneline" />
        <h2 data-reveal="up" className="h2 exp-h2">A track record of shipping enterprise software.</h2>

        <div className="exp-grid">
          <aside className="exp-aside">
            <div className="timeline">
              <span data-reveal="vline" aria-hidden="true" className="timeline-line" />
              <ol>
                {TIMELINE.map((t, i) => (
                  <li key={t.title} data-reveal="up" style={{ '--d': i * 70 }} className={'tl tl-' + t.tone}>
                    <span className="tl-dot" aria-hidden="true" />
                    <div className="tl-when mono">{t.when}</div>
                    <div className="tl-title">{t.title}</div>
                    <div className="tl-sub">{t.sub}</div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="min0">
            <div data-reveal="up" className="card filter-box">
              <div className="filter-head mono">
                <span>filter impact by technology</span>
                {tag && <button className="link-btn mono" onClick={() => setTag(null)}>clear filter ×</button>}
              </div>
              <div className="tags">
                {STACK.map(name => (
                  <button
                    key={name}
                    className={'tag mono' + (tag === name ? ' active' : '')}
                    aria-pressed={tag === name}
                    onClick={() => setTag(tag === name ? null : name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            <div className="toggle-row">
              <button className="link-btn toggle-all mono" onClick={toggleAll}>{allOpen ? '− collapse all' : '+ expand all'}</button>
            </div>

            <div className="groups">
              {GROUPS.map((g, i) => {
                const match = tag ? g.tags.includes(tag) : false
                const isOpen = !!open[i] || match
                return (
                  <div key={g.title} data-reveal="up" style={{ '--d': i * 60 }} className={'group' + (match ? ' match' : '') + (tag && !match ? ' dim' : '')}>
                    <button className="group-btn" aria-expanded={isOpen} onClick={() => setOpen(o => ({ ...o, [i]: !isOpen }))}>
                      <span className="group-idx mono">{String(i + 1).padStart(2, '0')}</span>
                      <span className="group-title">{g.title}</span>
                      <span className={'group-plus mono' + (isOpen ? ' open' : '')} aria-hidden="true">+</span>
                    </button>
                    {isOpen && (
                      <div className="group-body">
                        <ul className="bullets">
                          {g.points.map(p => <li key={p}><span className="accent mono">›</span><span>{p}</span></li>)}
                        </ul>
                        <div className="group-tags">
                          {g.tags.map(n => <span key={n} className={'group-tag mono' + (n === tag ? ' active' : '')}>{n}</span>)}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
