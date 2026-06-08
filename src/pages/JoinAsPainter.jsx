import { useState } from 'react'
import { getPainterRegistrationWhatsAppLink } from '../utils/whatsapp'

const initialForm = { name: '', email: '', message: '' }

export default function JoinAsPainter() {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) {
      setError('Please fill in your name, email, and message.')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    const link = getPainterRegistrationWhatsAppLink({ name, email, message })
    window.open(link, '_blank', 'noopener,noreferrer')
    setForm(initialForm)
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">For Artists</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Join <span className="nureh-gradient-text">Nureh</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Are you a painter? List your artwork on our website and reach customers across Pakistan.
            Fill in the form below and we&apos;ll receive your details on WhatsApp.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-[1.3rem] border border-border/70 bg-card p-8 nureh-card-glow">
              <h2 className="font-display text-xl font-semibold">Why join Nureh?</h2>
              <ul className="mt-5 space-y-4 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">✓</span>
                  Showcase your paintings to art lovers online
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">✓</span>
                  Customers order directly on your WhatsApp
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">✓</span>
                  Each artwork gets a unique code for easy orders
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">✓</span>
                  Simple registration — we&apos;ll get back to you quickly
                </li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[1.3rem] border border-border/70 bg-card p-8 nureh-card-shadow lg:col-span-3"
          >
            <h2 className="font-display text-xl font-semibold">Registration form</h2>
            <p className="mt-2 text-sm text-muted">
              Your details will be sent to us via WhatsApp. Tap send in WhatsApp to complete your request.
            </p>

            <div className="mt-6 space-y-5">
              <FormField
                label="Full name"
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
              <FormField
                label="Email"
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your art style, experience, and why you'd like to join Nureh..."
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {error && (
              <p className="mt-4 rounded-lg bg-rose/10 px-4 py-3 text-sm text-rose" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="nureh-btn-whatsapp mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-white"
            >
              <WhatsAppIcon />
              Send via WhatsApp
            </button>

            <p className="mt-4 text-center text-xs text-muted">
              Opens WhatsApp with your details pre-filled — just tap Send.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
