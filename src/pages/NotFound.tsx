import { Link } from 'react-router-dom'
import { Home, Compass } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'
import schoolData from '@/data/school.data'

function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[72vh] flex flex-col items-center justify-center py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(182,88,60,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(47,82,51,0.1),transparent_60%)]" />

      <div className="container-editorial relative flex flex-col items-center text-center">
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="chip mb-8 tracking-widest"
        >
          <Compass className="w-3 h-3 mr-2" />
          Error · 404
        </motion.p>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="font-serif text-[180px] md:text-[260px] leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-forest via-forest-deep to-charcoal/70 select-none"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4"
        >
          <SectionHeading
            eyebrow="We missed a beat"
            title="The page you seek is not here"
            accentIndex={3}
            subtitle="Perhaps the path has changed since the last monsoon. Return home, or wander the corridors of our campus instead — every corner of Sanjivani holds a story worth finding."
            align="center"
            decoratedUnderline
          />
        </motion.div>

        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/">
            <Button variant="primary" size="lg" iconLeft={<Home className="w-4 h-4" />}>
              Return Home
            </Button>
          </Link>
          <Link to="/academics">
            <Button variant="secondary" size="lg">
              Explore Academics
            </Button>
          </Link>
          <Link to="/gallery">
            <Button variant="ghost" size="lg">
              Campus Gallery
            </Button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-16 text-xs tracking-editorial uppercase text-charcoal-soft/60"
        >
          {schoolData.name} · {schoolData.address.city} · Est. {schoolData.establishedYear}
        </motion.p>
      </div>
    </motion.section>
  )
}

export default NotFound
