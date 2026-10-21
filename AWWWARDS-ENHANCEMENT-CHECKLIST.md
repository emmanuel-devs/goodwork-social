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
- [ ] Add subtle magnetic button feedback on fine-pointer desktop devices only (separate follow-up; current pass adds tactile press and focus states)
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
- [x] Restore the header menu trigger to the right side, immediately before the booking CTA; retain the compact “Menu” label as a deliberate usability cue

### 4. Conversion support
- [ ] Add a floating “Ready to talk?” CTA after the hero on long pages
- [ ] Connect it to the existing Contact page / enquiry section
- [ ] Ensure it does not cover content, keyboard focus, or mobile controls
- [ ] Check it does not compete with existing booking and contact CTAs

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
