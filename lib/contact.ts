export const CONTACT = {
  whatsapp: {
    e164: '59898532380',
    display: '+598 98 532 380',
  },
} as const;

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${CONTACT.whatsapp.e164}?text=${encodeURIComponent(message)}`;
}
