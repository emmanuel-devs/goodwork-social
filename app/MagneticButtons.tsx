"use client";

import { useEffect } from "react";

const SELECTOR = ".header-cta, .button-primary, .button-light";

export default function MagneticButtons() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const buttons = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const cleanups: Array<() => void> = [];

    buttons.forEach((button) => {
      const move = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        const rect = button.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        button.style.setProperty("--magnetic-x", `${(x * 5).toFixed(2)}px`);
        button.style.setProperty("--magnetic-y", `${(y * 5).toFixed(2)}px`);
      };
      const reset = () => {
        button.style.setProperty("--magnetic-x", "0px");
        button.style.setProperty("--magnetic-y", "0px");
      };

      button.addEventListener("pointermove", move);
      button.addEventListener("pointerleave", reset);
      button.addEventListener("blur", reset);
      cleanups.push(() => {
        button.removeEventListener("pointermove", move);
        button.removeEventListener("pointerleave", reset);
        button.removeEventListener("blur", reset);
        button.style.removeProperty("--magnetic-x");
        button.style.removeProperty("--magnetic-y");
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
