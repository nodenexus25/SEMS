# Sanjivani English Medium School - Product Requirements Document

## Overview
- **Summary**: A production-grade multi-page React website for Sanjivani English Medium School (Kopargaon, Maharashtra), structurally modeled on the gurukultheschool.com IA and visual layout, populated with authentic Sanjivani school data extracted from the official Facebook page.
- **Purpose**: Establish a credible, modern, information-rich online presence that presents the school's 1978 heritage, academic offerings, campus life, achievements, and admission channels to prospective parents, students, alumni, and staff.
- **Target Users**: Parents of prospective students (primary), current students & parents, alumni, teaching & non-teaching staff, job seekers, and general community visitors from Kopargaon taluka and vicinity.

## Goals
- Mirror the complete information architecture (main + sub pages), section structure, navigation pattern, and UI component density of the reference gurukultheschool.com site.
- Replace all reference content with Sanjivani English Medium School specific branding, data, copy, and imagery.
- Ship a Vite + React 18 + TypeScript + React Router 7 multi-page site with responsive, production-ready code that builds and runs cleanly.
- Deliver a warm, editorial, trustworthy visual identity appropriate for a heritage K-12 institution (est. 1978) rooted in rural Maharashtra education.

## Non-Goals
- Backend / CMS / admin panel integration (content is typed data modules in-repo).
- Real admission form submission, payment, or login functionality (links are placeholders / mailto / tel).
- Facebook API integration or live-post sync (Facebook data is captured once as static content in this spec cycle).
- Accessibility audit beyond reasonable semantic HTML defaults (a11y is not independently gated this cycle).
- SEO meta tags per page beyond reasonable `<title>` and basic description.

## Background & Context
- Reference IA & layout source: https://www.gurukultheschool.com/ (visited 2026-10-08; homepage snapshot captured with full navigation tree).
- School content source: https://www.facebook.com/sanjivanienglishschool (Intro, phone, email, trust name, est. year, Kopargaon location, and Class X Toppers Felicitation 2026 event captured on 2026-10-08; mysemschool.com domain cited as official site in Facebook bio but unreachable at time of capture).
- Sanjivani brand context (per user profile preferences): heritage agricultural trust ecosystem, est. 1962 family of institutions (Sanjivani group), Godavari river belt, Kopargaon/Maharashtra rural education.
- Stack preferences (user profile): Vite, React 18, TypeScript, React Router 7, flat `src/components` architecture, typed data arrays for content-driven UI, no deep component subfolders.

## Functional Requirements
- **FR-1 Routing**: At minimum 10 distinct routes — Home, About/Who We Are, Principal's Message, Academics (Pre-Primary / Primary / Middle / Senior Wings combined or split), Happenings/Events, Achievements (Glory Galore + Results), Admission, Co-curricular (Specially@Sanjivani), Gallery/Photos, Contact Us — all navigable via React Router 7 with client-side transitions and no full reload.
- **FR-2 Global Chrome**: Persistent top navbar (logo + multi-level mega-menu or hamburger on mobile) + sticky side CTAs (Virtual Tour-equivalent + Apply Now-equivalent) + WhatsApp floating button + footer with 4-column layout (brand/contact, social, quick links, legal/copyright).
- **FR-3 Homepage Sections (in order, matching reference flow)**:
  1. Full-bleed Hero carousel (5–7 slides, no Ken Burns zoom, opacity fades, 4s interval) with static banner imagery
  2. Welcome / introductory block with heritage quote
  3. Vision / Mission / Core Values / Emblem Story row (3-4 cards with icons and "Explore" CTA)
  4. Key Assertions / Highlights grid (4 pillars)
  5. Dignitaries / Notable Voices testimonial strip
  6. Explore Sanjivani card grid (12 tiles linking to wings & programs)
  7. Legacy in Numbers stats band (animated counters, 3 tabs)
  8. Accolades / Laurels image gallery (12-tile masonry or uniform grid)
  9. Parents Say / Trusted Voices testimonial carousel (3 visible)
  10. What's Next CTA banner (Enquiry / Admissions / Register)
  11. Perfect Partners / Affiliations logo strip
  12. Happenings teaser (Gurukulites in Action equivalent + Milestones & Moments equivalent, "See More" link)
