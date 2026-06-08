import reviews from '../data/reviews'
import ReviewCard from '../components/ReviewCard'
import StarRating from '../components/StarRating'

const averageRating = (
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
).toFixed(1)

export default function Reviews() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Testimonials</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Customer <span className="nureh-gradient-text">Reviews</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            See what our happy customers across Pakistan say about their Nureh paintings.
          </p>

          <div className="mx-auto mt-10 inline-flex flex-col items-center overflow-hidden rounded-[1.3rem] border border-border/70 bg-card px-8 py-7 nureh-card-glow sm:flex-row sm:gap-10">
            <div className="text-center">
              <p className="font-display text-5xl font-bold nureh-price-tag">{averageRating}</p>
              <StarRating rating={5} size="lg" />
              <p className="mt-2 text-sm text-muted">Based on {reviews.length} reviews</p>
            </div>
            <div className="mt-5 hidden h-20 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:mt-0 sm:block" />
            <div className="mt-5 text-center sm:mt-0 sm:text-left">
              <p className="font-display text-xl font-semibold text-foreground">Trusted by art lovers</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                Real orders, real smiles — paintings delivered exactly as shown on our website.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
