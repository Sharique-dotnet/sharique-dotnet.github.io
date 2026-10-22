import { useEffect, useState } from 'react'
import { NAV_MAP } from './data'

// True once the page is scrolled past `offset` pixels
export function useScrolled(offset: number) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > offset)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

// Id of the nav section currently in the middle of the viewport
export function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setActive(NAV_MAP[e.target.id] ?? e.target.id)
      }),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('section[data-nav]').forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])
  return active
}
