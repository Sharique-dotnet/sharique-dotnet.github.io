// Allow CSS custom properties (e.g. style={{ '--d': 120 }}) in inline styles.
// --d is a reveal delay in ms (unitless; index.css multiplies by 1ms).
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}

export function Cursor() {
  return <span className="cursor" aria-hidden="true" />
}

// Text that types itself out when scrolled into view (see the reveal system in index.css)
export function Typed({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="typed" data-reveal="type" style={{ '--n': text.length, '--d': delay }}>
      {text}
    </span>
  )
}

// "01 ── ~/about $ cat profile.md" row above each section heading
export function SectionLabel({ n, cmd, line = true, center = false }: { n: string; cmd: string; line?: boolean; center?: boolean }) {
  return (
    <div className={'section-label mono' + (center ? ' center' : '')}>
      <span className="accent">{n}</span>
      {line && <span className="section-line" data-reveal="line" />}
      <Typed text={cmd} />
    </div>
  )
}
