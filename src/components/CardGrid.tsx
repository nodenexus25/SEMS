import { motion } from 'framer-motion'
import {
  Award,
  BadgeCheck,
  Baby,
  BookOpen,
  Compass,
  Flame,
  Flag,
  Gem,
  Globe2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Layers,
  Lightbulb,
  Medal,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Trees,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type {
  AccoladeItem,
  AssertionItem,
  ExploreTile,
  PartnerItem,
  TeamMember,
} from '@/types/school'

export interface CardGridProps {
  variant: 'explore' | 'accolade' | 'partner' | 'assertion' | 'team'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onItemClick?: (i: any) => void
}

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  BadgeCheck,
  HandHeart,
  Scale,
  ShieldCheck,
  Compass,
  Target,
  Gem,
  Flame,
  Lightbulb,
  Medal,
  Globe2,
  Trees,
  Flag,
  Layers,
  Users,
  Award,
  Sparkles,
  Baby,
  BookOpen,
  GraduationCap,
}

// Responsive column counts per variant (cards are w-full and fill the grid cell)
const variantGridCols: Record<CardGridProps['variant'], string> = {
  explore: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  accolade: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  partner: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7',
  assertion: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
  team: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
}

const cinematic: [number, number, number, number] = [0.22, 1, 0.36, 1]

function resolveIcon(name: string): LucideIcon | undefined {
  return iconMap[name]
}

