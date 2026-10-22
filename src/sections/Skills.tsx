import { SectionLabel } from '../components'
import { CORE_SKILLS, MORE_SKILLS } from '../data'

export default function Skills() {
  return (
    <section id="skills" data-nav className="section skills">
      <div className="container">
        <SectionLabel n="02" cmd="~/skills $ dotnet list package" />
        <div className="head-row">
          <h2 data-reveal="up" className="h2">A focused stack, mastered in depth.</h2>
          <div data-reveal="up" className="legend mono">
            <span><i className="lg lg-core" />core</span>
            <span><i className="lg lg-adv" />advanced</span>
            <span><i className="lg lg-fam" />familiar</span>
          </div>
        </div>

        <div className="skill-cards">
          {CORE_SKILLS.map((g, i) => (
            // Reveal on a wrapper so the card's own hover transform isn't slowed by the reveal transition
            <div key={g.title} data-reveal="up" style={{ '--d': i * 100 }}>
              <div className="card skill-card">
                <div className="skill-card-top mono">
                  <span className="accent">{g.glyph}</span>
                  <span className="level">{g.level}</span>
                </div>
                <h3>{g.title}</h3>
                <p>{g.context}</p>
                <div className="chips">
                  {g.items.map(([name, tier]) => <span key={name} className={`chip mono chip-t${tier}`}>{name}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="more-skills">
          {MORE_SKILLS.map((g, i) => (
            <div key={g.title} data-reveal="up" style={{ '--d': i * 80 }} className="more-row">
              <div>
                <div className="more-title">{g.title}</div>
                <div className="more-ctx mono">{g.context}</div>
              </div>
              <div className="more-chips">
                {g.items.map(name => <span key={name} className={'chip chip-more mono' + (g.dashed ? ' chip-t2' : '')}>{name}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
