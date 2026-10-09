import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, ScrollRestoration, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './index.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import StickySideCTA from '@/components/StickySideCTA'

import Home from '@/pages/Home'
import About from '@/pages/About'
import PrincipalMessage from '@/pages/PrincipalMessage'
import Academics from '@/pages/Academics'
import WingPage from '@/pages/academics/WingPage'
import Happenings from '@/pages/Happenings'
import Achievements from '@/pages/Achievements'
import Admission from '@/pages/Admission'
import Gallery from '@/pages/Gallery'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

const CINEMATIC_EASING: [number, number, number, number] = [0.22, 1, 0.36, 1]

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

// eslint-disable-next-line react-refresh/only-export-components
function PageFrame() {
  const location = useLocation()

  useEffect(() => {
    const map: Record<string, string> = {
      '/': 'Sanjivani English Medium School · Kopargaon',
      '/about': 'About · Sanjivani English Medium School',
      '/principal-message': "Principal's Message · SEMS Kopargaon",
      '/academics': 'Academics · SEMS Kopargaon',
      '/academics/pre-primary': 'Pre-Primary Wing · SEMS',
      '/academics/primary': 'Primary Wing · SEMS',
      '/academics/middle': 'Middle Wing · SEMS',
      '/academics/senior': 'Senior Wing · SEMS Class X',
      '/happenings': 'Happenings · SEMS Kopargaon',
      '/achievements': 'Achievements · Glory Galore · SEMS',
      '/admission': 'Admissions 2026–27 · SEMS',
      '/gallery': 'Campus Gallery · SEMS',
      '/contact': 'Contact · Sanjivani Kopargaon',
    }
    document.title = map[location.pathname] ?? map['/']
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col pt-[67px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.key}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: CINEMATIC_EASING }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <StickySideCTA />
      <WhatsAppFloat />
      <Footer />
      <ScrollRestoration getKey={(loc) => loc.pathname} />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageFrame />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'principal-message', element: <PrincipalMessage /> },
      { path: 'academics', element: <Academics /> },
      { path: 'academics/:wing', element: <WingPage /> },
      { path: 'happenings', element: <Happenings /> },
      { path: 'achievements', element: <Achievements /> },
      { path: 'admission', element: <Admission /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  {
    path: '*',
    element: (
      <div className="min-h-screen bg-ivory flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[67px]">
          <NotFound />
        </main>
        <Footer />
      </div>
    ),
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
