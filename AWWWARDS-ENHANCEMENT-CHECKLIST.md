# Goodwork Social: Awwwards-Style Enhancement Checklist

Purpose: elevate the existing site with a distinctive interactive experience while protecting accessibility, performance, mobile usability, and enquiry conversion. This is an implementation tracker, not a claim of an Awwwards nomination or award.

## Baseline audit

- [x] Confirmed repository: `emmanuel-devs/goodwork-social`
- [x] Confirmed stack: Next.js 14.2.15, React 18, TypeScript, Tailwind CSS 3.4
- [x] Inspected existing motion system: `app/MotionEnhancer.tsx` already uses IntersectionObserver reveals and checks `prefers-reduced-motion`
- [x] Confirmed responsive navigation exists on the pages inspected
- [x] Confirmed Work page labels the three portfolio examples as concept projects
- [ ] Verify current Vercel deployment status and capture a baseline Lighthouse report
- [ ] Review homepage sample metrics and testimonial-style quotes to ensure illustrative content cannot be mistaken for verified client results

## Implementation checklist

### 1. Motion foundation
- [x] Inspect current CSS reveal and transition rules before changing them
- [x] Refine existing reveal timing and stagger; avoid duplicating the current animation system (18px reveal, 650ms transition, 55ms stagger)
- [x] Add a dedicated staggered page-load entrance sequence to the hero sections across Home, Services, Work, About, and Contact; keep scroll reveals separate
- [x] User confirmed the hero entrance animation works
- [ ] Verify hero entrance timing and visual quality on all five routes and iPhone, including reduced-motion behaviour
- [ ] Assess Lenis against native scrolling and test whether it adds enough value to justify another dependency
- [x] Add restrained magnetic movement to primary, light and header CTAs on fine-pointer desktop devices; disable it for reduced-motion preferences
- [x] Confirm existing reduced-motion guard and CSS override are present; verify behaviour in release QA

### 2. Work page interaction
- [x] Add a cursor-following project image preview for desktop pointer devices
- [x] Keep project links accessible by keyboard and preserve visible focus
- [x] Keep existing full-card project links and inline images as the touch-friendly mobile experience; hide cursor preview on touch/small screens
- [ ] Do not add interactive metric filters unless there is real, clearly sourced data worth filtering

### 3. Navigation overlay
- [x] Keep conventional text navigation links visible on desktop, with a compact full-screen menu trigger only at tablet/mobile widths
- [x] Use a stylised three-line hamburger icon without a text label; align it to the right immediately before the booking CTA on smaller screens
- [x] Retain the full-screen editorial navigation overlay across all five routes
- [x] Correct nested-route imports to reference the shared component at `app/SiteMenu.tsx` (`../SiteMenu`); the home route correctly uses `./SiteMenu`
- [x] Add close button, Escape-key support, focus trapping, focus restoration, and expanded/hidden ARIA state
- [x] Add responsive menu layout and keyboard focus styles; verify small-screen and zoom behaviour in manual QA
- [x] Add a live local-time display in the overlay using the visitor’s browser time zone
- [x] Keep the mobile hamburger icon-only, with the booking CTA immediately before it and the hamburger at the far right

### 4. Conversion support
- [x] Add a contextual floating “Ready to talk?” CTA after the hero on long pages
- [x] Connect it to the existing Contact page enquiry section
- [x] Hide it when closing contact sections or the footer enter view; provide mobile spacing and visible keyboard focus
- [x] Hide the floating CTA around each page's closing contact section to avoid competing with existing CTAs

### 5. Optional sound
- [ ] Defer sound design until the core experience is complete
- [ ] If implemented, sound must be opt-in, muted by default, and easy to disable

## Quality assurance and release

- [x] Implement responsive full-screen navigation and visitor-local time display in code
- [x] Fix the confirmed build blocker: nested routes were importing `./SiteMenu`, which pointed to nonexistent `app/<route>/SiteMenu`; those routes now import `../SiteMenu`
- [ ] Confirm a fresh Vercel deployment succeeds after restoring desktop navigation links and refining the mobile hamburger; do not treat code commits as proof of a healthy deployment
- [ ] Verify build succeeds
- [ ] Test home, services, work, about, and contact pages, including the new full-screen navigation
- [ ] Verify page-load hero entrances on all five routes and reduced-motion behaviour (manual QA still required)
- [ ] Test desktop pointer interactions and mobile touch interactions (implementation added; manual device QA still required)
- [ ] Test keyboard-only navigation, Escape, focus trapping/restoration, and visible focus (code added; manual QA still required)
- [ ] Test reduced-motion preferences
- [ ] Test anchor navigation and scroll behaviour
- [ ] Re-run Lighthouse / performance checks and compare with baseline
- [ ] Verify contact and booking journeys, including the menu CTA
- [ ] Confirm Vercel deployment succeeds before marking changes live

## Working rules

