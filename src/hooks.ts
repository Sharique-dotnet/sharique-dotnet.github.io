import { useEffect, useLayoutEffect, useState } from 'react'
import { NAV_MAP } from './data'

// Scroll reveals: adds `motion` to <html> (enables the hidden start states in index.css),
// then marks each [data-reveal] element `.in` the first time it scrolls into view.
// Without JS or with reduced motion, `motion` is never added and everything stays visible.
export function useReveal() {
  // Layout effect: hide elements before the first paint so they don't flash
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const root = document.documentElement
    root.classList.add('motion')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el))
    return () => {
      io.disconnect()
      root.classList.remove('motion')
    }
  }, [])
}

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
