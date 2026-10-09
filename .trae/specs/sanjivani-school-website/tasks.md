# Sanjivani English Medium School - Implementation Plan

## Task 1: Scaffold Vite + React 18 + TS project with stack & conventions
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Initialize Vite project in `a:\Sch_` with `react-ts` template; upgrade to React 18.x latest and React Router 7.
  - Install Tailwind CSS v3 + `@tailwindcss/typography`, `lucide-react`, `framer-motion`.
  - Set folder skeleton: `src/components/` (flat, no subdirs), `src/pages/`, `src/data/`, `src/layouts/`, `src/hooks/`, `src/types/`, `src/assets/`.
  - Configure `tailwind.config.js` with warm editorial palette (ivory `#F8F7F2`, charcoal `#1F2924`, forest `#2F5233`, terracotta `#B6583C`, sage `#7A8B6F`), editorial typography (Playfair Display / Cormorant Garamond serif headings, Inter body), cinematic easing preset `[0.22, 1, 0.36, 1]`.
  - Wire Google Fonts via `index.html` `<link>` preconnect + font-family tokens.
  - Configure `tsconfig.json` strict mode, path aliases if useful; add `@typescript-eslint/eslint-plugin` recommended rules.
  - Add `.nvmrc`, `.prettierrc`, and basic script entrypoints in `package.json` (`dev`, `build`, `preview`, `lint`, `typecheck`).
- **Acceptance Criteria Addressed**: AC-1, NFR-1, NFR-2, NFR-5, NFR-6, NFR-7, AC-9
- **Test Requirements**:
  - `rule` TR-1.1: `npm run build` completes with exit code 0 and no TS/lint errors; stdout contains `✓ built in`. Evidence: terminal capture.
  - `rule` TR-1.2: `npm run dev` serves a placeholder "Sanjivani" page on port 5173 with Playfair heading and ivory background visible, no console errors. Evidence: screenshot of browser + console.
  - `rule` TR-1.3: Project directories listed above exist; `find src/components -type d` returns only `src/components` (flat). Evidence: `dir` command output.
  - `rubric` TR-1.4: Tailwind config completeness; scale 1-5; anchors 1=missing palette/fonts, 3=palette set sans typography preset, 5=all palette tokens, editorial fonts configured, easing exported; threshold >= 4. Evidence: tailwind.config.js listing + browser computed style sample showing Inter body + Playfair heading.

