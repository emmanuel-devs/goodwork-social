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
- [ ] Assess Lenis against native scrolling and test whether it adds enough value to justify another dependency
- [ ] Add subtle magnetic button feedback on fine-pointer desktop devices only (separate follow-up; current pass adds tactile press and focus states)
- [x] Confirm existing reduced-motion guard and CSS override are present; verify behaviour in release QA

### 2. Work page interaction
- [x] Add a cursor-following project image preview for desktop pointer devices
- [x] Keep project links accessible by keyboard and preserve visible focus
- [x] Keep existing full-card project links and inline images as the touch-friendly mobile experience; hide cursor preview on touch/small screens
- [ ] Do not add interactive metric filters unless there is real, clearly sourced data worth filtering

### 3. Navigation overlay
- [ ] Replace or enhance the current mobile dropdown with a considered full-screen editorial menu, if it improves the existing design
- [ ] Include close behaviour, Escape-key support, focus management, and appropriate ARIA state
- [ ] Keep navigation usable on small screens and at zoomed text sizes
- [ ] Add a live local time only if it supports the experience rather than distracting from navigation

### 4. Conversion support
- [ ] Add a floating “Ready to talk?” CTA after the hero on long pages
- [ ] Connect it to the existing Contact page / enquiry section
- [ ] Ensure it does not cover content, keyboard focus, or mobile controls
- [ ] Check it does not compete with existing booking and contact CTAs

### 5. Optional sound
- [ ] Defer sound design until the core experience is complete
- [ ] If implemented, sound must be opt-in, muted by default, and easy to disable

## Quality assurance and release

- [ ] Verify build succeeds
- [ ] Test home, services, work, about, and contact pages
- [ ] Test desktop pointer interactions and mobile touch interactions (implementation added; manual device QA still required)
- [ ] Test keyboard-only navigation and visible focus (focus styling added; manual QA still required)
- [ ] Test reduced-motion preferences
- [ ] Test anchor navigation and scroll behaviour
- [ ] Re-run Lighthouse / performance checks and compare with baseline
- [ ] Verify contact and booking journeys
- [ ] Confirm Vercel deployment succeeds before marking changes live

## Working rules

- Implement one coherent phase at a time and update this checklist after each phase.
- Preserve the existing site and its routes; avoid unnecessary rewrites.
- Never describe concept metrics as achieved results. Label targets and illustrative examples clearly.
- A task is complete only after the implementation is inspected and the relevant checks pass. A GitHub commit alone does not mean the deployed site has been verified.