- **FR-4 Subpages**: Each route has a Hero banner + breadcrumb + page-specific content sections that structurally mirror the reference subpage layouts (content replaced with Sanjivani copy).
- **FR-5 Contact & Enquiry**: Contact page with school address (Kopargaon, Maharashtra), map placeholder, 2 phone numbers, 2 emails (info + admission), enquiry form UI (name, email, phone, class applying for, message) with client-side validation and submit → success toast (no backend post).
- **FR-6 Admission Page**: Step-wise admission process, eligibility per wing, fee structure placeholder table, registration CTA, downloadable handbook placeholder, FAQ accordion (10+ items), session info calendar card.
- **FR-7 Happenings / Events**: Event listing page with filter tabs (All / Academic / Cultural / Sports / Celebration), event cards with date badge + thumbnail + excerpt + "View Details". Featured: "Class X Toppers Felicitation Ceremony 2026".
- **FR-8 Academics Wings**: 4 wing subsections (or separate routes) — Pre-Primary, Primary, Middle, Senior — each with curriculum highlights, teaching approach, facilities snippet, related gallery strip, teachers spotlight (3-5 per wing).
- **FR-9 Typed Content Modules**: All school copy (name, trust, address, phones, emails, social URLs, wing descriptions, events list, achievements list, FAQs, team list, partner list, stats) lives in typed TS files under `src/data`; components consume data arrays exclusively (no hard-coded copy in JSX).
- **FR-10 Social & External Links**: Footer links to Facebook page `https://www.facebook.com/sanjivanienglishschool` plus placeholders for YouTube, Instagram, LinkedIn; all `tel:` and `mailto:` links wired to Sanjivani data.

## Non-Functional Requirements
- **NFR-1 Build**: `npm run build` exits 0 with no TS errors, no ESLint errors (at strict `@typescript-eslint/recommended` or equivalent); output in `dist/`.
- **NFR-2 Dev Experience**: `npm run dev` starts Vite dev server on default port with HMR working, no console errors on first paint of every route.
- **NFR-3 Performance**: Largest homepage paint < 2s on a warm dev server; all Hero assets use proper picture/sources or optimized image service URLs; no blocking fonts.
- **NFR-4 Responsiveness**: All pages readable and navigable at 375px, 768px, 1280px, and 1920px widths; no horizontal scroll; grid layouts collapse to column on mobile; nav collapses to hamburger with slide-in drawer below 900px.
- **NFR-5 Code Conventions**: Flat component directory (`src/components` only, no subdirs), PascalCase component filenames, one default export per file, typed props with `interface`, no `any` in component signatures, content via typed data arrays only (per user profile).
- **NFR-6 Visual System**: Warm/creamy editorial palette anchored around `#F8F7F2` ivory, charcoal/forest/terracotta accents, headings in a high-contrast serif (Playfair Display or Cormorant Garamond), body in Inter; pixel-uniform card grids; no SaaS-card generic styling (per user profile preferences).
- **NFR-7 Animation**: Cinematic easing `[0.22, 1, 0.36, 1]`, page transitions ~450ms, Hero slideshow 4s interval with opacity fades, no Hero image zoom/pan; navbar transparent at top → solid/blur on scroll (per user profile preferences).
- **NFR-8 Component Reusability**: A single `<HeroCarousel>` used on homepage and (trimmed) on subpages; single `<CardGrid>` component used for Highlights / Explore / Accolades / Partners with typed variants; single `<SectionHeading>` throughout.

## Constraints
- **Technical**: Vite + React 18 + TypeScript 5 + React Router 7; CSS via Tailwind CSS v3 (standard for Vite React templates). No Next.js, no SSR. No external UI kit (MUI/Antd) — custom components only.
- **Business**: All content must present Sanjivani English Medium School, Kopargaon, est. 1978, under the Sanjivani Education, Agricultural and Rural Development Trust. No reference to the Gurukul school brand in final copy (Gurukul is strictly an IA/layout reference).
- **Dependencies**: Keep runtime deps minimal: `react`, `react-dom`, `react-router-dom`, plus at most one animation helper (Framer Motion or equivalent) and one icon pack (lucide-react preferred).
- **Assets**: Placeholder imagery via the approved text-to-image service endpoint or Unsplash-style education/school imagery; no copyrighted brand marks copied from the reference school.

