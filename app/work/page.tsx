import type { Metadata } from "next";
import SiteMenu from "../SiteMenu";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, MoveUpRight } from "lucide-react";
import MotionEnhancer from "../MotionEnhancer";
import WorkPreviewEnhancer from "../WorkPreviewEnhancer";
import { caseStudyList } from "./projects";

const booking = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || "/contact#enquiry";

export const metadata: Metadata = {
  title: "Selected Work & Creative Case Studies",
  description: "Explore project studies across hospitality, wellbeing and independent makers, with the strategy and creative thinking behind each direction.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Work | Goodwork Social",
    description: "Different businesses, different stories. Explore the thinking behind Goodwork Social's creative work.",
    url: "/work",
    type: "website",
  },
};

const projects = caseStudyList;

export default function WorkPage() {
  return <main id="top" tabIndex={-1} className="inner-page work-page">
    <MotionEnhancer />
    <WorkPreviewEnhancer />
    <header className="site-header shell">
      <a href="/" className="brand" aria-label="Goodwork Social home"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></a>
      <SiteMenu />
      <a className="header-cta" href={booking}>Book a conversation <ArrowUpRight size={15}/></a>
      
    </header>

    <section className="work-hero shell">
      <div className="work-hero-topline"><span className="live-dot"/> SELECTED WORK <span className="work-hero-rule"/> STRATEGY / CONTENT / CAMPAIGNS</div>
      <div className="work-hero-grid">
        <div className="work-hero-copy"><p className="eyebrow">Every business has its own story.</p><h1>Different businesses.<br/><em>Different stories.</em></h1><p className="work-hero-intro">We start by paying attention. The details that make one business different should shape the way its story looks, sounds and shows up online.</p><a className="button-primary" href="#project-index">Explore the projects <ArrowDownRight size={17}/></a></div>
        <aside className="work-hero-note"><span className="micro-label">A NOTE ON THE WORK</span><p>These independent project studies show how we translate a business challenge into a distinct creative direction and content system. They are examples of our approach, not reported client engagements.</p><div className="work-hero-note-foot"><span>GOODWORK / STUDIO PRACTICE</span><span>PROJECT STUDIES</span></div></aside>
      </div>
      <div className="work-index-strip"><span>01 / HOSPITALITY</span><span>02 / WELLBEING</span><span>03 / INDEPENDENT MAKERS</span><span>ONE STUDIO, DISTINCT STORIES</span></div>
    </section>

    <section className="work-index shell" id="project-index">
      <div className="work-index-heading"><div><p className="eyebrow">A closer look</p><h2>Good work starts<br/>with <em>good questions.</em></h2></div><p>Three different worlds, three different content challenges. Explore the thinking behind each one.</p></div>
      <div className="work-project-list" aria-label="Selected projects">
        {projects.map((project) => <a className={"work-project-card " + project.tone} href={"/work/"+project.id} key={project.id}>
          <div className="work-project-image"><img src={project.image} alt={project.alt} loading="lazy"/><span className="work-project-number">{project.number} / 03</span><span className="work-project-open"><ArrowUpRight size={18}/></span></div>
          <div className="work-project-copy"><span className="work-project-category">{project.category}</span><h3>{project.name}</h3><p className="work-project-descriptor">{project.descriptor}</p><p className="work-project-summary">{project.summary}</p><span className="work-project-link">Open case study <ArrowRight size={15}/></span></div>
        </a>)}
      </div>
    </section>

    {projects.map((project) => <section className={"work-case-section " + project.tone} id={project.id} key={project.id}>
      <div className="shell work-case-shell">
        <div className="work-case-topline"><span>{project.number} / CASE NOTES</span><span>{project.category}</span></div>
        <div className="work-case-grid">
          <div className="work-case-copy"><p className="eyebrow">The thinking behind it</p><h2>{project.descriptor}</h2><p className="work-case-summary">{project.summary}</p><div className="work-case-rule"/><div className="work-case-block"><span className="micro-label">THE CHALLENGE</span><p>{project.challenge}</p></div><div className="work-case-block"><span className="micro-label">THE CREATIVE DIRECTION</span><p>{project.direction}</p></div></div>
          <div className="work-case-visual"><img src={project.image} alt={project.alt} loading="lazy"/><div className="work-case-caption"><span>CREATIVE NOTE / {project.number}</span><p>{project.note}</p></div></div>
        </div>
        <div className="work-case-bottom"><div><span className="micro-label">CONTENT SYSTEM</span><ul>{project.formats.map((format) => <li key={format}><Check size={14}/>{format}</li>)}</ul></div><a className="text-link" href={booking}>Build a story for your business <MoveUpRight size={15}/></a></div>
      </div>
    </section>)}

    <section className="work-end shell"><div className="work-end-card"><div className="contact-label"><span className="live-dot"/> YOUR BUSINESS IS ITS OWN STORY</div><div className="work-end-grid"><h2>Let’s find<br/><em>your point of view.</em></h2><div><p>Tell us what you do, who you want to reach and what you want people to remember. We’ll find a useful place to begin.</p><a className="button-primary" href={booking}>Start a conversation <ArrowUpRight size={17}/></a><span className="contact-small">GOOD THINKING FIRST. GOOD CONTENT NEXT.</span></div></div></div></section>

    <footer className="site-footer"><div className="shell footer-main"><a href="/" className="brand footer-brand"><span className="brand-mark">gw<span>•</span></span><span className="brand-name">goodwork<span>social studio</span></span></a><p>Thoughtful social for businesses doing good work.</p><div className="footer-links"><a href="/services">Services</a><a href="/work">Selected work</a><a href="/about">Our approach</a><a href="/#faq">FAQs</a><a href="/contact">Contact</a><a href={booking}>Get in touch ↗</a></div></div><div className="shell footer-bottom"><span>GOODWORK SOCIAL STUDIO</span><span>INDEPENDENT CREATIVE PARTNER</span><span>STRATEGY · CONTENT · COMMUNITY</span></div></footer>
  </main>;
}
