import StarRating from './StarRating'

export default function ReviewCard({ review }) {
  const initial = review.name.charAt(0).toUpperCase()

  return (
    <article className="group relative flex h-full flex-col">
      <div
        className="pointer-events-none absolute -inset-0.5 rounded-[1.4rem] nureh-gradient-bg opacity-0 blur-sm transition duration-500 group-hover:opacity-40"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.3rem] border border-border/70 bg-card p-6 nureh-card-shadow transition-all duration-300 group-hover:-translate-y-1 group-hover:nureh-card-glow">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl nureh-gradient-bg text-lg font-bold text-white shadow-md ring-2 ring-white/30">
              {initial}
            </span>
            <div>
              <h3 className="font-semibold text-foreground">{review.name}</h3>
              <p className="text-xs text-muted">{review.city}, Pakistan</p>
            </div>
          </div>
          <StarRating rating={review.rating} />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
            {review.painting}
          </span>
          <span className="rounded-lg bg-secondary/15 px-2.5 py-1 text-xs font-semibold text-secondary">
            {review.code}
          </span>
        </div>

        <p
          className={`mt-4 flex-1 text-sm leading-relaxed text-muted ${
            review.lang === 'ur' ? 'urdu-text text-right leading-loose' : ''
          }`}
          dir={review.lang === 'ur' ? 'rtl' : 'ltr'}
        >
          &ldquo;{review.text}&rdquo;
        </p>

        <div className="nureh-divider my-4" />
        <p className="text-xs font-medium text-muted">{review.date}</p>
      </div>
    </article>
  )
}
