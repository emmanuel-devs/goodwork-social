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

    const heroSelectors = [
      ".hero-topline",
      ".hero-copy > .eyebrow",
      ".hero-copy > h1",
      ".hero-copy > .hero-intro",
      ".hero-copy > .hero-actions",
      ".hero-copy > .hero-proof",
      ".hero-art",
      ".hero-ribbon",
      ".services-hero-kicker",
      ".services-hero-copy > .eyebrow",
      ".services-hero-copy > h1",
      ".services-hero-intro",
      ".services-hero-copy > .hero-actions",
      ".services-hero-visual",
      ".about-hero-topline",
      ".about-hero-copy > .eyebrow",
      ".about-hero-copy > h1",
      ".about-hero-intro",
      ".about-hero-copy > .hero-actions",
      ".about-hero-note",
      ".work-hero-topline",
      ".work-hero-copy > .eyebrow",
      ".work-hero-copy > h1",
      ".work-hero-intro",
      ".work-hero-copy > .button-primary",
      ".work-hero-note",
      ".contact-hero-meta",
      ".contact-hero-copy > .eyebrow",
      ".contact-hero-copy > h1",
      ".contact-hero-intro",
      ".contact-hero-copy > .button-primary",
      ".contact-text-link",
      ".contact-side-note"
    ];
    const heroTargets = Array.from(document.querySelectorAll<HTMLElement>(heroSelectors.join(",")));
    const heroTargetSet = new Set(heroTargets);
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));
    if (!targets.length) return;

    heroTargets.forEach((element, index) => {
      element.classList.add("hero-entrance");
      element.style.setProperty("--hero-delay", `${Math.min(index, 6) * 105}ms`);
    });
    document.documentElement.classList.add("hero-entrance-pending");

    targets.forEach((element, index) => {
      if (heroTargetSet.has(element)) return;
      element.classList.add("motion-reveal");
      const siblings = element.parentElement
        ? Array.from(element.parentElement.children).filter((child) => child.classList.contains("motion-reveal"))
        : [];
      const stagger = Math.min(siblings.indexOf(element), 5);
      element.setAttribute("data-motion-index", String(index));
      element.style.setProperty("--motion-delay", `${Math.max(0, stagger) * 55}ms`);
    });

    document.documentElement.classList.add("motion-ready");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("hero-entrance-pending");
        document.documentElement.classList.add("hero-entrance-ready");
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    // A second, lightweight observer coordinates image depth with the section entering view.
    // It does not control scrolling or keep work running while a section is off-screen.
    const storySections = Array.from(document.querySelectorAll<HTMLElement>(".story-section"));
    const storyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-story-visible");
          storyObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -5% 0px" });
    storySections.forEach((section) => storyObserver.observe(section));

    targets.forEach((target) => { if (!heroTargetSet.has(target)) observer.observe(target); });

    // Scroll-linked zoom for portfolio card images. Only visible images are measured,
    // and updates are batched to one animation frame for smooth, low-overhead motion.
    const cardImages = Array.from(document.querySelectorAll<HTMLImageElement>(
      ".project-image img, .work-project-image img"
    ));
    const visibleCardImages = new Set<HTMLImageElement>();
    let imageFrame = 0;
    const updateCardImageZoom = () => {
      imageFrame = 0;
      const viewportHeight = window.innerHeight || 1;
      visibleCardImages.forEach((image) => {
        const rect = image.getBoundingClientRect();
        // The image starts noticeably enlarged as it enters from below, then
        // pulls back to its natural size as it travels through and exits the viewport.
        const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
        const scale = 1.18 - progress * 0.18;
        image.style.setProperty("--scroll-image-scale", scale.toFixed(4));
      });
    };
    const queueCardImageZoom = () => {
      if (!imageFrame) imageFrame = requestAnimationFrame(updateCardImageZoom);
    };
    const cardImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const image = entry.target as HTMLImageElement;
        if (entry.isIntersecting) {
          visibleCardImages.add(image);
        } else {
          visibleCardImages.delete(image);
        }
      });
      queueCardImageZoom();
    }, { rootMargin: "12% 0px 12% 0px" });
    cardImages.forEach((image) => cardImageObserver.observe(image));
    window.addEventListener("scroll", queueCardImageZoom, { passive: true });
    window.addEventListener("resize", queueCardImageZoom, { passive: true });
    queueCardImageZoom();

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
        storyObserver.disconnect();
        cardImageObserver.disconnect();
        window.removeEventListener("scroll", queueCardImageZoom);
        window.removeEventListener("resize", queueCardImageZoom);
        if (imageFrame) cancelAnimationFrame(imageFrame);
        visibleCardImages.clear();
        heroArt.removeEventListener("mousemove", onMove as EventListener);
        heroArt.removeEventListener("mouseleave", onLeave);
        if (frame) cancelAnimationFrame(frame);
        document.documentElement.classList.remove("motion-ready", "hero-entrance-pending", "hero-entrance-ready");
      };
    }

    return () => {
      observer.disconnect();
      storyObserver.disconnect();
      cardImageObserver.disconnect();
      window.removeEventListener("scroll", queueCardImageZoom);
      window.removeEventListener("resize", queueCardImageZoom);
      if (imageFrame) cancelAnimationFrame(imageFrame);
      visibleCardImages.clear();
      document.documentElement.classList.remove("motion-ready", "hero-entrance-pending", "hero-entrance-ready");
    };
  }, []);

  return null;
}
