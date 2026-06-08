import paintings from '../data/paintings'
import PaintingCard from '../components/PaintingCard'

export default function Gallery() {
  return (
    <section className="nureh-section-bg py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Art Gallery</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Our <span className="nureh-gradient-text">Gallery</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
          Browse our collection and tap &quot;Order on WhatsApp&quot; on any painting
          — a pre-filled message with all details will open for you.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paintings.map((painting) => (
            <PaintingCard key={painting.code} painting={painting} />
          ))}
        </div>
      </div>
    </section>
  )
}