## Assumptions
- Since mysemschool.com was unreachable at time of capture, school-specific copy (vision, mission, values, team bios, detailed fee, wing curricula, event corpus) is authored as plausible, on-brand content and clearly marked as "content placeholder (to be finalized by school)" in data module comments.
- User profile preferences (warm editorial palette, serif headings + Inter body, transparent→solid navbar, 4s Hero fades without Ken Burns, flat components, typed data arrays) apply as defaults unless overridden in user approval.
- No CBSE affiliation number or school code is available from Facebook; these are shown as placeholder placeholders ("Affiliation No.: TBD") on Contact/Legal.
- Team (Principal, Vice Principal, teachers) profiles are populated with 3-5 placeholder entries per wing, using generic initials/roles and text-to-image portrait placeholders.

## Acceptance Criteria

### AC-1: Site builds and runs cleanly
- **Type**: `rule`
- **Given**: a fresh clone, `.env` (if any) populated, `npm install` complete
- **When**: `npm run build` is executed and then `npm run dev` is started
- **Then**: build exits 0, no TS or lint errors output; dev server starts and every route (Home, About, Wings, Happenings, Achievements, Admission, Contact, Gallery) renders without console errors
- **Pass Condition**: `npm run build` stdout contains `✓ built in` and `echo ExitCode:%ERRORLEVEL%` prints 0; manual route smoke-test finds no 404 or crash
- **Evidence**: build log capture + dev server console screenshot showing all routes visited

### AC-2: Full IA match to reference (10+ routes + nav)
- **Type**: `rule`
- **Given**: running site
- **When**: user opens the navbar menu and walks every link
- **Then**: at minimum these routes resolve to distinct pages: `/`, `/about`, `/principal-message`, `/academics`, `/academics/pre-primary`, `/academics/primary`, `/academics/middle`, `/academics/senior`, `/happenings`, `/achievements`, `/admission`, `/gallery`, `/contact`; footer quick links match; WhatsApp floating button is on every page
- **Pass Condition**: all routes enumerated above return a 200 in React Router (dev tools confirm no `<Route>` fallback); footer contains 4 columns with 10+ quick links, 2 phones, 2 emails, Facebook link
- **Evidence**: router snapshot or per-route screenshot collage + footer screenshot

### AC-3: Homepage section structure matches reference flow
- **Type**: `rule`
- **Given**: running site homepage at 1280px
- **When**: scrolling from top to bottom
- **Then**: all 12 sections listed in FR-3 appear in order with distinct visual breaks, section headings styled consistently (serif heading + underline accent), Explore grid contains 12 tiles, Accolades grid 12 tiles, Happenings teaser at least 2 cards
- **Pass Condition**: DOM snapshot or full-page screenshot contains 12 matching section headings in correct order; grid counts verified via DOM query `document.querySelectorAll('.explore-card').length >= 12`
- **Evidence**: full-page homepage screenshot + DOM counts in dev console

### AC-4: Sanjivani brand integrity — no Gurukul leakage
- **Type**: `rule`
- **Given**: built `dist/` folder
- **When**: a case-insensitive text search across all HTML/JS bundles for strings "gurukul", "ghaziabad", "NH-9", "shauryasoft", and "2130750"
- **Then**: zero occurrences of any reference-school identifier; every occurrence of the school name is "Sanjivani English Medium School" or "Sanjivani", trust name matches, address is Kopargaon, Maharashtra
- **Pass Condition**: `rg -i "gurukul|ghaziabad|shauryasoft|NH-9|2130750" dist/` returns 0 lines
- **Evidence**: ripgrep output showing 0 matches + About/Contact page screenshot with correct data

