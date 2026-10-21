"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const END_SECTIONS = ".contact-section, .services-cta, .work-end, .about-cta, .contact-booking, .site-footer";

export default function FloatingContactCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const endSections = Array.from(document.querySelectorAll<HTMLElement>(END_SECTIONS));
    let nearEnd = false;

    const updateVisibility = () => {
      const pastIntro = window.scrollY > 620;
      setVisible(pastIntro && !nearEnd);
    };

    const observer = new IntersectionObserver((entries) => {
      nearEnd = entries.some((entry) => entry.isIntersecting);
      updateVisibility();
    }, { rootMargin: "-12% 0px -12% 0px", threshold: 0 });

    endSections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <a
      className={`floating-contact-cta${visible ? " is-visible" : ""}`}
      href="/contact#enquiry"
      aria-label="Ready to talk? Start an enquiry"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <span>Ready to talk?</span>
      <span className="floating-contact-arrow" aria-hidden="true"><ArrowUpRight size={16} strokeWidth={1.8} /></span>
    </a>
  );
}
