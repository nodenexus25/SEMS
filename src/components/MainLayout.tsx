import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import StickySideCTA from '@/components/StickySideCTA'

const CINEMATIC_EASING: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface PageTransitionProps {
  locationKey: string
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

function PageTransition({ locationKey }: PageTransitionProps) {
  return (
    <motion.div
      key={locationKey}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.45, ease: CINEMATIC_EASING }}
    >
      <Outlet />
    </motion.div>
  )
}

function MainLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col pt-[67px]">
        <AnimatePresence mode="wait">
          <PageTransition locationKey={location.key} />
        </AnimatePresence>
      </main>
      <StickySideCTA />
      <WhatsAppFloat />
      <Footer />
    </div>
  )
}

export default MainLayout
