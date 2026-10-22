import { Fragment } from 'react'
import { Cursor, Typed } from '../components'
import { CODE, HERO } from '../data'

export default function Hero() {
  return (
    <section id="home" data-nav className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-ambient-wrap" aria-hidden="true"><div className="hero-ambient" /></div>

      <div className="container hero-inner">
        <div className="min0">
          <div className="hero-prompt mono"><span className="accent">&gt;</span><Typed text={HERO.prompt} /><Cursor /></div>
          <h1 className="hero-h1">
            <span data-reveal="up" style={{ '--d': 150 }} className="hero-name">
              {HERO.name} <span className="dash">—</span> <span className="hero-role">{HERO.role}</span>
            </span>
            <span data-reveal="up" style={{ '--d': 250 }} className="hero-title">{HERO.title}<span className="accent">.</span></span>
          </h1>
          <p data-reveal="up" style={{ '--d': 380 }} className="hero-intro">{HERO.intro}</p>
          <div data-reveal="up" style={{ '--d': 480 }} className="hero-ctas">
            <a href="#experience" className="btn btn-primary">Explore My Work <span className="mono">→</span></a>
            <a href="#contact" className="btn btn-ghost">Let's Connect</a>
          </div>
          <div data-reveal="up" style={{ '--d': 580 }} className="hero-stats mono">
            {HERO.stats.map((s, i) => (
              <Fragment key={s}>
                {i > 0 && <span className="sep">/</span>}
                <span>{s}</span>
              </Fragment>
            ))}
          </div>
        </div>

        {/* Decorative: the same info as the text column, styled as an IDE */}
        <div data-reveal="scale" style={{ '--d': 300 }} className="editor" aria-hidden="true">
          <div className="editor-tabs">
            <div className="dots"><span /><span /><span /></div>
            <div className="editor-tab mono"><span className="cs">C#</span>{HERO.file}</div>
            <span className="editor-note mono">decorative</span>
          </div>
          <div className="editor-code mono">
            {CODE.map((line, i) => (
              <div key={i} className="code-line">
                <span className="code-num">{i + 1}</span>
                <span className="code-text">
                  {line.map((t, j) => <span key={j} style={{ color: t.color }}>{t.text}</span>)}
                </span>
              </div>
            ))}
          </div>
          <div className="terminal mono">
            <div className="term-tabs"><span className="active">TERMINAL</span><span>OUTPUT</span></div>
            <div className="term-line">
              <span className="ok">~/portfolio</span> <span className="accent">$</span> <span className="term-text">{HERO.terminal[0]}</span>
            </div>
            <div className="term-line"><span className="term-text ok">{HERO.terminal[1]}</span></div>
          </div>
        </div>
      </div>

      <a href="#snapshot" aria-label="Scroll to content" className="scroll-cue mono">
        SCROLL
        <span className="cue-line" aria-hidden="true"><span /></span>
      </a>
    </section>
  )
}