function ExploreCard({
  item,
  onClick,
}: {
  item: ExploreTile
  onClick?: (i: ExploreTile) => void
}) {
  const Icon = resolveIcon(item.iconName)
  return (
    <motion.div
      onClick={() => onClick?.(item)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: cinematic }}
      className="w-full bg-ivory border border-wheat/60 overflow-hidden cursor-pointer group"
      style={{ boxShadow: '0 1px 2px rgba(31, 41, 36, 0.06)' }}
    >
      <div className="relative h-[214px] overflow-hidden bg-sage-light/30">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-600 ease-cinematic group-hover:scale-105"
        />
        {item.eyebrow && (
          <div className="absolute top-3 left-3 bg-ivory/95 backdrop-blur px-3 py-1 text-[11px] tracking-editorial uppercase text-forest font-medium">
            {item.eyebrow}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-forest/10 flex items-center justify-center text-forest shrink-0">
            {Icon && <Icon size={18} strokeWidth={1.8} />}
          </div>
          <h3 className="font-serif text-lg leading-tight text-charcoal">
            {item.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-charcoal-soft/80 min-h-[60px]">
          {item.description}
        </p>
        <div className="flex items-center gap-2 text-terracotta text-sm font-medium pt-1">
          <span>Explore</span>
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

export function AccoladeCard({
  item,
  onClick,
}: {
  item: AccoladeItem
  onClick?: (i: AccoladeItem) => void
}) {
  return (
    <motion.div
      onClick={() => onClick?.(item)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: cinematic }}
      className="w-full bg-ivory border border-wheat/60 overflow-hidden cursor-pointer group"
      style={{ boxShadow: '0 1px 2px rgba(31, 41, 36, 0.06)' }}
    >
      <div className="relative h-[240px] overflow-hidden bg-sage-light/30">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-600 ease-cinematic group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-terracotta text-ivory px-3 py-1 text-[11px] tracking-editorial uppercase font-medium">
            {item.category}
          </span>
          <span className="bg-charcoal/85 text-ivory px-3 py-1 text-[11px] tracking-editorial uppercase font-medium">
            {item.year}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-serif text-xl leading-snug text-charcoal min-h-[56px]">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-charcoal-soft/80 min-h-[84px]">
          {item.description}
        </p>
        {item.recipient && (
          <div className="flex items-center gap-2 pt-1 border-t border-wheat/50">
            <Award size={14} className="text-terracotta" />
            <span className="text-xs text-sage font-medium">
              {item.recipient}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function PartnerCard({ item }: { item: PartnerItem }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: cinematic }}
      className="w-full bg-ivory border border-wheat/60 p-4 flex flex-col items-center justify-center gap-3 group cursor-default"
      style={{ boxShadow: '0 1px 2px rgba(31, 41, 36, 0.06)' }}
    >
      <div className="w-16 h-16 rounded-full bg-wheat/40 flex items-center justify-center overflow-hidden">
        <img
          src={item.logo}
          alt={item.name}
          loading="lazy"
          className="w-14 h-14 object-contain transition-transform duration-450 ease-cinematic group-hover:scale-110"
        />
      </div>
      <div className="text-center">
        <p className="text-xs text-charcoal font-semibold leading-snug">
          {item.name}
        </p>
        {item.category && (
          <p className="text-[10px] uppercase tracking-editorial text-sage mt-1">
            {item.category}
          </p>
        )}
      </div>
    </motion.div>
  )
}

function AssertionCard({
  item,
  onClick,
}: {
  item: AssertionItem
  onClick?: (i: AssertionItem) => void
}) {
  const Icon = resolveIcon(item.iconName)
  return (
    <motion.div
      onClick={() => onClick?.(item)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: cinematic }}
      className="w-full bg-ivory border border-wheat/60 overflow-hidden cursor-pointer group"
      style={{ boxShadow: '0 1px 2px rgba(31, 41, 36, 0.06)' }}
    >
      <div className="relative h-[200px] overflow-hidden bg-forest/5">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-600 ease-cinematic group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {Icon && <Icon size={48} className="text-forest/30" />}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/30 to-transparent" />
        <div className="absolute bottom-4 left-5 w-12 h-12 rounded-lg bg-ivory shadow-soft flex items-center justify-center text-forest">
          {Icon && <Icon size={22} strokeWidth={1.75} />}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-serif text-2xl leading-tight text-charcoal">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-charcoal-soft/80 min-h-[72px]">
          {item.description}
        </p>
        {item.exploreHref && (
          <div className="flex items-center gap-2 text-terracotta text-sm font-medium pt-1">
            <span>Learn more</span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function TeamCard({
  item,
  onClick,
}: {
  item: TeamMember
  onClick?: (i: TeamMember) => void
}) {
  return (
    <motion.div
      onClick={() => onClick?.(item)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: cinematic }}
      className="w-full bg-ivory border border-wheat/60 overflow-hidden cursor-pointer group"
      style={{ boxShadow: '0 1px 2px rgba(31, 41, 36, 0.06)' }}
    >
      <div className="relative h-[320px] overflow-hidden bg-sage-light/20">
        <img
          src={item.portrait}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-600 ease-cinematic group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-ivory">
          <span className="text-[10px] uppercase tracking-editorial bg-terracotta/90 px-2 py-0.5 rounded-sm">
            {item.wing === 'Leadership' ? 'Leadership' : item.wing}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-serif text-lg leading-tight text-charcoal">
          {item.name}
        </h3>
        <p className="text-sm font-medium text-terracotta">{item.role}</p>
        {item.qualifications && (
          <p className="text-[11px] text-sage uppercase tracking-editorial">
            {item.qualifications}
          </p>
        )}
        {item.subject && !item.qualifications && (
          <p className="text-[11px] text-sage uppercase tracking-editorial">
            {item.subject}
          </p>
        )}
        <p className="text-xs text-charcoal-soft/70 italic leading-relaxed pt-1 border-t border-wheat/40 mt-1 line-clamp-3">
          “{item.quote}”
        </p>
      </div>
    </motion.div>
  )
}

export default function CardGrid({
  variant,
  items,
  onItemClick,
}: CardGridProps) {
  const gridCols = variantGridCols[variant]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCard = (item: any, index: number) => {
    const key = item?.id ?? index
    switch (variant) {
      case 'explore':
        return (
          <ExploreCard
            key={key}
            item={item}
            onClick={onItemClick as (i: ExploreTile) => void}
          />
        )
      case 'accolade':
        return (
          <AccoladeCard
            key={key}
            item={item}
            onClick={onItemClick as (i: AccoladeItem) => void}
          />
        )
      case 'partner':
        return <PartnerCard key={key} item={item} />
      case 'assertion':
        return (
          <AssertionCard
            key={key}
            item={item}
            onClick={onItemClick as (i: AssertionItem) => void}
          />
        )
      case 'team':
        return (
          <TeamCard
            key={key}
            item={item}
            onClick={onItemClick as (i: TeamMember) => void}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {items.map((item, index) => renderCard(item, index))}
    </div>
  )
}
