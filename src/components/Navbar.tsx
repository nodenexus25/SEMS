import { useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, GraduationCap, Sparkles } from 'lucide-react'
import { schoolData } from '@/data/school.data'
import type { QuickLinkGroup } from '@/types/school'
import useScrollPosition from '@/hooks/useScrollPosition'

type MegaMenuGroup = QuickLinkGroup

const buildMegaMenuGroups = (): MegaMenuGroup[] => {
  const base = schoolData.quickLinkGroups
  const about = base.find((g) => g.id === 'ql1')!
  const school = base.find((g) => g.id === 'ql2')!
  const admission = base.find((g) => g.id === 'ql4')!
  const more = base.find((g) => g.id === 'ql5')!

  // Temporarily unlinked: all link hrefs mapped to '#' so the items stay visible
  // in the navbar but do not navigate. Revert the .map() to re-enable.
  const unlink = (links: { id: string; label: string; href: string }[]) =>
    links.map((l) => ({ ...l, href: '#' }))

  const cocurricular: MegaMenuGroup = {
    id: 'cocurricular',
    title: 'Co-curricular',
    links: unlink(
      more.links.filter((l) => l.id === 'q51').concat([
        { id: 'cc-1', label: 'Sports & Athletics', href: '/academics#co-curricular' },
        { id: 'cc-2', label: 'NCC & Scouts', href: '/academics#co-curricular' },
        { id: 'cc-3', label: 'Godavari Harit Sena', href: '/academics#co-curricular' },
        { id: 'cc-4', label: 'Clubs & Societies', href: '/academics#co-curricular' },
        { id: 'cc-5', label: 'Cultural Calendar', href: '/happenings' },
      ]),
    ),
  }

  const happenings: MegaMenuGroup = {
    id: 'happenings',
    title: 'Happenings',
    links: unlink(
      school.links.filter((l) => l.id === 'q26').concat([
        { id: 'hap-1', label: 'Latest News', href: '/happenings' },
        { id: 'hap-2', label: 'Events Calendar', href: '/happenings' },
        { id: 'hap-3', label: 'Gallery', href: '/gallery' },
        { id: 'hap-4', label: 'Annual Day', href: '/happenings' },
      ]),
    ),
  }

  const contact: MegaMenuGroup = {
    id: 'contact',
    title: 'Contact',
    links: unlink(
      more.links.filter((l) => ['q53', 'q54', 'q55'].includes(l.id)).concat([
        { id: 'cnt-1', label: 'Reach Us', href: '/contact' },
        { id: 'cnt-2', label: 'Campus Map', href: '/contact' },
      ]),
    ),
  }

  return [about, school, admission, cocurricular, happenings, contact]
}

