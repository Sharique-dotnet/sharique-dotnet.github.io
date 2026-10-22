import { Fragment, useState } from 'react'
import { SectionLabel } from '../components'
import { CONTACT, EMAIL, LINKEDIN } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = () =>
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })

  return (
    <section id="contact" data-nav className="section contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-inner">
        <SectionLabel n="07" cmd="~/contact $ ./connect.sh" line={false} center />
        <h2 data-reveal="up" className="contact-h2">Let's build what's next.</h2>
        <p data-reveal="up" className="contact-pitch">{CONTACT.pitch}</p>

        <div data-reveal="up" className="email-box">
          <a href={`mailto:${EMAIL}`} className="email-link mono">
            <span className="accent">@</span>
            <span className="email-text">{EMAIL}</span>
          </a>
          <button className={'copy-btn mono' + (copied ? ' copied' : '')} aria-label="Copy email address" onClick={copy}>
            {copied ? 'copied ✓' : 'copy'}
          </button>
          <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
        </div>

        <div data-reveal="up" className="contact-ctas">
          <a href={LINKEDIN} target="_blank" rel="noopener" className="btn btn-ghost">
            <span className="mono li-mark">in</span>LinkedIn <span className="mono">↗</span>
          </a>
          <a href={`mailto:${EMAIL}?subject=Let%27s%20connect`} className="btn btn-primary">
            Let's Connect <span className="mono">→</span>
          </a>
        </div>

        <div data-reveal="up" className="contact-notes mono">
          {CONTACT.notes.map((n, i) => (
            <Fragment key={n}>
              {i > 0 && <span className="sep">/</span>}
              <span>{n}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
