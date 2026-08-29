/* Fixed background layers: base color, grid pattern and soft ambient glows.
   Sits behind all content (z-index: -1). */
export default function BackgroundFX() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-glow bg-glow--1" />
      <div className="bg-glow bg-glow--2" />
    </div>
  )
}