function Navbar() {
  const { scrollY } = useScrollPosition()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const megaGroups = useMemo(buildMegaMenuGroups, [])

  const isElevated = scrollY >= 40

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[67px] transition-all duration-450 ease-cinematic bg-ivory/95 backdrop-blur-md border-b border-wheat/40 ${
          isElevated ? 'shadow-soft' : 'shadow-none'
        }`}
      >
        <div className="container-editorial h-full flex items-center justify-between relative">
          <Link to="/" className="group flex items-center gap-3 h-full" aria-label="Sanjivani English Medium School — home">
            <div className="h-[54px] w-[54px] relative rounded-full overflow-hidden flex items-center justify-center ring-1 ring-wheat/40 bg-white transition-transform duration-600 ease-cinematic group-hover:scale-105">
              <img
                src="/ses logo.jpeg"
                alt="Sanjivani English Medium School emblem"
                className="w-full h-full object-cover"
                width={54}
                height={54}
                decoding="async"
              />
            </div>
            <div className="leading-tight transition-transform duration-450 ease-cinematic group-hover:-translate-y-0.5">
              <p className="font-serif text-[19px] tracking-tight text-charcoal">
                {schoolData.shortName}
              </p>
              <p className="text-[10px] tracking-[0.22em] uppercase text-coral font-medium">
                {schoolData.tagline}
              </p>
            </div>
          </Link>

          <nav className="hidden min-[901px]:flex items-center h-full">
            <ul className="flex items-center h-full gap-1">
              {megaGroups.map((group) => (
                <li
                  key={group.id}
                  className="relative h-full"
                  onMouseEnter={() => setOpenGroup(group.id)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    className="h-full px-3 flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-charcoal/80 hover:text-coral transition-colors duration-300 ease-cinematic group"
                  >
                    <span className="relative">
                      {group.title}
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-coral via-sunflower to-sky transition-transform duration-450 ease-cinematic group-hover:scale-x-100 rounded-full" />
                    </span>
                    <ChevronDown
                      className={`w-3 h-3 opacity-60 transition-transform duration-450 ease-cinematic ${
                        openGroup === group.id ? 'rotate-180 text-coral' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[296px] transition-all duration-300 ease-out ${
                      openGroup === group.id
                        ? 'opacity-100 translate-y-0 blur-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2.5 blur-md pointer-events-none'
                    }`}
                  >
                    <div className="glass-ivory shadow-editorial rounded-2xl p-4 relative overflow-hidden">
                      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-coral/10 blur-2xl pointer-events-none" />
                      <p className="relative text-[10px] tracking-[0.22em] uppercase text-coral mb-3 font-semibold">
                        {group.title}
                      </p>
                      <ul className="relative space-y-0.5">
                        {group.links.map((link) => (
                          <li key={link.id}>
                            <Link
                              to={link.href}
                              className="group/link block px-3 py-2.5 text-sm text-charcoal-soft/90 rounded-lg transition-all duration-450 ease-cinematic relative overflow-hidden hover:bg-sunflower/10"
                              onClick={(e) => {
                                if (link.href === '#') e.preventDefault()
                                setOpenGroup(null)
                              }}
                            >
                              <span className="absolute inset-y-0 left-0 w-0 bg-gradient-to-b from-coral to-sunflower transition-all duration-450 ease-cinematic group-hover/link:w-[3px] rounded-r" />
                              <span className="relative pl-0 group-hover/link:pl-2 transition-all duration-450 ease-cinematic group-hover/link:text-coral font-medium">
                                {link.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <NavLink
              to="/admission"
              className="group/adbtn !rounded-full !bg-saffron hover:!bg-saffron-soft text-ivory px-5 py-2.5 text-[11px] ml-5 shadow-soft inline-flex items-center gap-1.5 font-medium tracking-editorial uppercase transition-all duration-450 ease-cinematic hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Enquire
              </span>
              <Sparkles className="w-3 h-3 text-ivory/80 opacity-80 ml-0.5" />
            </NavLink>
          </nav>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="min-[901px]:hidden h-10 w-10 flex items-center justify-center rounded-full border border-wheat/70 bg-ivory/60 backdrop-blur-sm text-charcoal hover:bg-wheat/50 transition-colors duration-300 ease-cinematic"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm min-[901px]:hidden transition-opacity duration-300 ease-out ${
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      <aside
        className={`fixed top-0 left-0 bottom-0 z-[70] w-[85%] max-w-[360px] bg-ivory shadow-editorial min-[901px]:hidden flex flex-col transition-transform duration-450 ease-cinematic ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
              <div className="h-[67px] px-5 flex items-center justify-between border-b border-wheat/40">
                <Link to="/" onClick={closeDrawer} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-wheat/50 bg-white flex-shrink-0">
                    <img
                      src="/ses logo.jpeg"
                      alt="Sanjivani English Medium School emblem"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                      decoding="async"
                    />
                  </div>
                  <div className="leading-tight">
                    <p className="font-serif text-lg tracking-tight text-charcoal">
                      {schoolData.shortName}
                    </p>
                    <p className="text-[9px] tracking-editorial uppercase text-terracotta">
                      Est. {schoolData.establishedYear}
                    </p>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Close menu"
                  className="h-9 w-9 flex items-center justify-center rounded-sm text-charcoal hover:bg-wheat/40 transition-colors duration-300 ease-cinematic"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4 px-3">
                <ul className="space-y-1">
                  {megaGroups.map((group) => (
                    <li key={group.id}>
                      <p className="text-[10px] tracking-editorial uppercase text-terracotta px-3 pt-4 pb-2 first:pt-0">
                        {group.title}
                      </p>
                      <ul className="space-y-0.5">
                        {group.links.map((link) => (
                          <li key={link.id}>
                            <NavLink
                              to={link.href}
                              onClick={(e) => {
                                if (link.href === '#') e.preventDefault()
                                closeDrawer()
                              }}
                              className={({ isActive }) =>
                                `block px-3 py-2.5 rounded-sm text-sm transition-colors duration-300 ease-cinematic ${
                                  isActive
                                    ? 'text-terracotta bg-wheat/40 font-medium'
                                    : 'text-charcoal-soft/90 hover:text-terracotta hover:bg-wheat/30'
                                }`
                              }
                            >
                              {link.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-4 border-t border-wheat/40">
                <Link
                  to="/admission"
                  onClick={closeDrawer}
                  className="w-full !py-3 text-[11px] bg-saffron hover:bg-saffron-soft text-ivory rounded-sm inline-flex items-center justify-center gap-2 font-medium tracking-editorial uppercase transition-all duration-450 ease-cinematic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron"
                >
                  <GraduationCap className="w-4 h-4" />
                  Admission Enquiry
                </Link>
              </div>
            </aside>
    </>
  )
}

export default Navbar
