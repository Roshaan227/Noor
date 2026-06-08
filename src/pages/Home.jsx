import { Link } from 'react-router-dom'
import paintings from '../data/paintings'
import PaintingCard from '../components/PaintingCard'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 nureh-gradient-bg opacity-[0.08]" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-12 lg:py-28">
          <div>
            <p className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Original Artwork
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-tight sm:text-6xl">
              Welcome to <span className="nureh-gradient-text">Nureh</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Discover hand-painted masterpieces crafted with love. Browse our gallery, pick your
              favorite piece, and order instantly via WhatsApp.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/gallery"
                className="nureh-btn-primary rounded-full px-8 py-3.5 text-sm font-semibold text-white"
              >
                View Gallery
              </Link>
              <Link
                to="/contact"
                className="rounded-full border-2 border-primary/30 bg-surface/80 px-8 py-3.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm transition hover:border-primary hover:bg-primary hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:mx-0 lg:max-w-none lg:justify-end">
            <div className="absolute inset-0 m-auto h-64 w-64 rounded-full bg-secondary/20 blur-3xl lg:h-80 lg:w-80" aria-hidden="true" />
            <img
              src="/hero-artwork.svg"
              alt=""
              className="relative w-full max-w-[280px] drop-shadow-2xl sm:max-w-[340px] lg:max-w-[400px] animate-[float_6s_ease-in-out_infinite]"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="nureh-section-bg py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Collection</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Our <span className="nureh-gradient-text">Paintings</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              Pick your favourite piece and order instantly via WhatsApp.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paintings.map((painting) => (
              <PaintingCard key={painting.code} painting={painting} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/80 bg-surface/60 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6">
          {[
            { step: '01', title: 'Browse', text: 'Explore our colorful collection of original paintings.' },
            { step: '02', title: 'Choose', text: 'Pick the painting you love and check the price.' },
            { step: '03', title: 'Order', text: 'Tap WhatsApp — your order details are ready to send.' },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-border/60 bg-card p-6 text-center nureh-card-shadow sm:text-left"
            >
              <span className="font-display text-4xl font-bold nureh-gradient-text">{item.step}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
