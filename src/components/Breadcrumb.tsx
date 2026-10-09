import { Link } from 'react-router-dom'
import type { BreadcrumbItem } from '@/types/school'

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-5 border-b border-wheat/40 bg-ivory/50">
      <div className="container-editorial">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={`${item.href}-${index}`} className="flex items-center gap-2">
                {isLast ? (
                  <span
                    className="font-serif text-charcoal italic"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      to={item.href}
                      className="text-charcoal-soft/70 hover:text-terracotta transition-colors duration-300 ease-cinematic"
                    >
                      {item.label}
                    </Link>
                    <span className="text-sage/60 shrink-0">/</span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
