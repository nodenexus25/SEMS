import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import type { FAQItem } from '@/types/school'

export interface FAQAccordionProps {
  items: FAQItem[]
  defaultOpenId?: string | null
}

const cinematic: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function FAQAccordion({
  items,
  defaultOpenId = null,
}: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  if (items.length === 0) return null

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col">
      {items.map((item, idx) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            className={`border-x border-wheat/70 ${
              idx === 0 ? 'border-t border-wheat/70' : ''
            } border-b border-wheat/70`}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-5 px-5 md:px-7 py-5 md:py-6 bg-ivory hover:bg-ivory-deep transition-colors duration-300 ease-cinematic text-left"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] uppercase tracking-editorial text-terracotta font-semibold px-2 py-0.5 bg-wheat/50 rounded-sm">
                    {item.group}
                  </span>
                </div>
                <h3 className="font-serif text-lg md:text-xl leading-snug text-charcoal pr-2">
                  {item.question}
                </h3>
              </div>
              <div
                className={`shrink-0 mt-8 md:mt-9 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-450 ease-cinematic ${
                  isOpen
                    ? 'bg-forest text-ivory rotate-180'
                    : 'bg-wheat/60 text-forest'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.span
                      key="minus"
                      initial={{ scale: 0.6, opacity: 0, rotate: -90 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      exit={{ scale: 0.6, opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.25, ease: cinematic }}
                      className="flex"
                    >
                      <Minus size={16} strokeWidth={2.2} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="plus"
                      initial={{ scale: 0.6, opacity: 0, rotate: 90 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      exit={{ scale: 0.6, opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.25, ease: cinematic }}
                      className="flex"
                    >
                      <Plus size={16} strokeWidth={2.2} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key={`panel-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: cinematic }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -8, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.08, ease: cinematic }}
                    className="px-5 md:px-7 pb-6 md:pb-8 pt-1 bg-ivory-deep/40"
                  >
                    <p className="text-sm md:text-[15px] leading-relaxed text-charcoal-soft whitespace-pre-line">
                      {item.answer}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
