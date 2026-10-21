"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, X } from "lucide-react";

const menuItems = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "Services", href: "/services" },
  { number: "03", label: "Selected work", href: "/work" },
  { number: "04", label: "Our approach", href: "/about" },
  { number: "05", label: "Contact", href: "/contact" },
];

export default function SiteMenu() {
  const [open, setOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateTime = () => setLocalTime(new Intl.DateTimeFormat(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date()));
    updateTime();
    const interval = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !overlayRef.current) return;
      const focusable = Array.from(overlayRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter((element) => element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      if (triggerRef.current) triggerRef.current.focus();
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        ref={triggerRef}
        className={`menu-trigger${open ? " is-open" : ""}`}
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="goodwork-fullscreen-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-trigger-label">{open ? "Close" : "Menu"}</span>
        <span className="menu-trigger-icon" aria-hidden="true">
          {open ? <X size={19} strokeWidth={1.6} /> : <><i /><i /></>}
        </span>
      </button>

      <section
        id="goodwork-fullscreen-menu"
        ref={overlayRef}
        className={`site-menu-overlay${open ? " is-open" : ""}`}
        aria-label="Site navigation"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="site-menu-top">
          <a href="/" className="site-menu-brand" onClick={closeMenu} tabIndex={open ? 0 : -1}>
            <span className="brand-mark">gw<span>•</span></span>
            <span className="brand-name">goodwork<span>social studio</span></span>
          </a>
          <div className="site-menu-time"><span className="site-menu-live-dot" /> LOCAL TIME <strong>{localTime || "--:--"}</strong></div>
          <button ref={closeButtonRef} className="site-menu-close" type="button" onClick={closeMenu} aria-label="Close navigation menu" tabIndex={open ? 0 : -1}>
            <X size={21} strokeWidth={1.5} /><span>Close</span>
          </button>
        </div>

        <div className="site-menu-main">
          <div className="site-menu-kicker"><span>GOODWORK SOCIAL STUDIO</span><span>STRATEGY · CONTENT · COMMUNITY</span></div>
          <nav className="site-menu-links" aria-label="Full-screen navigation">
            {menuItems.map((item) => (
              <a key={item.number} href={item.href} onClick={closeMenu} tabIndex={open ? 0 : -1}>
                <span className="site-menu-number">{item.number}</span>
                <span className="site-menu-link-label">{item.label}</span>
                <ArrowDownRight className="site-menu-link-arrow" size={25} strokeWidth={1.25} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="site-menu-bottom">
            <p>Good work deserves to be seen.</p>
            <a className="site-menu-contact" href="/contact" onClick={closeMenu} tabIndex={open ? 0 : -1}>Start a conversation <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
      {open && <button className="site-menu-scrim" type="button" aria-label="Close navigation menu" onClick={closeMenu} tabIndex={-1} />}
    </>
  );
}