- Implement one coherent phase at a time and update this checklist after each phase.
- Preserve the existing site and its routes; avoid unnecessary rewrites.
- Never describe concept metrics as achieved results. Label targets and illustrative examples clearly.
- A task is complete only after the implementation is inspected and the relevant checks pass. A GitHub commit alone does not mean the deployed site has been verified.


## Responsive navigation correction (2026-10-21)
- [x] Restore desktop navigation links on wide screens
- [x] Hide desktop navigation links on compact/mobile screens
- [x] Show a stylized three-line hamburger only on compact/mobile screens, with no “Menu” text
- [x] Put “Book a Conversation” before the icon-only hamburger, with the hamburger at the far right on mobile
- [ ] Verify latest Vercel deployment is Ready
- [ ] Manually verify desktop and mobile header layouts on the live site


## Magnetic CTA interaction (2026-10-21)
- [x] Add a small pointer-responsive magnetic offset to primary, light and header CTA buttons
- [x] Restrict interaction to desktop devices with a fine pointer
- [x] Disable the effect when reduced motion is requested
- [x] Preserve hover lift and existing click, focus and touch behavior in the implementation
- [ ] Verify latest Vercel deployment is Ready
- [ ] Manually test desktop pointer response and confirm mobile behavior remains unchanged


## Floating contact CTA (2026-10-21)
- [x] Show a compact “Ready to talk?” CTA after the visitor scrolls beyond the opening section
- [x] Link it to the existing /contact#enquiry journey
- [x] Hide it around the contact form, closing contact sections and footer
- [x] Add responsive placement, safe-area spacing, and keyboard focus styling
- [x] Respect reduced-motion preferences
- [ ] Verify latest Vercel deployment is Ready
- [ ] Manually test scroll threshold, closing-section handoff, keyboard access, and mobile layout

## Magnetic CTA refinement (2026-10-21)
- [x] Increase pointer-responsive travel from a subtle 2.5px maximum to a clearer 6px maximum per axis
- [x] Include light buttons and the services-page light CTA in the magnetic transform styling
- [x] Keep the interaction desktop fine-pointer only and preserve reduced-motion handling
- [ ] Verify the updated Vercel deployment is Ready
- [ ] Manually confirm the effect with a mouse on the live desktop site

## Portfolio trust and concept disclosures (2026-10-21)
- [x] Label the logo wall as illustrative brand concepts
- [x] Label campaign figures as sample figures and disclose that they are not verified client results
- [x] Label testimonial-style quotes as illustrative concepts, not real client testimonials
- [x] Add restrained disclosure styling that fits the existing visual system
- [x] User confirmed the Vercel deployment succeeded
- [ ] Review the live homepage on mobile for disclosure placement and readability


## Cinematic scroll storytelling (2026-10-21)
- [x] Add section-aware image reveals to the homepage using the existing motion foundation
- [x] Coordinate visual image depth with each section entering the viewport
- [x] Use one-shot IntersectionObserver triggers instead of scroll hijacking or continuous scroll listeners
- [x] Keep the image treatment subtle and staggered, rather than animating every element
- [x] Disable image motion on small screens and for reduced-motion preferences
- [ ] Verify the latest Vercel deployment is Ready
- [ ] Review the homepage on iPhone for smooth scrolling, image crops, and section transitions
- [ ] Test desktop scroll and image timing alongside the magnetic CTA mouse test


## Accessibility and performance quality pass (2026-10-21)
- [x] Add a keyboard skip link to reduce repetitive tabbing through site navigation
- [x] Make the skip link target focusable across the homepage, inner pages, and not-found page
- [x] Add a consistent visible keyboard-focus fallback for links, buttons, summaries, and form controls while preserving more specific menu focus styles
- [x] Add a preconnect hint for the external Unsplash image origin used by portfolio imagery
- [ ] Verify skip link and keyboard focus on desktop and mobile browsers
- [ ] Confirm the preconnect hint and image loading do not regress performance; run Lighthouse after deployment
- [ ] Manually review layout at narrow widths and enlarged text on all five main routes
- [ ] Recheck reduced-motion behaviour and page transitions on all routes


## Contact journey trust fix (2026-10-21)
- [x] Remove the fallback placeholder recipient `test@example.com` from the contact form
- [x] Make the unavailable state explicit when `NEXT_PUBLIC_CONTACT_EMAIL` is not configured
- [x] Keep the submit action disabled until a real contact email is configured
- [ ] Confirm the correct production contact email is set in Vercel environment variables
- [ ] Test the enquiry flow end-to-end using the configured inbox


## Interactive social proof experience
- [x] Replace invented campaign metrics with an honest interactive demo until verified results are available
- [ ] Add count-up animation with reduced-motion support
- [x] Add interactive metric chart with selectable reporting window
- [ ] Add clearly identified conversation preview, not fabricated client evidence
- [x] Remove fictional testimonials and invented performance claims from homepage
- [x] Replace testimonial cards with clear process principles instead of fabricated endorsements
- [ ] Verify Vercel build and review mobile/desktop layouts


