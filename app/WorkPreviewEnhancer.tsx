"use client";

import { useEffect, useRef } from "react";

export default function WorkPreviewEnhancer() {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    const previewImage = preview.querySelector("img");
    const previewLabel = preview.querySelector("[data-preview-label]");
    const cards = Array.from(document.querySelectorAll<HTMLAnchorElement>(".work-project-card"));
    if (!previewImage || !previewLabel || !cards.length) return;

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const placePreview = () => {
      frame = 0;
      const width = preview.offsetWidth || 250;
      const height = preview.offsetHeight || 190;
      const left = Math.max(16, Math.min(pointerX + 24, window.innerWidth - width - 16));
      const top = Math.max(16, Math.min(pointerY + 24, window.innerHeight - height - 16));
      preview.style.transform = `translate3d(${left}px, ${top}px, 0)`;
    };

    const onEnter = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLAnchorElement;
      const source = card.querySelector<HTMLImageElement>(".work-project-image img");
      const title = card.querySelector<HTMLElement>(".work-project-copy h3");
      if (!source || !title) return;

      previewImage.src = source.currentSrc || source.src;
      previewLabel.textContent = title.textContent || "Selected project";
      preview.classList.add("is-active");
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = requestAnimationFrame(placePreview);
    };

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = requestAnimationFrame(placePreview);
    };

    const onLeave = () => {
      preview.classList.remove("is-active");
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    cards.forEach((card) => {
      card.addEventListener("pointerenter", onEnter, { passive: true });
      card.addEventListener("pointermove", onMove, { passive: true });
      card.addEventListener("pointerleave", onLeave, { passive: true });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("pointerenter", onEnter);
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      });
      if (frame) cancelAnimationFrame(frame);
      preview.classList.remove("is-active");
    };
  }, []);

  return (
    <div ref={previewRef} className="work-cursor-preview" aria-hidden="true">
      <img src="" alt="" />
      <span data-preview-label>Selected project</span>
    </div>
  );
}
