import { useCallback, useEffect, useState } from 'react'

const MIN_ZOOM = 1
const MAX_ZOOM = 3
const ZOOM_STEP = 0.25

export default function ImageLightbox({ image, alt, title, isOpen, onClose }) {
  const [zoom, setZoom] = useState(1)

  const handleClose = useCallback(() => {
    setZoom(1)
    onClose()
  }, [onClose])

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)))
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)))

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') handleClose()
      if (e.key === '+' || e.key === '=') {
        setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)))
      }
      if (e.key === '-') {
        setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)))
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, handleClose])

  useEffect(() => {
    if (isOpen) setZoom(1)
  }, [isOpen, image])

  if (!isOpen) return null

  const zoomPercent = Math.round(zoom * 100)

  return (
    <div
      className="lightbox-overlay fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title ? `Viewing ${title}` : 'Painting preview'}
      onClick={handleClose}
    >
      <div
        className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          {title && (
            <p className="truncate font-display text-lg font-semibold text-white sm:text-xl">{title}</p>
          )}
          <p className="text-sm text-white/60">{zoomPercent}%</p>
        </div>

        <button
          type="button"
          onClick={handleClose}
          className="lightbox-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Close full screen view"
        >
          <CloseIcon />
        </button>
      </div>

      <div
        className="flex flex-1 items-center justify-center overflow-auto px-4 pb-28 pt-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="lightbox-image-wrap transition-transform duration-200 ease-out"
          style={{ transform: `scale(${zoom})` }}
        >
          <img
            src={image}
            alt={alt}
            className="max-h-[75vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            draggable={false}
          />
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-2 shadow-xl backdrop-blur-md sm:gap-3 sm:px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={zoomOut}
          disabled={zoom <= MIN_ZOOM}
          className="lightbox-btn flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Zoom out"
        >
          <ZoomOutIcon />
        </button>

        <span className="min-w-[4rem] text-center text-sm font-semibold text-white">{zoomPercent}%</span>

        <button
          type="button"
          onClick={zoomIn}
          disabled={zoom >= MAX_ZOOM}
          className="lightbox-btn flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Zoom in"
        >
          <ZoomInIcon />
        </button>
      </div>
    </div>
  )
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function ZoomInIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v6M8 11h6M11 19a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
  )
}

function ZoomOutIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M8 11h6M11 19a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
  )
}