## Scroll-triggered count-up metrics
- [x] Animate Reach, Saves and Profile Visits from zero when the dashboard enters view
- [x] Stagger each counter slightly for a considered rhythm
- [x] Respect prefers-reduced-motion by showing final values immediately
- [x] Use tabular numerals and responsive sizing for stable, legible counts
- [ ] Confirm Vercel build succeeds
- [ ] Test trigger, final values and mobile layout on live deployment


## Editorial portfolio case studies (2026-10-21)
- [x] Create dedicated routes for Morrow House, Forma Wellbeing and Sunday Objects
- [x] Give each concept a distinct art direction, palette and editorial layout
- [x] Explain the business challenge, creative idea and visual language for each project
- [x] Add tailored content pillars, sample formats and a campaign concept moment
- [x] Add responsive layouts for mobile, tablet and desktop
- [x] Respect reduced-motion preferences on the case-study pages
- [x] Link the Selected Work cards to their dedicated case-study pages
- [ ] Verify Vercel build and deployment status
- [ ] Review all three live case-study pages on mobile for image crops, spacing and legibility
- [ ] Review all three pages on desktop and confirm the distinct art direction reads clearly
- [ ] Test project navigation, booking links and keyboard focus
- [ ] Check external image loading and performance on the live deployment


## Shared case-study data and deployment repair (2026-10-21)
- [x] Move project content into one shared source at `app/work/projects.ts`
- [x] Use the shared project records on the homepage, Selected Work page and detail pages
- [x] Make homepage project cards open their matching detail page
- [x] Keep each "Build a story like this" CTA linked to the conversation flow
- [x] Remove the conflicting client directive from the dynamic case-study page so `generateStaticParams` can run on the server
- [x] Revise case-study copy to use direct, natural phrasing and remove long dashes from the touched project files
- [x] Standardize the case-study hero and gallery image ratios
- [x] Keep the portfolio card image ratios consistent across concepts
- [ ] Confirm the next Vercel production build succeeds
- [ ] Review mobile and desktop card click targets and booking CTAs
- [ ] Replace temporary stock imagery with custom, art-directed project assets
- [ ] Check final image crops, load speed and alt text once custom assets are in the repository


## Scroll-linked portfolio image zoom (2026-10-21)
- [x] Add a scroll-progress zoom to homepage project-card images and Selected Work images
- [x] Use IntersectionObserver to track only images near the viewport and requestAnimationFrame to batch scroll updates
- [x] Keep the zoom subtle, capped at 7.5%, and preserve existing hover effects
- [x] Respect prefers-reduced-motion by disabling the zoom
- [x] Keep card links, titles, metrics and enquiry CTAs unchanged
- [ ] Confirm Vercel production build succeeds
- [ ] Review scroll timing and crop behaviour on iPhone
- [ ] Test desktop scroll-linked zoom alongside magnetic CTA interactions
- [ ] Recheck reduced-motion and performance in browser QA


## Scroll zoom correction: viewport-driven image pullback (2026-10-21)
- [x] Replace the barely visible 7.5% scale change with a clearer 18% to 0% pullback as images move through the viewport
- [x] Make the image scale explicitly track the image's current viewport position during scrolling
- [x] Preserve desktop hover zoom by composing it with the scroll-linked scale
- [x] Keep reduced-motion users on a static image
- [ ] Confirm Vercel production build succeeds
- [ ] Verify the movement is visible on iPhone while scrolling slowly through the project cards
- [ ] Test desktop scroll direction, hover and reduced-motion behaviour


## Mobile scroll zoom reliability fix (2026-10-21)
- [x] Remove IntersectionObserver gating from scroll updates to avoid missed image tracking on mobile browsers
- [x] Recalculate all six-or-fewer portfolio card images once per animation frame while scrolling
- [x] Use CSS transform: scale() instead of the individual scale property for broad browser reliability
- [x] Limit hover-only zoom to devices that support true hover, so tapping on iPhone does not masquerade as the scroll effect
- [x] Recalculate on orientation changes and clean up all event listeners
- [ ] Confirm Vercel production build succeeds
- [ ] Verify the image visibly pulls back while scrolling without tapping
- [ ] Test desktop hover, reduced motion and performance


## Scroll zoom cascade fix and full-width header (2026-10-21)
- [x] Fix the CSS cascade: older card hover rules were overriding the scroll-driven transform, so the zoom variable was not visibly applied
- [x] Ensure hover zoom composes with the live scroll scale instead of replacing it
- [x] Make the sticky header background and bottom border span the viewport edges, while keeping its contents aligned to the page grid
- [x] Keep responsive header gutters for tablet and mobile
- [ ] Confirm Vercel production build succeeds
- [ ] Verify images zoom continuously during scroll without tapping
- [ ] Check header background edge-to-edge on homepage and Selected Work page
- [ ] Test desktop hover and reduced-motion behaviour
