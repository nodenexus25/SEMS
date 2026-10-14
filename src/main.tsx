import { StrictMode, Suspense, lazy, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useLocation,
} from 'react-router-dom'
import './index.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import StickySideCTA from '@/components/StickySideCTA'

// Route-level code splitting: each page is a separate chunk so the initial
// bundle stays small and the first paint happens fast (no blank screen).
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const PrincipalMessage = lazy(() => import('@/pages/PrincipalMessage'))
const TrusteeMessage = lazy(() => import('@/pages/TrusteeMessage'))
const Academics = lazy(() => import('@/pages/Academics'))
const WingPage = lazy(() => import('@/pages/academics/WingPage'))
const Happenings = lazy(() => import('@/pages/Happenings'))
const Achievements = lazy(() => import('@/pages/Achievements'))
const Admission = lazy(() => import('@/pages/Admission'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

// Minimal page-loading fallback so the user never sees a blank white screen
// while a route chunk is being downloaded.
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-forest/60">
        <div className="h-9 w-9 rounded-full border-2 border-forest/20 border-t-forest animate-spin" />
        <span className="text-xs tracking-[0.25em] uppercase font-inter">
          Loading…
        </span>
      </div>
    </div>
  )
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

  // Handle in-page anchor links (e.g. /academics#co-curricular).
  // Because pages are lazy-loaded, the target section may not exist on the
  // first render, so we retry a few times with a short delay.
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    if (!id) return

    let attempts = 0
    const maxAttempts = 10
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
      if (attempts < maxAttempts) {
        attempts++
        window.setTimeout(tryScroll, 100)
      }
    }
    // Give the lazy-loaded route a moment to mount.
    const timer = window.setTimeout(tryScroll, 100)
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  // Scroll to top when navigating between pages (no hash).
  useEffect(() => {
    if (location.hash) return
    window.scrollTo({ top: 0 })
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col pt-[67px]">
        <div key={location.pathname} className="page-fade-in">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <StickySideCTA />
      <WhatsAppFloat />
      <Footer />
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
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
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
