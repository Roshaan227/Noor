import { Link } from 'react-router-dom'
import { contactInfo } from '../utils/whatsapp'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/80 bg-gradient-to-b from-surface to-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold nureh-gradient-text">Nureh</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Handcrafted paintings by talented artists. Each piece tells its own story.
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground">Explore</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link to="/" className="text-muted transition hover:text-primary">Home</Link>
              <Link to="/gallery" className="text-muted transition hover:text-primary">Gallery</Link>
              <Link to="/reviews" className="text-muted transition hover:text-primary">Reviews</Link>
              <Link to="/contact" className="text-muted transition hover:text-primary">Contact</Link>
              <Link to="/join" className="text-muted transition hover:text-primary">Join Us</Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-foreground">Get in touch</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
              <a href={`mailto:${contactInfo.email}`} className="transition hover:text-primary">
                {contactInfo.email}
              </a>
              {contactInfo.painters.map((painter) => (
                <a key={painter.phone} href={`tel:${painter.phone}`} className="transition hover:text-primary">
                  {painter.name}: {painter.phone}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="nureh-divider my-8" />
        <p className="text-center text-xs text-muted">
          © {new Date().getFullYear()} Nureh. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
