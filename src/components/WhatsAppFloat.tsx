import { MessageCircle } from 'lucide-react'
import { schoolData } from '@/data/school.data'

const formatPhoneForWhatsApp = (phone: string): string =>
  phone.replace(/[^\d]/g, '')

function WhatsAppFloat() {
  const whatsappNumber = formatPhoneForWhatsApp(schoolData.phones.primary)
  const waLink = `https://wa.me/${whatsappNumber}`

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-forest text-ivory shadow-editorial hover:bg-forest-deep transition-all duration-450 ease-cinematic hover:scale-110 hover:-translate-y-0.5"
    >
      <span className="absolute inset-0 rounded-full bg-forest/40 animate-ping opacity-60" />
      <MessageCircle className="relative w-6 h-6 shrink-0" />
    </a>
  )
}

export default WhatsAppFloat
