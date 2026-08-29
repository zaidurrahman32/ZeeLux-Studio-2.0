import { useEffect, useState } from 'react'

/* Thin gradient progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (scrolled / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  )
}
