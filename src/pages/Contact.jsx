import { contactInfo, getWhatsAppLinkForPainter } from '../utils/whatsapp'

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-12 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Reach Us</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
          Contact <span className="nureh-gradient-text">Nureh</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Each painting is by a different artist. Order from the gallery, or message a painter directly below.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        <ContactCard
          icon={<EmailIcon />}
          title="Email"
          value={contactInfo.email}
          href={`mailto:${contactInfo.email}`}
          hint="General enquiries"
        />

        <div className="flex flex-col justify-center rounded-[1.3rem] border border-border/70 bg-card p-8 nureh-card-glow">
          <h2 className="font-display text-xl font-semibold">How to order</h2>
          <ol className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg nureh-gradient-bg text-xs font-bold text-white">1</span>
              Browse the gallery and pick a painting
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg nureh-gradient-bg text-xs font-bold text-white">2</span>
              Tap &quot;Order on WhatsApp&quot; — it goes to that painter
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg nureh-gradient-bg text-xs font-bold text-white">3</span>
              Send the auto-filled order message
            </li>
          </ol>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <h2 className="mb-6 text-center font-display text-2xl font-semibold">Our Painters</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {contactInfo.painters.map((painter) => (
            <ContactCard
              key={painter.phone}
              icon={<WhatsAppIcon />}
              title={painter.name}
              value={painter.phone}
              href={getWhatsAppLinkForPainter(painter)}
              hint="Message on WhatsApp"
              accent
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, value, href, hint, accent }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`group rounded-[1.3rem] border p-8 transition-all duration-300 hover:-translate-y-1 nureh-card-shadow hover:nureh-card-glow ${
        accent
          ? 'border-whatsapp/30 bg-whatsapp/5 hover:border-whatsapp'
          : 'border-border/70 bg-card hover:border-primary/30'
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${
          accent ? 'nureh-btn-whatsapp text-white' : 'nureh-gradient-bg text-white'
        }`}
      >
        {icon}
      </div>
      <h2 className="mt-4 font-display text-xl font-semibold">{title}</h2>
      <p className="mt-1 font-medium text-foreground group-hover:text-primary">{value}</p>
      <p className="mt-2 text-sm text-muted">{hint}</p>
    </a>
  )
}

function EmailIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
