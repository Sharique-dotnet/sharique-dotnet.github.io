import { SNAPSHOT } from '../data'

export default function Snapshot() {
  return (
    <section id="snapshot" aria-label="Technical snapshot" className="snapshot">
      <div className="container snapshot-grid">
        {SNAPSHOT.map(([key, value, sub], i) => (
          <div key={key} data-reveal="up" style={{ '--d': i * 70 }} className="snap">
            <div className="snap-key mono">{key}</div>
            <div className="snap-value">{value}</div>
            <div className="snap-sub">{sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
