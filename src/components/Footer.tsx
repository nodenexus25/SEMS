import { Link } from 'react-router-dom'
import {
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'
import { schoolData } from '@/data/school.data'
import type { SocialLink } from '@/types/school'

const socialIcon = (platform: SocialLink['platform']) => {
  switch (platform) {
    case 'facebook':
      return Facebook
    case 'youtube':
      return Youtube
    case 'instagram':
      return Instagram
    case 'linkedin':
      return Linkedin
    default:
      return Facebook
  }
}

const formatPhoneForTel = (phone: string): string => phone.replace(/[^\d+]/g, '')

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-ivory/90">
      <div className="container-editorial py-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-11 w-11 rounded-sm bg-ivory/10 border border-ivory/20 flex items-center justify-center font-serif italic text-2xl text-ivory">
              S
            </div>
            <div className="leading-tight">
              <p className="font-serif text-lg text-ivory">
                {schoolData.name}
              </p>
              <p className="text-[10px] tracking-editorial uppercase text-terracotta-soft">
                Est. {schoolData.establishedYear} · Kopargaon
              </p>
            </div>
          </div>
          <p className="text-sm text-ivory/60 leading-relaxed mb-6 uppercase tracking-editorial text-[11px]">
            {schoolData.trust}
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-terracotta-soft flex-shrink-0" />
              <span className="text-ivory/75 leading-relaxed">
                {schoolData.address.line1},<br />
                {schoolData.address.city}, {schoolData.address.state} {schoolData.address.pin}
                <br />
                <span className="text-[11px] text-ivory/50">
                  {schoolData.address.landmark}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-terracotta-soft flex-shrink-0" />
              <a
                href={`tel:${formatPhoneForTel(schoolData.phones.primary)}`}
                className="text-ivory/80 hover:text-terracotta-soft transition-colors duration-300 ease-cinematic"
              >
                {schoolData.phones.primary}
              </a>
            </li>
            {schoolData.phones.admission && (
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sage-light flex-shrink-0" />
                <a
                  href={`tel:${formatPhoneForTel(schoolData.phones.admission)}`}
                  className="text-ivory/70 hover:text-terracotta-soft transition-colors duration-300 ease-cinematic text-xs"
                >
                  Admission · {schoolData.phones.admission}
                </a>
              </li>
            )}
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-terracotta-soft flex-shrink-0" />
              <a
                href={`mailto:${schoolData.emails.primary}`}
                className="text-ivory/80 hover:text-terracotta-soft transition-colors duration-300 ease-cinematic"
              >
                {schoolData.emails.primary}
              </a>
            </li>
            {schoolData.emails.admission && (
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sage-light flex-shrink-0" />
                <a
                  href={`mailto:${schoolData.emails.admission}`}
                  className="text-ivory/70 hover:text-terracotta-soft transition-colors duration-300 ease-cinematic text-xs"
                >
                  {schoolData.emails.admission}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-editorial uppercase text-wheat mb-5">
            Social · Find Us
          </p>
          <ul className="space-y-2.5 text-sm mb-8">
            {schoolData.socials.map((social) => {
              const Icon = socialIcon(social.platform)
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 text-ivory/70 hover:text-terracotta-soft transition-colors duration-300 ease-cinematic"
                    aria-label={social.label}
                  >
                    <span className="h-8 w-8 rounded-sm bg-ivory/10 border border-ivory/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-xs capitalize">{social.platform}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <p className="text-[11px] tracking-editorial uppercase text-wheat mb-4">
            Visit
          </p>
          <a
            href={schoolData.website}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-ivory/70 hover:text-terracotta-soft transition-colors duration-300 ease-cinematic break-all"
          >
            {schoolData.website}
          </a>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] tracking-editorial uppercase text-wheat mb-5">
            Quick Links
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {schoolData.quickLinkGroups.map((group) => (
              <div key={group.id}>
                <p className="font-serif text-sm text-ivory mb-3 border-b border-ivory/10 pb-2">
                  {group.title}
                </p>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        to={link.href}
                        className="text-xs text-ivory/65 hover:text-terracotta-soft transition-colors duration-300 ease-cinematic"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-editorial py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-[11px] tracking-editorial uppercase text-ivory/40 mb-1">
              Affiliated to · {schoolData.affiliation.board}
            </p>
            <p className="text-[10px] tracking-editorial uppercase text-ivory/30">
              {schoolData.affiliation.note}
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[11px] tracking-editorial uppercase text-ivory/50">
              © {year} {schoolData.name} · All rights reserved
            </p>
            <div className="mt-2 flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-1">
              <Link
                to="/contact"
                className="text-[10px] tracking-editorial uppercase text-ivory/40 hover:text-terracotta-soft transition-colors duration-300 ease-cinematic"
              >
                Privacy
              </Link>
              <Link
                to="/contact"
                className="text-[10px] tracking-editorial uppercase text-ivory/40 hover:text-terracotta-soft transition-colors duration-300 ease-cinematic"
              >
                Terms
              </Link>
              <Link
                to="/contact"
                className="text-[10px] tracking-editorial uppercase text-ivory/40 hover:text-terracotta-soft transition-colors duration-300 ease-cinematic"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
