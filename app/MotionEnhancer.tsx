"use client";

import { useEffect } from "react";

export default function MotionEnhancer() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const selectors = [
      ".hero-copy > .eyebrow",
      ".hero-copy > h1",
      ".hero-copy > .hero-intro",
      ".hero-copy > .hero-actions",
      ".hero-copy > .hero-proof",
      ".services-hero-copy > .eyebrow",
      ".services-hero-copy > h1",
      ".services-hero-intro",
      ".services-hero-copy > .hero-actions",
      ".services-visual-image",
      ".services-manifesto",
      ".services-section-heading > *",
      ".service-detail",
      ".services-approach-heading",
      ".services-principles article",
      ".services-fit-label",
      ".services-fit-grid > *",
      ".services-cta-card",
      ".contact-hero-copy > .eyebrow",
      ".contact-hero-copy > h1",
      ".contact-hero-intro",
      ".contact-side-note",
      ".contact-enquiry-intro",
      ".contact-form-panel",
      ".contact-booking-card",
      ".about-hero-copy > .eyebrow",
      ".about-hero-copy > h1",
      ".about-hero-intro",
      ".about-hero-note",
      ".about-manifesto-copy",
      ".about-manifesto-visual",
      ".about-principle-card",
      ".about-partnership-heading",
      ".about-partnership-step",
      ".about-fit-card",
      ".about-cta-card",
      ".work-hero-copy > .eyebrow",
      ".work-hero-copy > h1",
      ".work-hero-intro",
      ".work-hero-note",
      ".work-index-heading > *",
      ".work-project-card",
      ".work-case-copy",
      ".work-case-visual",
      ".work-case-bottom",
      ".work-end-card",
      ".hero-art",
      ".hero-ribbon",
      ".trust-inner",
      ".results-intro",
      ".results-board",
      ".section-heading > *",
      ".service-card",
      ".work-heading > *",
      ".project-card",
      ".approach-heading",
      ".approach-steps article",
      ".voices-heading",
      ".testimonial-card",
      ".packages-heading > *",
      ".package-card",
      ".faq-heading",
      ".faq-list details",
      ".contact-card",
      ".footer-main > *",
      ".footer-bottom > *"
    ];

    const targets = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));
    if (!targets.length) return;

    targets.forEach((element, index) => {
      element.classList.add("motion-reveal");
      const siblings = element.parentElement
        ? Array.from(element.parentElement.children).filter((child) => child.classList.contains("motion-reveal"))
        : [];
      const stagger = Math.min(siblings.indexOf(element), 5);
      element.setAttribute("data-motion-index", String(index));
      element.style.setProperty("--motion-delay", `${Math.max(0, stagger) * 55}ms`);
    });

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    targets.forEach((target) => observer.observe(target));

    const heroArt = document.querySelector(".hero-art");
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (heroArt && canHover) {
      let frame = 0;
      const onMove = (event: MouseEvent) => {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = heroArt.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          (heroArt as HTMLElement).style.setProperty("--tilt-x", `${(-y * 1.6).toFixed(2)}deg`);
          (heroArt as HTMLElement).style.setProperty("--tilt-y", `${(x * 1.8).toFixed(2)}deg`);
        });
      };
      const onLeave = () => {
        if (frame) cancelAnimationFrame(frame);
        (heroArt as HTMLElement).style.setProperty("--tilt-x", "0deg");
        (heroArt as HTMLElement).style.setProperty("--tilt-y", "0deg");
      };
      heroArt.addEventListener("mousemove", onMove as EventListener, { passive: true });
      heroArt.addEventListener("mouseleave", onLeave, { passive: true });
      return () => {
        observer.disconnect();
        heroArt.removeEventListener("mousemove", onMove as EventListener);
        heroArt.removeEventListener("mouseleave", onLeave);
        if (frame) cancelAnimationFrame(frame);
        document.documentElement.classList.remove("motion-ready");
      };
    }

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
