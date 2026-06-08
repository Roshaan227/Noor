import shop from '../config/shop'
import paintings from '../data/paintings'
import { toWhatsAppNumber } from './phone'

export function formatPrice(price, currency = 'PKR') {
  return `${currency} ${price.toLocaleString('en-PK')}`
}

export function getPainterWhatsAppNumber(painting) {
  return toWhatsAppNumber(painting.painter.phone)
}

export function buildOrderMessage(painting) {
  return [
    `Hello ${painting.painter.name}! I would like to order this painting:`,
    '',
    `Painting No: ${painting.number}`,
    `Painting: ${painting.title}`,
    `Code: ${painting.code}`,
    `Price: ${formatPrice(painting.price, painting.currency)}`,
    '',
    '— Seller info —',
    `Painter: ${painting.painter.name}`,
    `Painter ID: ${painting.painter.id}`,
    '',
    'Please let me know about availability and delivery.',
  ].join('\n')
}

export function getWhatsAppOrderLink(painting) {
  const message = buildOrderMessage(painting)
  const number = getPainterWhatsAppNumber(painting)
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function getUniquePainters() {
  const seen = new Map()
  for (const painting of paintings) {
    const key = painting.painter.phone
    if (!seen.has(key)) {
      seen.set(key, painting.painter)
    }
  }
  return [...seen.values()]
}

export function getWhatsAppLinkForPainter(painter, message) {
  const text = message ?? `Hello ${painter.name}! I have a question about your paintings on ${shop.siteName}.`
  return `https://wa.me/${toWhatsAppNumber(painter.phone)}?text=${encodeURIComponent(text)}`
}

export function buildPainterRegistrationMessage({ name, email, message }) {
  return [
    `New painter registration — ${shop.siteName}`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n')
}

export function getPainterRegistrationWhatsAppLink({ name, email, message }) {
  const text = buildPainterRegistrationMessage({ name, email, message })
  const number = toWhatsAppNumber(shop.painterRegistrationPhone)
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}

export const contactInfo = {
  email: shop.email,
  siteName: shop.siteName,
  painters: getUniquePainters(),
  painterRegistrationPhone: shop.painterRegistrationPhone,
}
