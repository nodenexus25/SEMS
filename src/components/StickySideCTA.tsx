import { Link } from 'react-router-dom'
import { Map, FilePenLine } from 'lucide-react'

function StickySideCTA() {
  return (
    <aside
      aria-label="Quick actions"
      className="hidden min-[900px]:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 flex-col shadow-editorial rounded-r-sm overflow-hidden"
    >
      <Link
        to="/contact#map"
        className="group flex items-center gap-0 bg-forest text-ivory px-3 py-5 hover:bg-forest-deep transition-all duration-450 ease-cinematic"
      >
        <Map className="w-4 h-4 shrink-0" />
        <span
          className="ml-2 text-[11px] tracking-editorial uppercase font-medium whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Campus Tour
        </span>
      </Link>
      <Link
        to="/admission"
        className="group flex items-center gap-0 bg-saffron text-ivory px-3 py-5 hover:bg-saffron-soft transition-all duration-450 ease-cinematic"
      >
        <FilePenLine className="w-4 h-4 shrink-0" />
        <span
          className="ml-2 text-[11px] tracking-editorial uppercase font-medium whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Apply Now
        </span>
      </Link>
    </aside>
  )
}

export default StickySideCTA