### AC-5: Content exclusively from typed data modules
- **Type**: `rule`
- **Given**: source tree under `src/`
- **When**: scanning all `.tsx` components for inline school-name strings outside `src/data/`
- **Then**: no JSX text block contains hard-coded school name, address, phone, email, event titles, or achievement items; every such string is imported from a `*.data.ts` file whose root exports have a TypeScript interface
- **Pass Condition**: a regex search for `(Sanjivani|Kopargaon|074229|mysemschool@gmail\.com)` outside `src/data/` returns 0 matches (excluding import statements and bundle files)
- **Evidence**: grep/rg command output + listing of `src/data/*.data.ts` files with their interfaces

### AC-6: Contact page works end-to-end (UI only)
- **Type**: `rule`
- **Given**: `/contact` page open
- **When**: user fills invalid (no email, too short phone) → submits → sees field errors; then fills valid form → submits
- **Then**: invalid submit shows inline error messages per field and does not show toast; valid submit disables button, shows success toast within 500ms, and resets form
- **Pass Condition**: manual test produces toast with "Enquiry submitted — we will contact you within 48 hours" and no network request is made
- **Evidence**: two screenshots — one with validation errors visible, one with success toast; network tab showing no POST

### AC-7: Visual & interaction fidelity
- **Type**: `rubric`
- **Dimension**: how closely the homepage matches the spirit of the reference site (section hierarchy, typographic hierarchy, section breaks, grid density) while expressing Sanjivani's warm editorial aesthetic
- **Scale**: 1-5
- **Anchors**: 1 = bare list of sections, no hierarchy, no visual rhythm; 3 = sections present with generic headings and uneven grids; 5 = crisp section sequence matching reference flow, editorial headings (serif large + subtitle), pixel-uniform card grids, warm ivory palette with charcoal/forest/terracotta accents, navbar transparent→solid+blur on scroll, Hero fades without zoom, WhatsApp float visible
- **Pass Threshold**: >= 4
- **Evidence**: full-page screenshot of homepage + 3 close-ups (navbar mid-scroll, Hero slide mid-fade, Explore grid) + short video/GIF of navbar scroll behavior

### AC-8: Responsive quality
- **Type**: `rubric`
- **Dimension**: visual and interaction quality across 375 / 768 / 1280 / 1920
- **Scale**: 1-5
- **Anchors**: 1 = horizontal scroll or broken grids at 375; 3 = works but small text or misaligned cards at one breakpoint; 5 = no horizontal scroll at any breakpoint, nav hamburger drawer works below 900px, grids collapse gracefully, CTA buttons remain tappable (>= 44px), form readable on 375px
- **Pass Threshold**: >= 4
- **Evidence**: 4 side-by-side screenshots per breakpoint (Home and Contact at minimum) + no horizontal-scroll indicator in Chrome DevTools device toolbar

### AC-9: Code quality & conventions
- **Type**: `rubric`
- **Dimension**: adherence to project conventions (flat components, typed props, typed data arrays, no `any`, reusables extracted, no dead code)
- **Scale**: 1-5
- **Anchors**: 1 = untyped, deeply nested component dirs, copy pasted JSX; 3 = typed props but some `any`, some duplicate JSX not extracted; 5 = all components in `src/components/` (flat), all props typed with `interface`, no `any` in signature positions, `HeroCarousel` / `CardGrid` / `SectionHeading` / `TestimonialCarousel` / `FAQAccordion` extracted and reused, `src/data/school.data.ts`, `events.data.ts`, `team.data.ts`, `achievements.data.ts`, `faqs.data.ts` present with interfaces
- **Pass Threshold**: >= 4
- **Evidence**: `find src/components -type f | head -50` output + `grep -rn "any" src/components src/pages | wc -l` count (must be 0 in prop positions) + `ls src/data/` listing

## Open Questions
- [ ] Which exact education board does Sanjivani English Medium School follow (State Board / CBSE / ICSE)? Affects "Academics" copy and affiliation line.
- [ ] Confirm the two official phone numbers and two email addresses to display (Facebook returned 074229 00900 and mysemschool@gmail.com — should we add an admission-specific phone/email?).
- [ ] Is there a specific location in Kopargaon (address line, landmark, near Godavari ghat etc.) to pin on the Contact page map placeholder?
- [ ] Should the "Sanjivani group of institutions" umbrella be called out on the About page with a trust/history timeline per the user's Sanjivani brand profile (est. 1962)?
