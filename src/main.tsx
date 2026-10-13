import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  ScrollRestoration,
  Outlet,
  useLocation,
} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './index.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import StickySideCTA from '@/components/StickySideCTA'

import Home from '@/pages/Home'
import About from '@/pages/About'
import PrincipalMessage from '@/pages/PrincipalMessage'
import TrusteeMessage from '@/pages/TrusteeMessage'
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

const buildTitleMap = (): Record<string, string> => ({
  '/': 'Sanjivani English Medium School · Kopargaon',
  '/about': 'About Us · Sanjivani English Medium School',
  '/trustee-message': "Managing Trustee's Message · Sanjivani English Medium School",
  '/principal-message': "Principal's Message · Sanjivani English Medium School",
  '/academics': 'Academics · Sanjivani English Medium School',
  '/academics/pre-primary': 'Pre-Primary Wing · Sanjivani English Medium School',
  '/academics/primary': 'Primary Wing · Sanjivani English Medium School',
  '/academics/middle': 'Middle Wing · Sanjivani English Medium School',
  '/academics/senior': 'Senior Wing · Sanjivani English Medium School',
  '/happenings': 'Happenings · Sanjivani English Medium School',
  '/achievements': 'Achievements · Sanjivani English Medium School',
  '/admission': 'Admission · Sanjivani English Medium School',
  '/gallery': 'Gallery · Sanjivani English Medium School',
  '/contact': 'Contact Us · Sanjivani English Medium School',
})

// eslint-disable-next-line react-refresh/only-export-components
function PageFrame() {
  const location = useLocation()

  useEffect(() => {
    const map = buildTitleMap()
    const basePath = location.pathname.replace(/\/$/, '')
    document.title = map[basePath] ?? map[location.pathname] ?? map['/']
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
    errorElement: (
      <div className="min-h-screen bg-ivory flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[67px]">
          <NotFound />
        </main>
        <Footer />
      </div>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'trustee-message', element: <TrusteeMessage /> },
      { path: 'principal-message', element: <PrincipalMessage /> },
      { path: 'academics', element: <Academics /> },
      { path: 'academics/:wing', element: <WingPage /> },
      { path: 'happenings', element: <Happenings /> },
      { path: 'achievements', element: <Achievements /> },
      { path: 'admission', element: <Admission /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
