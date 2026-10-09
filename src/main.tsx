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
    children: [{ index: true, element: <Home /> }],
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
