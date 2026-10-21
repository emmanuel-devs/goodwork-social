import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import SiteMenu from "../../SiteMenu";
import MotionEnhancer from "../../MotionEnhancer";
import { notFound } from "next/navigation";
import { caseStudies, type CaseStudySlug } from "../projects";

const booking = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || "/contact#enquiry";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = caseStudies[params.slug as CaseStudySlug];
  if (!project) return { title: "Selected Work | Goodwork Social" };
  return {
    title: project.name + " | Selected Work",
    description: project.summary,
    alternates: { canonical: "/work/" + params.slug },
    openGraph: { title: project.name + " | Goodwork Social", description: project.summary, images: [project.image] }
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = caseStudies[params.slug as CaseStudySlug];
  if (!project) notFound();

  return <main id="top" tabIndex={-1} className={"inner-page case-study-page " + project.tone} style={{ "--case-accent": project.accent, "--case-surface": project.surface } as CSSProperties}>
    <MotionEnhancer />
    <header className="site-header shell">
      <Link href="/" className="brand" aria-label="Goodwork Social home"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></Link>
      <SiteMenu />
      <a className="header-cta" href={booking}>Book a conversation <ArrowUpRight size={15}/></a>
    </header>

    <section className="case-hero shell">
      <div className="case-breadcrumb"><Link href="/work"><ArrowLeft size={14}/> Selected work</Link><span>{project.number} / 03</span></div>
      <div className="case-hero-copy"><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><p className="case-intro">{project.summary}</p></div>
      <div className="case-hero-image"><img src={project.image} alt={project.alt} fetchPriority="high"/><span className="case-image-stamp">GOODWORK / CREATIVE DIRECTION<br/>{project.category}</span></div>
      <div className="case-meta-strip"><span>CREATIVE DIRECTION</span><span>CONTENT STRATEGY</span><span>CAMPAIGN SYSTEM</span><span>CONTENT & CAMPAIGN DIRECTION</span></div>
    </section>

    <section className="case-thinking shell"><div className="case-section-marker"><span>01</span><span>THE BRIEF</span></div><div className="case-thinking-grid"><h2>What needs<br/>to <em>change?</em></h2><div className="case-thinking-copy"><p className="case-lead">{project.challenge}</p><div className="case-rule"/><p>{project.direction}</p></div></div></section>

    <section className="case-art-direction"><div className="shell case-art-grid"><div className="case-art-copy"><p className="eyebrow">The visual direction</p><h2>Make it feel<br/><em>like them.</em></h2><p>{project.art}</p><div className="case-art-tags"><span>ART DIRECTION</span><span>VISUAL RHYTHM</span><span>PLATFORM-NATIVE</span></div></div><div className="case-gallery">{project.gallery.map((item, index) => <figure className={"case-gallery-item case-gallery-item-" + (index + 1)} key={item[2]}><img src={item[0]} alt={item[1]} loading="lazy"/><figcaption><span>{item[2]}</span><span>0{index + 1}</span></figcaption></figure>)}</div></div></section>

    <section className="case-system shell"><div className="case-section-marker"><span>02</span><span>THE CONTENT PLAN</span></div><div className="case-system-heading"><h2>One clear idea.<br/><em>More ways to tell it.</em></h2><p>These are repeatable themes the brand can use without every post looking or sounding the same.</p></div><div className="case-pillar-grid">{project.pillars.map((item) => <article key={item[0]} className="case-pillar"><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div><div className="case-format-wrap"><p className="eyebrow">Ways to bring it to life</p><div className="case-format-list">{project.formats.map((format, index) => <div key={format}><span>0{index + 1}</span><p>{format}</p><ArrowUpRight size={16}/></div>)}</div></div></section>

    <section className="case-sample"><div className="shell case-sample-grid"><div className="case-sample-visual"><img src={project.gallery[1][0]} alt={project.gallery[1][1]} loading="lazy"/><span className="case-sample-label">CREATIVE DIRECTION</span><div className="case-sample-overprint"><span>GOODWORK SOCIAL</span><p>{project.sample}</p></div></div><div className="case-sample-copy"><p className="eyebrow">A creative direction</p><h2>{project.sample}</h2><p>{project.sampleText}</p><div className="case-sample-caption"><span>FORMAT / SHORT-FORM STORY</span><span>ROLE / BUILD RECOGNITION</span></div></div></div></section>

    <section className="case-close shell"><div><p className="eyebrow">The point of the work</p><h2>Specific to the business.<br/><em>Clear in every detail.</em></h2><p>This direction shows how one clear idea can guide the look, tone and rhythm of a brand’s social content.</p></div><div className="case-close-actions"><a className="button-primary" href={booking}>Build a story like this <MoveUpRight size={16}/></a><Link className="text-link" href="/work">Explore the other projects <ArrowRight size={15}/></Link></div></section>

    <footer className="site-footer"><div className="shell footer-main"><Link href="/" className="brand footer-brand"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></Link><p>Thoughtful social for businesses doing good work.</p><div className="footer-links"><Link href="/services">Services</Link><Link href="/work">Selected work</Link><Link href="/about">Our approach</Link><Link href="/#faq">FAQs</Link><Link href="/contact">Contact</Link><a href={booking}>Get in touch ↗</a></div></div><div className="shell footer-bottom"><span>GOODWORK SOCIAL STUDIO</span><span>INDEPENDENT CREATIVE PARTNER</span><span>STRATEGY · CONTENT · COMMUNITY</span></div></footer>
  </main>;
}