## Task 2: Author typed Sanjivani data modules
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - `src/types/school.ts`: `interface SchoolInfo`, `CoreValue`, `StatsItem`, `AssertionItem`, `PartnerItem`, `WingKey`, `HeroSlide`, `QuickLink`.
  - `src/data/school.data.ts`: canonical school data (name, trust "SANJIVANI EDUCATION, AGRICULTURAL AND RURAL DEVELOPMENT TRUST", est. 1978, Kopargaon Maharashtra address, phone 074229 00900 + admission phone placeholder, email mysemschool@gmail.com + admission email placeholder, Facebook URL, social placeholders for YouTube/Instagram/LinkedIn, 5-7 Hero slides, vision statement, mission statement, 5 core values (Respect, Honesty, Compassion, Fairness, Responsibility adapted to Sanjivani context), 4 golden assertions, "Legacy in Numbers" stats, 12 explore-grid tiles (4 wings + philosophy + team + happenings + achievements + internationalism + sports + NCC/Scouts + alumni), 12+ partner logos, footer quick links for all routes.
  - `src/data/events.data.ts`: 10+ event entries including "# Class X Toppers Felicitation Ceremony 2026" as featured, plus plausible Kopargaon-heritage events (Annual Day, Sports Day, Godavari Eco Drive, Science Exhibition, Ganesha Utsav, Dasara Cultural, Gurupournima, Republic Day, Independence Day, Inter-School Quiz).
  - `src/data/achievements.data.ts`: 12+ accolade entries (academic toppers, district-level sports, cultural, debate, NCC/SCOUTS, science Olympiad) + 4 success-trail alumni spotlights + 3 trusted-voice testimonials (parents/elders).
  - `src/data/team.data.ts`: Principal profile + Vice Principal + 4-5 teachers per wing (Pre-Primary / Primary / Middle / Senior) with roles, subject, quote placeholder, portrait URL (text-to-image service placeholder).
  - `src/data/faqs.data.ts`: 12+ admission FAQs (age eligibility, documents, fee modes, transport, uniform, midday meal, language of instruction, TC process, parent-teacher meetings, scholarship, extracurriculars, campus safety).
  - `src/data/academics.data.ts`: per-wing curriculum & pedagogy blurbs, subject list, facilities snippet, highlights grid.
  - Mark all author-asserted copy (not directly captured from Facebook) with comments `// Content placeholder — to be finalized by school management`.
- **Acceptance Criteria Addressed**: AC-4, AC-5, FR-9, FR-10
- **Test Requirements**:
  - `rule` TR-2.1: TypeScript compiles `src/data/**.ts` with no errors; each data module root export satisfies its interface. Evidence: `npx tsc --noEmit src/data/*.ts` exit 0.
  - `rule` TR-2.2: Case-insensitive scan of `src/data/` and `src/types/` for reference-school strings ("gurukul", "ghaziabad", "shauryasoft", "NH-9", "2130750") returns zero matches; Sanjivani trust name and Kopargaon appear correctly. Evidence: `rg -i "gurukul|ghaziabad|shauryasoft|NH-9|2130750" src/` output = 0 lines.
  - `rule` TR-2.3: Counts minimums reached: Hero slides >= 5, core values >= 5, assertions >= 4, explore tiles >= 12, partners >= 12, events >= 10, accolades >= 12, team entries >= 1+1+4*4=18, FAQs >= 12. Evidence: short script or node REPL count outputs.
  - `rubric` TR-2.4: Data plausibility & trust/brand alignment; scale 1-5; anchors 1=generic copy unrelated to Kopargaon/Sanjivani, 3=generic but non-contradictory, 5=authentically Kopargaon/marathi-agro-heritage voice, 1978 heritage woven in, trust name present everywhere, Class X Toppers event is featured; threshold >= 4. Evidence: excerpts of 3 data files reviewed side by side.

## Task 3: Build shared primitive components & global layout
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2
- **Description**:
  - `Navbar.tsx`: compact height (~30% below vanilla), transparent `opacity-0` at scrollY < 40 → `bg-ivory/85 backdrop-blur-md` + shadow on scroll; logo 25% enlarged inside fixed-height container; desktop mega-menu with 8 groups (About, School, Noteworthy, International, Admission, Co-curricular, Happenings, Contact); mobile hamburger → slide-in drawer.
  - `Footer.tsx`: 4 columns (Brand & Contact / Social / Quick Links / Legal), CBSE affiliation placeholder, WhatsApp float already separate, copyright line, trust attribution.
  - `WhatsAppFloat.tsx`: green fixed button bottom-right (school phone).
  - `StickySideCTA.tsx`: 2 buttons left side vertical ("Campus Tour" → /contact#map, "Apply Now" → /admission).
  - `SectionHeading.tsx`: serif heading + italic accent word + decorative underline. Props: `eyebrow?`, `title`, `accentIndex?`, `subtitle?`, `align`.
  - `CardGrid.tsx`: generic uniform grid with `variant: 'explore' | 'accolade' | 'partner' | 'assertion' | 'team'`. Pixel-identical outer dimensions per variant (no grid misalignment).
  - `HeroCarousel.tsx`: 7 slides max, 4s interval, opacity fades (ease `[0.22,1,0.36,1]`, duration 600ms), dots + prev/next, NO Ken Burns zoom/pan (static). Props: `slides: HeroSlide[]`.
  - `StatsBand.tsx`: 3 tabs, 6 counter numbers with `framer-motion` count-up.
  - `TestimonialCarousel.tsx`: 3 items visible desktop, 1 mobile, smooth drag + autoplay.
  - `FAQAccordion.tsx`: single-expand, plus/minus icon, animated panel height.
  - `Breadcrumb.tsx`: typed `items: BreadcrumbItem[]`, separator `/`, serif last crumb.
  - `Button.tsx`: variants `primary` (forest) / `secondary` (terracotta outline) / `ghost`, sizes `sm | md | lg`, icon slot.
  - `MainLayout.tsx`: composes Navbar + Outlet + Footer + WhatsAppFloat + StickySideCTA, applies page transition (opacity + y 12px, 450ms, cinematic ease).
- **Acceptance Criteria Addressed**: AC-2, NFR-4, NFR-6, NFR-7, NFR-8, AC-7, AC-9
- **Test Requirements**:
  - `rule` TR-3.1: All 14 component files listed above exist under `src/components/` exactly (flat); no subdirectories. Evidence: `dir src/components` listing.
  - `rule` TR-3.2: Navbar scroll behavior — at `window.scrollY === 0`, computed `bg-opacity === 0`; after `window.scrollTo(0, 200)`, backdrop-blur class is present and logo has correct size. Evidence: DevTools computed styles before + after scroll screenshots.
  - `rule` TR-3.3: Hero slideshow advances every 4s +/- 200ms; transition changes only `opacity`, not `transform: scale`. Evidence: performance recording screenshot (timings) + DevTools computed during transition.
  - `rubric` TR-3.4: Component reuse & design-system coherence; scale 1-5; anchors 1=one-off ad-hoc components in each page, 3=some shared but duplicated heading/Card styling, 5=every page uses SectionHeading, CardGrid, Button, HeroCarousel variants; threshold >= 4. Evidence: grep counts of `<SectionHeading>` and `<CardGrid>` across all page files.
  - `rubric` TR-3.5: Responsive behavior of chrome; scale 1-5; anchors 1=navbar breaks or horizontal scroll < 900px, 3=hamburger works but drawer janky, 5=hamburger drawer slide-in smooth below 900px, footer collapses to 1 col on mobile, all CTAs >= 44px; threshold >= 4. Evidence: 375px navbar + footer screenshots.

## Task 4: Homepage — all 12 sections wired
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 3
- **Description**:
  - `src/pages/Home.tsx` composes sections in the required order using shared components and data arrays from Task 2:
    1. HeroCarousel
    2. Welcome block with heritage quote (Pablo Casals-style, replaced with Marathi-educational or rural-Maharashtra quote)
    3. Vision/Mission/Values + Emblem (4 CardGrid assertion-style cards with icons + "Explore" → /about)
    4. Golden Assertions (4 tiles, full-bleed alternating bg)
    5. Dignitaries / Notable Voices (TestimonialCarousel 3-up)
    6. Explore Sanjivani grid (12 CardGrid explore tiles with icons/images linking to routes)
    7. Legacy in Numbers StatsBand (3 tabs, animated counters)
    8. Accolades & Laurels (12 CardGrid accolade tiles)
    9. Parents Say / Trusted Voices (TestimonialCarousel)
    10. What's Next CTA banner (3 Button CTAs: Enquiry, Admissions, Register)
    11. Perfect Partners logo row (CardGrid variant=partner)
    12. Happenings teaser (2 large cards: "Sanjivani in Action" + "Milestones & Moments", "See More" → /happenings)
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-7
- **Test Requirements**:
  - `rule` TR-4.1: Route `/` renders; scrolling top-to-bottom all 12 section headings are present and in order. Evidence: Full-page PNG screenshot + DOM heading order list.
  - `rule` TR-4.2: Explore grid tile count >= 12, Accolades grid >= 12, Partners >= 12. Evidence: `document.querySelectorAll('[data-testid="explore-tile"]').length` console output.
  - `rule` TR-4.3: Every "Explore" and CTA link navigates client-side to a valid route (no hard 404; at worst a valid "Under Construction" page within the SPA). Evidence: clicking each CTA in a manual pass does not produce browser-level 404.
  - `rubric` TR-4.4: Visual hierarchy fidelity; scale 1-5; anchors 1=sections jammed no breathing room, 3=present but bland, 5=strong editorial rhythm alternating bg color, serif headings, ivory + forest + terracotta accents well distributed; threshold >= 4. Evidence: cropped screenshots of sections 1, 3, 7, 12.

## Task 5: About + Principal's Message pages
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 3
- **Description**:
  - `src/pages/About.tsx` (`/about`): trimmed Hero banner, Breadcrumb "Home / About Us", "Who We Are" narrative (est. 1978 Sanjivani English Medium School Kopargaon under Sanjivani Education, Agricultural and Rural Development Trust, Godavari basin influence), Vision/Mission/Core Values expanded blocks, School Emblem narrative + placeholder emblem art, 1962→1978→2026 group heritage timeline if user profile umbrella applies (otherwise 1978→today), Leadership Board (3-4 trustees placeholder cards), "Our Schools" (group campus map snippet placeholder).
  - `src/pages/PrincipalMessage.tsx` (`/principal-message`): Hero banner, Breadcrumb, portrait + long-form message (placeholder), Principal's 10-point credo list, "Meet the Leadership" strip (3 cards: Principal, Vice Principal, Academic Coordinator).
- **Acceptance Criteria Addressed**: AC-2, AC-4
- **Test Requirements**:
  - `rule` TR-5.1: Routes `/about` and `/principal-message` render without errors, breadcrumbs correct, all CTA buttons reach valid routes. Evidence: two screenshots.
  - `rule` TR-5.2: Page content mentions "Sanjivani Education, Agricultural and Rural Development Trust" and "established in 1978" at least once each; zero reference-school strings. Evidence: grep page file strings.
  - `rubric` TR-5.3: Narrative polish; scale 1-5; anchors 1=walls of plain text, 3=paragraphs + some pull-quotes, 5=editorial pull-quotes, alternating text-image blocks (per user profile preference), serif subheadings; threshold >= 4. Evidence: screenshot comparison of About mid-page.

## Task 6: Academics landing + 4 wing pages
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 3
- **Description**:
  - `src/pages/Academics.tsx` (`/academics`): Hero banner, Breadcrumb, 4 wing navigator cards (Pre-Primary, Primary, Middle, Senior), curriculum framework section, teaching approach carousel, facilities highlights, team spotlight teaser per wing, CTA to Apply.
  - `src/pages/academics/WingPage.tsx` (generic with wing key param): one file used for 4 routes via React Router 7 loaders/params (`/academics/pre-primary`, `/academics/primary`, `/academics/middle`, `/academics/senior`); each renders wing-specific Hero, Breadcrumb, Curriculum Highlights (CardGrid), Subject List, Pedagogy blurb, Facilities Gallery strip, Teachers Spotlight (3-5 team.data cards), and "Book a visit" CTA to /contact.
- **Acceptance Criteria Addressed**: AC-2, FR-8
- **Test Requirements**:
  - `rule` TR-6.1: Routes `/academics`, `/academics/pre-primary`, `/academics/primary`, `/academics/middle`, `/academics/senior` all render with correct wing-specific copy; footer links match. Evidence: 5 URL-bar screenshots.
  - `rule` TR-6.2: WingPage is a single generic component parametrized by wing key (no 4 duplicated files). Evidence: single `WingPage.tsx` with router params.
  - `rubric` TR-6.3: Academic differentiation per wing; scale 1-5; anchors 1=all wings identical copy, 3=mostly template with small tweaks, 5=meaningfully different tone/curriculum/facilities (play-based Pre-Primary, foundational Primary, exploratory Middle, board-focused Senior); threshold >= 4. Evidence: side-by-side excerpts of curriculum sections for 4 wings.

## Task 7: Happenings / Events page with filter tabs + featured
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 3
- **Description**:
  - `src/pages/Happenings.tsx` (`/happenings`): Hero banner, Breadcrumb, filter tab bar (All / Academic / Cultural / Sports / Celebration), event grid cards with date badge + thumbnail + category tag + excerpt, modal or sub-route card click → detail view with gallery strip and full write-up. Featured banner "Class X Toppers Felicitation Ceremony 2026" pinned to top regardless of filter.
- **Acceptance Criteria Addressed**: AC-2, FR-7
- **Test Requirements**:
  - `rule` TR-7.1: Route `/happenings` loads; 10+ event cards visible in "All" tab; filter buttons each reduce visible count (not all 10 are one category). Evidence: before/after screenshots of Cultural tab vs All.
  - `rule` TR-7.2: Featured Class X Toppers card is visible and pinned when Sports or any non-Cultural category is active. Evidence: screenshot with Sports tab active showing featured card still on top.
  - `rubric` TR-7.3: Event card design; scale 1-5; anchors 1=plain list with no imagery, 3=basic image+text, 5=uniform aspect-ratio images, date badge, category tag, hover translate subtle, excerpt clamp; threshold >= 4. Evidence: close-up screenshot of 3 cards in a row at 1280px.

## Task 8: Achievements / Glory Galore + Results page
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 3
- **Description**:
  - `src/pages/Achievements.tsx` (`/achievements`): Hero banner, Breadcrumb, segmented (Accolades / Success Trails / Trusted Voices / Results). Accolades: 12+ laurels uniform grid, filter tabs (Academic, Sports, Cultural, Co-curricular). Success Trails: 4 alumni spotlight cards. Trusted Voices: 8 testimonial carousel with full names. Results section: Class X Toppers Felicitation 2026 marquee, placeholder results table for 2025 & 2026 toppers (name, %, stream/grade).
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `rule` TR-8.1: Route `/achievements` renders all 4 segments; tab switching in Accolades works; testimonial carousel autoplays. Evidence: segmented screenshots.
  - `rule` TR-8.2: Class X Toppers Felicitation 2026 is mentioned in the results segment with at least 3 placeholder topper entries. Evidence: screenshot of results section + data entry grep.
  - `rubric` TR-8.3: Credibility of achievements section; scale 1-5; anchors 1=disorganized jumble, 3=present but generic badges, 5=categorized, named accolades, alumni stories with names & batches, testimonials with full names/village/ward attribution; threshold >= 4. Evidence: screenshot of alumni cards + testimonials.

## Task 9: Admission page (process, fee, FAQ, session info, CTA)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 3
- **Description**:
  - `src/pages/Admission.tsx` (`/admission`): Hero banner, Breadcrumb, sticky side subnav (Process, Eligibility, Fee, Handbook, FAQs, Session Info, Register). Process (5-step vertical timeline with icons). Eligibility per wing (age/grade table). Fee Structure: placeholder 3-column table (Academic / Transport / Misc) per wing with disclaimer "Fee structure available on enquiry — contact admissions". Handbook downloadable placeholder PDF button. Session Info: calendar card with academic year dates + holiday list placeholder. FAQs: FAQAccordion fed by faqs.data.ts. Large CTAs at bottom: "Start Enquiry" → /contact, "Register Now" → mailto or /contact.
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `rule` TR-9.1: Route `/admission` renders. Sticky subnav links anchor-jump to correct sections with smooth scroll. Evidence: short GIF or 3 screenshots showing jumps from Process→Fee→FAQs.
  - `rule` TR-9.2: FAQ accordion has >= 12 items; opening one closes previous; FAQ items match `src/data/faqs.data.ts`. Evidence: DOM count + screenshot with FAQ #5 expanded.
  - `rubric` TR-9.3: Admission clarity & call-to-action density; scale 1-5; anchors 1=buried CTAs confusing, 3=adequate, 5=clear steps, eligibility table instantly scannable, sticky nav keeps Register CTA reachable at every scroll; threshold >= 4. Evidence: long scroll screenshot with sticky nav visible mid-page.

## Task 10: Gallery page + Contact page with form & validation
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 3
- **Description**:
  - `src/pages/Gallery.tsx` (`/gallery`): Hero banner, Breadcrumb, category filter (All / Campus / Events / Classroom / Sports / Cultural), masonry or uniform grid lightbox gallery, 30+ placeholder image URLs (text-to-image service with Sanjivani prompts), click → modal lightbox with caption + prev/next.
  - `src/pages/Contact.tsx` (`/contact`): Hero banner, Breadcrumb, split 2-column layout: left = info cards (address, phones, emails, hours, map iframe placeholder with Kopargaon), right = Enquiry Form with fields: Name, Email, Phone, Applying For (select: Pre-Primary / Primary / Middle / Senior), Message. Validation (controlled react-hook-form-like manual): required checks on all, email regex, phone min 10 digits, message min 20 chars, applyingFor non-empty. Submit: disabled during simulated "sending", success toast "Enquiry submitted — we will contact you within 48 hours", no network call, form reset. Anchored `#map` section for StickySideCTA's "Campus Tour" to jump to.
- **Acceptance Criteria Addressed**: AC-2, AC-6
- **Test Requirements**:
  - `rule` TR-10.1: Route `/gallery` renders, >= 30 tiles, category Campus filters subset, clicking first tile opens modal lightbox with close button. Evidence: screenshot of modal open.
  - `rule` TR-10.2: Contact form validation — submit empty -> inline errors on all 5 fields with labels; fix only some -> only remaining invalid fields show errors; fully valid -> success toast appears within 500ms, form fields cleared, button re-enabled. Evidence: 3 screenshots (empty errors, partial errors, success toast).
  - `rule` TR-10.3: `tel:+917422900900` and `mailto:mysemschool@gmail.com` links present at least twice each on `/contact` (info card + footer). Evidence: DOM `a[href^="tel:"]` + `a[href^="mailto:"]` count >= 2.
  - `rubric` TR-10.4: Contact page scannability; scale 1-5; anchors 1=messy layout hard to find phone, 3=OK, 5=phone + email + address prominent above the fold, map placeholder visible without scroll at 1280px, form labels Inter small, errors red terracotta; threshold >= 4. Evidence: above-the-fold screenshot at 1280px.

## Task 11: Router wiring, 404, scroll restoration, polish
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Tasks 4, 5, 6, 7, 8, 9, 10
- **Description**:
  - `src/router.tsx` or main.tsx with `createBrowserRouter` + `RouterProvider`: register all routes with loader params for wing pages, wrap with MainLayout; `/` → Home, `/about`, `/principal-message`, `/academics`, `/academics/:wing`, `/happenings`, `/achievements`, `/admission`, `/gallery`, `/contact`, wildcard `*` → NotFound page.
  - Scroll to top on navigation (React Router ScrollRestoration or custom).
  - Navbar active-route highlighting (mega-menu current group + crumb).
  - 404 `NotFound.tsx` page: serif big "404" heading, blurb, "Return Home" button.
  - Responsive pass: revisit every page at 375 / 768 / 1280 / 1920; fix horizontal scroll, misaligned grids, small text; ensure HeroCarousel images use object-cover correctly; ensure CardGrid explore variant has identical outer dimensions.
  - Final brand-leakage review pass: remove any remaining "Gurukul" / Ghaziabad strings in copy, comments, or meta tags.
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-4, AC-8
- **Test Requirements**:
  - `rule` TR-11.1: Visiting any unknown route (e.g. `/nope-nope-xyz`) renders NotFound page without console error. Evidence: screenshot of URL bar `/nope-nope-xyz` + NotFound heading.
  - `rule` TR-11.2: Navigation from Home → About → Admission → Home results in scroll returning to top each time; no "stuck at y=1200" bug. Evidence: short screencast or 3 consecutive scrollY console reads (each close to 0 after navigation).
  - `rule` TR-11.3: `rg -i "gurukul|ghaziabad|shauryasoft|NH-9|2130750" src/` returns exactly 0 lines. Evidence: terminal output.
  - `rubric` TR-11.4: Overall responsive robustness; scale 1-5; anchors 1=horizontal scroll on at least one breakpoint, 3=mostly OK, 5=no horizontal scroll indicator at any breakpoint, nav drawer, grids, forms all well-behaved; threshold >= 4. Evidence: Chrome DevTools device-mode screenshots at 4 widths, no horizontal scrollbar visible.

## Task 12: Final verification — build, route smoke, brand, diagnostics
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 11
- **Description**:
  - Clean build: `npm run typecheck`, `npm run lint`, `npm run build`, capture outputs.
  - Smoke-test every route with a cold `npm run preview` server.
  - Record brand-leakage ripgrep on `dist/` bundle.
  - Capture responsive screenshots on Home and Contact.
  - Populate per-task completion evidence notes for AC coverage.
- **Acceptance Criteria Addressed**: AC-1, AC-4, AC-8, AC-9
- **Test Requirements**:
  - `rule` TR-12.1: `npm run typecheck && npm run lint && npm run build` exits 0 end-to-end. Evidence: combined terminal log with all three exit codes 0.
  - `rule` TR-12.2: On `dist/` build, ripgrep for reference strings returns 0 lines. Evidence: `rg -i "gurukul|ghaziabad|shauryasoft|NH-9|2130750" dist/` output (0 lines).
  - `rule` TR-12.3: Route smoke script or manual check confirms all 10+ routes render on `preview` server. Evidence: checklist screenshot or log.
  - `rubric` TR-12.4: Overall polish & production readiness; scale 1-5; anchors 1=missing pieces, 3=ship-able with minor rough edges, 5=consistent design system across 10+ pages, no dead code, console clean at every page, animations buttery; threshold >= 4. Evidence: final homepage hero + footer + one inner page triptych screenshot.
