import { useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, GraduationCap, Sparkles } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { schoolData } from '@/data/school.data'
import type { QuickLinkGroup } from '@/types/school'
import useScrollPosition from '@/hooks/useScrollPosition'

const CINEMATIC_EASING: [number, number, number, number] = [0.22, 1, 0.36, 1]

type MegaMenuGroup = QuickLinkGroup

const buildMegaMenuGroups = (): MegaMenuGroup[] => {
  const base = schoolData.quickLinkGroups
  const about = base.find((g) => g.id === 'ql1')!
  const school = base.find((g) => g.id === 'ql2')!
  const admission = base.find((g) => g.id === 'ql4')!
  const more = base.find((g) => g.id === 'ql5')!

  // Co-curricular, Happenings & Contact stay visible in the navbar but their
  // links are intentionally unlinked (href "#") for now.
  const cocurricular: MegaMenuGroup = {
    id: 'cocurricular',
    title: 'Co-curricular',
    links: more.links
      .filter((l) => l.id === 'q51')
      .concat([
        { id: 'cc-1', label: 'Sports & Athletics', href: '#' },
        { id: 'cc-2', label: 'NCC & Scouts', href: '#' },
        { id: 'cc-3', label: 'Godavari Harit Sena', href: '#' },
        { id: 'cc-4', label: 'Clubs & Societies', href: '#' },
        { id: 'cc-5', label: 'Cultural Calendar', href: '#' },
      ]),
  }

  const happenings: MegaMenuGroup = {
    id: 'happenings',
    title: 'Happenings',
    links: school.links
      .filter((l) => l.id === 'q26')
      .concat([
        { id: 'hap-1', label: 'Latest News', href: '#' },
        { id: 'hap-2', label: 'Events Calendar', href: '#' },
        { id: 'hap-3', label: 'Gallery', href: '/gallery' },
        { id: 'hap-4', label: 'Annual Day', href: '#' },
      ]),
  }

  const contact: MegaMenuGroup = {
    id: 'contact',
    title: 'Contact',
    links: more.links
      .filter((l) => ['q53', 'q54', 'q55'].includes(l.id))
      .concat([
        { id: 'cnt-1', label: 'Reach Us', href: '#' },
        { id: 'cnt-2', label: 'Campus Map', href: '#' },
      ]),
  }

  return [about, school, admission, cocurricular, happenings, contact]
}

function Navbar() {
  const { scrollY } = useScrollPosition()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const megaGroups = useMemo(buildMegaMenuGroups, [])

  const isElevated = scrollY >= 40
  const isScrolledDeep = scrollY > 180

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[67px] transition-all duration-450 ease-cinematic ${
          isElevated
            ? 'glass-ivory shadow-editorial border-b border-wheat/40'
            : 'bg-transparent shadow-none'
        } ${isScrolledDeep ? 'translate-y-0' : 'translate-y-0'}`}
      >
        <div
          className={`absolute inset-x-0 bottom-0 h-px pointer-events-none transition-opacity duration-500 ${
            isElevated ? 'opacity-100' : 'opacity-0'
          } hairline-rule`}
        />
        <div className="container-editorial h-full flex items-center justify-between relative">
          <Link to="/" className="group flex items-center gap-3 h-full">
            <div className="h-[54px] w-[54px] relative rounded-sm overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-deep to-charcoal transition-transform duration-600 ease-cinematic group-hover:scale-105" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(228,217,184,0.25),transparent_55%)]" />
              <span className="relative text-ivory font-serif italic text-[28px] drop-shadow-[0_1px_0_rgba(0,0,0,0.18)]">
                S
              </span>
            </div>
            <div className="leading-tight transition-transform duration-450 ease-cinematic group-hover:-translate-y-0.5">
              <p className="font-serif text-[19px] tracking-tight text-charcoal">
                {schoolData.shortName}
              </p>
              <p className="text-[10px] tracking-[0.22em] uppercase text-terracotta">
                {schoolData.tagline}
              </p>
            </div>
          </Link>

          <nav className="hidden min-[901px]:flex items-center h-full">
            <ul className="flex items-center h-full gap-1">
              {megaGroups.map((group, idx) => (
                <li
                  key={group.id}
                  className="relative h-full"
                  onMouseEnter={() => setOpenGroup(group.id)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    className="h-full px-3 flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-charcoal/80 hover:text-terracotta transition-colors duration-300 ease-cinematic group"
                  >
                    <span className="relative">
                      {group.title}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-terracotta/70 transition-transform duration-450 ease-cinematic group-hover:scale-x-100" />
                    </span>
                    <ChevronDown
                      className={`w-3 h-3 opacity-60 transition-transform duration-450 ease-cinematic ${
                        openGroup === group.id ? 'rotate-180 text-terracotta' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openGroup === group.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                        transition={{
                          duration: 0.32,
                          ease: CINEMATIC_EASING,
                          delay: idx * 0.01,
                        }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[296px]"
                      >
                        <div className="glass-ivory shadow-editorial rounded-sm p-4 relative overflow-hidden">
                          <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-terracotta/6 blur-2xl pointer-events-none" />
                          <p className="relative text-[10px] tracking-[0.22em] uppercase text-terracotta mb-3">
                            {group.title}
                          </p>
                          <ul className="relative space-y-0.5">
                            {group.links.map((link) => (
                              <li key={link.id}>
                                <Link
                                  to={link.href}
                                  className="group/link block px-3 py-2.5 text-sm text-charcoal-soft/90 rounded-sm transition-all duration-450 ease-cinematic relative overflow-hidden"
                                  onClick={() => setOpenGroup(null)}
                                >
                                  <span className="absolute inset-y-0 left-0 w-0 bg-terracotta/90 transition-all duration-450 ease-cinematic group-hover/link:w-[3px]" />
                                  <span className="relative pl-0 group-hover/link:pl-2 transition-all duration-450 ease-cinematic group-hover/link:text-terracotta">
                                    {link.label}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            <NavLink
              to="/admission"
              className="group/adbtn !rounded-full btn-primary !py-2.5 !px-5 text-[11px] ml-5 shadow-editorial"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Enquire
              </span>
              <Sparkles className="w-3 h-3 text-wheat/90 opacity-80 ml-0.5" />
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

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: CINEMATIC_EASING }}
              className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm min-[901px]:hidden"
              onClick={closeDrawer}
            />

            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.45, ease: CINEMATIC_EASING }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-[85%] max-w-[360px] bg-ivory shadow-editorial min-[901px]:hidden flex flex-col"
            >
              <div className="h-[67px] px-5 flex items-center justify-between border-b border-wheat/40">
                <Link to="/" onClick={closeDrawer} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-sm bg-forest flex items-center justify-center text-ivory font-serif italic text-lg shadow-soft">
                    S
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
                              onClick={closeDrawer}
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
                  className="btn-primary w-full !py-3 text-[11px]"
                >
                  <GraduationCap className="w-4 h-4" />
                  Admission Enquiry
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
